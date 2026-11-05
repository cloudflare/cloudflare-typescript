// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import {
  BaseRules,
  MonetizationRule,
  MonetizationRuleCollection,
  MonetizationRuleInput,
  MonetizationRuleInputFixedPrice,
  MonetizationRuleInputOriginControlled,
  MonetizationRulePatch,
  MonetizationRulesetInput,
  RuleDeleteParams,
  RuleDeleteRuleParams,
  RuleEditRuleParams,
  RuleGetParams,
  RuleGetRuleParams,
  RuleUpdateParams,
  Rules,
} from './rules';

export class BaseMonetization extends APIResource {
  static override readonly _key: readonly ['monetization'] = Object.freeze(['monetization'] as const);
}
export class Monetization extends BaseMonetization {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export interface MonetizationAccountEligibilityCheckInput {
  /**
   * Confirms acceptance of the Monetization Gateway terms of service.
   */
  acceptedTermsOfService: true;
}

export interface MonetizationAccountEligibilityCheckResponse {
  errors: Array<MonetizationAccountEligibilityCheckResponse.Error>;

  messages: Array<MonetizationAccountEligibilityCheckResponse.Message>;

  result: MonetizationEligibilityResult;

  success: true;
}

export namespace MonetizationAccountEligibilityCheckResponse {
  export interface Error {
    code?: number;

    message?: string;
  }

  export interface Message {
    code?: number;

    message?: string;
  }
}

export interface MonetizationEligibilityResponse {
  errors: Array<MonetizationEligibilityResponse.Error>;

  messages: Array<MonetizationEligibilityResponse.Message>;

  result: MonetizationEligibilityResult;

  success: true;
}

export namespace MonetizationEligibilityResponse {
  export interface Error {
    code?: number;

    message?: string;
  }

  export interface Message {
    code?: number;

    message?: string;
  }
}

export interface MonetizationEligibilityResult {
  /**
   * Current monetization eligibility decision.
   */
  status: 'pending' | 'approved' | 'rejected';

  /**
   * Public, human-readable reasons for a rejected decision, when available.
   */
  reasons?: Array<string>;
}

export interface MonetizationZoneEligibilityCheckResponse {
  errors: Array<MonetizationZoneEligibilityCheckResponse.Error>;

  messages: Array<MonetizationZoneEligibilityCheckResponse.Message>;

  result: MonetizationZoneEligibilityCheckResponse.Result;

  success: true;
}

export namespace MonetizationZoneEligibilityCheckResponse {
  export interface Error {
    code?: number;

    message?: string;
  }

  export interface Message {
    code?: number;

    message?: string;
  }

  export interface Result {
    /**
     * Whether this check successfully enabled the zone entitlement. Only approved
     * decisions can enable it.
     */
    enabled: boolean;

    /**
     * Current monetization eligibility decision.
     */
    status: 'pending' | 'approved' | 'rejected';

    /**
     * Public, human-readable reasons for a rejected decision, when available.
     */
    reasons?: Array<string>;
  }
}

Monetization.Rules = Rules;
Monetization.BaseRules = BaseRules;

export declare namespace Monetization {
  export {
    type MonetizationAccountEligibilityCheckInput as MonetizationAccountEligibilityCheckInput,
    type MonetizationAccountEligibilityCheckResponse as MonetizationAccountEligibilityCheckResponse,
    type MonetizationEligibilityResponse as MonetizationEligibilityResponse,
    type MonetizationEligibilityResult as MonetizationEligibilityResult,
    type MonetizationZoneEligibilityCheckResponse as MonetizationZoneEligibilityCheckResponse,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type MonetizationRule as MonetizationRule,
    type MonetizationRuleCollection as MonetizationRuleCollection,
    type MonetizationRuleInput as MonetizationRuleInput,
    type MonetizationRuleInputFixedPrice as MonetizationRuleInputFixedPrice,
    type MonetizationRuleInputOriginControlled as MonetizationRuleInputOriginControlled,
    type MonetizationRulePatch as MonetizationRulePatch,
    type MonetizationRulesetInput as MonetizationRulesetInput,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleDeleteRuleParams as RuleDeleteRuleParams,
    type RuleEditRuleParams as RuleEditRuleParams,
    type RuleGetParams as RuleGetParams,
    type RuleGetRuleParams as RuleGetRuleParams,
  };
}
