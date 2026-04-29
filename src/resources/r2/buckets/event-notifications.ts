// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseEventNotifications extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'eventNotifications'] = Object.freeze([
    'r2',
    'buckets',
    'eventNotifications',
  ] as const);
}
export class EventNotifications extends BaseEventNotifications {}
