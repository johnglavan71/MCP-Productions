// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Tokens extends APIResource {
  /**
   * POST /api/hawser/tokens
   */
  create(body: TokenCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/hawser/tokens', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/hawser/tokens
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/hawser/tokens', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/hawser/tokens
   */
  delete(params: TokenDeleteParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { id } = params ?? {};
    return this._client.delete('/api/hawser/tokens', {
      query: { id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TokenCreateParams {
  environmentId?: string;

  expiresAt?: string;

  name?: string;

  rawToken?: string;
}

export interface TokenDeleteParams {
  id?: string;
}

export declare namespace Tokens {
  export { type TokenCreateParams as TokenCreateParams, type TokenDeleteParams as TokenDeleteParams };
}
