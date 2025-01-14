// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import {
  RuleListParams,
  RuleListResponse,
  RuleListResponsesSinglePage,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';

export class CloudConnector extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

CloudConnector.Rules = Rules;
CloudConnector.RuleListResponsesSinglePage = RuleListResponsesSinglePage;

export declare namespace CloudConnector {
  export {
    Rules as Rules,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
  };
}
