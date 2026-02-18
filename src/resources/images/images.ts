// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScanAPI from './scan';
import { Scan, ScanCreateParams, ScanRetrieveParams } from './scan';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Images extends APIResource {
  scan: ScanAPI.Scan = new ScanAPI.Scan(this._client);

  /**
   * GET /api/images
   */
  list(query: ImageListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/images', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/images/{id}
   */
  delete(
    id: string,
    params: ImageDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, force } = params ?? {};
    return this._client.delete(path`/api/images/${id}`, {
      query: { env, force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/images/{id}/export
   */
  export(
    id: string,
    query: ImageExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/images/${id}/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/images/{id}/history
   */
  history(
    id: string,
    query: ImageHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/images/${id}/history`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/images/pull
   */
  pull(params: ImagePullParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post('/api/images/pull', {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/images/push
   */
  push(params: ImagePushParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post('/api/images/push', {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/images/{id}/tag
   */
  tag(
    id: string,
    params: ImageTagParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/images/${id}/tag`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ImageListParams {
  env?: string;
}

export interface ImageDeleteParams {
  env?: string;

  force?: string;
}

export interface ImageExportParams {
  compress?: string;

  env?: string;
}

export interface ImageHistoryParams {
  env?: string;
}

export interface ImagePullParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  image?: string;

  /**
   * Body param
   */
  scanAfterPull?: string;
}

export interface ImagePushParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  imageId?: string;

  /**
   * Body param
   */
  imageName?: string;

  /**
   * Body param
   */
  newTag?: string;

  /**
   * Body param
   */
  registryId?: string;
}

export interface ImageTagParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  repo?: string;

  /**
   * Body param
   */
  tag?: string;
}

Images.Scan = Scan;

export declare namespace Images {
  export {
    type ImageListParams as ImageListParams,
    type ImageDeleteParams as ImageDeleteParams,
    type ImageExportParams as ImageExportParams,
    type ImageHistoryParams as ImageHistoryParams,
    type ImagePullParams as ImagePullParams,
    type ImagePushParams as ImagePushParams,
    type ImageTagParams as ImageTagParams,
  };

  export {
    Scan as Scan,
    type ScanCreateParams as ScanCreateParams,
    type ScanRetrieveParams as ScanRetrieveParams,
  };
}
