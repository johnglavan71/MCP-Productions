// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExecutionsAPI from './executions';
import { ExecutionListParams, Executions } from './executions';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings } from './settings';
import * as SystemAPI from './system';
import { System } from './system';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schedules extends APIResource {
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  system: SystemAPI.System = new SystemAPI.System(this._client);

  /**
   * GET /api/schedules
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/schedules', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/schedules/{type}/{id}
   */
  delete(id: string, params: ScheduleDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { type } = params;
    return this._client.delete(path`/api/schedules/${type}/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/schedules/{type}/{id}/run
   */
  run(id: string, params: ScheduleRunParams, options?: RequestOptions): APIPromise<void> {
    const { type } = params;
    return this._client.post(path`/api/schedules/${type}/${id}/run`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/schedules/stream
   */
  stream(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/schedules/stream', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/schedules/{type}/{id}/toggle
   */
  toggle(id: string, params: ScheduleToggleParams, options?: RequestOptions): APIPromise<void> {
    const { type } = params;
    return this._client.post(path`/api/schedules/${type}/${id}/toggle`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ScheduleDeleteParams {
  type: string;
}

export interface ScheduleRunParams {
  type: string;
}

export interface ScheduleToggleParams {
  type: string;
}

Schedules.Executions = Executions;
Schedules.Settings = Settings;
Schedules.System = System;

export declare namespace Schedules {
  export {
    type ScheduleDeleteParams as ScheduleDeleteParams,
    type ScheduleRunParams as ScheduleRunParams,
    type ScheduleToggleParams as ScheduleToggleParams,
  };

  export { Executions as Executions, type ExecutionListParams as ExecutionListParams };

  export { Settings as Settings, type SettingUpdateParams as SettingUpdateParams };

  export { System as System };
}
