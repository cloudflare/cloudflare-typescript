// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ScansAPI from 'cloudflare/resources/dns-records/scans';

export class Scans extends APIResource {
  /**
   * Scan for common DNS records on your domain and automatically add them to your
   * zone. Useful if you haven't updated your nameservers yet.
   */
  dnsRecordsForAZoneScanDNSRecords(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScanDNSRecordsForAZoneScanDNSRecordsResponse> {
    return (
      this._client.post(`/zones/${zoneId}/dns_records/scan`, options) as Core.APIPromise<{
        result: ScanDNSRecordsForAZoneScanDNSRecordsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ScanDNSRecordsForAZoneScanDNSRecordsResponse {
  /**
   * Number of DNS records added.
   */
  recs_added?: number;

  /**
   * Total number of DNS records parsed.
   */
  total_records_parsed?: number;
}

export namespace Scans {
  export import ScanDNSRecordsForAZoneScanDNSRecordsResponse = ScansAPI.ScanDNSRecordsForAZoneScanDNSRecordsResponse;
}
