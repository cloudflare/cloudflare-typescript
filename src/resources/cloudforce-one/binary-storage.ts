// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseBinaryStorage extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'binaryStorage'] = Object.freeze([
    'cloudforceOne',
    'binaryStorage',
  ] as const);
}
export class BinaryStorage extends BaseBinaryStorage {}
