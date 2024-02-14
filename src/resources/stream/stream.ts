// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AudioTracksAPI from 'cloudflare/resources/stream/audio-tracks';
import * as VideosAPI from 'cloudflare/resources/stream/videos';

export class Stream extends APIResource {
  audioTracks: AudioTracksAPI.AudioTracks = new AudioTracksAPI.AudioTracks(this._client);
  videos: VideosAPI.Videos = new VideosAPI.Videos(this._client);
}

export namespace Stream {
  export import AudioTracks = AudioTracksAPI.AudioTracks;
  export import AudioTrackUpdateResponse = AudioTracksAPI.AudioTrackUpdateResponse;
  export import AudioTrackListResponse = AudioTracksAPI.AudioTrackListResponse;
  export import AudioTrackDeleteResponse = AudioTracksAPI.AudioTrackDeleteResponse;
  export import AudioTrackCopyResponse = AudioTracksAPI.AudioTrackCopyResponse;
  export import AudioTrackUpdateParams = AudioTracksAPI.AudioTrackUpdateParams;
  export import AudioTrackCopyParams = AudioTracksAPI.AudioTrackCopyParams;
  export import Videos = VideosAPI.Videos;
  export import VideoStorageUsageResponse = VideosAPI.VideoStorageUsageResponse;
  export import VideoStorageUsageParams = VideosAPI.VideoStorageUsageParams;
}
