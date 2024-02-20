// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/rum/rules';
import * as SiteInfosAPI from 'cloudflare/resources/rum/site-infos';

export class Rum extends APIResource {
  siteInfos: SiteInfosAPI.SiteInfos = new SiteInfosAPI.SiteInfos(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace Rum {
  export import SiteInfos = SiteInfosAPI.SiteInfos;
  export import SiteInfoCreateResponse = SiteInfosAPI.SiteInfoCreateResponse;
  export import SiteInfoListResponse = SiteInfosAPI.SiteInfoListResponse;
  export import SiteInfoDeleteResponse = SiteInfosAPI.SiteInfoDeleteResponse;
  export import SiteInfoGetResponse = SiteInfosAPI.SiteInfoGetResponse;
  export import SiteInfoReplaceResponse = SiteInfosAPI.SiteInfoReplaceResponse;
  export import SiteInfoListResponsesV4PagePaginationArray = SiteInfosAPI.SiteInfoListResponsesV4PagePaginationArray;
  export import SiteInfoCreateParams = SiteInfosAPI.SiteInfoCreateParams;
  export import SiteInfoListParams = SiteInfosAPI.SiteInfoListParams;
  export import SiteInfoReplaceParams = SiteInfosAPI.SiteInfoReplaceParams;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleReplaceResponse = RulesAPI.RuleReplaceResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleReplaceParams = RulesAPI.RuleReplaceParams;
}
