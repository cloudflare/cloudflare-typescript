// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseBlockSenders extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'blockSenders'] = Object.freeze([
    'emailSecurity',
    'settings',
    'blockSenders',
  ] as const);
}
export class BlockSenders extends BaseBlockSenders {}
