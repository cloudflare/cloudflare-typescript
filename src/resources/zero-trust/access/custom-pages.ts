// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomPagesAPI from 'cloudflare/resources/zero-trust/access/custom-pages';

export class CustomPages extends APIResource {
  /**
   * Create a custom page
   */
  create(
    identifier: string,
    body: CustomPageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessCustomPageWithoutHTML> {
    return (
      this._client.post(`/accounts/${identifier}/access/custom_pages`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessCustomPageWithoutHTML }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a custom page
   */
  update(
    identifier: string,
    uuid: string,
    body: CustomPageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessCustomPageWithoutHTML> {
    return (
      this._client.put(`/accounts/${identifier}/access/custom_pages/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccessCustomPageWithoutHTML }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List custom pages
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<CustomPageListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/access/custom_pages`, options) as Core.APIPromise<{
        result: CustomPageListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a custom page
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageDeleteResponse> {
    return (
      this._client.delete(`/accounts/${identifier}/access/custom_pages/${uuid}`, options) as Core.APIPromise<{
        result: CustomPageDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a custom page and also returns its HTML.
   */
  get(identifier: string, uuid: string, options?: Core.RequestOptions): Core.APIPromise<AccessCustomPage> {
    return (
      this._client.get(`/accounts/${identifier}/access/custom_pages/${uuid}`, options) as Core.APIPromise<{
        result: AccessCustomPage;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccessCustomPage {
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

export interface AccessCustomPageWithoutHTML {
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

export type CustomPageListResponse = Array<AccessCustomPageWithoutHTML>;

export interface CustomPageDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface CustomPageCreateParams {
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
}

export interface CustomPageUpdateParams {
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
}

export namespace CustomPages {
  export import AccessCustomPage = CustomPagesAPI.AccessCustomPage;
  export import AccessCustomPageWithoutHTML = CustomPagesAPI.AccessCustomPageWithoutHTML;
  export import CustomPageListResponse = CustomPagesAPI.CustomPageListResponse;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
}
