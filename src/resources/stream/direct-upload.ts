// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDirectUpload extends APIResource {
  static override readonly _key: readonly ['stream', 'directUpload'] = Object.freeze([
    'stream',
    'directUpload',
  ] as const);
}
export class DirectUpload extends BaseDirectUpload {}
