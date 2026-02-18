// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Compose extends APIResource {
  /**
   * PUT /api/stacks/{name}/compose
   */
  update(
    name: string,
    params: ComposeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.put(path`/api/stacks/${name}/compose`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks/{name}/compose
   */
  get(
    name: string,
    query: ComposeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/stacks/${name}/compose`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ComposeUpdateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  composePath?: string;

  /**
   * Body param
   */
  content?: string;

  /**
   * Body param
   */
  envPath?: string;

  /**
   * Body param
   */
  moveFromDir?: string;

  /**
   * Body param
   */
  oldComposePath?: string;

  /**
   * Body param
   */
  oldEnvPath?: string;

  /**
   * Body param
   */
  'restart = false'?: string;
}

export interface ComposeGetParams {
  env?: string;
}

export declare namespace Compose {
  export { type ComposeUpdateParams as ComposeUpdateParams, type ComposeGetParams as ComposeGetParams };
}
