// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import {
  BaseRules,
  RUMRule,
  RuleBulkCreateParams,
  RuleBulkCreateResponse,
  RuleCreateParams,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleListParams,
  RuleListResponse,
  RuleUpdateParams,
  Rules,
} from './rules';
import * as SiteInfoAPI from './site-info';
import {
  BaseSiteInfo,
  Site,
  SiteInfo,
  SiteInfoCreateParams,
  SiteInfoDeleteParams,
  SiteInfoDeleteResponse,
  SiteInfoGetParams,
  SiteInfoListParams,
  SiteInfoUpdateParams,
  SitesV4PagePaginationArray,
} from './site-info';

export class BaseRUM extends APIResource {
  static override readonly _key: readonly ['rum'] = Object.freeze(['rum'] as const);
}
export class RUM extends BaseRUM {
  siteInfo: SiteInfoAPI.SiteInfo = new SiteInfoAPI.SiteInfo(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

RUM.SiteInfo = SiteInfo;
RUM.BaseSiteInfo = BaseSiteInfo;
RUM.Rules = Rules;
RUM.BaseRules = BaseRules;

export declare namespace RUM {
  export {
    SiteInfo as SiteInfo,
    BaseSiteInfo as BaseSiteInfo,
    type Site as Site,
    type SiteInfoDeleteResponse as SiteInfoDeleteResponse,
    type SitesV4PagePaginationArray as SitesV4PagePaginationArray,
    type SiteInfoCreateParams as SiteInfoCreateParams,
    type SiteInfoUpdateParams as SiteInfoUpdateParams,
    type SiteInfoListParams as SiteInfoListParams,
    type SiteInfoDeleteParams as SiteInfoDeleteParams,
    type SiteInfoGetParams as SiteInfoGetParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RUMRule as RUMRule,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleBulkCreateResponse as RuleBulkCreateResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleBulkCreateParams as RuleBulkCreateParams,
  };
}
