// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OverridesAPI from './overrides';
import { BaseOverrides, Overrides } from './overrides';
import * as PackagesAPI from './packages/packages';
import { BasePackages, Packages } from './packages/packages';

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
  export { Overrides as Overrides, BaseOverrides as BaseOverrides };

  export { Packages as Packages, BasePackages as BasePackages };
}
