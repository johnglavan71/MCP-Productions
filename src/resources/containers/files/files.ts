// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContentAPI from './content';
import { Content, ContentRetrieveParams, ContentUpdateParams } from './content';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Files extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);

  /**
   * POST /api/containers/{id}/files/create
   */
  create(
    id: string,
    params: FileCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/containers/${id}/files/create`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/{id}/files
   */
  list(
    id: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/files`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/containers/{id}/files/delete
   */
  delete(
    id: string,
    params: FileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, path: path_ } = params ?? {};
    return this._client.delete(path`/api/containers/${id}/files/delete`, {
      query: { env, path: path_ },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/files/chmod
   */
  chmod(
    id: string,
    params: FileChmodParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/containers/${id}/files/chmod`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/{id}/files/download
   */
  download(
    id: string,
    query: FileDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/files/download`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/files/rename
   */
  rename(
    id: string,
    params: FileRenameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/containers/${id}/files/rename`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/files/upload
   */
  upload(
    id: string,
    params: FileUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, path: path_ } = params ?? {};
    return this._client.post(path`/api/containers/${id}/files/upload`, {
      query: { env, path: path_ },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FileCreateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  path?: string;

  /**
   * Body param
   */
  type?: string;
}

export interface FileListParams {
  env?: string;

  path?: string;

  simpleLs?: string;
}

export interface FileDeleteParams {
  env?: string;

  path?: string;
}

export interface FileChmodParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  mode?: string;

  /**
   * Body param
   */
  path?: string;

  /**
   * Body param
   */
  recursive?: string;
}

export interface FileDownloadParams {
  env?: string;

  format?: string;

  path?: string;
}

export interface FileRenameParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  newPath?: string;

  /**
   * Body param
   */
  oldPath?: string;
}

export interface FileUploadParams {
  env?: string;

  path?: string;
}

Files.Content = Content;

export declare namespace Files {
  export {
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileChmodParams as FileChmodParams,
    type FileDownloadParams as FileDownloadParams,
    type FileRenameParams as FileRenameParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Content as Content,
    type ContentRetrieveParams as ContentRetrieveParams,
    type ContentUpdateParams as ContentUpdateParams,
  };
}
