// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseScans extends APIResource {
  static override readonly _key: readonly ['urlScanner', 'scans'] = Object.freeze([
    'urlScanner',
    'scans',
  ] as const);
}
export class Scans extends BaseScans {}
