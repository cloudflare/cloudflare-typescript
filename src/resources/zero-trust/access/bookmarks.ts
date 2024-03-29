// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BookmarksAPI from 'cloudflare/resources/zero-trust/access/bookmarks';

export class Bookmarks extends APIResource {
  /**
   * Create a new Bookmark application.
   */
  create(identifier: string, uuid: string, options?: Core.RequestOptions): Core.APIPromise<AccessBookmarks> {
    return (
      this._client.post(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: AccessBookmarks;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Bookmark application.
   */
  update(identifier: string, uuid: string, options?: Core.RequestOptions): Core.APIPromise<AccessBookmarks> {
    return (
      this._client.put(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: AccessBookmarks;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Bookmark applications.
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<BookmarkListResponse | null> {
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
    identifier: string,
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
  get(identifier: string, uuid: string, options?: Core.RequestOptions): Core.APIPromise<AccessBookmarks> {
    return (
      this._client.get(`/accounts/${identifier}/access/bookmarks/${uuid}`, options) as Core.APIPromise<{
        result: AccessBookmarks;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccessBookmarks {
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

export type BookmarkListResponse = Array<AccessBookmarks>;

export interface BookmarkDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export namespace Bookmarks {
  export import AccessBookmarks = BookmarksAPI.AccessBookmarks;
  export import BookmarkListResponse = BookmarksAPI.BookmarkListResponse;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
}
