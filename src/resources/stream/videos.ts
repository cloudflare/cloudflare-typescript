// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseVideos extends APIResource {
  static override readonly _key: readonly ['stream', 'videos'] = Object.freeze(['stream', 'videos'] as const);
}
export class Videos extends BaseVideos {}
