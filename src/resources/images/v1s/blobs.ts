// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';

export class Blobs extends APIResource {
  /**
   * Fetch base image. For most images this will be the originally uploaded file. For
   * larger images it can be a near-lossless version of the original.
   */
  cloudflareImagesBaseImage(
    accountId: string,
    imageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/accounts/${accountId}/images/v1/${imageId}/blob`, {
      ...options,
      __binaryResponse: true,
    });
  }
}
