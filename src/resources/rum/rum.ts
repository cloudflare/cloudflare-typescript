// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { SiteInfo } from './site-info';
import { Rules } from './rules';
import * as RulesAPI from './rules';
import * as SiteInfoAPI from './site-info';

export class RUM extends APIResource {
  siteInfo: SiteInfoAPI.SiteInfo = new SiteInfoAPI.SiteInfo(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace RUM {
  export import SiteInfo = SiteInfoAPI.SiteInfo;
  export import Site = SiteInfoAPI.Site;
  export import SiteInfoDeleteResponse = SiteInfoAPI.SiteInfoDeleteResponse;
  export import SitesV4PagePaginationArray = SiteInfoAPI.SitesV4PagePaginationArray;
  export import SiteInfoCreateParams = SiteInfoAPI.SiteInfoCreateParams;
  export import SiteInfoUpdateParams = SiteInfoAPI.SiteInfoUpdateParams;
  export import SiteInfoListParams = SiteInfoAPI.SiteInfoListParams;
  export import SiteInfoDeleteParams = SiteInfoAPI.SiteInfoDeleteParams;
  export import SiteInfoGetParams = SiteInfoAPI.SiteInfoGetParams;
  export import Rules = RulesAPI.Rules;
  export import RUMRule = RulesAPI.RUMRule;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
}
