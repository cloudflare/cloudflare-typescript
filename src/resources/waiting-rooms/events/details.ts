// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDetails extends APIResource {
  static override readonly _key: readonly ['waitingRooms', 'events', 'details'] = Object.freeze([
    'waitingRooms',
    'events',
    'details',
  ] as const);
}
export class Details extends BaseDetails {}
