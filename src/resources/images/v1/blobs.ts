// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { type Response } from '../../../_shims/index';

export class Blobs extends APIResource {
  /**
   * Fetch base image. For most images this will be the originally uploaded file. For
   * larger images it can be a near-lossless version of the original.
   *
   * @example
   * ```ts
   * const blob = await client.images.v1.blobs.get('image_id', {
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   *
   * const content = await blob.blob();
   * console.log(content);
   * ```
   */
  get(imageId: string, params?: BlobGetParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  get(imageId: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  get(
    imageId: string,
    params: BlobGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(params)) {
      return this.get(imageId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/images/v1/${imageId}/blob`, {
      ...options,
      headers: { Accept: 'image/*', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface BlobGetParams {
  /**
   * Account identifier tag.
   */
  account_id?: string;
}

export declare namespace Blobs {
  export { type BlobGetParams as BlobGetParams };
}
