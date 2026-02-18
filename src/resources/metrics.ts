// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Metrics extends APIResource {
  /**
   * GET /api/metrics
   */
  retrieve(query: MetricRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/metrics', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MetricRetrieveParams {
  env?: string;

  limit?: string;
}

export declare namespace Metrics {
  export { type MetricRetrieveParams as MetricRetrieveParams };
}
