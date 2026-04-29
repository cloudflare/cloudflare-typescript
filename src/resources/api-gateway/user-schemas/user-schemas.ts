// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HostsAPI from './hosts';
import { Hosts } from './hosts';
import * as OperationsAPI from './operations';
import { Operations } from './operations';

/**
 * @deprecated Please use the [Schema Validation](https://developers.cloudflare.com/api/resources/schema_validation/) APIs instead
 */
export class UserSchemas extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  hosts: HostsAPI.Hosts = new HostsAPI.Hosts(this._client);
}

UserSchemas.Operations = Operations;
UserSchemas.Hosts = Hosts;

export declare namespace UserSchemas {
  export { Operations as Operations };

  export { Hosts as Hosts };
}
