// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Settings extends APIResource {
  /**
   * GET /api/schedules/settings
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/schedules/settings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/schedules/settings
   */
  update(body: SettingUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/schedules/settings', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SettingUpdateParams {
  hideSystemJobs?: string;
}

export declare namespace Settings {
  export { type SettingUpdateParams as SettingUpdateParams };
}
