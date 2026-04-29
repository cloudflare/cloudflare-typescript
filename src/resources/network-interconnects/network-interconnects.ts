// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CNIsAPI from './cnis';
import { BaseCNIs, CNIs } from './cnis';
import * as InterconnectsAPI from './interconnects';
import { BaseInterconnects, Interconnects } from './interconnects';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as SlotsAPI from './slots';
import { BaseSlots, Slots } from './slots';

export class BaseNetworkInterconnects extends APIResource {
  static override readonly _key: readonly ['networkInterconnects'] = Object.freeze([
    'networkInterconnects',
  ] as const);
}
export class NetworkInterconnects extends BaseNetworkInterconnects {
  cnis: CNIsAPI.CNIs = new CNIsAPI.CNIs(this._client);
  interconnects: InterconnectsAPI.Interconnects = new InterconnectsAPI.Interconnects(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  slots: SlotsAPI.Slots = new SlotsAPI.Slots(this._client);
}

NetworkInterconnects.CNIs = CNIs;
NetworkInterconnects.BaseCNIs = BaseCNIs;
NetworkInterconnects.Interconnects = Interconnects;
NetworkInterconnects.BaseInterconnects = BaseInterconnects;
NetworkInterconnects.Settings = Settings;
NetworkInterconnects.BaseSettings = BaseSettings;
NetworkInterconnects.Slots = Slots;
NetworkInterconnects.BaseSlots = BaseSlots;

export declare namespace NetworkInterconnects {
  export { CNIs as CNIs, BaseCNIs as BaseCNIs };

  export { Interconnects as Interconnects, BaseInterconnects as BaseInterconnects };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { Slots as Slots, BaseSlots as BaseSlots };
}
