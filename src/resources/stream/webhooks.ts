// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseWebhooks extends APIResource {
  static override readonly _key: readonly ['stream', 'webhooks'] = Object.freeze([
    'stream',
    'webhooks',
  ] as const);
}
export class Webhooks extends BaseWebhooks {}
