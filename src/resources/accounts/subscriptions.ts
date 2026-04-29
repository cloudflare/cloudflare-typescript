// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSubscriptions extends APIResource {
  static override readonly _key: readonly ['accounts', 'subscriptions'] = Object.freeze([
    'accounts',
    'subscriptions',
  ] as const);
}
export class Subscriptions extends BaseSubscriptions {}
