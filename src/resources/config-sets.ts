// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ConfigSets extends APIResource {
  /**
   * POST /api/config-sets
   */
  create(body: ConfigSetCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/config-sets', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/config-sets/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/config-sets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/config-sets/{id}
   */
  update(
    id: string,
    body: ConfigSetUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/config-sets/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/config-sets
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/config-sets', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/config-sets/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/config-sets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ConfigSetCreateParams {
  description?: string;

  envVars?: string;

  labels?: string;

  name?: string;

  networkMode?: string;

  ports?: string;

  restartPolicy?: string;

  volumes?: string;
}

export interface ConfigSetUpdateParams {
  description?: string;

  envVars?: string;

  labels?: string;

  name?: string;

  networkMode?: string;

  ports?: string;

  restartPolicy?: string;

  volumes?: string;
}

export declare namespace ConfigSets {
  export {
    type ConfigSetCreateParams as ConfigSetCreateParams,
    type ConfigSetUpdateParams as ConfigSetUpdateParams,
  };
}
