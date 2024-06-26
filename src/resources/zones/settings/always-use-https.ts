// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AlwaysUseHTTPSAPI from './always-use-https';

export class AlwaysUseHTTPS extends APIResource {}

/**
 * Reply to all requests for URLs that use "http" with a 301 redirect to the
 * equivalent "https" URL. If you only want to redirect for a subset of requests,
 * consider creating an "Always use HTTPS" page rule.
 */
export interface AlwaysUseHTTPS {
  /**
   * ID of the zone setting.
   */
  id: 'always_use_https';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export namespace AlwaysUseHTTPS {
  export import AlwaysUseHTTPS = AlwaysUseHTTPSAPI.AlwaysUseHTTPS;
}
