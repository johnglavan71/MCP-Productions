// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MfaAPI from './mfa';
import { Mfa, MfaCreateParams } from './mfa';
import * as RolesAPI from './roles';
import { RoleCreateParams, Roles } from './roles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  mfa: MfaAPI.Mfa = new MfaAPI.Mfa(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * POST /api/users
   */
  create(body: UserCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/users', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/users/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/users/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/users/{id}
   */
  update(
    id: string,
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/users/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/users
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/users', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/users/{id}
   */
  delete(
    id: string,
    params: UserDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { confirmDisableAuth } = params ?? {};
    return this._client.delete(path`/api/users/${id}`, {
      query: { confirmDisableAuth },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserCreateParams {
  displayName?: string;

  email?: string;

  password?: string;

  username?: string;
}

export interface UserUpdateParams {
  confirmDisableAuth?: string;

  displayName?: string;

  email?: string;

  isActive?: string;

  isAdmin?: string;

  password?: string;

  username?: string;
}

export interface UserDeleteParams {
  confirmDisableAuth?: string;
}

Users.Mfa = Mfa;
Users.Roles = Roles;

export declare namespace Users {
  export {
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
  };

  export { Mfa as Mfa, type MfaCreateParams as MfaCreateParams };

  export { Roles as Roles, type RoleCreateParams as RoleCreateParams };
}
