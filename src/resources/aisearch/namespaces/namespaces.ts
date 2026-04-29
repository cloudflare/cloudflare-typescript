// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as InstancesAPI from './instances/instances';
import { Instances } from './instances/instances';

export class Namespaces extends APIResource {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
}

Namespaces.Instances = Instances;

export declare namespace Namespaces {
  export { Instances as Instances };
}
