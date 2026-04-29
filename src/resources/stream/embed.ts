// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseEmbed extends APIResource {
  static override readonly _key: readonly ['stream', 'embed'] = Object.freeze(['stream', 'embed'] as const);
}
export class Embed extends BaseEmbed {}
