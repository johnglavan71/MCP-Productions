// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Initiate extends APIResource {
  /**
   * POST /api/auth/oidc/{id}/initiate
   */
  create(
    id: string,
    body: InitiateCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/auth/oidc/${id}/initiate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auth/oidc/{id}/initiate
   */
  retrieve(
    id: string,
    query: InitiateRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/auth/oidc/${id}/initiate`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InitiateCreateParams {
  redirect?: string;
}

export interface InitiateRetrieveParams {
  redirect?: string;
}

export declare namespace Initiate {
  export {
    type InitiateCreateParams as InitiateCreateParams,
    type InitiateRetrieveParams as InitiateRetrieveParams,
  };
}
