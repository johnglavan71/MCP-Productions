// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Credentials extends APIResource {
  /**
   * POST /api/git/credentials
   */
  create(body: CredentialCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/git/credentials', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/credentials/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/git/credentials/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/git/credentials/{id}
   */
  update(
    id: string,
    body: CredentialUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/git/credentials/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/credentials
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/git/credentials', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/git/credentials/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/git/credentials/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CredentialCreateParams {
  authType?: string;

  name?: string;

  password?: string;

  sshPassphrase?: string;

  sshPrivateKey?: string;

  username?: string;
}

export interface CredentialUpdateParams {
  authType?: string;

  name?: string;

  password?: string;

  sshPassphrase?: string;

  sshPrivateKey?: string;

  username?: string;
}

export declare namespace Credentials {
  export {
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
  };
}
