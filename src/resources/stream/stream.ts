// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AudioTracksAPI from './audio-tracks';
import * as ClipAPI from './clip';
import * as CopyAPI from './copy';
import * as DirectUploadAPI from './direct-upload';
import * as DownloadsAPI from './downloads';
import * as EmbedAPI from './embed';
import * as KeysAPI from './keys';
import * as TokenAPI from './token';
import * as VideosAPI from './videos';
import * as WatermarksAPI from './watermarks';
import * as WebhooksAPI from './webhooks';
import * as CaptionsAPI from './captions/captions';
import * as LiveInputsAPI from './live-inputs/live-inputs';
import { SinglePage } from '../../pagination';

export class Stream extends APIResource {
  audioTracks: AudioTracksAPI.AudioTracks = new AudioTracksAPI.AudioTracks(this._client);
  videos: VideosAPI.Videos = new VideosAPI.Videos(this._client);
  clip: ClipAPI.ClipResource = new ClipAPI.ClipResource(this._client);
  copy: CopyAPI.Copy = new CopyAPI.Copy(this._client);
  directUpload: DirectUploadAPI.DirectUpload = new DirectUploadAPI.DirectUpload(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  liveInputs: LiveInputsAPI.LiveInputs = new LiveInputsAPI.LiveInputs(this._client);
  watermarks: WatermarksAPI.Watermarks = new WatermarksAPI.Watermarks(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  captions: CaptionsAPI.Captions = new CaptionsAPI.Captions(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
  embed: EmbedAPI.Embed = new EmbedAPI.Embed(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);

  /**
   * Initiates a video upload using the TUS protocol. On success, the server responds
   * with a status code 201 (created) and includes a `location` header to indicate
   * where the content should be uploaded. Refer to https://tus.io for protocol
   * details.
   */
  create(params: StreamCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const {
      account_id,
      body,
      'Tus-Resumable': tusResumable,
      'Upload-Length': uploadLength,
      'Upload-Creator': uploadCreator,
      'Upload-Metadata': uploadMetadata,
    } = params;
    return this._client.post(`/accounts/${account_id}/stream`, {
      body: body,
      ...options,
      headers: {
        Accept: '*/*',
        'Tus-Resumable': tusResumable.toString(),
        'Upload-Length': uploadLength.toString(),
        ...(uploadCreator != null ? { 'Upload-Creator': uploadCreator } : undefined),
        ...(uploadMetadata != null ? { 'Upload-Metadata': uploadMetadata } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Lists up to 1000 videos from a single request. For a specific range, refer to
   * the optional parameters.
   */
  list(params: StreamListParams, options?: Core.RequestOptions): Core.PagePromise<VideosSinglePage, Video> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/stream`, VideosSinglePage, { query, ...options });
  }

  /**
   * Deletes a video and its copies from Cloudflare Stream.
   */
  delete(
    identifier: string,
    params: StreamDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/stream/${identifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Edit details for a single video.
   */
  edit(identifier: string, params: StreamEditParams, options?: Core.RequestOptions): Core.APIPromise<Video> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/${identifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Video }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches details for a single video.
   */
  get(identifier: string, params: StreamGetParams, options?: Core.RequestOptions): Core.APIPromise<Video> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}`, options) as Core.APIPromise<{
        result: Video;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class VideosSinglePage extends SinglePage<Video> {}

export type AllowedOrigins = string;

export type AllowedOriginsParam = string;

export interface Video {
  /**
   * Lists the origins allowed to display the video. Enter allowed origin domains in
   * an array and use `*` for wildcard subdomains. Empty arrays allow the video to be
   * viewed on any origin.
   */
  allowedOrigins?: Array<AllowedOrigins>;

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

  input?: Video.Input;

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

  playback?: Video.Playback;

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
  status?: Video.Status;

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

  watermark?: WatermarksAPI.Watermark;
}

export namespace Video {
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
}

export interface StreamCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;

  /**
   * Header param: Specifies the TUS protocol version. This value must be included in
   * every upload request. Notes: The only supported version of TUS protocol is
   * 1.0.0.
   */
  'Tus-Resumable': '1.0.0';

  /**
   * Header param: Indicates the size of the entire upload in bytes. The value must
   * be a non-negative integer.
   */
  'Upload-Length': number;

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

export interface StreamListParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Lists videos in ascending order of creation.
   */
  asc?: boolean;

  /**
   * Query param: A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Query param: Lists videos created before the specified date.
   */
  end?: string;

  /**
   * Query param: Includes the total number of videos associated with the submitted
   * query parameters.
   */
  include_counts?: boolean;

  /**
   * Query param: Searches over the `name` key in the `meta` field. This field can be
   * set with or after the upload request.
   */
  search?: string;

  /**
   * Query param: Lists videos created after the specified date.
   */
  start?: string;

  /**
   * Query param: Specifies the processing status for all quality levels for a video.
   */
  status?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';

  /**
   * Query param: Specifies whether the video is `vod` or `live`.
   */
  type?: string;
}

export interface StreamDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface StreamEditParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Lists the origins allowed to display the video. Enter allowed origin
   * domains in an array and use `*` for wildcard subdomains. Empty arrays allow the
   * video to be viewed on any origin.
   */
  allowedOrigins?: Array<AllowedOriginsParam>;

  /**
   * Body param: A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Body param: The maximum duration in seconds for a video upload. Can be set for a
   * video that is not yet uploaded to limit its duration. Uploads that exceed the
   * specified duration will fail during processing. A value of `-1` means the value
   * is unknown.
   */
  maxDurationSeconds?: number;

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
   * Body param: The date and time when the video upload URL is no longer valid for
   * direct user uploads.
   */
  uploadExpiry?: string;
}

export interface StreamGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Stream {
  export import AudioTracks = AudioTracksAPI.AudioTracks;
  export type Audio = AudioTracksAPI.Audio;
  export type AudioTrackDeleteResponse = AudioTracksAPI.AudioTrackDeleteResponse;
  export type AudioTrackGetResponse = AudioTracksAPI.AudioTrackGetResponse;
  export type AudioTrackDeleteParams = AudioTracksAPI.AudioTrackDeleteParams;
  export type AudioTrackCopyParams = AudioTracksAPI.AudioTrackCopyParams;
  export type AudioTrackEditParams = AudioTracksAPI.AudioTrackEditParams;
  export type AudioTrackGetParams = AudioTracksAPI.AudioTrackGetParams;
  export import Videos = VideosAPI.Videos;
  export type VideoStorageUsageResponse = VideosAPI.VideoStorageUsageResponse;
  export type VideoStorageUsageParams = VideosAPI.VideoStorageUsageParams;
  export import ClipResource = ClipAPI.ClipResource;
  export type Clip = ClipAPI.Clip;
  export type ClipCreateParams = ClipAPI.ClipCreateParams;
  export import Copy = CopyAPI.Copy;
  export type CopyCreateParams = CopyAPI.CopyCreateParams;
  export import DirectUpload = DirectUploadAPI.DirectUpload;
  export type DirectUploadCreateResponse = DirectUploadAPI.DirectUploadCreateResponse;
  export type DirectUploadCreateParams = DirectUploadAPI.DirectUploadCreateParams;
  export import Keys = KeysAPI.Keys;
  export type KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export type KeyGetResponse = KeysAPI.KeyGetResponse;
  export type KeyCreateParams = KeysAPI.KeyCreateParams;
  export type KeyDeleteParams = KeysAPI.KeyDeleteParams;
  export type KeyGetParams = KeysAPI.KeyGetParams;
  export import LiveInputs = LiveInputsAPI.LiveInputs;
  export type LiveInput = LiveInputsAPI.LiveInput;
  export type LiveInputListResponse = LiveInputsAPI.LiveInputListResponse;
  export type LiveInputCreateParams = LiveInputsAPI.LiveInputCreateParams;
  export type LiveInputUpdateParams = LiveInputsAPI.LiveInputUpdateParams;
  export type LiveInputListParams = LiveInputsAPI.LiveInputListParams;
  export type LiveInputDeleteParams = LiveInputsAPI.LiveInputDeleteParams;
  export type LiveInputGetParams = LiveInputsAPI.LiveInputGetParams;
  export import Watermarks = WatermarksAPI.Watermarks;
  export type Watermark = WatermarksAPI.Watermark;
  export type WatermarkDeleteResponse = WatermarksAPI.WatermarkDeleteResponse;
  export import WatermarksSinglePage = WatermarksAPI.WatermarksSinglePage;
  export type WatermarkCreateParams = WatermarksAPI.WatermarkCreateParams;
  export type WatermarkListParams = WatermarksAPI.WatermarkListParams;
  export type WatermarkDeleteParams = WatermarksAPI.WatermarkDeleteParams;
  export type WatermarkGetParams = WatermarksAPI.WatermarkGetParams;
  export import Webhooks = WebhooksAPI.Webhooks;
  export type WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export type WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export type WebhookGetResponse = WebhooksAPI.WebhookGetResponse;
  export type WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export type WebhookDeleteParams = WebhooksAPI.WebhookDeleteParams;
  export type WebhookGetParams = WebhooksAPI.WebhookGetParams;
  export import Captions = CaptionsAPI.Captions;
  export type Caption = CaptionsAPI.Caption;
  export type CaptionGetResponse = CaptionsAPI.CaptionGetResponse;
  export type CaptionGetParams = CaptionsAPI.CaptionGetParams;
  export import Downloads = DownloadsAPI.Downloads;
  export type DownloadCreateResponse = DownloadsAPI.DownloadCreateResponse;
  export type DownloadDeleteResponse = DownloadsAPI.DownloadDeleteResponse;
  export type DownloadGetResponse = DownloadsAPI.DownloadGetResponse;
  export type DownloadCreateParams = DownloadsAPI.DownloadCreateParams;
  export type DownloadDeleteParams = DownloadsAPI.DownloadDeleteParams;
  export type DownloadGetParams = DownloadsAPI.DownloadGetParams;
  export import Embed = EmbedAPI.Embed;
  export type EmbedGetResponse = EmbedAPI.EmbedGetResponse;
  export type EmbedGetParams = EmbedAPI.EmbedGetParams;
  export import Token = TokenAPI.Token;
  export type TokenCreateResponse = TokenAPI.TokenCreateResponse;
  export type TokenCreateParams = TokenAPI.TokenCreateParams;
}
