// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VersionsAPI from './versions';
import { BaseVersions, Versions } from './versions';
import * as InstancesAPI from './instances/instances';
import { BaseInstances, Instances } from './instances/instances';

export class BaseWorkflows extends APIResource {
  static override readonly _key: readonly ['workflows'] = Object.freeze(['workflows'] as const);
}
export class Workflows extends BaseWorkflows {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Workflows.Instances = Instances;
Workflows.BaseInstances = BaseInstances;
Workflows.Versions = Versions;
Workflows.BaseVersions = BaseVersions;

export declare namespace Workflows {
  export { Instances as Instances, BaseInstances as BaseInstances };

  export { Versions as Versions, BaseVersions as BaseVersions };
}
