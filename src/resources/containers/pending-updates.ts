// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class PendingUpdates extends APIResource {
  /**
   * GET /api/containers/pending-updates
   */
  list(query: PendingUpdateListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/containers/pending-updates', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/containers/pending-updates
   */
  delete(
    params: PendingUpdateDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { containerId, env } = params ?? {};
    return this._client.delete('/api/containers/pending-updates', {
      query: { containerId, env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PendingUpdateListParams {
  env?: string;
}

export interface PendingUpdateDeleteParams {
  containerId?: string;

  env?: string;
}

export declare namespace PendingUpdates {
  export {
    type PendingUpdateListParams as PendingUpdateListParams,
    type PendingUpdateDeleteParams as PendingUpdateDeleteParams,
  };
}
