// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Preferences extends APIResource {
  /**
   * GET /api/profile/preferences
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/profile/preferences', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/profile/preferences
   */
  update(body: PreferenceUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/profile/preferences', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PreferenceUpdateParams {
  darkTheme?: string;

  editorFont?: string;

  font?: string;

  fontSize?: string;

  gridFontSize?: string;

  lightTheme?: string;

  terminalFont?: string;
}

export declare namespace Preferences {
  export { type PreferenceUpdateParams as PreferenceUpdateParams };
}
