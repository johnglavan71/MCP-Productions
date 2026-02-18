// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notifications extends APIResource {
  /**
   * POST /api/environments/{id}/notifications
   */
  create(
    id: string,
    body: NotificationCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/environments/${id}/notifications`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/environments/{id}/notifications/{notificationId}
   */
  retrieve(
    notificationID: string,
    params: NotificationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.get(path`/api/environments/${id}/notifications/${notificationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/environments/{id}/notifications/{notificationId}
   */
  update(
    notificationID: string,
    params: NotificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.put(path`/api/environments/${id}/notifications/${notificationID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/environments/{id}/notifications
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/environments/${id}/notifications`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/environments/{id}/notifications/{notificationId}
   */
  delete(
    notificationID: string,
    params: NotificationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/api/environments/${id}/notifications/${notificationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NotificationCreateParams {
  enabled?: string;

  eventTypes?: string;

  notificationId?: string;
}

export interface NotificationRetrieveParams {
  id: string;
}

export interface NotificationUpdateParams {
  /**
   * Path param
   */
  id: string;

  /**
   * Body param
   */
  enabled?: string;

  /**
   * Body param
   */
  eventTypes?: string;
}

export interface NotificationDeleteParams {
  id: string;
}

export declare namespace Notifications {
  export {
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationUpdateParams as NotificationUpdateParams,
    type NotificationDeleteParams as NotificationDeleteParams,
  };
}
