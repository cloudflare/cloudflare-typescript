// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AddressMapsAPI from 'cloudflare/resources/addresses/address-maps/address-maps';
import * as LOADocumentsAPI from 'cloudflare/resources/addresses/loa-documents/loa-documents';
import * as PrefixesAPI from 'cloudflare/resources/addresses/prefixes/prefixes';

export class Addresses extends APIResource {
  addressMaps: AddressMapsAPI.AddressMaps = new AddressMapsAPI.AddressMaps(this._client);
  loaDocuments: LOADocumentsAPI.LOADocuments = new LOADocumentsAPI.LOADocuments(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

export namespace Addresses {
  export import AddressMaps = AddressMapsAPI.AddressMaps;
  export import AddressMapCreateResponse = AddressMapsAPI.AddressMapCreateResponse;
  export import AddressMapListResponse = AddressMapsAPI.AddressMapListResponse;
  export import AddressMapDeleteResponse = AddressMapsAPI.AddressMapDeleteResponse;
  export import AddressMapEditResponse = AddressMapsAPI.AddressMapEditResponse;
  export import AddressMapGetResponse = AddressMapsAPI.AddressMapGetResponse;
  export import AddressMapCreateParams = AddressMapsAPI.AddressMapCreateParams;
  export import AddressMapEditParams = AddressMapsAPI.AddressMapEditParams;
  export import LOADocuments = LOADocumentsAPI.LOADocuments;
  export import LOADocumentCreateResponse = LOADocumentsAPI.LOADocumentCreateResponse;
  export import LOADocumentCreateParams = LOADocumentsAPI.LOADocumentCreateParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export import PrefixCreateResponse = PrefixesAPI.PrefixCreateResponse;
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixDeleteResponse = PrefixesAPI.PrefixDeleteResponse;
  export import PrefixEditResponse = PrefixesAPI.PrefixEditResponse;
  export import PrefixGetResponse = PrefixesAPI.PrefixGetResponse;
  export import PrefixCreateParams = PrefixesAPI.PrefixCreateParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
}
