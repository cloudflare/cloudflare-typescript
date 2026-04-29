// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RegionsAPI from './regions';
import { BaseRegions, Regions } from './regions';

export class BaseRegionalHostnames extends APIResource {
  static override readonly _key: readonly ['addressing', 'regionalHostnames'] = Object.freeze([
    'addressing',
    'regionalHostnames',
  ] as const);
}
export class RegionalHostnames extends BaseRegionalHostnames {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
}

RegionalHostnames.Regions = Regions;
RegionalHostnames.BaseRegions = BaseRegions;

export declare namespace RegionalHostnames {
  export { Regions as Regions, BaseRegions as BaseRegions };
}
