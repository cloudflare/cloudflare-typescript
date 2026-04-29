// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIQI extends APIResource {
  static override readonly _key: readonly ['radar', 'quality', 'iqi'] = Object.freeze([
    'radar',
    'quality',
    'iqi',
  ] as const);
}
export class IQI extends BaseIQI {}
