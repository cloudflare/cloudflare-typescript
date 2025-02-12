// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Views extends APIResource {
  /**
   * Create Internal DNS View for an account
   */
  create(params: ViewCreateParams, options?: Core.RequestOptions): Core.APIPromise<ViewCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dns_settings/views`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ViewCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List DNS Internal Views for an Account
   */
  list(
    params: ViewListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ViewListResponsesV4PagePaginationArray, ViewListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dns_settings/views`,
      ViewListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete an existing Internal DNS View
   */
  delete(
    viewId: string,
    params: ViewDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ViewDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dns_settings/views/${viewId}`,
        options,
      ) as Core.APIPromise<{ result: ViewDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing Internal DNS View
   */
  edit(
    viewId: string,
    params: ViewEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ViewEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/dns_settings/views/${viewId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ViewEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get DNS Internal View
   */
  get(
    viewId: string,
    params: ViewGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ViewGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dns_settings/views/${viewId}`, options) as Core.APIPromise<{
        result: ViewGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ViewListResponsesV4PagePaginationArray extends V4PagePaginationArray<ViewListResponse> {}

export interface ViewCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * When the view was created.
   */
  created_time: string;

  /**
   * When the view was last modified.
   */
  modified_time: string;

  /**
   * The name of the view.
   */
  name: string;

  /**
   * The list of zones linked to this view.
   */
  zones: Array<string>;
}

export interface ViewListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * When the view was created.
   */
  created_time: string;

  /**
   * When the view was last modified.
   */
  modified_time: string;

  /**
   * The name of the view.
   */
  name: string;

  /**
   * The list of zones linked to this view.
   */
  zones: Array<string>;
}

export interface ViewDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ViewEditResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * When the view was created.
   */
  created_time: string;

  /**
   * When the view was last modified.
   */
  modified_time: string;

  /**
   * The name of the view.
   */
  name: string;

  /**
   * The list of zones linked to this view.
   */
  zones: Array<string>;
}

export interface ViewGetResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * When the view was created.
   */
  created_time: string;

  /**
   * When the view was last modified.
   */
  modified_time: string;

  /**
   * The name of the view.
   */
  name: string;

  /**
   * The list of zones linked to this view.
   */
  zones: Array<string>;
}

export interface ViewCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The name of the view.
   */
  name: string;

  /**
   * Body param: The list of zones linked to this view.
   */
  zones: Array<string>;
}

export interface ViewListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Direction to order DNS views in.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Whether to match all search requirements or at least one (any). If
   * set to `all`, acts like a logical AND between filters. If set to `any`, acts
   * like a logical OR instead.
   */
  match?: 'any' | 'all';

  /**
   * Query param:
   */
  name?: ViewListParams.Name;

  /**
   * Query param: Field to order DNS views by.
   */
  order?: 'name' | 'created_on' | 'modified_on';

  /**
   * Query param: A zone ID that exists in the zones list for the view.
   */
  zone_id?: string;

  /**
   * Query param: A zone name that exists in the zones list for the view.
   */
  zone_name?: string;
}

export namespace ViewListParams {
  export interface Name {
    /**
     * Substring of the DNS view name.
     */
    contains?: string;

    /**
     * Suffix of the DNS view name.
     */
    endswith?: string;

    /**
     * Exact value of the DNS view name.
     */
    exact?: string;

    /**
     * Prefix of the DNS view name.
     */
    startswith?: string;
  }
}

export interface ViewDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ViewEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The name of the view.
   */
  name?: string;

  /**
   * Body param: The list of zones linked to this view.
   */
  zones?: Array<string>;
}

export interface ViewGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Views.ViewListResponsesV4PagePaginationArray = ViewListResponsesV4PagePaginationArray;

export declare namespace Views {
  export {
    type ViewCreateResponse as ViewCreateResponse,
    type ViewListResponse as ViewListResponse,
    type ViewDeleteResponse as ViewDeleteResponse,
    type ViewEditResponse as ViewEditResponse,
    type ViewGetResponse as ViewGetResponse,
    ViewListResponsesV4PagePaginationArray as ViewListResponsesV4PagePaginationArray,
    type ViewCreateParams as ViewCreateParams,
    type ViewListParams as ViewListParams,
    type ViewDeleteParams as ViewDeleteParams,
    type ViewEditParams as ViewEditParams,
    type ViewGetParams as ViewGetParams,
  };
}
