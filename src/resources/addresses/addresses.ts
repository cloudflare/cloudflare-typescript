// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AddressMapsAPI from 'cloudflare/resources/addresses/address-maps/address-maps';
import * as LoaDocumentsAPI from 'cloudflare/resources/addresses/loa-documents/loa-documents';
import * as PrefixesAPI from 'cloudflare/resources/addresses/prefixes/prefixes';

export class Addresses extends APIResource {
  addressMaps: AddressMapsAPI.AddressMaps = new AddressMapsAPI.AddressMaps(this._client);
  loaDocuments: LoaDocumentsAPI.LoaDocuments = new LoaDocumentsAPI.LoaDocuments(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

export namespace Addresses {
  export import AddressMaps = AddressMapsAPI.AddressMaps;
  export import AddressMapCreateResponse = AddressMapsAPI.AddressMapCreateResponse;
  export import AddressMapUpdateResponse = AddressMapsAPI.AddressMapUpdateResponse;
  export import AddressMapListResponse = AddressMapsAPI.AddressMapListResponse;
  export import AddressMapDeleteResponse = AddressMapsAPI.AddressMapDeleteResponse;
  export import AddressMapGetResponse = AddressMapsAPI.AddressMapGetResponse;
  export import AddressMapCreateParams = AddressMapsAPI.AddressMapCreateParams;
  export import AddressMapUpdateParams = AddressMapsAPI.AddressMapUpdateParams;
  export import LoaDocuments = LoaDocumentsAPI.LoaDocuments;
  export import LoaDocumentCreateResponse = LoaDocumentsAPI.LoaDocumentCreateResponse;
  export import LoaDocumentCreateParams = LoaDocumentsAPI.LoaDocumentCreateParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export import PrefixCreateResponse = PrefixesAPI.PrefixCreateResponse;
  export import PrefixUpdateResponse = PrefixesAPI.PrefixUpdateResponse;
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixDeleteResponse = PrefixesAPI.PrefixDeleteResponse;
  export import PrefixGetResponse = PrefixesAPI.PrefixGetResponse;
  export import PrefixCreateParams = PrefixesAPI.PrefixCreateParams;
  export import PrefixUpdateParams = PrefixesAPI.PrefixUpdateParams;
}
