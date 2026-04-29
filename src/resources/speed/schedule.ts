// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSchedule extends APIResource {
  static override readonly _key: readonly ['speed', 'schedule'] = Object.freeze([
    'speed',
    'schedule',
  ] as const);
}
export class Schedule extends BaseSchedule {}
