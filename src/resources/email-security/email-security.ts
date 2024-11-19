// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InvestigateAPI from './investigate';
import {
  Investigate,
  InvestigateDetectionsParams,
  InvestigateDetectionsResponse,
  InvestigateGetParams,
  InvestigateGetResponse,
  InvestigateListParams,
  InvestigateListResponse,
  InvestigateListResponsesV4PagePaginationArray,
  InvestigatePreviewParams,
  InvestigatePreviewResponse,
  InvestigateRawParams,
  InvestigateRawResponse,
  InvestigateTraceParams,
  InvestigateTraceResponse,
} from './investigate';
import * as PhishguardAPI from './phishguard';
import { Phishguard } from './phishguard';
import * as SettingsAPI from './settings/settings';
import { Settings } from './settings/settings';

export class EmailSecurity extends APIResource {
  investigate: InvestigateAPI.Investigate = new InvestigateAPI.Investigate(this._client);
  phishguard: PhishguardAPI.Phishguard = new PhishguardAPI.Phishguard(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

EmailSecurity.Investigate = Investigate;
EmailSecurity.InvestigateListResponsesV4PagePaginationArray = InvestigateListResponsesV4PagePaginationArray;
EmailSecurity.Phishguard = Phishguard;
EmailSecurity.Settings = Settings;

export declare namespace EmailSecurity {
  export {
    Investigate as Investigate,
    type InvestigateListResponse as InvestigateListResponse,
    type InvestigateDetectionsResponse as InvestigateDetectionsResponse,
    type InvestigateGetResponse as InvestigateGetResponse,
    type InvestigatePreviewResponse as InvestigatePreviewResponse,
    type InvestigateRawResponse as InvestigateRawResponse,
    type InvestigateTraceResponse as InvestigateTraceResponse,
    InvestigateListResponsesV4PagePaginationArray as InvestigateListResponsesV4PagePaginationArray,
    type InvestigateListParams as InvestigateListParams,
    type InvestigateDetectionsParams as InvestigateDetectionsParams,
    type InvestigateGetParams as InvestigateGetParams,
    type InvestigatePreviewParams as InvestigatePreviewParams,
    type InvestigateRawParams as InvestigateRawParams,
    type InvestigateTraceParams as InvestigateTraceParams,
  };

  export { Phishguard as Phishguard };

  export { Settings as Settings };
}
