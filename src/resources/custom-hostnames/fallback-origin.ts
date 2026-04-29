// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseFallbackOrigin extends APIResource {
  static override readonly _key: readonly ['customHostnames', 'fallbackOrigin'] = Object.freeze([
    'customHostnames',
    'fallbackOrigin',
  ] as const);
}
export class FallbackOrigin extends BaseFallbackOrigin {}
