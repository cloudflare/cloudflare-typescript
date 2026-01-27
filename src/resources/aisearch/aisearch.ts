// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TokensAPI from './tokens';
import {
  TokenCreateParams,
  TokenCreateResponse,
  TokenDeleteParams,
  TokenDeleteResponse,
  TokenListParams,
  TokenListResponse,
  TokenListResponsesV4PagePaginationArray,
  TokenReadParams,
  TokenReadResponse,
  TokenUpdateParams,
  TokenUpdateResponse,
  Tokens,
} from './tokens';
import * as InstancesAPI from './instances/instances';
import {
  InstanceChatCompletionsParams,
  InstanceChatCompletionsResponse,
  InstanceCreateParams,
  InstanceCreateResponse,
  InstanceDeleteParams,
  InstanceDeleteResponse,
  InstanceListParams,
  InstanceListResponse,
  InstanceListResponsesV4PagePaginationArray,
  InstanceReadParams,
  InstanceReadResponse,
  InstanceSearchParams,
  InstanceSearchResponse,
  InstanceStatsParams,
  InstanceStatsResponse,
  InstanceUpdateParams,
  InstanceUpdateResponse,
  Instances,
} from './instances/instances';

export class AISearch extends APIResource {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

AISearch.Instances = Instances;
AISearch.InstanceListResponsesV4PagePaginationArray = InstanceListResponsesV4PagePaginationArray;
AISearch.Tokens = Tokens;
AISearch.TokenListResponsesV4PagePaginationArray = TokenListResponsesV4PagePaginationArray;

export declare namespace AISearch {
  export {
    Instances as Instances,
    type InstanceCreateResponse as InstanceCreateResponse,
    type InstanceUpdateResponse as InstanceUpdateResponse,
    type InstanceListResponse as InstanceListResponse,
    type InstanceDeleteResponse as InstanceDeleteResponse,
    type InstanceChatCompletionsResponse as InstanceChatCompletionsResponse,
    type InstanceReadResponse as InstanceReadResponse,
    type InstanceSearchResponse as InstanceSearchResponse,
    type InstanceStatsResponse as InstanceStatsResponse,
    InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceDeleteParams as InstanceDeleteParams,
    type InstanceChatCompletionsParams as InstanceChatCompletionsParams,
    type InstanceReadParams as InstanceReadParams,
    type InstanceSearchParams as InstanceSearchParams,
    type InstanceStatsParams as InstanceStatsParams,
  };

  export {
    Tokens as Tokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenUpdateResponse as TokenUpdateResponse,
    type TokenListResponse as TokenListResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenReadResponse as TokenReadResponse,
    TokenListResponsesV4PagePaginationArray as TokenListResponsesV4PagePaginationArray,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenReadParams as TokenReadParams,
  };
}
