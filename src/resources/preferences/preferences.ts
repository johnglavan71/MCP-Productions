// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FavoriteGroupsAPI from './favorite-groups';
import { FavoriteGroupCreateParams, FavoriteGroupListParams, FavoriteGroups } from './favorite-groups';
import * as FavoritesAPI from './favorites';
import { FavoriteCreateParams, FavoriteListParams, Favorites } from './favorites';
import * as GridAPI from './grid';
import { Grid, GridCreateParams, GridDeleteParams } from './grid';

export class Preferences extends APIResource {
  favoriteGroups: FavoriteGroupsAPI.FavoriteGroups = new FavoriteGroupsAPI.FavoriteGroups(this._client);
  favorites: FavoritesAPI.Favorites = new FavoritesAPI.Favorites(this._client);
  grid: GridAPI.Grid = new GridAPI.Grid(this._client);
}

Preferences.FavoriteGroups = FavoriteGroups;
Preferences.Favorites = Favorites;
Preferences.Grid = Grid;

export declare namespace Preferences {
  export {
    FavoriteGroups as FavoriteGroups,
    type FavoriteGroupCreateParams as FavoriteGroupCreateParams,
    type FavoriteGroupListParams as FavoriteGroupListParams,
  };

  export {
    Favorites as Favorites,
    type FavoriteCreateParams as FavoriteCreateParams,
    type FavoriteListParams as FavoriteListParams,
  };

  export {
    Grid as Grid,
    type GridCreateParams as GridCreateParams,
    type GridDeleteParams as GridDeleteParams,
  };
}
