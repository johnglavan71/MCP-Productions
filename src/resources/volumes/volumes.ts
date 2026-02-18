// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BrowseAPI from './browse';
import { Browse, BrowseContentParams, BrowseReleaseParams, BrowseRetrieveParams } from './browse';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Volumes extends APIResource {
  browse: BrowseAPI.Browse = new BrowseAPI.Browse(this._client);

  /**
   * POST /api/volumes
   */
  create(params: VolumeCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post('/api/volumes', {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/volumes/{name}
   */
  retrieve(
    name: string,
    query: VolumeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/volumes/${name}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/volumes
   */
  list(query: VolumeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/volumes', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/volumes/{name}
   */
  delete(
    name: string,
    params: VolumeDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, force } = params ?? {};
    return this._client.delete(path`/api/volumes/${name}`, {
      query: { env, force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/volumes/{name}/clone
   */
  clone(
    pathName: string,
    params: VolumeCloneParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/volumes/${pathName}/clone`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/volumes/{name}/export
   */
  export(
    name: string,
    query: VolumeExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/volumes/${name}/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/volumes/{name}/inspect
   */
  inspect(
    name: string,
    query: VolumeInspectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/volumes/${name}/inspect`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VolumeCreateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  driver?: string;

  /**
   * Body param
   */
  driverOpts?: string;

  /**
   * Body param
   */
  labels?: string;

  /**
   * Body param
   */
  name?: string;
}

export interface VolumeRetrieveParams {
  env?: string;
}

export interface VolumeListParams {
  env?: string;
}

export interface VolumeDeleteParams {
  env?: string;

  force?: string;
}

export interface VolumeCloneParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  body_name?: string;
}

export interface VolumeExportParams {
  env?: string;

  format?: string;

  path?: string;
}

export interface VolumeInspectParams {
  env?: string;
}

Volumes.Browse = Browse;

export declare namespace Volumes {
  export {
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeRetrieveParams as VolumeRetrieveParams,
    type VolumeListParams as VolumeListParams,
    type VolumeDeleteParams as VolumeDeleteParams,
    type VolumeCloneParams as VolumeCloneParams,
    type VolumeExportParams as VolumeExportParams,
    type VolumeInspectParams as VolumeInspectParams,
  };

  export {
    Browse as Browse,
    type BrowseRetrieveParams as BrowseRetrieveParams,
    type BrowseContentParams as BrowseContentParams,
    type BrowseReleaseParams as BrowseReleaseParams,
  };
}
