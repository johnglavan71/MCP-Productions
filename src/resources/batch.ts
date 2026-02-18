// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Batch extends APIResource {
  /**
   * POST /api/batch
   */
  create(params: BatchCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post('/api/batch', {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BatchCreateParams {
  env?: string;
}

export declare namespace Batch {
  export { type BatchCreateParams as BatchCreateParams };
}
