// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RegionsAPI from './regions';
import {
  RegionGetParams,
  RegionGetResponse,
  RegionListParams,
  RegionListResponse,
  RegionListResponsesCursorPagination,
  Regions,
} from './regions';
import * as RegionalServicesAPI from './regional-services/regional-services';
import { RegionalServices } from './regional-services/regional-services';

export class DLS extends APIResource {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  regionalServices: RegionalServicesAPI.RegionalServices = new RegionalServicesAPI.RegionalServices(
    this._client,
  );
}

DLS.Regions = Regions;
DLS.RegionListResponsesCursorPagination = RegionListResponsesCursorPagination;
DLS.RegionalServices = RegionalServices;

export declare namespace DLS {
  export {
    Regions as Regions,
    type RegionListResponse as RegionListResponse,
    type RegionGetResponse as RegionGetResponse,
    RegionListResponsesCursorPagination as RegionListResponsesCursorPagination,
    type RegionListParams as RegionListParams,
    type RegionGetParams as RegionGetParams,
  };

  export { RegionalServices as RegionalServices };
}
