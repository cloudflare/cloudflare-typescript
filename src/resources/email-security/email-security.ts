// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Investigate } from './investigate';
import { Phishguard } from './phishguard';
import { Settings } from './settings/settings';
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
  export import InvestigateListResponse = InvestigateAPI.InvestigateListResponse;
  export import InvestigateDetectionsResponse = InvestigateAPI.InvestigateDetectionsResponse;
  export import InvestigateGetResponse = InvestigateAPI.InvestigateGetResponse;
  export import InvestigatePreviewResponse = InvestigateAPI.InvestigatePreviewResponse;
  export import InvestigateRawResponse = InvestigateAPI.InvestigateRawResponse;
  export import InvestigateTraceResponse = InvestigateAPI.InvestigateTraceResponse;
  export import InvestigateListResponsesV4PagePaginationArray = InvestigateAPI.InvestigateListResponsesV4PagePaginationArray;
  export import InvestigateListParams = InvestigateAPI.InvestigateListParams;
  export import InvestigateDetectionsParams = InvestigateAPI.InvestigateDetectionsParams;
  export import InvestigateGetParams = InvestigateAPI.InvestigateGetParams;
  export import InvestigatePreviewParams = InvestigateAPI.InvestigatePreviewParams;
  export import InvestigateRawParams = InvestigateAPI.InvestigateRawParams;
  export import InvestigateTraceParams = InvestigateAPI.InvestigateTraceParams;
  export import Phishguard = PhishguardAPI.Phishguard;
  export import PhishguardListResponse = PhishguardAPI.PhishguardListResponse;
  export import PhishguardListResponsesSinglePage = PhishguardAPI.PhishguardListResponsesSinglePage;
  export import PhishguardListParams = PhishguardAPI.PhishguardListParams;
  export import Settings = SettingsAPI.Settings;
}
