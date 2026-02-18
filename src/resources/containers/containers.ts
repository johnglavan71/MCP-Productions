// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogsAPI from './logs';
import { LogRetrieveParams, LogStreamParams, Logs } from './logs';
import * as PendingUpdatesAPI from './pending-updates';
import { PendingUpdateDeleteParams, PendingUpdateListParams, PendingUpdates } from './pending-updates';
import * as StatsAPI from './stats';
import { StatListParams, StatRetrieveParams, Stats } from './stats';
import * as FilesAPI from './files/files';
import {
  FileChmodParams,
  FileCreateParams,
  FileDeleteParams,
  FileDownloadParams,
  FileListParams,
  FileRenameParams,
  FileUploadParams,
  Files,
} from './files/files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Containers extends APIResource {
  pendingUpdates: PendingUpdatesAPI.PendingUpdates = new PendingUpdatesAPI.PendingUpdates(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * POST /api/containers
   */
  create(params: ContainerCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { query_env, ...body } = params ?? {};
    return this._client.post('/api/containers', {
      query: { env: query_env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/{id}
   */
  retrieve(
    id: string,
    query: ContainerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/update
   */
  update(
    id: string,
    params: ContainerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/containers/${id}/update`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers
   */
  list(query: ContainerListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/containers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/containers/{id}
   */
  delete(
    id: string,
    params: ContainerDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, force } = params ?? {};
    return this._client.delete(path`/api/containers/${id}`, {
      query: { env, force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/batch-update
   */
  batchUpdate(
    params: ContainerBatchUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post('/api/containers/batch-update', {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/batch-update-stream
   */
  batchUpdateStream(
    params: ContainerBatchUpdateStreamParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post('/api/containers/batch-update-stream', {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/check-updates
   */
  checkUpdates(
    params: ContainerCheckUpdatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post('/api/containers/check-updates', {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/exec
   */
  exec(
    id: string,
    params: ContainerExecParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { envId, ...body } = params ?? {};
    return this._client.post(path`/api/containers/${id}/exec`, {
      query: { envId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/{id}/inspect
   */
  inspect(
    id: string,
    query: ContainerInspectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/inspect`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/{id}/shells
   */
  listShells(
    id: string,
    query: ContainerListShellsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/shells`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/sizes
   */
  listSizes(
    query: ContainerListSizesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/containers/sizes', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/pause
   */
  pause(
    id: string,
    params: ContainerPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/containers/${id}/pause`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/rename
   */
  rename(
    id: string,
    params: ContainerRenameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env, ...body } = params ?? {};
    return this._client.post(path`/api/containers/${id}/rename`, {
      query: { env },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/restart
   */
  restart(
    id: string,
    params: ContainerRestartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/containers/${id}/restart`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/start
   */
  start(
    id: string,
    params: ContainerStartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/containers/${id}/start`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/stop
   */
  stop(
    id: string,
    params: ContainerStopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/containers/${id}/stop`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/containers/{id}/top
   */
  top(
    id: string,
    query: ContainerTopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/containers/${id}/top`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/containers/{id}/unpause
   */
  unpause(
    id: string,
    params: ContainerUnpauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { env } = params ?? {};
    return this._client.post(path`/api/containers/${id}/unpause`, {
      query: { env },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContainerCreateParams {
  /**
   * Query param
   */
  query_env?: string;

  /**
   * Body param
   */
  capAdd?: Array<string>;

  /**
   * Body param
   */
  capDrop?: Array<string>;

  /**
   * Body param
   */
  cgroupParent?: string;

  /**
   * Body param
   */
  cmd?: Array<string>;

  /**
   * Body param
   */
  cpuPeriod?: number;

  /**
   * Body param
   */
  cpuQuota?: number;

  /**
   * Body param
   */
  cpusetCpus?: string;

  /**
   * Body param
   */
  cpusetMems?: string;

  /**
   * Body param
   */
  cpuShares?: number;

  /**
   * Body param
   */
  deviceRequests?: Array<unknown>;

  /**
   * Body param
   */
  devices?: Array<unknown>;

  /**
   * Body param
   */
  dns?: Array<string>;

  /**
   * Body param
   */
  dnsOptions?: Array<string>;

  /**
   * Body param
   */
  dnsSearch?: Array<string>;

  /**
   * Body param
   */
  domainname?: string;

  /**
   * Body param
   */
  entrypoint?: Array<string>;

  /**
   * Body param
   */
  body_env?: Array<string>;

  /**
   * Body param
   */
  extraHosts?: Array<string>;

  /**
   * Body param
   */
  groupAdd?: Array<string>;

  /**
   * Body param
   */
  healthcheck?: unknown;

  /**
   * Body param
   */
  hostname?: string;

  /**
   * Body param
   */
  image?: string;

  /**
   * Body param
   */
  init?: boolean;

  /**
   * Body param
   */
  ipcMode?: string;

  /**
   * Body param
   */
  labels?: { [key: string]: string };

  /**
   * Body param
   */
  logDriver?: string;

  /**
   * Body param
   */
  logOptions?: unknown;

  /**
   * Body param
   */
  macAddress?: string;

  /**
   * Body param
   */
  memory?: number;

  /**
   * Body param
   */
  memoryReservation?: number;

  /**
   * Body param
   */
  memorySwap?: number;

  /**
   * Body param
   */
  memorySwappiness?: number;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  nanoCpus?: number;

  /**
   * Body param
   */
  networkAliases?: Array<string>;

  /**
   * Body param
   */
  networkGwPriority?: number;

  /**
   * Body param
   */
  networkIpv4Address?: string;

  /**
   * Body param
   */
  networkIpv6Address?: string;

  /**
   * Body param
   */
  networkMode?: string;

  /**
   * Body param
   */
  networks?: Array<string>;

  /**
   * Body param
   */
  oomKillDisable?: boolean;

  /**
   * Body param
   */
  pidMode?: string;

  /**
   * Body param
   */
  pidsLimit?: number;

  /**
   * Body param
   */
  ports?: { [key: string]: unknown };

  /**
   * Body param
   */
  privileged?: boolean;

  /**
   * Body param
   */
  readonlyRootfs?: boolean;

  /**
   * Body param
   */
  restartMaxRetries?: number;

  /**
   * Body param
   */
  restartPolicy?: 'no' | 'always' | 'unless-stopped' | 'on-failure';

  /**
   * Body param
   */
  runtime?: string;

  /**
   * Body param
   */
  securityOpt?: Array<string>;

  /**
   * Body param
   */
  shmSize?: number;

  /**
   * Body param
   */
  startAfterCreate?: boolean;

  /**
   * Body param
   */
  stdinOpen?: boolean;

  /**
   * Body param
   */
  stopSignal?: string;

  /**
   * Body param
   */
  stopTimeout?: number;

  /**
   * Body param
   */
  sysctls?: unknown;

  /**
   * Body param
   */
  tmpfs?: unknown;

  /**
   * Body param
   */
  tty?: boolean;

  /**
   * Body param
   */
  ulimits?: Array<unknown>;

  /**
   * Body param
   */
  user?: string;

  /**
   * Body param
   */
  usernsMode?: string;

  /**
   * Body param
   */
  utsMode?: string;

  /**
   * Body param
   */
  volumeBinds?: Array<string>;

  /**
   * Body param
   */
  volumes?: unknown;

  /**
   * Body param
   */
  workingDir?: string;
}

export interface ContainerRetrieveParams {
  env?: string;
}

export interface ContainerUpdateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  '...options'?: string;

  /**
   * Body param
   */
  repullImage?: string;

  /**
   * Body param
   */
  startAfterUpdate?: string;
}

export interface ContainerListParams {
  all?: string;

  env?: string;
}

export interface ContainerDeleteParams {
  env?: string;

  force?: string;
}

export interface ContainerBatchUpdateParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  containerIds?: string;
}

export interface ContainerBatchUpdateStreamParams {
  env?: string;
}

export interface ContainerCheckUpdatesParams {
  env?: string;
}

export interface ContainerExecParams {
  /**
   * Query param
   */
  envId?: string;

  /**
   * Body param
   */
  shell?: string;

  /**
   * Body param
   */
  user?: string;
}

export interface ContainerInspectParams {
  env?: string;
}

export interface ContainerListShellsParams {
  env?: string;
}

export interface ContainerListSizesParams {
  env?: string;
}

export interface ContainerPauseParams {
  env?: string;
}

export interface ContainerRenameParams {
  /**
   * Query param
   */
  env?: string;

  /**
   * Body param
   */
  name?: string;
}

export interface ContainerRestartParams {
  env?: string;
}

export interface ContainerStartParams {
  env?: string;
}

export interface ContainerStopParams {
  env?: string;
}

export interface ContainerTopParams {
  env?: string;
}

export interface ContainerUnpauseParams {
  env?: string;
}

Containers.PendingUpdates = PendingUpdates;
Containers.Stats = Stats;
Containers.Files = Files;
Containers.Logs = Logs;

export declare namespace Containers {
  export {
    type ContainerCreateParams as ContainerCreateParams,
    type ContainerRetrieveParams as ContainerRetrieveParams,
    type ContainerUpdateParams as ContainerUpdateParams,
    type ContainerListParams as ContainerListParams,
    type ContainerDeleteParams as ContainerDeleteParams,
    type ContainerBatchUpdateParams as ContainerBatchUpdateParams,
    type ContainerBatchUpdateStreamParams as ContainerBatchUpdateStreamParams,
    type ContainerCheckUpdatesParams as ContainerCheckUpdatesParams,
    type ContainerExecParams as ContainerExecParams,
    type ContainerInspectParams as ContainerInspectParams,
    type ContainerListShellsParams as ContainerListShellsParams,
    type ContainerListSizesParams as ContainerListSizesParams,
    type ContainerPauseParams as ContainerPauseParams,
    type ContainerRenameParams as ContainerRenameParams,
    type ContainerRestartParams as ContainerRestartParams,
    type ContainerStartParams as ContainerStartParams,
    type ContainerStopParams as ContainerStopParams,
    type ContainerTopParams as ContainerTopParams,
    type ContainerUnpauseParams as ContainerUnpauseParams,
  };

  export {
    PendingUpdates as PendingUpdates,
    type PendingUpdateListParams as PendingUpdateListParams,
    type PendingUpdateDeleteParams as PendingUpdateDeleteParams,
  };

  export {
    Stats as Stats,
    type StatRetrieveParams as StatRetrieveParams,
    type StatListParams as StatListParams,
  };

  export {
    Files as Files,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileChmodParams as FileChmodParams,
    type FileDownloadParams as FileDownloadParams,
    type FileRenameParams as FileRenameParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Logs as Logs,
    type LogRetrieveParams as LogRetrieveParams,
    type LogStreamParams as LogStreamParams,
  };
}
