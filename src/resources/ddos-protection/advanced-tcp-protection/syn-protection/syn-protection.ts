// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FiltersAPI from './filters/filters';
import {
  BaseFilters,
  FilterBulkDeleteParams,
  FilterBulkDeleteResponse,
  FilterCreateParams,
  FilterCreateResponse,
  FilterListParams,
  FilterListResponse,
  FilterListResponsesV4PagePaginationArray,
  Filters,
} from './filters/filters';
import * as RulesAPI from './rules/rules';
import {
  BaseRules,
  RuleBulkDeleteParams,
  RuleBulkDeleteResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesV4PagePaginationArray,
  Rules,
} from './rules/rules';

export class BaseSynProtection extends APIResource {
  static override readonly _key: readonly ['DDoSProtection', 'advancedTCPProtection', 'synProtection'] =
    Object.freeze(['DDoSProtection', 'advancedTCPProtection', 'synProtection'] as const);
}
export class SynProtection extends BaseSynProtection {
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

SynProtection.Filters = Filters;
SynProtection.BaseFilters = BaseFilters;
SynProtection.Rules = Rules;
SynProtection.BaseRules = BaseRules;

export declare namespace SynProtection {
  export {
    Filters as Filters,
    BaseFilters as BaseFilters,
    type FilterCreateResponse as FilterCreateResponse,
    type FilterListResponse as FilterListResponse,
    type FilterBulkDeleteResponse as FilterBulkDeleteResponse,
    type FilterListResponsesV4PagePaginationArray as FilterListResponsesV4PagePaginationArray,
    type FilterCreateParams as FilterCreateParams,
    type FilterListParams as FilterListParams,
    type FilterBulkDeleteParams as FilterBulkDeleteParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleBulkDeleteResponse as RuleBulkDeleteResponse,
    type RuleListResponsesV4PagePaginationArray as RuleListResponsesV4PagePaginationArray,
    type RuleCreateParams as RuleCreateParams,
    type RuleListParams as RuleListParams,
    type RuleBulkDeleteParams as RuleBulkDeleteParams,
  };
}
