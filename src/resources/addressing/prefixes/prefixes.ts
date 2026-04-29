// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AdvertisementStatusAPI from './advertisement-status';
import { AdvertisementStatus } from './advertisement-status';
import * as BGPPrefixesAPI from './bgp-prefixes';
import { BGPPrefixes } from './bgp-prefixes';
import * as DelegationsAPI from './delegations';
import { Delegations } from './delegations';
import * as ServiceBindingsAPI from './service-bindings';
import { ServiceBindings } from './service-bindings';

export class Prefixes extends APIResource {
  serviceBindings: ServiceBindingsAPI.ServiceBindings = new ServiceBindingsAPI.ServiceBindings(this._client);
  bgpPrefixes: BGPPrefixesAPI.BGPPrefixes = new BGPPrefixesAPI.BGPPrefixes(this._client);
  advertisementStatus: AdvertisementStatusAPI.AdvertisementStatus =
    new AdvertisementStatusAPI.AdvertisementStatus(this._client);
  delegations: DelegationsAPI.Delegations = new DelegationsAPI.Delegations(this._client);
}

Prefixes.ServiceBindings = ServiceBindings;
Prefixes.BGPPrefixes = BGPPrefixes;
Prefixes.AdvertisementStatus = AdvertisementStatus;
Prefixes.Delegations = Delegations;

export declare namespace Prefixes {
  export { ServiceBindings as ServiceBindings };

  export { BGPPrefixes as BGPPrefixes };

  export { AdvertisementStatus as AdvertisementStatus };

  export { Delegations as Delegations };
}
