// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CredentialsAPI from './credentials';
import { CredentialCreateParams, CredentialUpdateParams, Credentials } from './credentials';
import * as WebhookAPI from './webhook';
import { Webhook, WebhookRetrieveParams, WebhookUpdateParams } from './webhook';
import * as RepositoriesAPI from './repositories/repositories';
import { Repositories, RepositoryCreateParams, RepositoryUpdateParams } from './repositories/repositories';
import * as StacksAPI from './stacks/stacks';
import { StackCreateParams, StackListParams, StackUpdateParams, Stacks } from './stacks/stacks';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Git extends APIResource {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
  repositories: RepositoriesAPI.Repositories = new RepositoriesAPI.Repositories(this._client);
  stacks: StacksAPI.Stacks = new StacksAPI.Stacks(this._client);
  webhook: WebhookAPI.Webhook = new WebhookAPI.Webhook(this._client);

  /**
   * POST /api/git/preview-env
   */
  createPreviewEnv(
    body: GitCreatePreviewEnvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/git/preview-env', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GitCreatePreviewEnvParams {
  branch?: string;

  composePath?: string;

  credentialId?: string;

  envFilePath?: string;

  repositoryId?: string;

  url?: string;
}

Git.Credentials = Credentials;
Git.Repositories = Repositories;
Git.Stacks = Stacks;
Git.Webhook = Webhook;

export declare namespace Git {
  export { type GitCreatePreviewEnvParams as GitCreatePreviewEnvParams };

  export {
    Credentials as Credentials,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
  };

  export {
    Repositories as Repositories,
    type RepositoryCreateParams as RepositoryCreateParams,
    type RepositoryUpdateParams as RepositoryUpdateParams,
  };

  export {
    Stacks as Stacks,
    type StackCreateParams as StackCreateParams,
    type StackUpdateParams as StackUpdateParams,
    type StackListParams as StackListParams,
  };

  export {
    Webhook as Webhook,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
