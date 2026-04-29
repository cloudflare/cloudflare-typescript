// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseVtt extends APIResource {
  static override readonly _key: readonly ['stream', 'captions', 'language', 'vtt'] = Object.freeze([
    'stream',
    'captions',
    'language',
    'vtt',
  ] as const);
}
export class Vtt extends BaseVtt {}
