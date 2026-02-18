// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Registries extends APIResource {
  /**
   * POST /api/registries
   */
  create(body: RegistryCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/registries', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/registries/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/registries/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/registries/{id}
   */
  update(
    id: string,
    body: RegistryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/registries/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/registries
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/registries', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/registries/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/registries/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/registry/image
   */
  deleteImage(
    params: RegistryDeleteImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { image, registry, tag } = params ?? {};
    return this._client.delete('/api/registry/image', {
      query: { image, registry, tag },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/registry/catalog
   */
  listCatalog(
    query: RegistryListCatalogParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/registry/catalog', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/registry/tags
   */
  listTags(
    query: RegistryListTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/registry/tags', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/registry/search
   */
  search(query: RegistrySearchParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/registry/search', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/registries/{id}/default
   */
  setDefault(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/registries/${id}/default`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RegistryCreateParams {
  isDefault?: string;

  name?: string;

  password?: string;

  url?: string;

  username?: string;
}

export interface RegistryUpdateParams {
  isDefault?: string;

  name?: string;

  password?: string;

  url?: string;

  username?: string;
}

export interface RegistryDeleteImageParams {
  image?: string;

  registry?: string;

  tag?: string;
}

export interface RegistryListCatalogParams {
  last?: string;

  registry?: string;
}

export interface RegistryListTagsParams {
  image?: string;

  page?: string;

  pageSize?: string;

  registry?: string;
}

export interface RegistrySearchParams {
  limit?: string;

  registry?: string;

  term?: string;
}

export declare namespace Registries {
  export {
    type RegistryCreateParams as RegistryCreateParams,
    type RegistryUpdateParams as RegistryUpdateParams,
    type RegistryDeleteImageParams as RegistryDeleteImageParams,
    type RegistryListCatalogParams as RegistryListCatalogParams,
    type RegistryListTagsParams as RegistryListTagsParams,
    type RegistrySearchParams as RegistrySearchParams,
  };
}
