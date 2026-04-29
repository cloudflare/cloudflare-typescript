// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseContent extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'content'] = Object.freeze([
    'workers',
    'scripts',
    'content',
  ] as const);
}
export class Content extends BaseContent {}
