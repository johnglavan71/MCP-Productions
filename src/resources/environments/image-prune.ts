// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ImagePrune extends APIResource {
  /**
   * POST /api/environments/{id}/image-prune
   */
  create(
    id: string,
    body: ImagePruneCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/environments/${id}/image-prune`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/environments/{id}/image-prune
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/environments/${id}/image-prune`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/environments/{id}/image-prune
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/environments/${id}/image-prune`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ImagePruneCreateParams {
  cronExpression?: string;

  enabled?: string;

  pruneMode?: string;
}

export declare namespace ImagePrune {
  export { type ImagePruneCreateParams as ImagePruneCreateParams };
}
