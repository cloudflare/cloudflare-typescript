// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExportsAPI from 'cloudflare/resources/dns-records/exports';

export class Exports extends APIResource {
  /**
   * You can export your
   * [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this
   * endpoint.
   *
   * See
   * [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records")
   * for more information.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/zones/${zoneId}/dns_records/export`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * Exported BIND zone file.
 */
export type ExportListResponse = string;

export namespace Exports {
  export import ExportListResponse = ExportsAPI.ExportListResponse;
}
