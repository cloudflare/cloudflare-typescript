// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DirectUploadsAPI from 'cloudflare/resources/stream/direct-uploads';

export class DirectUploads extends APIResource {
  /**
   * Creates a direct upload that allows video uploads without an API key.
   */
  create(
    params: DirectUploadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DirectUploadCreateResponse> {
    const { account_id, 'Upload-Creator': uploadCreator, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/direct_upload`, {
        body,
        ...options,
        headers: { 'Upload-Creator': uploadCreator || '', ...options?.headers },
      }) as Core.APIPromise<{ result: DirectUploadCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DirectUploadCreateResponse {
  /**
   * Indicates the date and time at which the video will be deleted. Omit the field
   * to indicate no change, or include with a `null` value to remove an existing
   * scheduled deletion. If specified, must be at least 30 days from upload time.
   */
  scheduledDeletion?: string;

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  uid?: string;

  /**
   * The URL an unauthenticated upload can use for a single
   * `HTTP POST multipart/form-data` request.
   */
  uploadURL?: string;

  watermark?: DirectUploadCreateResponse.Watermark;
}

export namespace DirectUploadCreateResponse {
  export interface Watermark {
    /**
     * The date and a time a watermark profile was created.
     */
    created?: string;

    /**
     * The source URL for a downloaded image. If the watermark profile was created via
     * direct upload, this field is null.
     */
    downloadedFrom?: string;

    /**
     * The height of the image in pixels.
     */
    height?: number;

    /**
     * A short description of the watermark profile.
     */
    name?: string;

    /**
     * The translucency of the image. A value of `0.0` makes the image completely
     * transparent, and `1.0` makes the image completely opaque. Note that if the image
     * is already semi-transparent, setting this to `1.0` will not make the image
     * completely opaque.
     */
    opacity?: number;

    /**
     * The whitespace between the adjacent edges (determined by position) of the video
     * and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded
     * video width or length, as determined by the algorithm.
     */
    padding?: number;

    /**
     * The location of the image. Valid positions are: `upperRight`, `upperLeft`,
     * `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the
     * `padding` parameter.
     */
    position?: string;

    /**
     * The size of the image relative to the overall size of the video. This parameter
     * will adapt to horizontal and vertical videos automatically. `0.0` indicates no
     * scaling (use the size of the image as-is), and `1.0 `fills the entire video.
     */
    scale?: number;

    /**
     * The size of the image in bytes.
     */
    size?: number;

    /**
     * The unique identifier for a watermark profile.
     */
    uid?: string;

    /**
     * The width of the image in pixels.
     */
    width?: number;
  }
}

export interface DirectUploadCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The maximum duration in seconds for a video upload. Can be set for a
   * video that is not yet uploaded to limit its duration. Uploads that exceed the
   * specified duration will fail during processing. A value of `-1` means the value
   * is unknown.
   */
  maxDurationSeconds: number;

  /**
   * Body param: Lists the origins allowed to display the video. Enter allowed origin
   * domains in an array and use `*` for wildcard subdomains. Empty arrays allow the
   * video to be viewed on any origin.
   */
  allowedOrigins?: Array<string>;

  /**
   * Body param: A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Body param: The date and time after upload when videos will not be accepted.
   */
  expiry?: string;

  /**
   * Body param: A user modifiable key-value store used to reference other systems of
   * record for managing videos.
   */
  meta?: unknown;

  /**
   * Body param: Indicates whether the video can be a accessed using the UID. When
   * set to `true`, a signed token must be generated with a signing key to view the
   * video.
   */
  requireSignedURLs?: boolean;

  /**
   * Body param: Indicates the date and time at which the video will be deleted. Omit
   * the field to indicate no change, or include with a `null` value to remove an
   * existing scheduled deletion. If specified, must be at least 30 days from upload
   * time.
   */
  scheduledDeletion?: string;

  /**
   * Body param: The timestamp for a thumbnail image calculated as a percentage value
   * of the video's duration. To convert from a second-wise timestamp to a
   * percentage, divide the desired timestamp by the total duration of the video. If
   * this value is not set, the default thumbnail image is taken from 0s of the
   * video.
   */
  thumbnailTimestampPct?: number;

  /**
   * Body param:
   */
  watermark?: DirectUploadCreateParams.Watermark;

  /**
   * Header param: A user-defined identifier for the media creator.
   */
  'Upload-Creator'?: string;
}

export namespace DirectUploadCreateParams {
  export interface Watermark {
    /**
     * The unique identifier for the watermark profile.
     */
    uid?: string;
  }
}

export namespace DirectUploads {
  export import DirectUploadCreateResponse = DirectUploadsAPI.DirectUploadCreateResponse;
  export import DirectUploadCreateParams = DirectUploadsAPI.DirectUploadCreateParams;
}
