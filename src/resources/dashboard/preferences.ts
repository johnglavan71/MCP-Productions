// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Preferences extends APIResource {
  /**
   * POST /api/dashboard/preferences
   */
  create(body: PreferenceCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/dashboard/preferences', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/dashboard/preferences
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/dashboard/preferences', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PreferenceCreateParams {
  gridLayout?: string;
}

export declare namespace Preferences {
  export { type PreferenceCreateParams as PreferenceCreateParams };
}
