// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RegionsAPI from './regions';
import {
  BaseRegions,
  RegionGetParams,
  RegionGetResponse,
  RegionListParams,
  RegionListResponse,
  RegionListResponsesCursorPagination,
  Regions,
} from './regions';
import * as RegionalServicesAPI from './regional-services/regional-services';
import { BaseRegionalServices, RegionalServices } from './regional-services/regional-services';

export class BaseDLS extends APIResource {
  static override readonly _key: readonly ['dls'] = Object.freeze(['dls'] as const);
}
export class DLS extends BaseDLS {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  regionalServices: RegionalServicesAPI.RegionalServices = new RegionalServicesAPI.RegionalServices(
    this._client,
  );
}

DLS.Regions = Regions;
DLS.BaseRegions = BaseRegions;
DLS.RegionalServices = RegionalServices;
DLS.BaseRegionalServices = BaseRegionalServices;

export declare namespace DLS {
  export {
    Regions as Regions,
    BaseRegions as BaseRegions,
    type RegionListResponse as RegionListResponse,
    type RegionGetResponse as RegionGetResponse,
    type RegionListResponsesCursorPagination as RegionListResponsesCursorPagination,
    type RegionListParams as RegionListParams,
    type RegionGetParams as RegionGetParams,
  };

  export { RegionalServices as RegionalServices, BaseRegionalServices as BaseRegionalServices };
}
