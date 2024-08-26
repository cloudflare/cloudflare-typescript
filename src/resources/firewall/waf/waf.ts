// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Overrides } from './overrides';
import { Packages } from './packages/packages';
import * as OverridesAPI from './overrides';
import * as PackagesAPI from './packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

export namespace WAF {
  export import Overrides = OverridesAPI.Overrides;
  export import Override = OverridesAPI.Override;
  export import OverrideURL = OverridesAPI.OverrideURL;
  export import RewriteAction = OverridesAPI.RewriteAction;
  export import WAFRule = OverridesAPI.WAFRule;
  export import OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import OverridesV4PagePaginationArray = OverridesAPI.OverridesV4PagePaginationArray;
  export import OverrideCreateParams = OverridesAPI.OverrideCreateParams;
  export import OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export import OverrideListParams = OverridesAPI.OverrideListParams;
  export import Packages = PackagesAPI.Packages;
  export import PackageListResponse = PackagesAPI.PackageListResponse;
  export import PackageGetResponse = PackagesAPI.PackageGetResponse;
  export import PackageListResponsesV4PagePaginationArray = PackagesAPI.PackageListResponsesV4PagePaginationArray;
  export import PackageListParams = PackagesAPI.PackageListParams;
}
