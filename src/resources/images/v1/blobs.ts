// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BlobsAPI from './blobs';
import { type Response } from '../../../_shims/index';

export class Blobs extends APIResource {
  /**
   * Fetch base image. For most images this will be the originally uploaded file. For
   * larger images it can be a near-lossless version of the original.
   */
  get(imageId: string, params: BlobGetParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/images/v1/${imageId}/blob`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface BlobGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace Blobs {
  export import BlobGetParams = BlobsAPI.BlobGetParams;
}
