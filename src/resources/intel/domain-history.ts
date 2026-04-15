// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class DomainHistoryResource extends APIResource {
  /**
   * Gets historical security threat and content categories currently and previously
   * assigned to a domain.
   *
   * @example
   * ```ts
   * const domainHistories =
   *   await client.intel.domainHistory.get({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params?: DomainHistoryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainHistoryGetResponse | null>;
  get(options?: Core.RequestOptions): Core.APIPromise<DomainHistoryGetResponse | null>;
  get(
    params: DomainHistoryGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainHistoryGetResponse | null> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
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
    categories?: Array<Categorization.Category>;

    end?: string;

    start?: string;
  }

  export namespace Categorization {
    export interface Category {
      id?: number;

      name?: string;
    }
  }
}

export type DomainHistoryGetResponse = Array<DomainHistory>;

export interface DomainHistoryGetParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Query param
   */
  domain?: string;
}

export declare namespace DomainHistoryResource {
  export {
    type DomainHistory as DomainHistory,
    type DomainHistoryGetResponse as DomainHistoryGetResponse,
    type DomainHistoryGetParams as DomainHistoryGetParams,
  };
}
