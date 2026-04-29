// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseUARules extends APIResource {
  static override readonly _key: readonly ['firewall', 'uaRules'] = Object.freeze([
    'firewall',
    'uaRules',
  ] as const);
}
export class UARules extends BaseUARules {}
