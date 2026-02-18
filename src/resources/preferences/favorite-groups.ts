// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class FavoriteGroups extends APIResource {
  /**
   * POST /api/preferences/favorite-groups
   */
  create(
    body: FavoriteGroupCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/preferences/favorite-groups', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/preferences/favorite-groups
   */
  list(query: FavoriteGroupListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/preferences/favorite-groups', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FavoriteGroupCreateParams {
  action?: string;

  containers?: string;

  environmentId?: string;

  groups?: string;

  name?: string;

  newName?: string;
}

export interface FavoriteGroupListParams {
  env?: string;
}

export declare namespace FavoriteGroups {
  export {
    type FavoriteGroupCreateParams as FavoriteGroupCreateParams,
    type FavoriteGroupListParams as FavoriteGroupListParams,
  };
}
