// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EnvFiles extends APIResource {
  /**
   * POST /api/git/stacks/{id}/env-files
   */
  create(
    id: string,
    body: EnvFileCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/git/stacks/${id}/env-files`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/stacks/{id}/env-files
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/git/stacks/${id}/env-files`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EnvFileCreateParams {
  path?: string;
}

export declare namespace EnvFiles {
  export { type EnvFileCreateParams as EnvFileCreateParams };
}
