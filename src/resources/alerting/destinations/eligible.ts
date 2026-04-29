// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseEligible extends APIResource {
  static override readonly _key: readonly ['alerting', 'destinations', 'eligible'] = Object.freeze([
    'alerting',
    'destinations',
    'eligible',
  ] as const);
}
export class Eligible extends BaseEligible {}
