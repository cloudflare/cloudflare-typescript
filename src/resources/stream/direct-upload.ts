// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as DirectUploadAPI from './direct-upload';
import * as StreamAPI from './stream';
import * as WatermarksAPI from './watermarks';

export class DirectUpload extends APIResource {
  /**
   * Creates a direct upload that allows video uploads without an API key.
   */
  create(params: DirectUploadCreateParams, options?: Core.RequestOptions): Core.APIPromise<DirectUploadCreateResponse> {
    const { account_id, 'Upload-Creator': uploadCreator, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/stream/direct_upload`, { body, ...options, headers: { ...(uploadCreator != null ? { 'Upload-Creator': uploadCreator } : undefined), ...options?.headers } }) as Core.APIPromise<{ result: DirectUploadCreateResponse }>)._thenUnwrap((obj) => obj.result);
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

  watermark?: WatermarksAPI.Watermark;
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
  allowedOrigins?: Array<StreamAPI.AllowedOriginsParam>;

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

export namespace DirectUpload {
  export import DirectUploadCreateResponse = DirectUploadAPI.DirectUploadCreateResponse;
  export import DirectUploadCreateParams = DirectUploadAPI.DirectUploadCreateParams;
}
