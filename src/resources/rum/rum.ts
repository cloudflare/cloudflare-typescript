// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/rum/rules';
import * as SiteInfosAPI from 'cloudflare/resources/rum/site-infos';

export class RUM extends APIResource {
  siteInfos: SiteInfosAPI.SiteInfos = new SiteInfosAPI.SiteInfos(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace RUM {
  export import SiteInfos = SiteInfosAPI.SiteInfos;
  export import SiteInfoCreateResponse = SiteInfosAPI.SiteInfoCreateResponse;
  export import SiteInfoUpdateResponse = SiteInfosAPI.SiteInfoUpdateResponse;
  export import SiteInfoListResponse = SiteInfosAPI.SiteInfoListResponse;
  export import SiteInfoDeleteResponse = SiteInfosAPI.SiteInfoDeleteResponse;
  export import SiteInfoGetResponse = SiteInfosAPI.SiteInfoGetResponse;
  export import SiteInfoListResponsesV4PagePaginationArray = SiteInfosAPI.SiteInfoListResponsesV4PagePaginationArray;
  export import SiteInfoCreateParams = SiteInfosAPI.SiteInfoCreateParams;
  export import SiteInfoUpdateParams = SiteInfosAPI.SiteInfoUpdateParams;
  export import SiteInfoListParams = SiteInfosAPI.SiteInfoListParams;
  export import SiteInfoDeleteParams = SiteInfosAPI.SiteInfoDeleteParams;
  export import SiteInfoGetParams = SiteInfosAPI.SiteInfoGetParams;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
}
