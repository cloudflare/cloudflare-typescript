// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import {
  BaseRules,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesSinglePage,
  RuleUpdateParams,
  RuleUpdateResponse,
  RuleUpdateResponsesSinglePage,
  Rules,
} from './rules';

export class BaseCloudConnector extends APIResource {
  static override readonly _key: readonly ['cloudConnector'] = Object.freeze(['cloudConnector'] as const);
}
export class CloudConnector extends BaseCloudConnector {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

CloudConnector.Rules = Rules;
CloudConnector.BaseRules = BaseRules;

export declare namespace CloudConnector {
  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleUpdateResponsesSinglePage as RuleUpdateResponsesSinglePage,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
  };
}
