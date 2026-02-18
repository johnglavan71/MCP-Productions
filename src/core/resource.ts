// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Test2w } from '../client';

export abstract class APIResource {
  protected _client: Test2w;

  constructor(client: Test2w) {
    this._client = client;
  }
}
