// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DiskAPI from './disk';
import { Disk, DiskRetrieveParams } from './disk';
import * as FilesAPI from './files/files';
import { FileListParams, Files } from './files/files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class System extends APIResource {
  disk: DiskAPI.Disk = new DiskAPI.Disk(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * GET /api/system
   */
  retrieve(query: SystemRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/system', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SystemRetrieveParams {
  env?: string;
}

System.Disk = Disk;
System.Files = Files;

export declare namespace System {
  export { type SystemRetrieveParams as SystemRetrieveParams };

  export { Disk as Disk, type DiskRetrieveParams as DiskRetrieveParams };

  export { Files as Files, type FileListParams as FileListParams };
}
