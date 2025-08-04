// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CustomPages extends APIResource {
  /**
   * Create a custom page
   *
   * @example
   * ```ts
   * const customPageWithoutHTML =
   *   await client.zeroTrust.access.customPages.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     custom_html:
   *       '<html><body><h1>Access Denied</h1></body></html>',
   *     name: 'name',
   *     type: 'identity_denied',
   *   });
   * ```
   */
  create(params: CustomPageCreateParams, options?: RequestOptions): APIPromise<CustomPageWithoutHTML> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/custom_pages`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomPageWithoutHTML }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a custom page
   *
   * @example
   * ```ts
   * const customPageWithoutHTML =
   *   await client.zeroTrust.access.customPages.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       custom_html:
   *         '<html><body><h1>Access Denied</h1></body></html>',
   *       name: 'name',
   *       type: 'identity_denied',
   *     },
   *   );
   * ```
   */
  update(
    customPageID: string,
    params: CustomPageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomPageWithoutHTML> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/access/custom_pages/${customPageID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomPageWithoutHTML }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List custom pages
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customPageWithoutHTML of client.zeroTrust.access.customPages.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomPageListParams,
    options?: RequestOptions,
  ): PagePromise<CustomPageWithoutHTMLsV4PagePaginationArray, CustomPageWithoutHTML> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/custom_pages`,
      V4PagePaginationArray<CustomPageWithoutHTML>,
      { query, ...options },
    );
  }

  /**
   * Delete a custom page
   *
   * @example
   * ```ts
   * const customPage =
   *   await client.zeroTrust.access.customPages.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    customPageID: string,
    params: CustomPageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CustomPageDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/access/custom_pages/${customPageID}`,
        options,
      ) as APIPromise<{ result: CustomPageDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a custom page and also returns its HTML.
   *
   * @example
   * ```ts
   * const customPage =
   *   await client.zeroTrust.access.customPages.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(customPageID: string, params: CustomPageGetParams, options?: RequestOptions): APIPromise<CustomPage> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/access/custom_pages/${customPageID}`,
        options,
      ) as APIPromise<{ result: CustomPage }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CustomPageWithoutHTMLsV4PagePaginationArray = V4PagePaginationArray<CustomPageWithoutHTML>;

export interface CustomPage {
  /**
   * Custom page HTML.
   */
  custom_html: string;

  /**
   * Custom page name.
   */
  name: string;

  /**
   * Custom page type.
   */
  type: 'identity_denied' | 'forbidden';

  /**
   * Number of apps the custom page is assigned to.
   */
  app_count?: number;

  created_at?: string;

  /**
   * UUID.
   */
  uid?: string;

  updated_at?: string;
}

export interface CustomPageWithoutHTML {
  /**
   * Custom page name.
   */
  name: string;

  /**
   * Custom page type.
   */
  type: 'identity_denied' | 'forbidden';

  /**
   * Number of apps the custom page is assigned to.
   */
  app_count?: number;

  created_at?: string;

  /**
   * UUID.
   */
  uid?: string;

  updated_at?: string;
}

export interface CustomPageDeleteResponse {
  /**
   * UUID.
   */
  id?: string;
}

export interface CustomPageCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Custom page HTML.
   */
  custom_html: string;

  /**
   * Body param: Custom page name.
   */
  name: string;

  /**
   * Body param: Custom page type.
   */
  type: 'identity_denied' | 'forbidden';

  /**
   * Body param: Number of apps the custom page is assigned to.
   */
  app_count?: number;
}

export interface CustomPageUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Custom page HTML.
   */
  custom_html: string;

  /**
   * Body param: Custom page name.
   */
  name: string;

  /**
   * Body param: Custom page type.
   */
  type: 'identity_denied' | 'forbidden';

  /**
   * Body param: Number of apps the custom page is assigned to.
   */
  app_count?: number;
}

export interface CustomPageListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface CustomPageDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface CustomPageGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace CustomPages {
  export {
    type CustomPage as CustomPage,
    type CustomPageWithoutHTML as CustomPageWithoutHTML,
    type CustomPageDeleteResponse as CustomPageDeleteResponse,
    type CustomPageWithoutHTMLsV4PagePaginationArray as CustomPageWithoutHTMLsV4PagePaginationArray,
    type CustomPageCreateParams as CustomPageCreateParams,
    type CustomPageUpdateParams as CustomPageUpdateParams,
    type CustomPageListParams as CustomPageListParams,
    type CustomPageDeleteParams as CustomPageDeleteParams,
    type CustomPageGetParams as CustomPageGetParams,
  };
}
