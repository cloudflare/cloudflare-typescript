// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { CursorPagination, type CursorPaginationParams } from '../../../pagination';

export class PrefixBindings extends APIResource {
  /**
   * Create a DLS prefix binding
   *
   * @example
   * ```ts
   * const prefixBinding =
   *   await client.dls.regionalServices.prefixBindings.create({
   *     account_id: 0,
   *     cidr: '10.0.1.0/24',
   *     prefix_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     region_key: 'eu',
   *   });
   * ```
   */
  create(
    params: PrefixBindingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixBindingCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dls/regional_services/prefix_bindings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefixBindingCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List DLS prefix bindings for an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const prefixBindingListResponse of client.dls.regionalServices.prefixBindings.list(
   *   { account_id: 0 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PrefixBindingListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PrefixBindingListResponsesCursorPagination, PrefixBindingListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dls/regional_services/prefix_bindings`,
      PrefixBindingListResponsesCursorPagination,
      { query, ...options },
    );
  }

  /**
   * Delete a DLS prefix binding
   *
   * @example
   * ```ts
   * const prefixBinding =
   *   await client.dls.regionalServices.prefixBindings.delete(
   *     'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     { account_id: 0 },
   *   );
   * ```
   */
  delete(
    bindingId: string,
    params: PrefixBindingDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixBindingDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/dls/regional_services/prefix_bindings/${bindingId}`,
      options,
    );
  }

  /**
   * Update a DLS prefix binding
   *
   * @example
   * ```ts
   * const response =
   *   await client.dls.regionalServices.prefixBindings.edit(
   *     'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     { account_id: 0, region_key: 'eu' },
   *   );
   * ```
   */
  edit(
    bindingId: string,
    params: PrefixBindingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixBindingEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/dls/regional_services/prefix_bindings/${bindingId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefixBindingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a DLS prefix binding
   *
   * @example
   * ```ts
   * const prefixBinding =
   *   await client.dls.regionalServices.prefixBindings.get(
   *     'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     { account_id: 0 },
   *   );
   * ```
   */
  get(
    bindingId: string,
    params: PrefixBindingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixBindingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dls/regional_services/prefix_bindings/${bindingId}`,
        options,
      ) as Core.APIPromise<{ result: PrefixBindingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PrefixBindingListResponsesCursorPagination extends CursorPagination<PrefixBindingListResponse> {}

export interface PrefixBindingCreateResponse {
  /**
   * The ID of the binding.
   */
  id: string;

  /**
   * The CIDR that is bound.
   */
  cidr: string;

  /**
   * The ID of the parent prefix.
   */
  prefix_id: string;

  /**
   * The region key used for the binding.
   */
  region_key: string;
}

export interface PrefixBindingListResponse {
  /**
   * The ID of the binding.
   */
  id: string;

  /**
   * The CIDR that is bound.
   */
  cidr: string;

  /**
   * The ID of the parent prefix.
   */
  prefix_id: string;

  /**
   * The region key used for the binding.
   */
  region_key: string;
}

export interface PrefixBindingDeleteResponse {
  messages: Array<Shared.ResponseInfo>;

  success: boolean;

  errors?: Array<Shared.ResponseInfo>;
}

export interface PrefixBindingEditResponse {
  /**
   * The ID of the binding.
   */
  id: string;

  /**
   * The CIDR that is bound.
   */
  cidr: string;

  /**
   * The ID of the parent prefix.
   */
  prefix_id: string;

  /**
   * The region key used for the binding.
   */
  region_key: string;
}

export interface PrefixBindingGetResponse {
  /**
   * The ID of the binding.
   */
  id: string;

  /**
   * The CIDR that is bound.
   */
  cidr: string;

  /**
   * The ID of the parent prefix.
   */
  prefix_id: string;

  /**
   * The region key used for the binding.
   */
  region_key: string;
}

export interface PrefixBindingCreateParams {
  /**
   * Path param
   */
  account_id: number;

  /**
   * Body param: IP prefix in CIDR notation to bind.
   */
  cidr: string;

  /**
   * Body param: The ID of the parent IP prefix that contains the CIDR.
   */
  prefix_id: string;

  /**
   * Body param: Region key from managed regions (e.g., "us", "eu").
   */
  region_key: string;
}

export interface PrefixBindingListParams extends CursorPaginationParams {
  /**
   * Path param
   */
  account_id: number;
}

export interface PrefixBindingDeleteParams {
  account_id: number;
}

export interface PrefixBindingEditParams {
  /**
   * Path param
   */
  account_id: number;

  /**
   * Body param: New region key to assign (e.g., "us", "eu", "cfcanary").
   */
  region_key: string;
}

export interface PrefixBindingGetParams {
  account_id: number;
}

PrefixBindings.PrefixBindingListResponsesCursorPagination = PrefixBindingListResponsesCursorPagination;

export declare namespace PrefixBindings {
  export {
    type PrefixBindingCreateResponse as PrefixBindingCreateResponse,
    type PrefixBindingListResponse as PrefixBindingListResponse,
    type PrefixBindingDeleteResponse as PrefixBindingDeleteResponse,
    type PrefixBindingEditResponse as PrefixBindingEditResponse,
    type PrefixBindingGetResponse as PrefixBindingGetResponse,
    PrefixBindingListResponsesCursorPagination as PrefixBindingListResponsesCursorPagination,
    type PrefixBindingCreateParams as PrefixBindingCreateParams,
    type PrefixBindingListParams as PrefixBindingListParams,
    type PrefixBindingDeleteParams as PrefixBindingDeleteParams,
    type PrefixBindingEditParams as PrefixBindingEditParams,
    type PrefixBindingGetParams as PrefixBindingGetParams,
  };
}
