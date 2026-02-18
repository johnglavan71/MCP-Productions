// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DiskWarning extends APIResource {
  /**
   * POST /api/environments/{id}/disk-warning
   */
  create(
    id: string,
    body: DiskWarningCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/environments/${id}/disk-warning`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/environments/{id}/disk-warning
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/environments/${id}/disk-warning`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DiskWarningCreateParams {
  enabled?: string;

  mode?: string;

  threshold?: string;

  thresholdGb?: string;
}

export declare namespace DiskWarning {
  export { type DiskWarningCreateParams as DiskWarningCreateParams };
}
