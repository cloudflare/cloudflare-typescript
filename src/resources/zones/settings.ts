// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Settings extends APIResource {}

export interface OriginMaxHTTPVersion {
  /**
   * The identifier of the caching setting.
   */
  id: 'origin_max_http_version';

  /**
   * Whether the setting is editable.
   */
  editable: boolean;

  /**
   * Value of the Origin Max HTTP Version Setting.
   */
  value: '2' | '1';

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export declare namespace Settings {
  export { type OriginMaxHTTPVersion as OriginMaxHTTPVersion };
}
