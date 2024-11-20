// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccessRulesAPI from './access-rules';
import {
  ASNConfiguration,
  AccessRuleCIDRConfiguration,
  AccessRuleCreateParams,
  AccessRuleCreateResponse,
  AccessRuleIPConfiguration,
  AccessRuleListParams,
  AccessRuleListResponse,
  AccessRuleListResponsesV4PagePaginationArray,
  AccessRules,
  CountryConfiguration,
  IPV6Configuration,
} from './access-rules';
import * as LockdownsAPI from './lockdowns';
import {
  Configuration,
  Lockdown,
  LockdownCIDRConfiguration,
  LockdownIPConfiguration,
  LockdownURL,
  Lockdowns,
} from './lockdowns';
import * as RulesAPI from './rules';
import { DeletedFilter, FirewallRule, Product, Rules } from './rules';
import * as UARulesAPI from './ua-rules';
import { UARules } from './ua-rules';
import * as WAFAPI from './waf/waf';
import { WAF } from './waf/waf';

export class Firewall extends APIResource {
  lockdowns: LockdownsAPI.Lockdowns = new LockdownsAPI.Lockdowns(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
  uaRules: UARulesAPI.UARules = new UARulesAPI.UARules(this._client);
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
}

Firewall.Lockdowns = Lockdowns;
Firewall.Rules = Rules;
Firewall.AccessRules = AccessRules;
Firewall.AccessRuleListResponsesV4PagePaginationArray = AccessRuleListResponsesV4PagePaginationArray;
Firewall.UARules = UARules;
Firewall.WAF = WAF;

export declare namespace Firewall {
  export {
    Lockdowns as Lockdowns,
    type Configuration as Configuration,
    type Lockdown as Lockdown,
    type LockdownCIDRConfiguration as LockdownCIDRConfiguration,
    type LockdownIPConfiguration as LockdownIPConfiguration,
    type LockdownURL as LockdownURL,
  };

  export {
    Rules as Rules,
    type FirewallRule as FirewallRule,
    type Product as Product,
    type DeletedFilter as DeletedFilter,
  };

  export {
    AccessRules as AccessRules,
    type AccessRuleCIDRConfiguration as AccessRuleCIDRConfiguration,
    type AccessRuleIPConfiguration as AccessRuleIPConfiguration,
    type ASNConfiguration as ASNConfiguration,
    type CountryConfiguration as CountryConfiguration,
    type IPV6Configuration as IPV6Configuration,
    type AccessRuleCreateResponse as AccessRuleCreateResponse,
    type AccessRuleListResponse as AccessRuleListResponse,
    AccessRuleListResponsesV4PagePaginationArray as AccessRuleListResponsesV4PagePaginationArray,
    type AccessRuleCreateParams as AccessRuleCreateParams,
    type AccessRuleListParams as AccessRuleListParams,
  };

  export { UARules as UARules };

  export { WAF as WAF };
}
