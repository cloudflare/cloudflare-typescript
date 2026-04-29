// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDownload extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'pcaps', 'download'] = Object.freeze([
    'magicTransit',
    'pcaps',
    'download',
  ] as const);
}
export class Download extends BaseDownload {}
