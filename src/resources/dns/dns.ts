// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RecordsAPI from './records';
import * as SettingsAPI from './settings';
import * as AnalyticsAPI from './analytics/analytics';
import * as FirewallAPI from './firewall/firewall';
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

export namespace DNS {
  export import Records = RecordsAPI.Records;
  export type ARecord = RecordsAPI.ARecord;
  export type AAAARecord = RecordsAPI.AAAARecord;
  export type CAARecord = RecordsAPI.CAARecord;
  export type CERTRecord = RecordsAPI.CERTRecord;
  export type CNAMERecord = RecordsAPI.CNAMERecord;
  export type DNSKEYRecord = RecordsAPI.DNSKEYRecord;
  export type DSRecord = RecordsAPI.DSRecord;
  export type HTTPSRecord = RecordsAPI.HTTPSRecord;
  export type LOCRecord = RecordsAPI.LOCRecord;
  export type MXRecord = RecordsAPI.MXRecord;
  export type NAPTRRecord = RecordsAPI.NAPTRRecord;
  export type NSRecord = RecordsAPI.NSRecord;
  export type PTRRecord = RecordsAPI.PTRRecord;
  export type Record = RecordsAPI.Record;
  export type RecordProcessTiming = RecordsAPI.RecordProcessTiming;
  export type RecordTags = RecordsAPI.RecordTags;
  export type SMIMEARecord = RecordsAPI.SMIMEARecord;
  export type SRVRecord = RecordsAPI.SRVRecord;
  export type SSHFPRecord = RecordsAPI.SSHFPRecord;
  export type SVCBRecord = RecordsAPI.SVCBRecord;
  export type TLSARecord = RecordsAPI.TLSARecord;
  export type TTL = RecordsAPI.TTL;
  export type TXTRecord = RecordsAPI.TXTRecord;
  export type URIRecord = RecordsAPI.URIRecord;
  export type RecordCreateResponse = RecordsAPI.RecordCreateResponse;
  export type RecordUpdateResponse = RecordsAPI.RecordUpdateResponse;
  export type RecordListResponse = RecordsAPI.RecordListResponse;
  export type RecordDeleteResponse = RecordsAPI.RecordDeleteResponse;
  export type RecordBatchResponse = RecordsAPI.RecordBatchResponse;
  export type RecordEditResponse = RecordsAPI.RecordEditResponse;
  export type RecordExportResponse = RecordsAPI.RecordExportResponse;
  export type RecordGetResponse = RecordsAPI.RecordGetResponse;
  export type RecordImportResponse = RecordsAPI.RecordImportResponse;
  export type RecordScanResponse = RecordsAPI.RecordScanResponse;
  export import RecordListResponsesV4PagePaginationArray = RecordsAPI.RecordListResponsesV4PagePaginationArray;
  export type RecordCreateParams = RecordsAPI.RecordCreateParams;
  export type RecordUpdateParams = RecordsAPI.RecordUpdateParams;
  export type RecordListParams = RecordsAPI.RecordListParams;
  export type RecordDeleteParams = RecordsAPI.RecordDeleteParams;
  export type RecordBatchParams = RecordsAPI.RecordBatchParams;
  export type RecordEditParams = RecordsAPI.RecordEditParams;
  export type RecordExportParams = RecordsAPI.RecordExportParams;
  export type RecordGetParams = RecordsAPI.RecordGetParams;
  export type RecordImportParams = RecordsAPI.RecordImportParams;
  export type RecordScanParams = RecordsAPI.RecordScanParams;
  export import Settings = SettingsAPI.Settings;
  export type DNSSetting = SettingsAPI.DNSSetting;
  export type Nameserver = SettingsAPI.Nameserver;
  export type SettingEditResponse = SettingsAPI.SettingEditResponse;
  export type SettingGetResponse = SettingsAPI.SettingGetResponse;
  export type SettingEditParams = SettingsAPI.SettingEditParams;
  export type SettingGetParams = SettingsAPI.SettingGetParams;
  export import Analytics = AnalyticsAPI.Analytics;
  export import Firewall = FirewallAPI.Firewall;
  export type AttackMitigation = FirewallAPI.AttackMitigation;
  export type FirewallIPs = FirewallAPI.FirewallIPs;
  export type UpstreamIPs = FirewallAPI.UpstreamIPs;
  export type FirewallCreateResponse = FirewallAPI.FirewallCreateResponse;
  export type FirewallListResponse = FirewallAPI.FirewallListResponse;
  export type FirewallDeleteResponse = FirewallAPI.FirewallDeleteResponse;
  export type FirewallEditResponse = FirewallAPI.FirewallEditResponse;
  export type FirewallGetResponse = FirewallAPI.FirewallGetResponse;
  export import FirewallListResponsesV4PagePaginationArray = FirewallAPI.FirewallListResponsesV4PagePaginationArray;
  export type FirewallCreateParams = FirewallAPI.FirewallCreateParams;
  export type FirewallListParams = FirewallAPI.FirewallListParams;
  export type FirewallDeleteParams = FirewallAPI.FirewallDeleteParams;
  export type FirewallEditParams = FirewallAPI.FirewallEditParams;
  export type FirewallGetParams = FirewallAPI.FirewallGetParams;
}
