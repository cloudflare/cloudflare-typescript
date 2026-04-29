// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePayloadLogs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'payloadLogs'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'payloadLogs',
  ] as const);
}
export class PayloadLogs extends BasePayloadLogs {}
