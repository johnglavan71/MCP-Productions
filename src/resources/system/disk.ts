// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Disk extends APIResource {
  /**
   * GET /api/system/disk
   */
  retrieve(query: DiskRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/system/disk', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DiskRetrieveParams {
  env?: string;
}

export declare namespace Disk {
  export { type DiskRetrieveParams as DiskRetrieveParams };
}
