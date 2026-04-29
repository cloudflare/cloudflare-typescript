// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BasePercentiles extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'httpTests', 'percentiles'] = Object.freeze([
    'zeroTrust',
    'dex',
    'httpTests',
    'percentiles',
  ] as const);
}
export class Percentiles extends BasePercentiles {}
