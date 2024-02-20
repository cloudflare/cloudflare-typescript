// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as StreamAPI from 'cloudflare/resources/stream/stream';
import * as AudioTracksAPI from 'cloudflare/resources/stream/audio-tracks';
import * as CaptionsAPI from 'cloudflare/resources/stream/captions';
import * as ClipsAPI from 'cloudflare/resources/stream/clips';
import * as CopiesAPI from 'cloudflare/resources/stream/copies';
import * as DirectUploadsAPI from 'cloudflare/resources/stream/direct-uploads';
import * as DownloadsAPI from 'cloudflare/resources/stream/downloads';
import * as EmbedsAPI from 'cloudflare/resources/stream/embeds';
import * as KeysAPI from 'cloudflare/resources/stream/keys';
import * as TokensAPI from 'cloudflare/resources/stream/tokens';
import * as VideosAPI from 'cloudflare/resources/stream/videos';
import * as WatermarksAPI from 'cloudflare/resources/stream/watermarks';
import * as WebhooksAPI from 'cloudflare/resources/stream/webhooks';
import * as LiveInputsAPI from 'cloudflare/resources/stream/live-inputs/live-inputs';

export class Stream extends APIResource {
  audioTracks: AudioTracksAPI.AudioTracks = new AudioTracksAPI.AudioTracks(this._client);
  videos: VideosAPI.Videos = new VideosAPI.Videos(this._client);
  clips: ClipsAPI.Clips = new ClipsAPI.Clips(this._client);
  copies: CopiesAPI.Copies = new CopiesAPI.Copies(this._client);
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  liveInputs: LiveInputsAPI.LiveInputs = new LiveInputsAPI.LiveInputs(this._client);
  watermarks: WatermarksAPI.Watermarks = new WatermarksAPI.Watermarks(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  captions: CaptionsAPI.Captions = new CaptionsAPI.Captions(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
  embeds: EmbedsAPI.Embeds = new EmbedsAPI.Embeds(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * Initiates a video upload using the TUS protocol. On success, the server responds
   * with a status code 201 (created) and includes a `location` header to indicate
   * where the content should be uploaded. Refer to https://tus.io for protocol
   * details.
   */
  create(
    accountId: string,
    params: StreamCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const {
      'Tus-Resumable': tusResumable,
      'Upload-Length': uploadLength,
      'Upload-Creator': uploadCreator,
      'Upload-Metadata': uploadMetadata,
    } = params;
    return this._client.post(`/accounts/${accountId}/stream`, {
      ...options,
      headers: {
        Accept: '*/*',
        'Tus-Resumable': tusResumable.toString(),
        'Upload-Length': uploadLength.toString(),
        'Upload-Creator': uploadCreator || '',
        'Upload-Metadata': uploadMetadata || '',
        ...options?.headers,
      },
    });
  }

  /**
   * Lists up to 1000 videos from a single request. For a specific range, refer to
   * the optional parameters.
   */
  list(
    accountId: string,
    query?: StreamListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<StreamListResponse>;
  list(
    accountId: string,
    query: StreamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/stream`, { query, ...options }) as Core.APIPromise<{
        result: StreamListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a video and its copies from Cloudflare Stream.
   */
  delete(accountId: string, identifier: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountId}/stream/${identifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches details for a single video.
   */
  get(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/${identifier}`, options) as Core.APIPromise<{
        result: StreamGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type StreamListResponse = Array<StreamListResponse.StreamListResponseItem>;

export namespace StreamListResponse {
  export interface StreamListResponseItem {
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

    input?: StreamListResponseItem.Input;

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

    playback?: StreamListResponseItem.Playback;

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
    status?: StreamListResponseItem.Status;

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

    watermark?: StreamListResponseItem.Watermark;
  }

  export namespace StreamListResponseItem {
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
}

export interface StreamGetResponse {
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

  input?: StreamGetResponse.Input;

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

  playback?: StreamGetResponse.Playback;

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
  status?: StreamGetResponse.Status;

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

  watermark?: StreamGetResponse.Watermark;
}

export namespace StreamGetResponse {
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

export interface StreamCreateParams {
  /**
   * Specifies the TUS protocol version. This value must be included in every upload
   * request. Notes: The only supported version of TUS protocol is 1.0.0.
   */
  'Tus-Resumable': '1.0.0';

  /**
   * Indicates the size of the entire upload in bytes. The value must be a
   * non-negative integer.
   */
  'Upload-Length': number;

  /**
   * A user-defined identifier for the media creator.
   */
  'Upload-Creator'?: string;

  /**
   * Comma-separated key-value pairs following the TUS protocol specification. Values
   * are Base-64 encoded. Supported keys: `name`, `requiresignedurls`,
   * `allowedorigins`, `thumbnailtimestamppct`, `watermark`, `scheduleddeletion`.
   */
  'Upload-Metadata'?: string;
}

export interface StreamListParams {
  /**
   * Lists videos in ascending order of creation.
   */
  asc?: boolean;

  /**
   * A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Lists videos created before the specified date.
   */
  end?: string;

  /**
   * Includes the total number of videos associated with the submitted query
   * parameters.
   */
  include_counts?: boolean;

  /**
   * Searches over the `name` key in the `meta` field. This field can be set with or
   * after the upload request.
   */
  search?: string;

  /**
   * Lists videos created after the specified date.
   */
  start?: string;

  /**
   * Specifies the processing status for all quality levels for a video.
   */
  status?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';

  /**
   * Specifies whether the video is `vod` or `live`.
   */
  type?: string;
}

export namespace Stream {
  export import StreamListResponse = StreamAPI.StreamListResponse;
  export import StreamGetResponse = StreamAPI.StreamGetResponse;
  export import StreamCreateParams = StreamAPI.StreamCreateParams;
  export import StreamListParams = StreamAPI.StreamListParams;
  export import AudioTracks = AudioTracksAPI.AudioTracks;
  export import AudioTrackCreateResponse = AudioTracksAPI.AudioTrackCreateResponse;
  export import AudioTrackUpdateResponse = AudioTracksAPI.AudioTrackUpdateResponse;
  export import AudioTrackListResponse = AudioTracksAPI.AudioTrackListResponse;
  export import AudioTrackDeleteResponse = AudioTracksAPI.AudioTrackDeleteResponse;
  export import AudioTrackCreateParams = AudioTracksAPI.AudioTrackCreateParams;
  export import AudioTrackUpdateParams = AudioTracksAPI.AudioTrackUpdateParams;
  export import Videos = VideosAPI.Videos;
  export import VideoStorageUsageResponse = VideosAPI.VideoStorageUsageResponse;
  export import VideoStorageUsageParams = VideosAPI.VideoStorageUsageParams;
  export import Clips = ClipsAPI.Clips;
  export import ClipCreateResponse = ClipsAPI.ClipCreateResponse;
  export import ClipCreateParams = ClipsAPI.ClipCreateParams;
  export import Copies = CopiesAPI.Copies;
  export import CopyCreateResponse = CopiesAPI.CopyCreateResponse;
  export import CopyCreateParams = CopiesAPI.CopyCreateParams;
  export import DirectUploads = DirectUploadsAPI.DirectUploads;
  export import DirectUploadCreateResponse = DirectUploadsAPI.DirectUploadCreateResponse;
  export import DirectUploadCreateParams = DirectUploadsAPI.DirectUploadCreateParams;
  export import Keys = KeysAPI.Keys;
  export import KeyCreateResponse = KeysAPI.KeyCreateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import LiveInputs = LiveInputsAPI.LiveInputs;
  export import LiveInputCreateResponse = LiveInputsAPI.LiveInputCreateResponse;
  export import LiveInputListResponse = LiveInputsAPI.LiveInputListResponse;
  export import LiveInputGetResponse = LiveInputsAPI.LiveInputGetResponse;
  export import LiveInputReplaceResponse = LiveInputsAPI.LiveInputReplaceResponse;
  export import LiveInputCreateParams = LiveInputsAPI.LiveInputCreateParams;
  export import LiveInputListParams = LiveInputsAPI.LiveInputListParams;
  export import LiveInputReplaceParams = LiveInputsAPI.LiveInputReplaceParams;
  export import Watermarks = WatermarksAPI.Watermarks;
  export import WatermarkCreateResponse = WatermarksAPI.WatermarkCreateResponse;
  export import WatermarkListResponse = WatermarksAPI.WatermarkListResponse;
  export import WatermarkDeleteResponse = WatermarksAPI.WatermarkDeleteResponse;
  export import WatermarkGetResponse = WatermarksAPI.WatermarkGetResponse;
  export import WatermarkCreateParams = WatermarksAPI.WatermarkCreateParams;
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookGetResponse = WebhooksAPI.WebhookGetResponse;
  export import WebhookReplaceResponse = WebhooksAPI.WebhookReplaceResponse;
  export import WebhookReplaceParams = WebhooksAPI.WebhookReplaceParams;
  export import Captions = CaptionsAPI.Captions;
  export import CaptionListResponse = CaptionsAPI.CaptionListResponse;
  export import CaptionDeleteResponse = CaptionsAPI.CaptionDeleteResponse;
  export import CaptionReplaceResponse = CaptionsAPI.CaptionReplaceResponse;
  export import CaptionReplaceParams = CaptionsAPI.CaptionReplaceParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadCreateResponse = DownloadsAPI.DownloadCreateResponse;
  export import DownloadListResponse = DownloadsAPI.DownloadListResponse;
  export import DownloadDeleteResponse = DownloadsAPI.DownloadDeleteResponse;
  export import Embeds = EmbedsAPI.Embeds;
  export import EmbedListResponse = EmbedsAPI.EmbedListResponse;
  export import Tokens = TokensAPI.Tokens;
  export import TokenCreateResponse = TokensAPI.TokenCreateResponse;
  export import TokenCreateParams = TokensAPI.TokenCreateParams;
}
