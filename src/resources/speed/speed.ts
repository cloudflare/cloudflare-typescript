// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AvailabilitiesAPI from './availabilities';
import { Availabilities, BaseAvailabilities } from './availabilities';
import * as ScheduleAPI from './schedule';
import { BaseSchedule, Schedule } from './schedule';
import * as PagesAPI from './pages/pages';
import { BasePages, Pages } from './pages/pages';

export class BaseSpeed extends APIResource {
  static override readonly _key: readonly ['speed'] = Object.freeze(['speed'] as const);
}
export class Speed extends BaseSpeed {
  schedule: ScheduleAPI.Schedule = new ScheduleAPI.Schedule(this._client);
  availabilities: AvailabilitiesAPI.Availabilities = new AvailabilitiesAPI.Availabilities(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
}

Speed.Schedule = Schedule;
Speed.BaseSchedule = BaseSchedule;
Speed.Availabilities = Availabilities;
Speed.BaseAvailabilities = BaseAvailabilities;
Speed.Pages = Pages;
Speed.BasePages = BasePages;

export declare namespace Speed {
  export { Schedule as Schedule, BaseSchedule as BaseSchedule };

  export { Availabilities as Availabilities, BaseAvailabilities as BaseAvailabilities };

  export { Pages as Pages, BasePages as BasePages };
}
