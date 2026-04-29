// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PageAPI from './page';
import { BasePage, Page } from './page';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as StatusesAPI from './statuses';
import { BaseStatuses, Statuses } from './statuses';
import * as EventsAPI from './events/events';
import { BaseEvents, Events } from './events/events';

export class BaseWaitingRooms extends APIResource {
  static override readonly _key: readonly ['waitingRooms'] = Object.freeze(['waitingRooms'] as const);
}
export class WaitingRooms extends BaseWaitingRooms {
  page: PageAPI.Page = new PageAPI.Page(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

WaitingRooms.Page = Page;
WaitingRooms.BasePage = BasePage;
WaitingRooms.Events = Events;
WaitingRooms.BaseEvents = BaseEvents;
WaitingRooms.Rules = Rules;
WaitingRooms.BaseRules = BaseRules;
WaitingRooms.Statuses = Statuses;
WaitingRooms.BaseStatuses = BaseStatuses;
WaitingRooms.Settings = Settings;
WaitingRooms.BaseSettings = BaseSettings;

export declare namespace WaitingRooms {
  export { Page as Page, BasePage as BasePage };

  export { Events as Events, BaseEvents as BaseEvents };

  export { Rules as Rules, BaseRules as BaseRules };

  export { Statuses as Statuses, BaseStatuses as BaseStatuses };

  export { Settings as Settings, BaseSettings as BaseSettings };
}
