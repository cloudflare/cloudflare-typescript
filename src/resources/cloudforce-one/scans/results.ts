// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseResults extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'scans', 'results'] = Object.freeze([
    'cloudforceOne',
    'scans',
    'results',
  ] as const);
}
export class Results extends BaseResults {}
