// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OverridesAPI from 'cloudflare/resources/firewalls/waf/overrides';
import * as PackagesAPI from 'cloudflare/resources/firewalls/waf/packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

export namespace WAF {
  export import Overrides = OverridesAPI.Overrides;
  export import OverrideUpdateResponse = OverridesAPI.OverrideUpdateResponse;
  export import OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import OverrideGetResponse = OverridesAPI.OverrideGetResponse;
  export import OverrideWAFOverridesCreateAWAFOverrideResponse = OverridesAPI.OverrideWAFOverridesCreateAWAFOverrideResponse;
  export import OverrideWAFOverridesListWAFOverridesResponse = OverridesAPI.OverrideWAFOverridesListWAFOverridesResponse;
  export import OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export import OverrideWAFOverridesCreateAWAFOverrideParams = OverridesAPI.OverrideWAFOverridesCreateAWAFOverrideParams;
  export import OverrideWAFOverridesListWAFOverridesParams = OverridesAPI.OverrideWAFOverridesListWAFOverridesParams;
  export import Packages = PackagesAPI.Packages;
  export import PackageListResponse = PackagesAPI.PackageListResponse;
  export import PackageGetResponse = PackagesAPI.PackageGetResponse;
  export import PackageListResponsesV4PagePaginationArray = PackagesAPI.PackageListResponsesV4PagePaginationArray;
  export import PackageListParams = PackagesAPI.PackageListParams;
}
