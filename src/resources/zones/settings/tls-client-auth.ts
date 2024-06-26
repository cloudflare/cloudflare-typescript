// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TLSClientAuthAPI from './tls-client-auth';

export class TLSClientAuthResource extends APIResource {}

/**
 * TLS Client Auth requires Cloudflare to connect to your origin server using a
 * client certificate (Enterprise Only).
 */
export interface TLSClientAuth {
  /**
   * ID of the zone setting.
   */
  id: 'tls_client_auth';

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

export namespace TLSClientAuthResource {
  export import TLSClientAuth = TLSClientAuthAPI.TLSClientAuth;
}
