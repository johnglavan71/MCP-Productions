// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Audit extends APIResource {
  /**
   * GET /api/audit
   */
  retrieve(query: AuditRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/audit', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/audit/export
   */
  export(query: AuditExportParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/audit/export', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/audit/events
   */
  listEvents(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/audit/events', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/audit/users
   */
  listUsers(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/audit/users', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuditRetrieveParams {
  action?: string;

  actions?: string;

  entityType?: string;

  entityTypes?: string;

  environmentId?: string;

  fromDate?: string;

  labels?: string;

  limit?: string;

  offset?: string;

  toDate?: string;

  username?: string;

  usernames?: string;
}

export interface AuditExportParams {
  action?: string;

  entityType?: string;

  environmentId?: string;

  format?: string;

  fromDate?: string;

  toDate?: string;

  username?: string;
}

export declare namespace Audit {
  export { type AuditRetrieveParams as AuditRetrieveParams, type AuditExportParams as AuditExportParams };
}
