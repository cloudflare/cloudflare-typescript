// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTimeseriesGroups extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'timeseriesGroups'] = Object.freeze([
    'radar',
    'http',
    'timeseriesGroups',
  ] as const);
}
export class TimeseriesGroups extends BaseTimeseriesGroups {}
