// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Bookmarks extends APIResource {
  /**
   * Create a new Bookmark application.
   *
   * @example
   * ```ts
   * const bookmark =
   *   await client.zeroTrust.access.bookmarks.create(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       body: {},
   *     },
   *   );
   * ```
   */
  create(bookmarkID: string, params: BookmarkCreateParams, options?: RequestOptions): APIPromise<Bookmark> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/bookmarks/${bookmarkID}`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: Bookmark }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Bookmark application.
   *
   * @example
   * ```ts
   * const bookmark =
   *   await client.zeroTrust.access.bookmarks.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       body: {},
   *     },
   *   );
   * ```
   */
  update(bookmarkID: string, params: BookmarkUpdateParams, options?: RequestOptions): APIPromise<Bookmark> {
    const { account_id, body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/access/bookmarks/${bookmarkID}`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: Bookmark }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Bookmark applications.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bookmark of client.zeroTrust.access.bookmarks.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(params: BookmarkListParams, options?: RequestOptions): PagePromise<BookmarksSinglePage, Bookmark> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/bookmarks`,
      SinglePage<Bookmark>,
      options,
    );
  }

  /**
   * Deletes a Bookmark application.
   *
   * @example
   * ```ts
   * const bookmark =
   *   await client.zeroTrust.access.bookmarks.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  delete(
    bookmarkID: string,
    params: BookmarkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BookmarkDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/access/bookmarks/${bookmarkID}`,
        options,
      ) as APIPromise<{ result: BookmarkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Bookmark application.
   *
   * @example
   * ```ts
   * const bookmark =
   *   await client.zeroTrust.access.bookmarks.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(bookmarkID: string, params: BookmarkGetParams, options?: RequestOptions): APIPromise<Bookmark> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/access/bookmarks/${bookmarkID}`, options) as APIPromise<{
        result: Bookmark;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BookmarksSinglePage = SinglePage<Bookmark>;

export interface Bookmark {
  /**
   * The unique identifier for the Bookmark application.
   */
  id?: string;

  /**
   * Displays the application in the App Launcher.
   */
  app_launcher_visible?: boolean;

  created_at?: string;

  /**
   * The domain of the Bookmark application.
   */
  domain?: string;

  /**
   * The image URL for the logo shown in the App Launcher dashboard.
   */
  logo_url?: string;

  /**
   * The name of the Bookmark application.
   */
  name?: string;

  updated_at?: string;
}

export interface BookmarkDeleteResponse {
  /**
   * UUID.
   */
  id?: string;
}

export interface BookmarkCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface BookmarkUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface BookmarkListParams {
  account_id: string;
}

export interface BookmarkDeleteParams {
  account_id: string;
}

export interface BookmarkGetParams {
  account_id: string;
}

export declare namespace Bookmarks {
  export {
    type Bookmark as Bookmark,
    type BookmarkDeleteResponse as BookmarkDeleteResponse,
    type BookmarksSinglePage as BookmarksSinglePage,
    type BookmarkCreateParams as BookmarkCreateParams,
    type BookmarkUpdateParams as BookmarkUpdateParams,
    type BookmarkListParams as BookmarkListParams,
    type BookmarkDeleteParams as BookmarkDeleteParams,
    type BookmarkGetParams as BookmarkGetParams,
  };
}
