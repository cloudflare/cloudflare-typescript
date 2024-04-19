// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SummaryAPI from 'cloudflare/resources/zero-trust/risk-scoring/summary';

export class Summary extends APIResource {
  /**
   * Get risk score info for all users in the account
   */
  get(
    accountIdentifier: string,
    query?: SummaryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryGetResponse>;
  get(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SummaryGetResponse>;
  get(
    accountIdentifier: string,
    query: SummaryGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(accountIdentifier, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountIdentifier}/zt_risk_scoring/summary`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SummaryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryGetResponse {
  users?: Array<SummaryGetResponse.User>;
}

export namespace SummaryGetResponse {
  export interface User {
    email: string;

    event_count: number;

    last_event: string;

    max_risk_level: 'low' | 'medium' | 'high' | null;

    name: string;

    /**
     * The ID for a user
     */
    user_id: string;
  }
}

export interface SummaryGetParams {
  direction?: 'desc' | 'asc';

  order_by?: 'timestamp' | 'event_count' | 'max_risk_level';

  page?: number;

  per_page?: number;
}

export namespace Summary {
  export import SummaryGetResponse = SummaryAPI.SummaryGetResponse;
  export import SummaryGetParams = SummaryAPI.SummaryGetParams;
}
