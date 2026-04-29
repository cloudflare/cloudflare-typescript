// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as LogoMatchesAPI from './logo-matches';
import { LogoMatches } from './logo-matches';
import * as LogosAPI from './logos';
import { Logos } from './logos';
import * as MatchesAPI from './matches';
import { Matches } from './matches';
import * as QueriesAPI from './queries';
import { Queries } from './queries';

export class V2 extends APIResource {
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  matches: MatchesAPI.Matches = new MatchesAPI.Matches(this._client);
  logos: LogosAPI.Logos = new LogosAPI.Logos(this._client);
  logoMatches: LogoMatchesAPI.LogoMatches = new LogoMatchesAPI.LogoMatches(this._client);
}

V2.Queries = Queries;
V2.Matches = Matches;
V2.Logos = Logos;
V2.LogoMatches = LogoMatches;

export declare namespace V2 {
  export { Queries as Queries };

  export { Matches as Matches };

  export { Logos as Logos };

  export { LogoMatches as LogoMatches };
}
