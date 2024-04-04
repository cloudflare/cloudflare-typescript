// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ImageResizingAPI from 'cloudflare/resources/zones/settings/image-resizing';

export class ImageResizingResource extends APIResource {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  edit(params: ImageResizingEditParams, options?: Core.RequestOptions): Core.APIPromise<ImageResizing> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/image_resizing`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ImageResizing }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  get(params: ImageResizingGetParams, options?: Core.RequestOptions): Core.APIPromise<ImageResizing> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/image_resizing`, options) as Core.APIPromise<{
        result: ImageResizing;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export interface ImageResizingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Image Resizing provides on-demand resizing, conversion and
   * optimisation for images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  value: ImageResizing;
}

export interface ImageResizingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ImageResizingResource {
  export import ImageResizing = ImageResizingAPI.ImageResizing;
  export import ImageResizingEditParams = ImageResizingAPI.ImageResizingEditParams;
  export import ImageResizingGetParams = ImageResizingAPI.ImageResizingGetParams;
}
