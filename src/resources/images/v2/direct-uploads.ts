// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDirectUploads extends APIResource {
  static override readonly _key: readonly ['images', 'v2', 'directUploads'] = Object.freeze([
    'images',
    'v2',
    'directUploads',
  ] as const);
}
export class DirectUploads extends BaseDirectUploads {}
