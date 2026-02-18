// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AutoUpdate extends APIResource {
  /**
   * GET /api/auto-update
   */
  retrieve(
    query: AutoUpdateRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/auto-update', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/auto-update/{containerName}
   */
  createContainer(
    containerName: string,
    params: AutoUpdateCreateContainerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/auto-update/${containerName}`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/auto-update/{containerName}
   */
  deleteContainer(
    containerName: string,
    params: AutoUpdateDeleteContainerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.delete(path`/api/auto-update/${containerName}`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auto-update/{containerName}
   */
  retrieveContainer(
    containerName: string,
    query: AutoUpdateRetrieveContainerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/auto-update/${containerName}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AutoUpdateRetrieveParams {
  env?: string;
}

export interface AutoUpdateCreateContainerParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  cron_expression?: string;

  /**
   * Body param
   */
  cronExpression?: string;

  /**
   * Body param
   */
  enabled?: string;

  /**
   * Body param
   */
  vulnerability_criteria?: string;

  /**
   * Body param
   */
  vulnerabilityCriteria?: string;
}

export interface AutoUpdateDeleteContainerParams {
  env?: string;
}

export interface AutoUpdateRetrieveContainerParams {
  env?: string;
}

export declare namespace AutoUpdate {
  export {
    type AutoUpdateRetrieveParams as AutoUpdateRetrieveParams,
    type AutoUpdateCreateContainerParams as AutoUpdateCreateContainerParams,
    type AutoUpdateDeleteContainerParams as AutoUpdateDeleteContainerParams,
    type AutoUpdateRetrieveContainerParams as AutoUpdateRetrieveContainerParams,
  };
}
