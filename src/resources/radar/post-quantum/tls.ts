// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTLS extends APIResource {
  static override readonly _key: readonly ['radar', 'postQuantum', 'tls'] = Object.freeze([
    'radar',
    'postQuantum',
    'tls',
  ] as const);
}
export class TLS extends BaseTLS {}
