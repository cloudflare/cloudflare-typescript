// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';

export class CloudConnector extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace CloudConnector {
  export import Rules = RulesAPI.Rules;
  export type RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export type RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleListResponsesSinglePage = RulesAPI.RuleListResponsesSinglePage;
  export type RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export type RuleListParams = RulesAPI.RuleListParams;
}
