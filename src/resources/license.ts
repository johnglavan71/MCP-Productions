// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class License extends APIResource {
  /**
   * POST /api/license
   */
  create(body: LicenseCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/license', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/license
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/license', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/license
   */
  delete(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/api/license', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LicenseCreateParams {
  key?: string;

  name?: string;
}

export declare namespace License {
  export { type LicenseCreateParams as LicenseCreateParams };
}
