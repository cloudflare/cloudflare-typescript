// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Colos extends APIResource {
  /**
   * List Cloudflare colos that account's devices were connected to during a time
   * period, sorted by usage starting from the most used colo. Colos without traffic
   * are also returned and sorted alphabetically.
   */
  list(
    params: ColoListParams,
    options?: RequestOptions,
  ): PagePromise<ColoListResponsesSinglePage, ColoListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/dex/colos`, SinglePage<ColoListResponse>, {
      query,
      ...options,
    });
  }
}

export type ColoListResponsesSinglePage = SinglePage<ColoListResponse>;

export type ColoListResponse = unknown;

export interface ColoListParams {
  /**
   * Path param: unique identifier linked to an account in the API request path.
   */
  account_id: string;

  /**
   * Query param: Start time for connection period in ISO (RFC3339 - ISO 8601) format
   */
  from: string;

  /**
   * Query param: End time for connection period in ISO (RFC3339 - ISO 8601) format
   */
  to: string;

  /**
   * Query param: Type of usage that colos should be sorted by. If unspecified,
   * returns all Cloudflare colos sorted alphabetically.
   */
  sortBy?: 'fleet-status-usage' | 'application-tests-usage';
}

export declare namespace Colos {
  export {
    type ColoListResponse as ColoListResponse,
    type ColoListResponsesSinglePage as ColoListResponsesSinglePage,
    type ColoListParams as ColoListParams,
  };
}
