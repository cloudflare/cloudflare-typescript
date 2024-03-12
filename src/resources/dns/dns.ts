// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RecordsAPI from 'cloudflare/resources/dns/records';
import * as AnalyticsAPI from 'cloudflare/resources/dns/analytics/analytics';
import * as FirewallAPI from 'cloudflare/resources/dns/firewall/firewall';

export class DNS extends APIResource {
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  firewall: FirewallAPI.Firewall = new FirewallAPI.Firewall(this._client);
}

export namespace DNS {
  export import Records = RecordsAPI.Records;
  export import DNSRecord = RecordsAPI.DNSRecord;
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
  export import Analytics = AnalyticsAPI.Analytics;
  export import Firewall = FirewallAPI.Firewall;
  export import DNSFirewallDNSFirewall = FirewallAPI.DNSFirewallDNSFirewall;
  export import FirewallDeleteResponse = FirewallAPI.FirewallDeleteResponse;
  export import DNSFirewallDNSFirewallsV4PagePaginationArray = FirewallAPI.DNSFirewallDNSFirewallsV4PagePaginationArray;
  export import FirewallCreateParams = FirewallAPI.FirewallCreateParams;
  export import FirewallListParams = FirewallAPI.FirewallListParams;
  export import FirewallDeleteParams = FirewallAPI.FirewallDeleteParams;
  export import FirewallEditParams = FirewallAPI.FirewallEditParams;
  export import FirewallGetParams = FirewallAPI.FirewallGetParams;
}
