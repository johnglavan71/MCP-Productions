// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Raw extends APIResource {
  /**
   * PUT /api/stacks/{name}/env/raw
   */
  update(
    name: string,
    params: RawUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.put(path`/api/stacks/${name}/env/raw`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks/{name}/env/raw
   */
  get(name: string, query: RawGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/stacks/${name}/env/raw`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RawUpdateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  content?: string;
}

export interface RawGetParams {
  env?: string;
}

export declare namespace Raw {
  export { type RawUpdateParams as RawUpdateParams, type RawGetParams as RawGetParams };
}
