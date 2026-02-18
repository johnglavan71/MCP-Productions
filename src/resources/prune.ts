// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Prune extends APIResource {
  /**
   * POST /api/prune/all
   */
  pruneAll(params: PrunePruneAllParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post('/api/prune/all', {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/prune/containers
   */
  pruneContainers(
    params: PrunePruneContainersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post('/api/prune/containers', {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/prune/images
   */
  pruneImages(
    params: PrunePruneImagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { dangling, env } = params ?? {};
    return this._client.post('/api/prune/images', {
      query: { dangling, env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/prune/networks
   */
  pruneNetworks(
    params: PrunePruneNetworksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post('/api/prune/networks', {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/prune/volumes
   */
  pruneVolumes(
    params: PrunePruneVolumesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post('/api/prune/volumes', {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PrunePruneAllParams {
  env?: string;
}

export interface PrunePruneContainersParams {
  env?: string;
}

export interface PrunePruneImagesParams {
  dangling?: string;

  env?: string;
}

export interface PrunePruneNetworksParams {
  env?: string;
}

export interface PrunePruneVolumesParams {
  env?: string;
}

export declare namespace Prune {
  export {
    type PrunePruneAllParams as PrunePruneAllParams,
    type PrunePruneContainersParams as PrunePruneContainersParams,
    type PrunePruneImagesParams as PrunePruneImagesParams,
    type PrunePruneNetworksParams as PrunePruneNetworksParams,
    type PrunePruneVolumesParams as PrunePruneVolumesParams,
  };
}
