// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as VariantsAPI from './variants';

export class Variants extends APIResource {
  /**
   * Specify variants that allow you to resize images for different use cases.
   */
  create(params: VariantCreateParams, options?: Core.RequestOptions): Core.APIPromise<VariantCreateResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/images/v1/variants`, { body, ...options }) as Core.APIPromise<{ result: VariantCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing variants.
   */
  list(params: VariantListParams, options?: Core.RequestOptions): Core.APIPromise<Variant> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/images/v1/variants`, options) as Core.APIPromise<{ result: Variant }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deleting a variant purges the cache for all images associated with the variant.
   */
  delete(variantId: string, params: VariantDeleteParams, options?: Core.RequestOptions): Core.APIPromise<VariantDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/images/v1/variants/${variantId}`, options) as Core.APIPromise<{ result: VariantDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updating a variant purges the cache for all images associated with the variant.
   */
  edit(variantId: string, params: VariantEditParams, options?: Core.RequestOptions): Core.APIPromise<VariantEditResponse> {
    const { account_id, ...body } = params;
    return (this._client.patch(`/accounts/${account_id}/images/v1/variants/${variantId}`, { body, ...options }) as Core.APIPromise<{ result: VariantEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch details for a single variant.
   */
  get(variantId: string, params: VariantGetParams, options?: Core.RequestOptions): Core.APIPromise<VariantGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/images/v1/variants/${variantId}`, options) as Core.APIPromise<{ result: VariantGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface Variant {
  variants?: Variant.Variants;
}

export namespace Variant {
  export interface Variants {
    hero?: Variants.Hero;
  }

  export namespace Variants {
    export interface Hero {
      id: string;

      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      options: Hero.Options;

      /**
       * Indicates whether the variant can access an image without a signature,
       * regardless of image access control.
       */
      neverRequireSignedURLs?: boolean;
    }

    export namespace Hero {
      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      export interface Options {
        /**
         * The fit property describes how the width and height dimensions should be
         * interpreted.
         */
        fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

        /**
         * Maximum height in image pixels.
         */
        height: number;

        /**
         * What EXIF data should be preserved in the output image.
         */
        metadata: 'keep' | 'copyright' | 'none';

        /**
         * Maximum width in image pixels.
         */
        width: number;
      }
    }
  }
}

export interface VariantCreateResponse {
  variant?: VariantCreateResponse.Variant;
}

export namespace VariantCreateResponse {
  export interface Variant {
    id: string;

    /**
     * Allows you to define image resizing sizes for different use cases.
     */
    options: Variant.Options;

    /**
     * Indicates whether the variant can access an image without a signature,
     * regardless of image access control.
     */
    neverRequireSignedURLs?: boolean;
  }

  export namespace Variant {
    /**
     * Allows you to define image resizing sizes for different use cases.
     */
    export interface Options {
      /**
       * The fit property describes how the width and height dimensions should be
       * interpreted.
       */
      fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

      /**
       * Maximum height in image pixels.
       */
      height: number;

      /**
       * What EXIF data should be preserved in the output image.
       */
      metadata: 'keep' | 'copyright' | 'none';

      /**
       * Maximum width in image pixels.
       */
      width: number;
    }
  }
}

export type VariantDeleteResponse = unknown | string

export interface VariantEditResponse {
  variant?: VariantEditResponse.Variant;
}

export namespace VariantEditResponse {
  export interface Variant {
    id: string;

    /**
     * Allows you to define image resizing sizes for different use cases.
     */
    options: Variant.Options;

    /**
     * Indicates whether the variant can access an image without a signature,
     * regardless of image access control.
     */
    neverRequireSignedURLs?: boolean;
  }

  export namespace Variant {
    /**
     * Allows you to define image resizing sizes for different use cases.
     */
    export interface Options {
      /**
       * The fit property describes how the width and height dimensions should be
       * interpreted.
       */
      fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

      /**
       * Maximum height in image pixels.
       */
      height: number;

      /**
       * What EXIF data should be preserved in the output image.
       */
      metadata: 'keep' | 'copyright' | 'none';

      /**
       * Maximum width in image pixels.
       */
      width: number;
    }
  }
}

export interface VariantGetResponse {
  variant?: VariantGetResponse.Variant;
}

export namespace VariantGetResponse {
  export interface Variant {
    id: string;

    /**
     * Allows you to define image resizing sizes for different use cases.
     */
    options: Variant.Options;

    /**
     * Indicates whether the variant can access an image without a signature,
     * regardless of image access control.
     */
    neverRequireSignedURLs?: boolean;
  }

  export namespace Variant {
    /**
     * Allows you to define image resizing sizes for different use cases.
     */
    export interface Options {
      /**
       * The fit property describes how the width and height dimensions should be
       * interpreted.
       */
      fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

      /**
       * Maximum height in image pixels.
       */
      height: number;

      /**
       * What EXIF data should be preserved in the output image.
       */
      metadata: 'keep' | 'copyright' | 'none';

      /**
       * Maximum width in image pixels.
       */
      width: number;
    }
  }
}

export interface VariantCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param: Allows you to define image resizing sizes for different use cases.
   */
  options: VariantCreateParams.Options;

  /**
   * Body param: Indicates whether the variant can access an image without a
   * signature, regardless of image access control.
   */
  neverRequireSignedURLs?: boolean;
}

export namespace VariantCreateParams {
  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  export interface Options {
    /**
     * The fit property describes how the width and height dimensions should be
     * interpreted.
     */
    fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

    /**
     * Maximum height in image pixels.
     */
    height: number;

    /**
     * What EXIF data should be preserved in the output image.
     */
    metadata: 'keep' | 'copyright' | 'none';

    /**
     * Maximum width in image pixels.
     */
    width: number;
  }
}

export interface VariantListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface VariantDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface VariantEditParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Allows you to define image resizing sizes for different use cases.
   */
  options: VariantEditParams.Options;

  /**
   * Body param: Indicates whether the variant can access an image without a
   * signature, regardless of image access control.
   */
  neverRequireSignedURLs?: boolean;
}

export namespace VariantEditParams {
  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  export interface Options {
    /**
     * The fit property describes how the width and height dimensions should be
     * interpreted.
     */
    fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

    /**
     * Maximum height in image pixels.
     */
    height: number;

    /**
     * What EXIF data should be preserved in the output image.
     */
    metadata: 'keep' | 'copyright' | 'none';

    /**
     * Maximum width in image pixels.
     */
    width: number;
  }
}

export interface VariantGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace Variants {
  export import Variant = VariantsAPI.Variant;
  export import VariantCreateResponse = VariantsAPI.VariantCreateResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantEditResponse = VariantsAPI.VariantEditResponse;
  export import VariantGetResponse = VariantsAPI.VariantGetResponse;
  export import VariantCreateParams = VariantsAPI.VariantCreateParams;
  export import VariantListParams = VariantsAPI.VariantListParams;
  export import VariantDeleteParams = VariantsAPI.VariantDeleteParams;
  export import VariantEditParams = VariantsAPI.VariantEditParams;
  export import VariantGetParams = VariantsAPI.VariantGetParams;
}
