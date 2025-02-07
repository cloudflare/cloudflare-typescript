// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { APIPromise } from '../../../../../api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class AssetUpload extends APIResource {
  /**
   * Start uploading a collection of assets for use in a Worker version. To learn
   * more about the direct uploads of assets, see
   * https://developers.cloudflare.com/workers/static-assets/direct-upload/
   */
  create(
    scriptName: string,
    params: AssetUploadCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssetUploadCreateResponse> {
    const { account_id, dispatch_namespace, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/assets-upload-session`,
        { body, ...options },
      ) as APIPromise<{ result: AssetUploadCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AssetUploadCreateResponse {
  /**
   * The requests to make to upload assets.
   */
  buckets?: Array<Array<string>>;

  /**
   * A JWT to use as authentication for uploading assets.
   */
  jwt?: string;
}

export interface AssetUploadCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

  /**
   * Body param: A manifest ([path]: {hash, size}) map of files to upload. As an
   * example, `/blog/hello-world.html` would be a valid path key.
   */
  manifest?: Record<string, AssetUploadCreateParams.Manifest>;
}

export namespace AssetUploadCreateParams {
  export interface Manifest {
    /**
     * The hash of the file.
     */
    hash?: string;

    /**
     * The size of the file in bytes.
     */
    size?: number;
  }
}

export declare namespace AssetUpload {
  export {
    type AssetUploadCreateResponse as AssetUploadCreateResponse,
    type AssetUploadCreateParams as AssetUploadCreateParams,
  };
}
