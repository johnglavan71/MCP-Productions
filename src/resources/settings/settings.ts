// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GeneralAPI from './general';
import { General, GeneralCreateParams } from './general';
import * as ScannerAPI from './scanner';
import { Scanner, ScannerCreateParams, ScannerDeleteParams, ScannerRetrieveParams } from './scanner';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Settings extends APIResource {
  general: GeneralAPI.General = new GeneralAPI.General(this._client);
  scanner: ScannerAPI.Scanner = new ScannerAPI.Scanner(this._client);

  /**
   * GET /api/settings/theme
   */
  retrieveTheme(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/settings/theme', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Settings.General = General;
Settings.Scanner = Scanner;

export declare namespace Settings {
  export { General as General, type GeneralCreateParams as GeneralCreateParams };

  export {
    Scanner as Scanner,
    type ScannerCreateParams as ScannerCreateParams,
    type ScannerRetrieveParams as ScannerRetrieveParams,
    type ScannerDeleteParams as ScannerDeleteParams,
  };
}
