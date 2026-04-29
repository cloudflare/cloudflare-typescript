// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseLockdowns extends APIResource {
  static override readonly _key: readonly ['firewall', 'lockdowns'] = Object.freeze([
    'firewall',
    'lockdowns',
  ] as const);
}
export class Lockdowns extends BaseLockdowns {}
