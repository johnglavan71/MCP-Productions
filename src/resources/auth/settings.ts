// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Settings extends APIResource {
  /**
   * GET /api/auth/settings
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/settings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/auth/settings
   */
  update(body: SettingUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/auth/settings', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SettingUpdateParams {
  authEnabled?: string;

  sessionTimeout?: string;
}

export declare namespace Settings {
  export { type SettingUpdateParams as SettingUpdateParams };
}
