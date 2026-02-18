// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LdapAPI from './ldap';
import { Ldap, LdapCreateParams, LdapUpdateParams } from './ldap';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings } from './settings';
import * as OidcAPI from './oidc/oidc';
import { Oidc, OidcCallbackParams, OidcCreateParams, OidcUpdateParams } from './oidc/oidc';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  ldap: LdapAPI.Ldap = new LdapAPI.Ldap(this._client);
  oidc: OidcAPI.Oidc = new OidcAPI.Oidc(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * GET /api/auth/providers
   */
  listProviders(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/providers', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/auth/login
   */
  login(body: AuthLoginParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/login', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * POST /api/auth/logout
   */
  logout(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/logout', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * GET /api/auth/session
   */
  retrieveSession(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/session', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthLoginParams {
  mfaToken?: string;

  password?: string;

  "provider = 'local'"?: string;

  username?: string;
}

Auth.Ldap = Ldap;
Auth.Oidc = Oidc;
Auth.Settings = Settings;

export declare namespace Auth {
  export { type AuthLoginParams as AuthLoginParams };

  export {
    Ldap as Ldap,
    type LdapCreateParams as LdapCreateParams,
    type LdapUpdateParams as LdapUpdateParams,
  };

  export {
    Oidc as Oidc,
    type OidcCreateParams as OidcCreateParams,
    type OidcUpdateParams as OidcUpdateParams,
    type OidcCallbackParams as OidcCallbackParams,
  };

  export { Settings as Settings, type SettingUpdateParams as SettingUpdateParams };
}
