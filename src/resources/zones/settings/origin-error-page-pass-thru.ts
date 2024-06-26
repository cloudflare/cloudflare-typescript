// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OriginErrorPagePassThruAPI from './origin-error-page-pass-thru';

export class OriginErrorPagePassThruResource extends APIResource {}

/**
 * Cloudflare will proxy customer error pages on any 502,504 errors on origin
 * server instead of showing a default Cloudflare error page. This does not apply
 * to 522 errors and is limited to Enterprise Zones.
 */
export interface OriginErrorPagePassThru {
  /**
   * ID of the zone setting.
   */
  id: 'origin_error_page_pass_thru';

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

export namespace OriginErrorPagePassThruResource {
  export import OriginErrorPagePassThru = OriginErrorPagePassThruAPI.OriginErrorPagePassThru;
}
