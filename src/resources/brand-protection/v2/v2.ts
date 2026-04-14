// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as LogoMatchesAPI from './logo-matches';
import { LogoMatchGetParams, LogoMatchGetResponse, LogoMatches } from './logo-matches';
import * as LogosAPI from './logos';
import {
  LogoCreateParams,
  LogoCreateResponse,
  LogoDeleteParams,
  LogoDeleteResponse,
  LogoGetParams,
  LogoGetResponse,
  Logos,
} from './logos';
import * as MatchesAPI from './matches';
import { MatchGetParams, MatchGetResponse, Matches } from './matches';
import * as QueriesAPI from './queries';
import { Queries, QueryGetParams, QueryGetResponse } from './queries';

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
  export {
    Queries as Queries,
    type QueryGetResponse as QueryGetResponse,
    type QueryGetParams as QueryGetParams,
  };

  export {
    Matches as Matches,
    type MatchGetResponse as MatchGetResponse,
    type MatchGetParams as MatchGetParams,
  };

  export {
    Logos as Logos,
    type LogoCreateResponse as LogoCreateResponse,
    type LogoDeleteResponse as LogoDeleteResponse,
    type LogoGetResponse as LogoGetResponse,
    type LogoCreateParams as LogoCreateParams,
    type LogoDeleteParams as LogoDeleteParams,
    type LogoGetParams as LogoGetParams,
  };

  export {
    LogoMatches as LogoMatches,
    type LogoMatchGetResponse as LogoMatchGetResponse,
    type LogoMatchGetParams as LogoMatchGetParams,
  };
}
