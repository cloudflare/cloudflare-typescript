// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigsAPI from './configs/configs';
import {
  ConfigCreateParams,
  ConfigCreateResponse,
  ConfigDeleteParams,
  ConfigDeleteResponse,
  ConfigEditParams,
  ConfigEditResponse,
  ConfigGetParams,
  ConfigGetResponse,
  ConfigUpdateParams,
  ConfigUpdateResponse,
  Configs,
} from './configs/configs';
import * as RulesAPI from './rules/rules';
import {
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleEditParams,
  RuleEditResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesSinglePage,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules/rules';

export class MagicNetworkMonitoring extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

MagicNetworkMonitoring.Configs = Configs;
MagicNetworkMonitoring.Rules = Rules;
MagicNetworkMonitoring.RuleListResponsesSinglePage = RuleListResponsesSinglePage;

export declare namespace MagicNetworkMonitoring {
  export {
    Configs as Configs,
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigEditResponse as ConfigEditResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };

  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleEditResponse as RuleEditResponse,
    type RuleGetResponse as RuleGetResponse,
    RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
