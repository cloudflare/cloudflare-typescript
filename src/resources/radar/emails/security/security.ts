// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DmarcAPI from 'cloudflare/resources/radar/emails/security/dmarc';
import * as MaliciousAPI from 'cloudflare/resources/radar/emails/security/malicious';
import * as SpamAPI from 'cloudflare/resources/radar/emails/security/spam';
import * as SPFAPI from 'cloudflare/resources/radar/emails/security/spf';
import * as ThreatCategoryAPI from 'cloudflare/resources/radar/emails/security/threat-category';
import * as TopAPI from 'cloudflare/resources/radar/emails/security/top/top';

export class Security extends APIResource {
  dmarc: DmarcAPI.Dmarc = new DmarcAPI.Dmarc(this._client);
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spam: SpamAPI.Spam = new SpamAPI.Spam(this._client);
  spf: SPFAPI.SPF = new SPFAPI.SPF(this._client);
  threatCategory: ThreatCategoryAPI.ThreatCategory = new ThreatCategoryAPI.ThreatCategory(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace Security {
  export import Dmarc = DmarcAPI.Dmarc;
  export import DmarcListResponse = DmarcAPI.DmarcListResponse;
  export import DmarcListParams = DmarcAPI.DmarcListParams;
  export import Malicious = MaliciousAPI.Malicious;
  export import MaliciousListResponse = MaliciousAPI.MaliciousListResponse;
  export import MaliciousListParams = MaliciousAPI.MaliciousListParams;
  export import Spam = SpamAPI.Spam;
  export import SpamListResponse = SpamAPI.SpamListResponse;
  export import SpamListParams = SpamAPI.SpamListParams;
  export import SPF = SPFAPI.SPF;
  export import SPFListResponse = SPFAPI.SPFListResponse;
  export import SPFListParams = SPFAPI.SPFListParams;
  export import ThreatCategory = ThreatCategoryAPI.ThreatCategory;
  export import ThreatCategoryListResponse = ThreatCategoryAPI.ThreatCategoryListResponse;
  export import ThreatCategoryListParams = ThreatCategoryAPI.ThreatCategoryListParams;
  export import Top = TopAPI.Top;
}
