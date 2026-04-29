// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PageAPI from './page';
import { Page } from './page';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as SettingsAPI from './settings';
import { Settings } from './settings';
import * as StatusesAPI from './statuses';
import { Statuses } from './statuses';
import * as EventsAPI from './events/events';
import { Events } from './events/events';

export class WaitingRooms extends APIResource {
  page: PageAPI.Page = new PageAPI.Page(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

WaitingRooms.Page = Page;
WaitingRooms.Events = Events;
WaitingRooms.Rules = Rules;
WaitingRooms.Statuses = Statuses;
WaitingRooms.Settings = Settings;

export declare namespace WaitingRooms {
  export { Page as Page };

  export { Events as Events };

  export { Rules as Rules };

  export { Statuses as Statuses };

  export { Settings as Settings };
}
