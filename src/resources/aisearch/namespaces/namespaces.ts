// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InstancesAPI from './instances/instances';
import { BaseInstances, Instances } from './instances/instances';

export class BaseNamespaces extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'namespaces'] = Object.freeze([
    'aiSearch',
    'namespaces',
  ] as const);
}
export class Namespaces extends BaseNamespaces {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
}

Namespaces.Instances = Instances;
Namespaces.BaseInstances = BaseInstances;

export declare namespace Namespaces {
  export { Instances as Instances, BaseInstances as BaseInstances };
}
