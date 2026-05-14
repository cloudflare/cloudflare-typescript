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
import { SinglePage, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Prefixes extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Create a prefix for an account.
   *
   * @example
   * ```ts
   * const prefix =
   *   await client.DDoSProtection.advancedTCPProtection.prefixes.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       comment: 'comment',
   *       excluded: true,
   *       prefix: '192.0.2.0/24',
   *     },
   *   );
   * ```
   */
  create(params: PrefixCreateParams, options?: Core.RequestOptions): Core.APIPromise<PrefixCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/advanced_tcp_protection/configs/prefixes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefixCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all prefixes for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const prefixListResponse of client.DDoSProtection.advancedTCPProtection.prefixes.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PrefixListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PrefixListResponsesV4PagePaginationArray, PrefixListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/prefixes`,
      PrefixListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Create multiple prefixes for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const prefixBulkCreateResponse of client.DDoSProtection.advancedTCPProtection.prefixes.bulkCreate(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [
   *       {
   *         comment: 'comment',
   *         excluded: true,
   *         prefix: '192.0.2.0/24',
   *       },
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkCreate(
    params: PrefixBulkCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PrefixBulkCreateResponsesSinglePage, PrefixBulkCreateResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/prefixes/bulk`,
      PrefixBulkCreateResponsesSinglePage,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Delete all prefixes for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.prefixes.bulkDelete(
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  bulkDelete(
    params: PrefixBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/prefixes`,
      options,
    );
  }
}

export class PrefixListResponsesV4PagePaginationArray extends V4PagePaginationArray<PrefixListResponse> {}

export class PrefixBulkCreateResponsesSinglePage extends SinglePage<PrefixBulkCreateResponse> {}

export interface PrefixCreateResponse {
  /**
   * The unique ID of the prefix.
   */
  id: string;

  /**
   * A comment describing the prefix.
   */
  comment: string;

  /**
   * The creation timestamp of the prefix.
   */
  created_on: string;

  /**
   * Whether to exclude the prefix from protection.
   */
  excluded: boolean;

  /**
   * The last modification timestamp of the prefix.
   */
  modified_on: string;

  /**
   * The prefix in CIDR format.
   */
  prefix: string;
}

export interface PrefixListResponse {
  /**
   * The unique ID of the prefix.
   */
  id: string;

  /**
   * A comment describing the prefix.
   */
  comment: string;

  /**
   * The creation timestamp of the prefix.
   */
  created_on: string;

  /**
   * Whether to exclude the prefix from protection.
   */
  excluded: boolean;

  /**
   * The last modification timestamp of the prefix.
   */
  modified_on: string;

  /**
   * The prefix in CIDR format.
   */
  prefix: string;
}

export interface PrefixBulkCreateResponse {
  /**
   * The unique ID of the prefix.
   */
  id: string;

  /**
   * A comment describing the prefix.
   */
  comment: string;

  /**
   * The creation timestamp of the prefix.
   */
  created_on: string;

  /**
   * Whether to exclude the prefix from protection.
   */
  excluded: boolean;

  /**
   * The last modification timestamp of the prefix.
   */
  modified_on: string;

  /**
   * The prefix in CIDR format.
   */
  prefix: string;
}

export interface PrefixBulkDeleteResponse {
  errors: Array<PrefixBulkDeleteResponse.Error>;

  messages: Array<PrefixBulkDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace PrefixBulkDeleteResponse {
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

export interface PrefixCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: A comment describing the prefix.
   */
  comment: string;

  /**
   * Body param: Whether to exclude the prefix from protection.
   */
  excluded: boolean;

  /**
   * Body param: The prefix to add in CIDR format.
   */
  prefix: string;
}

export interface PrefixListParams extends V4PagePaginationArrayParams {
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

export interface PrefixBulkCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<PrefixBulkCreateParams.Body>;
}

export namespace PrefixBulkCreateParams {
  export interface Body {
    /**
     * A comment describing the prefix.
     */
    comment: string;

    /**
     * Whether to exclude the prefix from protection.
     */
    excluded: boolean;

    /**
     * The prefix to add in CIDR format.
     */
    prefix: string;
  }
}

export interface PrefixBulkDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Prefixes.PrefixListResponsesV4PagePaginationArray = PrefixListResponsesV4PagePaginationArray;
Prefixes.PrefixBulkCreateResponsesSinglePage = PrefixBulkCreateResponsesSinglePage;
Prefixes.Items = Items;

export declare namespace Prefixes {
  export {
    type PrefixCreateResponse as PrefixCreateResponse,
    type PrefixListResponse as PrefixListResponse,
    type PrefixBulkCreateResponse as PrefixBulkCreateResponse,
    type PrefixBulkDeleteResponse as PrefixBulkDeleteResponse,
    PrefixListResponsesV4PagePaginationArray as PrefixListResponsesV4PagePaginationArray,
    PrefixBulkCreateResponsesSinglePage as PrefixBulkCreateResponsesSinglePage,
    type PrefixCreateParams as PrefixCreateParams,
    type PrefixListParams as PrefixListParams,
    type PrefixBulkCreateParams as PrefixBulkCreateParams,
    type PrefixBulkDeleteParams as PrefixBulkDeleteParams,
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
