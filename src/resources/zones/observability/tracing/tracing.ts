// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RulesAPI from './rules';
import {
  BaseRules,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import * as SettingsAPI from './settings';
import {
  BaseSettings,
  SettingDeleteParams,
  SettingDeleteResponse,
  SettingGetParams,
  SettingGetResponse,
  SettingUpdateParams,
  SettingUpdateResponse,
  Settings,
} from './settings';

export class BaseTracing extends APIResource {
  static override readonly _key: readonly ['zones', 'observability', 'tracing'] = Object.freeze([
    'zones',
    'observability',
    'tracing',
  ] as const);
}
export class Tracing extends BaseTracing {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Tracing.Settings = Settings;
Tracing.BaseSettings = BaseSettings;
Tracing.Rules = Rules;
Tracing.BaseRules = BaseRules;

export declare namespace Tracing {
  export {
    Settings as Settings,
    BaseSettings as BaseSettings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingDeleteResponse as SettingDeleteResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingDeleteParams as SettingDeleteParams,
    type SettingGetParams as SettingGetParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };
}
