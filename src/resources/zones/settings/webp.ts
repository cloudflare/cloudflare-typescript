// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as WebPAPI from './webp';

export class WebPResource extends APIResource {}

/**
 * When the client requesting the image supports the WebP image codec, and WebP
 * offers a performance advantage over the original image format, Cloudflare will
 * serve a WebP version of the original image.
 */
export interface WebP {
  /**
   * ID of the zone setting.
   */
  id: 'webp';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';

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

export namespace WebPResource {
  export import WebP = WebPAPI.WebP;
}
