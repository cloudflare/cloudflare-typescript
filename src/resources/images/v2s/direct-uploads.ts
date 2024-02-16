// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DirectUploadsAPI from 'cloudflare/resources/images/v2s/direct-uploads';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class DirectUploads extends APIResource {
  /**
   * Direct uploads allow users to upload images without API keys. A common use case
   * are web apps, client-side applications, or mobile devices where users upload
   * content directly to Cloudflare Images. This method creates a draft record for a
   * future image. It returns an upload URL and an image identifier. To verify if the
   * image itself has been uploaded, send an image details request
   * (accounts/:account_identifier/images/v1/:identifier), and check that the
   * `draft: true` property is not present.
   */
  cloudflareImagesCreateAuthenticatedDirectUploadURLV2(
    accountId: string,
    body: DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response> {
    return (
      this._client.post(
        `/accounts/${accountId}/images/v2/direct_upload`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{
        result: DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response {
  /**
   * Image unique identifier.
   */
  id?: string;

  /**
   * The URL the unauthenticated upload can be performed to using a single HTTP POST
   * (multipart/form-data) request.
   */
  uploadURL?: string;
}

export interface DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params {
  /**
   * The date after which the upload will not be accepted. Minimum: Now + 2 minutes.
   * Maximum: Now + 6 hours.
   */
  expiry?: string;

  /**
   * User modifiable key-value store. Can be used for keeping references to another
   * system of record, for managing images.
   */
  metadata?: unknown;

  /**
   * Indicates whether the image requires a signature token to be accessed.
   */
  requireSignedURLs?: boolean;
}

export namespace DirectUploads {
  export import DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response = DirectUploadsAPI.DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response;
  export import DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params = DirectUploadsAPI.DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params;
}
