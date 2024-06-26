// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ResponseBufferingAPI from './response-buffering';

export class ResponseBufferingResource extends APIResource {}

/**
 * Enables or disables buffering of responses from the proxied server. Cloudflare
 * may buffer the whole payload to deliver it at once to the client versus allowing
 * it to be delivered in chunks. By default, the proxied server streams directly
 * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
 */
export interface ResponseBuffering {
  /**
   * ID of the zone setting.
   */
  id: 'response_buffering';

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

export namespace ResponseBufferingResource {
  export import ResponseBuffering = ResponseBufferingAPI.ResponseBuffering;
}
