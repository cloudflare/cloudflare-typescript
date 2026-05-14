// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ItemsAPI from './items';
import {
  BaseItems,
  ItemDeleteParams,
  ItemDeleteResponse,
  ItemEditParams,
  ItemEditResponse,
  ItemGetParams,
  ItemGetResponse,
  Items,
} from './items';
import { APIPromise } from '../../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseFilters extends APIResource {
  static override readonly _key: readonly [
    'DDoSProtection',
    'advancedTCPProtection',
    'tcpFlowProtection',
    'filters',
  ] = Object.freeze(['DDoSProtection', 'advancedTCPProtection', 'tcpFlowProtection', 'filters'] as const);

  /**
   * Create a TCP Flow Protection filter for an account.
   *
   * @example
   * ```ts
   * const filter =
   *   await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       expression:
   *         'ip.dst in { 192.0.2.0/24 198.51.100.0/24 } and tcp.srcport in { 80 443 10000..65535 }',
   *       mode: 'mode',
   *     },
   *   );
   * ```
   */
  create(params: FilterCreateParams, options?: RequestOptions): APIPromise<FilterCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters`,
        { body, ...options },
      ) as APIPromise<{ result: FilterCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all TCP Flow Protection filters for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const filterListResponse of client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: FilterListParams,
    options?: RequestOptions,
  ): PagePromise<FilterListResponsesV4PagePaginationArray, FilterListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters`,
      V4PagePaginationArray<FilterListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete all TCP Flow Protection filters for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.bulkDelete(
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  bulkDelete(params: FilterBulkDeleteParams, options?: RequestOptions): APIPromise<FilterBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters`,
      options,
    );
  }
}
export class Filters extends BaseFilters {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

export type FilterListResponsesV4PagePaginationArray = V4PagePaginationArray<FilterListResponse>;

export interface FilterCreateResponse {
  /**
   * The unique ID of the expression filter.
   */
  id: string;

  /**
   * The creation timestamp of the expression filter.
   */
  created_on: string;

  /**
   * The filter expression.
   */
  expression: string;

  /**
   * The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
   */
  mode: string;

  /**
   * The last modification timestamp of the expression filter.
   */
  modified_on: string;
}

export interface FilterListResponse {
  /**
   * The unique ID of the expression filter.
   */
  id: string;

  /**
   * The creation timestamp of the expression filter.
   */
  created_on: string;

  /**
   * The filter expression.
   */
  expression: string;

  /**
   * The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
   */
  mode: string;

  /**
   * The last modification timestamp of the expression filter.
   */
  modified_on: string;
}

export interface FilterBulkDeleteResponse {
  errors: Array<FilterBulkDeleteResponse.Error>;

  messages: Array<FilterBulkDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace FilterBulkDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface FilterCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The filter expression.
   */
  expression: string;

  /**
   * Body param: The filter's mode. Must be one of 'enabled', 'disabled',
   * 'monitoring'.
   */
  mode: string;
}

export interface FilterListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'.
   */
  direction?: string;

  /**
   * Query param: The mode of the filters to get. Optional. Valid values: 'enabled',
   * 'disabled', 'monitoring'.
   */
  mode?: string;

  /**
   * Query param: The field to order by. Defaults to 'prefix'.
   */
  order?: string;
}

export interface FilterBulkDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Filters.Items = Items;
Filters.BaseItems = BaseItems;

export declare namespace Filters {
  export {
    type FilterCreateResponse as FilterCreateResponse,
    type FilterListResponse as FilterListResponse,
    type FilterBulkDeleteResponse as FilterBulkDeleteResponse,
    type FilterListResponsesV4PagePaginationArray as FilterListResponsesV4PagePaginationArray,
    type FilterCreateParams as FilterCreateParams,
    type FilterListParams as FilterListParams,
    type FilterBulkDeleteParams as FilterBulkDeleteParams,
  };

  export {
    Items as Items,
    BaseItems as BaseItems,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemEditResponse as ItemEditResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemEditParams as ItemEditParams,
    type ItemGetParams as ItemGetParams,
  };
}
