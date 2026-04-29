// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TokensAPI from './tokens';
import { BaseTokens, Tokens } from './tokens';
import * as InstancesAPI from './instances/instances';
import { BaseInstances, Instances } from './instances/instances';
import * as NamespacesAPI from './namespaces/namespaces';
import { BaseNamespaces, Namespaces } from './namespaces/namespaces';

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
  export { Namespaces as Namespaces, BaseNamespaces as BaseNamespaces };

  export { Instances as Instances, BaseInstances as BaseInstances };

  export { Tokens as Tokens, BaseTokens as BaseTokens };
}
