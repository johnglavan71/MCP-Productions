// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DiskWarningAPI from './disk-warning';
import { DiskWarning, DiskWarningCreateParams } from './disk-warning';
import * as ImagePruneAPI from './image-prune';
import { ImagePrune, ImagePruneCreateParams } from './image-prune';
import * as NotificationsAPI from './notifications';
import {
  NotificationCreateParams,
  NotificationDeleteParams,
  NotificationRetrieveParams,
  NotificationUpdateParams,
  Notifications,
} from './notifications';
import * as TestAPI from './test';
import { Test } from './test';
import * as TimezoneAPI from './timezone';
import { Timezone, TimezoneUpdateParams } from './timezone';
import * as UpdateCheckAPI from './update-check';
import { UpdateCheck, UpdateCheckRunParams } from './update-check';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Environments extends APIResource {
  test: TestAPI.Test = new TestAPI.Test(this._client);
  diskWarning: DiskWarningAPI.DiskWarning = new DiskWarningAPI.DiskWarning(this._client);
  imagePrune: ImagePruneAPI.ImagePrune = new ImagePruneAPI.ImagePrune(this._client);
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  timezone: TimezoneAPI.Timezone = new TimezoneAPI.Timezone(this._client);
  updateCheck: UpdateCheckAPI.UpdateCheck = new UpdateCheckAPI.UpdateCheck(this._client);

  /**
   * POST /api/environments
   */
  create(body: EnvironmentCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/environments', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/environments/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/environments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/environments/{id}
   */
  update(
    id: string,
    body: EnvironmentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/environments/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/environments
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/environments', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/environments/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/environments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/environments/detect-socket
   */
  detectSocket(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/environments/detect-socket', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EnvironmentCreateParams {
  collectActivity?: string;

  collectMetrics?: string;

  connectionType?: string;

  hawserToken?: string;

  highlightChanges?: string;

  host?: string;

  icon?: string;

  labels?: string;

  name?: string;

  port?: string;

  protocol?: string;

  publicIp?: string;

  socketPath?: string;

  tlsCa?: string;

  tlsCert?: string;

  tlsKey?: string;

  tlsSkipVerify?: string;
}

export interface EnvironmentUpdateParams {
  collectActivity?: string;

  collectMetrics?: string;

  connectionType?: string;

  hawserToken?: string;

  highlightChanges?: string;

  host?: string;

  icon?: string;

  labels?: string;

  name?: string;

  port?: string;

  protocol?: string;

  publicIp?: string;

  socketPath?: string;

  tlsCa?: string;

  tlsCert?: string;

  tlsKey?: string;

  tlsSkipVerify?: string;
}

Environments.Test = Test;
Environments.DiskWarning = DiskWarning;
Environments.ImagePrune = ImagePrune;
Environments.Notifications = Notifications;
Environments.Timezone = Timezone;
Environments.UpdateCheck = UpdateCheck;

export declare namespace Environments {
  export {
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
  };

  export { Test as Test };

  export { DiskWarning as DiskWarning, type DiskWarningCreateParams as DiskWarningCreateParams };

  export { ImagePrune as ImagePrune, type ImagePruneCreateParams as ImagePruneCreateParams };

  export {
    Notifications as Notifications,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationUpdateParams as NotificationUpdateParams,
    type NotificationDeleteParams as NotificationDeleteParams,
  };

  export { Timezone as Timezone, type TimezoneUpdateParams as TimezoneUpdateParams };

  export { UpdateCheck as UpdateCheck, type UpdateCheckRunParams as UpdateCheckRunParams };
}
