// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LOADocumentsAPI from './loa-documents';
import { LOADocuments } from './loa-documents';
import * as ServicesAPI from './services';
import { Services } from './services';
import * as AddressMapsAPI from './address-maps/address-maps';
import { AddressMaps } from './address-maps/address-maps';
import * as PrefixesAPI from './prefixes/prefixes';
import { Prefixes } from './prefixes/prefixes';
import * as RegionalHostnamesAPI from './regional-hostnames/regional-hostnames';
import { RegionalHostnames } from './regional-hostnames/regional-hostnames';

export class Addressing extends APIResource {
  regionalHostnames: RegionalHostnamesAPI.RegionalHostnames = new RegionalHostnamesAPI.RegionalHostnames(
    this._client,
  );
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  addressMaps: AddressMapsAPI.AddressMaps = new AddressMapsAPI.AddressMaps(this._client);
  loaDocuments: LOADocumentsAPI.LOADocuments = new LOADocumentsAPI.LOADocuments(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

Addressing.RegionalHostnames = RegionalHostnames;
Addressing.Services = Services;
Addressing.AddressMaps = AddressMaps;
Addressing.LOADocuments = LOADocuments;
Addressing.Prefixes = Prefixes;

export declare namespace Addressing {
  export { RegionalHostnames as RegionalHostnames };

  export { Services as Services };

  export { AddressMaps as AddressMaps };

  export { LOADocuments as LOADocuments };

  export { Prefixes as Prefixes };
}
