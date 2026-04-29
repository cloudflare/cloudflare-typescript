// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TokensAPI from './tokens';
import { Tokens } from './tokens';
import * as InstancesAPI from './instances/instances';
import { Instances } from './instances/instances';
import * as NamespacesAPI from './namespaces/namespaces';
import { Namespaces } from './namespaces/namespaces';

export class AISearch extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

AISearch.Namespaces = Namespaces;
AISearch.Instances = Instances;
AISearch.Tokens = Tokens;

export declare namespace AISearch {
  export { Namespaces as Namespaces };

  export { Instances as Instances };

  export { Tokens as Tokens };
}
