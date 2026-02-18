// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class SelfUpdate extends APIResource {
  /**
   * GET /api/self-update/check
   */
  checkStatus(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/self-update/check', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/self-update/progress
   */
  getProgress(
    query: SelfUpdateGetProgressParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/self-update/progress', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/self-update
   */
  initiate(
    body: SelfUpdateInitiateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/self-update', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SelfUpdateGetProgressParams {
  id?: string;
}

export interface SelfUpdateInitiateParams {
  newImage?: string;
}

export declare namespace SelfUpdate {
  export {
    type SelfUpdateGetProgressParams as SelfUpdateGetProgressParams,
    type SelfUpdateInitiateParams as SelfUpdateInitiateParams,
  };
}
