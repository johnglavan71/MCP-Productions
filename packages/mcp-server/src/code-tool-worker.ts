// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { Test2w, ClientOptions } from 'test2w';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { Test2w } from "test2w";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: Test2w)`
    : `const run: (${functionSource.client}: Test2w) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.activity.delete',
    'client.activity.list',
    'client.activity.listContainers',
    'client.activity.listEvents',
    'client.activity.retrieveStats',
    'client.audit.export',
    'client.audit.listEvents',
    'client.audit.listUsers',
    'client.audit.retrieve',
    'client.auth.listProviders',
    'client.auth.login',
    'client.auth.logout',
    'client.auth.retrieveSession',
    'client.auth.ldap.create',
    'client.auth.ldap.delete',
    'client.auth.ldap.list',
    'client.auth.ldap.retrieve',
    'client.auth.ldap.test',
    'client.auth.ldap.update',
    'client.auth.oidc.callback',
    'client.auth.oidc.create',
    'client.auth.oidc.delete',
    'client.auth.oidc.list',
    'client.auth.oidc.retrieve',
    'client.auth.oidc.test',
    'client.auth.oidc.update',
    'client.auth.oidc.initiate.create',
    'client.auth.oidc.initiate.retrieve',
    'client.auth.settings.retrieve',
    'client.auth.settings.update',
    'client.autoUpdate.createContainer',
    'client.autoUpdate.deleteContainer',
    'client.autoUpdate.retrieve',
    'client.autoUpdate.retrieveContainer',
    'client.batch.create',
    'client.changelog.retrieve',
    'client.configSets.create',
    'client.configSets.delete',
    'client.configSets.list',
    'client.configSets.retrieve',
    'client.configSets.update',
    'client.containers.batchUpdate',
    'client.containers.batchUpdateStream',
    'client.containers.checkUpdates',
    'client.containers.create',
    'client.containers.delete',
    'client.containers.exec',
    'client.containers.inspect',
    'client.containers.list',
    'client.containers.listShells',
    'client.containers.listSizes',
    'client.containers.pause',
    'client.containers.rename',
    'client.containers.restart',
    'client.containers.retrieve',
    'client.containers.start',
    'client.containers.stop',
    'client.containers.top',
    'client.containers.unpause',
    'client.containers.update',
    'client.containers.pendingUpdates.delete',
    'client.containers.pendingUpdates.list',
    'client.containers.stats.list',
    'client.containers.stats.retrieve',
    'client.containers.files.chmod',
    'client.containers.files.create',
    'client.containers.files.delete',
    'client.containers.files.download',
    'client.containers.files.list',
    'client.containers.files.rename',
    'client.containers.files.upload',
    'client.containers.files.content.retrieve',
    'client.containers.files.content.update',
    'client.containers.logs.retrieve',
    'client.containers.logs.stream',
    'client.dashboard.preferences.create',
    'client.dashboard.preferences.retrieve',
    'client.dashboard.stats.retrieve',
    'client.dashboard.stats.stream',
    'client.dependencies.list',
    'client.environments.create',
    'client.environments.delete',
    'client.environments.detectSocket',
    'client.environments.list',
    'client.environments.retrieve',
    'client.environments.update',
    'client.environments.test.create',
    'client.environments.test.run',
    'client.environments.diskWarning.create',
    'client.environments.diskWarning.retrieve',
    'client.environments.imagePrune.create',
    'client.environments.imagePrune.retrieve',
    'client.environments.imagePrune.update',
    'client.environments.notifications.create',
    'client.environments.notifications.delete',
    'client.environments.notifications.list',
    'client.environments.notifications.retrieve',
    'client.environments.notifications.update',
    'client.environments.timezone.retrieve',
    'client.environments.timezone.update',
    'client.environments.updateCheck.retrieve',
    'client.environments.updateCheck.run',
    'client.events.list',
    'client.git.createPreviewEnv',
    'client.git.credentials.create',
    'client.git.credentials.delete',
    'client.git.credentials.list',
    'client.git.credentials.retrieve',
    'client.git.credentials.update',
    'client.git.repositories.create',
    'client.git.repositories.delete',
    'client.git.repositories.deploy',
    'client.git.repositories.list',
    'client.git.repositories.retrieve',
    'client.git.repositories.update',
    'client.git.repositories.test.create',
    'client.git.repositories.test.run',
    'client.git.repositories.sync.create',
    'client.git.repositories.sync.retrieve',
    'client.git.stacks.create',
    'client.git.stacks.delete',
    'client.git.stacks.deploy',
    'client.git.stacks.deployStream',
    'client.git.stacks.list',
    'client.git.stacks.retrieve',
    'client.git.stacks.sync',
    'client.git.stacks.test',
    'client.git.stacks.update',
    'client.git.stacks.envFiles.create',
    'client.git.stacks.envFiles.list',
    'client.git.stacks.webhook.create',
    'client.git.stacks.webhook.retrieve',
    'client.git.webhook.retrieve',
    'client.git.webhook.update',
    'client.hawser.connect.create',
    'client.hawser.connect.retrieve',
    'client.hawser.tokens.create',
    'client.hawser.tokens.delete',
    'client.hawser.tokens.list',
    'client.health.check',
    'client.health.checkDatabase',
    'client.host.retrieve',
    'client.images.delete',
    'client.images.export',
    'client.images.history',
    'client.images.list',
    'client.images.pull',
    'client.images.push',
    'client.images.tag',
    'client.images.scan.create',
    'client.images.scan.retrieve',
    'client.legal.retrieveLicense',
    'client.legal.retrievePrivacy',
    'client.license.create',
    'client.license.delete',
    'client.license.retrieve',
    'client.logs.retrieveMerged',
    'client.metrics.retrieve',
    'client.networks.connect',
    'client.networks.create',
    'client.networks.delete',
    'client.networks.disconnect',
    'client.networks.inspect',
    'client.networks.list',
    'client.networks.retrieve',
    'client.notifications.create',
    'client.notifications.delete',
    'client.notifications.list',
    'client.notifications.retrieve',
    'client.notifications.update',
    'client.notifications.test.create',
    'client.notifications.test.run',
    'client.notifications.triggerTest.create',
    'client.notifications.triggerTest.retrieve',
    'client.preferences.favoriteGroups.create',
    'client.preferences.favoriteGroups.list',
    'client.preferences.favorites.create',
    'client.preferences.favorites.list',
    'client.preferences.grid.create',
    'client.preferences.grid.delete',
    'client.preferences.grid.retrieve',
    'client.profile.retrieve',
    'client.profile.update',
    'client.profile.avatar.delete',
    'client.profile.avatar.upload',
    'client.profile.preferences.retrieve',
    'client.profile.preferences.update',
    'client.prune.pruneAll',
    'client.prune.pruneContainers',
    'client.prune.pruneImages',
    'client.prune.pruneNetworks',
    'client.prune.pruneVolumes',
    'client.roles.create',
    'client.roles.delete',
    'client.roles.list',
    'client.roles.retrieve',
    'client.roles.update',
    'client.schedules.delete',
    'client.schedules.list',
    'client.schedules.run',
    'client.schedules.stream',
    'client.schedules.toggle',
    'client.schedules.executions.delete',
    'client.schedules.executions.list',
    'client.schedules.executions.retrieve',
    'client.schedules.settings.retrieve',
    'client.schedules.settings.update',
    'client.schedules.system.toggle',
    'client.selfUpdate.checkStatus',
    'client.selfUpdate.getProgress',
    'client.selfUpdate.initiate',
    'client.settings.retrieveTheme',
    'client.settings.general.create',
    'client.settings.general.retrieve',
    'client.settings.scanner.create',
    'client.settings.scanner.delete',
    'client.settings.scanner.retrieve',
    'client.stacks.adopt',
    'client.stacks.checkPathChange',
    'client.stacks.create',
    'client.stacks.delete',
    'client.stacks.down',
    'client.stacks.getBasePath',
    'client.stacks.getDefaultPath',
    'client.stacks.getPathHints',
    'client.stacks.getSources',
    'client.stacks.list',
    'client.stacks.relocate',
    'client.stacks.restart',
    'client.stacks.scan',
    'client.stacks.start',
    'client.stacks.stop',
    'client.stacks.validatePath',
    'client.stacks.compose.get',
    'client.stacks.compose.update',
    'client.stacks.env.get',
    'client.stacks.env.update',
    'client.stacks.env.validate',
    'client.stacks.env.raw.get',
    'client.stacks.env.raw.update',
    'client.system.retrieve',
    'client.system.disk.retrieve',
    'client.system.files.list',
    'client.system.files.content.retrieve',
    'client.users.create',
    'client.users.delete',
    'client.users.list',
    'client.users.retrieve',
    'client.users.update',
    'client.users.mfa.create',
    'client.users.mfa.delete',
    'client.users.roles.create',
    'client.users.roles.delete',
    'client.users.roles.list',
    'client.volumes.clone',
    'client.volumes.create',
    'client.volumes.delete',
    'client.volumes.export',
    'client.volumes.inspect',
    'client.volumes.list',
    'client.volumes.retrieve',
    'client.volumes.browse.content',
    'client.volumes.browse.release',
    'client.volumes.browse.retrieve',
    'client.registries.create',
    'client.registries.delete',
    'client.registries.deleteImage',
    'client.registries.list',
    'client.registries.listCatalog',
    'client.registries.listTags',
    'client.registries.retrieve',
    'client.registries.search',
    'client.registries.setDefault',
    'client.registries.update',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const cause = error.cause instanceof Error ? `: ${error.cause.message}` : '';
  const message = error.name ? `${error.name}: ${error.message}${cause}` : `${error.message}${cause}`;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Test2w({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
