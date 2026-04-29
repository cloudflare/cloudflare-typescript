// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as VersionsAPI from './versions';
import { Versions } from './versions';
import * as InstancesAPI from './instances/instances';
import { Instances } from './instances/instances';

export class Workflows extends APIResource {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Workflows.Instances = Instances;
Workflows.Versions = Versions;

export declare namespace Workflows {
  export { Instances as Instances };

  export { Versions as Versions };
}
