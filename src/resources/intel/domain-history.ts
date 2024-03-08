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

export interface IntelDomainHistory {
  categorizations?: Array<IntelDomainHistory.Categorization>;

  domain?: string;
}

export namespace IntelDomainHistory {
  export interface Categorization {
    categories?: unknown;

    end?: string;

    start?: string;
  }
}

export type DomainHistoryGetResponse = Array<IntelDomainHistory>;

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
  export import IntelDomainHistory = DomainHistoryAPI.IntelDomainHistory;
  export import DomainHistoryGetResponse = DomainHistoryAPI.DomainHistoryGetResponse;
  export import DomainHistoryGetParams = DomainHistoryAPI.DomainHistoryGetParams;
}
