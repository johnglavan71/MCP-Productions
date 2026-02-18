// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UpdateCheck extends APIResource {
  /**
   * GET /api/environments/{id}/update-check
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/environments/${id}/update-check`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/environments/{id}/update-check
   */
  run(
    id: string,
    body: UpdateCheckRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/environments/${id}/update-check`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UpdateCheckRunParams {
  autoUpdate?: string;

  cron?: string;

  enabled?: string;

  vulnerabilityCriteria?: string;
}

export declare namespace UpdateCheck {
  export { type UpdateCheckRunParams as UpdateCheckRunParams };
}
