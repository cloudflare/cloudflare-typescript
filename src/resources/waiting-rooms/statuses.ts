// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseStatuses extends APIResource {
  static override readonly _key: readonly ['waitingRooms', 'statuses'] = Object.freeze([
    'waitingRooms',
    'statuses',
  ] as const);
}
export class Statuses extends BaseStatuses {}
