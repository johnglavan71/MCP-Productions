// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RawAPI from './raw';
import { Raw, RawGetParams, RawUpdateParams } from './raw';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Env extends APIResource {
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);

  /**
   * PUT /api/stacks/{name}/env
   */
  update(
    name: string,
    params: EnvUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.put(path`/api/stacks/${name}/env`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/stacks/{name}/env
   */
  get(name: string, query: EnvGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/stacks/${name}/env`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/stacks/{name}/env/validate
   */
  validate(
    name: string,
    params: EnvValidateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/stacks/${name}/env/validate`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EnvUpdateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  variables?: string;
}

export interface EnvGetParams {
  env?: string;
}

export interface EnvValidateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  compose?: string;

  /**
   * Body param
   */
  variables?: string;
}

Env.Raw = Raw;

export declare namespace Env {
  export {
    type EnvUpdateParams as EnvUpdateParams,
    type EnvGetParams as EnvGetParams,
    type EnvValidateParams as EnvValidateParams,
  };

  export { Raw as Raw, type RawUpdateParams as RawUpdateParams, type RawGetParams as RawGetParams };
}
