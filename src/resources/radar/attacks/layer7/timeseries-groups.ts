// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseTimeseriesGroups extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer7', 'timeseriesGroups'] = Object.freeze([
    'radar',
    'attacks',
    'layer7',
    'timeseriesGroups',
  ] as const);
}
export class TimeseriesGroups extends BaseTimeseriesGroups {}
