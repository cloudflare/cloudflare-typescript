// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DNSSECAPI from './dnssec';
import {
  DNSSEC,
  DNSSECDeleteParams,
  DNSSECDeleteResponse,
  DNSSECEditParams,
  DNSSECGetParams,
  DNSSECResource,
} from './dnssec';
import * as RecordsAPI from './records';
import {
  AAAARecord,
  ARecord,
  BatchPatch,
  BatchPut,
  CAARecord,
  CERTRecord,
  CNAMERecord,
  DNSKEYRecord,
  DSRecord,
  HTTPSRecord,
  LOCRecord,
  MXRecord,
  NAPTRRecord,
  NSRecord,
  PTRRecord,
  Record,
  RecordBatchParams,
  RecordBatchResponse,
  RecordCreateParams,
  RecordDeleteParams,
  RecordDeleteResponse,
  RecordEditParams,
  RecordExportParams,
  RecordExportResponse,
  RecordGetParams,
  RecordImportParams,
  RecordImportResponse,
  RecordListParams,
  RecordResponse,
  RecordResponsesSinglePage,
  RecordResponsesV4PagePaginationArray,
  RecordScanListParams,
  RecordScanParams,
  RecordScanResponse,
  RecordScanReviewParams,
  RecordScanReviewResponse,
  RecordScanTriggerParams,
  RecordScanTriggerResponse,
  RecordTags,
  RecordUpdateParams,
  Records,
  SMIMEARecord,
  SRVRecord,
  SSHFPRecord,
  SVCBRecord,
  TLSARecord,
  TTL,
  TXTRecord,
  URIRecord,
} from './records';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics } from './analytics/analytics';
import * as SettingsAPI from './settings/settings';
import { Settings } from './settings/settings';
import * as ZoneTransfersAPI from './zone-transfers/zone-transfers';
import { ZoneTransfers } from './zone-transfers/zone-transfers';

export class DNS extends APIResource {
  dnssec: DNSSECAPI.DNSSECResource = new DNSSECAPI.DNSSECResource(this._client);
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  zoneTransfers: ZoneTransfersAPI.ZoneTransfers = new ZoneTransfersAPI.ZoneTransfers(this._client);
}

DNS.DNSSECResource = DNSSECResource;
DNS.Records = Records;
DNS.RecordResponsesV4PagePaginationArray = RecordResponsesV4PagePaginationArray;
DNS.RecordResponsesSinglePage = RecordResponsesSinglePage;
DNS.Settings = Settings;
DNS.Analytics = Analytics;
DNS.ZoneTransfers = ZoneTransfers;

export declare namespace DNS {
  export {
    DNSSECResource as DNSSECResource,
    type DNSSEC as DNSSEC,
    type DNSSECDeleteResponse as DNSSECDeleteResponse,
    type DNSSECDeleteParams as DNSSECDeleteParams,
    type DNSSECEditParams as DNSSECEditParams,
    type DNSSECGetParams as DNSSECGetParams,
  };

  export {
    Records as Records,
    type ARecord as ARecord,
    type AAAARecord as AAAARecord,
    type BatchPatch as BatchPatch,
    type BatchPut as BatchPut,
    type CAARecord as CAARecord,
    type CERTRecord as CERTRecord,
    type CNAMERecord as CNAMERecord,
    type DNSKEYRecord as DNSKEYRecord,
    type DSRecord as DSRecord,
    type HTTPSRecord as HTTPSRecord,
    type LOCRecord as LOCRecord,
    type MXRecord as MXRecord,
    type NAPTRRecord as NAPTRRecord,
    type NSRecord as NSRecord,
    type PTRRecord as PTRRecord,
    type Record as Record,
    type RecordResponse as RecordResponse,
    type RecordTags as RecordTags,
    type SMIMEARecord as SMIMEARecord,
    type SRVRecord as SRVRecord,
    type SSHFPRecord as SSHFPRecord,
    type SVCBRecord as SVCBRecord,
    type TLSARecord as TLSARecord,
    type TTL as TTL,
    type TXTRecord as TXTRecord,
    type URIRecord as URIRecord,
    type RecordDeleteResponse as RecordDeleteResponse,
    type RecordBatchResponse as RecordBatchResponse,
    type RecordExportResponse as RecordExportResponse,
    type RecordImportResponse as RecordImportResponse,
    type RecordScanResponse as RecordScanResponse,
    type RecordScanReviewResponse as RecordScanReviewResponse,
    type RecordScanTriggerResponse as RecordScanTriggerResponse,
    RecordResponsesV4PagePaginationArray as RecordResponsesV4PagePaginationArray,
    RecordResponsesSinglePage as RecordResponsesSinglePage,
    type RecordCreateParams as RecordCreateParams,
    type RecordUpdateParams as RecordUpdateParams,
    type RecordListParams as RecordListParams,
    type RecordDeleteParams as RecordDeleteParams,
    type RecordBatchParams as RecordBatchParams,
    type RecordEditParams as RecordEditParams,
    type RecordExportParams as RecordExportParams,
    type RecordGetParams as RecordGetParams,
    type RecordImportParams as RecordImportParams,
    type RecordScanParams as RecordScanParams,
    type RecordScanListParams as RecordScanListParams,
    type RecordScanReviewParams as RecordScanReviewParams,
    type RecordScanTriggerParams as RecordScanTriggerParams,
  };

  export { Settings as Settings };

  export { Analytics as Analytics };

  export { ZoneTransfers as ZoneTransfers };
}
