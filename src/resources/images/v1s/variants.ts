// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VariantsAPI from 'cloudflare/resources/images/v1s/variants';

export class Variants extends APIResource {
  /**
   * Specify variants that allow you to resize images for different use cases.
   */
  create(
    accountId: string,
    body: VariantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/images/v1/variants`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VariantCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updating a variant purges the cache for all images associated with the variant.
   */
  update(
    accountId: string,
    variantId: unknown,
    body: VariantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/images/v1/variants/${variantId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VariantUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing variants.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<VariantListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/images/v1/variants`, options) as Core.APIPromise<{
        result: VariantListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deleting a variant purges the cache for all images associated with the variant.
   */
  delete(
    accountId: string,
    variantId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/images/v1/variants/${variantId}`,
        options,
      ) as Core.APIPromise<{ result: VariantDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch details for a single variant.
   */
  get(
    accountId: string,
    variantId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/images/v1/variants/${variantId}`, options) as Core.APIPromise<{
        result: VariantGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface VariantCreateResponse {
  variant?: VariantCreateResponse.Variant;
}

export namespace VariantCreateResponse {
  export interface Variant {
    id: unknown;

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

export interface VariantUpdateResponse {
  variant?: VariantUpdateResponse.Variant;
}

export namespace VariantUpdateResponse {
  export interface Variant {
    id: unknown;

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

export interface VariantListResponse {
  variants?: VariantListResponse.Variants;
}

export namespace VariantListResponse {
  export interface Variants {
    hero?: Variants.Hero;
  }

  export namespace Variants {
    export interface Hero {
      id: unknown;

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

export type VariantDeleteResponse = unknown | string;

export interface VariantGetResponse {
  variant?: VariantGetResponse.Variant;
}

export namespace VariantGetResponse {
  export interface Variant {
    id: unknown;

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
  id: unknown;

  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  options: VariantCreateParams.Options;

  /**
   * Indicates whether the variant can access an image without a signature,
   * regardless of image access control.
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

export interface VariantUpdateParams {
  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  options: VariantUpdateParams.Options;

  /**
   * Indicates whether the variant can access an image without a signature,
   * regardless of image access control.
   */
  neverRequireSignedURLs?: boolean;
}

export namespace VariantUpdateParams {
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

export namespace Variants {
  export import VariantCreateResponse = VariantsAPI.VariantCreateResponse;
  export import VariantUpdateResponse = VariantsAPI.VariantUpdateResponse;
  export import VariantListResponse = VariantsAPI.VariantListResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantGetResponse = VariantsAPI.VariantGetResponse;
  export import VariantCreateParams = VariantsAPI.VariantCreateParams;
  export import VariantUpdateParams = VariantsAPI.VariantUpdateParams;
}
