// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InvestigateAPI from './investigate';
import * as PhishguardAPI from './phishguard';
import * as SettingsAPI from './settings/settings';

export class EmailSecurity extends APIResource {
  investigate: InvestigateAPI.Investigate = new InvestigateAPI.Investigate(this._client);
  phishguard: PhishguardAPI.Phishguard = new PhishguardAPI.Phishguard(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace EmailSecurity {
  export import Investigate = InvestigateAPI.Investigate;
  export type InvestigateListResponse = InvestigateAPI.InvestigateListResponse;
  export type InvestigateDetectionsResponse = InvestigateAPI.InvestigateDetectionsResponse;
  export type InvestigateGetResponse = InvestigateAPI.InvestigateGetResponse;
  export type InvestigatePreviewResponse = InvestigateAPI.InvestigatePreviewResponse;
  export type InvestigateRawResponse = InvestigateAPI.InvestigateRawResponse;
  export type InvestigateTraceResponse = InvestigateAPI.InvestigateTraceResponse;
  export import InvestigateListResponsesV4PagePaginationArray = InvestigateAPI.InvestigateListResponsesV4PagePaginationArray;
  export type InvestigateListParams = InvestigateAPI.InvestigateListParams;
  export type InvestigateDetectionsParams = InvestigateAPI.InvestigateDetectionsParams;
  export type InvestigateGetParams = InvestigateAPI.InvestigateGetParams;
  export type InvestigatePreviewParams = InvestigateAPI.InvestigatePreviewParams;
  export type InvestigateRawParams = InvestigateAPI.InvestigateRawParams;
  export type InvestigateTraceParams = InvestigateAPI.InvestigateTraceParams;
  export import Phishguard = PhishguardAPI.Phishguard;
  export type PhishguardListResponse = PhishguardAPI.PhishguardListResponse;
  export import PhishguardListResponsesSinglePage = PhishguardAPI.PhishguardListResponsesSinglePage;
  export type PhishguardListParams = PhishguardAPI.PhishguardListParams;
  export import Settings = SettingsAPI.Settings;
}
