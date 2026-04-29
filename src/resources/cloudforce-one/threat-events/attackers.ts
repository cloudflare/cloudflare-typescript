// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAttackers extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'attackers'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'attackers',
  ] as const);
}
export class Attackers extends BaseAttackers {}
