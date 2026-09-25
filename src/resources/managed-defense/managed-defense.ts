// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VulnerabilityDiscoveryAPI from './vulnerability-discovery/vulnerability-discovery';
import {
  BaseVulnerabilityDiscovery,
  VulnerabilityDiscovery,
} from './vulnerability-discovery/vulnerability-discovery';

export class BaseManagedDefense extends APIResource {
  static override readonly _key: readonly ['managedDefense'] = Object.freeze(['managedDefense'] as const);
}
export class ManagedDefense extends BaseManagedDefense {
  vulnerabilityDiscovery: VulnerabilityDiscoveryAPI.VulnerabilityDiscovery =
    new VulnerabilityDiscoveryAPI.VulnerabilityDiscovery(this._client);
}

ManagedDefense.VulnerabilityDiscovery = VulnerabilityDiscovery;
ManagedDefense.BaseVulnerabilityDiscovery = BaseVulnerabilityDiscovery;

export declare namespace ManagedDefense {
  export {
    VulnerabilityDiscovery as VulnerabilityDiscovery,
    BaseVulnerabilityDiscovery as BaseVulnerabilityDiscovery,
  };
}
