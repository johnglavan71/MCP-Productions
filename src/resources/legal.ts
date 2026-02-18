// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Legal extends APIResource {
  /**
   * GET /api/legal/license
   */
  retrieveLicense(
    query: LegalRetrieveLicenseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/legal/license', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/legal/privacy
   */
  retrievePrivacy(
    query: LegalRetrievePrivacyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/legal/privacy', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LegalRetrieveLicenseParams {
  format?: string;
}

export interface LegalRetrievePrivacyParams {
  format?: string;
}

export declare namespace Legal {
  export {
    type LegalRetrieveLicenseParams as LegalRetrieveLicenseParams,
    type LegalRetrievePrivacyParams as LegalRetrievePrivacyParams,
  };
}
