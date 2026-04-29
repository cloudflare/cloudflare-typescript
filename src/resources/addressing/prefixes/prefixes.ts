// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdvertisementStatusAPI from './advertisement-status';
import { AdvertisementStatus, BaseAdvertisementStatus } from './advertisement-status';
import * as BGPPrefixesAPI from './bgp-prefixes';
import { BGPPrefixes, BaseBGPPrefixes } from './bgp-prefixes';
import * as DelegationsAPI from './delegations';
import { BaseDelegations, Delegations } from './delegations';
import * as ServiceBindingsAPI from './service-bindings';
import { BaseServiceBindings, ServiceBindings } from './service-bindings';

export class BasePrefixes extends APIResource {
  static override readonly _key: readonly ['addressing', 'prefixes'] = Object.freeze([
    'addressing',
    'prefixes',
  ] as const);
}
export class Prefixes extends BasePrefixes {
  serviceBindings: ServiceBindingsAPI.ServiceBindings = new ServiceBindingsAPI.ServiceBindings(this._client);
  bgpPrefixes: BGPPrefixesAPI.BGPPrefixes = new BGPPrefixesAPI.BGPPrefixes(this._client);
  advertisementStatus: AdvertisementStatusAPI.AdvertisementStatus =
    new AdvertisementStatusAPI.AdvertisementStatus(this._client);
  delegations: DelegationsAPI.Delegations = new DelegationsAPI.Delegations(this._client);
}

Prefixes.ServiceBindings = ServiceBindings;
Prefixes.BaseServiceBindings = BaseServiceBindings;
Prefixes.BGPPrefixes = BGPPrefixes;
Prefixes.BaseBGPPrefixes = BaseBGPPrefixes;
Prefixes.AdvertisementStatus = AdvertisementStatus;
Prefixes.BaseAdvertisementStatus = BaseAdvertisementStatus;
Prefixes.Delegations = Delegations;
Prefixes.BaseDelegations = BaseDelegations;

export declare namespace Prefixes {
  export { ServiceBindings as ServiceBindings, BaseServiceBindings as BaseServiceBindings };

  export { BGPPrefixes as BGPPrefixes, BaseBGPPrefixes as BaseBGPPrefixes };

  export { AdvertisementStatus as AdvertisementStatus, BaseAdvertisementStatus as BaseAdvertisementStatus };

  export { Delegations as Delegations, BaseDelegations as BaseDelegations };
}
