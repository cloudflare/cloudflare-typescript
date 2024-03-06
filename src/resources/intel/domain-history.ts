// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainHistoryAPI from 'cloudflare/resources/intel/domain-history';

export class DomainHistory extends APIResource {
  /**
   * Get Domain History
   */
  get(
    params: DomainHistoryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainHistoryGetResponse | null> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/domain-history`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DomainHistoryGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DomainHistoryGetResponse = Array<DomainHistoryGetResponse.DomainHistoryGetResponseItem>;

export namespace DomainHistoryGetResponse {
  export interface DomainHistoryGetResponseItem {
    categorizations?: Array<DomainHistoryGetResponseItem.Categorization>;

    domain?: string;
  }

  export namespace DomainHistoryGetResponseItem {
    export interface Categorization {
      categories?: unknown;

      end?: string;

      start?: string;
    }
  }
}

export interface DomainHistoryGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  domain?: unknown;
}

export namespace DomainHistory {
  export import DomainHistoryGetResponse = DomainHistoryAPI.DomainHistoryGetResponse;
  export import DomainHistoryGetParams = DomainHistoryAPI.DomainHistoryGetParams;
}
