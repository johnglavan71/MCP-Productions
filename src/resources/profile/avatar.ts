// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Avatar extends APIResource {
  /**
   * DELETE /api/profile/avatar
   */
  delete(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/api/profile/avatar', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/profile/avatar
   */
  upload(body: AvatarUploadParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/profile/avatar', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AvatarUploadParams {
  avatar?: string;
}

export declare namespace Avatar {
  export { type AvatarUploadParams as AvatarUploadParams };
}
