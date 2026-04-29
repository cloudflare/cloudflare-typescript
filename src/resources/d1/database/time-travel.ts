// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTimeTravel extends APIResource {
  static override readonly _key: readonly ['d1', 'database', 'timeTravel'] = Object.freeze([
    'd1',
    'database',
    'timeTravel',
  ] as const);
}
export class TimeTravel extends BaseTimeTravel {}
