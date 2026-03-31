// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/api/activity',
    httpMethod: 'get',
    summary: 'GET /api/activity',
    description: 'GET /api/activity',
    stainlessPath: '(resource) activity > (method) list',
    qualified: 'client.activity.list',
    params: [
      'actions?: string;',
      'containerId?: string;',
      'containerName?: string;',
      'environmentId?: string;',
      'fromDate?: string;',
      'labels?: string;',
      'limit?: string;',
      'offset?: string;',
      'toDate?: string;',
    ],
    markdown:
      "## list\n\n`client.activity.list(actions?: string, containerId?: string, containerName?: string, environmentId?: string, fromDate?: string, labels?: string, limit?: string, offset?: string, toDate?: string): void`\n\n**get** `/api/activity`\n\nGET /api/activity\n\n### Parameters\n\n- `actions?: string`\n\n- `containerId?: string`\n\n- `containerName?: string`\n\n- `environmentId?: string`\n\n- `fromDate?: string`\n\n- `labels?: string`\n\n- `limit?: string`\n\n- `offset?: string`\n\n- `toDate?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.activity.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/activity',
    httpMethod: 'delete',
    summary: 'DELETE /api/activity',
    description: 'DELETE /api/activity',
    stainlessPath: '(resource) activity > (method) delete',
    qualified: 'client.activity.delete',
    markdown:
      "## delete\n\n`client.activity.delete(): void`\n\n**delete** `/api/activity`\n\nDELETE /api/activity\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.activity.delete()\n```",
  },
  {
    name: 'list_containers',
    endpoint: '/api/activity/containers',
    httpMethod: 'get',
    summary: 'GET /api/activity/containers',
    description: 'GET /api/activity/containers',
    stainlessPath: '(resource) activity > (method) list_containers',
    qualified: 'client.activity.listContainers',
    params: ['environment_id?: string;'],
    markdown:
      "## list_containers\n\n`client.activity.listContainers(environment_id?: string): void`\n\n**get** `/api/activity/containers`\n\nGET /api/activity/containers\n\n### Parameters\n\n- `environment_id?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.activity.listContainers()\n```",
  },
  {
    name: 'list_events',
    endpoint: '/api/activity/events',
    httpMethod: 'get',
    summary: 'GET /api/activity/events',
    description: 'GET /api/activity/events',
    stainlessPath: '(resource) activity > (method) list_events',
    qualified: 'client.activity.listEvents',
    markdown:
      "## list_events\n\n`client.activity.listEvents(): void`\n\n**get** `/api/activity/events`\n\nGET /api/activity/events\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.activity.listEvents()\n```",
  },
  {
    name: 'retrieve_stats',
    endpoint: '/api/activity/stats',
    httpMethod: 'get',
    summary: 'GET /api/activity/stats',
    description: 'GET /api/activity/stats',
    stainlessPath: '(resource) activity > (method) retrieve_stats',
    qualified: 'client.activity.retrieveStats',
    params: ['environment_id?: string;'],
    markdown:
      "## retrieve_stats\n\n`client.activity.retrieveStats(environment_id?: string): void`\n\n**get** `/api/activity/stats`\n\nGET /api/activity/stats\n\n### Parameters\n\n- `environment_id?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.activity.retrieveStats()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/audit',
    httpMethod: 'get',
    summary: 'GET /api/audit',
    description: 'GET /api/audit',
    stainlessPath: '(resource) audit > (method) retrieve',
    qualified: 'client.audit.retrieve',
    params: [
      'action?: string;',
      'actions?: string;',
      'entityType?: string;',
      'entityTypes?: string;',
      'environmentId?: string;',
      'fromDate?: string;',
      'labels?: string;',
      'limit?: string;',
      'offset?: string;',
      'toDate?: string;',
      'username?: string;',
      'usernames?: string;',
    ],
    markdown:
      "## retrieve\n\n`client.audit.retrieve(action?: string, actions?: string, entityType?: string, entityTypes?: string, environmentId?: string, fromDate?: string, labels?: string, limit?: string, offset?: string, toDate?: string, username?: string, usernames?: string): void`\n\n**get** `/api/audit`\n\nGET /api/audit\n\n### Parameters\n\n- `action?: string`\n\n- `actions?: string`\n\n- `entityType?: string`\n\n- `entityTypes?: string`\n\n- `environmentId?: string`\n\n- `fromDate?: string`\n\n- `labels?: string`\n\n- `limit?: string`\n\n- `offset?: string`\n\n- `toDate?: string`\n\n- `username?: string`\n\n- `usernames?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.audit.retrieve()\n```",
  },
  {
    name: 'export',
    endpoint: '/api/audit/export',
    httpMethod: 'get',
    summary: 'GET /api/audit/export',
    description: 'GET /api/audit/export',
    stainlessPath: '(resource) audit > (method) export',
    qualified: 'client.audit.export',
    params: [
      'action?: string;',
      'entityType?: string;',
      'environmentId?: string;',
      'format?: string;',
      'fromDate?: string;',
      'toDate?: string;',
      'username?: string;',
    ],
    markdown:
      "## export\n\n`client.audit.export(action?: string, entityType?: string, environmentId?: string, format?: string, fromDate?: string, toDate?: string, username?: string): void`\n\n**get** `/api/audit/export`\n\nGET /api/audit/export\n\n### Parameters\n\n- `action?: string`\n\n- `entityType?: string`\n\n- `environmentId?: string`\n\n- `format?: string`\n\n- `fromDate?: string`\n\n- `toDate?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.audit.export()\n```",
  },
  {
    name: 'list_events',
    endpoint: '/api/audit/events',
    httpMethod: 'get',
    summary: 'GET /api/audit/events',
    description: 'GET /api/audit/events',
    stainlessPath: '(resource) audit > (method) list_events',
    qualified: 'client.audit.listEvents',
    markdown:
      "## list_events\n\n`client.audit.listEvents(): void`\n\n**get** `/api/audit/events`\n\nGET /api/audit/events\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.audit.listEvents()\n```",
  },
  {
    name: 'list_users',
    endpoint: '/api/audit/users',
    httpMethod: 'get',
    summary: 'GET /api/audit/users',
    description: 'GET /api/audit/users',
    stainlessPath: '(resource) audit > (method) list_users',
    qualified: 'client.audit.listUsers',
    markdown:
      "## list_users\n\n`client.audit.listUsers(): void`\n\n**get** `/api/audit/users`\n\nGET /api/audit/users\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.audit.listUsers()\n```",
  },
  {
    name: 'list_providers',
    endpoint: '/api/auth/providers',
    httpMethod: 'get',
    summary: 'GET /api/auth/providers',
    description: 'GET /api/auth/providers',
    stainlessPath: '(resource) auth > (method) list_providers',
    qualified: 'client.auth.listProviders',
    markdown:
      "## list_providers\n\n`client.auth.listProviders(): void`\n\n**get** `/api/auth/providers`\n\nGET /api/auth/providers\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.listProviders()\n```",
  },
  {
    name: 'login',
    endpoint: '/api/auth/login',
    httpMethod: 'post',
    summary: 'POST /api/auth/login',
    description: 'POST /api/auth/login',
    stainlessPath: '(resource) auth > (method) login',
    qualified: 'client.auth.login',
    params: [
      'mfaToken?: string;',
      'password?: string;',
      "provider = 'local'?: string;",
      'username?: string;',
    ],
    markdown:
      "## login\n\n`client.auth.login(mfaToken?: string, password?: string, provider = 'local'?: string, username?: string): void`\n\n**post** `/api/auth/login`\n\nPOST /api/auth/login\n\n### Parameters\n\n- `mfaToken?: string`\n\n- `password?: string`\n\n- `provider = 'local'?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.login()\n```",
  },
  {
    name: 'logout',
    endpoint: '/api/auth/logout',
    httpMethod: 'post',
    summary: 'POST /api/auth/logout',
    description: 'POST /api/auth/logout',
    stainlessPath: '(resource) auth > (method) logout',
    qualified: 'client.auth.logout',
    markdown:
      "## logout\n\n`client.auth.logout(): void`\n\n**post** `/api/auth/logout`\n\nPOST /api/auth/logout\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.logout()\n```",
  },
  {
    name: 'retrieve_session',
    endpoint: '/api/auth/session',
    httpMethod: 'get',
    summary: 'GET /api/auth/session',
    description: 'GET /api/auth/session',
    stainlessPath: '(resource) auth > (method) retrieve_session',
    qualified: 'client.auth.retrieveSession',
    markdown:
      "## retrieve_session\n\n`client.auth.retrieveSession(): void`\n\n**get** `/api/auth/session`\n\nGET /api/auth/session\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.retrieveSession()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/auth/ldap',
    httpMethod: 'post',
    summary: 'POST /api/auth/ldap',
    description: 'POST /api/auth/ldap',
    stainlessPath: '(resource) auth.ldap > (method) create',
    qualified: 'client.auth.ldap.create',
    params: [
      'adminGroup?: string;',
      'baseDn?: string;',
      'bindDn?: string;',
      'bindPassword?: string;',
      'displayNameAttribute?: string;',
      'emailAttribute?: string;',
      'enabled?: string;',
      'groupBaseDn?: string;',
      'groupFilter?: string;',
      'name?: string;',
      'roleMappings?: string;',
      'serverUrl?: string;',
      'tlsCa?: string;',
      'tlsEnabled?: string;',
      'userFilter?: string;',
      'usernameAttribute?: string;',
    ],
    markdown:
      "## create\n\n`client.auth.ldap.create(adminGroup?: string, baseDn?: string, bindDn?: string, bindPassword?: string, displayNameAttribute?: string, emailAttribute?: string, enabled?: string, groupBaseDn?: string, groupFilter?: string, name?: string, roleMappings?: string, serverUrl?: string, tlsCa?: string, tlsEnabled?: string, userFilter?: string, usernameAttribute?: string): void`\n\n**post** `/api/auth/ldap`\n\nPOST /api/auth/ldap\n\n### Parameters\n\n- `adminGroup?: string`\n\n- `baseDn?: string`\n\n- `bindDn?: string`\n\n- `bindPassword?: string`\n\n- `displayNameAttribute?: string`\n\n- `emailAttribute?: string`\n\n- `enabled?: string`\n\n- `groupBaseDn?: string`\n\n- `groupFilter?: string`\n\n- `name?: string`\n\n- `roleMappings?: string`\n\n- `serverUrl?: string`\n\n- `tlsCa?: string`\n\n- `tlsEnabled?: string`\n\n- `userFilter?: string`\n\n- `usernameAttribute?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.ldap.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/auth/ldap/{id}',
    httpMethod: 'get',
    summary: 'GET /api/auth/ldap/{id}',
    description: 'GET /api/auth/ldap/{id}',
    stainlessPath: '(resource) auth.ldap > (method) retrieve',
    qualified: 'client.auth.ldap.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.auth.ldap.retrieve(id: string): void`\n\n**get** `/api/auth/ldap/{id}`\n\nGET /api/auth/ldap/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.ldap.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/auth/ldap/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/auth/ldap/{id}',
    description: 'PUT /api/auth/ldap/{id}',
    stainlessPath: '(resource) auth.ldap > (method) update',
    qualified: 'client.auth.ldap.update',
    params: [
      'id: string;',
      'adminGroup?: string;',
      'baseDn?: string;',
      'bindDn?: string;',
      'bindPassword?: string;',
      'displayNameAttribute?: string;',
      'emailAttribute?: string;',
      'enabled?: string;',
      'groupBaseDn?: string;',
      'groupFilter?: string;',
      'name?: string;',
      'roleMappings?: string;',
      'serverUrl?: string;',
      'tlsCa?: string;',
      'tlsEnabled?: string;',
      'userFilter?: string;',
      'usernameAttribute?: string;',
    ],
    markdown:
      "## update\n\n`client.auth.ldap.update(id: string, adminGroup?: string, baseDn?: string, bindDn?: string, bindPassword?: string, displayNameAttribute?: string, emailAttribute?: string, enabled?: string, groupBaseDn?: string, groupFilter?: string, name?: string, roleMappings?: string, serverUrl?: string, tlsCa?: string, tlsEnabled?: string, userFilter?: string, usernameAttribute?: string): void`\n\n**put** `/api/auth/ldap/{id}`\n\nPUT /api/auth/ldap/{id}\n\n### Parameters\n\n- `id: string`\n\n- `adminGroup?: string`\n\n- `baseDn?: string`\n\n- `bindDn?: string`\n\n- `bindPassword?: string`\n\n- `displayNameAttribute?: string`\n\n- `emailAttribute?: string`\n\n- `enabled?: string`\n\n- `groupBaseDn?: string`\n\n- `groupFilter?: string`\n\n- `name?: string`\n\n- `roleMappings?: string`\n\n- `serverUrl?: string`\n\n- `tlsCa?: string`\n\n- `tlsEnabled?: string`\n\n- `userFilter?: string`\n\n- `usernameAttribute?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.ldap.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/auth/ldap',
    httpMethod: 'get',
    summary: 'GET /api/auth/ldap',
    description: 'GET /api/auth/ldap',
    stainlessPath: '(resource) auth.ldap > (method) list',
    qualified: 'client.auth.ldap.list',
    markdown:
      "## list\n\n`client.auth.ldap.list(): void`\n\n**get** `/api/auth/ldap`\n\nGET /api/auth/ldap\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.ldap.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/auth/ldap/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/auth/ldap/{id}',
    description: 'DELETE /api/auth/ldap/{id}',
    stainlessPath: '(resource) auth.ldap > (method) delete',
    qualified: 'client.auth.ldap.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.auth.ldap.delete(id: string): void`\n\n**delete** `/api/auth/ldap/{id}`\n\nDELETE /api/auth/ldap/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.ldap.delete('id')\n```",
  },
  {
    name: 'test',
    endpoint: '/api/auth/ldap/{id}/test',
    httpMethod: 'post',
    summary: 'POST /api/auth/ldap/{id}/test',
    description: 'POST /api/auth/ldap/{id}/test',
    stainlessPath: '(resource) auth.ldap > (method) test',
    qualified: 'client.auth.ldap.test',
    params: ['id: string;'],
    markdown:
      "## test\n\n`client.auth.ldap.test(id: string): void`\n\n**post** `/api/auth/ldap/{id}/test`\n\nPOST /api/auth/ldap/{id}/test\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.ldap.test('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/auth/oidc',
    httpMethod: 'post',
    summary: 'POST /api/auth/oidc',
    description: 'POST /api/auth/oidc',
    stainlessPath: '(resource) auth.oidc > (method) create',
    qualified: 'client.auth.oidc.create',
    params: [
      'adminClaim?: string;',
      'adminValue?: string;',
      'clientId?: string;',
      'clientSecret?: string;',
      'displayNameClaim?: string;',
      'emailClaim?: string;',
      'enabled?: string;',
      'issuerUrl?: string;',
      'name?: string;',
      'redirectUri?: string;',
      'roleMappings?: string;',
      'roleMappingsClaim?: string;',
      'scopes?: string;',
      'usernameClaim?: string;',
    ],
    markdown:
      "## create\n\n`client.auth.oidc.create(adminClaim?: string, adminValue?: string, clientId?: string, clientSecret?: string, displayNameClaim?: string, emailClaim?: string, enabled?: string, issuerUrl?: string, name?: string, redirectUri?: string, roleMappings?: string, roleMappingsClaim?: string, scopes?: string, usernameClaim?: string): void`\n\n**post** `/api/auth/oidc`\n\nPOST /api/auth/oidc\n\n### Parameters\n\n- `adminClaim?: string`\n\n- `adminValue?: string`\n\n- `clientId?: string`\n\n- `clientSecret?: string`\n\n- `displayNameClaim?: string`\n\n- `emailClaim?: string`\n\n- `enabled?: string`\n\n- `issuerUrl?: string`\n\n- `name?: string`\n\n- `redirectUri?: string`\n\n- `roleMappings?: string`\n\n- `roleMappingsClaim?: string`\n\n- `scopes?: string`\n\n- `usernameClaim?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/auth/oidc/{id}',
    httpMethod: 'get',
    summary: 'GET /api/auth/oidc/{id}',
    description: 'GET /api/auth/oidc/{id}',
    stainlessPath: '(resource) auth.oidc > (method) retrieve',
    qualified: 'client.auth.oidc.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.auth.oidc.retrieve(id: string): void`\n\n**get** `/api/auth/oidc/{id}`\n\nGET /api/auth/oidc/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/auth/oidc/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/auth/oidc/{id}',
    description: 'PUT /api/auth/oidc/{id}',
    stainlessPath: '(resource) auth.oidc > (method) update',
    qualified: 'client.auth.oidc.update',
    params: [
      'id: string;',
      'adminClaim?: string;',
      'adminValue?: string;',
      'clientId?: string;',
      'clientSecret?: string;',
      'displayNameClaim?: string;',
      'emailClaim?: string;',
      'enabled?: string;',
      'issuerUrl?: string;',
      'name?: string;',
      'redirectUri?: string;',
      'roleMappings?: string;',
      'roleMappingsClaim?: string;',
      'scopes?: string;',
      'usernameClaim?: string;',
    ],
    markdown:
      "## update\n\n`client.auth.oidc.update(id: string, adminClaim?: string, adminValue?: string, clientId?: string, clientSecret?: string, displayNameClaim?: string, emailClaim?: string, enabled?: string, issuerUrl?: string, name?: string, redirectUri?: string, roleMappings?: string, roleMappingsClaim?: string, scopes?: string, usernameClaim?: string): void`\n\n**put** `/api/auth/oidc/{id}`\n\nPUT /api/auth/oidc/{id}\n\n### Parameters\n\n- `id: string`\n\n- `adminClaim?: string`\n\n- `adminValue?: string`\n\n- `clientId?: string`\n\n- `clientSecret?: string`\n\n- `displayNameClaim?: string`\n\n- `emailClaim?: string`\n\n- `enabled?: string`\n\n- `issuerUrl?: string`\n\n- `name?: string`\n\n- `redirectUri?: string`\n\n- `roleMappings?: string`\n\n- `roleMappingsClaim?: string`\n\n- `scopes?: string`\n\n- `usernameClaim?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/auth/oidc',
    httpMethod: 'get',
    summary: 'GET /api/auth/oidc',
    description: 'GET /api/auth/oidc',
    stainlessPath: '(resource) auth.oidc > (method) list',
    qualified: 'client.auth.oidc.list',
    markdown:
      "## list\n\n`client.auth.oidc.list(): void`\n\n**get** `/api/auth/oidc`\n\nGET /api/auth/oidc\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/auth/oidc/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/auth/oidc/{id}',
    description: 'DELETE /api/auth/oidc/{id}',
    stainlessPath: '(resource) auth.oidc > (method) delete',
    qualified: 'client.auth.oidc.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.auth.oidc.delete(id: string): void`\n\n**delete** `/api/auth/oidc/{id}`\n\nDELETE /api/auth/oidc/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.delete('id')\n```",
  },
  {
    name: 'callback',
    endpoint: '/api/auth/oidc/callback',
    httpMethod: 'get',
    summary: 'GET /api/auth/oidc/callback',
    description: 'GET /api/auth/oidc/callback',
    stainlessPath: '(resource) auth.oidc > (method) callback',
    qualified: 'client.auth.oidc.callback',
    params: ['code?: string;', 'error?: string;', 'error_description?: string;', 'state?: string;'],
    markdown:
      "## callback\n\n`client.auth.oidc.callback(code?: string, error?: string, error_description?: string, state?: string): void`\n\n**get** `/api/auth/oidc/callback`\n\nGET /api/auth/oidc/callback\n\n### Parameters\n\n- `code?: string`\n\n- `error?: string`\n\n- `error_description?: string`\n\n- `state?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.callback()\n```",
  },
  {
    name: 'test',
    endpoint: '/api/auth/oidc/{id}/test',
    httpMethod: 'post',
    summary: 'POST /api/auth/oidc/{id}/test',
    description: 'POST /api/auth/oidc/{id}/test',
    stainlessPath: '(resource) auth.oidc > (method) test',
    qualified: 'client.auth.oidc.test',
    params: ['id: string;'],
    markdown:
      "## test\n\n`client.auth.oidc.test(id: string): void`\n\n**post** `/api/auth/oidc/{id}/test`\n\nPOST /api/auth/oidc/{id}/test\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.test('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/auth/oidc/{id}/initiate',
    httpMethod: 'post',
    summary: 'POST /api/auth/oidc/{id}/initiate',
    description: 'POST /api/auth/oidc/{id}/initiate',
    stainlessPath: '(resource) auth.oidc.initiate > (method) create',
    qualified: 'client.auth.oidc.initiate.create',
    params: ['id: string;', 'redirect?: string;'],
    markdown:
      "## create\n\n`client.auth.oidc.initiate.create(id: string, redirect?: string): void`\n\n**post** `/api/auth/oidc/{id}/initiate`\n\nPOST /api/auth/oidc/{id}/initiate\n\n### Parameters\n\n- `id: string`\n\n- `redirect?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.initiate.create('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/auth/oidc/{id}/initiate',
    httpMethod: 'get',
    summary: 'GET /api/auth/oidc/{id}/initiate',
    description: 'GET /api/auth/oidc/{id}/initiate',
    stainlessPath: '(resource) auth.oidc.initiate > (method) retrieve',
    qualified: 'client.auth.oidc.initiate.retrieve',
    params: ['id: string;', 'redirect?: string;'],
    markdown:
      "## retrieve\n\n`client.auth.oidc.initiate.retrieve(id: string, redirect?: string): void`\n\n**get** `/api/auth/oidc/{id}/initiate`\n\nGET /api/auth/oidc/{id}/initiate\n\n### Parameters\n\n- `id: string`\n\n- `redirect?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.oidc.initiate.retrieve('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/auth/settings',
    httpMethod: 'get',
    summary: 'GET /api/auth/settings',
    description: 'GET /api/auth/settings',
    stainlessPath: '(resource) auth.settings > (method) retrieve',
    qualified: 'client.auth.settings.retrieve',
    markdown:
      "## retrieve\n\n`client.auth.settings.retrieve(): void`\n\n**get** `/api/auth/settings`\n\nGET /api/auth/settings\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.settings.retrieve()\n```",
  },
  {
    name: 'update',
    endpoint: '/api/auth/settings',
    httpMethod: 'put',
    summary: 'PUT /api/auth/settings',
    description: 'PUT /api/auth/settings',
    stainlessPath: '(resource) auth.settings > (method) update',
    qualified: 'client.auth.settings.update',
    params: ['authEnabled?: string;', 'sessionTimeout?: string;'],
    markdown:
      "## update\n\n`client.auth.settings.update(authEnabled?: string, sessionTimeout?: string): void`\n\n**put** `/api/auth/settings`\n\nPUT /api/auth/settings\n\n### Parameters\n\n- `authEnabled?: string`\n\n- `sessionTimeout?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.auth.settings.update()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/auto-update',
    httpMethod: 'get',
    summary: 'GET /api/auto-update',
    description: 'GET /api/auto-update',
    stainlessPath: '(resource) auto_update > (method) retrieve',
    qualified: 'client.autoUpdate.retrieve',
    params: ['env?: string;'],
    markdown:
      "## retrieve\n\n`client.autoUpdate.retrieve(env?: string): void`\n\n**get** `/api/auto-update`\n\nGET /api/auto-update\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.autoUpdate.retrieve()\n```",
  },
  {
    name: 'create_container',
    endpoint: '/api/auto-update/{containerName}',
    httpMethod: 'post',
    summary: 'POST /api/auto-update/{containerName}',
    description: 'POST /api/auto-update/{containerName}',
    stainlessPath: '(resource) auto_update > (method) create_container',
    qualified: 'client.autoUpdate.createContainer',
    params: [
      'containerName: string;',
      'env?: string;',
      'cron_expression?: string;',
      'cronExpression?: string;',
      'enabled?: string;',
      'vulnerability_criteria?: string;',
      'vulnerabilityCriteria?: string;',
    ],
    markdown:
      "## create_container\n\n`client.autoUpdate.createContainer(containerName: string, env?: string, cron_expression?: string, cronExpression?: string, enabled?: string, vulnerability_criteria?: string, vulnerabilityCriteria?: string): void`\n\n**post** `/api/auto-update/{containerName}`\n\nPOST /api/auto-update/{containerName}\n\n### Parameters\n\n- `containerName: string`\n\n- `env?: string`\n\n- `cron_expression?: string`\n\n- `cronExpression?: string`\n\n- `enabled?: string`\n\n- `vulnerability_criteria?: string`\n\n- `vulnerabilityCriteria?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.autoUpdate.createContainer('containerName')\n```",
  },
  {
    name: 'delete_container',
    endpoint: '/api/auto-update/{containerName}',
    httpMethod: 'delete',
    summary: 'DELETE /api/auto-update/{containerName}',
    description: 'DELETE /api/auto-update/{containerName}',
    stainlessPath: '(resource) auto_update > (method) delete_container',
    qualified: 'client.autoUpdate.deleteContainer',
    params: ['containerName: string;', 'env?: string;'],
    markdown:
      "## delete_container\n\n`client.autoUpdate.deleteContainer(containerName: string, env?: string): void`\n\n**delete** `/api/auto-update/{containerName}`\n\nDELETE /api/auto-update/{containerName}\n\n### Parameters\n\n- `containerName: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.autoUpdate.deleteContainer('containerName')\n```",
  },
  {
    name: 'retrieve_container',
    endpoint: '/api/auto-update/{containerName}',
    httpMethod: 'get',
    summary: 'GET /api/auto-update/{containerName}',
    description: 'GET /api/auto-update/{containerName}',
    stainlessPath: '(resource) auto_update > (method) retrieve_container',
    qualified: 'client.autoUpdate.retrieveContainer',
    params: ['containerName: string;', 'env?: string;'],
    markdown:
      "## retrieve_container\n\n`client.autoUpdate.retrieveContainer(containerName: string, env?: string): void`\n\n**get** `/api/auto-update/{containerName}`\n\nGET /api/auto-update/{containerName}\n\n### Parameters\n\n- `containerName: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.autoUpdate.retrieveContainer('containerName')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/batch',
    httpMethod: 'post',
    summary: 'POST /api/batch',
    description: 'POST /api/batch',
    stainlessPath: '(resource) batch > (method) create',
    qualified: 'client.batch.create',
    params: ['env?: string;'],
    markdown:
      "## create\n\n`client.batch.create(env?: string): void`\n\n**post** `/api/batch`\n\nPOST /api/batch\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.batch.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/changelog',
    httpMethod: 'get',
    summary: 'GET /api/changelog',
    description: 'GET /api/changelog',
    stainlessPath: '(resource) changelog > (method) retrieve',
    qualified: 'client.changelog.retrieve',
    markdown:
      "## retrieve\n\n`client.changelog.retrieve(): void`\n\n**get** `/api/changelog`\n\nGET /api/changelog\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.changelog.retrieve()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/config-sets',
    httpMethod: 'post',
    summary: 'POST /api/config-sets',
    description: 'POST /api/config-sets',
    stainlessPath: '(resource) config_sets > (method) create',
    qualified: 'client.configSets.create',
    params: [
      'description?: string;',
      'envVars?: string;',
      'labels?: string;',
      'name?: string;',
      'networkMode?: string;',
      'ports?: string;',
      'restartPolicy?: string;',
      'volumes?: string;',
    ],
    markdown:
      "## create\n\n`client.configSets.create(description?: string, envVars?: string, labels?: string, name?: string, networkMode?: string, ports?: string, restartPolicy?: string, volumes?: string): void`\n\n**post** `/api/config-sets`\n\nPOST /api/config-sets\n\n### Parameters\n\n- `description?: string`\n\n- `envVars?: string`\n\n- `labels?: string`\n\n- `name?: string`\n\n- `networkMode?: string`\n\n- `ports?: string`\n\n- `restartPolicy?: string`\n\n- `volumes?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.configSets.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/config-sets/{id}',
    httpMethod: 'get',
    summary: 'GET /api/config-sets/{id}',
    description: 'GET /api/config-sets/{id}',
    stainlessPath: '(resource) config_sets > (method) retrieve',
    qualified: 'client.configSets.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.configSets.retrieve(id: string): void`\n\n**get** `/api/config-sets/{id}`\n\nGET /api/config-sets/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.configSets.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/config-sets/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/config-sets/{id}',
    description: 'PUT /api/config-sets/{id}',
    stainlessPath: '(resource) config_sets > (method) update',
    qualified: 'client.configSets.update',
    params: [
      'id: string;',
      'description?: string;',
      'envVars?: string;',
      'labels?: string;',
      'name?: string;',
      'networkMode?: string;',
      'ports?: string;',
      'restartPolicy?: string;',
      'volumes?: string;',
    ],
    markdown:
      "## update\n\n`client.configSets.update(id: string, description?: string, envVars?: string, labels?: string, name?: string, networkMode?: string, ports?: string, restartPolicy?: string, volumes?: string): void`\n\n**put** `/api/config-sets/{id}`\n\nPUT /api/config-sets/{id}\n\n### Parameters\n\n- `id: string`\n\n- `description?: string`\n\n- `envVars?: string`\n\n- `labels?: string`\n\n- `name?: string`\n\n- `networkMode?: string`\n\n- `ports?: string`\n\n- `restartPolicy?: string`\n\n- `volumes?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.configSets.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/config-sets',
    httpMethod: 'get',
    summary: 'GET /api/config-sets',
    description: 'GET /api/config-sets',
    stainlessPath: '(resource) config_sets > (method) list',
    qualified: 'client.configSets.list',
    markdown:
      "## list\n\n`client.configSets.list(): void`\n\n**get** `/api/config-sets`\n\nGET /api/config-sets\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.configSets.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/config-sets/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/config-sets/{id}',
    description: 'DELETE /api/config-sets/{id}',
    stainlessPath: '(resource) config_sets > (method) delete',
    qualified: 'client.configSets.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.configSets.delete(id: string): void`\n\n**delete** `/api/config-sets/{id}`\n\nDELETE /api/config-sets/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.configSets.delete('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/containers',
    httpMethod: 'post',
    summary: 'POST /api/containers',
    description: 'POST /api/containers',
    stainlessPath: '(resource) containers > (method) create',
    qualified: 'client.containers.create',
    params: [
      'env?: string;',
      'capAdd?: string[];',
      'capDrop?: string[];',
      'cgroupParent?: string;',
      'cmd?: string[];',
      'cpuPeriod?: number;',
      'cpuQuota?: number;',
      'cpusetCpus?: string;',
      'cpusetMems?: string;',
      'cpuShares?: number;',
      'deviceRequests?: object[];',
      'devices?: object[];',
      'dns?: string[];',
      'dnsOptions?: string[];',
      'dnsSearch?: string[];',
      'domainname?: string;',
      'entrypoint?: string[];',
      'env?: string[];',
      'extraHosts?: string[];',
      'groupAdd?: string[];',
      'healthcheck?: object;',
      'hostname?: string;',
      'image?: string;',
      'init?: boolean;',
      'ipcMode?: string;',
      'labels?: object;',
      'logDriver?: string;',
      'logOptions?: object;',
      'macAddress?: string;',
      'memory?: number;',
      'memoryReservation?: number;',
      'memorySwap?: number;',
      'memorySwappiness?: number;',
      'name?: string;',
      'nanoCpus?: number;',
      'networkAliases?: string[];',
      'networkGwPriority?: number;',
      'networkIpv4Address?: string;',
      'networkIpv6Address?: string;',
      'networkMode?: string;',
      'networks?: string[];',
      'oomKillDisable?: boolean;',
      'pidMode?: string;',
      'pidsLimit?: number;',
      'ports?: object;',
      'privileged?: boolean;',
      'readonlyRootfs?: boolean;',
      'restartMaxRetries?: number;',
      "restartPolicy?: 'no' | 'always' | 'unless-stopped' | 'on-failure';",
      'runtime?: string;',
      'securityOpt?: string[];',
      'shmSize?: number;',
      'startAfterCreate?: boolean;',
      'stdinOpen?: boolean;',
      'stopSignal?: string;',
      'stopTimeout?: number;',
      'sysctls?: object;',
      'tmpfs?: object;',
      'tty?: boolean;',
      'ulimits?: object[];',
      'user?: string;',
      'usernsMode?: string;',
      'utsMode?: string;',
      'volumeBinds?: string[];',
      'volumes?: object;',
      'workingDir?: string;',
    ],
    markdown:
      "## create\n\n`client.containers.create(env?: string, capAdd?: string[], capDrop?: string[], cgroupParent?: string, cmd?: string[], cpuPeriod?: number, cpuQuota?: number, cpusetCpus?: string, cpusetMems?: string, cpuShares?: number, deviceRequests?: object[], devices?: object[], dns?: string[], dnsOptions?: string[], dnsSearch?: string[], domainname?: string, entrypoint?: string[], env?: string[], extraHosts?: string[], groupAdd?: string[], healthcheck?: object, hostname?: string, image?: string, init?: boolean, ipcMode?: string, labels?: object, logDriver?: string, logOptions?: object, macAddress?: string, memory?: number, memoryReservation?: number, memorySwap?: number, memorySwappiness?: number, name?: string, nanoCpus?: number, networkAliases?: string[], networkGwPriority?: number, networkIpv4Address?: string, networkIpv6Address?: string, networkMode?: string, networks?: string[], oomKillDisable?: boolean, pidMode?: string, pidsLimit?: number, ports?: object, privileged?: boolean, readonlyRootfs?: boolean, restartMaxRetries?: number, restartPolicy?: 'no' | 'always' | 'unless-stopped' | 'on-failure', runtime?: string, securityOpt?: string[], shmSize?: number, startAfterCreate?: boolean, stdinOpen?: boolean, stopSignal?: string, stopTimeout?: number, sysctls?: object, tmpfs?: object, tty?: boolean, ulimits?: object[], user?: string, usernsMode?: string, utsMode?: string, volumeBinds?: string[], volumes?: object, workingDir?: string): void`\n\n**post** `/api/containers`\n\nPOST /api/containers\n\n### Parameters\n\n- `env?: string`\n\n- `capAdd?: string[]`\n\n- `capDrop?: string[]`\n\n- `cgroupParent?: string`\n\n- `cmd?: string[]`\n\n- `cpuPeriod?: number`\n\n- `cpuQuota?: number`\n\n- `cpusetCpus?: string`\n\n- `cpusetMems?: string`\n\n- `cpuShares?: number`\n\n- `deviceRequests?: object[]`\n\n- `devices?: object[]`\n\n- `dns?: string[]`\n\n- `dnsOptions?: string[]`\n\n- `dnsSearch?: string[]`\n\n- `domainname?: string`\n\n- `entrypoint?: string[]`\n\n- `env?: string[]`\n\n- `extraHosts?: string[]`\n\n- `groupAdd?: string[]`\n\n- `healthcheck?: object`\n\n- `hostname?: string`\n\n- `image?: string`\n\n- `init?: boolean`\n\n- `ipcMode?: string`\n\n- `labels?: object`\n\n- `logDriver?: string`\n\n- `logOptions?: object`\n\n- `macAddress?: string`\n\n- `memory?: number`\n\n- `memoryReservation?: number`\n\n- `memorySwap?: number`\n\n- `memorySwappiness?: number`\n\n- `name?: string`\n\n- `nanoCpus?: number`\n\n- `networkAliases?: string[]`\n\n- `networkGwPriority?: number`\n\n- `networkIpv4Address?: string`\n\n- `networkIpv6Address?: string`\n\n- `networkMode?: string`\n\n- `networks?: string[]`\n\n- `oomKillDisable?: boolean`\n\n- `pidMode?: string`\n\n- `pidsLimit?: number`\n\n- `ports?: object`\n\n- `privileged?: boolean`\n\n- `readonlyRootfs?: boolean`\n\n- `restartMaxRetries?: number`\n\n- `restartPolicy?: 'no' | 'always' | 'unless-stopped' | 'on-failure'`\n\n- `runtime?: string`\n\n- `securityOpt?: string[]`\n\n- `shmSize?: number`\n\n- `startAfterCreate?: boolean`\n\n- `stdinOpen?: boolean`\n\n- `stopSignal?: string`\n\n- `stopTimeout?: number`\n\n- `sysctls?: object`\n\n- `tmpfs?: object`\n\n- `tty?: boolean`\n\n- `ulimits?: object[]`\n\n- `user?: string`\n\n- `usernsMode?: string`\n\n- `utsMode?: string`\n\n- `volumeBinds?: string[]`\n\n- `volumes?: object`\n\n- `workingDir?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/containers/{id}',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}',
    description: 'GET /api/containers/{id}',
    stainlessPath: '(resource) containers > (method) retrieve',
    qualified: 'client.containers.retrieve',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## retrieve\n\n`client.containers.retrieve(id: string, env?: string): void`\n\n**get** `/api/containers/{id}`\n\nGET /api/containers/{id}\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/containers/{id}/update',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/update',
    description: 'POST /api/containers/{id}/update',
    stainlessPath: '(resource) containers > (method) update',
    qualified: 'client.containers.update',
    params: [
      'id: string;',
      'env?: string;',
      '...options?: string;',
      'repullImage?: string;',
      'startAfterUpdate?: string;',
    ],
    markdown:
      "## update\n\n`client.containers.update(id: string, env?: string, ...options?: string, repullImage?: string, startAfterUpdate?: string): void`\n\n**post** `/api/containers/{id}/update`\n\nPOST /api/containers/{id}/update\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `...options?: string`\n\n- `repullImage?: string`\n\n- `startAfterUpdate?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/containers',
    httpMethod: 'get',
    summary: 'GET /api/containers',
    description: 'GET /api/containers',
    stainlessPath: '(resource) containers > (method) list',
    qualified: 'client.containers.list',
    params: ['all?: string;', 'env?: string;'],
    markdown:
      "## list\n\n`client.containers.list(all?: string, env?: string): void`\n\n**get** `/api/containers`\n\nGET /api/containers\n\n### Parameters\n\n- `all?: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/containers/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/containers/{id}',
    description: 'DELETE /api/containers/{id}',
    stainlessPath: '(resource) containers > (method) delete',
    qualified: 'client.containers.delete',
    params: ['id: string;', 'env?: string;', 'force?: string;'],
    markdown:
      "## delete\n\n`client.containers.delete(id: string, env?: string, force?: string): void`\n\n**delete** `/api/containers/{id}`\n\nDELETE /api/containers/{id}\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `force?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.delete('id')\n```",
  },
  {
    name: 'batch_update',
    endpoint: '/api/containers/batch-update',
    httpMethod: 'post',
    summary: 'POST /api/containers/batch-update',
    description: 'POST /api/containers/batch-update',
    stainlessPath: '(resource) containers > (method) batch_update',
    qualified: 'client.containers.batchUpdate',
    params: ['env?: string;', 'containerIds?: string;'],
    markdown:
      "## batch_update\n\n`client.containers.batchUpdate(env?: string, containerIds?: string): void`\n\n**post** `/api/containers/batch-update`\n\nPOST /api/containers/batch-update\n\n### Parameters\n\n- `env?: string`\n\n- `containerIds?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.batchUpdate()\n```",
  },
  {
    name: 'batch_update_stream',
    endpoint: '/api/containers/batch-update-stream',
    httpMethod: 'post',
    summary: 'POST /api/containers/batch-update-stream',
    description: 'POST /api/containers/batch-update-stream',
    stainlessPath: '(resource) containers > (method) batch_update_stream',
    qualified: 'client.containers.batchUpdateStream',
    params: ['env?: string;'],
    markdown:
      "## batch_update_stream\n\n`client.containers.batchUpdateStream(env?: string): void`\n\n**post** `/api/containers/batch-update-stream`\n\nPOST /api/containers/batch-update-stream\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.batchUpdateStream()\n```",
  },
  {
    name: 'check_updates',
    endpoint: '/api/containers/check-updates',
    httpMethod: 'post',
    summary: 'POST /api/containers/check-updates',
    description: 'POST /api/containers/check-updates',
    stainlessPath: '(resource) containers > (method) check_updates',
    qualified: 'client.containers.checkUpdates',
    params: ['env?: string;'],
    markdown:
      "## check_updates\n\n`client.containers.checkUpdates(env?: string): void`\n\n**post** `/api/containers/check-updates`\n\nPOST /api/containers/check-updates\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.checkUpdates()\n```",
  },
  {
    name: 'exec',
    endpoint: '/api/containers/{id}/exec',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/exec',
    description: 'POST /api/containers/{id}/exec',
    stainlessPath: '(resource) containers > (method) exec',
    qualified: 'client.containers.exec',
    params: ['id: string;', 'envId?: string;', 'shell?: string;', 'user?: string;'],
    markdown:
      "## exec\n\n`client.containers.exec(id: string, envId?: string, shell?: string, user?: string): void`\n\n**post** `/api/containers/{id}/exec`\n\nPOST /api/containers/{id}/exec\n\n### Parameters\n\n- `id: string`\n\n- `envId?: string`\n\n- `shell?: string`\n\n- `user?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.exec('id')\n```",
  },
  {
    name: 'inspect',
    endpoint: '/api/containers/{id}/inspect',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/inspect',
    description: 'GET /api/containers/{id}/inspect',
    stainlessPath: '(resource) containers > (method) inspect',
    qualified: 'client.containers.inspect',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## inspect\n\n`client.containers.inspect(id: string, env?: string): void`\n\n**get** `/api/containers/{id}/inspect`\n\nGET /api/containers/{id}/inspect\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.inspect('id')\n```",
  },
  {
    name: 'list_shells',
    endpoint: '/api/containers/{id}/shells',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/shells',
    description: 'GET /api/containers/{id}/shells',
    stainlessPath: '(resource) containers > (method) list_shells',
    qualified: 'client.containers.listShells',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## list_shells\n\n`client.containers.listShells(id: string, env?: string): void`\n\n**get** `/api/containers/{id}/shells`\n\nGET /api/containers/{id}/shells\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.listShells('id')\n```",
  },
  {
    name: 'list_sizes',
    endpoint: '/api/containers/sizes',
    httpMethod: 'get',
    summary: 'GET /api/containers/sizes',
    description: 'GET /api/containers/sizes',
    stainlessPath: '(resource) containers > (method) list_sizes',
    qualified: 'client.containers.listSizes',
    params: ['env?: string;'],
    markdown:
      "## list_sizes\n\n`client.containers.listSizes(env?: string): void`\n\n**get** `/api/containers/sizes`\n\nGET /api/containers/sizes\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.listSizes()\n```",
  },
  {
    name: 'pause',
    endpoint: '/api/containers/{id}/pause',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/pause',
    description: 'POST /api/containers/{id}/pause',
    stainlessPath: '(resource) containers > (method) pause',
    qualified: 'client.containers.pause',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## pause\n\n`client.containers.pause(id: string, env?: string): void`\n\n**post** `/api/containers/{id}/pause`\n\nPOST /api/containers/{id}/pause\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.pause('id')\n```",
  },
  {
    name: 'rename',
    endpoint: '/api/containers/{id}/rename',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/rename',
    description: 'POST /api/containers/{id}/rename',
    stainlessPath: '(resource) containers > (method) rename',
    qualified: 'client.containers.rename',
    params: ['id: string;', 'env?: string;', 'name?: string;'],
    markdown:
      "## rename\n\n`client.containers.rename(id: string, env?: string, name?: string): void`\n\n**post** `/api/containers/{id}/rename`\n\nPOST /api/containers/{id}/rename\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `name?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.rename('id')\n```",
  },
  {
    name: 'restart',
    endpoint: '/api/containers/{id}/restart',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/restart',
    description: 'POST /api/containers/{id}/restart',
    stainlessPath: '(resource) containers > (method) restart',
    qualified: 'client.containers.restart',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## restart\n\n`client.containers.restart(id: string, env?: string): void`\n\n**post** `/api/containers/{id}/restart`\n\nPOST /api/containers/{id}/restart\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.restart('id')\n```",
  },
  {
    name: 'start',
    endpoint: '/api/containers/{id}/start',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/start',
    description: 'POST /api/containers/{id}/start',
    stainlessPath: '(resource) containers > (method) start',
    qualified: 'client.containers.start',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## start\n\n`client.containers.start(id: string, env?: string): void`\n\n**post** `/api/containers/{id}/start`\n\nPOST /api/containers/{id}/start\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.start('id')\n```",
  },
  {
    name: 'stop',
    endpoint: '/api/containers/{id}/stop',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/stop',
    description: 'POST /api/containers/{id}/stop',
    stainlessPath: '(resource) containers > (method) stop',
    qualified: 'client.containers.stop',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## stop\n\n`client.containers.stop(id: string, env?: string): void`\n\n**post** `/api/containers/{id}/stop`\n\nPOST /api/containers/{id}/stop\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.stop('id')\n```",
  },
  {
    name: 'top',
    endpoint: '/api/containers/{id}/top',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/top',
    description: 'GET /api/containers/{id}/top',
    stainlessPath: '(resource) containers > (method) top',
    qualified: 'client.containers.top',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## top\n\n`client.containers.top(id: string, env?: string): void`\n\n**get** `/api/containers/{id}/top`\n\nGET /api/containers/{id}/top\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.top('id')\n```",
  },
  {
    name: 'unpause',
    endpoint: '/api/containers/{id}/unpause',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/unpause',
    description: 'POST /api/containers/{id}/unpause',
    stainlessPath: '(resource) containers > (method) unpause',
    qualified: 'client.containers.unpause',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## unpause\n\n`client.containers.unpause(id: string, env?: string): void`\n\n**post** `/api/containers/{id}/unpause`\n\nPOST /api/containers/{id}/unpause\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.unpause('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/containers/pending-updates',
    httpMethod: 'get',
    summary: 'GET /api/containers/pending-updates',
    description: 'GET /api/containers/pending-updates',
    stainlessPath: '(resource) containers.pending_updates > (method) list',
    qualified: 'client.containers.pendingUpdates.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.containers.pendingUpdates.list(env?: string): void`\n\n**get** `/api/containers/pending-updates`\n\nGET /api/containers/pending-updates\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.pendingUpdates.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/containers/pending-updates',
    httpMethod: 'delete',
    summary: 'DELETE /api/containers/pending-updates',
    description: 'DELETE /api/containers/pending-updates',
    stainlessPath: '(resource) containers.pending_updates > (method) delete',
    qualified: 'client.containers.pendingUpdates.delete',
    params: ['containerId?: string;', 'env?: string;'],
    markdown:
      "## delete\n\n`client.containers.pendingUpdates.delete(containerId?: string, env?: string): void`\n\n**delete** `/api/containers/pending-updates`\n\nDELETE /api/containers/pending-updates\n\n### Parameters\n\n- `containerId?: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.pendingUpdates.delete()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/containers/{id}/stats',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/stats',
    description: 'GET /api/containers/{id}/stats',
    stainlessPath: '(resource) containers.stats > (method) retrieve',
    qualified: 'client.containers.stats.retrieve',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## retrieve\n\n`client.containers.stats.retrieve(id: string, env?: string): void`\n\n**get** `/api/containers/{id}/stats`\n\nGET /api/containers/{id}/stats\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.stats.retrieve('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/containers/stats',
    httpMethod: 'get',
    summary: 'GET /api/containers/stats',
    description: 'GET /api/containers/stats',
    stainlessPath: '(resource) containers.stats > (method) list',
    qualified: 'client.containers.stats.list',
    params: ['debug?: string;', 'env?: string;'],
    markdown:
      "## list\n\n`client.containers.stats.list(debug?: string, env?: string): void`\n\n**get** `/api/containers/stats`\n\nGET /api/containers/stats\n\n### Parameters\n\n- `debug?: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.stats.list()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/containers/{id}/files/create',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/files/create',
    description: 'POST /api/containers/{id}/files/create',
    stainlessPath: '(resource) containers.files > (method) create',
    qualified: 'client.containers.files.create',
    params: ['id: string;', 'env?: string;', 'path?: string;', 'type?: string;'],
    markdown:
      "## create\n\n`client.containers.files.create(id: string, env?: string, path?: string, type?: string): void`\n\n**post** `/api/containers/{id}/files/create`\n\nPOST /api/containers/{id}/files/create\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `path?: string`\n\n- `type?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.create('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/containers/{id}/files',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/files',
    description: 'GET /api/containers/{id}/files',
    stainlessPath: '(resource) containers.files > (method) list',
    qualified: 'client.containers.files.list',
    params: ['id: string;', 'env?: string;', 'path?: string;', 'simpleLs?: string;'],
    markdown:
      "## list\n\n`client.containers.files.list(id: string, env?: string, path?: string, simpleLs?: string): void`\n\n**get** `/api/containers/{id}/files`\n\nGET /api/containers/{id}/files\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `path?: string`\n\n- `simpleLs?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.list('id')\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/containers/{id}/files/delete',
    httpMethod: 'delete',
    summary: 'DELETE /api/containers/{id}/files/delete',
    description: 'DELETE /api/containers/{id}/files/delete',
    stainlessPath: '(resource) containers.files > (method) delete',
    qualified: 'client.containers.files.delete',
    params: ['id: string;', 'env?: string;', 'path?: string;'],
    markdown:
      "## delete\n\n`client.containers.files.delete(id: string, env?: string, path?: string): void`\n\n**delete** `/api/containers/{id}/files/delete`\n\nDELETE /api/containers/{id}/files/delete\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.delete('id')\n```",
  },
  {
    name: 'chmod',
    endpoint: '/api/containers/{id}/files/chmod',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/files/chmod',
    description: 'POST /api/containers/{id}/files/chmod',
    stainlessPath: '(resource) containers.files > (method) chmod',
    qualified: 'client.containers.files.chmod',
    params: ['id: string;', 'env?: string;', 'mode?: string;', 'path?: string;', 'recursive?: string;'],
    markdown:
      "## chmod\n\n`client.containers.files.chmod(id: string, env?: string, mode?: string, path?: string, recursive?: string): void`\n\n**post** `/api/containers/{id}/files/chmod`\n\nPOST /api/containers/{id}/files/chmod\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `mode?: string`\n\n- `path?: string`\n\n- `recursive?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.chmod('id')\n```",
  },
  {
    name: 'download',
    endpoint: '/api/containers/{id}/files/download',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/files/download',
    description: 'GET /api/containers/{id}/files/download',
    stainlessPath: '(resource) containers.files > (method) download',
    qualified: 'client.containers.files.download',
    params: ['id: string;', 'env?: string;', 'format?: string;', 'path?: string;'],
    markdown:
      "## download\n\n`client.containers.files.download(id: string, env?: string, format?: string, path?: string): void`\n\n**get** `/api/containers/{id}/files/download`\n\nGET /api/containers/{id}/files/download\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `format?: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.download('id')\n```",
  },
  {
    name: 'rename',
    endpoint: '/api/containers/{id}/files/rename',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/files/rename',
    description: 'POST /api/containers/{id}/files/rename',
    stainlessPath: '(resource) containers.files > (method) rename',
    qualified: 'client.containers.files.rename',
    params: ['id: string;', 'env?: string;', 'newPath?: string;', 'oldPath?: string;'],
    markdown:
      "## rename\n\n`client.containers.files.rename(id: string, env?: string, newPath?: string, oldPath?: string): void`\n\n**post** `/api/containers/{id}/files/rename`\n\nPOST /api/containers/{id}/files/rename\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `newPath?: string`\n\n- `oldPath?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.rename('id')\n```",
  },
  {
    name: 'upload',
    endpoint: '/api/containers/{id}/files/upload',
    httpMethod: 'post',
    summary: 'POST /api/containers/{id}/files/upload',
    description: 'POST /api/containers/{id}/files/upload',
    stainlessPath: '(resource) containers.files > (method) upload',
    qualified: 'client.containers.files.upload',
    params: ['id: string;', 'env?: string;', 'path?: string;'],
    markdown:
      "## upload\n\n`client.containers.files.upload(id: string, env?: string, path?: string): void`\n\n**post** `/api/containers/{id}/files/upload`\n\nPOST /api/containers/{id}/files/upload\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.upload('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/containers/{id}/files/content',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/files/content',
    description: 'GET /api/containers/{id}/files/content',
    stainlessPath: '(resource) containers.files.content > (method) retrieve',
    qualified: 'client.containers.files.content.retrieve',
    params: ['id: string;', 'env?: string;', 'path?: string;'],
    markdown:
      "## retrieve\n\n`client.containers.files.content.retrieve(id: string, env?: string, path?: string): void`\n\n**get** `/api/containers/{id}/files/content`\n\nGET /api/containers/{id}/files/content\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.content.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/containers/{id}/files/content',
    httpMethod: 'put',
    summary: 'PUT /api/containers/{id}/files/content',
    description: 'PUT /api/containers/{id}/files/content',
    stainlessPath: '(resource) containers.files.content > (method) update',
    qualified: 'client.containers.files.content.update',
    params: ['id: string;', 'env?: string;', 'path?: string;', 'content?: string;'],
    markdown:
      "## update\n\n`client.containers.files.content.update(id: string, env?: string, path?: string, content?: string): void`\n\n**put** `/api/containers/{id}/files/content`\n\nPUT /api/containers/{id}/files/content\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `path?: string`\n\n- `content?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.files.content.update('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/containers/{id}/logs',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/logs',
    description: 'GET /api/containers/{id}/logs',
    stainlessPath: '(resource) containers.logs > (method) retrieve',
    qualified: 'client.containers.logs.retrieve',
    params: ['id: string;', 'env?: string;', 'tail?: string;'],
    markdown:
      "## retrieve\n\n`client.containers.logs.retrieve(id: string, env?: string, tail?: string): void`\n\n**get** `/api/containers/{id}/logs`\n\nGET /api/containers/{id}/logs\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `tail?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.logs.retrieve('id')\n```",
  },
  {
    name: 'stream',
    endpoint: '/api/containers/{id}/logs/stream',
    httpMethod: 'get',
    summary: 'GET /api/containers/{id}/logs/stream',
    description: 'GET /api/containers/{id}/logs/stream',
    stainlessPath: '(resource) containers.logs > (method) stream',
    qualified: 'client.containers.logs.stream',
    params: ['id: string;', 'env?: string;', 'tail?: string;'],
    markdown:
      "## stream\n\n`client.containers.logs.stream(id: string, env?: string, tail?: string): void`\n\n**get** `/api/containers/{id}/logs/stream`\n\nGET /api/containers/{id}/logs/stream\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `tail?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.containers.logs.stream('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/dashboard/preferences',
    httpMethod: 'post',
    summary: 'POST /api/dashboard/preferences',
    description: 'POST /api/dashboard/preferences',
    stainlessPath: '(resource) dashboard.preferences > (method) create',
    qualified: 'client.dashboard.preferences.create',
    params: ['gridLayout?: string;'],
    markdown:
      "## create\n\n`client.dashboard.preferences.create(gridLayout?: string): void`\n\n**post** `/api/dashboard/preferences`\n\nPOST /api/dashboard/preferences\n\n### Parameters\n\n- `gridLayout?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.dashboard.preferences.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/dashboard/preferences',
    httpMethod: 'get',
    summary: 'GET /api/dashboard/preferences',
    description: 'GET /api/dashboard/preferences',
    stainlessPath: '(resource) dashboard.preferences > (method) retrieve',
    qualified: 'client.dashboard.preferences.retrieve',
    markdown:
      "## retrieve\n\n`client.dashboard.preferences.retrieve(): void`\n\n**get** `/api/dashboard/preferences`\n\nGET /api/dashboard/preferences\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.dashboard.preferences.retrieve()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/dashboard/stats',
    httpMethod: 'get',
    summary: 'GET /api/dashboard/stats',
    description: 'GET /api/dashboard/stats',
    stainlessPath: '(resource) dashboard.stats > (method) retrieve',
    qualified: 'client.dashboard.stats.retrieve',
    params: ['env?: string;'],
    markdown:
      "## retrieve\n\n`client.dashboard.stats.retrieve(env?: string): void`\n\n**get** `/api/dashboard/stats`\n\nGET /api/dashboard/stats\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.dashboard.stats.retrieve()\n```",
  },
  {
    name: 'stream',
    endpoint: '/api/dashboard/stats/stream',
    httpMethod: 'get',
    summary: 'GET /api/dashboard/stats/stream',
    description: 'GET /api/dashboard/stats/stream',
    stainlessPath: '(resource) dashboard.stats > (method) stream',
    qualified: 'client.dashboard.stats.stream',
    markdown:
      "## stream\n\n`client.dashboard.stats.stream(): void`\n\n**get** `/api/dashboard/stats/stream`\n\nGET /api/dashboard/stats/stream\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.dashboard.stats.stream()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/dependencies',
    httpMethod: 'get',
    summary: 'GET /api/dependencies',
    description: 'GET /api/dependencies',
    stainlessPath: '(resource) dependencies > (method) list',
    qualified: 'client.dependencies.list',
    markdown:
      "## list\n\n`client.dependencies.list(): void`\n\n**get** `/api/dependencies`\n\nGET /api/dependencies\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.dependencies.list()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/environments',
    httpMethod: 'post',
    summary: 'POST /api/environments',
    description: 'POST /api/environments',
    stainlessPath: '(resource) environments > (method) create',
    qualified: 'client.environments.create',
    params: [
      'collectActivity?: string;',
      'collectMetrics?: string;',
      'connectionType?: string;',
      'hawserToken?: string;',
      'highlightChanges?: string;',
      'host?: string;',
      'icon?: string;',
      'labels?: string;',
      'name?: string;',
      'port?: string;',
      'protocol?: string;',
      'publicIp?: string;',
      'socketPath?: string;',
      'tlsCa?: string;',
      'tlsCert?: string;',
      'tlsKey?: string;',
      'tlsSkipVerify?: string;',
    ],
    markdown:
      "## create\n\n`client.environments.create(collectActivity?: string, collectMetrics?: string, connectionType?: string, hawserToken?: string, highlightChanges?: string, host?: string, icon?: string, labels?: string, name?: string, port?: string, protocol?: string, publicIp?: string, socketPath?: string, tlsCa?: string, tlsCert?: string, tlsKey?: string, tlsSkipVerify?: string): void`\n\n**post** `/api/environments`\n\nPOST /api/environments\n\n### Parameters\n\n- `collectActivity?: string`\n\n- `collectMetrics?: string`\n\n- `connectionType?: string`\n\n- `hawserToken?: string`\n\n- `highlightChanges?: string`\n\n- `host?: string`\n\n- `icon?: string`\n\n- `labels?: string`\n\n- `name?: string`\n\n- `port?: string`\n\n- `protocol?: string`\n\n- `publicIp?: string`\n\n- `socketPath?: string`\n\n- `tlsCa?: string`\n\n- `tlsCert?: string`\n\n- `tlsKey?: string`\n\n- `tlsSkipVerify?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/environments/{id}',
    httpMethod: 'get',
    summary: 'GET /api/environments/{id}',
    description: 'GET /api/environments/{id}',
    stainlessPath: '(resource) environments > (method) retrieve',
    qualified: 'client.environments.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.environments.retrieve(id: string): void`\n\n**get** `/api/environments/{id}`\n\nGET /api/environments/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/environments/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/environments/{id}',
    description: 'PUT /api/environments/{id}',
    stainlessPath: '(resource) environments > (method) update',
    qualified: 'client.environments.update',
    params: [
      'id: string;',
      'collectActivity?: string;',
      'collectMetrics?: string;',
      'connectionType?: string;',
      'hawserToken?: string;',
      'highlightChanges?: string;',
      'host?: string;',
      'icon?: string;',
      'labels?: string;',
      'name?: string;',
      'port?: string;',
      'protocol?: string;',
      'publicIp?: string;',
      'socketPath?: string;',
      'tlsCa?: string;',
      'tlsCert?: string;',
      'tlsKey?: string;',
      'tlsSkipVerify?: string;',
    ],
    markdown:
      "## update\n\n`client.environments.update(id: string, collectActivity?: string, collectMetrics?: string, connectionType?: string, hawserToken?: string, highlightChanges?: string, host?: string, icon?: string, labels?: string, name?: string, port?: string, protocol?: string, publicIp?: string, socketPath?: string, tlsCa?: string, tlsCert?: string, tlsKey?: string, tlsSkipVerify?: string): void`\n\n**put** `/api/environments/{id}`\n\nPUT /api/environments/{id}\n\n### Parameters\n\n- `id: string`\n\n- `collectActivity?: string`\n\n- `collectMetrics?: string`\n\n- `connectionType?: string`\n\n- `hawserToken?: string`\n\n- `highlightChanges?: string`\n\n- `host?: string`\n\n- `icon?: string`\n\n- `labels?: string`\n\n- `name?: string`\n\n- `port?: string`\n\n- `protocol?: string`\n\n- `publicIp?: string`\n\n- `socketPath?: string`\n\n- `tlsCa?: string`\n\n- `tlsCert?: string`\n\n- `tlsKey?: string`\n\n- `tlsSkipVerify?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/environments',
    httpMethod: 'get',
    summary: 'GET /api/environments',
    description: 'GET /api/environments',
    stainlessPath: '(resource) environments > (method) list',
    qualified: 'client.environments.list',
    markdown:
      "## list\n\n`client.environments.list(): void`\n\n**get** `/api/environments`\n\nGET /api/environments\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/environments/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/environments/{id}',
    description: 'DELETE /api/environments/{id}',
    stainlessPath: '(resource) environments > (method) delete',
    qualified: 'client.environments.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.environments.delete(id: string): void`\n\n**delete** `/api/environments/{id}`\n\nDELETE /api/environments/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.delete('id')\n```",
  },
  {
    name: 'detect_socket',
    endpoint: '/api/environments/detect-socket',
    httpMethod: 'get',
    summary: 'GET /api/environments/detect-socket',
    description: 'GET /api/environments/detect-socket',
    stainlessPath: '(resource) environments > (method) detect_socket',
    qualified: 'client.environments.detectSocket',
    markdown:
      "## detect_socket\n\n`client.environments.detectSocket(): void`\n\n**get** `/api/environments/detect-socket`\n\nGET /api/environments/detect-socket\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.detectSocket()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/environments/test',
    httpMethod: 'post',
    summary: 'POST /api/environments/test',
    description: 'POST /api/environments/test',
    stainlessPath: '(resource) environments.test > (method) create',
    qualified: 'client.environments.test.create',
    markdown:
      "## create\n\n`client.environments.test.create(): void`\n\n**post** `/api/environments/test`\n\nPOST /api/environments/test\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.test.create()\n```",
  },
  {
    name: 'run',
    endpoint: '/api/environments/{id}/test',
    httpMethod: 'post',
    summary: 'POST /api/environments/{id}/test',
    description: 'POST /api/environments/{id}/test',
    stainlessPath: '(resource) environments.test > (method) run',
    qualified: 'client.environments.test.run',
    params: ['id: string;'],
    markdown:
      "## run\n\n`client.environments.test.run(id: string): void`\n\n**post** `/api/environments/{id}/test`\n\nPOST /api/environments/{id}/test\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.test.run('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/environments/{id}/disk-warning',
    httpMethod: 'post',
    summary: 'POST /api/environments/{id}/disk-warning',
    description: 'POST /api/environments/{id}/disk-warning',
    stainlessPath: '(resource) environments.disk_warning > (method) create',
    qualified: 'client.environments.diskWarning.create',
    params: [
      'id: string;',
      'enabled?: string;',
      'mode?: string;',
      'threshold?: string;',
      'thresholdGb?: string;',
    ],
    markdown:
      "## create\n\n`client.environments.diskWarning.create(id: string, enabled?: string, mode?: string, threshold?: string, thresholdGb?: string): void`\n\n**post** `/api/environments/{id}/disk-warning`\n\nPOST /api/environments/{id}/disk-warning\n\n### Parameters\n\n- `id: string`\n\n- `enabled?: string`\n\n- `mode?: string`\n\n- `threshold?: string`\n\n- `thresholdGb?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.diskWarning.create('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/environments/{id}/disk-warning',
    httpMethod: 'get',
    summary: 'GET /api/environments/{id}/disk-warning',
    description: 'GET /api/environments/{id}/disk-warning',
    stainlessPath: '(resource) environments.disk_warning > (method) retrieve',
    qualified: 'client.environments.diskWarning.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.environments.diskWarning.retrieve(id: string): void`\n\n**get** `/api/environments/{id}/disk-warning`\n\nGET /api/environments/{id}/disk-warning\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.diskWarning.retrieve('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/environments/{id}/image-prune',
    httpMethod: 'post',
    summary: 'POST /api/environments/{id}/image-prune',
    description: 'POST /api/environments/{id}/image-prune',
    stainlessPath: '(resource) environments.image_prune > (method) create',
    qualified: 'client.environments.imagePrune.create',
    params: ['id: string;', 'cronExpression?: string;', 'enabled?: string;', 'pruneMode?: string;'],
    markdown:
      "## create\n\n`client.environments.imagePrune.create(id: string, cronExpression?: string, enabled?: string, pruneMode?: string): void`\n\n**post** `/api/environments/{id}/image-prune`\n\nPOST /api/environments/{id}/image-prune\n\n### Parameters\n\n- `id: string`\n\n- `cronExpression?: string`\n\n- `enabled?: string`\n\n- `pruneMode?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.imagePrune.create('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/environments/{id}/image-prune',
    httpMethod: 'get',
    summary: 'GET /api/environments/{id}/image-prune',
    description: 'GET /api/environments/{id}/image-prune',
    stainlessPath: '(resource) environments.image_prune > (method) retrieve',
    qualified: 'client.environments.imagePrune.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.environments.imagePrune.retrieve(id: string): void`\n\n**get** `/api/environments/{id}/image-prune`\n\nGET /api/environments/{id}/image-prune\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.imagePrune.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/environments/{id}/image-prune',
    httpMethod: 'put',
    summary: 'PUT /api/environments/{id}/image-prune',
    description: 'PUT /api/environments/{id}/image-prune',
    stainlessPath: '(resource) environments.image_prune > (method) update',
    qualified: 'client.environments.imagePrune.update',
    params: ['id: string;'],
    markdown:
      "## update\n\n`client.environments.imagePrune.update(id: string): void`\n\n**put** `/api/environments/{id}/image-prune`\n\nPUT /api/environments/{id}/image-prune\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.imagePrune.update('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/environments/{id}/notifications',
    httpMethod: 'post',
    summary: 'POST /api/environments/{id}/notifications',
    description: 'POST /api/environments/{id}/notifications',
    stainlessPath: '(resource) environments.notifications > (method) create',
    qualified: 'client.environments.notifications.create',
    params: ['id: string;', 'enabled?: string;', 'eventTypes?: string;', 'notificationId?: string;'],
    markdown:
      "## create\n\n`client.environments.notifications.create(id: string, enabled?: string, eventTypes?: string, notificationId?: string): void`\n\n**post** `/api/environments/{id}/notifications`\n\nPOST /api/environments/{id}/notifications\n\n### Parameters\n\n- `id: string`\n\n- `enabled?: string`\n\n- `eventTypes?: string`\n\n- `notificationId?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.notifications.create('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/environments/{id}/notifications/{notificationId}',
    httpMethod: 'get',
    summary: 'GET /api/environments/{id}/notifications/{notificationId}',
    description: 'GET /api/environments/{id}/notifications/{notificationId}',
    stainlessPath: '(resource) environments.notifications > (method) retrieve',
    qualified: 'client.environments.notifications.retrieve',
    params: ['id: string;', 'notificationId: string;'],
    markdown:
      "## retrieve\n\n`client.environments.notifications.retrieve(id: string, notificationId: string): void`\n\n**get** `/api/environments/{id}/notifications/{notificationId}`\n\nGET /api/environments/{id}/notifications/{notificationId}\n\n### Parameters\n\n- `id: string`\n\n- `notificationId: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.notifications.retrieve('notificationId', { id: 'id' })\n```",
  },
  {
    name: 'update',
    endpoint: '/api/environments/{id}/notifications/{notificationId}',
    httpMethod: 'put',
    summary: 'PUT /api/environments/{id}/notifications/{notificationId}',
    description: 'PUT /api/environments/{id}/notifications/{notificationId}',
    stainlessPath: '(resource) environments.notifications > (method) update',
    qualified: 'client.environments.notifications.update',
    params: ['id: string;', 'notificationId: string;', 'enabled?: string;', 'eventTypes?: string;'],
    markdown:
      "## update\n\n`client.environments.notifications.update(id: string, notificationId: string, enabled?: string, eventTypes?: string): void`\n\n**put** `/api/environments/{id}/notifications/{notificationId}`\n\nPUT /api/environments/{id}/notifications/{notificationId}\n\n### Parameters\n\n- `id: string`\n\n- `notificationId: string`\n\n- `enabled?: string`\n\n- `eventTypes?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.notifications.update('notificationId', { id: 'id' })\n```",
  },
  {
    name: 'list',
    endpoint: '/api/environments/{id}/notifications',
    httpMethod: 'get',
    summary: 'GET /api/environments/{id}/notifications',
    description: 'GET /api/environments/{id}/notifications',
    stainlessPath: '(resource) environments.notifications > (method) list',
    qualified: 'client.environments.notifications.list',
    params: ['id: string;'],
    markdown:
      "## list\n\n`client.environments.notifications.list(id: string): void`\n\n**get** `/api/environments/{id}/notifications`\n\nGET /api/environments/{id}/notifications\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.notifications.list('id')\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/environments/{id}/notifications/{notificationId}',
    httpMethod: 'delete',
    summary: 'DELETE /api/environments/{id}/notifications/{notificationId}',
    description: 'DELETE /api/environments/{id}/notifications/{notificationId}',
    stainlessPath: '(resource) environments.notifications > (method) delete',
    qualified: 'client.environments.notifications.delete',
    params: ['id: string;', 'notificationId: string;'],
    markdown:
      "## delete\n\n`client.environments.notifications.delete(id: string, notificationId: string): void`\n\n**delete** `/api/environments/{id}/notifications/{notificationId}`\n\nDELETE /api/environments/{id}/notifications/{notificationId}\n\n### Parameters\n\n- `id: string`\n\n- `notificationId: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.notifications.delete('notificationId', { id: 'id' })\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/environments/{id}/timezone',
    httpMethod: 'get',
    summary: 'GET /api/environments/{id}/timezone',
    description: 'GET /api/environments/{id}/timezone',
    stainlessPath: '(resource) environments.timezone > (method) retrieve',
    qualified: 'client.environments.timezone.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.environments.timezone.retrieve(id: string): void`\n\n**get** `/api/environments/{id}/timezone`\n\nGET /api/environments/{id}/timezone\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.timezone.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/environments/{id}/timezone',
    httpMethod: 'post',
    summary: 'POST /api/environments/{id}/timezone',
    description: 'POST /api/environments/{id}/timezone',
    stainlessPath: '(resource) environments.timezone > (method) update',
    qualified: 'client.environments.timezone.update',
    params: ['id: string;', 'timezone?: string;'],
    markdown:
      "## update\n\n`client.environments.timezone.update(id: string, timezone?: string): void`\n\n**post** `/api/environments/{id}/timezone`\n\nPOST /api/environments/{id}/timezone\n\n### Parameters\n\n- `id: string`\n\n- `timezone?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.timezone.update('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/environments/{id}/update-check',
    httpMethod: 'get',
    summary: 'GET /api/environments/{id}/update-check',
    description: 'GET /api/environments/{id}/update-check',
    stainlessPath: '(resource) environments.update_check > (method) retrieve',
    qualified: 'client.environments.updateCheck.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.environments.updateCheck.retrieve(id: string): void`\n\n**get** `/api/environments/{id}/update-check`\n\nGET /api/environments/{id}/update-check\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.updateCheck.retrieve('id')\n```",
  },
  {
    name: 'run',
    endpoint: '/api/environments/{id}/update-check',
    httpMethod: 'post',
    summary: 'POST /api/environments/{id}/update-check',
    description: 'POST /api/environments/{id}/update-check',
    stainlessPath: '(resource) environments.update_check > (method) run',
    qualified: 'client.environments.updateCheck.run',
    params: [
      'id: string;',
      'autoUpdate?: string;',
      'cron?: string;',
      'enabled?: string;',
      'vulnerabilityCriteria?: string;',
    ],
    markdown:
      "## run\n\n`client.environments.updateCheck.run(id: string, autoUpdate?: string, cron?: string, enabled?: string, vulnerabilityCriteria?: string): void`\n\n**post** `/api/environments/{id}/update-check`\n\nPOST /api/environments/{id}/update-check\n\n### Parameters\n\n- `id: string`\n\n- `autoUpdate?: string`\n\n- `cron?: string`\n\n- `enabled?: string`\n\n- `vulnerabilityCriteria?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.environments.updateCheck.run('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/events',
    httpMethod: 'get',
    summary: 'GET /api/events',
    description: 'GET /api/events',
    stainlessPath: '(resource) events > (method) list',
    qualified: 'client.events.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.events.list(env?: string): void`\n\n**get** `/api/events`\n\nGET /api/events\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.events.list()\n```",
  },
  {
    name: 'create_preview_env',
    endpoint: '/api/git/preview-env',
    httpMethod: 'post',
    summary: 'POST /api/git/preview-env',
    description: 'POST /api/git/preview-env',
    stainlessPath: '(resource) git > (method) create_preview_env',
    qualified: 'client.git.createPreviewEnv',
    params: [
      'branch?: string;',
      'composePath?: string;',
      'credentialId?: string;',
      'envFilePath?: string;',
      'repositoryId?: string;',
      'url?: string;',
    ],
    markdown:
      "## create_preview_env\n\n`client.git.createPreviewEnv(branch?: string, composePath?: string, credentialId?: string, envFilePath?: string, repositoryId?: string, url?: string): void`\n\n**post** `/api/git/preview-env`\n\nPOST /api/git/preview-env\n\n### Parameters\n\n- `branch?: string`\n\n- `composePath?: string`\n\n- `credentialId?: string`\n\n- `envFilePath?: string`\n\n- `repositoryId?: string`\n\n- `url?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.createPreviewEnv()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/git/credentials',
    httpMethod: 'post',
    summary: 'POST /api/git/credentials',
    description: 'POST /api/git/credentials',
    stainlessPath: '(resource) git.credentials > (method) create',
    qualified: 'client.git.credentials.create',
    params: [
      'authType?: string;',
      'name?: string;',
      'password?: string;',
      'sshPassphrase?: string;',
      'sshPrivateKey?: string;',
      'username?: string;',
    ],
    markdown:
      "## create\n\n`client.git.credentials.create(authType?: string, name?: string, password?: string, sshPassphrase?: string, sshPrivateKey?: string, username?: string): void`\n\n**post** `/api/git/credentials`\n\nPOST /api/git/credentials\n\n### Parameters\n\n- `authType?: string`\n\n- `name?: string`\n\n- `password?: string`\n\n- `sshPassphrase?: string`\n\n- `sshPrivateKey?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.credentials.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/git/credentials/{id}',
    httpMethod: 'get',
    summary: 'GET /api/git/credentials/{id}',
    description: 'GET /api/git/credentials/{id}',
    stainlessPath: '(resource) git.credentials > (method) retrieve',
    qualified: 'client.git.credentials.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.git.credentials.retrieve(id: string): void`\n\n**get** `/api/git/credentials/{id}`\n\nGET /api/git/credentials/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.credentials.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/git/credentials/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/git/credentials/{id}',
    description: 'PUT /api/git/credentials/{id}',
    stainlessPath: '(resource) git.credentials > (method) update',
    qualified: 'client.git.credentials.update',
    params: [
      'id: string;',
      'authType?: string;',
      'name?: string;',
      'password?: string;',
      'sshPassphrase?: string;',
      'sshPrivateKey?: string;',
      'username?: string;',
    ],
    markdown:
      "## update\n\n`client.git.credentials.update(id: string, authType?: string, name?: string, password?: string, sshPassphrase?: string, sshPrivateKey?: string, username?: string): void`\n\n**put** `/api/git/credentials/{id}`\n\nPUT /api/git/credentials/{id}\n\n### Parameters\n\n- `id: string`\n\n- `authType?: string`\n\n- `name?: string`\n\n- `password?: string`\n\n- `sshPassphrase?: string`\n\n- `sshPrivateKey?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.credentials.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/git/credentials',
    httpMethod: 'get',
    summary: 'GET /api/git/credentials',
    description: 'GET /api/git/credentials',
    stainlessPath: '(resource) git.credentials > (method) list',
    qualified: 'client.git.credentials.list',
    markdown:
      "## list\n\n`client.git.credentials.list(): void`\n\n**get** `/api/git/credentials`\n\nGET /api/git/credentials\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.credentials.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/git/credentials/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/git/credentials/{id}',
    description: 'DELETE /api/git/credentials/{id}',
    stainlessPath: '(resource) git.credentials > (method) delete',
    qualified: 'client.git.credentials.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.git.credentials.delete(id: string): void`\n\n**delete** `/api/git/credentials/{id}`\n\nDELETE /api/git/credentials/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.credentials.delete('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/git/repositories',
    httpMethod: 'post',
    summary: 'POST /api/git/repositories',
    description: 'POST /api/git/repositories',
    stainlessPath: '(resource) git.repositories > (method) create',
    qualified: 'client.git.repositories.create',
    params: ['branch?: string;', 'credentialId?: string;', 'name?: string;', 'url?: string;'],
    markdown:
      "## create\n\n`client.git.repositories.create(branch?: string, credentialId?: string, name?: string, url?: string): void`\n\n**post** `/api/git/repositories`\n\nPOST /api/git/repositories\n\n### Parameters\n\n- `branch?: string`\n\n- `credentialId?: string`\n\n- `name?: string`\n\n- `url?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/git/repositories/{id}',
    httpMethod: 'get',
    summary: 'GET /api/git/repositories/{id}',
    description: 'GET /api/git/repositories/{id}',
    stainlessPath: '(resource) git.repositories > (method) retrieve',
    qualified: 'client.git.repositories.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.git.repositories.retrieve(id: string): void`\n\n**get** `/api/git/repositories/{id}`\n\nGET /api/git/repositories/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/git/repositories/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/git/repositories/{id}',
    description: 'PUT /api/git/repositories/{id}',
    stainlessPath: '(resource) git.repositories > (method) update',
    qualified: 'client.git.repositories.update',
    params: ['id: string;', 'branch?: string;', 'credentialId?: string;', 'name?: string;', 'url?: string;'],
    markdown:
      "## update\n\n`client.git.repositories.update(id: string, branch?: string, credentialId?: string, name?: string, url?: string): void`\n\n**put** `/api/git/repositories/{id}`\n\nPUT /api/git/repositories/{id}\n\n### Parameters\n\n- `id: string`\n\n- `branch?: string`\n\n- `credentialId?: string`\n\n- `name?: string`\n\n- `url?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/git/repositories',
    httpMethod: 'get',
    summary: 'GET /api/git/repositories',
    description: 'GET /api/git/repositories',
    stainlessPath: '(resource) git.repositories > (method) list',
    qualified: 'client.git.repositories.list',
    markdown:
      "## list\n\n`client.git.repositories.list(): void`\n\n**get** `/api/git/repositories`\n\nGET /api/git/repositories\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/git/repositories/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/git/repositories/{id}',
    description: 'DELETE /api/git/repositories/{id}',
    stainlessPath: '(resource) git.repositories > (method) delete',
    qualified: 'client.git.repositories.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.git.repositories.delete(id: string): void`\n\n**delete** `/api/git/repositories/{id}`\n\nDELETE /api/git/repositories/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.delete('id')\n```",
  },
  {
    name: 'deploy',
    endpoint: '/api/git/repositories/{id}/deploy',
    httpMethod: 'post',
    summary: 'POST /api/git/repositories/{id}/deploy',
    description: 'POST /api/git/repositories/{id}/deploy',
    stainlessPath: '(resource) git.repositories > (method) deploy',
    qualified: 'client.git.repositories.deploy',
    params: ['id: string;'],
    markdown:
      "## deploy\n\n`client.git.repositories.deploy(id: string): void`\n\n**post** `/api/git/repositories/{id}/deploy`\n\nPOST /api/git/repositories/{id}/deploy\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.deploy('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/git/repositories/test',
    httpMethod: 'post',
    summary: 'POST /api/git/repositories/test',
    description: 'POST /api/git/repositories/test',
    stainlessPath: '(resource) git.repositories.test > (method) create',
    qualified: 'client.git.repositories.test.create',
    params: ['branch?: string;', 'credentialId?: string;', 'url?: string;'],
    markdown:
      "## create\n\n`client.git.repositories.test.create(branch?: string, credentialId?: string, url?: string): void`\n\n**post** `/api/git/repositories/test`\n\nPOST /api/git/repositories/test\n\n### Parameters\n\n- `branch?: string`\n\n- `credentialId?: string`\n\n- `url?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.test.create()\n```",
  },
  {
    name: 'run',
    endpoint: '/api/git/repositories/{id}/test',
    httpMethod: 'post',
    summary: 'POST /api/git/repositories/{id}/test',
    description: 'POST /api/git/repositories/{id}/test',
    stainlessPath: '(resource) git.repositories.test > (method) run',
    qualified: 'client.git.repositories.test.run',
    params: ['id: string;'],
    markdown:
      "## run\n\n`client.git.repositories.test.run(id: string): void`\n\n**post** `/api/git/repositories/{id}/test`\n\nPOST /api/git/repositories/{id}/test\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.test.run('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/git/repositories/{id}/sync',
    httpMethod: 'post',
    summary: 'POST /api/git/repositories/{id}/sync',
    description: 'POST /api/git/repositories/{id}/sync',
    stainlessPath: '(resource) git.repositories.sync > (method) create',
    qualified: 'client.git.repositories.sync.create',
    params: ['id: string;'],
    markdown:
      "## create\n\n`client.git.repositories.sync.create(id: string): void`\n\n**post** `/api/git/repositories/{id}/sync`\n\nPOST /api/git/repositories/{id}/sync\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.sync.create('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/git/repositories/{id}/sync',
    httpMethod: 'get',
    summary: 'GET /api/git/repositories/{id}/sync',
    description: 'GET /api/git/repositories/{id}/sync',
    stainlessPath: '(resource) git.repositories.sync > (method) retrieve',
    qualified: 'client.git.repositories.sync.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.git.repositories.sync.retrieve(id: string): void`\n\n**get** `/api/git/repositories/{id}/sync`\n\nGET /api/git/repositories/{id}/sync\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.repositories.sync.retrieve('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/git/stacks',
    httpMethod: 'post',
    summary: 'POST /api/git/stacks',
    description: 'POST /api/git/stacks',
    stainlessPath: '(resource) git.stacks > (method) create',
    qualified: 'client.git.stacks.create',
    params: [
      'autoUpdate?: string;',
      'autoUpdateCron?: string;',
      'autoUpdateSchedule?: string;',
      'branch?: string;',
      'composePath?: string;',
      'credentialId?: string;',
      'deployNow?: string;',
      'envFilePath?: string;',
      'environmentId?: string;',
      'envVars?: string;',
      'repoName?: string;',
      'repositoryId?: string;',
      'stackName?: string;',
      'url?: string;',
      'webhookEnabled?: string;',
      'webhookSecret?: string;',
    ],
    markdown:
      "## create\n\n`client.git.stacks.create(autoUpdate?: string, autoUpdateCron?: string, autoUpdateSchedule?: string, branch?: string, composePath?: string, credentialId?: string, deployNow?: string, envFilePath?: string, environmentId?: string, envVars?: string, repoName?: string, repositoryId?: string, stackName?: string, url?: string, webhookEnabled?: string, webhookSecret?: string): void`\n\n**post** `/api/git/stacks`\n\nPOST /api/git/stacks\n\n### Parameters\n\n- `autoUpdate?: string`\n\n- `autoUpdateCron?: string`\n\n- `autoUpdateSchedule?: string`\n\n- `branch?: string`\n\n- `composePath?: string`\n\n- `credentialId?: string`\n\n- `deployNow?: string`\n\n- `envFilePath?: string`\n\n- `environmentId?: string`\n\n- `envVars?: string`\n\n- `repoName?: string`\n\n- `repositoryId?: string`\n\n- `stackName?: string`\n\n- `url?: string`\n\n- `webhookEnabled?: string`\n\n- `webhookSecret?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/git/stacks/{id}',
    httpMethod: 'get',
    summary: 'GET /api/git/stacks/{id}',
    description: 'GET /api/git/stacks/{id}',
    stainlessPath: '(resource) git.stacks > (method) retrieve',
    qualified: 'client.git.stacks.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.git.stacks.retrieve(id: string): void`\n\n**get** `/api/git/stacks/{id}`\n\nGET /api/git/stacks/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/git/stacks/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/git/stacks/{id}',
    description: 'PUT /api/git/stacks/{id}',
    stainlessPath: '(resource) git.stacks > (method) update',
    qualified: 'client.git.stacks.update',
    params: [
      'id: string;',
      'autoUpdate?: string;',
      'autoUpdateCron?: string;',
      'autoUpdateSchedule?: string;',
      'composePath?: string;',
      'deployNow?: string;',
      'envFilePath?: string;',
      'envVars?: string;',
      'stackName?: string;',
      'webhookEnabled?: string;',
      'webhookSecret?: string;',
    ],
    markdown:
      "## update\n\n`client.git.stacks.update(id: string, autoUpdate?: string, autoUpdateCron?: string, autoUpdateSchedule?: string, composePath?: string, deployNow?: string, envFilePath?: string, envVars?: string, stackName?: string, webhookEnabled?: string, webhookSecret?: string): void`\n\n**put** `/api/git/stacks/{id}`\n\nPUT /api/git/stacks/{id}\n\n### Parameters\n\n- `id: string`\n\n- `autoUpdate?: string`\n\n- `autoUpdateCron?: string`\n\n- `autoUpdateSchedule?: string`\n\n- `composePath?: string`\n\n- `deployNow?: string`\n\n- `envFilePath?: string`\n\n- `envVars?: string`\n\n- `stackName?: string`\n\n- `webhookEnabled?: string`\n\n- `webhookSecret?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/git/stacks',
    httpMethod: 'get',
    summary: 'GET /api/git/stacks',
    description: 'GET /api/git/stacks',
    stainlessPath: '(resource) git.stacks > (method) list',
    qualified: 'client.git.stacks.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.git.stacks.list(env?: string): void`\n\n**get** `/api/git/stacks`\n\nGET /api/git/stacks\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/git/stacks/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/git/stacks/{id}',
    description: 'DELETE /api/git/stacks/{id}',
    stainlessPath: '(resource) git.stacks > (method) delete',
    qualified: 'client.git.stacks.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.git.stacks.delete(id: string): void`\n\n**delete** `/api/git/stacks/{id}`\n\nDELETE /api/git/stacks/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.delete('id')\n```",
  },
  {
    name: 'deploy',
    endpoint: '/api/git/stacks/{id}/deploy',
    httpMethod: 'post',
    summary: 'POST /api/git/stacks/{id}/deploy',
    description: 'POST /api/git/stacks/{id}/deploy',
    stainlessPath: '(resource) git.stacks > (method) deploy',
    qualified: 'client.git.stacks.deploy',
    params: ['id: string;'],
    markdown:
      "## deploy\n\n`client.git.stacks.deploy(id: string): void`\n\n**post** `/api/git/stacks/{id}/deploy`\n\nPOST /api/git/stacks/{id}/deploy\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.deploy('id')\n```",
  },
  {
    name: 'deploy_stream',
    endpoint: '/api/git/stacks/{id}/deploy-stream',
    httpMethod: 'post',
    summary: 'POST /api/git/stacks/{id}/deploy-stream',
    description: 'POST /api/git/stacks/{id}/deploy-stream',
    stainlessPath: '(resource) git.stacks > (method) deploy_stream',
    qualified: 'client.git.stacks.deployStream',
    params: ['id: string;'],
    markdown:
      "## deploy_stream\n\n`client.git.stacks.deployStream(id: string): void`\n\n**post** `/api/git/stacks/{id}/deploy-stream`\n\nPOST /api/git/stacks/{id}/deploy-stream\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.deployStream('id')\n```",
  },
  {
    name: 'sync',
    endpoint: '/api/git/stacks/{id}/sync',
    httpMethod: 'post',
    summary: 'POST /api/git/stacks/{id}/sync',
    description: 'POST /api/git/stacks/{id}/sync',
    stainlessPath: '(resource) git.stacks > (method) sync',
    qualified: 'client.git.stacks.sync',
    params: ['id: string;'],
    markdown:
      "## sync\n\n`client.git.stacks.sync(id: string): void`\n\n**post** `/api/git/stacks/{id}/sync`\n\nPOST /api/git/stacks/{id}/sync\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.sync('id')\n```",
  },
  {
    name: 'test',
    endpoint: '/api/git/stacks/{id}/test',
    httpMethod: 'post',
    summary: 'POST /api/git/stacks/{id}/test',
    description: 'POST /api/git/stacks/{id}/test',
    stainlessPath: '(resource) git.stacks > (method) test',
    qualified: 'client.git.stacks.test',
    params: ['id: string;'],
    markdown:
      "## test\n\n`client.git.stacks.test(id: string): void`\n\n**post** `/api/git/stacks/{id}/test`\n\nPOST /api/git/stacks/{id}/test\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.test('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/git/stacks/{id}/env-files',
    httpMethod: 'post',
    summary: 'POST /api/git/stacks/{id}/env-files',
    description: 'POST /api/git/stacks/{id}/env-files',
    stainlessPath: '(resource) git.stacks.env_files > (method) create',
    qualified: 'client.git.stacks.envFiles.create',
    params: ['id: string;', 'path?: string;'],
    markdown:
      "## create\n\n`client.git.stacks.envFiles.create(id: string, path?: string): void`\n\n**post** `/api/git/stacks/{id}/env-files`\n\nPOST /api/git/stacks/{id}/env-files\n\n### Parameters\n\n- `id: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.envFiles.create('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/git/stacks/{id}/env-files',
    httpMethod: 'get',
    summary: 'GET /api/git/stacks/{id}/env-files',
    description: 'GET /api/git/stacks/{id}/env-files',
    stainlessPath: '(resource) git.stacks.env_files > (method) list',
    qualified: 'client.git.stacks.envFiles.list',
    params: ['id: string;'],
    markdown:
      "## list\n\n`client.git.stacks.envFiles.list(id: string): void`\n\n**get** `/api/git/stacks/{id}/env-files`\n\nGET /api/git/stacks/{id}/env-files\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.envFiles.list('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/git/stacks/{id}/webhook',
    httpMethod: 'post',
    summary: 'POST /api/git/stacks/{id}/webhook',
    description: 'POST /api/git/stacks/{id}/webhook',
    stainlessPath: '(resource) git.stacks.webhook > (method) create',
    qualified: 'client.git.stacks.webhook.create',
    params: ['id: string;'],
    markdown:
      "## create\n\n`client.git.stacks.webhook.create(id: string): void`\n\n**post** `/api/git/stacks/{id}/webhook`\n\nPOST /api/git/stacks/{id}/webhook\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.webhook.create('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/git/stacks/{id}/webhook',
    httpMethod: 'get',
    summary: 'GET /api/git/stacks/{id}/webhook',
    description: 'GET /api/git/stacks/{id}/webhook',
    stainlessPath: '(resource) git.stacks.webhook > (method) retrieve',
    qualified: 'client.git.stacks.webhook.retrieve',
    params: ['id: string;', 'secret?: string;'],
    markdown:
      "## retrieve\n\n`client.git.stacks.webhook.retrieve(id: string, secret?: string): void`\n\n**get** `/api/git/stacks/{id}/webhook`\n\nGET /api/git/stacks/{id}/webhook\n\n### Parameters\n\n- `id: string`\n\n- `secret?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.stacks.webhook.retrieve('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/git/webhook/{id}',
    httpMethod: 'get',
    summary: 'GET /api/git/webhook/{id}',
    description: 'GET /api/git/webhook/{id}',
    stainlessPath: '(resource) git.webhook > (method) retrieve',
    qualified: 'client.git.webhook.retrieve',
    params: ['id: string;', 'secret?: string;'],
    markdown:
      "## retrieve\n\n`client.git.webhook.retrieve(id: string, secret?: string): void`\n\n**get** `/api/git/webhook/{id}`\n\nGET /api/git/webhook/{id}\n\n### Parameters\n\n- `id: string`\n\n- `secret?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.webhook.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/git/webhook/{id}',
    httpMethod: 'post',
    summary: 'POST /api/git/webhook/{id}',
    description: 'POST /api/git/webhook/{id}',
    stainlessPath: '(resource) git.webhook > (method) update',
    qualified: 'client.git.webhook.update',
    params: ['id: string;', 'ref?: string;'],
    markdown:
      "## update\n\n`client.git.webhook.update(id: string, ref?: string): void`\n\n**post** `/api/git/webhook/{id}`\n\nPOST /api/git/webhook/{id}\n\n### Parameters\n\n- `id: string`\n\n- `ref?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.git.webhook.update('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/hawser/connect',
    httpMethod: 'post',
    summary: 'POST /api/hawser/connect',
    description: 'POST /api/hawser/connect',
    stainlessPath: '(resource) hawser.connect > (method) create',
    qualified: 'client.hawser.connect.create',
    markdown:
      "## create\n\n`client.hawser.connect.create(): void`\n\n**post** `/api/hawser/connect`\n\nPOST /api/hawser/connect\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.hawser.connect.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/hawser/connect',
    httpMethod: 'get',
    summary: 'GET /api/hawser/connect',
    description: 'GET /api/hawser/connect',
    stainlessPath: '(resource) hawser.connect > (method) retrieve',
    qualified: 'client.hawser.connect.retrieve',
    markdown:
      "## retrieve\n\n`client.hawser.connect.retrieve(): void`\n\n**get** `/api/hawser/connect`\n\nGET /api/hawser/connect\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.hawser.connect.retrieve()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/hawser/tokens',
    httpMethod: 'post',
    summary: 'POST /api/hawser/tokens',
    description: 'POST /api/hawser/tokens',
    stainlessPath: '(resource) hawser.tokens > (method) create',
    qualified: 'client.hawser.tokens.create',
    params: ['environmentId?: string;', 'expiresAt?: string;', 'name?: string;', 'rawToken?: string;'],
    markdown:
      "## create\n\n`client.hawser.tokens.create(environmentId?: string, expiresAt?: string, name?: string, rawToken?: string): void`\n\n**post** `/api/hawser/tokens`\n\nPOST /api/hawser/tokens\n\n### Parameters\n\n- `environmentId?: string`\n\n- `expiresAt?: string`\n\n- `name?: string`\n\n- `rawToken?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.hawser.tokens.create()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/hawser/tokens',
    httpMethod: 'get',
    summary: 'GET /api/hawser/tokens',
    description: 'GET /api/hawser/tokens',
    stainlessPath: '(resource) hawser.tokens > (method) list',
    qualified: 'client.hawser.tokens.list',
    markdown:
      "## list\n\n`client.hawser.tokens.list(): void`\n\n**get** `/api/hawser/tokens`\n\nGET /api/hawser/tokens\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.hawser.tokens.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/hawser/tokens',
    httpMethod: 'delete',
    summary: 'DELETE /api/hawser/tokens',
    description: 'DELETE /api/hawser/tokens',
    stainlessPath: '(resource) hawser.tokens > (method) delete',
    qualified: 'client.hawser.tokens.delete',
    params: ['id?: string;'],
    markdown:
      "## delete\n\n`client.hawser.tokens.delete(id?: string): void`\n\n**delete** `/api/hawser/tokens`\n\nDELETE /api/hawser/tokens\n\n### Parameters\n\n- `id?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.hawser.tokens.delete()\n```",
  },
  {
    name: 'check',
    endpoint: '/api/health',
    httpMethod: 'get',
    summary: 'GET /api/health',
    description: 'GET /api/health',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    markdown:
      "## check\n\n`client.health.check(): void`\n\n**get** `/api/health`\n\nGET /api/health\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.health.check()\n```",
  },
  {
    name: 'check_database',
    endpoint: '/api/health/database',
    httpMethod: 'get',
    summary: 'GET /api/health/database',
    description: 'GET /api/health/database',
    stainlessPath: '(resource) health > (method) check_database',
    qualified: 'client.health.checkDatabase',
    markdown:
      "## check_database\n\n`client.health.checkDatabase(): void`\n\n**get** `/api/health/database`\n\nGET /api/health/database\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.health.checkDatabase()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/host',
    httpMethod: 'get',
    summary: 'GET /api/host',
    description: 'GET /api/host',
    stainlessPath: '(resource) host > (method) retrieve',
    qualified: 'client.host.retrieve',
    params: ['env?: string;'],
    markdown:
      "## retrieve\n\n`client.host.retrieve(env?: string): void`\n\n**get** `/api/host`\n\nGET /api/host\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.host.retrieve()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/images',
    httpMethod: 'get',
    summary: 'GET /api/images',
    description: 'GET /api/images',
    stainlessPath: '(resource) images > (method) list',
    qualified: 'client.images.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.images.list(env?: string): void`\n\n**get** `/api/images`\n\nGET /api/images\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/images/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/images/{id}',
    description: 'DELETE /api/images/{id}',
    stainlessPath: '(resource) images > (method) delete',
    qualified: 'client.images.delete',
    params: ['id: string;', 'env?: string;', 'force?: string;'],
    markdown:
      "## delete\n\n`client.images.delete(id: string, env?: string, force?: string): void`\n\n**delete** `/api/images/{id}`\n\nDELETE /api/images/{id}\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `force?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.delete('id')\n```",
  },
  {
    name: 'export',
    endpoint: '/api/images/{id}/export',
    httpMethod: 'get',
    summary: 'GET /api/images/{id}/export',
    description: 'GET /api/images/{id}/export',
    stainlessPath: '(resource) images > (method) export',
    qualified: 'client.images.export',
    params: ['id: string;', 'compress?: string;', 'env?: string;'],
    markdown:
      "## export\n\n`client.images.export(id: string, compress?: string, env?: string): void`\n\n**get** `/api/images/{id}/export`\n\nGET /api/images/{id}/export\n\n### Parameters\n\n- `id: string`\n\n- `compress?: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.export('id')\n```",
  },
  {
    name: 'history',
    endpoint: '/api/images/{id}/history',
    httpMethod: 'get',
    summary: 'GET /api/images/{id}/history',
    description: 'GET /api/images/{id}/history',
    stainlessPath: '(resource) images > (method) history',
    qualified: 'client.images.history',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## history\n\n`client.images.history(id: string, env?: string): void`\n\n**get** `/api/images/{id}/history`\n\nGET /api/images/{id}/history\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.history('id')\n```",
  },
  {
    name: 'pull',
    endpoint: '/api/images/pull',
    httpMethod: 'post',
    summary: 'POST /api/images/pull',
    description: 'POST /api/images/pull',
    stainlessPath: '(resource) images > (method) pull',
    qualified: 'client.images.pull',
    params: ['env?: string;', 'image?: string;', 'scanAfterPull?: string;'],
    markdown:
      "## pull\n\n`client.images.pull(env?: string, image?: string, scanAfterPull?: string): void`\n\n**post** `/api/images/pull`\n\nPOST /api/images/pull\n\n### Parameters\n\n- `env?: string`\n\n- `image?: string`\n\n- `scanAfterPull?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.pull()\n```",
  },
  {
    name: 'push',
    endpoint: '/api/images/push',
    httpMethod: 'post',
    summary: 'POST /api/images/push',
    description: 'POST /api/images/push',
    stainlessPath: '(resource) images > (method) push',
    qualified: 'client.images.push',
    params: [
      'env?: string;',
      'imageId?: string;',
      'imageName?: string;',
      'newTag?: string;',
      'registryId?: string;',
    ],
    markdown:
      "## push\n\n`client.images.push(env?: string, imageId?: string, imageName?: string, newTag?: string, registryId?: string): void`\n\n**post** `/api/images/push`\n\nPOST /api/images/push\n\n### Parameters\n\n- `env?: string`\n\n- `imageId?: string`\n\n- `imageName?: string`\n\n- `newTag?: string`\n\n- `registryId?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.push()\n```",
  },
  {
    name: 'tag',
    endpoint: '/api/images/{id}/tag',
    httpMethod: 'post',
    summary: 'POST /api/images/{id}/tag',
    description: 'POST /api/images/{id}/tag',
    stainlessPath: '(resource) images > (method) tag',
    qualified: 'client.images.tag',
    params: ['id: string;', 'env?: string;', 'repo?: string;', 'tag?: string;'],
    markdown:
      "## tag\n\n`client.images.tag(id: string, env?: string, repo?: string, tag?: string): void`\n\n**post** `/api/images/{id}/tag`\n\nPOST /api/images/{id}/tag\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `repo?: string`\n\n- `tag?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.tag('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/images/scan',
    httpMethod: 'post',
    summary: 'POST /api/images/scan',
    description: 'POST /api/images/scan',
    stainlessPath: '(resource) images.scan > (method) create',
    qualified: 'client.images.scan.create',
    params: ['env?: string;', 'imageName?: string;', 'scanner?: string;'],
    markdown:
      "## create\n\n`client.images.scan.create(env?: string, imageName?: string, scanner?: string): void`\n\n**post** `/api/images/scan`\n\nPOST /api/images/scan\n\n### Parameters\n\n- `env?: string`\n\n- `imageName?: string`\n\n- `scanner?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.scan.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/images/scan',
    httpMethod: 'get',
    summary: 'GET /api/images/scan',
    description: 'GET /api/images/scan',
    stainlessPath: '(resource) images.scan > (method) retrieve',
    qualified: 'client.images.scan.retrieve',
    params: ['env?: string;', 'image?: string;', 'scanner?: string;'],
    markdown:
      "## retrieve\n\n`client.images.scan.retrieve(env?: string, image?: string, scanner?: string): void`\n\n**get** `/api/images/scan`\n\nGET /api/images/scan\n\n### Parameters\n\n- `env?: string`\n\n- `image?: string`\n\n- `scanner?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.images.scan.retrieve()\n```",
  },
  {
    name: 'retrieve_license',
    endpoint: '/api/legal/license',
    httpMethod: 'get',
    summary: 'GET /api/legal/license',
    description: 'GET /api/legal/license',
    stainlessPath: '(resource) legal > (method) retrieve_license',
    qualified: 'client.legal.retrieveLicense',
    params: ['format?: string;'],
    markdown:
      "## retrieve_license\n\n`client.legal.retrieveLicense(format?: string): void`\n\n**get** `/api/legal/license`\n\nGET /api/legal/license\n\n### Parameters\n\n- `format?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.legal.retrieveLicense()\n```",
  },
  {
    name: 'retrieve_privacy',
    endpoint: '/api/legal/privacy',
    httpMethod: 'get',
    summary: 'GET /api/legal/privacy',
    description: 'GET /api/legal/privacy',
    stainlessPath: '(resource) legal > (method) retrieve_privacy',
    qualified: 'client.legal.retrievePrivacy',
    params: ['format?: string;'],
    markdown:
      "## retrieve_privacy\n\n`client.legal.retrievePrivacy(format?: string): void`\n\n**get** `/api/legal/privacy`\n\nGET /api/legal/privacy\n\n### Parameters\n\n- `format?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.legal.retrievePrivacy()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/license',
    httpMethod: 'post',
    summary: 'POST /api/license',
    description: 'POST /api/license',
    stainlessPath: '(resource) license > (method) create',
    qualified: 'client.license.create',
    params: ['key?: string;', 'name?: string;'],
    markdown:
      "## create\n\n`client.license.create(key?: string, name?: string): void`\n\n**post** `/api/license`\n\nPOST /api/license\n\n### Parameters\n\n- `key?: string`\n\n- `name?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.license.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/license',
    httpMethod: 'get',
    summary: 'GET /api/license',
    description: 'GET /api/license',
    stainlessPath: '(resource) license > (method) retrieve',
    qualified: 'client.license.retrieve',
    markdown:
      "## retrieve\n\n`client.license.retrieve(): void`\n\n**get** `/api/license`\n\nGET /api/license\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.license.retrieve()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/license',
    httpMethod: 'delete',
    summary: 'DELETE /api/license',
    description: 'DELETE /api/license',
    stainlessPath: '(resource) license > (method) delete',
    qualified: 'client.license.delete',
    markdown:
      "## delete\n\n`client.license.delete(): void`\n\n**delete** `/api/license`\n\nDELETE /api/license\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.license.delete()\n```",
  },
  {
    name: 'retrieve_merged',
    endpoint: '/api/logs/merged',
    httpMethod: 'get',
    summary: 'GET /api/logs/merged',
    description: 'GET /api/logs/merged',
    stainlessPath: '(resource) logs > (method) retrieve_merged',
    qualified: 'client.logs.retrieveMerged',
    params: ['containers?: string;', 'env?: string;', 'tail?: string;'],
    markdown:
      "## retrieve_merged\n\n`client.logs.retrieveMerged(containers?: string, env?: string, tail?: string): void`\n\n**get** `/api/logs/merged`\n\nGET /api/logs/merged\n\n### Parameters\n\n- `containers?: string`\n\n- `env?: string`\n\n- `tail?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.logs.retrieveMerged()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/metrics',
    httpMethod: 'get',
    summary: 'GET /api/metrics',
    description: 'GET /api/metrics',
    stainlessPath: '(resource) metrics > (method) retrieve',
    qualified: 'client.metrics.retrieve',
    params: ['env?: string;', 'limit?: string;'],
    markdown:
      "## retrieve\n\n`client.metrics.retrieve(env?: string, limit?: string): void`\n\n**get** `/api/metrics`\n\nGET /api/metrics\n\n### Parameters\n\n- `env?: string`\n\n- `limit?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.metrics.retrieve()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/networks',
    httpMethod: 'post',
    summary: 'POST /api/networks',
    description: 'POST /api/networks',
    stainlessPath: '(resource) networks > (method) create',
    qualified: 'client.networks.create',
    params: [
      'env?: string;',
      'attachable?: string;',
      'driver?: string;',
      'enableIPv6?: string;',
      'ingress?: string;',
      'internal?: string;',
      'ipam?: string;',
      'labels?: string;',
      'name?: string;',
      'options?: string;',
    ],
    markdown:
      "## create\n\n`client.networks.create(env?: string, attachable?: string, driver?: string, enableIPv6?: string, ingress?: string, internal?: string, ipam?: string, labels?: string, name?: string, options?: string): void`\n\n**post** `/api/networks`\n\nPOST /api/networks\n\n### Parameters\n\n- `env?: string`\n\n- `attachable?: string`\n\n- `driver?: string`\n\n- `enableIPv6?: string`\n\n- `ingress?: string`\n\n- `internal?: string`\n\n- `ipam?: string`\n\n- `labels?: string`\n\n- `name?: string`\n\n- `options?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.networks.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/networks/{id}',
    httpMethod: 'get',
    summary: 'GET /api/networks/{id}',
    description: 'GET /api/networks/{id}',
    stainlessPath: '(resource) networks > (method) retrieve',
    qualified: 'client.networks.retrieve',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## retrieve\n\n`client.networks.retrieve(id: string, env?: string): void`\n\n**get** `/api/networks/{id}`\n\nGET /api/networks/{id}\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.networks.retrieve('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/networks',
    httpMethod: 'get',
    summary: 'GET /api/networks',
    description: 'GET /api/networks',
    stainlessPath: '(resource) networks > (method) list',
    qualified: 'client.networks.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.networks.list(env?: string): void`\n\n**get** `/api/networks`\n\nGET /api/networks\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.networks.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/networks/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/networks/{id}',
    description: 'DELETE /api/networks/{id}',
    stainlessPath: '(resource) networks > (method) delete',
    qualified: 'client.networks.delete',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## delete\n\n`client.networks.delete(id: string, env?: string): void`\n\n**delete** `/api/networks/{id}`\n\nDELETE /api/networks/{id}\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.networks.delete('id')\n```",
  },
  {
    name: 'connect',
    endpoint: '/api/networks/{id}/connect',
    httpMethod: 'post',
    summary: 'POST /api/networks/{id}/connect',
    description: 'POST /api/networks/{id}/connect',
    stainlessPath: '(resource) networks > (method) connect',
    qualified: 'client.networks.connect',
    params: ['id: string;', 'env?: string;', 'containerId?: string;', 'containerName?: string;'],
    markdown:
      "## connect\n\n`client.networks.connect(id: string, env?: string, containerId?: string, containerName?: string): void`\n\n**post** `/api/networks/{id}/connect`\n\nPOST /api/networks/{id}/connect\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `containerId?: string`\n\n- `containerName?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.networks.connect('id')\n```",
  },
  {
    name: 'disconnect',
    endpoint: '/api/networks/{id}/disconnect',
    httpMethod: 'post',
    summary: 'POST /api/networks/{id}/disconnect',
    description: 'POST /api/networks/{id}/disconnect',
    stainlessPath: '(resource) networks > (method) disconnect',
    qualified: 'client.networks.disconnect',
    params: [
      'id: string;',
      'env?: string;',
      'containerId?: string;',
      'containerName?: string;',
      'force?: string;',
    ],
    markdown:
      "## disconnect\n\n`client.networks.disconnect(id: string, env?: string, containerId?: string, containerName?: string, force?: string): void`\n\n**post** `/api/networks/{id}/disconnect`\n\nPOST /api/networks/{id}/disconnect\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n- `containerId?: string`\n\n- `containerName?: string`\n\n- `force?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.networks.disconnect('id')\n```",
  },
  {
    name: 'inspect',
    endpoint: '/api/networks/{id}/inspect',
    httpMethod: 'get',
    summary: 'GET /api/networks/{id}/inspect',
    description: 'GET /api/networks/{id}/inspect',
    stainlessPath: '(resource) networks > (method) inspect',
    qualified: 'client.networks.inspect',
    params: ['id: string;', 'env?: string;'],
    markdown:
      "## inspect\n\n`client.networks.inspect(id: string, env?: string): void`\n\n**get** `/api/networks/{id}/inspect`\n\nGET /api/networks/{id}/inspect\n\n### Parameters\n\n- `id: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.networks.inspect('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/notifications',
    httpMethod: 'post',
    summary: 'POST /api/notifications',
    description: 'POST /api/notifications',
    stainlessPath: '(resource) notifications > (method) create',
    qualified: 'client.notifications.create',
    params: [
      'config?: string;',
      'enabled?: string;',
      'event_types?: string;',
      'eventTypes?: string;',
      'name?: string;',
      'type?: string;',
    ],
    markdown:
      "## create\n\n`client.notifications.create(config?: string, enabled?: string, event_types?: string, eventTypes?: string, name?: string, type?: string): void`\n\n**post** `/api/notifications`\n\nPOST /api/notifications\n\n### Parameters\n\n- `config?: string`\n\n- `enabled?: string`\n\n- `event_types?: string`\n\n- `eventTypes?: string`\n\n- `name?: string`\n\n- `type?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/notifications/{id}',
    httpMethod: 'get',
    summary: 'GET /api/notifications/{id}',
    description: 'GET /api/notifications/{id}',
    stainlessPath: '(resource) notifications > (method) retrieve',
    qualified: 'client.notifications.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.notifications.retrieve(id: string): void`\n\n**get** `/api/notifications/{id}`\n\nGET /api/notifications/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/notifications/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/notifications/{id}',
    description: 'PUT /api/notifications/{id}',
    stainlessPath: '(resource) notifications > (method) update',
    qualified: 'client.notifications.update',
    params: [
      'id: string;',
      'config?: string;',
      'enabled?: string;',
      'event_types?: string;',
      'eventTypes?: string;',
      'name?: string;',
    ],
    markdown:
      "## update\n\n`client.notifications.update(id: string, config?: string, enabled?: string, event_types?: string, eventTypes?: string, name?: string): void`\n\n**put** `/api/notifications/{id}`\n\nPUT /api/notifications/{id}\n\n### Parameters\n\n- `id: string`\n\n- `config?: string`\n\n- `enabled?: string`\n\n- `event_types?: string`\n\n- `eventTypes?: string`\n\n- `name?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/notifications',
    httpMethod: 'get',
    summary: 'GET /api/notifications',
    description: 'GET /api/notifications',
    stainlessPath: '(resource) notifications > (method) list',
    qualified: 'client.notifications.list',
    markdown:
      "## list\n\n`client.notifications.list(): void`\n\n**get** `/api/notifications`\n\nGET /api/notifications\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/notifications/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/notifications/{id}',
    description: 'DELETE /api/notifications/{id}',
    stainlessPath: '(resource) notifications > (method) delete',
    qualified: 'client.notifications.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.notifications.delete(id: string): void`\n\n**delete** `/api/notifications/{id}`\n\nDELETE /api/notifications/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.delete('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/notifications/test',
    httpMethod: 'post',
    summary: 'POST /api/notifications/test',
    description: 'POST /api/notifications/test',
    stainlessPath: '(resource) notifications.test > (method) create',
    qualified: 'client.notifications.test.create',
    params: ['config?: string;', 'name?: string;', 'type?: string;'],
    markdown:
      "## create\n\n`client.notifications.test.create(config?: string, name?: string, type?: string): void`\n\n**post** `/api/notifications/test`\n\nPOST /api/notifications/test\n\n### Parameters\n\n- `config?: string`\n\n- `name?: string`\n\n- `type?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.test.create()\n```",
  },
  {
    name: 'run',
    endpoint: '/api/notifications/{id}/test',
    httpMethod: 'post',
    summary: 'POST /api/notifications/{id}/test',
    description: 'POST /api/notifications/{id}/test',
    stainlessPath: '(resource) notifications.test > (method) run',
    qualified: 'client.notifications.test.run',
    params: ['id: string;'],
    markdown:
      "## run\n\n`client.notifications.test.run(id: string): void`\n\n**post** `/api/notifications/{id}/test`\n\nPOST /api/notifications/{id}/test\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.test.run('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/notifications/trigger-test',
    httpMethod: 'post',
    summary: 'POST /api/notifications/trigger-test',
    description: 'POST /api/notifications/trigger-test',
    stainlessPath: '(resource) notifications.trigger_test > (method) create',
    qualified: 'client.notifications.triggerTest.create',
    params: ['environmentId?: string;', 'eventType?: string;', 'payload?: string;'],
    markdown:
      "## create\n\n`client.notifications.triggerTest.create(environmentId?: string, eventType?: string, payload?: string): void`\n\n**post** `/api/notifications/trigger-test`\n\nPOST /api/notifications/trigger-test\n\n### Parameters\n\n- `environmentId?: string`\n\n- `eventType?: string`\n\n- `payload?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.triggerTest.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/notifications/trigger-test',
    httpMethod: 'get',
    summary: 'GET /api/notifications/trigger-test',
    description: 'GET /api/notifications/trigger-test',
    stainlessPath: '(resource) notifications.trigger_test > (method) retrieve',
    qualified: 'client.notifications.triggerTest.retrieve',
    markdown:
      "## retrieve\n\n`client.notifications.triggerTest.retrieve(): void`\n\n**get** `/api/notifications/trigger-test`\n\nGET /api/notifications/trigger-test\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.notifications.triggerTest.retrieve()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/preferences/favorite-groups',
    httpMethod: 'post',
    summary: 'POST /api/preferences/favorite-groups',
    description: 'POST /api/preferences/favorite-groups',
    stainlessPath: '(resource) preferences.favorite_groups > (method) create',
    qualified: 'client.preferences.favoriteGroups.create',
    params: [
      'action?: string;',
      'containers?: string;',
      'environmentId?: string;',
      'groups?: string;',
      'name?: string;',
      'newName?: string;',
    ],
    markdown:
      "## create\n\n`client.preferences.favoriteGroups.create(action?: string, containers?: string, environmentId?: string, groups?: string, name?: string, newName?: string): void`\n\n**post** `/api/preferences/favorite-groups`\n\nPOST /api/preferences/favorite-groups\n\n### Parameters\n\n- `action?: string`\n\n- `containers?: string`\n\n- `environmentId?: string`\n\n- `groups?: string`\n\n- `name?: string`\n\n- `newName?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.preferences.favoriteGroups.create()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/preferences/favorite-groups',
    httpMethod: 'get',
    summary: 'GET /api/preferences/favorite-groups',
    description: 'GET /api/preferences/favorite-groups',
    stainlessPath: '(resource) preferences.favorite_groups > (method) list',
    qualified: 'client.preferences.favoriteGroups.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.preferences.favoriteGroups.list(env?: string): void`\n\n**get** `/api/preferences/favorite-groups`\n\nGET /api/preferences/favorite-groups\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.preferences.favoriteGroups.list()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/preferences/favorites',
    httpMethod: 'post',
    summary: 'POST /api/preferences/favorites',
    description: 'POST /api/preferences/favorites',
    stainlessPath: '(resource) preferences.favorites > (method) create',
    qualified: 'client.preferences.favorites.create',
    params: ['action?: string;', 'containerName?: string;', 'environmentId?: string;', 'favorites?: string;'],
    markdown:
      "## create\n\n`client.preferences.favorites.create(action?: string, containerName?: string, environmentId?: string, favorites?: string): void`\n\n**post** `/api/preferences/favorites`\n\nPOST /api/preferences/favorites\n\n### Parameters\n\n- `action?: string`\n\n- `containerName?: string`\n\n- `environmentId?: string`\n\n- `favorites?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.preferences.favorites.create()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/preferences/favorites',
    httpMethod: 'get',
    summary: 'GET /api/preferences/favorites',
    description: 'GET /api/preferences/favorites',
    stainlessPath: '(resource) preferences.favorites > (method) list',
    qualified: 'client.preferences.favorites.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.preferences.favorites.list(env?: string): void`\n\n**get** `/api/preferences/favorites`\n\nGET /api/preferences/favorites\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.preferences.favorites.list()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/preferences/grid',
    httpMethod: 'post',
    summary: 'POST /api/preferences/grid',
    description: 'POST /api/preferences/grid',
    stainlessPath: '(resource) preferences.grid > (method) create',
    qualified: 'client.preferences.grid.create',
    params: ['columns?: string;', 'gridId?: string;'],
    markdown:
      "## create\n\n`client.preferences.grid.create(columns?: string, gridId?: string): void`\n\n**post** `/api/preferences/grid`\n\nPOST /api/preferences/grid\n\n### Parameters\n\n- `columns?: string`\n\n- `gridId?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.preferences.grid.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/preferences/grid',
    httpMethod: 'get',
    summary: 'GET /api/preferences/grid',
    description: 'GET /api/preferences/grid',
    stainlessPath: '(resource) preferences.grid > (method) retrieve',
    qualified: 'client.preferences.grid.retrieve',
    markdown:
      "## retrieve\n\n`client.preferences.grid.retrieve(): void`\n\n**get** `/api/preferences/grid`\n\nGET /api/preferences/grid\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.preferences.grid.retrieve()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/preferences/grid',
    httpMethod: 'delete',
    summary: 'DELETE /api/preferences/grid',
    description: 'DELETE /api/preferences/grid',
    stainlessPath: '(resource) preferences.grid > (method) delete',
    qualified: 'client.preferences.grid.delete',
    params: ['gridId?: string;'],
    markdown:
      "## delete\n\n`client.preferences.grid.delete(gridId?: string): void`\n\n**delete** `/api/preferences/grid`\n\nDELETE /api/preferences/grid\n\n### Parameters\n\n- `gridId?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.preferences.grid.delete()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/profile',
    httpMethod: 'get',
    summary: 'GET /api/profile',
    description: 'GET /api/profile',
    stainlessPath: '(resource) profile > (method) retrieve',
    qualified: 'client.profile.retrieve',
    markdown:
      "## retrieve\n\n`client.profile.retrieve(): void`\n\n**get** `/api/profile`\n\nGET /api/profile\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.profile.retrieve()\n```",
  },
  {
    name: 'update',
    endpoint: '/api/profile',
    httpMethod: 'put',
    summary: 'PUT /api/profile',
    description: 'PUT /api/profile',
    stainlessPath: '(resource) profile > (method) update',
    qualified: 'client.profile.update',
    params: [
      'currentPassword?: string;',
      'displayName?: string;',
      'email?: string;',
      'newPassword?: string;',
    ],
    markdown:
      "## update\n\n`client.profile.update(currentPassword?: string, displayName?: string, email?: string, newPassword?: string): void`\n\n**put** `/api/profile`\n\nPUT /api/profile\n\n### Parameters\n\n- `currentPassword?: string`\n\n- `displayName?: string`\n\n- `email?: string`\n\n- `newPassword?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.profile.update()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/profile/avatar',
    httpMethod: 'delete',
    summary: 'DELETE /api/profile/avatar',
    description: 'DELETE /api/profile/avatar',
    stainlessPath: '(resource) profile.avatar > (method) delete',
    qualified: 'client.profile.avatar.delete',
    markdown:
      "## delete\n\n`client.profile.avatar.delete(): void`\n\n**delete** `/api/profile/avatar`\n\nDELETE /api/profile/avatar\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.profile.avatar.delete()\n```",
  },
  {
    name: 'upload',
    endpoint: '/api/profile/avatar',
    httpMethod: 'post',
    summary: 'POST /api/profile/avatar',
    description: 'POST /api/profile/avatar',
    stainlessPath: '(resource) profile.avatar > (method) upload',
    qualified: 'client.profile.avatar.upload',
    params: ['avatar?: string;'],
    markdown:
      "## upload\n\n`client.profile.avatar.upload(avatar?: string): void`\n\n**post** `/api/profile/avatar`\n\nPOST /api/profile/avatar\n\n### Parameters\n\n- `avatar?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.profile.avatar.upload()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/profile/preferences',
    httpMethod: 'get',
    summary: 'GET /api/profile/preferences',
    description: 'GET /api/profile/preferences',
    stainlessPath: '(resource) profile.preferences > (method) retrieve',
    qualified: 'client.profile.preferences.retrieve',
    markdown:
      "## retrieve\n\n`client.profile.preferences.retrieve(): void`\n\n**get** `/api/profile/preferences`\n\nGET /api/profile/preferences\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.profile.preferences.retrieve()\n```",
  },
  {
    name: 'update',
    endpoint: '/api/profile/preferences',
    httpMethod: 'put',
    summary: 'PUT /api/profile/preferences',
    description: 'PUT /api/profile/preferences',
    stainlessPath: '(resource) profile.preferences > (method) update',
    qualified: 'client.profile.preferences.update',
    params: [
      'darkTheme?: string;',
      'editorFont?: string;',
      'font?: string;',
      'fontSize?: string;',
      'gridFontSize?: string;',
      'lightTheme?: string;',
      'terminalFont?: string;',
    ],
    markdown:
      "## update\n\n`client.profile.preferences.update(darkTheme?: string, editorFont?: string, font?: string, fontSize?: string, gridFontSize?: string, lightTheme?: string, terminalFont?: string): void`\n\n**put** `/api/profile/preferences`\n\nPUT /api/profile/preferences\n\n### Parameters\n\n- `darkTheme?: string`\n\n- `editorFont?: string`\n\n- `font?: string`\n\n- `fontSize?: string`\n\n- `gridFontSize?: string`\n\n- `lightTheme?: string`\n\n- `terminalFont?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.profile.preferences.update()\n```",
  },
  {
    name: 'prune_all',
    endpoint: '/api/prune/all',
    httpMethod: 'post',
    summary: 'POST /api/prune/all',
    description: 'POST /api/prune/all',
    stainlessPath: '(resource) prune > (method) prune_all',
    qualified: 'client.prune.pruneAll',
    params: ['env?: string;'],
    markdown:
      "## prune_all\n\n`client.prune.pruneAll(env?: string): void`\n\n**post** `/api/prune/all`\n\nPOST /api/prune/all\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.prune.pruneAll()\n```",
  },
  {
    name: 'prune_containers',
    endpoint: '/api/prune/containers',
    httpMethod: 'post',
    summary: 'POST /api/prune/containers',
    description: 'POST /api/prune/containers',
    stainlessPath: '(resource) prune > (method) prune_containers',
    qualified: 'client.prune.pruneContainers',
    params: ['env?: string;'],
    markdown:
      "## prune_containers\n\n`client.prune.pruneContainers(env?: string): void`\n\n**post** `/api/prune/containers`\n\nPOST /api/prune/containers\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.prune.pruneContainers()\n```",
  },
  {
    name: 'prune_images',
    endpoint: '/api/prune/images',
    httpMethod: 'post',
    summary: 'POST /api/prune/images',
    description: 'POST /api/prune/images',
    stainlessPath: '(resource) prune > (method) prune_images',
    qualified: 'client.prune.pruneImages',
    params: ['dangling?: string;', 'env?: string;'],
    markdown:
      "## prune_images\n\n`client.prune.pruneImages(dangling?: string, env?: string): void`\n\n**post** `/api/prune/images`\n\nPOST /api/prune/images\n\n### Parameters\n\n- `dangling?: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.prune.pruneImages()\n```",
  },
  {
    name: 'prune_networks',
    endpoint: '/api/prune/networks',
    httpMethod: 'post',
    summary: 'POST /api/prune/networks',
    description: 'POST /api/prune/networks',
    stainlessPath: '(resource) prune > (method) prune_networks',
    qualified: 'client.prune.pruneNetworks',
    params: ['env?: string;'],
    markdown:
      "## prune_networks\n\n`client.prune.pruneNetworks(env?: string): void`\n\n**post** `/api/prune/networks`\n\nPOST /api/prune/networks\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.prune.pruneNetworks()\n```",
  },
  {
    name: 'prune_volumes',
    endpoint: '/api/prune/volumes',
    httpMethod: 'post',
    summary: 'POST /api/prune/volumes',
    description: 'POST /api/prune/volumes',
    stainlessPath: '(resource) prune > (method) prune_volumes',
    qualified: 'client.prune.pruneVolumes',
    params: ['env?: string;'],
    markdown:
      "## prune_volumes\n\n`client.prune.pruneVolumes(env?: string): void`\n\n**post** `/api/prune/volumes`\n\nPOST /api/prune/volumes\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.prune.pruneVolumes()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/roles',
    httpMethod: 'post',
    summary: 'POST /api/roles',
    description: 'POST /api/roles',
    stainlessPath: '(resource) roles > (method) create',
    qualified: 'client.roles.create',
    params: ['description?: string;', 'environmentIds?: string;', 'name?: string;', 'permissions?: string;'],
    markdown:
      "## create\n\n`client.roles.create(description?: string, environmentIds?: string, name?: string, permissions?: string): void`\n\n**post** `/api/roles`\n\nPOST /api/roles\n\n### Parameters\n\n- `description?: string`\n\n- `environmentIds?: string`\n\n- `name?: string`\n\n- `permissions?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.roles.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/roles/{id}',
    httpMethod: 'get',
    summary: 'GET /api/roles/{id}',
    description: 'GET /api/roles/{id}',
    stainlessPath: '(resource) roles > (method) retrieve',
    qualified: 'client.roles.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.roles.retrieve(id: string): void`\n\n**get** `/api/roles/{id}`\n\nGET /api/roles/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.roles.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/roles/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/roles/{id}',
    description: 'PUT /api/roles/{id}',
    stainlessPath: '(resource) roles > (method) update',
    qualified: 'client.roles.update',
    params: ['id: string;'],
    markdown:
      "## update\n\n`client.roles.update(id: string): void`\n\n**put** `/api/roles/{id}`\n\nPUT /api/roles/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.roles.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/roles',
    httpMethod: 'get',
    summary: 'GET /api/roles',
    description: 'GET /api/roles',
    stainlessPath: '(resource) roles > (method) list',
    qualified: 'client.roles.list',
    markdown:
      "## list\n\n`client.roles.list(): void`\n\n**get** `/api/roles`\n\nGET /api/roles\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.roles.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/roles/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/roles/{id}',
    description: 'DELETE /api/roles/{id}',
    stainlessPath: '(resource) roles > (method) delete',
    qualified: 'client.roles.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.roles.delete(id: string): void`\n\n**delete** `/api/roles/{id}`\n\nDELETE /api/roles/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.roles.delete('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/schedules',
    httpMethod: 'get',
    summary: 'GET /api/schedules',
    description: 'GET /api/schedules',
    stainlessPath: '(resource) schedules > (method) list',
    qualified: 'client.schedules.list',
    markdown:
      "## list\n\n`client.schedules.list(): void`\n\n**get** `/api/schedules`\n\nGET /api/schedules\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/schedules/{type}/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/schedules/{type}/{id}',
    description: 'DELETE /api/schedules/{type}/{id}',
    stainlessPath: '(resource) schedules > (method) delete',
    qualified: 'client.schedules.delete',
    params: ['type: string;', 'id: string;'],
    markdown:
      "## delete\n\n`client.schedules.delete(type: string, id: string): void`\n\n**delete** `/api/schedules/{type}/{id}`\n\nDELETE /api/schedules/{type}/{id}\n\n### Parameters\n\n- `type: string`\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.delete('id', { type: 'type' })\n```",
  },
  {
    name: 'run',
    endpoint: '/api/schedules/{type}/{id}/run',
    httpMethod: 'post',
    summary: 'POST /api/schedules/{type}/{id}/run',
    description: 'POST /api/schedules/{type}/{id}/run',
    stainlessPath: '(resource) schedules > (method) run',
    qualified: 'client.schedules.run',
    params: ['type: string;', 'id: string;'],
    markdown:
      "## run\n\n`client.schedules.run(type: string, id: string): void`\n\n**post** `/api/schedules/{type}/{id}/run`\n\nPOST /api/schedules/{type}/{id}/run\n\n### Parameters\n\n- `type: string`\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.run('id', { type: 'type' })\n```",
  },
  {
    name: 'stream',
    endpoint: '/api/schedules/stream',
    httpMethod: 'get',
    summary: 'GET /api/schedules/stream',
    description: 'GET /api/schedules/stream',
    stainlessPath: '(resource) schedules > (method) stream',
    qualified: 'client.schedules.stream',
    markdown:
      "## stream\n\n`client.schedules.stream(): void`\n\n**get** `/api/schedules/stream`\n\nGET /api/schedules/stream\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.stream()\n```",
  },
  {
    name: 'toggle',
    endpoint: '/api/schedules/{type}/{id}/toggle',
    httpMethod: 'post',
    summary: 'POST /api/schedules/{type}/{id}/toggle',
    description: 'POST /api/schedules/{type}/{id}/toggle',
    stainlessPath: '(resource) schedules > (method) toggle',
    qualified: 'client.schedules.toggle',
    params: ['type: string;', 'id: string;'],
    markdown:
      "## toggle\n\n`client.schedules.toggle(type: string, id: string): void`\n\n**post** `/api/schedules/{type}/{id}/toggle`\n\nPOST /api/schedules/{type}/{id}/toggle\n\n### Parameters\n\n- `type: string`\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.toggle('id', { type: 'type' })\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/schedules/executions/{id}',
    httpMethod: 'get',
    summary: 'GET /api/schedules/executions/{id}',
    description: 'GET /api/schedules/executions/{id}',
    stainlessPath: '(resource) schedules.executions > (method) retrieve',
    qualified: 'client.schedules.executions.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.schedules.executions.retrieve(id: string): void`\n\n**get** `/api/schedules/executions/{id}`\n\nGET /api/schedules/executions/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.executions.retrieve('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/schedules/executions',
    httpMethod: 'get',
    summary: 'GET /api/schedules/executions',
    description: 'GET /api/schedules/executions',
    stainlessPath: '(resource) schedules.executions > (method) list',
    qualified: 'client.schedules.executions.list',
    params: [
      'environmentId?: string;',
      'fromDate?: string;',
      'limit?: string;',
      'offset?: string;',
      'scheduleId?: string;',
      'scheduleType?: string;',
      'status?: string;',
      'statuses?: string;',
      'toDate?: string;',
      'triggeredBy?: string;',
    ],
    markdown:
      "## list\n\n`client.schedules.executions.list(environmentId?: string, fromDate?: string, limit?: string, offset?: string, scheduleId?: string, scheduleType?: string, status?: string, statuses?: string, toDate?: string, triggeredBy?: string): void`\n\n**get** `/api/schedules/executions`\n\nGET /api/schedules/executions\n\n### Parameters\n\n- `environmentId?: string`\n\n- `fromDate?: string`\n\n- `limit?: string`\n\n- `offset?: string`\n\n- `scheduleId?: string`\n\n- `scheduleType?: string`\n\n- `status?: string`\n\n- `statuses?: string`\n\n- `toDate?: string`\n\n- `triggeredBy?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.executions.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/schedules/executions/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/schedules/executions/{id}',
    description: 'DELETE /api/schedules/executions/{id}',
    stainlessPath: '(resource) schedules.executions > (method) delete',
    qualified: 'client.schedules.executions.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.schedules.executions.delete(id: string): void`\n\n**delete** `/api/schedules/executions/{id}`\n\nDELETE /api/schedules/executions/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.executions.delete('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/schedules/settings',
    httpMethod: 'get',
    summary: 'GET /api/schedules/settings',
    description: 'GET /api/schedules/settings',
    stainlessPath: '(resource) schedules.settings > (method) retrieve',
    qualified: 'client.schedules.settings.retrieve',
    markdown:
      "## retrieve\n\n`client.schedules.settings.retrieve(): void`\n\n**get** `/api/schedules/settings`\n\nGET /api/schedules/settings\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.settings.retrieve()\n```",
  },
  {
    name: 'update',
    endpoint: '/api/schedules/settings',
    httpMethod: 'put',
    summary: 'PUT /api/schedules/settings',
    description: 'PUT /api/schedules/settings',
    stainlessPath: '(resource) schedules.settings > (method) update',
    qualified: 'client.schedules.settings.update',
    params: ['hideSystemJobs?: string;'],
    markdown:
      "## update\n\n`client.schedules.settings.update(hideSystemJobs?: string): void`\n\n**put** `/api/schedules/settings`\n\nPUT /api/schedules/settings\n\n### Parameters\n\n- `hideSystemJobs?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.settings.update()\n```",
  },
  {
    name: 'toggle',
    endpoint: '/api/schedules/system/{id}/toggle',
    httpMethod: 'post',
    summary: 'POST /api/schedules/system/{id}/toggle',
    description: 'POST /api/schedules/system/{id}/toggle',
    stainlessPath: '(resource) schedules.system > (method) toggle',
    qualified: 'client.schedules.system.toggle',
    params: ['id: string;'],
    markdown:
      "## toggle\n\n`client.schedules.system.toggle(id: string): void`\n\n**post** `/api/schedules/system/{id}/toggle`\n\nPOST /api/schedules/system/{id}/toggle\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.schedules.system.toggle('id')\n```",
  },
  {
    name: 'check_status',
    endpoint: '/api/self-update/check',
    httpMethod: 'get',
    summary: 'GET /api/self-update/check',
    description: 'GET /api/self-update/check',
    stainlessPath: '(resource) self_update > (method) check_status',
    qualified: 'client.selfUpdate.checkStatus',
    markdown:
      "## check_status\n\n`client.selfUpdate.checkStatus(): void`\n\n**get** `/api/self-update/check`\n\nGET /api/self-update/check\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.selfUpdate.checkStatus()\n```",
  },
  {
    name: 'get_progress',
    endpoint: '/api/self-update/progress',
    httpMethod: 'get',
    summary: 'GET /api/self-update/progress',
    description: 'GET /api/self-update/progress',
    stainlessPath: '(resource) self_update > (method) get_progress',
    qualified: 'client.selfUpdate.getProgress',
    params: ['id?: string;'],
    markdown:
      "## get_progress\n\n`client.selfUpdate.getProgress(id?: string): void`\n\n**get** `/api/self-update/progress`\n\nGET /api/self-update/progress\n\n### Parameters\n\n- `id?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.selfUpdate.getProgress()\n```",
  },
  {
    name: 'initiate',
    endpoint: '/api/self-update',
    httpMethod: 'post',
    summary: 'POST /api/self-update',
    description: 'POST /api/self-update',
    stainlessPath: '(resource) self_update > (method) initiate',
    qualified: 'client.selfUpdate.initiate',
    params: ['newImage?: string;'],
    markdown:
      "## initiate\n\n`client.selfUpdate.initiate(newImage?: string): void`\n\n**post** `/api/self-update`\n\nPOST /api/self-update\n\n### Parameters\n\n- `newImage?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.selfUpdate.initiate()\n```",
  },
  {
    name: 'retrieve_theme',
    endpoint: '/api/settings/theme',
    httpMethod: 'get',
    summary: 'GET /api/settings/theme',
    description: 'GET /api/settings/theme',
    stainlessPath: '(resource) settings > (method) retrieve_theme',
    qualified: 'client.settings.retrieveTheme',
    markdown:
      "## retrieve_theme\n\n`client.settings.retrieveTheme(): void`\n\n**get** `/api/settings/theme`\n\nGET /api/settings/theme\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.settings.retrieveTheme()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/settings/general',
    httpMethod: 'post',
    summary: 'POST /api/settings/general',
    description: 'POST /api/settings/general',
    stainlessPath: '(resource) settings.general > (method) create',
    qualified: 'client.settings.general.create',
    params: [
      'confirmDestructive?: string;',
      'darkTheme?: string;',
      'dateFormat?: string;',
      'defaultGrypeArgs?: string;',
      'defaultTimezone?: string;',
      'defaultTrivyArgs?: string;',
      'downloadFormat?: string;',
      'editorFont?: string;',
      'eventCleanupCron?: string;',
      'eventCleanupEnabled?: string;',
      'eventCollectionMode?: string;',
      'eventPollInterval?: string;',
      'eventRetentionDays?: string;',
      'externalStackPaths?: string;',
      'font?: string;',
      'fontSize?: string;',
      'gridFontSize?: string;',
      'highlightUpdates?: string;',
      'lightTheme?: string;',
      'logBufferSizeKb?: string;',
      'metricsCollectionInterval?: string;',
      'primaryStackLocation?: string;',
      'scheduleCleanupCron?: string;',
      'scheduleCleanupEnabled?: string;',
      'scheduleRetentionDays?: string;',
      'showStoppedContainers?: string;',
      'terminalFont?: string;',
      'timeFormat?: string;',
    ],
    markdown:
      "## create\n\n`client.settings.general.create(confirmDestructive?: string, darkTheme?: string, dateFormat?: string, defaultGrypeArgs?: string, defaultTimezone?: string, defaultTrivyArgs?: string, downloadFormat?: string, editorFont?: string, eventCleanupCron?: string, eventCleanupEnabled?: string, eventCollectionMode?: string, eventPollInterval?: string, eventRetentionDays?: string, externalStackPaths?: string, font?: string, fontSize?: string, gridFontSize?: string, highlightUpdates?: string, lightTheme?: string, logBufferSizeKb?: string, metricsCollectionInterval?: string, primaryStackLocation?: string, scheduleCleanupCron?: string, scheduleCleanupEnabled?: string, scheduleRetentionDays?: string, showStoppedContainers?: string, terminalFont?: string, timeFormat?: string): void`\n\n**post** `/api/settings/general`\n\nPOST /api/settings/general\n\n### Parameters\n\n- `confirmDestructive?: string`\n\n- `darkTheme?: string`\n\n- `dateFormat?: string`\n\n- `defaultGrypeArgs?: string`\n\n- `defaultTimezone?: string`\n\n- `defaultTrivyArgs?: string`\n\n- `downloadFormat?: string`\n\n- `editorFont?: string`\n\n- `eventCleanupCron?: string`\n\n- `eventCleanupEnabled?: string`\n\n- `eventCollectionMode?: string`\n\n- `eventPollInterval?: string`\n\n- `eventRetentionDays?: string`\n\n- `externalStackPaths?: string`\n\n- `font?: string`\n\n- `fontSize?: string`\n\n- `gridFontSize?: string`\n\n- `highlightUpdates?: string`\n\n- `lightTheme?: string`\n\n- `logBufferSizeKb?: string`\n\n- `metricsCollectionInterval?: string`\n\n- `primaryStackLocation?: string`\n\n- `scheduleCleanupCron?: string`\n\n- `scheduleCleanupEnabled?: string`\n\n- `scheduleRetentionDays?: string`\n\n- `showStoppedContainers?: string`\n\n- `terminalFont?: string`\n\n- `timeFormat?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.settings.general.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/settings/general',
    httpMethod: 'get',
    summary: 'GET /api/settings/general',
    description: 'GET /api/settings/general',
    stainlessPath: '(resource) settings.general > (method) retrieve',
    qualified: 'client.settings.general.retrieve',
    markdown:
      "## retrieve\n\n`client.settings.general.retrieve(): void`\n\n**get** `/api/settings/general`\n\nGET /api/settings/general\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.settings.general.retrieve()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/settings/scanner',
    httpMethod: 'post',
    summary: 'POST /api/settings/scanner',
    description: 'POST /api/settings/scanner',
    stainlessPath: '(resource) settings.scanner > (method) create',
    qualified: 'client.settings.scanner.create',
    params: ['envId?: string;', 'grypeArgs?: string;', 'scanner?: string;', 'trivyArgs?: string;'],
    markdown:
      "## create\n\n`client.settings.scanner.create(envId?: string, grypeArgs?: string, scanner?: string, trivyArgs?: string): void`\n\n**post** `/api/settings/scanner`\n\nPOST /api/settings/scanner\n\n### Parameters\n\n- `envId?: string`\n\n- `grypeArgs?: string`\n\n- `scanner?: string`\n\n- `trivyArgs?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.settings.scanner.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/settings/scanner',
    httpMethod: 'get',
    summary: 'GET /api/settings/scanner',
    description: 'GET /api/settings/scanner',
    stainlessPath: '(resource) settings.scanner > (method) retrieve',
    qualified: 'client.settings.scanner.retrieve',
    params: ['checkUpdates?: string;', 'env?: string;', 'settingsOnly?: string;'],
    markdown:
      "## retrieve\n\n`client.settings.scanner.retrieve(checkUpdates?: string, env?: string, settingsOnly?: string): void`\n\n**get** `/api/settings/scanner`\n\nGET /api/settings/scanner\n\n### Parameters\n\n- `checkUpdates?: string`\n\n- `env?: string`\n\n- `settingsOnly?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.settings.scanner.retrieve()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/settings/scanner',
    httpMethod: 'delete',
    summary: 'DELETE /api/settings/scanner',
    description: 'DELETE /api/settings/scanner',
    stainlessPath: '(resource) settings.scanner > (method) delete',
    qualified: 'client.settings.scanner.delete',
    params: ['env?: string;', 'removeImages?: string;', 'scanner?: string;'],
    markdown:
      "## delete\n\n`client.settings.scanner.delete(env?: string, removeImages?: string, scanner?: string): void`\n\n**delete** `/api/settings/scanner`\n\nDELETE /api/settings/scanner\n\n### Parameters\n\n- `env?: string`\n\n- `removeImages?: string`\n\n- `scanner?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.settings.scanner.delete()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/stacks',
    httpMethod: 'post',
    summary: 'POST /api/stacks',
    description: 'POST /api/stacks',
    stainlessPath: '(resource) stacks > (method) create',
    qualified: 'client.stacks.create',
    params: [
      'env?: string;',
      'compose?: string;',
      'composePath?: string;',
      'envPath?: string;',
      'envVars?: string;',
      'name?: string;',
      'rawEnvContent?: string;',
      'start?: string;',
    ],
    markdown:
      "## create\n\n`client.stacks.create(env?: string, compose?: string, composePath?: string, envPath?: string, envVars?: string, name?: string, rawEnvContent?: string, start?: string): void`\n\n**post** `/api/stacks`\n\nPOST /api/stacks\n\n### Parameters\n\n- `env?: string`\n\n- `compose?: string`\n\n- `composePath?: string`\n\n- `envPath?: string`\n\n- `envVars?: string`\n\n- `name?: string`\n\n- `rawEnvContent?: string`\n\n- `start?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.create()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/stacks',
    httpMethod: 'get',
    summary: 'GET /api/stacks',
    description: 'GET /api/stacks',
    stainlessPath: '(resource) stacks > (method) list',
    qualified: 'client.stacks.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.stacks.list(env?: string): void`\n\n**get** `/api/stacks`\n\nGET /api/stacks\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/stacks/{name}',
    httpMethod: 'delete',
    summary: 'DELETE /api/stacks/{name}',
    description: 'DELETE /api/stacks/{name}',
    stainlessPath: '(resource) stacks > (method) delete',
    qualified: 'client.stacks.delete',
    params: ['name: string;', 'env?: string;', 'force?: string;'],
    markdown:
      "## delete\n\n`client.stacks.delete(name: string, env?: string, force?: string): void`\n\n**delete** `/api/stacks/{name}`\n\nDELETE /api/stacks/{name}\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `force?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.delete('name')\n```",
  },
  {
    name: 'adopt',
    endpoint: '/api/stacks/adopt',
    httpMethod: 'post',
    summary: 'POST /api/stacks/adopt',
    description: 'POST /api/stacks/adopt',
    stainlessPath: '(resource) stacks > (method) adopt',
    qualified: 'client.stacks.adopt',
    params: ['environmentId?: string;', 'stacks?: string;'],
    markdown:
      "## adopt\n\n`client.stacks.adopt(environmentId?: string, stacks?: string): void`\n\n**post** `/api/stacks/adopt`\n\nPOST /api/stacks/adopt\n\n### Parameters\n\n- `environmentId?: string`\n\n- `stacks?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.adopt()\n```",
  },
  {
    name: 'check_path_change',
    endpoint: '/api/stacks/{name}/check-path-change',
    httpMethod: 'post',
    summary: 'POST /api/stacks/{name}/check-path-change',
    description: 'POST /api/stacks/{name}/check-path-change',
    stainlessPath: '(resource) stacks > (method) check_path_change',
    qualified: 'client.stacks.checkPathChange',
    params: ['name: string;', 'env?: string;', 'newComposePath?: string;'],
    markdown:
      "## check_path_change\n\n`client.stacks.checkPathChange(name: string, env?: string, newComposePath?: string): void`\n\n**post** `/api/stacks/{name}/check-path-change`\n\nPOST /api/stacks/{name}/check-path-change\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `newComposePath?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.checkPathChange('name')\n```",
  },
  {
    name: 'down',
    endpoint: '/api/stacks/{name}/down',
    httpMethod: 'post',
    summary: 'POST /api/stacks/{name}/down',
    description: 'POST /api/stacks/{name}/down',
    stainlessPath: '(resource) stacks > (method) down',
    qualified: 'client.stacks.down',
    params: ['name: string;', 'env?: string;', 'removeVolumes?: string;'],
    markdown:
      "## down\n\n`client.stacks.down(name: string, env?: string, removeVolumes?: string): void`\n\n**post** `/api/stacks/{name}/down`\n\nPOST /api/stacks/{name}/down\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `removeVolumes?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.down('name')\n```",
  },
  {
    name: 'get_base_path',
    endpoint: '/api/stacks/base-path',
    httpMethod: 'get',
    summary: 'GET /api/stacks/base-path',
    description: 'GET /api/stacks/base-path',
    stainlessPath: '(resource) stacks > (method) get_base_path',
    qualified: 'client.stacks.getBasePath',
    markdown:
      "## get_base_path\n\n`client.stacks.getBasePath(): void`\n\n**get** `/api/stacks/base-path`\n\nGET /api/stacks/base-path\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.getBasePath()\n```",
  },
  {
    name: 'get_default_path',
    endpoint: '/api/stacks/default-path',
    httpMethod: 'get',
    summary: 'GET /api/stacks/default-path',
    description: 'GET /api/stacks/default-path',
    stainlessPath: '(resource) stacks > (method) get_default_path',
    qualified: 'client.stacks.getDefaultPath',
    params: ['env?: string;', 'location?: string;', 'name?: string;'],
    markdown:
      "## get_default_path\n\n`client.stacks.getDefaultPath(env?: string, location?: string, name?: string): void`\n\n**get** `/api/stacks/default-path`\n\nGET /api/stacks/default-path\n\n### Parameters\n\n- `env?: string`\n\n- `location?: string`\n\n- `name?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.getDefaultPath()\n```",
  },
  {
    name: 'get_path_hints',
    endpoint: '/api/stacks/path-hints',
    httpMethod: 'get',
    summary: 'GET /api/stacks/path-hints',
    description: 'GET /api/stacks/path-hints',
    stainlessPath: '(resource) stacks > (method) get_path_hints',
    qualified: 'client.stacks.getPathHints',
    params: ['env?: string;', 'name?: string;'],
    markdown:
      "## get_path_hints\n\n`client.stacks.getPathHints(env?: string, name?: string): void`\n\n**get** `/api/stacks/path-hints`\n\nGET /api/stacks/path-hints\n\n### Parameters\n\n- `env?: string`\n\n- `name?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.getPathHints()\n```",
  },
  {
    name: 'get_sources',
    endpoint: '/api/stacks/sources',
    httpMethod: 'get',
    summary: 'GET /api/stacks/sources',
    description: 'GET /api/stacks/sources',
    stainlessPath: '(resource) stacks > (method) get_sources',
    qualified: 'client.stacks.getSources',
    params: ['env?: string;'],
    markdown:
      "## get_sources\n\n`client.stacks.getSources(env?: string): void`\n\n**get** `/api/stacks/sources`\n\nGET /api/stacks/sources\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.getSources()\n```",
  },
  {
    name: 'relocate',
    endpoint: '/api/stacks/{name}/relocate',
    httpMethod: 'post',
    summary: 'POST /api/stacks/{name}/relocate',
    description: 'POST /api/stacks/{name}/relocate',
    stainlessPath: '(resource) stacks > (method) relocate',
    qualified: 'client.stacks.relocate',
    params: [
      'name: string;',
      'env?: string;',
      'newComposePath?: string;',
      'newEnvPath?: string;',
      'oldDir?: string;',
    ],
    markdown:
      "## relocate\n\n`client.stacks.relocate(name: string, env?: string, newComposePath?: string, newEnvPath?: string, oldDir?: string): void`\n\n**post** `/api/stacks/{name}/relocate`\n\nPOST /api/stacks/{name}/relocate\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `newComposePath?: string`\n\n- `newEnvPath?: string`\n\n- `oldDir?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.relocate('name')\n```",
  },
  {
    name: 'restart',
    endpoint: '/api/stacks/{name}/restart',
    httpMethod: 'post',
    summary: 'POST /api/stacks/{name}/restart',
    description: 'POST /api/stacks/{name}/restart',
    stainlessPath: '(resource) stacks > (method) restart',
    qualified: 'client.stacks.restart',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## restart\n\n`client.stacks.restart(name: string, env?: string): void`\n\n**post** `/api/stacks/{name}/restart`\n\nPOST /api/stacks/{name}/restart\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.restart('name')\n```",
  },
  {
    name: 'scan',
    endpoint: '/api/stacks/scan',
    httpMethod: 'post',
    summary: 'POST /api/stacks/scan',
    description: 'POST /api/stacks/scan',
    stainlessPath: '(resource) stacks > (method) scan',
    qualified: 'client.stacks.scan',
    params: ['path?: string;'],
    markdown:
      "## scan\n\n`client.stacks.scan(path?: string): void`\n\n**post** `/api/stacks/scan`\n\nPOST /api/stacks/scan\n\n### Parameters\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.scan()\n```",
  },
  {
    name: 'start',
    endpoint: '/api/stacks/{name}/start',
    httpMethod: 'post',
    summary: 'POST /api/stacks/{name}/start',
    description: 'POST /api/stacks/{name}/start',
    stainlessPath: '(resource) stacks > (method) start',
    qualified: 'client.stacks.start',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## start\n\n`client.stacks.start(name: string, env?: string): void`\n\n**post** `/api/stacks/{name}/start`\n\nPOST /api/stacks/{name}/start\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.start('name')\n```",
  },
  {
    name: 'stop',
    endpoint: '/api/stacks/{name}/stop',
    httpMethod: 'post',
    summary: 'POST /api/stacks/{name}/stop',
    description: 'POST /api/stacks/{name}/stop',
    stainlessPath: '(resource) stacks > (method) stop',
    qualified: 'client.stacks.stop',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## stop\n\n`client.stacks.stop(name: string, env?: string): void`\n\n**post** `/api/stacks/{name}/stop`\n\nPOST /api/stacks/{name}/stop\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.stop('name')\n```",
  },
  {
    name: 'validate_path',
    endpoint: '/api/stacks/validate-path',
    httpMethod: 'post',
    summary: 'POST /api/stacks/validate-path',
    description: 'POST /api/stacks/validate-path',
    stainlessPath: '(resource) stacks > (method) validate_path',
    qualified: 'client.stacks.validatePath',
    params: ['path?: string;'],
    markdown:
      "## validate_path\n\n`client.stacks.validatePath(path?: string): void`\n\n**post** `/api/stacks/validate-path`\n\nPOST /api/stacks/validate-path\n\n### Parameters\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.validatePath()\n```",
  },
  {
    name: 'update',
    endpoint: '/api/stacks/{name}/compose',
    httpMethod: 'put',
    summary: 'PUT /api/stacks/{name}/compose',
    description: 'PUT /api/stacks/{name}/compose',
    stainlessPath: '(resource) stacks.compose > (method) update',
    qualified: 'client.stacks.compose.update',
    params: [
      'name: string;',
      'env?: string;',
      'composePath?: string;',
      'content?: string;',
      'envPath?: string;',
      'moveFromDir?: string;',
      'oldComposePath?: string;',
      'oldEnvPath?: string;',
      'restart = false?: string;',
    ],
    markdown:
      "## update\n\n`client.stacks.compose.update(name: string, env?: string, composePath?: string, content?: string, envPath?: string, moveFromDir?: string, oldComposePath?: string, oldEnvPath?: string, restart = false?: string): void`\n\n**put** `/api/stacks/{name}/compose`\n\nPUT /api/stacks/{name}/compose\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `composePath?: string`\n\n- `content?: string`\n\n- `envPath?: string`\n\n- `moveFromDir?: string`\n\n- `oldComposePath?: string`\n\n- `oldEnvPath?: string`\n\n- `restart = false?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.compose.update('name')\n```",
  },
  {
    name: 'get',
    endpoint: '/api/stacks/{name}/compose',
    httpMethod: 'get',
    summary: 'GET /api/stacks/{name}/compose',
    description: 'GET /api/stacks/{name}/compose',
    stainlessPath: '(resource) stacks.compose > (method) get',
    qualified: 'client.stacks.compose.get',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## get\n\n`client.stacks.compose.get(name: string, env?: string): void`\n\n**get** `/api/stacks/{name}/compose`\n\nGET /api/stacks/{name}/compose\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.compose.get('name')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/stacks/{name}/env',
    httpMethod: 'put',
    summary: 'PUT /api/stacks/{name}/env',
    description: 'PUT /api/stacks/{name}/env',
    stainlessPath: '(resource) stacks.env > (method) update',
    qualified: 'client.stacks.env.update',
    params: ['name: string;', 'env?: string;', 'variables?: string;'],
    markdown:
      "## update\n\n`client.stacks.env.update(name: string, env?: string, variables?: string): void`\n\n**put** `/api/stacks/{name}/env`\n\nPUT /api/stacks/{name}/env\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `variables?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.env.update('name')\n```",
  },
  {
    name: 'get',
    endpoint: '/api/stacks/{name}/env',
    httpMethod: 'get',
    summary: 'GET /api/stacks/{name}/env',
    description: 'GET /api/stacks/{name}/env',
    stainlessPath: '(resource) stacks.env > (method) get',
    qualified: 'client.stacks.env.get',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## get\n\n`client.stacks.env.get(name: string, env?: string): void`\n\n**get** `/api/stacks/{name}/env`\n\nGET /api/stacks/{name}/env\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.env.get('name')\n```",
  },
  {
    name: 'validate',
    endpoint: '/api/stacks/{name}/env/validate',
    httpMethod: 'post',
    summary: 'POST /api/stacks/{name}/env/validate',
    description: 'POST /api/stacks/{name}/env/validate',
    stainlessPath: '(resource) stacks.env > (method) validate',
    qualified: 'client.stacks.env.validate',
    params: ['name: string;', 'env?: string;', 'compose?: string;', 'variables?: string;'],
    markdown:
      "## validate\n\n`client.stacks.env.validate(name: string, env?: string, compose?: string, variables?: string): void`\n\n**post** `/api/stacks/{name}/env/validate`\n\nPOST /api/stacks/{name}/env/validate\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `compose?: string`\n\n- `variables?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.env.validate('name')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/stacks/{name}/env/raw',
    httpMethod: 'put',
    summary: 'PUT /api/stacks/{name}/env/raw',
    description: 'PUT /api/stacks/{name}/env/raw',
    stainlessPath: '(resource) stacks.env.raw > (method) update',
    qualified: 'client.stacks.env.raw.update',
    params: ['name: string;', 'env?: string;', 'content?: string;'],
    markdown:
      "## update\n\n`client.stacks.env.raw.update(name: string, env?: string, content?: string): void`\n\n**put** `/api/stacks/{name}/env/raw`\n\nPUT /api/stacks/{name}/env/raw\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `content?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.env.raw.update('name')\n```",
  },
  {
    name: 'get',
    endpoint: '/api/stacks/{name}/env/raw',
    httpMethod: 'get',
    summary: 'GET /api/stacks/{name}/env/raw',
    description: 'GET /api/stacks/{name}/env/raw',
    stainlessPath: '(resource) stacks.env.raw > (method) get',
    qualified: 'client.stacks.env.raw.get',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## get\n\n`client.stacks.env.raw.get(name: string, env?: string): void`\n\n**get** `/api/stacks/{name}/env/raw`\n\nGET /api/stacks/{name}/env/raw\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.stacks.env.raw.get('name')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/system',
    httpMethod: 'get',
    summary: 'GET /api/system',
    description: 'GET /api/system',
    stainlessPath: '(resource) system > (method) retrieve',
    qualified: 'client.system.retrieve',
    params: ['env?: string;'],
    markdown:
      "## retrieve\n\n`client.system.retrieve(env?: string): void`\n\n**get** `/api/system`\n\nGET /api/system\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.system.retrieve()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/system/disk',
    httpMethod: 'get',
    summary: 'GET /api/system/disk',
    description: 'GET /api/system/disk',
    stainlessPath: '(resource) system.disk > (method) retrieve',
    qualified: 'client.system.disk.retrieve',
    params: ['env?: string;'],
    markdown:
      "## retrieve\n\n`client.system.disk.retrieve(env?: string): void`\n\n**get** `/api/system/disk`\n\nGET /api/system/disk\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.system.disk.retrieve()\n```",
  },
  {
    name: 'list',
    endpoint: '/api/system/files',
    httpMethod: 'get',
    summary: 'GET /api/system/files',
    description: 'GET /api/system/files',
    stainlessPath: '(resource) system.files > (method) list',
    qualified: 'client.system.files.list',
    params: ['path?: string;'],
    markdown:
      "## list\n\n`client.system.files.list(path?: string): void`\n\n**get** `/api/system/files`\n\nGET /api/system/files\n\n### Parameters\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.system.files.list()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/system/files/content',
    httpMethod: 'get',
    summary: 'GET /api/system/files/content',
    description: 'GET /api/system/files/content',
    stainlessPath: '(resource) system.files.content > (method) retrieve',
    qualified: 'client.system.files.content.retrieve',
    params: ['path?: string;'],
    markdown:
      "## retrieve\n\n`client.system.files.content.retrieve(path?: string): void`\n\n**get** `/api/system/files/content`\n\nGET /api/system/files/content\n\n### Parameters\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.system.files.content.retrieve()\n```",
  },
  {
    name: 'create',
    endpoint: '/api/users',
    httpMethod: 'post',
    summary: 'POST /api/users',
    description: 'POST /api/users',
    stainlessPath: '(resource) users > (method) create',
    qualified: 'client.users.create',
    params: ['displayName?: string;', 'email?: string;', 'password?: string;', 'username?: string;'],
    markdown:
      "## create\n\n`client.users.create(displayName?: string, email?: string, password?: string, username?: string): void`\n\n**post** `/api/users`\n\nPOST /api/users\n\n### Parameters\n\n- `displayName?: string`\n\n- `email?: string`\n\n- `password?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/users/{id}',
    httpMethod: 'get',
    summary: 'GET /api/users/{id}',
    description: 'GET /api/users/{id}',
    stainlessPath: '(resource) users > (method) retrieve',
    qualified: 'client.users.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.users.retrieve(id: string): void`\n\n**get** `/api/users/{id}`\n\nGET /api/users/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/users/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/users/{id}',
    description: 'PUT /api/users/{id}',
    stainlessPath: '(resource) users > (method) update',
    qualified: 'client.users.update',
    params: [
      'id: string;',
      'confirmDisableAuth?: string;',
      'displayName?: string;',
      'email?: string;',
      'isActive?: string;',
      'isAdmin?: string;',
      'password?: string;',
      'username?: string;',
    ],
    markdown:
      "## update\n\n`client.users.update(id: string, confirmDisableAuth?: string, displayName?: string, email?: string, isActive?: string, isAdmin?: string, password?: string, username?: string): void`\n\n**put** `/api/users/{id}`\n\nPUT /api/users/{id}\n\n### Parameters\n\n- `id: string`\n\n- `confirmDisableAuth?: string`\n\n- `displayName?: string`\n\n- `email?: string`\n\n- `isActive?: string`\n\n- `isAdmin?: string`\n\n- `password?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/users',
    httpMethod: 'get',
    summary: 'GET /api/users',
    description: 'GET /api/users',
    stainlessPath: '(resource) users > (method) list',
    qualified: 'client.users.list',
    markdown:
      "## list\n\n`client.users.list(): void`\n\n**get** `/api/users`\n\nGET /api/users\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/users/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/users/{id}',
    description: 'DELETE /api/users/{id}',
    stainlessPath: '(resource) users > (method) delete',
    qualified: 'client.users.delete',
    params: ['id: string;', 'confirmDisableAuth?: string;'],
    markdown:
      "## delete\n\n`client.users.delete(id: string, confirmDisableAuth?: string): void`\n\n**delete** `/api/users/{id}`\n\nDELETE /api/users/{id}\n\n### Parameters\n\n- `id: string`\n\n- `confirmDisableAuth?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.delete('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/users/{id}/mfa',
    httpMethod: 'post',
    summary: 'POST /api/users/{id}/mfa',
    description: 'POST /api/users/{id}/mfa',
    stainlessPath: '(resource) users.mfa > (method) create',
    qualified: 'client.users.mfa.create',
    params: ['id: string;', 'token?: string;', 'action?: string;'],
    markdown:
      "## create\n\n`client.users.mfa.create(id: string, token?: string, action?: string): void`\n\n**post** `/api/users/{id}/mfa`\n\nPOST /api/users/{id}/mfa\n\n### Parameters\n\n- `id: string`\n\n- `token?: string`\n\n- `action?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.mfa.create('id')\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/users/{id}/mfa',
    httpMethod: 'delete',
    summary: 'DELETE /api/users/{id}/mfa',
    description: 'DELETE /api/users/{id}/mfa',
    stainlessPath: '(resource) users.mfa > (method) delete',
    qualified: 'client.users.mfa.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.users.mfa.delete(id: string): void`\n\n**delete** `/api/users/{id}/mfa`\n\nDELETE /api/users/{id}/mfa\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.mfa.delete('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/users/{id}/roles',
    httpMethod: 'post',
    summary: 'POST /api/users/{id}/roles',
    description: 'POST /api/users/{id}/roles',
    stainlessPath: '(resource) users.roles > (method) create',
    qualified: 'client.users.roles.create',
    params: ['id: string;', 'environmentId?: string;', 'roleId?: string;'],
    markdown:
      "## create\n\n`client.users.roles.create(id: string, environmentId?: string, roleId?: string): void`\n\n**post** `/api/users/{id}/roles`\n\nPOST /api/users/{id}/roles\n\n### Parameters\n\n- `id: string`\n\n- `environmentId?: string`\n\n- `roleId?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.roles.create('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/users/{id}/roles',
    httpMethod: 'get',
    summary: 'GET /api/users/{id}/roles',
    description: 'GET /api/users/{id}/roles',
    stainlessPath: '(resource) users.roles > (method) list',
    qualified: 'client.users.roles.list',
    params: ['id: string;'],
    markdown:
      "## list\n\n`client.users.roles.list(id: string): void`\n\n**get** `/api/users/{id}/roles`\n\nGET /api/users/{id}/roles\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.roles.list('id')\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/users/{id}/roles',
    httpMethod: 'delete',
    summary: 'DELETE /api/users/{id}/roles',
    description: 'DELETE /api/users/{id}/roles',
    stainlessPath: '(resource) users.roles > (method) delete',
    qualified: 'client.users.roles.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.users.roles.delete(id: string): void`\n\n**delete** `/api/users/{id}/roles`\n\nDELETE /api/users/{id}/roles\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.users.roles.delete('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/volumes',
    httpMethod: 'post',
    summary: 'POST /api/volumes',
    description: 'POST /api/volumes',
    stainlessPath: '(resource) volumes > (method) create',
    qualified: 'client.volumes.create',
    params: [
      'env?: string;',
      'driver?: string;',
      'driverOpts?: string;',
      'labels?: string;',
      'name?: string;',
    ],
    markdown:
      "## create\n\n`client.volumes.create(env?: string, driver?: string, driverOpts?: string, labels?: string, name?: string): void`\n\n**post** `/api/volumes`\n\nPOST /api/volumes\n\n### Parameters\n\n- `env?: string`\n\n- `driver?: string`\n\n- `driverOpts?: string`\n\n- `labels?: string`\n\n- `name?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/volumes/{name}',
    httpMethod: 'get',
    summary: 'GET /api/volumes/{name}',
    description: 'GET /api/volumes/{name}',
    stainlessPath: '(resource) volumes > (method) retrieve',
    qualified: 'client.volumes.retrieve',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## retrieve\n\n`client.volumes.retrieve(name: string, env?: string): void`\n\n**get** `/api/volumes/{name}`\n\nGET /api/volumes/{name}\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.retrieve('name')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/volumes',
    httpMethod: 'get',
    summary: 'GET /api/volumes',
    description: 'GET /api/volumes',
    stainlessPath: '(resource) volumes > (method) list',
    qualified: 'client.volumes.list',
    params: ['env?: string;'],
    markdown:
      "## list\n\n`client.volumes.list(env?: string): void`\n\n**get** `/api/volumes`\n\nGET /api/volumes\n\n### Parameters\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/volumes/{name}',
    httpMethod: 'delete',
    summary: 'DELETE /api/volumes/{name}',
    description: 'DELETE /api/volumes/{name}',
    stainlessPath: '(resource) volumes > (method) delete',
    qualified: 'client.volumes.delete',
    params: ['name: string;', 'env?: string;', 'force?: string;'],
    markdown:
      "## delete\n\n`client.volumes.delete(name: string, env?: string, force?: string): void`\n\n**delete** `/api/volumes/{name}`\n\nDELETE /api/volumes/{name}\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `force?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.delete('name')\n```",
  },
  {
    name: 'clone',
    endpoint: '/api/volumes/{name}/clone',
    httpMethod: 'post',
    summary: 'POST /api/volumes/{name}/clone',
    description: 'POST /api/volumes/{name}/clone',
    stainlessPath: '(resource) volumes > (method) clone',
    qualified: 'client.volumes.clone',
    params: ['name: string;', 'env?: string;', 'name?: string;'],
    markdown:
      "## clone\n\n`client.volumes.clone(name: string, env?: string, name?: string): void`\n\n**post** `/api/volumes/{name}/clone`\n\nPOST /api/volumes/{name}/clone\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `name?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.clone('name')\n```",
  },
  {
    name: 'export',
    endpoint: '/api/volumes/{name}/export',
    httpMethod: 'get',
    summary: 'GET /api/volumes/{name}/export',
    description: 'GET /api/volumes/{name}/export',
    stainlessPath: '(resource) volumes > (method) export',
    qualified: 'client.volumes.export',
    params: ['name: string;', 'env?: string;', 'format?: string;', 'path?: string;'],
    markdown:
      "## export\n\n`client.volumes.export(name: string, env?: string, format?: string, path?: string): void`\n\n**get** `/api/volumes/{name}/export`\n\nGET /api/volumes/{name}/export\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `format?: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.export('name')\n```",
  },
  {
    name: 'inspect',
    endpoint: '/api/volumes/{name}/inspect',
    httpMethod: 'get',
    summary: 'GET /api/volumes/{name}/inspect',
    description: 'GET /api/volumes/{name}/inspect',
    stainlessPath: '(resource) volumes > (method) inspect',
    qualified: 'client.volumes.inspect',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## inspect\n\n`client.volumes.inspect(name: string, env?: string): void`\n\n**get** `/api/volumes/{name}/inspect`\n\nGET /api/volumes/{name}/inspect\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.inspect('name')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/volumes/{name}/browse',
    httpMethod: 'get',
    summary: 'GET /api/volumes/{name}/browse',
    description: 'GET /api/volumes/{name}/browse',
    stainlessPath: '(resource) volumes.browse > (method) retrieve',
    qualified: 'client.volumes.browse.retrieve',
    params: ['name: string;', 'env?: string;', 'path?: string;'],
    markdown:
      "## retrieve\n\n`client.volumes.browse.retrieve(name: string, env?: string, path?: string): void`\n\n**get** `/api/volumes/{name}/browse`\n\nGET /api/volumes/{name}/browse\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.browse.retrieve('name')\n```",
  },
  {
    name: 'content',
    endpoint: '/api/volumes/{name}/browse/content',
    httpMethod: 'get',
    summary: 'GET /api/volumes/{name}/browse/content',
    description: 'GET /api/volumes/{name}/browse/content',
    stainlessPath: '(resource) volumes.browse > (method) content',
    qualified: 'client.volumes.browse.content',
    params: ['name: string;', 'env?: string;', 'path?: string;'],
    markdown:
      "## content\n\n`client.volumes.browse.content(name: string, env?: string, path?: string): void`\n\n**get** `/api/volumes/{name}/browse/content`\n\nGET /api/volumes/{name}/browse/content\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n- `path?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.browse.content('name')\n```",
  },
  {
    name: 'release',
    endpoint: '/api/volumes/{name}/browse/release',
    httpMethod: 'post',
    summary: 'POST /api/volumes/{name}/browse/release',
    description: 'POST /api/volumes/{name}/browse/release',
    stainlessPath: '(resource) volumes.browse > (method) release',
    qualified: 'client.volumes.browse.release',
    params: ['name: string;', 'env?: string;'],
    markdown:
      "## release\n\n`client.volumes.browse.release(name: string, env?: string): void`\n\n**post** `/api/volumes/{name}/browse/release`\n\nPOST /api/volumes/{name}/browse/release\n\n### Parameters\n\n- `name: string`\n\n- `env?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.volumes.browse.release('name')\n```",
  },
  {
    name: 'create',
    endpoint: '/api/registries',
    httpMethod: 'post',
    summary: 'POST /api/registries',
    description: 'POST /api/registries',
    stainlessPath: '(resource) registries > (method) create',
    qualified: 'client.registries.create',
    params: [
      'isDefault?: string;',
      'name?: string;',
      'password?: string;',
      'url?: string;',
      'username?: string;',
    ],
    markdown:
      "## create\n\n`client.registries.create(isDefault?: string, name?: string, password?: string, url?: string, username?: string): void`\n\n**post** `/api/registries`\n\nPOST /api/registries\n\n### Parameters\n\n- `isDefault?: string`\n\n- `name?: string`\n\n- `password?: string`\n\n- `url?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/registries/{id}',
    httpMethod: 'get',
    summary: 'GET /api/registries/{id}',
    description: 'GET /api/registries/{id}',
    stainlessPath: '(resource) registries > (method) retrieve',
    qualified: 'client.registries.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.registries.retrieve(id: string): void`\n\n**get** `/api/registries/{id}`\n\nGET /api/registries/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/api/registries/{id}',
    httpMethod: 'put',
    summary: 'PUT /api/registries/{id}',
    description: 'PUT /api/registries/{id}',
    stainlessPath: '(resource) registries > (method) update',
    qualified: 'client.registries.update',
    params: [
      'id: string;',
      'isDefault?: string;',
      'name?: string;',
      'password?: string;',
      'url?: string;',
      'username?: string;',
    ],
    markdown:
      "## update\n\n`client.registries.update(id: string, isDefault?: string, name?: string, password?: string, url?: string, username?: string): void`\n\n**put** `/api/registries/{id}`\n\nPUT /api/registries/{id}\n\n### Parameters\n\n- `id: string`\n\n- `isDefault?: string`\n\n- `name?: string`\n\n- `password?: string`\n\n- `url?: string`\n\n- `username?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.update('id')\n```",
  },
  {
    name: 'list',
    endpoint: '/api/registries',
    httpMethod: 'get',
    summary: 'GET /api/registries',
    description: 'GET /api/registries',
    stainlessPath: '(resource) registries > (method) list',
    qualified: 'client.registries.list',
    markdown:
      "## list\n\n`client.registries.list(): void`\n\n**get** `/api/registries`\n\nGET /api/registries\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.list()\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/registries/{id}',
    httpMethod: 'delete',
    summary: 'DELETE /api/registries/{id}',
    description: 'DELETE /api/registries/{id}',
    stainlessPath: '(resource) registries > (method) delete',
    qualified: 'client.registries.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.registries.delete(id: string): void`\n\n**delete** `/api/registries/{id}`\n\nDELETE /api/registries/{id}\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.delete('id')\n```",
  },
  {
    name: 'delete_image',
    endpoint: '/api/registry/image',
    httpMethod: 'delete',
    summary: 'DELETE /api/registry/image',
    description: 'DELETE /api/registry/image',
    stainlessPath: '(resource) registries > (method) delete_image',
    qualified: 'client.registries.deleteImage',
    params: ['image?: string;', 'registry?: string;', 'tag?: string;'],
    markdown:
      "## delete_image\n\n`client.registries.deleteImage(image?: string, registry?: string, tag?: string): void`\n\n**delete** `/api/registry/image`\n\nDELETE /api/registry/image\n\n### Parameters\n\n- `image?: string`\n\n- `registry?: string`\n\n- `tag?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.deleteImage()\n```",
  },
  {
    name: 'list_catalog',
    endpoint: '/api/registry/catalog',
    httpMethod: 'get',
    summary: 'GET /api/registry/catalog',
    description: 'GET /api/registry/catalog',
    stainlessPath: '(resource) registries > (method) list_catalog',
    qualified: 'client.registries.listCatalog',
    params: ['last?: string;', 'registry?: string;'],
    markdown:
      "## list_catalog\n\n`client.registries.listCatalog(last?: string, registry?: string): void`\n\n**get** `/api/registry/catalog`\n\nGET /api/registry/catalog\n\n### Parameters\n\n- `last?: string`\n\n- `registry?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.listCatalog()\n```",
  },
  {
    name: 'list_tags',
    endpoint: '/api/registry/tags',
    httpMethod: 'get',
    summary: 'GET /api/registry/tags',
    description: 'GET /api/registry/tags',
    stainlessPath: '(resource) registries > (method) list_tags',
    qualified: 'client.registries.listTags',
    params: ['image?: string;', 'page?: string;', 'pageSize?: string;', 'registry?: string;'],
    markdown:
      "## list_tags\n\n`client.registries.listTags(image?: string, page?: string, pageSize?: string, registry?: string): void`\n\n**get** `/api/registry/tags`\n\nGET /api/registry/tags\n\n### Parameters\n\n- `image?: string`\n\n- `page?: string`\n\n- `pageSize?: string`\n\n- `registry?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.listTags()\n```",
  },
  {
    name: 'search',
    endpoint: '/api/registry/search',
    httpMethod: 'get',
    summary: 'GET /api/registry/search',
    description: 'GET /api/registry/search',
    stainlessPath: '(resource) registries > (method) search',
    qualified: 'client.registries.search',
    params: ['limit?: string;', 'registry?: string;', 'term?: string;'],
    markdown:
      "## search\n\n`client.registries.search(limit?: string, registry?: string, term?: string): void`\n\n**get** `/api/registry/search`\n\nGET /api/registry/search\n\n### Parameters\n\n- `limit?: string`\n\n- `registry?: string`\n\n- `term?: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.search()\n```",
  },
  {
    name: 'set_default',
    endpoint: '/api/registries/{id}/default',
    httpMethod: 'post',
    summary: 'POST /api/registries/{id}/default',
    description: 'POST /api/registries/{id}/default',
    stainlessPath: '(resource) registries > (method) set_default',
    qualified: 'client.registries.setDefault',
    params: ['id: string;'],
    markdown:
      "## set_default\n\n`client.registries.setDefault(id: string): void`\n\n**post** `/api/registries/{id}/default`\n\nPOST /api/registries/{id}/default\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Test2w from 'test2w';\n\nconst client = new Test2w();\n\nawait client.registries.setDefault('id')\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
