// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as CacheReservesAPI from 'cloudflare/resources/caches/cache-reserves';
import * as TieredCacheSmartTopologyEnablesAPI from 'cloudflare/resources/caches/tiered-cache-smart-topology-enables';
import * as VariantsAPI from 'cloudflare/resources/caches/variants';

export class Caches extends APIResource {
  cacheReserves: CacheReservesAPI.CacheReserves = new CacheReservesAPI.CacheReserves(this._client);
  tieredCacheSmartTopologyEnables: TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnables =
    new TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnables(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
}

export namespace Caches {
  export import CacheReserves = CacheReservesAPI.CacheReserves;
  export import CacheReserveListResponse = CacheReservesAPI.CacheReserveListResponse;
  export import CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse = CacheReservesAPI.CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse;
  export import CacheReserveZoneCacheSettingsChangeCacheReserveSettingParams = CacheReservesAPI.CacheReserveZoneCacheSettingsChangeCacheReserveSettingParams;
  export import TieredCacheSmartTopologyEnables = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnables;
  export import TieredCacheSmartTopologyEnableDeleteResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableDeleteResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams;
  export import Variants = VariantsAPI.Variants;
  export import VariantListResponse = VariantsAPI.VariantListResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantZoneCacheSettingsChangeVariantsSettingResponse = VariantsAPI.VariantZoneCacheSettingsChangeVariantsSettingResponse;
  export import VariantZoneCacheSettingsChangeVariantsSettingParams = VariantsAPI.VariantZoneCacheSettingsChangeVariantsSettingParams;
}
