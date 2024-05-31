// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TagsAPI from './tags';

export class Tags extends APIResource {}

/**
 * A tag
 */
export interface Tag {
  /**
   * The name of the tag
   */
  name: string;

  /**
   * The number of applications that have this tag
   */
  app_count?: number;

  created_at?: string;

  updated_at?: string;
}

export namespace Tags {
  export import Tag = TagsAPI.Tag;
}
