// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Activity extends APIResource {
  /**
   * GET /api/activity
   */
  list(query: ActivityListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/activity', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/activity
   */
  delete(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/api/activity', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/activity/containers
   */
  listContainers(
    query: ActivityListContainersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/activity/containers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/activity/events
   */
  listEvents(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/activity/events', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/activity/stats
   */
  retrieveStats(
    query: ActivityRetrieveStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/activity/stats', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActivityListParams {
  actions?: string;

  containerId?: string;

  containerName?: string;

  environmentId?: string;

  fromDate?: string;

  labels?: string;

  limit?: string;

  offset?: string;

  toDate?: string;
}

export interface ActivityListContainersParams {
  environment_id?: string;
}

export interface ActivityRetrieveStatsParams {
  environment_id?: string;
}

export declare namespace Activity {
  export {
    type ActivityListParams as ActivityListParams,
    type ActivityListContainersParams as ActivityListContainersParams,
    type ActivityRetrieveStatsParams as ActivityRetrieveStatsParams,
  };
}
