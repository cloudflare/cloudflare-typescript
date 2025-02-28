// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TokensAPI from './tokens';
import { TokenCreateParams, TokenCreateResponse, Tokens } from './tokens';

export class VpcFlows extends APIResource {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

VpcFlows.Tokens = Tokens;

export declare namespace VpcFlows {
  export {
    Tokens as Tokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams,
  };
}
