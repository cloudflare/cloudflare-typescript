// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LOADocumentsAPI from './loa-documents';
import { BaseLOADocuments, LOADocuments } from './loa-documents';
import * as ServicesAPI from './services';
import { BaseServices, Services } from './services';
import * as AddressMapsAPI from './address-maps/address-maps';
import { AddressMaps, BaseAddressMaps } from './address-maps/address-maps';
import * as PrefixesAPI from './prefixes/prefixes';
import { BasePrefixes, Prefixes } from './prefixes/prefixes';
import * as RegionalHostnamesAPI from './regional-hostnames/regional-hostnames';
import { BaseRegionalHostnames, RegionalHostnames } from './regional-hostnames/regional-hostnames';

export class BaseAddressing extends APIResource {
  static override readonly _key: readonly ['addressing'] = Object.freeze(['addressing'] as const);
}
export class Addressing extends BaseAddressing {
  regionalHostnames: RegionalHostnamesAPI.RegionalHostnames = new RegionalHostnamesAPI.RegionalHostnames(
    this._client,
  );
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  addressMaps: AddressMapsAPI.AddressMaps = new AddressMapsAPI.AddressMaps(this._client);
  loaDocuments: LOADocumentsAPI.LOADocuments = new LOADocumentsAPI.LOADocuments(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

Addressing.RegionalHostnames = RegionalHostnames;
Addressing.BaseRegionalHostnames = BaseRegionalHostnames;
Addressing.Services = Services;
Addressing.BaseServices = BaseServices;
Addressing.AddressMaps = AddressMaps;
Addressing.BaseAddressMaps = BaseAddressMaps;
Addressing.LOADocuments = LOADocuments;
Addressing.BaseLOADocuments = BaseLOADocuments;
Addressing.Prefixes = Prefixes;
Addressing.BasePrefixes = BasePrefixes;

export declare namespace Addressing {
  export { RegionalHostnames as RegionalHostnames, BaseRegionalHostnames as BaseRegionalHostnames };

  export { Services as Services, BaseServices as BaseServices };

  export { AddressMaps as AddressMaps, BaseAddressMaps as BaseAddressMaps };

  export { LOADocuments as LOADocuments, BaseLOADocuments as BaseLOADocuments };

  export { Prefixes as Prefixes, BasePrefixes as BasePrefixes };
}
