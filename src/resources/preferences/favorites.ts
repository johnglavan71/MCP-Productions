// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Favorites extends APIResource {
  /**
   * POST /api/preferences/favorites
   */
  create(body: FavoriteCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/preferences/favorites', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/preferences/favorites
   */
  list(query: FavoriteListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/preferences/favorites', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FavoriteCreateParams {
  action?: string;

  containerName?: string;

  environmentId?: string;

  favorites?: string;
}

export interface FavoriteListParams {
  env?: string;
}

export declare namespace Favorites {
  export { type FavoriteCreateParams as FavoriteCreateParams, type FavoriteListParams as FavoriteListParams };
}
