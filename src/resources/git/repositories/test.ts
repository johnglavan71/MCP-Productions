// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Test extends APIResource {
  /**
   * POST /api/git/repositories/test
   */
  create(body: TestCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/git/repositories/test', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/git/repositories/{id}/test
   */
  run(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/git/repositories/${id}/test`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TestCreateParams {
  branch?: string;

  credentialId?: string;

  url?: string;
}

export declare namespace Test {
  export { type TestCreateParams as TestCreateParams };
}
