// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddressSpacesAPI from './address-spaces';
import { AddressSpaces, BaseAddressSpaces } from './address-spaces';

export class BaseOnRamps extends APIResource {
  static override readonly _key: readonly ['magicCloudNetworking', 'onRamps'] = Object.freeze([
    'magicCloudNetworking',
    'onRamps',
  ] as const);
}
export class OnRamps extends BaseOnRamps {
  addressSpaces: AddressSpacesAPI.AddressSpaces = new AddressSpacesAPI.AddressSpaces(this._client);
}

OnRamps.AddressSpaces = AddressSpaces;
OnRamps.BaseAddressSpaces = BaseAddressSpaces;

export declare namespace OnRamps {
  export { AddressSpaces as AddressSpaces, BaseAddressSpaces as BaseAddressSpaces };
}
