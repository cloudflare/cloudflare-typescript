// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OverridesAPI from './overrides';
import {
  Override,
  OverrideCreateParams,
  OverrideDeleteParams,
  OverrideDeleteResponse,
  OverrideGetParams,
  OverrideListParams,
  OverrideURL,
  OverrideUpdateParams,
  Overrides,
  OverridesV4PagePaginationArray,
  RewriteAction,
  WAFRule,
} from './overrides';
import * as PackagesAPI from './packages/packages';
import {
  PackageGetParams,
  PackageGetResponse,
  PackageListParams,
  PackageListResponse,
  PackageListResponsesV4PagePaginationArray,
  Packages,
} from './packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

WAF.Overrides = Overrides;
WAF.Packages = Packages;

export declare namespace WAF {
  export {
    Overrides as Overrides,
    type Override as Override,
    type OverrideURL as OverrideURL,
    type RewriteAction as RewriteAction,
    type WAFRule as WAFRule,
    type OverrideDeleteResponse as OverrideDeleteResponse,
    type OverridesV4PagePaginationArray as OverridesV4PagePaginationArray,
    type OverrideCreateParams as OverrideCreateParams,
    type OverrideUpdateParams as OverrideUpdateParams,
    type OverrideListParams as OverrideListParams,
    type OverrideDeleteParams as OverrideDeleteParams,
    type OverrideGetParams as OverrideGetParams,
  };

  export {
    Packages as Packages,
    type PackageListResponse as PackageListResponse,
    type PackageGetResponse as PackageGetResponse,
    type PackageListResponsesV4PagePaginationArray as PackageListResponsesV4PagePaginationArray,
    type PackageListParams as PackageListParams,
    type PackageGetParams as PackageGetParams,
  };
}
