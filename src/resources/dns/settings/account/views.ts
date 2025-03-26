// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Views extends APIResource {
  /**
   * Create Internal DNS View for an account
   */
  create(params: ViewCreateParams, options?: RequestOptions): APIPromise<ViewCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dns_settings/views`, {
        body,
        ...options,
      }) as APIPromise<{ result: ViewCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List DNS Internal Views for an Account
   */
  list(
    params: ViewListParams,
    options?: RequestOptions,
  ): PagePromise<ViewListResponsesV4PagePaginationArray, ViewListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dns_settings/views`,
      V4PagePaginationArray<ViewListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete an existing Internal DNS View
   */
  delete(viewID: string, params: ViewDeleteParams, options?: RequestOptions): APIPromise<ViewDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/dns_settings/views/${viewID}`, options) as APIPromise<{
        result: ViewDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing Internal DNS View
   */
  edit(viewID: string, params: ViewEditParams, options?: RequestOptions): APIPromise<ViewEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/dns_settings/views/${viewID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ViewEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get DNS Internal View
   */
  get(viewID: string, params: ViewGetParams, options?: RequestOptions): APIPromise<ViewGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dns_settings/views/${viewID}`, options) as APIPromise<{
        result: ViewGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ViewListResponsesV4PagePaginationArray = V4PagePaginationArray<ViewListResponse>;

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

export declare namespace Views {
  export {
    type ViewCreateResponse as ViewCreateResponse,
    type ViewListResponse as ViewListResponse,
    type ViewDeleteResponse as ViewDeleteResponse,
    type ViewEditResponse as ViewEditResponse,
    type ViewGetResponse as ViewGetResponse,
    type ViewListResponsesV4PagePaginationArray as ViewListResponsesV4PagePaginationArray,
    type ViewCreateParams as ViewCreateParams,
    type ViewListParams as ViewListParams,
    type ViewDeleteParams as ViewDeleteParams,
    type ViewEditParams as ViewEditParams,
    type ViewGetParams as ViewGetParams,
  };
}
