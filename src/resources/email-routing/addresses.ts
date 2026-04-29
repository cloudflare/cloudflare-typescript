// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAddresses extends APIResource {
  static override readonly _key: readonly ['emailRouting', 'addresses'] = Object.freeze([
    'emailRouting',
    'addresses',
  ] as const);
}
export class Addresses extends BaseAddresses {}
