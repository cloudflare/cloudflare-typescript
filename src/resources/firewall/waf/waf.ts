// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OverridesAPI from './overrides';
import {
  BaseOverrides,
  OverrideCreateParams,
  OverrideDeleteParams,
  OverrideGetParams,
  OverrideListParams,
  OverrideURL,
  OverrideUpdateParams,
  Overrides,
  RewriteAction,
  WAFRule,
} from './overrides';
import * as PackagesAPI from './packages/packages';
import {
  BasePackages,
  PackageGetParams,
  PackageGetResponse,
  PackageListParams,
  PackageListResponse,
  PackageListResponsesV4PagePaginationArray,
  Packages,
} from './packages/packages';

/**
 * @deprecated WAF managed rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#waf-managed-rules-apis-previous-version for full details.
 */
export class BaseWAF extends APIResource {
  static override readonly _key: readonly ['firewall', 'waf'] = Object.freeze(['firewall', 'waf'] as const);
}
/**
 * @deprecated WAF managed rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#waf-managed-rules-apis-previous-version for full details.
 */
export class WAF extends BaseWAF {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

WAF.Overrides = Overrides;
WAF.BaseOverrides = BaseOverrides;
WAF.Packages = Packages;
WAF.BasePackages = BasePackages;

export declare namespace WAF {
  export {
    Overrides as Overrides,
    BaseOverrides as BaseOverrides,
    type OverrideURL as OverrideURL,
    type RewriteAction as RewriteAction,
    type WAFRule as WAFRule,
    type OverrideCreateParams as OverrideCreateParams,
    type OverrideUpdateParams as OverrideUpdateParams,
    type OverrideListParams as OverrideListParams,
    type OverrideDeleteParams as OverrideDeleteParams,
    type OverrideGetParams as OverrideGetParams,
  };

  export {
    Packages as Packages,
    BasePackages as BasePackages,
    type PackageListResponse as PackageListResponse,
    type PackageGetResponse as PackageGetResponse,
    type PackageListResponsesV4PagePaginationArray as PackageListResponsesV4PagePaginationArray,
    type PackageListParams as PackageListParams,
    type PackageGetParams as PackageGetParams,
  };
}
