// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * GET /api/events
   */
  list(query: EventListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/events', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EventListParams {
  env?: string;
}

export declare namespace Events {
  export { type EventListParams as EventListParams };
}
