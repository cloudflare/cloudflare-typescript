// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AudioTracksAPI from './audio-tracks';
import { AudioTracks } from './audio-tracks';
import * as ClipAPI from './clip';
import { Clip } from './clip';
import * as CopyAPI from './copy';
import { Copy } from './copy';
import * as DirectUploadAPI from './direct-upload';
import { DirectUpload } from './direct-upload';
import * as DownloadsAPI from './downloads';
import { Downloads } from './downloads';
import * as EmbedAPI from './embed';
import { Embed } from './embed';
import * as KeysAPI from './keys';
import { Keys } from './keys';
import * as TokenAPI from './token';
import { Token } from './token';
import * as VideosAPI from './videos';
import { Videos } from './videos';
import * as WatermarksAPI from './watermarks';
import { Watermarks } from './watermarks';
import * as WebhooksAPI from './webhooks';
import { Webhooks } from './webhooks';
import * as CaptionsAPI from './captions/captions';
import { Captions } from './captions/captions';
import * as LiveInputsAPI from './live-inputs/live-inputs';
import { LiveInputs } from './live-inputs/live-inputs';

export class Stream extends APIResource {
  audioTracks: AudioTracksAPI.AudioTracks = new AudioTracksAPI.AudioTracks(this._client);
  videos: VideosAPI.Videos = new VideosAPI.Videos(this._client);
  clip: ClipAPI.Clip = new ClipAPI.Clip(this._client);
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
}

Stream.AudioTracks = AudioTracks;
Stream.Videos = Videos;
Stream.Clip = Clip;
Stream.Copy = Copy;
Stream.DirectUpload = DirectUpload;
Stream.Keys = Keys;
Stream.LiveInputs = LiveInputs;
Stream.Watermarks = Watermarks;
Stream.Webhooks = Webhooks;
Stream.Captions = Captions;
Stream.Downloads = Downloads;
Stream.Embed = Embed;
Stream.Token = Token;

export declare namespace Stream {
  export { AudioTracks as AudioTracks };

  export { Videos as Videos };

  export { Clip as Clip };

  export { Copy as Copy };

  export { DirectUpload as DirectUpload };

  export { Keys as Keys };

  export { LiveInputs as LiveInputs };

  export { Watermarks as Watermarks };

  export { Webhooks as Webhooks };

  export { Captions as Captions };

  export { Downloads as Downloads };

  export { Embed as Embed };

  export { Token as Token };
}
