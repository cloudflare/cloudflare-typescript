// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/magic-network-monitoring/configs/configs';
import * as RulesAPI from 'cloudflare/resources/magic-network-monitoring/rules/rules';

export class MagicNetworkMonitoring extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace MagicNetworkMonitoring {
  export import Configs = ConfigsAPI.Configs;
  export import MagicVisibilityMNMConfig = ConfigsAPI.MagicVisibilityMNMConfig;
  export import Rules = RulesAPI.Rules;
  export import MagicVisibilityMNMRule = RulesAPI.MagicVisibilityMNMRule;
  export import RuleListResponse = RulesAPI.RuleListResponse;
}
