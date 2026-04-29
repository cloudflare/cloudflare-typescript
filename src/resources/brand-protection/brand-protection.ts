// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogoMatchesAPI from './logo-matches';
import { BaseLogoMatches, LogoMatches } from './logo-matches';
import * as LogosAPI from './logos';
import { BaseLogos, Logos } from './logos';
import * as MatchesAPI from './matches';
import { BaseMatches, Matches } from './matches';
import * as QueriesAPI from './queries';
import { BaseQueries, Queries } from './queries';
import * as V2API from './v2/v2';
import { BaseV2, V2 } from './v2/v2';

export class BaseBrandProtection extends APIResource {
  static override readonly _key: readonly ['brandProtection'] = Object.freeze(['brandProtection'] as const);
}
export class BrandProtection extends BaseBrandProtection {
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  matches: MatchesAPI.Matches = new MatchesAPI.Matches(this._client);
  logos: LogosAPI.Logos = new LogosAPI.Logos(this._client);
  logoMatches: LogoMatchesAPI.LogoMatches = new LogoMatchesAPI.LogoMatches(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

BrandProtection.Queries = Queries;
BrandProtection.BaseQueries = BaseQueries;
BrandProtection.Matches = Matches;
BrandProtection.BaseMatches = BaseMatches;
BrandProtection.Logos = Logos;
BrandProtection.BaseLogos = BaseLogos;
BrandProtection.LogoMatches = LogoMatches;
BrandProtection.BaseLogoMatches = BaseLogoMatches;
BrandProtection.V2 = V2;
BrandProtection.BaseV2 = BaseV2;

export declare namespace BrandProtection {
  export { Queries as Queries, BaseQueries as BaseQueries };

  export { Matches as Matches, BaseMatches as BaseMatches };

  export { Logos as Logos, BaseLogos as BaseLogos };

  export { LogoMatches as LogoMatches, BaseLogoMatches as BaseLogoMatches };

  export { V2 as V2, BaseV2 as BaseV2 };
}
