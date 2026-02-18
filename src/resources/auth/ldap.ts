// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Ldap extends APIResource {
  /**
   * POST /api/auth/ldap
   */
  create(body: LdapCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/ldap', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auth/ldap/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/auth/ldap/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/auth/ldap/{id}
   */
  update(
    id: string,
    body: LdapUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/auth/ldap/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auth/ldap
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/ldap', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/auth/ldap/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/auth/ldap/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/auth/ldap/{id}/test
   */
  test(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/auth/ldap/${id}/test`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LdapCreateParams {
  adminGroup?: string;

  baseDn?: string;

  bindDn?: string;

  bindPassword?: string;

  displayNameAttribute?: string;

  emailAttribute?: string;

  enabled?: string;

  groupBaseDn?: string;

  groupFilter?: string;

  name?: string;

  roleMappings?: string;

  serverUrl?: string;

  tlsCa?: string;

  tlsEnabled?: string;

  userFilter?: string;

  usernameAttribute?: string;
}

export interface LdapUpdateParams {
  adminGroup?: string;

  baseDn?: string;

  bindDn?: string;

  bindPassword?: string;

  displayNameAttribute?: string;

  emailAttribute?: string;

  enabled?: string;

  groupBaseDn?: string;

  groupFilter?: string;

  name?: string;

  roleMappings?: string;

  serverUrl?: string;

  tlsCa?: string;

  tlsEnabled?: string;

  userFilter?: string;

  usernameAttribute?: string;
}

export declare namespace Ldap {
  export { type LdapCreateParams as LdapCreateParams, type LdapUpdateParams as LdapUpdateParams };
}
