// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';

export class Items extends APIResource {
  /**
   * Delete a SYN Protection filter specified by the given UUID.
   *
   * @example
   * ```ts
   * const item =
   *   await client.DDoSProtection.advancedTCPProtection.synProtection.filters.items.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    filterId: string,
    params: ItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/${filterId}`,
      options,
    );
  }

  /**
   * Update a SYN Protection filter specified by the given UUID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.synProtection.filters.items.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    filterId: string,
    params: ItemEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/${filterId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ItemEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a SYN Protection filter specified by the given UUID.
   *
   * @example
   * ```ts
   * const item =
   *   await client.DDoSProtection.advancedTCPProtection.synProtection.filters.items.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    filterId: string,
    params: ItemGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/${filterId}`,
        options,
      ) as Core.APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ItemDeleteResponse {
  errors: Array<ItemDeleteResponse.Error>;

  messages: Array<ItemDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace ItemDeleteResponse {
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

export interface ItemEditResponse {
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

export interface ItemGetResponse {
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

export interface ItemDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface ItemEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The new filter expression. Optional.
   */
  expression?: string;

  /**
   * Body param: The new mode for the filter. Optional. Must be one of 'enabled',
   * 'disabled', 'monitoring'.
   */
  mode?: string;
}

export interface ItemGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Items {
  export {
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemEditResponse as ItemEditResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemEditParams as ItemEditParams,
    type ItemGetParams as ItemGetParams,
  };
}
