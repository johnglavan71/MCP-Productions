// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferencesAPI from './preferences';
import { PreferenceCreateParams, Preferences } from './preferences';
import * as StatsAPI from './stats';
import { StatRetrieveParams, Stats } from './stats';

export class Dashboard extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
}

Dashboard.Preferences = Preferences;
Dashboard.Stats = Stats;

export declare namespace Dashboard {
  export { Preferences as Preferences, type PreferenceCreateParams as PreferenceCreateParams };

  export { Stats as Stats, type StatRetrieveParams as StatRetrieveParams };
}
