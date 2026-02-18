// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TestAPI from './test';
import { Test, TestCreateParams } from './test';
import * as TriggerTestAPI from './trigger-test';
import { TriggerTest, TriggerTestCreateParams } from './trigger-test';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notifications extends APIResource {
  test: TestAPI.Test = new TestAPI.Test(this._client);
  triggerTest: TriggerTestAPI.TriggerTest = new TriggerTestAPI.TriggerTest(this._client);

  /**
   * POST /api/notifications
   */
  create(body: NotificationCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/notifications', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/notifications/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/notifications/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/notifications/{id}
   */
  update(
    id: string,
    body: NotificationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/notifications/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/notifications
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/notifications', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/notifications/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/notifications/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NotificationCreateParams {
  config?: string;

  enabled?: string;

  event_types?: string;

  eventTypes?: string;

  name?: string;

  type?: string;
}

export interface NotificationUpdateParams {
  config?: string;

  enabled?: string;

  event_types?: string;

  eventTypes?: string;

  name?: string;
}

Notifications.Test = Test;
Notifications.TriggerTest = TriggerTest;

export declare namespace Notifications {
  export {
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationUpdateParams as NotificationUpdateParams,
  };

  export { Test as Test, type TestCreateParams as TestCreateParams };

  export { TriggerTest as TriggerTest, type TriggerTestCreateParams as TriggerTestCreateParams };
}
