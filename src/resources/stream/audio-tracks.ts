// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAudioTracks extends APIResource {
  static override readonly _key: readonly ['stream', 'audioTracks'] = Object.freeze([
    'stream',
    'audioTracks',
  ] as const);
}
export class AudioTracks extends BaseAudioTracks {}
