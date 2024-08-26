// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Rules } from './rules';
import * as RulesAPI from './rules';

export class CloudConnector extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace CloudConnector {
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleListResponsesSinglePage = RulesAPI.RuleListResponsesSinglePage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
}
