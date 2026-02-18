// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Content extends APIResource {
  /**
   * GET /api/containers/{id}/files/content
   */
  retrieve(
    id: string,
    query: ContentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/files/content`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/containers/{id}/files/content
   */
  update(
    id: string,
    params: ContentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, path: path_, ...body } = params ?? {};
    return this._client.put(path`/api/containers/${id}/files/content`, {
      query: { env, path: path_ },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContentRetrieveParams {
  env?: string;

  path?: string;
}

export interface ContentUpdateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Query param
   */
  path?: string;

  /**
   * Body param
   */
  content?: string;
}

export declare namespace Content {
  export {
    type ContentRetrieveParams as ContentRetrieveParams,
    type ContentUpdateParams as ContentUpdateParams,
  };
}
