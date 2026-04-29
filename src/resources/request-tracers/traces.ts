// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseTraces extends APIResource {
  static override readonly _key: readonly ['requestTracers', 'traces'] = Object.freeze([
    'requestTracers',
    'traces',
  ] as const);
}
export class Traces extends BaseTraces {}
