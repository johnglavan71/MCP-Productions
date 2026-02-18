// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectAPI from './connect';
import { Connect } from './connect';
import * as TokensAPI from './tokens';
import { TokenCreateParams, TokenDeleteParams, Tokens } from './tokens';

export class Hawser extends APIResource {
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

Hawser.Connect = Connect;
Hawser.Tokens = Tokens;

export declare namespace Hawser {
  export { Connect as Connect };

  export {
    Tokens as Tokens,
    type TokenCreateParams as TokenCreateParams,
    type TokenDeleteParams as TokenDeleteParams,
  };
}
