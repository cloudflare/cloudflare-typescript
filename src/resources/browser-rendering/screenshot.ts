// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseScreenshot extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'screenshot'] = Object.freeze([
    'browserRendering',
    'screenshot',
  ] as const);
}
export class Screenshot extends BaseScreenshot {}
