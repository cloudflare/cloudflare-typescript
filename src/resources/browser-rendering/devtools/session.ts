// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSession extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools', 'session'] = Object.freeze([
    'browserRendering',
    'devtools',
    'session',
  ] as const);
}
export class Session extends BaseSession {}
