// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContentAPI from './content';
import { Content, ContentRetrieveParams } from './content';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Files extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);

  /**
   * GET /api/system/files
   */
  list(query: FileListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/system/files', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FileListParams {
  path?: string;
}

Files.Content = Content;

export declare namespace Files {
  export { type FileListParams as FileListParams };

  export { Content as Content, type ContentRetrieveParams as ContentRetrieveParams };
}
