// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CNIsAPI from './cnis';
import { CNIs } from './cnis';
import * as InterconnectsAPI from './interconnects';
import { Interconnects } from './interconnects';
import * as SettingsAPI from './settings';
import { Settings } from './settings';
import * as SlotsAPI from './slots';
import { Slots } from './slots';

export class NetworkInterconnects extends APIResource {
  cnis: CNIsAPI.CNIs = new CNIsAPI.CNIs(this._client);
  interconnects: InterconnectsAPI.Interconnects = new InterconnectsAPI.Interconnects(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  slots: SlotsAPI.Slots = new SlotsAPI.Slots(this._client);
}

NetworkInterconnects.CNIs = CNIs;
NetworkInterconnects.Interconnects = Interconnects;
NetworkInterconnects.Settings = Settings;
NetworkInterconnects.Slots = Slots;

export declare namespace NetworkInterconnects {
  export { CNIs as CNIs };

  export { Interconnects as Interconnects };

  export { Settings as Settings };

  export { Slots as Slots };
}
