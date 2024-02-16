// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ImageResizingAPI from 'cloudflare/resources/settings/image-resizing';

export class ImageResizing extends APIResource {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  update(
    zoneId: string,
    body: ImageResizingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageResizingUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/image_resizing`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ImageResizingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ImageResizingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/image_resizing`, options) as Core.APIPromise<{
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
export interface ImageResizingUpdateResponse {
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

export interface ImageResizingUpdateParams {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  value: ImageResizingUpdateParams.Value;
}

export namespace ImageResizingUpdateParams {
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

export namespace ImageResizing {
  export import ImageResizingUpdateResponse = ImageResizingAPI.ImageResizingUpdateResponse;
  export import ImageResizingGetResponse = ImageResizingAPI.ImageResizingGetResponse;
  export import ImageResizingUpdateParams = ImageResizingAPI.ImageResizingUpdateParams;
}
