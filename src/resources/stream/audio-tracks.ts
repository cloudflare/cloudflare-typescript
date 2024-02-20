// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AudioTracksAPI from 'cloudflare/resources/stream/audio-tracks';

export class AudioTracks extends APIResource {
  /**
   * Adds an additional audio track to a video using the provided audio track URL.
   */
  create(
    accountId: string,
    identifier: string,
    body: AudioTrackCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/stream/${identifier}/audio/copy`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AudioTrackCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edits additional audio tracks on a video. Editing the default status of an audio
   * track to `true` will mark all other audio tracks on the video default status to
   * `false`.
   */
  update(
    accountId: string,
    identifier: string,
    audioIdentifier: string,
    body: AudioTrackUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/stream/${identifier}/audio/${audioIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AudioTrackUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists additional audio tracks on a video. Note this API will not return
   * information for audio attached to the video upload.
   */
  list(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/${identifier}/audio`, options) as Core.APIPromise<{
        result: AudioTrackListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes additional audio tracks on a video. Deleting a default audio track is
   * not allowed. You must assign another audio track as default prior to deletion.
   */
  delete(
    accountId: string,
    identifier: string,
    audioIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/stream/${identifier}/audio/${audioIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: AudioTrackDeleteResponse }>
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

export interface AudioTrackUpdateResponse {
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

export interface AudioTrackCreateParams {
  /**
   * A string to uniquely identify the track amongst other audio track labels for the
   * specified video.
   */
  label: string;

  /**
   * An audio track URL. The server must be publicly routable and support `HTTP HEAD`
   * requests and `HTTP GET` range requests. The server should respond to `HTTP HEAD`
   * requests with a `content-range` header that includes the size of the file.
   */
  url?: string;
}

export interface AudioTrackUpdateParams {
  /**
   * Denotes whether the audio track will be played by default in a player.
   */
  default?: boolean;

  /**
   * A string to uniquely identify the track amongst other audio track labels for the
   * specified video.
   */
  label?: string;
}

export namespace AudioTracks {
  export import AudioTrackCreateResponse = AudioTracksAPI.AudioTrackCreateResponse;
  export import AudioTrackUpdateResponse = AudioTracksAPI.AudioTrackUpdateResponse;
  export import AudioTrackListResponse = AudioTracksAPI.AudioTrackListResponse;
  export import AudioTrackDeleteResponse = AudioTracksAPI.AudioTrackDeleteResponse;
  export import AudioTrackCreateParams = AudioTracksAPI.AudioTrackCreateParams;
  export import AudioTrackUpdateParams = AudioTracksAPI.AudioTrackUpdateParams;
}
