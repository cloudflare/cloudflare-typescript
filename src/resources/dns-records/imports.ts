// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ImportsAPI from 'cloudflare/resources/dns-records/imports';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Imports extends APIResource {
  /**
   * You can upload your
   * [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this
   * endpoint. It assumes that cURL is called from a location with bind_config.txt
   * (valid BIND config) present.
   *
   * See
   * [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records")
   * for more information.
   */
  dnsRecordsForAZoneImportDNSRecords(
    zoneId: string,
    body: ImportDNSRecordsForAZoneImportDNSRecordsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImportDNSRecordsForAZoneImportDNSRecordsResponse> {
    return (
      this._client.post(
        `/zones/${zoneId}/dns_records/import`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ImportDNSRecordsForAZoneImportDNSRecordsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ImportDNSRecordsForAZoneImportDNSRecordsResponse {
  /**
   * Number of DNS records added.
   */
  recs_added?: number;

  /**
   * Total number of DNS records parsed.
   */
  total_records_parsed?: number;
}

export interface ImportDNSRecordsForAZoneImportDNSRecordsParams {
  /**
   * BIND config to import.
   *
   * **Tip:** When using cURL, a file can be uploaded using
   * `--form 'file=@bind_config.txt'`.
   */
  file: string;

  /**
   * Whether or not proxiable records should receive the performance and security
   * benefits of Cloudflare.
   *
   * The value should be either `true` or `false`.
   */
  proxied?: string;
}

export namespace Imports {
  export import ImportDNSRecordsForAZoneImportDNSRecordsResponse = ImportsAPI.ImportDNSRecordsForAZoneImportDNSRecordsResponse;
  export import ImportDNSRecordsForAZoneImportDNSRecordsParams = ImportsAPI.ImportDNSRecordsForAZoneImportDNSRecordsParams;
}
