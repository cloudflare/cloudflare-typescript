// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';
import * as SiteInfoAPI from './site-info';
import { BaseSiteInfo, SiteInfo } from './site-info';

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
  export { SiteInfo as SiteInfo, BaseSiteInfo as BaseSiteInfo };

  export { Rules as Rules, BaseRules as BaseRules };
}
