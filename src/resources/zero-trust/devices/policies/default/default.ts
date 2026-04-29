// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as CertificatesAPI from './certificates';
import { Certificates } from './certificates';
import * as ExcludesAPI from './excludes';
import { Excludes } from './excludes';
import * as FallbackDomainsAPI from './fallback-domains';
import { FallbackDomains } from './fallback-domains';
import * as IncludesAPI from './includes';
import { Includes } from './includes';

export class Default extends APIResource {
  excludes: ExcludesAPI.Excludes = new ExcludesAPI.Excludes(this._client);
  includes: IncludesAPI.Includes = new IncludesAPI.Includes(this._client);
  fallbackDomains: FallbackDomainsAPI.FallbackDomains = new FallbackDomainsAPI.FallbackDomains(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
}

Default.Excludes = Excludes;
Default.Includes = Includes;
Default.FallbackDomains = FallbackDomains;
Default.Certificates = Certificates;

export declare namespace Default {
  export { Excludes as Excludes };

  export { Includes as Includes };

  export { FallbackDomains as FallbackDomains };

  export { Certificates as Certificates };
}
