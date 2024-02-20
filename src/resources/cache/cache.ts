// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as CacheReservesAPI from 'cloudflare/resources/cache/cache-reserves';
import * as RegionalTieredCacheAPI from 'cloudflare/resources/cache/regional-tiered-cache';
import * as TieredCacheSmartTopologyAPI from 'cloudflare/resources/cache/tiered-cache-smart-topology';
import * as VariantsAPI from 'cloudflare/resources/cache/variants';

export class Cache extends APIResource {
  cacheReserves: CacheReservesAPI.CacheReserves = new CacheReservesAPI.CacheReserves(this._client);
  tieredCacheSmartTopology: TieredCacheSmartTopologyAPI.TieredCacheSmartTopology =
    new TieredCacheSmartTopologyAPI.TieredCacheSmartTopology(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  regionalTieredCache: RegionalTieredCacheAPI.RegionalTieredCache =
    new RegionalTieredCacheAPI.RegionalTieredCache(this._client);
}

export namespace Cache {
  export import CacheReserves = CacheReservesAPI.CacheReserves;
  export import CacheReserveUpdateResponse = CacheReservesAPI.CacheReserveUpdateResponse;
  export import CacheReserveListResponse = CacheReservesAPI.CacheReserveListResponse;
  export import CacheReserveUpdateParams = CacheReservesAPI.CacheReserveUpdateParams;
  export import TieredCacheSmartTopology = TieredCacheSmartTopologyAPI.TieredCacheSmartTopology;
  export import TieredCacheSmartTopologyUpdateResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyUpdateResponse;
  export import TieredCacheSmartTopologyDeleteResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyDeleteResponse;
  export import TieredCacheSmartTopologyGetResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyGetResponse;
  export import TieredCacheSmartTopologyUpdateParams = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyUpdateParams;
  export import Variants = VariantsAPI.Variants;
  export import VariantUpdateResponse = VariantsAPI.VariantUpdateResponse;
  export import VariantListResponse = VariantsAPI.VariantListResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantUpdateParams = VariantsAPI.VariantUpdateParams;
  export import RegionalTieredCache = RegionalTieredCacheAPI.RegionalTieredCache;
  export import RegionalTieredCacheUpdateResponse = RegionalTieredCacheAPI.RegionalTieredCacheUpdateResponse;
  export import RegionalTieredCacheGetResponse = RegionalTieredCacheAPI.RegionalTieredCacheGetResponse;
  export import RegionalTieredCacheUpdateParams = RegionalTieredCacheAPI.RegionalTieredCacheUpdateParams;
}
