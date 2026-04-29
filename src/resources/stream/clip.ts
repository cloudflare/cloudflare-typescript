// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseClip extends APIResource {
  static override readonly _key: readonly ['stream', 'clip'] = Object.freeze(['stream', 'clip'] as const);
}
export class Clip extends BaseClip {}
