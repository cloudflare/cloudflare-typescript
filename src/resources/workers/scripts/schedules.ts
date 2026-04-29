// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSchedules extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'schedules'] = Object.freeze([
    'workers',
    'scripts',
    'schedules',
  ] as const);
}
export class Schedules extends BaseSchedules {}
