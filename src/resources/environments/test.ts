// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Test extends APIResource {
  /**
   * POST /api/environments/test
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/environments/test', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/environments/{id}/test
   */
  run(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/environments/${id}/test`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
