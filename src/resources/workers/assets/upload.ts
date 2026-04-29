// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseUpload extends APIResource {
  static override readonly _key: readonly ['workers', 'assets', 'upload'] = Object.freeze([
    'workers',
    'assets',
    'upload',
  ] as const);
}
export class Upload extends BaseUpload {}
