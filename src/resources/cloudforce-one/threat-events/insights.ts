// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseInsights extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'insights'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'insights',
  ] as const);
}
export class Insights extends BaseInsights {}
