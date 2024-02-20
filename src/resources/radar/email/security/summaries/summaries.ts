// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ArcsAPI from 'cloudflare/resources/radar/email/security/summaries/arcs';
import * as DKIMsAPI from 'cloudflare/resources/radar/email/security/summaries/dkims';
import * as DmarcsAPI from 'cloudflare/resources/radar/email/security/summaries/dmarcs';
import * as MaliciousAPI from 'cloudflare/resources/radar/email/security/summaries/malicious';
import * as SpamsAPI from 'cloudflare/resources/radar/email/security/summaries/spams';
import * as SPFsAPI from 'cloudflare/resources/radar/email/security/summaries/spfs';
import * as ThreatCategoriesAPI from 'cloudflare/resources/radar/email/security/summaries/threat-categories';

export class Summaries extends APIResource {
  arcs: ArcsAPI.Arcs = new ArcsAPI.Arcs(this._client);
  dkims: DKIMsAPI.DKIMs = new DKIMsAPI.DKIMs(this._client);
  dmarcs: DmarcsAPI.Dmarcs = new DmarcsAPI.Dmarcs(this._client);
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spams: SpamsAPI.Spams = new SpamsAPI.Spams(this._client);
  spfs: SPFsAPI.SPFs = new SPFsAPI.SPFs(this._client);
  threatCategories: ThreatCategoriesAPI.ThreatCategories = new ThreatCategoriesAPI.ThreatCategories(
    this._client,
  );
}

export namespace Summaries {
  export import Arcs = ArcsAPI.Arcs;
  export import ArcListResponse = ArcsAPI.ArcListResponse;
  export import ArcListParams = ArcsAPI.ArcListParams;
  export import DKIMs = DKIMsAPI.DKIMs;
  export import DKIMListResponse = DKIMsAPI.DKIMListResponse;
  export import DKIMListParams = DKIMsAPI.DKIMListParams;
  export import Dmarcs = DmarcsAPI.Dmarcs;
  export import DmarcListResponse = DmarcsAPI.DmarcListResponse;
  export import DmarcListParams = DmarcsAPI.DmarcListParams;
  export import Malicious = MaliciousAPI.Malicious;
  export import MaliciousListResponse = MaliciousAPI.MaliciousListResponse;
  export import MaliciousListParams = MaliciousAPI.MaliciousListParams;
  export import Spams = SpamsAPI.Spams;
  export import SpamListResponse = SpamsAPI.SpamListResponse;
  export import SpamListParams = SpamsAPI.SpamListParams;
  export import SPFs = SPFsAPI.SPFs;
  export import SPFListResponse = SPFsAPI.SPFListResponse;
  export import SPFListParams = SPFsAPI.SPFListParams;
  export import ThreatCategories = ThreatCategoriesAPI.ThreatCategories;
  export import ThreatCategoryListResponse = ThreatCategoriesAPI.ThreatCategoryListResponse;
  export import ThreatCategoryListParams = ThreatCategoriesAPI.ThreatCategoryListParams;
}
