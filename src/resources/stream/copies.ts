// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CopiesAPI from 'cloudflare/resources/stream/copies';

export class Copies extends APIResource {
  /**
   * Uploads a video to Stream from a provided URL.
   */
  streamVideosUploadVideosFromAURL(
    accountId: string,
    params: CopyStreamVideosUploadVideosFromAURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CopyStreamVideosUploadVideosFromAURLResponse> {
    const { 'Upload-Creator': uploadCreator, 'Upload-Metadata': uploadMetadata, ...body } = params;
    return (
      this._client.post(`/accounts/${accountId}/stream/copy`, {
        body,
        ...options,
        headers: {
          'Upload-Creator': uploadCreator || '',
          'Upload-Metadata': uploadMetadata || '',
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: CopyStreamVideosUploadVideosFromAURLResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CopyStreamVideosUploadVideosFromAURLResponse {
  /**
   * Lists the origins allowed to display the video. Enter allowed origin domains in
   * an array and use `*` for wildcard subdomains. Empty arrays allow the video to be
   * viewed on any origin.
   */
  allowedOrigins?: Array<string>;

  /**
   * The date and time the media item was created.
   */
  created?: string;

  /**
   * A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * The duration of the video in seconds. A value of `-1` means the duration is
   * unknown. The duration becomes available after the upload and before the video is
   * ready.
   */
  duration?: number;

  input?: CopyStreamVideosUploadVideosFromAURLResponse.Input;

  /**
   * The live input ID used to upload a video with Stream Live.
   */
  liveInput?: string;

  /**
   * The maximum duration in seconds for a video upload. Can be set for a video that
   * is not yet uploaded to limit its duration. Uploads that exceed the specified
   * duration will fail during processing. A value of `-1` means the value is
   * unknown.
   */
  maxDurationSeconds?: number;

  /**
   * A user modifiable key-value store used to reference other systems of record for
   * managing videos.
   */
  meta?: unknown;

  /**
   * The date and time the media item was last modified.
   */
  modified?: string;

  playback?: CopyStreamVideosUploadVideosFromAURLResponse.Playback;

  /**
   * The video's preview page URI. This field is omitted until encoding is complete.
   */
  preview?: string;

  /**
   * Indicates whether the video is playable. The field is empty if the video is not
   * ready for viewing or the live stream is still in progress.
   */
  readyToStream?: boolean;

  /**
   * Indicates the time at which the video became playable. The field is empty if the
   * video is not ready for viewing or the live stream is still in progress.
   */
  readyToStreamAt?: string;

  /**
   * Indicates whether the video can be a accessed using the UID. When set to `true`,
   * a signed token must be generated with a signing key to view the video.
   */
  requireSignedURLs?: boolean;

  /**
   * Indicates the date and time at which the video will be deleted. Omit the field
   * to indicate no change, or include with a `null` value to remove an existing
   * scheduled deletion. If specified, must be at least 30 days from upload time.
   */
  scheduledDeletion?: string;

  /**
   * The size of the media item in bytes.
   */
  size?: number;

  /**
   * Specifies a detailed status for a video. If the `state` is `inprogress` or
   * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
   * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
   * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
   * and `errorReasonText` provide additional details.
   */
  status?: CopyStreamVideosUploadVideosFromAURLResponse.Status;

  /**
   * The media item's thumbnail URI. This field is omitted until encoding is
   * complete.
   */
  thumbnail?: string;

  /**
   * The timestamp for a thumbnail image calculated as a percentage value of the
   * video's duration. To convert from a second-wise timestamp to a percentage,
   * divide the desired timestamp by the total duration of the video. If this value
   * is not set, the default thumbnail image is taken from 0s of the video.
   */
  thumbnailTimestampPct?: number;

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  uid?: string;

  /**
   * The date and time the media item was uploaded.
   */
  uploaded?: string;

  /**
   * The date and time when the video upload URL is no longer valid for direct user
   * uploads.
   */
  uploadExpiry?: string;

  watermark?: CopyStreamVideosUploadVideosFromAURLResponse.Watermark;
}

export namespace CopyStreamVideosUploadVideosFromAURLResponse {
  export interface Input {
    /**
     * The video height in pixels. A value of `-1` means the height is unknown. The
     * value becomes available after the upload and before the video is ready.
     */
    height?: number;

    /**
     * The video width in pixels. A value of `-1` means the width is unknown. The value
     * becomes available after the upload and before the video is ready.
     */
    width?: number;
  }

  export interface Playback {
    /**
     * DASH Media Presentation Description for the video.
     */
    dash?: string;

    /**
     * The HLS manifest for the video.
     */
    hls?: string;
  }

  /**
   * Specifies a detailed status for a video. If the `state` is `inprogress` or
   * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
   * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
   * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
   * and `errorReasonText` provide additional details.
   */
  export interface Status {
    /**
     * Specifies why the video failed to encode. This field is empty if the video is
     * not in an `error` state. Preferred for programmatic use.
     */
    errorReasonCode?: string;

    /**
     * Specifies why the video failed to encode using a human readable error message in
     * English. This field is empty if the video is not in an `error` state.
     */
    errorReasonText?: string;

    /**
     * Indicates the size of the entire upload in bytes. The value must be a
     * non-negative integer.
     */
    pctComplete?: string;

    /**
     * Specifies the processing status for all quality levels for a video.
     */
    state?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';
  }

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

export interface CopyStreamVideosUploadVideosFromAURLParams {
  /**
   * Body param: A video's URL. The server must be publicly routable and support
   * `HTTP HEAD` requests and `HTTP GET` range requests. The server should respond to
   * `HTTP HEAD` requests with a `content-range` header that includes the size of the
   * file.
   */
  url: string;

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
  watermark?: CopyStreamVideosUploadVideosFromAURLParams.Watermark;

  /**
   * Header param: A user-defined identifier for the media creator.
   */
  'Upload-Creator'?: string;

  /**
   * Header param: Comma-separated key-value pairs following the TUS protocol
   * specification. Values are Base-64 encoded. Supported keys: `name`,
   * `requiresignedurls`, `allowedorigins`, `thumbnailtimestamppct`, `watermark`,
   * `scheduleddeletion`.
   */
  'Upload-Metadata'?: string;
}

export namespace CopyStreamVideosUploadVideosFromAURLParams {
  export interface Watermark {
    /**
     * The unique identifier for the watermark profile.
     */
    uid?: string;
  }
}

export namespace Copies {
  export import CopyStreamVideosUploadVideosFromAURLResponse = CopiesAPI.CopyStreamVideosUploadVideosFromAURLResponse;
  export import CopyStreamVideosUploadVideosFromAURLParams = CopiesAPI.CopyStreamVideosUploadVideosFromAURLParams;
}
