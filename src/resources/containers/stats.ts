// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stats extends APIResource {
  /**
   * GET /api/containers/{id}/stats
   */
  retrieve(
    id: string,
    query: StatRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/stats`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/stats
   */
  list(query: StatListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/containers/stats', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StatRetrieveParams {
  env?: string;
}

export interface StatListParams {
  debug?: string;

  env?: string;
}

export declare namespace Stats {
  export { type StatRetrieveParams as StatRetrieveParams, type StatListParams as StatListParams };
}
