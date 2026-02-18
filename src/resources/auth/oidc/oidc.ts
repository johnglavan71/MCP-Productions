// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InitiateAPI from './initiate';
import { Initiate, InitiateCreateParams, InitiateRetrieveParams } from './initiate';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Oidc extends APIResource {
  initiate: InitiateAPI.Initiate = new InitiateAPI.Initiate(this._client);

  /**
   * POST /api/auth/oidc
   */
  create(body: OidcCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/oidc', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auth/oidc/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/auth/oidc/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/auth/oidc/{id}
   */
  update(
    id: string,
    body: OidcUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/auth/oidc/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auth/oidc
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/oidc', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/auth/oidc/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/auth/oidc/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auth/oidc/callback
   */
  callback(query: OidcCallbackParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/oidc/callback', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/auth/oidc/{id}/test
   */
  test(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/auth/oidc/${id}/test`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OidcCreateParams {
  adminClaim?: string;

  adminValue?: string;

  clientId?: string;

  clientSecret?: string;

  displayNameClaim?: string;

  emailClaim?: string;

  enabled?: string;

  issuerUrl?: string;

  name?: string;

  redirectUri?: string;

  roleMappings?: string;

  roleMappingsClaim?: string;

  scopes?: string;

  usernameClaim?: string;
}

export interface OidcUpdateParams {
  adminClaim?: string;

  adminValue?: string;

  clientId?: string;

  clientSecret?: string;

  displayNameClaim?: string;

  emailClaim?: string;

  enabled?: string;

  issuerUrl?: string;

  name?: string;

  redirectUri?: string;

  roleMappings?: string;

  roleMappingsClaim?: string;

  scopes?: string;

  usernameClaim?: string;
}

export interface OidcCallbackParams {
  code?: string;

  error?: string;

  error_description?: string;

  state?: string;
}

Oidc.Initiate = Initiate;

export declare namespace Oidc {
  export {
    type OidcCreateParams as OidcCreateParams,
    type OidcUpdateParams as OidcUpdateParams,
    type OidcCallbackParams as OidcCallbackParams,
  };

  export {
    Initiate as Initiate,
    type InitiateCreateParams as InitiateCreateParams,
    type InitiateRetrieveParams as InitiateRetrieveParams,
  };
}
