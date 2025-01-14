// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Upload extends APIResource {
  /**
   * Upload assets ahead of creating a Worker version. To learn more about the direct
   * uploads of assets, see
   * https://developers.cloudflare.com/workers/static-assets/direct-upload/
   */
  create(params: UploadCreateParams, options?: Core.RequestOptions): Core.APIPromise<UploadCreateResponse> {
    const { account_id, base64, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/workers/assets/upload`,
        Core.multipartFormRequestOptions({ query: { base64 }, body, ...options }),
      ) as Core.APIPromise<{ result: UploadCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UploadCreateResponse {
  /**
   * A "completion" JWT which can be redeemed when creating a Worker version.
   */
  jwt?: string;
}

export interface UploadCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Whether the file contents are base64-encoded. Must be `true`.
   */
  base64: true;

  /**
   * Body param: Base-64 encoded contents of the file. The content type of the file
   * should be included to ensure a valid "Content-Type" header is included in asset
   * responses.
   */
  '<any file hash>'?: Array<string>;
}

export declare namespace Upload {
  export { type UploadCreateResponse as UploadCreateResponse, type UploadCreateParams as UploadCreateParams };
}
