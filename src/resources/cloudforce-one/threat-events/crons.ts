// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCrons extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'crons'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'crons',
  ] as const);
}
export class Crons extends BaseCrons {}
