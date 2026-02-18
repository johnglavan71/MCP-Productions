// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Executions extends APIResource {
  /**
   * GET /api/schedules/executions/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/schedules/executions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/schedules/executions
   */
  list(query: ExecutionListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/schedules/executions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/schedules/executions/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/schedules/executions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ExecutionListParams {
  environmentId?: string;

  fromDate?: string;

  limit?: string;

  offset?: string;

  scheduleId?: string;

  scheduleType?: string;

  status?: string;

  statuses?: string;

  toDate?: string;

  triggeredBy?: string;
}

export declare namespace Executions {
  export { type ExecutionListParams as ExecutionListParams };
}
