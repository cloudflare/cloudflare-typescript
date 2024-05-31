// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BookmarksAPI from './bookmarks';

export class Bookmarks extends APIResource {}

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

export namespace Bookmarks {
  export import Bookmark = BookmarksAPI.Bookmark;
}
