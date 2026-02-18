// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ComposeAPI from './compose';
import { Compose, ComposeGetParams, ComposeUpdateParams } from './compose';
import * as EnvAPI from './env/env';
import { Env, EnvGetParams, EnvUpdateParams, EnvValidateParams } from './env/env';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stacks extends APIResource {
  compose: ComposeAPI.Compose = new ComposeAPI.Compose(this._client);
  env: EnvAPI.Env = new EnvAPI.Env(this._client);

  /**
   * POST /api/stacks
   */
  create(params: StackCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post('/api/stacks', {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks
   */
  list(query: StackListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/stacks', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/stacks/{name}
   */
  delete(
    name: string,
    params: StackDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, force } = params ?? {};
    return this._client.delete(path`/api/stacks/${name}`, {
      query: { env, force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/adopt
   */
  adopt(body: StackAdoptParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/stacks/adopt', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/{name}/check-path-change
   */
  checkPathChange(
    name: string,
    params: StackCheckPathChangeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/stacks/${name}/check-path-change`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/{name}/down
   */
  down(
    name: string,
    params: StackDownParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/stacks/${name}/down`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks/base-path
   */
  getBasePath(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/stacks/base-path', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks/default-path
   */
  getDefaultPath(
    query: StackGetDefaultPathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/stacks/default-path', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks/path-hints
   */
  getPathHints(
    query: StackGetPathHintsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/stacks/path-hints', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks/sources
   */
  getSources(
    query: StackGetSourcesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/stacks/sources', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/{name}/relocate
   */
  relocate(
    name: string,
    params: StackRelocateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/stacks/${name}/relocate`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/{name}/restart
   */
  restart(
    name: string,
    params: StackRestartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/stacks/${name}/restart`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/scan
   */
  scan(body: StackScanParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/stacks/scan', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/{name}/start
   */
  start(
    name: string,
    params: StackStartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/stacks/${name}/start`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/{name}/stop
   */
  stop(
    name: string,
    params: StackStopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/stacks/${name}/stop`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/validate-path
   */
  validatePath(
    body: StackValidatePathParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/stacks/validate-path', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StackCreateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  compose?: string;

  /**
   * Body param
   */
  composePath?: string;

  /**
   * Body param
   */
  envPath?: string;

  /**
   * Body param
   */
  envVars?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  rawEnvContent?: string;

  /**
   * Body param
   */
  start?: string;
}

export interface StackListParams {
  env?: string;
}

export interface StackDeleteParams {
  env?: string;

  force?: string;
}

export interface StackAdoptParams {
  environmentId?: string;

  stacks?: string;
}

export interface StackCheckPathChangeParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  newComposePath?: string;
}

export interface StackDownParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  removeVolumes?: string;
}

export interface StackGetDefaultPathParams {
  env?: string;

  location?: string;

  name?: string;
}

export interface StackGetPathHintsParams {
  env?: string;

  name?: string;
}

export interface StackGetSourcesParams {
  env?: string;
}

export interface StackRelocateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  newComposePath?: string;

  /**
   * Body param
   */
  newEnvPath?: string;

  /**
   * Body param
   */
  oldDir?: string;
}

export interface StackRestartParams {
  env?: string;
}

export interface StackScanParams {
  path?: string;
}

export interface StackStartParams {
  env?: string;
}

export interface StackStopParams {
  env?: string;
}

export interface StackValidatePathParams {
  path?: string;
}

Stacks.Compose = Compose;
Stacks.Env = Env;

export declare namespace Stacks {
  export {
    type StackCreateParams as StackCreateParams,
    type StackListParams as StackListParams,
    type StackDeleteParams as StackDeleteParams,
    type StackAdoptParams as StackAdoptParams,
    type StackCheckPathChangeParams as StackCheckPathChangeParams,
    type StackDownParams as StackDownParams,
    type StackGetDefaultPathParams as StackGetDefaultPathParams,
    type StackGetPathHintsParams as StackGetPathHintsParams,
    type StackGetSourcesParams as StackGetSourcesParams,
    type StackRelocateParams as StackRelocateParams,
    type StackRestartParams as StackRestartParams,
    type StackScanParams as StackScanParams,
    type StackStartParams as StackStartParams,
    type StackStopParams as StackStopParams,
    type StackValidatePathParams as StackValidatePathParams,
  };

  export {
    Compose as Compose,
    type ComposeUpdateParams as ComposeUpdateParams,
    type ComposeGetParams as ComposeGetParams,
  };

  export {
    Env as Env,
    type EnvUpdateParams as EnvUpdateParams,
    type EnvGetParams as EnvGetParams,
    type EnvValidateParams as EnvValidateParams,
  };
}
