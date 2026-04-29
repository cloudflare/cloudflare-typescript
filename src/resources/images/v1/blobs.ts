// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseBlobs extends APIResource {
  static override readonly _key: readonly ['images', 'v1', 'blobs'] = Object.freeze([
    'images',
    'v1',
    'blobs',
  ] as const);
}
export class Blobs extends BaseBlobs {}
