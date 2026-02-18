// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Logs extends APIResource {
  /**
   * GET /api/logs/merged
   */
  retrieveMerged(
    query: LogRetrieveMergedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/logs/merged', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LogRetrieveMergedParams {
  containers?: string;

  env?: string;

  tail?: string;
}

export declare namespace Logs {
  export { type LogRetrieveMergedParams as LogRetrieveMergedParams };
}
