// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseUpload extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'datasets', 'upload'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'datasets',
    'upload',
  ] as const);
}
export class Upload extends BaseUpload {}
