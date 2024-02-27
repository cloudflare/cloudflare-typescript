// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ImageResizingAPI from 'cloudflare/resources/zones/settings/image-resizing';

export class ImageResizing extends APIResource {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  edit(
    params: ImageResizingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageResizingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/image_resizing`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ImageResizingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  get(
    params: ImageResizingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageResizingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/image_resizing`, options) as Core.APIPromise<{
        result: ImageResizingGetResponse;
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
export interface ImageResizingEditResponse {
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

/**
 * Image Resizing provides on-demand resizing, conversion and optimisation for
 * images served through Cloudflare's network. Refer to the
 * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
 * more information.
 */
export interface ImageResizingGetResponse {
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
  value: ImageResizingEditParams.Value;
}

export namespace ImageResizingEditParams {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: 'image_resizing';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'open';
  }
}

export interface ImageResizingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ImageResizing {
  export import ImageResizingEditResponse = ImageResizingAPI.ImageResizingEditResponse;
  export import ImageResizingGetResponse = ImageResizingAPI.ImageResizingGetResponse;
  export import ImageResizingEditParams = ImageResizingAPI.ImageResizingEditParams;
  export import ImageResizingGetParams = ImageResizingAPI.ImageResizingGetParams;
}
