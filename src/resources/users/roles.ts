// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * POST /api/users/{id}/roles
   */
  create(
    id: string,
    body: RoleCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/users/${id}/roles`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/users/{id}/roles
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/users/${id}/roles`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/users/{id}/roles
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/users/${id}/roles`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RoleCreateParams {
  environmentId?: string;

  roleId?: string;
}

export declare namespace Roles {
  export { type RoleCreateParams as RoleCreateParams };
}
