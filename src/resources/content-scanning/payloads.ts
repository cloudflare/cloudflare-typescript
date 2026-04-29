// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePayloads extends APIResource {
  static override readonly _key: readonly ['contentScanning', 'payloads'] = Object.freeze([
    'contentScanning',
    'payloads',
  ] as const);
}
export class Payloads extends BasePayloads {}
