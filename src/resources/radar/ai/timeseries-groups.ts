// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTimeseriesGroups extends APIResource {
  static override readonly _key: readonly ['radar', 'ai', 'timeseriesGroups'] = Object.freeze([
    'radar',
    'ai',
    'timeseriesGroups',
  ] as const);
}
export class TimeseriesGroups extends BaseTimeseriesGroups {}
