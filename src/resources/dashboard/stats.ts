// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Stats extends APIResource {
  /**
   * GET /api/dashboard/stats
   */
  retrieve(query: StatRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/dashboard/stats', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/dashboard/stats/stream
   */
  stream(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/dashboard/stats/stream', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StatRetrieveParams {
  env?: string;
}

export declare namespace Stats {
  export { type StatRetrieveParams as StatRetrieveParams };
}
