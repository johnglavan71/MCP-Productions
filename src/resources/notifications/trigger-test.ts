// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class TriggerTest extends APIResource {
  /**
   * POST /api/notifications/trigger-test
   */
  create(body: TriggerTestCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/notifications/trigger-test', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/notifications/trigger-test
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/notifications/trigger-test', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TriggerTestCreateParams {
  environmentId?: string;

  eventType?: string;

  payload?: string;
}

export declare namespace TriggerTest {
  export { type TriggerTestCreateParams as TriggerTestCreateParams };
}
