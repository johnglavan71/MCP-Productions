// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnvFilesAPI from './env-files';
import { EnvFileCreateParams, EnvFiles } from './env-files';
import * as WebhookAPI from './webhook';
import { Webhook, WebhookRetrieveParams } from './webhook';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Stacks extends APIResource {
  envFiles: EnvFilesAPI.EnvFiles = new EnvFilesAPI.EnvFiles(this._client);
  webhook: WebhookAPI.Webhook = new WebhookAPI.Webhook(this._client);

  /**
   * POST /api/git/stacks
   */
  create(body: StackCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/git/stacks', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/stacks/{id}
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/git/stacks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/git/stacks/{id}
   */
  update(
    id: string,
    body: StackUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/git/stacks/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/git/stacks
   */
  list(query: StackListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/git/stacks', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * DELETE /api/git/stacks/{id}
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/git/stacks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/git/stacks/{id}/deploy
   */
  deploy(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/git/stacks/${id}/deploy`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/git/stacks/{id}/deploy-stream
   */
  deployStream(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/git/stacks/${id}/deploy-stream`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/git/stacks/{id}/sync
   */
  sync(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/git/stacks/${id}/sync`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/git/stacks/{id}/test
   */
  test(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/git/stacks/${id}/test`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StackCreateParams {
  autoUpdate?: string;

  autoUpdateCron?: string;

  autoUpdateSchedule?: string;

  branch?: string;

  composePath?: string;

  credentialId?: string;

  deployNow?: string;

  envFilePath?: string;

  environmentId?: string;

  envVars?: string;

  repoName?: string;

  repositoryId?: string;

  stackName?: string;

  url?: string;

  webhookEnabled?: string;

  webhookSecret?: string;
}

export interface StackUpdateParams {
  autoUpdate?: string;

  autoUpdateCron?: string;

  autoUpdateSchedule?: string;

  composePath?: string;

  deployNow?: string;

  envFilePath?: string;

  envVars?: string;

  stackName?: string;

  webhookEnabled?: string;

  webhookSecret?: string;
}

export interface StackListParams {
  env?: string;
}

Stacks.EnvFiles = EnvFiles;
Stacks.Webhook = Webhook;

export declare namespace Stacks {
  export {
    type StackCreateParams as StackCreateParams,
    type StackUpdateParams as StackUpdateParams,
    type StackListParams as StackListParams,
  };

  export { EnvFiles as EnvFiles, type EnvFileCreateParams as EnvFileCreateParams };

  export { Webhook as Webhook, type WebhookRetrieveParams as WebhookRetrieveParams };
}
