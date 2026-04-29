// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCountries extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'countries'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'countries',
  ] as const);
}
export class Countries extends BaseCountries {}
