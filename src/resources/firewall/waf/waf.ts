// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OverridesAPI from './overrides';
import * as PackagesAPI from './packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

export namespace WAF {
  export import Overrides = OverridesAPI.Overrides;
  export type Override = OverridesAPI.Override;
  export type OverrideURL = OverridesAPI.OverrideURL;
  export type RewriteAction = OverridesAPI.RewriteAction;
  export type WAFRule = OverridesAPI.WAFRule;
  export type OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import OverridesV4PagePaginationArray = OverridesAPI.OverridesV4PagePaginationArray;
  export type OverrideCreateParams = OverridesAPI.OverrideCreateParams;
  export type OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export type OverrideListParams = OverridesAPI.OverrideListParams;
  export type OverrideDeleteParams = OverridesAPI.OverrideDeleteParams;
  export type OverrideGetParams = OverridesAPI.OverrideGetParams;
  export import Packages = PackagesAPI.Packages;
  export type PackageListResponse = PackagesAPI.PackageListResponse;
  export type PackageGetResponse = PackagesAPI.PackageGetResponse;
  export import PackageListResponsesV4PagePaginationArray = PackagesAPI.PackageListResponsesV4PagePaginationArray;
  export type PackageListParams = PackagesAPI.PackageListParams;
  export type PackageGetParams = PackagesAPI.PackageGetParams;
}
