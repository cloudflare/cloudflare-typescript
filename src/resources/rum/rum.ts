// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as SiteInfoAPI from './site-info';
import { SiteInfo } from './site-info';

export class RUM extends APIResource {
  siteInfo: SiteInfoAPI.SiteInfo = new SiteInfoAPI.SiteInfo(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

RUM.SiteInfo = SiteInfo;
RUM.Rules = Rules;

export declare namespace RUM {
  export { SiteInfo as SiteInfo };

  export { Rules as Rules };
}
