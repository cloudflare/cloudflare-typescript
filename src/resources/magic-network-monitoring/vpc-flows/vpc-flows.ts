// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TokensAPI from './tokens';
import { BaseTokens, TokenCreateParams, TokenCreateResponse, Tokens } from './tokens';

export class BaseVPCFlows extends APIResource {
  static override readonly _key: readonly ['magicNetworkMonitoring', 'vpcFlows'] = Object.freeze([
    'magicNetworkMonitoring',
    'vpcFlows',
  ] as const);
}
export class VPCFlows extends BaseVPCFlows {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

VPCFlows.Tokens = Tokens;
VPCFlows.BaseTokens = BaseTokens;

export declare namespace VPCFlows {
  export {
    Tokens as Tokens,
    BaseTokens as BaseTokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams,
  };
}
