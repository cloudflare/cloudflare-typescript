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
  export import ARecord = RecordsAPI.ARecord;
  export import AAAARecord = RecordsAPI.AAAARecord;
  export import CAARecord = RecordsAPI.CAARecord;
  export import CERTRecord = RecordsAPI.CERTRecord;
  export import CNAMERecord = RecordsAPI.CNAMERecord;
  export import DNSKEYRecord = RecordsAPI.DNSKEYRecord;
  export import DSRecord = RecordsAPI.DSRecord;
  export import HTTPSRecord = RecordsAPI.HTTPSRecord;
  export import LOCRecord = RecordsAPI.LOCRecord;
  export import MXRecord = RecordsAPI.MXRecord;
  export import NAPTRRecord = RecordsAPI.NAPTRRecord;
  export import NSRecord = RecordsAPI.NSRecord;
  export import PTRRecord = RecordsAPI.PTRRecord;
  export import Record = RecordsAPI.Record;
  export import RecordProcessTiming = RecordsAPI.RecordProcessTiming;
  export import RecordTags = RecordsAPI.RecordTags;
  export import SMIMEARecord = RecordsAPI.SMIMEARecord;
  export import SRVRecord = RecordsAPI.SRVRecord;
  export import SSHFPRecord = RecordsAPI.SSHFPRecord;
  export import SVCBRecord = RecordsAPI.SVCBRecord;
  export import TLSARecord = RecordsAPI.TLSARecord;
  export import TTL = RecordsAPI.TTL;
  export import TXTRecord = RecordsAPI.TXTRecord;
  export import URIRecord = RecordsAPI.URIRecord;
  export import RecordCreateResponse = RecordsAPI.RecordCreateResponse;
  export import RecordUpdateResponse = RecordsAPI.RecordUpdateResponse;
  export import RecordListResponse = RecordsAPI.RecordListResponse;
  export import RecordDeleteResponse = RecordsAPI.RecordDeleteResponse;
  export import RecordEditResponse = RecordsAPI.RecordEditResponse;
  export import RecordExportResponse = RecordsAPI.RecordExportResponse;
  export import RecordGetResponse = RecordsAPI.RecordGetResponse;
  export import RecordImportResponse = RecordsAPI.RecordImportResponse;
  export import RecordScanResponse = RecordsAPI.RecordScanResponse;
  export import RecordListResponsesV4PagePaginationArray = RecordsAPI.RecordListResponsesV4PagePaginationArray;
  export import RecordCreateParams = RecordsAPI.RecordCreateParams;
  export import RecordUpdateParams = RecordsAPI.RecordUpdateParams;
  export import RecordListParams = RecordsAPI.RecordListParams;
  export import RecordDeleteParams = RecordsAPI.RecordDeleteParams;
  export import RecordEditParams = RecordsAPI.RecordEditParams;
  export import RecordExportParams = RecordsAPI.RecordExportParams;
  export import RecordGetParams = RecordsAPI.RecordGetParams;
  export import RecordImportParams = RecordsAPI.RecordImportParams;
  export import RecordScanParams = RecordsAPI.RecordScanParams;
  export import Settings = SettingsAPI.Settings;
  export import DNSSetting = SettingsAPI.DNSSetting;
  export import Nameserver = SettingsAPI.Nameserver;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import Analytics = AnalyticsAPI.Analytics;
  export import Firewall = FirewallAPI.Firewall;
  export import AttackMitigation = FirewallAPI.AttackMitigation;
  export import FirewallIPs = FirewallAPI.FirewallIPs;
  export import UpstreamIPs = FirewallAPI.UpstreamIPs;
  export import FirewallCreateResponse = FirewallAPI.FirewallCreateResponse;
  export import FirewallListResponse = FirewallAPI.FirewallListResponse;
  export import FirewallDeleteResponse = FirewallAPI.FirewallDeleteResponse;
  export import FirewallEditResponse = FirewallAPI.FirewallEditResponse;
  export import FirewallGetResponse = FirewallAPI.FirewallGetResponse;
  export import FirewallListResponsesV4PagePaginationArray = FirewallAPI.FirewallListResponsesV4PagePaginationArray;
  export import FirewallCreateParams = FirewallAPI.FirewallCreateParams;
  export import FirewallListParams = FirewallAPI.FirewallListParams;
  export import FirewallDeleteParams = FirewallAPI.FirewallDeleteParams;
  export import FirewallEditParams = FirewallAPI.FirewallEditParams;
  export import FirewallGetParams = FirewallAPI.FirewallGetParams;
}
