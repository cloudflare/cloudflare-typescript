// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DomainAPI from './domain';

export class Domain extends APIResource {
  /**
   * Gets Domains Rank details. Cloudflare provides an ordered rank for the top 100
   * domains, but for the remainder it only provides ranking buckets like top 200
   * thousand, top one million, etc.. These are available through Radar datasets
   * endpoints.
   */
  get(
    domain: string,
    query?: DomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse>;
  get(domain: string, options?: Core.RequestOptions): Core.APIPromise<DomainGetResponse>;
  get(
    domain: string,
    query: DomainGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(domain, {}, query);
    }
    return (
      this._client.get(`/radar/ranking/domain/${domain}`, { query, ...options }) as Core.APIPromise<{
        result: DomainGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DomainGetResponse {
  details_0: DomainGetResponse.Details0;
}

export namespace DomainGetResponse {
  export interface Details0 {
    categories: Array<Details0.Category>;

    top_locations: Array<Details0.TopLocation>;

    /**
     * Only available in POPULAR ranking for the most recent ranking.
     */
    bucket?: string;

    rank?: number;
  }

  export namespace Details0 {
    export interface Category {
      id: number;

      name: string;

      superCategoryId: number;
    }

    export interface TopLocation {
      locationCode: string;

      locationName: string;

      rank: number;
    }
  }
}

export interface DomainGetParams {
  /**
   * Array of dates to filter the ranking.
   */
  date?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * The ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

export namespace Domain {
  export import DomainGetResponse = DomainAPI.DomainGetResponse;
  export import DomainGetParams = DomainAPI.DomainGetParams;
}
