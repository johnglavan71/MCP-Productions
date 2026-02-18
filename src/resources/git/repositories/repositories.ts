// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SyncAPI from './sync';
import { Sync } from './sync';
import * as TestAPI from './test';
import { Test, TestCreateParams } from './test';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Repositories extends APIResource {
  test: TestAPI.Test = new TestAPI.Test(this._client);
  sync: SyncAPI.Sync = new SyncAPI.Sync(this._client);

  /**
   * POST /api/git/repositories
   */
  create(body: RepositoryCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/git/repositories', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/repositories/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/git/repositories/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/git/repositories/{id}
   */
  update(
    id: string,
    body: RepositoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/git/repositories/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/repositories
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/git/repositories', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/git/repositories/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/git/repositories/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/git/repositories/{id}/deploy
   */
  deploy(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/git/repositories/${id}/deploy`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RepositoryCreateParams {
  branch?: string;

  credentialId?: string;

  name?: string;

  url?: string;
}

export interface RepositoryUpdateParams {
  branch?: string;

  credentialId?: string;

  name?: string;

  url?: string;
}

Repositories.Test = Test;
Repositories.Sync = Sync;

export declare namespace Repositories {
  export {
    type RepositoryCreateParams as RepositoryCreateParams,
    type RepositoryUpdateParams as RepositoryUpdateParams,
  };

  export { Test as Test, type TestCreateParams as TestCreateParams };

  export { Sync as Sync };
}
