// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AvailabilitiesAPI from './availabilities';
import { Availabilities } from './availabilities';
import * as ScheduleAPI from './schedule';
import { Schedule } from './schedule';
import * as PagesAPI from './pages/pages';
import { Pages } from './pages/pages';

export class Speed extends APIResource {
  schedule: ScheduleAPI.Schedule = new ScheduleAPI.Schedule(this._client);
  availabilities: AvailabilitiesAPI.Availabilities = new AvailabilitiesAPI.Availabilities(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
}

Speed.Schedule = Schedule;
Speed.Availabilities = Availabilities;
Speed.Pages = Pages;

export declare namespace Speed {
  export { Schedule as Schedule };

  export { Availabilities as Availabilities };

  export { Pages as Pages };
}
