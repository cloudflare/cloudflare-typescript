// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountMappingAPI from './account-mapping';
import {
  AccountMapping,
  AccountMappingCreateParams,
  AccountMappingCreateResponse,
  AccountMappingGetParams,
  AccountMappingGetResponse,
  BaseAccountMapping,
} from './account-mapping';
import * as RulesAPI from './rules';
import {
  BaseRules,
  RuleBulkEditParams,
  RuleBulkEditResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesSinglePage,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';

export class BaseEmail extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'email'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'email',
  ] as const);
}
export class Email extends BaseEmail {
  accountMapping: AccountMappingAPI.AccountMapping = new AccountMappingAPI.AccountMapping(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Email.AccountMapping = AccountMapping;
Email.BaseAccountMapping = BaseAccountMapping;
Email.Rules = Rules;
Email.BaseRules = BaseRules;

export declare namespace Email {
  export {
    AccountMapping as AccountMapping,
    BaseAccountMapping as BaseAccountMapping,
    type AccountMappingCreateResponse as AccountMappingCreateResponse,
    type AccountMappingGetResponse as AccountMappingGetResponse,
    type AccountMappingCreateParams as AccountMappingCreateParams,
    type AccountMappingGetParams as AccountMappingGetParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleBulkEditResponse as RuleBulkEditResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleBulkEditParams as RuleBulkEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
