// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LogoMatchesAPI from './logo-matches';
import { BaseLogoMatches, LogoMatches } from './logo-matches';
import * as LogosAPI from './logos';
import { BaseLogos, Logos } from './logos';
import * as MatchesAPI from './matches';
import { BaseMatches, Matches } from './matches';
import * as QueriesAPI from './queries';
import { BaseQueries, Queries } from './queries';

export class BaseV2 extends APIResource {
  static override readonly _key: readonly ['brandProtection', 'v2'] = Object.freeze([
    'brandProtection',
    'v2',
  ] as const);
}
export class V2 extends BaseV2 {
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  matches: MatchesAPI.Matches = new MatchesAPI.Matches(this._client);
  logos: LogosAPI.Logos = new LogosAPI.Logos(this._client);
  logoMatches: LogoMatchesAPI.LogoMatches = new LogoMatchesAPI.LogoMatches(this._client);
}

V2.Queries = Queries;
V2.BaseQueries = BaseQueries;
V2.Matches = Matches;
V2.BaseMatches = BaseMatches;
V2.Logos = Logos;
V2.BaseLogos = BaseLogos;
V2.LogoMatches = LogoMatches;
V2.BaseLogoMatches = BaseLogoMatches;

export declare namespace V2 {
  export { Queries as Queries, BaseQueries as BaseQueries };

  export { Matches as Matches, BaseMatches as BaseMatches };

  export { Logos as Logos, BaseLogos as BaseLogos };

  export { LogoMatches as LogoMatches, BaseLogoMatches as BaseLogoMatches };
}
