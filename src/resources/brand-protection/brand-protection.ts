// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogoMatchesAPI from './logo-matches';
import {
  BaseLogoMatches,
  LogoMatchDownloadParams,
  LogoMatchDownloadResponse,
  LogoMatchGetParams,
  LogoMatchGetResponse,
  LogoMatches,
} from './logo-matches';
import * as LogosAPI from './logos';
import { BaseLogos, LogoCreateParams, LogoCreateResponse, LogoDeleteParams, Logos } from './logos';
import * as MatchesAPI from './matches';
import {
  BaseMatches,
  MatchDownloadParams,
  MatchDownloadResponse,
  MatchGetParams,
  MatchGetResponse,
  Matches,
} from './matches';
import * as QueriesAPI from './queries';
import { BaseQueries, Queries, QueryBulkParams, QueryCreateParams, QueryDeleteParams } from './queries';
import * as V2API from './v2/v2';
import { BaseV2, V2 } from './v2/v2';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBrandProtection extends APIResource {
  static override readonly _key: readonly ['brandProtection'] = Object.freeze(['brandProtection'] as const);

  /**
   * Return new URL submissions
   */
  submit(
    params: BrandProtectionSubmitParams,
    options?: RequestOptions,
  ): APIPromise<BrandProtectionSubmitResponse> {
    const { account_id } = params;
    return this._client.post(path`/accounts/${account_id}/brand-protection/submit`, options);
  }

  /**
   * Return submitted URLs based on ID
   */
  urlInfo(
    params: BrandProtectionURLInfoParams,
    options?: RequestOptions,
  ): PagePromise<BrandProtectionURLInfoResponsesSinglePage, BrandProtectionURLInfoResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/brand-protection/url-info`,
      SinglePage<BrandProtectionURLInfoResponse>,
      options,
    );
  }
}
export class BrandProtection extends BaseBrandProtection {
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  matches: MatchesAPI.Matches = new MatchesAPI.Matches(this._client);
  logos: LogosAPI.Logos = new LogosAPI.Logos(this._client);
  logoMatches: LogoMatchesAPI.LogoMatches = new LogoMatchesAPI.LogoMatches(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

export type BrandProtectionURLInfoResponsesSinglePage = SinglePage<BrandProtectionURLInfoResponse>;

export interface BrandProtectionSubmitResponse {
  skipped_urls?: Array<{ [key: string]: unknown }>;

  submitted_urls?: Array<{ [key: string]: unknown }>;
}

export type BrandProtectionURLInfoResponse = { [key: string]: unknown };

export interface BrandProtectionSubmitParams {
  account_id: string;
}

export interface BrandProtectionURLInfoParams {
  account_id: string;
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
  export {
    type BrandProtectionSubmitResponse as BrandProtectionSubmitResponse,
    type BrandProtectionURLInfoResponse as BrandProtectionURLInfoResponse,
    type BrandProtectionURLInfoResponsesSinglePage as BrandProtectionURLInfoResponsesSinglePage,
    type BrandProtectionSubmitParams as BrandProtectionSubmitParams,
    type BrandProtectionURLInfoParams as BrandProtectionURLInfoParams,
  };

  export {
    Queries as Queries,
    BaseQueries as BaseQueries,
    type QueryCreateParams as QueryCreateParams,
    type QueryDeleteParams as QueryDeleteParams,
    type QueryBulkParams as QueryBulkParams,
  };

  export {
    Matches as Matches,
    BaseMatches as BaseMatches,
    type MatchDownloadResponse as MatchDownloadResponse,
    type MatchGetResponse as MatchGetResponse,
    type MatchDownloadParams as MatchDownloadParams,
    type MatchGetParams as MatchGetParams,
  };

  export {
    Logos as Logos,
    BaseLogos as BaseLogos,
    type LogoCreateResponse as LogoCreateResponse,
    type LogoCreateParams as LogoCreateParams,
    type LogoDeleteParams as LogoDeleteParams,
  };

  export {
    LogoMatches as LogoMatches,
    BaseLogoMatches as BaseLogoMatches,
    type LogoMatchDownloadResponse as LogoMatchDownloadResponse,
    type LogoMatchGetResponse as LogoMatchGetResponse,
    type LogoMatchDownloadParams as LogoMatchDownloadParams,
    type LogoMatchGetParams as LogoMatchGetParams,
  };

  export { V2 as V2, BaseV2 as BaseV2 };
}
