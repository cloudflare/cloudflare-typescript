// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainHistoriesAPI from 'cloudflare/resources/intel/domain-histories';

export class DomainHistories extends APIResource {
  /**
   * Get Domain History
   */
  list(
    params: DomainHistoryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainHistoryListResponse | null> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/domain-history`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DomainHistoryListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DomainHistoryListResponse = Array<DomainHistoryListResponse.DomainHistoryListResponseItem>;

export namespace DomainHistoryListResponse {
  export interface DomainHistoryListResponseItem {
    categorizations?: Array<DomainHistoryListResponseItem.Categorization>;

    domain?: string;
  }

  export namespace DomainHistoryListResponseItem {
    export interface Categorization {
      categories?: unknown;

      end?: string;

      start?: string;
    }
  }
}

export interface DomainHistoryListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  domain?: unknown;
}

export namespace DomainHistories {
  export import DomainHistoryListResponse = DomainHistoriesAPI.DomainHistoryListResponse;
  export import DomainHistoryListParams = DomainHistoriesAPI.DomainHistoryListParams;
}
