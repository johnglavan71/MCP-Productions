// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Scanner extends APIResource {
  /**
   * POST /api/settings/scanner
   */
  create(body: ScannerCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/settings/scanner', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/settings/scanner
   */
  retrieve(query: ScannerRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/settings/scanner', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/settings/scanner
   */
  delete(params: ScannerDeleteParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env, removeImages, scanner } = params ?? {};
    return this._client.delete('/api/settings/scanner', {
      query: { env, removeImages, scanner },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ScannerCreateParams {
  envId?: string;

  grypeArgs?: string;

  scanner?: string;

  trivyArgs?: string;
}

export interface ScannerRetrieveParams {
  checkUpdates?: string;

  env?: string;

  settingsOnly?: string;
}

export interface ScannerDeleteParams {
  env?: string;

  removeImages?: string;

  scanner?: string;
}

export declare namespace Scanner {
  export {
    type ScannerCreateParams as ScannerCreateParams,
    type ScannerRetrieveParams as ScannerRetrieveParams,
    type ScannerDeleteParams as ScannerDeleteParams,
  };
}
