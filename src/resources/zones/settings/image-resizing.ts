// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ImageResizingAPI from './image-resizing';

export class ImageResizingResource extends APIResource {}

/**
 * Image Resizing provides on-demand resizing, conversion and optimisation for
 * images served through Cloudflare's network. Refer to the
 * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
 * more information.
 */
export interface ImageResizing {
  /**
   * ID of the zone setting.
   */
  id: 'image_resizing';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off' | 'open';

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

export namespace ImageResizingResource {
  export import ImageResizing = ImageResizingAPI.ImageResizing;
}
