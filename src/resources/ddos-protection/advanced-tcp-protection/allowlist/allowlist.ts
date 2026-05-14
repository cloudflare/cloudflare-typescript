// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ItemsAPI from './items';
import {
  ItemDeleteParams,
  ItemDeleteResponse,
  ItemEditParams,
  ItemEditResponse,
  ItemGetParams,
  ItemGetResponse,
  Items,
} from './items';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Allowlist extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Create an allowlist prefix for an account.
   *
   * @example
   * ```ts
   * const allowlist =
   *   await client.DDoSProtection.advancedTCPProtection.allowlist.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       comment: 'comment',
   *       enabled: true,
   *       prefix: 'prefix',
   *     },
   *   );
   * ```
   */
  create(
    params: AllowlistCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowlistCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/advanced_tcp_protection/configs/allowlist`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AllowlistCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all allowlist prefixes for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const allowlistListResponse of client.DDoSProtection.advancedTCPProtection.allowlist.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AllowlistListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AllowlistListResponsesV4PagePaginationArray, AllowlistListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/allowlist`,
      AllowlistListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete all allowlist prefixes for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.allowlist.bulkDelete(
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  bulkDelete(
    params: AllowlistBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowlistBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/allowlist`,
      options,
    );
  }
}

export class AllowlistListResponsesV4PagePaginationArray extends V4PagePaginationArray<AllowlistListResponse> {}

export interface AllowlistCreateResponse {
  /**
   * The unique ID of the allowlist prefix.
   */
  id: string;

  /**
   * An optional comment describing the allowlist prefix.
   */
  comment: string;

  /**
   * The creation timestamp of the allowlist prefix.
   */
  created_on: string;

  /**
   * Whether to enable the allowlist prefix into effect. Defaults to false.
   */
  enabled: boolean;

  /**
   * The last modification timestamp of the allowlist prefix.
   */
  modified_on: string;

  /**
   * The allowlist prefix in CIDR format.
   */
  prefix: string;
}

export interface AllowlistListResponse {
  /**
   * The unique ID of the allowlist prefix.
   */
  id: string;

  /**
   * An optional comment describing the allowlist prefix.
   */
  comment: string;

  /**
   * The creation timestamp of the allowlist prefix.
   */
  created_on: string;

  /**
   * Whether to enable the allowlist prefix into effect. Defaults to false.
   */
  enabled: boolean;

  /**
   * The last modification timestamp of the allowlist prefix.
   */
  modified_on: string;

  /**
   * The allowlist prefix in CIDR format.
   */
  prefix: string;
}

export interface AllowlistBulkDeleteResponse {
  errors: Array<AllowlistBulkDeleteResponse.Error>;

  messages: Array<AllowlistBulkDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace AllowlistBulkDeleteResponse {
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

export interface AllowlistCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: An comment describing the allowlist prefix.
   */
  comment: string;

  /**
   * Body param: Whether to enable the allowlist prefix into effect.
   */
  enabled: boolean;

  /**
   * Body param: The allowlist prefix to add in CIDR format.
   */
  prefix: string;
}

export interface AllowlistListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'.
   */
  direction?: string;

  /**
   * Query param: The field to order by. Defaults to 'prefix'.
   */
  order?: string;
}

export interface AllowlistBulkDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Allowlist.AllowlistListResponsesV4PagePaginationArray = AllowlistListResponsesV4PagePaginationArray;
Allowlist.Items = Items;

export declare namespace Allowlist {
  export {
    type AllowlistCreateResponse as AllowlistCreateResponse,
    type AllowlistListResponse as AllowlistListResponse,
    type AllowlistBulkDeleteResponse as AllowlistBulkDeleteResponse,
    AllowlistListResponsesV4PagePaginationArray as AllowlistListResponsesV4PagePaginationArray,
    type AllowlistCreateParams as AllowlistCreateParams,
    type AllowlistListParams as AllowlistListParams,
    type AllowlistBulkDeleteParams as AllowlistBulkDeleteParams,
  };

  export {
    Items as Items,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemEditResponse as ItemEditResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemEditParams as ItemEditParams,
    type ItemGetParams as ItemGetParams,
  };
}
