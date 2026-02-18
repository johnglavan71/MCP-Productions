// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Networks extends APIResource {
  /**
   * POST /api/networks
   */
  create(params: NetworkCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post('/api/networks', {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/networks/{id}
   */
  retrieve(
    id: string,
    query: NetworkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/networks/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/networks
   */
  list(query: NetworkListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/networks', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/networks/{id}
   */
  delete(
    id: string,
    params: NetworkDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.delete(path`/api/networks/${id}`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/networks/{id}/connect
   */
  connect(
    id: string,
    params: NetworkConnectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/networks/${id}/connect`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/networks/{id}/disconnect
   */
  disconnect(
    id: string,
    params: NetworkDisconnectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/networks/${id}/disconnect`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/networks/{id}/inspect
   */
  inspect(
    id: string,
    query: NetworkInspectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/networks/${id}/inspect`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NetworkCreateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  attachable?: string;

  /**
   * Body param
   */
  driver?: string;

  /**
   * Body param
   */
  enableIPv6?: string;

  /**
   * Body param
   */
  ingress?: string;

  /**
   * Body param
   */
  internal?: string;

  /**
   * Body param
   */
  ipam?: string;

  /**
   * Body param
   */
  labels?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  options?: string;
}

export interface NetworkRetrieveParams {
  env?: string;
}

export interface NetworkListParams {
  env?: string;
}

export interface NetworkDeleteParams {
  env?: string;
}

export interface NetworkConnectParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  containerId?: string;

  /**
   * Body param
   */
  containerName?: string;
}

export interface NetworkDisconnectParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  containerId?: string;

  /**
   * Body param
   */
  containerName?: string;

  /**
   * Body param
   */
  force?: string;
}

export interface NetworkInspectParams {
  env?: string;
}

export declare namespace Networks {
  export {
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkRetrieveParams as NetworkRetrieveParams,
    type NetworkListParams as NetworkListParams,
    type NetworkDeleteParams as NetworkDeleteParams,
    type NetworkConnectParams as NetworkConnectParams,
    type NetworkDisconnectParams as NetworkDisconnectParams,
    type NetworkInspectParams as NetworkInspectParams,
  };
}
