// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * GET /api/containers/{id}/logs
   */
  retrieve(
    id: string,
    query: LogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/logs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/{id}/logs/stream
   */
  stream(
    id: string,
    query: LogStreamParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/logs/stream`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LogRetrieveParams {
  env?: string;

  tail?: string;
}

export interface LogStreamParams {
  env?: string;

  tail?: string;
}

export declare namespace Logs {
  export { type LogRetrieveParams as LogRetrieveParams, type LogStreamParams as LogStreamParams };
}
