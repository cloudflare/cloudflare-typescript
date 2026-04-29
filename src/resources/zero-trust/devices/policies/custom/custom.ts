// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ExcludesAPI from './excludes';
import { BaseExcludes, Excludes } from './excludes';
import * as FallbackDomainsAPI from './fallback-domains';
import { BaseFallbackDomains, FallbackDomains } from './fallback-domains';
import * as IncludesAPI from './includes';
import { BaseIncludes, Includes } from './includes';

export class BaseCustom extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'custom'] = Object.freeze([
    'zeroTrust',
    'devices',
    'policies',
    'custom',
  ] as const);
}
export class Custom extends BaseCustom {
  excludes: ExcludesAPI.Excludes = new ExcludesAPI.Excludes(this._client);
  includes: IncludesAPI.Includes = new IncludesAPI.Includes(this._client);
  fallbackDomains: FallbackDomainsAPI.FallbackDomains = new FallbackDomainsAPI.FallbackDomains(this._client);
}

Custom.Excludes = Excludes;
Custom.BaseExcludes = BaseExcludes;
Custom.Includes = Includes;
Custom.BaseIncludes = BaseIncludes;
Custom.FallbackDomains = FallbackDomains;
Custom.BaseFallbackDomains = BaseFallbackDomains;

export declare namespace Custom {
  export { Excludes as Excludes, BaseExcludes as BaseExcludes };

  export { Includes as Includes, BaseIncludes as BaseIncludes };

  export { FallbackDomains as FallbackDomains, BaseFallbackDomains as BaseFallbackDomains };
}
