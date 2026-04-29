// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePagerduty extends APIResource {
  static override readonly _key: readonly ['alerting', 'destinations', 'pagerduty'] = Object.freeze([
    'alerting',
    'destinations',
    'pagerduty',
  ] as const);
}
export class Pagerduty extends BasePagerduty {}
