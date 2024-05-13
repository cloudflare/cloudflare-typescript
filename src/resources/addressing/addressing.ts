// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ServicesAPI from './services';
import * as AddressMapsAPI from './address-maps/address-maps';
import * as LOADocumentsAPI from './loa-documents/loa-documents';
import * as PrefixesAPI from './prefixes/prefixes';

export class Addressing extends APIResource {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  addressMaps: AddressMapsAPI.AddressMaps = new AddressMapsAPI.AddressMaps(this._client);
  loaDocuments: LOADocumentsAPI.LOADocuments = new LOADocumentsAPI.LOADocuments(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

export namespace Addressing {
  export import Services = ServicesAPI.Services;
  export import ServiceListResponse = ServicesAPI.ServiceListResponse;
  export import ServiceListResponsesSinglePage = ServicesAPI.ServiceListResponsesSinglePage;
  export import ServiceListParams = ServicesAPI.ServiceListParams;
  export import AddressMaps = AddressMapsAPI.AddressMaps;
  export import AddressMap = AddressMapsAPI.AddressMap;
  export import Kind = AddressMapsAPI.Kind;
  export import AddressMapCreateResponse = AddressMapsAPI.AddressMapCreateResponse;
  export import AddressMapDeleteResponse = AddressMapsAPI.AddressMapDeleteResponse;
  export import AddressMapGetResponse = AddressMapsAPI.AddressMapGetResponse;
  export import AddressMapsSinglePage = AddressMapsAPI.AddressMapsSinglePage;
  export import AddressMapCreateParams = AddressMapsAPI.AddressMapCreateParams;
  export import AddressMapListParams = AddressMapsAPI.AddressMapListParams;
  export import AddressMapDeleteParams = AddressMapsAPI.AddressMapDeleteParams;
  export import AddressMapEditParams = AddressMapsAPI.AddressMapEditParams;
  export import AddressMapGetParams = AddressMapsAPI.AddressMapGetParams;
  export import LOADocuments = LOADocumentsAPI.LOADocuments;
  export import LOADocumentCreateResponse = LOADocumentsAPI.LOADocumentCreateResponse;
  export import LOADocumentCreateParams = LOADocumentsAPI.LOADocumentCreateParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export import Prefix = PrefixesAPI.Prefix;
  export import PrefixDeleteResponse = PrefixesAPI.PrefixDeleteResponse;
  export import PrefixesSinglePage = PrefixesAPI.PrefixesSinglePage;
  export import PrefixCreateParams = PrefixesAPI.PrefixCreateParams;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
  export import PrefixDeleteParams = PrefixesAPI.PrefixDeleteParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export import PrefixGetParams = PrefixesAPI.PrefixGetParams;
}
