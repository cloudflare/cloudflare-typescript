// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TokensAPI from './tokens';
import {
  BaseTokens,
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
  BaseInstances,
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
import * as NamespacesAPI from './namespaces/namespaces';
import {
  BaseNamespaces,
  NamespaceChatCompletionsParams,
  NamespaceChatCompletionsResponse,
  NamespaceCreateParams,
  NamespaceCreateResponse,
  NamespaceDeleteParams,
  NamespaceDeleteResponse,
  NamespaceListParams,
  NamespaceListResponse,
  NamespaceListResponsesV4PagePaginationArray,
  NamespaceReadParams,
  NamespaceReadResponse,
  NamespaceSearchParams,
  NamespaceSearchResponse,
  NamespaceUpdateParams,
  NamespaceUpdateResponse,
  Namespaces,
} from './namespaces/namespaces';

export class BaseAISearch extends APIResource {
  static override readonly _key: readonly ['aiSearch'] = Object.freeze(['aiSearch'] as const);
}
export class AISearch extends BaseAISearch {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

AISearch.Namespaces = Namespaces;
AISearch.BaseNamespaces = BaseNamespaces;
AISearch.Instances = Instances;
AISearch.BaseInstances = BaseInstances;
AISearch.Tokens = Tokens;
AISearch.BaseTokens = BaseTokens;

export declare namespace AISearch {
  export {
    Namespaces as Namespaces,
    BaseNamespaces as BaseNamespaces,
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceUpdateResponse as NamespaceUpdateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceChatCompletionsResponse as NamespaceChatCompletionsResponse,
    type NamespaceReadResponse as NamespaceReadResponse,
    type NamespaceSearchResponse as NamespaceSearchResponse,
    type NamespaceListResponsesV4PagePaginationArray as NamespaceListResponsesV4PagePaginationArray,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceChatCompletionsParams as NamespaceChatCompletionsParams,
    type NamespaceReadParams as NamespaceReadParams,
    type NamespaceSearchParams as NamespaceSearchParams,
  };

  export {
    Instances as Instances,
    BaseInstances as BaseInstances,
    type InstanceCreateResponse as InstanceCreateResponse,
    type InstanceUpdateResponse as InstanceUpdateResponse,
    type InstanceListResponse as InstanceListResponse,
    type InstanceDeleteResponse as InstanceDeleteResponse,
    type InstanceChatCompletionsResponse as InstanceChatCompletionsResponse,
    type InstanceReadResponse as InstanceReadResponse,
    type InstanceSearchResponse as InstanceSearchResponse,
    type InstanceStatsResponse as InstanceStatsResponse,
    type InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
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
    BaseTokens as BaseTokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenUpdateResponse as TokenUpdateResponse,
    type TokenListResponse as TokenListResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenReadResponse as TokenReadResponse,
    type TokenListResponsesV4PagePaginationArray as TokenListResponsesV4PagePaginationArray,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenReadParams as TokenReadParams,
  };
}
