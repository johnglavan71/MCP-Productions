// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Webhook extends APIResource {
  /**
   * POST /api/git/stacks/{id}/webhook
   */
  create(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/git/stacks/${id}/webhook`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/stacks/{id}/webhook
   */
  retrieve(
    id: string,
    query: WebhookRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/git/stacks/${id}/webhook`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WebhookRetrieveParams {
  secret?: string;
}

export declare namespace Webhook {
  export { type WebhookRetrieveParams as WebhookRetrieveParams };
}
