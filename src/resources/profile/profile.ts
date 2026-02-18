// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AvatarAPI from './avatar';
import { Avatar, AvatarUploadParams } from './avatar';
import * as PreferencesAPI from './preferences';
import { PreferenceUpdateParams, Preferences } from './preferences';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Profile extends APIResource {
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);

  /**
   * GET /api/profile
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/profile', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * PUT /api/profile
   */
  update(body: ProfileUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/profile', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProfileUpdateParams {
  currentPassword?: string;

  displayName?: string;

  email?: string;

  newPassword?: string;
}

Profile.Avatar = Avatar;
Profile.Preferences = Preferences;

export declare namespace Profile {
  export { type ProfileUpdateParams as ProfileUpdateParams };

  export { Avatar as Avatar, type AvatarUploadParams as AvatarUploadParams };

  export { Preferences as Preferences, type PreferenceUpdateParams as PreferenceUpdateParams };
}
