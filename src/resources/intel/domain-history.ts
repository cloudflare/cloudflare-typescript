// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DomainHistoryAPI from './domain-history';

export class DomainHistoryResource extends APIResource {
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

export interface DomainHistory {
  categorizations?: Array<DomainHistory.Categorization>;

  domain?: string;
}

export namespace DomainHistory {
  export interface Categorization {
    categories?: Array<unknown>;

    end?: string;

    start?: string;
  }
}

export type DomainHistoryGetResponse = Array<DomainHistory>;

export interface DomainHistoryGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  domain?: string;
}

export namespace DomainHistoryResource {
  export import DomainHistory = DomainHistoryAPI.DomainHistory;
  export import DomainHistoryGetResponse = DomainHistoryAPI.DomainHistoryGetResponse;
  export import DomainHistoryGetParams = DomainHistoryAPI.DomainHistoryGetParams;
}
