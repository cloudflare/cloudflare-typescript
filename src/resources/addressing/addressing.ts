// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LOADocumentsAPI from './loa-documents';
import {
  BaseLOADocuments,
  LOADocumentCreateParams,
  LOADocumentCreateResponse,
  LOADocumentGetParams,
  LOADocuments,
} from './loa-documents';
import * as ServicesAPI from './services';
import {
  BaseServices,
  ServiceListParams,
  ServiceListResponse,
  ServiceListResponsesSinglePage,
  Services,
} from './services';
import * as AddressMapsAPI from './address-maps/address-maps';
import {
  AddressMap,
  AddressMapCreateParams,
  AddressMapCreateResponse,
  AddressMapDeleteParams,
  AddressMapDeleteResponse,
  AddressMapEditParams,
  AddressMapGetParams,
  AddressMapGetResponse,
  AddressMapListParams,
  AddressMaps,
  AddressMapsSinglePage,
  BaseAddressMaps,
  Kind,
} from './address-maps/address-maps';
import * as PrefixesAPI from './prefixes/prefixes';
import {
  BasePrefixes,
  Prefix,
  PrefixCreateParams,
  PrefixDeleteParams,
  PrefixDeleteResponse,
  PrefixEditParams,
  PrefixGetParams,
  PrefixListParams,
  Prefixes,
  PrefixesSinglePage,
} from './prefixes/prefixes';
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

  export {
    Services as Services,
    BaseServices as BaseServices,
    type ServiceListResponse as ServiceListResponse,
    type ServiceListResponsesSinglePage as ServiceListResponsesSinglePage,
    type ServiceListParams as ServiceListParams,
  };

  export {
    AddressMaps as AddressMaps,
    BaseAddressMaps as BaseAddressMaps,
    type AddressMap as AddressMap,
    type Kind as Kind,
    type AddressMapCreateResponse as AddressMapCreateResponse,
    type AddressMapDeleteResponse as AddressMapDeleteResponse,
    type AddressMapGetResponse as AddressMapGetResponse,
    type AddressMapsSinglePage as AddressMapsSinglePage,
    type AddressMapCreateParams as AddressMapCreateParams,
    type AddressMapListParams as AddressMapListParams,
    type AddressMapDeleteParams as AddressMapDeleteParams,
    type AddressMapEditParams as AddressMapEditParams,
    type AddressMapGetParams as AddressMapGetParams,
  };

  export {
    LOADocuments as LOADocuments,
    BaseLOADocuments as BaseLOADocuments,
    type LOADocumentCreateResponse as LOADocumentCreateResponse,
    type LOADocumentCreateParams as LOADocumentCreateParams,
    type LOADocumentGetParams as LOADocumentGetParams,
  };

  export {
    Prefixes as Prefixes,
    BasePrefixes as BasePrefixes,
    type Prefix as Prefix,
    type PrefixDeleteResponse as PrefixDeleteResponse,
    type PrefixesSinglePage as PrefixesSinglePage,
    type PrefixCreateParams as PrefixCreateParams,
    type PrefixListParams as PrefixListParams,
    type PrefixDeleteParams as PrefixDeleteParams,
    type PrefixEditParams as PrefixEditParams,
    type PrefixGetParams as PrefixGetParams,
  };
}
