// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BookmarksAPI from 'cloudflare/resources/access/bookmarks';

export class Bookmarks extends APIResource {
  /**
   * Lists Bookmark applications.
   */
  list(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<BookmarkListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/access/bookmarks`, options) as Core.APIPromise<{
        result: BookmarkListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a Bookmark application.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkDeleteResponse> {
    return (
      this._client.delete(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: BookmarkDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Bookmark application.
   */
  get(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkGetResponse> {
    return (
      this._client.get(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: BookmarkGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Bookmark application.
   */
  replace(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkReplaceResponse> {
    return (
      this._client.put(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: BookmarkReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BookmarkListResponse = Array<BookmarkListResponse.BookmarkListResponseItem>;

export namespace BookmarkListResponse {
  export interface BookmarkListResponseItem {
    /**
     * The unique identifier for the Bookmark application.
     */
    id?: unknown;

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
}

export interface BookmarkDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface BookmarkGetResponse {
  /**
   * The unique identifier for the Bookmark application.
   */
  id?: unknown;

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

export interface BookmarkReplaceResponse {
  /**
   * The unique identifier for the Bookmark application.
   */
  id?: unknown;

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

export namespace Bookmarks {
  export import BookmarkListResponse = BookmarksAPI.BookmarkListResponse;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarkGetResponse = BookmarksAPI.BookmarkGetResponse;
  export import BookmarkReplaceResponse = BookmarksAPI.BookmarkReplaceResponse;
}
