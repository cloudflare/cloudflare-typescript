// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CNIsAPI from './cnis';
import {
  BaseCNIs,
  CNICreateParams,
  CNICreateResponse,
  CNIDeleteParams,
  CNIGetParams,
  CNIGetResponse,
  CNIListParams,
  CNIListResponse,
  CNIUpdateParams,
  CNIUpdateResponse,
  CNIs,
} from './cnis';
import * as InterconnectsAPI from './interconnects';
import {
  BaseInterconnects,
  InterconnectCreateParams,
  InterconnectCreateResponse,
  InterconnectDeleteParams,
  InterconnectGetParams,
  InterconnectGetResponse,
  InterconnectLOAParams,
  InterconnectListParams,
  InterconnectListResponse,
  InterconnectStatusParams,
  InterconnectStatusResponse,
  Interconnects,
} from './interconnects';
import * as SettingsAPI from './settings';
import {
  BaseSettings,
  SettingGetParams,
  SettingGetResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
} from './settings';
import * as SlotsAPI from './slots';
import { BaseSlots, SlotGetParams, SlotGetResponse, SlotListParams, SlotListResponse, Slots } from './slots';

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
  export {
    CNIs as CNIs,
    BaseCNIs as BaseCNIs,
    type CNICreateResponse as CNICreateResponse,
    type CNIUpdateResponse as CNIUpdateResponse,
    type CNIListResponse as CNIListResponse,
    type CNIGetResponse as CNIGetResponse,
    type CNICreateParams as CNICreateParams,
    type CNIUpdateParams as CNIUpdateParams,
    type CNIListParams as CNIListParams,
    type CNIDeleteParams as CNIDeleteParams,
    type CNIGetParams as CNIGetParams,
  };

  export {
    Interconnects as Interconnects,
    BaseInterconnects as BaseInterconnects,
    type InterconnectCreateResponse as InterconnectCreateResponse,
    type InterconnectListResponse as InterconnectListResponse,
    type InterconnectGetResponse as InterconnectGetResponse,
    type InterconnectStatusResponse as InterconnectStatusResponse,
    type InterconnectCreateParams as InterconnectCreateParams,
    type InterconnectListParams as InterconnectListParams,
    type InterconnectDeleteParams as InterconnectDeleteParams,
    type InterconnectGetParams as InterconnectGetParams,
    type InterconnectLOAParams as InterconnectLOAParams,
    type InterconnectStatusParams as InterconnectStatusParams,
  };

  export {
    Settings as Settings,
    BaseSettings as BaseSettings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingGetParams as SettingGetParams,
  };

  export {
    Slots as Slots,
    BaseSlots as BaseSlots,
    type SlotListResponse as SlotListResponse,
    type SlotGetResponse as SlotGetResponse,
    type SlotListParams as SlotListParams,
    type SlotGetParams as SlotGetParams,
  };
}
