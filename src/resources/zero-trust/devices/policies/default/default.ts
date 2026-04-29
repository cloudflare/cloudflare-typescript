// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as CertificatesAPI from './certificates';
import { BaseCertificates, Certificates } from './certificates';
import * as ExcludesAPI from './excludes';
import { BaseExcludes, Excludes } from './excludes';
import * as FallbackDomainsAPI from './fallback-domains';
import { BaseFallbackDomains, FallbackDomains } from './fallback-domains';
import * as IncludesAPI from './includes';
import { BaseIncludes, Includes } from './includes';

export class BaseDefault extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'default'] = Object.freeze([
    'zeroTrust',
    'devices',
    'policies',
    'default',
  ] as const);
}
export class Default extends BaseDefault {
  excludes: ExcludesAPI.Excludes = new ExcludesAPI.Excludes(this._client);
  includes: IncludesAPI.Includes = new IncludesAPI.Includes(this._client);
  fallbackDomains: FallbackDomainsAPI.FallbackDomains = new FallbackDomainsAPI.FallbackDomains(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
}

Default.Excludes = Excludes;
Default.BaseExcludes = BaseExcludes;
Default.Includes = Includes;
Default.BaseIncludes = BaseIncludes;
Default.FallbackDomains = FallbackDomains;
Default.BaseFallbackDomains = BaseFallbackDomains;
Default.Certificates = Certificates;
Default.BaseCertificates = BaseCertificates;

export declare namespace Default {
  export { Excludes as Excludes, BaseExcludes as BaseExcludes };

  export { Includes as Includes, BaseIncludes as BaseIncludes };

  export { FallbackDomains as FallbackDomains, BaseFallbackDomains as BaseFallbackDomains };

  export { Certificates as Certificates, BaseCertificates as BaseCertificates };
}
