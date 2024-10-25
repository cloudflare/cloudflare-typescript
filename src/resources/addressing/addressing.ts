// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ServicesAPI from './services';
import * as AddressMapsAPI from './address-maps/address-maps';
import * as LOADocumentsAPI from './loa-documents/loa-documents';
import * as PrefixesAPI from './prefixes/prefixes';
import * as RegionalHostnamesAPI from './regional-hostnames/regional-hostnames';

export class Addressing extends APIResource {
  regionalHostnames: RegionalHostnamesAPI.RegionalHostnames = new RegionalHostnamesAPI.RegionalHostnames(
    this._client,
  );
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  addressMaps: AddressMapsAPI.AddressMaps = new AddressMapsAPI.AddressMaps(this._client);
  loaDocuments: LOADocumentsAPI.LOADocuments = new LOADocumentsAPI.LOADocuments(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

export namespace Addressing {
  export import RegionalHostnames = RegionalHostnamesAPI.RegionalHostnames;
  export type RegionalHostnameCreateResponse = RegionalHostnamesAPI.RegionalHostnameCreateResponse;
  export type RegionalHostnameListResponse = RegionalHostnamesAPI.RegionalHostnameListResponse;
  export type RegionalHostnameDeleteResponse = RegionalHostnamesAPI.RegionalHostnameDeleteResponse;
  export type RegionalHostnameEditResponse = RegionalHostnamesAPI.RegionalHostnameEditResponse;
  export type RegionalHostnameGetResponse = RegionalHostnamesAPI.RegionalHostnameGetResponse;
  export import RegionalHostnameListResponsesSinglePage = RegionalHostnamesAPI.RegionalHostnameListResponsesSinglePage;
  export type RegionalHostnameCreateParams = RegionalHostnamesAPI.RegionalHostnameCreateParams;
  export type RegionalHostnameListParams = RegionalHostnamesAPI.RegionalHostnameListParams;
  export type RegionalHostnameDeleteParams = RegionalHostnamesAPI.RegionalHostnameDeleteParams;
  export type RegionalHostnameEditParams = RegionalHostnamesAPI.RegionalHostnameEditParams;
  export type RegionalHostnameGetParams = RegionalHostnamesAPI.RegionalHostnameGetParams;
  export import Services = ServicesAPI.Services;
  export type ServiceListResponse = ServicesAPI.ServiceListResponse;
  export import ServiceListResponsesSinglePage = ServicesAPI.ServiceListResponsesSinglePage;
  export type ServiceListParams = ServicesAPI.ServiceListParams;
  export import AddressMaps = AddressMapsAPI.AddressMaps;
  export type AddressMap = AddressMapsAPI.AddressMap;
  export type Kind = AddressMapsAPI.Kind;
  export type AddressMapCreateResponse = AddressMapsAPI.AddressMapCreateResponse;
  export type AddressMapDeleteResponse = AddressMapsAPI.AddressMapDeleteResponse;
  export type AddressMapGetResponse = AddressMapsAPI.AddressMapGetResponse;
  export import AddressMapsSinglePage = AddressMapsAPI.AddressMapsSinglePage;
  export type AddressMapCreateParams = AddressMapsAPI.AddressMapCreateParams;
  export type AddressMapListParams = AddressMapsAPI.AddressMapListParams;
  export type AddressMapDeleteParams = AddressMapsAPI.AddressMapDeleteParams;
  export type AddressMapEditParams = AddressMapsAPI.AddressMapEditParams;
  export type AddressMapGetParams = AddressMapsAPI.AddressMapGetParams;
  export import LOADocuments = LOADocumentsAPI.LOADocuments;
  export type LOADocumentCreateResponse = LOADocumentsAPI.LOADocumentCreateResponse;
  export type LOADocumentCreateParams = LOADocumentsAPI.LOADocumentCreateParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export type Prefix = PrefixesAPI.Prefix;
  export type PrefixDeleteResponse = PrefixesAPI.PrefixDeleteResponse;
  export import PrefixesSinglePage = PrefixesAPI.PrefixesSinglePage;
  export type PrefixCreateParams = PrefixesAPI.PrefixCreateParams;
  export type PrefixListParams = PrefixesAPI.PrefixListParams;
  export type PrefixDeleteParams = PrefixesAPI.PrefixDeleteParams;
  export type PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export type PrefixGetParams = PrefixesAPI.PrefixGetParams;
}
