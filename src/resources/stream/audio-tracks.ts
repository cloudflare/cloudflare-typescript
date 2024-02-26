// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AudioTracksAPI from 'cloudflare/resources/stream/audio-tracks';

export class AudioTracks extends APIResource {
  /**
   * Adds an additional audio track to a video using the provided audio track URL.
   */
  create(
    identifier: string,
    params: AudioTrackCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/${identifier}/audio/copy`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AudioTrackCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists additional audio tracks on a video. Note this API will not return
   * information for audio attached to the video upload.
   */
  list(
    identifier: string,
    params: AudioTrackListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}/audio`, options) as Core.APIPromise<{
        result: AudioTrackListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes additional audio tracks on a video. Deleting a default audio track is
   * not allowed. You must assign another audio track as default prior to deletion.
   */
  delete(
    identifier: string,
    audioIdentifier: string,
    params: AudioTrackDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/stream/${identifier}/audio/${audioIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: AudioTrackDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edits additional audio tracks on a video. Editing the default status of an audio
   * track to `true` will mark all other audio tracks on the video default status to
   * `false`.
   */
  edit(
    identifier: string,
    audioIdentifier: string,
    params: AudioTrackEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/stream/${identifier}/audio/${audioIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AudioTrackEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AudioTrackCreateResponse {
  /**
   * Denotes whether the audio track will be played by default in a player.
   */
  default?: boolean;

  /**
   * A string to uniquely identify the track amongst other audio track labels for the
   * specified video.
   */
  label?: string;

  /**
   * Specifies the processing status of the video.
   */
  status?: 'queued' | 'ready' | 'error';

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  uid?: string;
}

export type AudioTrackListResponse = Array<AudioTrackListResponse.AudioTrackListResponseItem>;

export namespace AudioTrackListResponse {
  export interface AudioTrackListResponseItem {
    /**
     * Denotes whether the audio track will be played by default in a player.
     */
    default?: boolean;

    /**
     * A string to uniquely identify the track amongst other audio track labels for the
     * specified video.
     */
    label?: string;

    /**
     * Specifies the processing status of the video.
     */
    status?: 'queued' | 'ready' | 'error';

    /**
     * A Cloudflare-generated unique identifier for a media item.
     */
    uid?: string;
  }
}

export type AudioTrackDeleteResponse = unknown | string;

export interface AudioTrackEditResponse {
  /**
   * Denotes whether the audio track will be played by default in a player.
   */
  default?: boolean;

  /**
   * A string to uniquely identify the track amongst other audio track labels for the
   * specified video.
   */
  label?: string;

  /**
   * Specifies the processing status of the video.
   */
  status?: 'queued' | 'ready' | 'error';

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  uid?: string;
}

export interface AudioTrackCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A string to uniquely identify the track amongst other audio track
   * labels for the specified video.
   */
  label: string;

  /**
   * Body param: An audio track URL. The server must be publicly routable and support
   * `HTTP HEAD` requests and `HTTP GET` range requests. The server should respond to
   * `HTTP HEAD` requests with a `content-range` header that includes the size of the
   * file.
   */
  url?: string;
}

export interface AudioTrackListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface AudioTrackDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface AudioTrackEditParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Denotes whether the audio track will be played by default in a
   * player.
   */
  default?: boolean;

  /**
   * Body param: A string to uniquely identify the track amongst other audio track
   * labels for the specified video.
   */
  label?: string;
}

export namespace AudioTracks {
  export import AudioTrackCreateResponse = AudioTracksAPI.AudioTrackCreateResponse;
  export import AudioTrackListResponse = AudioTracksAPI.AudioTrackListResponse;
  export import AudioTrackDeleteResponse = AudioTracksAPI.AudioTrackDeleteResponse;
  export import AudioTrackEditResponse = AudioTracksAPI.AudioTrackEditResponse;
  export import AudioTrackCreateParams = AudioTracksAPI.AudioTrackCreateParams;
  export import AudioTrackListParams = AudioTracksAPI.AudioTrackListParams;
  export import AudioTrackDeleteParams = AudioTracksAPI.AudioTrackDeleteParams;
  export import AudioTrackEditParams = AudioTracksAPI.AudioTrackEditParams;
}
