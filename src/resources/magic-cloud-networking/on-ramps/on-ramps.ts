// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AddressSpacesAPI from './address-spaces';
import { AddressSpaces } from './address-spaces';

export class OnRamps extends APIResource {
  addressSpaces: AddressSpacesAPI.AddressSpaces = new AddressSpacesAPI.AddressSpaces(this._client);
}

OnRamps.AddressSpaces = AddressSpaces;

export declare namespace OnRamps {
  export { AddressSpaces as AddressSpaces };
}
