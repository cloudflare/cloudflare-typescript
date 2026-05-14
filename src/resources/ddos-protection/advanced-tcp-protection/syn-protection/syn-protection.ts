// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as FiltersAPI from './filters/filters';
import {
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
  RuleBulkDeleteParams,
  RuleBulkDeleteResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesV4PagePaginationArray,
  Rules,
} from './rules/rules';

export class SynProtection extends APIResource {
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

SynProtection.Filters = Filters;
SynProtection.FilterListResponsesV4PagePaginationArray = FilterListResponsesV4PagePaginationArray;
SynProtection.Rules = Rules;
SynProtection.RuleListResponsesV4PagePaginationArray = RuleListResponsesV4PagePaginationArray;

export declare namespace SynProtection {
  export {
    Filters as Filters,
    type FilterCreateResponse as FilterCreateResponse,
    type FilterListResponse as FilterListResponse,
    type FilterBulkDeleteResponse as FilterBulkDeleteResponse,
    FilterListResponsesV4PagePaginationArray as FilterListResponsesV4PagePaginationArray,
    type FilterCreateParams as FilterCreateParams,
    type FilterListParams as FilterListParams,
    type FilterBulkDeleteParams as FilterBulkDeleteParams,
  };

  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleBulkDeleteResponse as RuleBulkDeleteResponse,
    RuleListResponsesV4PagePaginationArray as RuleListResponsesV4PagePaginationArray,
    type RuleCreateParams as RuleCreateParams,
    type RuleListParams as RuleListParams,
    type RuleBulkDeleteParams as RuleBulkDeleteParams,
  };
}
