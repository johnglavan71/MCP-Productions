// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Grid extends APIResource {
  /**
   * POST /api/preferences/grid
   */
  create(body: GridCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/preferences/grid', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/preferences/grid
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/preferences/grid', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/preferences/grid
   */
  delete(params: GridDeleteParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { gridId } = params ?? {};
    return this._client.delete('/api/preferences/grid', {
      query: { gridId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GridCreateParams {
  columns?: string;

  gridId?: string;
}

export interface GridDeleteParams {
  gridId?: string;
}

export declare namespace Grid {
  export { type GridCreateParams as GridCreateParams, type GridDeleteParams as GridDeleteParams };
}
