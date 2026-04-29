// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseWebhooks extends APIResource {
  static override readonly _key: readonly ['alerting', 'destinations', 'webhooks'] = Object.freeze([
    'alerting',
    'destinations',
    'webhooks',
  ] as const);
}
export class Webhooks extends BaseWebhooks {}
