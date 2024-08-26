// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as CustomPagesAPI from './custom-pages';
import { SinglePage } from '../../../pagination';

export class CustomPages extends APIResource {
  /**
   * Create a custom page
   */
  create(params: CustomPageCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomPageWithoutHTML> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/access/custom_pages`, { body, ...options }) as Core.APIPromise<{ result: CustomPageWithoutHTML }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a custom page
   */
  update(customPageId: string, params: CustomPageUpdateParams, options?: Core.RequestOptions): Core.APIPromise<CustomPageWithoutHTML> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/access/custom_pages/${customPageId}`, { body, ...options }) as Core.APIPromise<{ result: CustomPageWithoutHTML }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List custom pages
   */
  list(params: CustomPageListParams, options?: Core.RequestOptions): Core.PagePromise<CustomPageWithoutHTMLsSinglePage, CustomPageWithoutHTML> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/access/custom_pages`, CustomPageWithoutHTMLsSinglePage, options);
  }

  /**
   * Delete a custom page
   */
  delete(customPageId: string, params: CustomPageDeleteParams, options?: Core.RequestOptions): Core.APIPromise<CustomPageDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/access/custom_pages/${customPageId}`, options) as Core.APIPromise<{ result: CustomPageDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a custom page and also returns its HTML.
   */
  get(customPageId: string, params: CustomPageGetParams, options?: Core.RequestOptions): Core.APIPromise<CustomPage> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/access/custom_pages/${customPageId}`, options) as Core.APIPromise<{ result: CustomPage }>)._thenUnwrap((obj) => obj.result);
  }
}

export class CustomPageWithoutHTMLsSinglePage extends SinglePage<CustomPageWithoutHTML> {
}

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
   * UUID
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
   * UUID
   */
  uid?: string;

  updated_at?: string;
}

export interface CustomPageDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface CustomPageCreateParams {
  /**
   * Path param: Identifier
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

  /**
   * Body param: UUID
   */
  uid?: string;
}

export interface CustomPageUpdateParams {
  /**
   * Path param: Identifier
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

  /**
   * Body param: UUID
   */
  uid?: string;
}

export interface CustomPageListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface CustomPageDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface CustomPageGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace CustomPages {
  export import CustomPage = CustomPagesAPI.CustomPage;
  export import CustomPageWithoutHTML = CustomPagesAPI.CustomPageWithoutHTML;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageWithoutHTMLsSinglePage = CustomPagesAPI.CustomPageWithoutHTMLsSinglePage;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export import CustomPageListParams = CustomPagesAPI.CustomPageListParams;
  export import CustomPageDeleteParams = CustomPagesAPI.CustomPageDeleteParams;
  export import CustomPageGetParams = CustomPagesAPI.CustomPageGetParams;
}
