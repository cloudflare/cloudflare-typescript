// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TimeTravelAPI from './time-travel';
import { TimeTravel } from './time-travel';

export class Database extends APIResource {
  timeTravel: TimeTravelAPI.TimeTravel = new TimeTravelAPI.TimeTravel(this._client);
}

Database.TimeTravel = TimeTravel;

export declare namespace Database {
  export { TimeTravel as TimeTravel };
}
