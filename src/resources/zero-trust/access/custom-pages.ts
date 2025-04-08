// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CustomPages extends APIResource {
  /**
   * Create a custom page
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
   */
  list(
    params: CustomPageListParams,
    options?: RequestOptions,
  ): PagePromise<CustomPageWithoutHTMLsSinglePage, CustomPageWithoutHTML> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/custom_pages`,
      SinglePage<CustomPageWithoutHTML>,
      options,
    );
  }

  /**
   * Delete a custom page
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

export type CustomPageWithoutHTMLsSinglePage = SinglePage<CustomPageWithoutHTML>;

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

export interface CustomPageListParams {
  /**
   * Identifier.
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
    type CustomPageWithoutHTMLsSinglePage as CustomPageWithoutHTMLsSinglePage,
    type CustomPageCreateParams as CustomPageCreateParams,
    type CustomPageUpdateParams as CustomPageUpdateParams,
    type CustomPageListParams as CustomPageListParams,
    type CustomPageDeleteParams as CustomPageDeleteParams,
    type CustomPageGetParams as CustomPageGetParams,
  };
}
