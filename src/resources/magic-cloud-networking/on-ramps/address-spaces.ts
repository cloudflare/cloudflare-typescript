// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAddressSpaces extends APIResource {
  static override readonly _key: readonly ['magicCloudNetworking', 'onRamps', 'addressSpaces'] =
    Object.freeze(['magicCloudNetworking', 'onRamps', 'addressSpaces'] as const);
}
export class AddressSpaces extends BaseAddressSpaces {}
