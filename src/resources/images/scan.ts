// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Scan extends APIResource {
  /**
   * POST /api/images/scan
   */
  create(params: ScanCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post('/api/images/scan', {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/images/scan
   */
  retrieve(query: ScanRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/images/scan', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ScanCreateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  imageName?: string;

  /**
   * Body param
   */
  scanner?: string;
}

export interface ScanRetrieveParams {
  env?: string;

  image?: string;

  scanner?: string;
}

export declare namespace Scan {
  export { type ScanCreateParams as ScanCreateParams, type ScanRetrieveParams as ScanRetrieveParams };
}
