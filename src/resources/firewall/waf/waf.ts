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
import { PackageGetParams, PackageGetResponse, PackageListParams, Packages } from './packages/packages';

export class WAF extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

WAF.Overrides = Overrides;
WAF.OverridesV4PagePaginationArray = OverridesV4PagePaginationArray;
WAF.Packages = Packages;

export declare namespace WAF {
  export {
    Overrides as Overrides,
    type Override as Override,
    type OverrideURL as OverrideURL,
    type RewriteAction as RewriteAction,
    type WAFRule as WAFRule,
    type OverrideDeleteResponse as OverrideDeleteResponse,
    OverridesV4PagePaginationArray as OverridesV4PagePaginationArray,
    type OverrideCreateParams as OverrideCreateParams,
    type OverrideUpdateParams as OverrideUpdateParams,
    type OverrideListParams as OverrideListParams,
    type OverrideDeleteParams as OverrideDeleteParams,
    type OverrideGetParams as OverrideGetParams,
  };

  export {
    Packages as Packages,
    type PackageGetResponse as PackageGetResponse,
    type PackageListParams as PackageListParams,
    type PackageGetParams as PackageGetParams,
  };
}
