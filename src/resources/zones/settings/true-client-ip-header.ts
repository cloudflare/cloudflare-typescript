// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TrueClientIPHeaderAPI from './true-client-ip-header';

export class TrueClientIPHeaderResource extends APIResource {}

/**
 * Allows customer to continue to use True Client IP (Akamai feature) in the
 * headers we send to the origin. This is limited to Enterprise Zones.
 */
export interface TrueClientIPHeader {
  /**
   * ID of the zone setting.
   */
  id: 'true_client_ip_header';

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

export namespace TrueClientIPHeaderResource {
  export import TrueClientIPHeader = TrueClientIPHeaderAPI.TrueClientIPHeader;
}
