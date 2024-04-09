// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as RecordsAPI from 'cloudflare/resources/dns/records';
import * as AnalyticsAPI from 'cloudflare/resources/dns/analytics/analytics';
import * as FirewallAPI from 'cloudflare/resources/dns/firewall/firewall';

export class DNS extends APIResource {
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  firewall: FirewallAPI.FirewallResource = new FirewallAPI.FirewallResource(this._client);
}

export interface UnnamedSchemaRef6595695ff25b0614667b25f66b7bbaba {
  /**
   * Array of dimension values, representing the combination of dimension values
   * corresponding to this row.
   */
  dimensions: Array<string>;

  /**
   * Array with one item per requested metric. Each item is a single value.
   */
  metrics: Array<number>;
}

/**
 * Nominal metric values, broken down by time interval.
 */
export type UnnamedSchemaRef65be9614de145bf4a58d0fddf46df7ca = Array<unknown>;

export interface UnnamedSchemaRef85b45d163202bbab7456da6b346d9fe2 {
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
  time_delta:
    | 'all'
    | 'auto'
    | 'year'
    | 'quarter'
    | 'month'
    | 'week'
    | 'day'
    | 'hour'
    | 'dekaminute'
    | 'minute';

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
  export import RecordTags = RecordsAPI.RecordTags;
  export import SMIMEARecord = RecordsAPI.SMIMEARecord;
  export import SRVRecord = RecordsAPI.SRVRecord;
  export import SSHFPRecord = RecordsAPI.SSHFPRecord;
  export import SVCBRecord = RecordsAPI.SVCBRecord;
  export import TLSARecord = RecordsAPI.TLSARecord;
  export import TTL = RecordsAPI.TTL;
  export import TXTRecord = RecordsAPI.TXTRecord;
  export import UnnamedSchemaRef1391721bdb8938d5420a8bc738a44deb = RecordsAPI.UnnamedSchemaRef1391721bdb8938d5420a8bc738a44deb;
  export import UnnamedSchemaRef186756a742f85f535cb7bfb2d03b2b8c = RecordsAPI.UnnamedSchemaRef186756a742f85f535cb7bfb2d03b2b8c;
  export import UnnamedSchemaRef2f895e023ae55b55d2f5925449b819cd = RecordsAPI.UnnamedSchemaRef2f895e023ae55b55d2f5925449b819cd;
  export import URIRecord = RecordsAPI.URIRecord;
  export import RecordDeleteResponse = RecordsAPI.RecordDeleteResponse;
  export import RecordExportResponse = RecordsAPI.RecordExportResponse;
  export import RecordImportResponse = RecordsAPI.RecordImportResponse;
  export import RecordScanResponse = RecordsAPI.RecordScanResponse;
  export import RecordsV4PagePaginationArray = RecordsAPI.RecordsV4PagePaginationArray;
  export import RecordCreateParams = RecordsAPI.RecordCreateParams;
  export import RecordUpdateParams = RecordsAPI.RecordUpdateParams;
  export import RecordListParams = RecordsAPI.RecordListParams;
  export import RecordDeleteParams = RecordsAPI.RecordDeleteParams;
  export import RecordEditParams = RecordsAPI.RecordEditParams;
  export import RecordExportParams = RecordsAPI.RecordExportParams;
  export import RecordGetParams = RecordsAPI.RecordGetParams;
  export import RecordImportParams = RecordsAPI.RecordImportParams;
  export import RecordScanParams = RecordsAPI.RecordScanParams;
  export import Analytics = AnalyticsAPI.Analytics;
  export import FirewallResource = FirewallAPI.FirewallResource;
  export import AttackMitigation = FirewallAPI.AttackMitigation;
  export import Firewall = FirewallAPI.Firewall;
  export import FirewallIPs = FirewallAPI.FirewallIPs;
  export import UpstreamIPs = FirewallAPI.UpstreamIPs;
  export import FirewallDeleteResponse = FirewallAPI.FirewallDeleteResponse;
  export import FirewallsV4PagePaginationArray = FirewallAPI.FirewallsV4PagePaginationArray;
  export import FirewallCreateParams = FirewallAPI.FirewallCreateParams;
  export import FirewallListParams = FirewallAPI.FirewallListParams;
  export import FirewallDeleteParams = FirewallAPI.FirewallDeleteParams;
  export import FirewallEditParams = FirewallAPI.FirewallEditParams;
  export import FirewallGetParams = FirewallAPI.FirewallGetParams;
}
