// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RecordsAPI from './records';
import {
  AAAARecord,
  ARecord,
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
  RecordCreateResponse,
  RecordDeleteParams,
  RecordDeleteResponse,
  RecordEditParams,
  RecordEditResponse,
  RecordExportParams,
  RecordExportResponse,
  RecordGetParams,
  RecordGetResponse,
  RecordImportParams,
  RecordImportResponse,
  RecordListParams,
  RecordListResponse,
  RecordListResponsesV4PagePaginationArray,
  RecordProcessTiming,
  RecordScanParams,
  RecordScanResponse,
  RecordTags,
  RecordUpdateParams,
  RecordUpdateResponse,
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
import * as FirewallAPI from './firewall/firewall';
import {
  AttackMitigation,
  Firewall,
  FirewallCreateParams,
  FirewallCreateResponse,
  FirewallDeleteParams,
  FirewallDeleteResponse,
  FirewallEditParams,
  FirewallEditResponse,
  FirewallGetParams,
  FirewallGetResponse,
  FirewallIPs,
  FirewallListParams,
  FirewallListResponse,
  FirewallListResponsesV4PagePaginationArray,
  UpstreamIPs,
} from './firewall/firewall';
import * as SettingsAPI from './settings/settings';
import {
  DNSSetting,
  Nameserver,
  SettingEditParams,
  SettingEditResponse,
  SettingGetParams,
  SettingGetResponse,
  Settings,
} from './settings/settings';
import * as AnalyticsAnalyticsAPI from './firewall/analytics/analytics';

export class DNS extends APIResource {
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  firewall: FirewallAPI.Firewall = new FirewallAPI.Firewall(this._client);
}

/**
 * Nominal metric values, broken down by time interval.
 */
export type DNSAnalyticsNominalMetric = Array<unknown>;

export interface DNSAnalyticsQuery {
  /**
   * Array of dimension names.
   */
  dimensions: Array<string>;

  /**
   * Limit number of returned metrics.
   */
  limit: number;

  /**
   * Array of metric names.
   */
  metrics: Array<string>;

  /**
   * Start date and time of requesting data period in ISO 8601 format.
   */
  since: string;

  /**
   * Unit of time to group data by.
   */
  time_delta: AnalyticsAnalyticsAPI.Delta;

  /**
   * End date and time of requesting data period in ISO 8601 format.
   */
  until: string;

  /**
   * Segmentation filter in 'attribute operator value' format.
   */
  filters?: string;

  /**
   * Array of dimensions to sort by, where each dimension may be prefixed by -
   * (descending) or + (ascending).
   */
  sort?: Array<string>;
}

DNS.Records = Records;
DNS.RecordListResponsesV4PagePaginationArray = RecordListResponsesV4PagePaginationArray;
DNS.Settings = Settings;
DNS.Analytics = Analytics;
DNS.Firewall = Firewall;
DNS.FirewallListResponsesV4PagePaginationArray = FirewallListResponsesV4PagePaginationArray;

export declare namespace DNS {
  export {
    Records as Records,
    type ARecord as ARecord,
    type AAAARecord as AAAARecord,
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
    type RecordProcessTiming as RecordProcessTiming,
    type RecordTags as RecordTags,
    type SMIMEARecord as SMIMEARecord,
    type SRVRecord as SRVRecord,
    type SSHFPRecord as SSHFPRecord,
    type SVCBRecord as SVCBRecord,
    type TLSARecord as TLSARecord,
    type TTL as TTL,
    type TXTRecord as TXTRecord,
    type URIRecord as URIRecord,
    type RecordCreateResponse as RecordCreateResponse,
    type RecordUpdateResponse as RecordUpdateResponse,
    type RecordListResponse as RecordListResponse,
    type RecordDeleteResponse as RecordDeleteResponse,
    type RecordBatchResponse as RecordBatchResponse,
    type RecordEditResponse as RecordEditResponse,
    type RecordExportResponse as RecordExportResponse,
    type RecordGetResponse as RecordGetResponse,
    type RecordImportResponse as RecordImportResponse,
    type RecordScanResponse as RecordScanResponse,
    RecordListResponsesV4PagePaginationArray as RecordListResponsesV4PagePaginationArray,
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
  };

  export {
    Settings as Settings,
    type DNSSetting as DNSSetting,
    type Nameserver as Nameserver,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };

  export { Analytics as Analytics };

  export {
    Firewall as Firewall,
    type AttackMitigation as AttackMitigation,
    type FirewallIPs as FirewallIPs,
    type UpstreamIPs as UpstreamIPs,
    type FirewallCreateResponse as FirewallCreateResponse,
    type FirewallListResponse as FirewallListResponse,
    type FirewallDeleteResponse as FirewallDeleteResponse,
    type FirewallEditResponse as FirewallEditResponse,
    type FirewallGetResponse as FirewallGetResponse,
    FirewallListResponsesV4PagePaginationArray as FirewallListResponsesV4PagePaginationArray,
    type FirewallCreateParams as FirewallCreateParams,
    type FirewallListParams as FirewallListParams,
    type FirewallDeleteParams as FirewallDeleteParams,
    type FirewallEditParams as FirewallEditParams,
    type FirewallGetParams as FirewallGetParams,
  };
}
