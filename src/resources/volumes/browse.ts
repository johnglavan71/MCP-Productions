// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Browse extends APIResource {
  /**
   * GET /api/volumes/{name}/browse
   */
  retrieve(
    name: string,
    query: BrowseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/volumes/${name}/browse`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/volumes/{name}/browse/content
   */
  content(
    name: string,
    query: BrowseContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/volumes/${name}/browse/content`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/volumes/{name}/browse/release
   */
  release(
    name: string,
    params: BrowseReleaseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/volumes/${name}/browse/release`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BrowseRetrieveParams {
  env?: string;

  path?: string;
}

export interface BrowseContentParams {
  env?: string;

  path?: string;
}

export interface BrowseReleaseParams {
  env?: string;
}

export declare namespace Browse {
  export {
    type BrowseRetrieveParams as BrowseRetrieveParams,
    type BrowseContentParams as BrowseContentParams,
    type BrowseReleaseParams as BrowseReleaseParams,
  };
}
