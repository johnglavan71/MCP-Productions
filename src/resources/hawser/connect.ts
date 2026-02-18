// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Connect extends APIResource {
  /**
   * POST /api/hawser/connect
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/hawser/connect', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/hawser/connect
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/hawser/connect', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
