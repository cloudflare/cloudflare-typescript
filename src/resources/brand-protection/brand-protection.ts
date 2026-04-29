// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LogoMatchesAPI from './logo-matches';
import { LogoMatches } from './logo-matches';
import * as LogosAPI from './logos';
import { Logos } from './logos';
import * as MatchesAPI from './matches';
import { Matches } from './matches';
import * as QueriesAPI from './queries';
import { Queries } from './queries';
import * as V2API from './v2/v2';
import { V2 } from './v2/v2';

export class BrandProtection extends APIResource {
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  matches: MatchesAPI.Matches = new MatchesAPI.Matches(this._client);
  logos: LogosAPI.Logos = new LogosAPI.Logos(this._client);
  logoMatches: LogoMatchesAPI.LogoMatches = new LogoMatchesAPI.LogoMatches(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

BrandProtection.Queries = Queries;
BrandProtection.Matches = Matches;
BrandProtection.Logos = Logos;
BrandProtection.LogoMatches = LogoMatches;
BrandProtection.V2 = V2;

export declare namespace BrandProtection {
  export { Queries as Queries };

  export { Matches as Matches };

  export { Logos as Logos };

  export { LogoMatches as LogoMatches };

  export { V2 as V2 };
}
