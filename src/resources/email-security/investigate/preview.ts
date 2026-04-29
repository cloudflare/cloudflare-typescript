// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePreview extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'preview'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'preview',
  ] as const);
}
export class Preview extends BasePreview {}
