// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRelate extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'relate'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'relate',
  ] as const);
}
export class Relate extends BaseRelate {}
