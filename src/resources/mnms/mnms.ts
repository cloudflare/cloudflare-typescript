// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/mnms/configs/configs';
import * as RulesAPI from 'cloudflare/resources/mnms/rules/rules';

export class MNMs extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace MNMs {
  export import Configs = ConfigsAPI.Configs;
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigUpdateResponse = ConfigsAPI.ConfigUpdateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigEditResponse = ConfigsAPI.ConfigEditResponse;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
}
