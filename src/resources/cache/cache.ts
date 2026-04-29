// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CacheReserveAPI from './cache-reserve';
import {
  CacheReserve,
  CacheReserveClear,
  CacheReserveClearParams,
  CacheReserveClearResponse,
  CacheReserveEditParams,
  CacheReserveEditResponse,
  CacheReserveGetParams,
  CacheReserveGetResponse,
  CacheReserveResource,
  CacheReserveStatusParams,
  CacheReserveStatusResponse,
} from './cache-reserve';
import * as OriginCloudRegionsAPI from './origin-cloud-regions';
import {
  OriginCloudRegionBulkDeleteParams,
  OriginCloudRegionBulkDeleteResponse,
  OriginCloudRegionBulkEditParams,
  OriginCloudRegionBulkEditResponse,
  OriginCloudRegionCreateParams,
  OriginCloudRegionCreateResponse,
  OriginCloudRegionDeleteParams,
  OriginCloudRegionDeleteResponse,
  OriginCloudRegionEditParams,
  OriginCloudRegionEditResponse,
  OriginCloudRegionGetParams,
  OriginCloudRegionGetResponse,
  OriginCloudRegionListParams,
  OriginCloudRegionListResponse,
  OriginCloudRegionSupportedRegionsParams,
  OriginCloudRegionSupportedRegionsResponse,
  OriginCloudRegions,
} from './origin-cloud-regions';
import * as RegionalTieredCacheAPI from './regional-tiered-cache';
import {
  RegionalTieredCache,
  RegionalTieredCacheEditParams,
  RegionalTieredCacheEditResponse,
  RegionalTieredCacheGetParams,
  RegionalTieredCacheGetResponse,
  RegionalTieredCacheResource,
} from './regional-tiered-cache';
import * as SmartTieredCacheAPI from './smart-tiered-cache';
import {
  SmartTieredCache,
  SmartTieredCacheDeleteParams,
  SmartTieredCacheDeleteResponse,
  SmartTieredCacheEditParams,
  SmartTieredCacheEditResponse,
  SmartTieredCacheGetParams,
  SmartTieredCacheGetResponse,
} from './smart-tiered-cache';
import * as VariantsAPI from './variants';
import {
  VariantDeleteParams,
  VariantDeleteResponse,
  VariantEditParams,
  VariantEditResponse,
  VariantGetParams,
  VariantGetResponse,
  Variants,
} from './variants';

export class Cache extends APIResource {
  cacheReserve: CacheReserveAPI.CacheReserveResource = new CacheReserveAPI.CacheReserveResource(this._client);
  smartTieredCache: SmartTieredCacheAPI.SmartTieredCache = new SmartTieredCacheAPI.SmartTieredCache(
    this._client,
  );
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  regionalTieredCache: RegionalTieredCacheAPI.RegionalTieredCacheResource =
    new RegionalTieredCacheAPI.RegionalTieredCacheResource(this._client);
  originCloudRegions: OriginCloudRegionsAPI.OriginCloudRegions = new OriginCloudRegionsAPI.OriginCloudRegions(
    this._client,
  );
}

Cache.CacheReserveResource = CacheReserveResource;
Cache.SmartTieredCache = SmartTieredCache;
Cache.Variants = Variants;
Cache.RegionalTieredCacheResource = RegionalTieredCacheResource;
Cache.OriginCloudRegions = OriginCloudRegions;

export declare namespace Cache {
  export {
    CacheReserveResource as CacheReserveResource,
    type CacheReserve as CacheReserve,
    type CacheReserveClear as CacheReserveClear,
    type CacheReserveClearResponse as CacheReserveClearResponse,
    type CacheReserveEditResponse as CacheReserveEditResponse,
    type CacheReserveGetResponse as CacheReserveGetResponse,
    type CacheReserveStatusResponse as CacheReserveStatusResponse,
    type CacheReserveClearParams as CacheReserveClearParams,
    type CacheReserveEditParams as CacheReserveEditParams,
    type CacheReserveGetParams as CacheReserveGetParams,
    type CacheReserveStatusParams as CacheReserveStatusParams,
  };

  export {
    SmartTieredCache as SmartTieredCache,
    type SmartTieredCacheDeleteResponse as SmartTieredCacheDeleteResponse,
    type SmartTieredCacheEditResponse as SmartTieredCacheEditResponse,
    type SmartTieredCacheGetResponse as SmartTieredCacheGetResponse,
    type SmartTieredCacheDeleteParams as SmartTieredCacheDeleteParams,
    type SmartTieredCacheEditParams as SmartTieredCacheEditParams,
    type SmartTieredCacheGetParams as SmartTieredCacheGetParams,
  };

  export {
    Variants as Variants,
    type VariantDeleteResponse as VariantDeleteResponse,
    type VariantEditResponse as VariantEditResponse,
    type VariantGetResponse as VariantGetResponse,
    type VariantDeleteParams as VariantDeleteParams,
    type VariantEditParams as VariantEditParams,
    type VariantGetParams as VariantGetParams,
  };

  export {
    RegionalTieredCacheResource as RegionalTieredCacheResource,
    type RegionalTieredCache as RegionalTieredCache,
    type RegionalTieredCacheEditResponse as RegionalTieredCacheEditResponse,
    type RegionalTieredCacheGetResponse as RegionalTieredCacheGetResponse,
    type RegionalTieredCacheEditParams as RegionalTieredCacheEditParams,
    type RegionalTieredCacheGetParams as RegionalTieredCacheGetParams,
  };

  export {
    OriginCloudRegions as OriginCloudRegions,
    type OriginCloudRegionCreateResponse as OriginCloudRegionCreateResponse,
    type OriginCloudRegionListResponse as OriginCloudRegionListResponse,
    type OriginCloudRegionDeleteResponse as OriginCloudRegionDeleteResponse,
    type OriginCloudRegionBulkDeleteResponse as OriginCloudRegionBulkDeleteResponse,
    type OriginCloudRegionBulkEditResponse as OriginCloudRegionBulkEditResponse,
    type OriginCloudRegionEditResponse as OriginCloudRegionEditResponse,
    type OriginCloudRegionGetResponse as OriginCloudRegionGetResponse,
    type OriginCloudRegionSupportedRegionsResponse as OriginCloudRegionSupportedRegionsResponse,
    type OriginCloudRegionCreateParams as OriginCloudRegionCreateParams,
    type OriginCloudRegionListParams as OriginCloudRegionListParams,
    type OriginCloudRegionDeleteParams as OriginCloudRegionDeleteParams,
    type OriginCloudRegionBulkDeleteParams as OriginCloudRegionBulkDeleteParams,
    type OriginCloudRegionBulkEditParams as OriginCloudRegionBulkEditParams,
    type OriginCloudRegionEditParams as OriginCloudRegionEditParams,
    type OriginCloudRegionGetParams as OriginCloudRegionGetParams,
    type OriginCloudRegionSupportedRegionsParams as OriginCloudRegionSupportedRegionsParams,
  };
}
