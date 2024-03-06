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
  export import DNSARecord = RecordsAPI.DNSARecord;
  export import DNSAAAARecord = RecordsAPI.DNSAAAARecord;
  export import DNSCAARecord = RecordsAPI.DNSCAARecord;
  export import DNSCertRecord = RecordsAPI.DNSCertRecord;
  export import DNSCNAMERecord = RecordsAPI.DNSCNAMERecord;
  export import DNSDNSKEYRecord = RecordsAPI.DNSDNSKEYRecord;
  export import DNSDSRecord = RecordsAPI.DNSDSRecord;
  export import DNSHTTPSRecord = RecordsAPI.DNSHTTPSRecord;
  export import DNSLOCRecord = RecordsAPI.DNSLOCRecord;
  export import DNSMXRecord = RecordsAPI.DNSMXRecord;
  export import DNSNAPTRRecord = RecordsAPI.DNSNAPTRRecord;
  export import DNSNSRecord = RecordsAPI.DNSNSRecord;
  export import DNSPTRRecord = RecordsAPI.DNSPTRRecord;
  export import DNSRecord = RecordsAPI.DNSRecord;
  export import DNSSMIMERecord = RecordsAPI.DNSSMIMERecord;
  export import DNSSRVRecord = RecordsAPI.DNSSRVRecord;
  export import DNSSSHFPRecord = RecordsAPI.DNSSSHFPRecord;
  export import DNSSVCBRecord = RecordsAPI.DNSSVCBRecord;
  export import DNSTLSARecord = RecordsAPI.DNSTLSARecord;
  export import DNSTXTRecord = RecordsAPI.DNSTXTRecord;
  export import DNSURIRecord = RecordsAPI.DNSURIRecord;
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
