// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Blobs extends APIResource {
  /**
   * Fetch base image. For most images this will be the originally uploaded file. For
   * larger images it can be a near-lossless version of the original.
   */
  get(imageID: string, params: BlobGetParams, options?: RequestOptions): APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/images/v1/${imageID}/blob`, {
      ...options,
      headers: buildHeaders([{ Accept: 'image/*' }, options?.headers]),
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

export declare namespace Blobs {
  export { type BlobGetParams as BlobGetParams };
}
