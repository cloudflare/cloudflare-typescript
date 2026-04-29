// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HostsAPI from './hosts';
import { BaseHosts, Hosts } from './hosts';
import * as OperationsAPI from './operations';
import { BaseOperations, Operations } from './operations';

/**
 * @deprecated Please use the [Schema Validation](https://developers.cloudflare.com/api/resources/schema_validation/) APIs instead
 */
export class BaseUserSchemas extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'userSchemas'] = Object.freeze([
    'apiGateway',
    'userSchemas',
  ] as const);
}
/**
 * @deprecated Please use the [Schema Validation](https://developers.cloudflare.com/api/resources/schema_validation/) APIs instead
 */
export class UserSchemas extends BaseUserSchemas {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  hosts: HostsAPI.Hosts = new HostsAPI.Hosts(this._client);
}

UserSchemas.Operations = Operations;
UserSchemas.BaseOperations = BaseOperations;
UserSchemas.Hosts = Hosts;
UserSchemas.BaseHosts = BaseHosts;

export declare namespace UserSchemas {
  export { Operations as Operations, BaseOperations as BaseOperations };

  export { Hosts as Hosts, BaseHosts as BaseHosts };
}
