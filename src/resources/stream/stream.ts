// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioTracksAPI from './audio-tracks';
import { AudioTracks, BaseAudioTracks } from './audio-tracks';
import * as ClipAPI from './clip';
import { BaseClip, Clip } from './clip';
import * as CopyAPI from './copy';
import { BaseCopy, Copy } from './copy';
import * as DirectUploadAPI from './direct-upload';
import { BaseDirectUpload, DirectUpload } from './direct-upload';
import * as DownloadsAPI from './downloads';
import { BaseDownloads, Downloads } from './downloads';
import * as EmbedAPI from './embed';
import { BaseEmbed, Embed } from './embed';
import * as KeysAPI from './keys';
import { BaseKeys, Keys } from './keys';
import * as TokenAPI from './token';
import { BaseToken, Token } from './token';
import * as VideosAPI from './videos';
import { BaseVideos, Videos } from './videos';
import * as WatermarksAPI from './watermarks';
import { BaseWatermarks, Watermarks } from './watermarks';
import * as WebhooksAPI from './webhooks';
import { BaseWebhooks, Webhooks } from './webhooks';
import * as CaptionsAPI from './captions/captions';
import { BaseCaptions, Captions } from './captions/captions';
import * as LiveInputsAPI from './live-inputs/live-inputs';
import { BaseLiveInputs, LiveInputs } from './live-inputs/live-inputs';

export class BaseStream extends APIResource {
  static override readonly _key: readonly ['stream'] = Object.freeze(['stream'] as const);
}
export class Stream extends BaseStream {
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
Stream.BaseAudioTracks = BaseAudioTracks;
Stream.Videos = Videos;
Stream.BaseVideos = BaseVideos;
Stream.Clip = Clip;
Stream.BaseClip = BaseClip;
Stream.Copy = Copy;
Stream.BaseCopy = BaseCopy;
Stream.DirectUpload = DirectUpload;
Stream.BaseDirectUpload = BaseDirectUpload;
Stream.Keys = Keys;
Stream.BaseKeys = BaseKeys;
Stream.LiveInputs = LiveInputs;
Stream.BaseLiveInputs = BaseLiveInputs;
Stream.Watermarks = Watermarks;
Stream.BaseWatermarks = BaseWatermarks;
Stream.Webhooks = Webhooks;
Stream.BaseWebhooks = BaseWebhooks;
Stream.Captions = Captions;
Stream.BaseCaptions = BaseCaptions;
Stream.Downloads = Downloads;
Stream.BaseDownloads = BaseDownloads;
Stream.Embed = Embed;
Stream.BaseEmbed = BaseEmbed;
Stream.Token = Token;
Stream.BaseToken = BaseToken;

export declare namespace Stream {
  export { AudioTracks as AudioTracks, BaseAudioTracks as BaseAudioTracks };

  export { Videos as Videos, BaseVideos as BaseVideos };

  export { Clip as Clip, BaseClip as BaseClip };

  export { Copy as Copy, BaseCopy as BaseCopy };

  export { DirectUpload as DirectUpload, BaseDirectUpload as BaseDirectUpload };

  export { Keys as Keys, BaseKeys as BaseKeys };

  export { LiveInputs as LiveInputs, BaseLiveInputs as BaseLiveInputs };

  export { Watermarks as Watermarks, BaseWatermarks as BaseWatermarks };

  export { Webhooks as Webhooks, BaseWebhooks as BaseWebhooks };

  export { Captions as Captions, BaseCaptions as BaseCaptions };

  export { Downloads as Downloads, BaseDownloads as BaseDownloads };

  export { Embed as Embed, BaseEmbed as BaseEmbed };

  export { Token as Token, BaseToken as BaseToken };
}
