// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class General extends APIResource {
  /**
   * POST /api/settings/general
   */
  create(body: GeneralCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/settings/general', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/settings/general
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/settings/general', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GeneralCreateParams {
  confirmDestructive?: string;

  darkTheme?: string;

  dateFormat?: string;

  defaultGrypeArgs?: string;

  defaultTimezone?: string;

  defaultTrivyArgs?: string;

  downloadFormat?: string;

  editorFont?: string;

  eventCleanupCron?: string;

  eventCleanupEnabled?: string;

  eventCollectionMode?: string;

  eventPollInterval?: string;

  eventRetentionDays?: string;

  externalStackPaths?: string;

  font?: string;

  fontSize?: string;

  gridFontSize?: string;

  highlightUpdates?: string;

  lightTheme?: string;

  logBufferSizeKb?: string;

  metricsCollectionInterval?: string;

  primaryStackLocation?: string;

  scheduleCleanupCron?: string;

  scheduleCleanupEnabled?: string;

  scheduleRetentionDays?: string;

  showStoppedContainers?: string;

  terminalFont?: string;

  timeFormat?: string;
}

export declare namespace General {
  export { type GeneralCreateParams as GeneralCreateParams };
}
