// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import * as SiteInfoAPI from './site-info';

export class RUM extends APIResource {
  siteInfo: SiteInfoAPI.SiteInfo = new SiteInfoAPI.SiteInfo(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace RUM {
  export import SiteInfo = SiteInfoAPI.SiteInfo;
  export type Site = SiteInfoAPI.Site;
  export type SiteInfoDeleteResponse = SiteInfoAPI.SiteInfoDeleteResponse;
  export import SitesV4PagePaginationArray = SiteInfoAPI.SitesV4PagePaginationArray;
  export type SiteInfoCreateParams = SiteInfoAPI.SiteInfoCreateParams;
  export type SiteInfoUpdateParams = SiteInfoAPI.SiteInfoUpdateParams;
  export type SiteInfoListParams = SiteInfoAPI.SiteInfoListParams;
  export type SiteInfoDeleteParams = SiteInfoAPI.SiteInfoDeleteParams;
  export type SiteInfoGetParams = SiteInfoAPI.SiteInfoGetParams;
  export import Rules = RulesAPI.Rules;
  export type RUMRule = RulesAPI.RUMRule;
  export type RuleListResponse = RulesAPI.RuleListResponse;
  export type RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export type RuleCreateParams = RulesAPI.RuleCreateParams;
  export type RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export type RuleListParams = RulesAPI.RuleListParams;
  export type RuleDeleteParams = RulesAPI.RuleDeleteParams;
}
