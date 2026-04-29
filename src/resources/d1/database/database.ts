// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TimeTravelAPI from './time-travel';
import { BaseTimeTravel, TimeTravel } from './time-travel';

export class BaseDatabase extends APIResource {
  static override readonly _key: readonly ['d1', 'database'] = Object.freeze(['d1', 'database'] as const);
}
export class Database extends BaseDatabase {
  timeTravel: TimeTravelAPI.TimeTravel = new TimeTravelAPI.TimeTravel(this._client);
}

Database.TimeTravel = TimeTravel;
Database.BaseTimeTravel = BaseTimeTravel;

export declare namespace Database {
  export { TimeTravel as TimeTravel, BaseTimeTravel as BaseTimeTravel };
}
