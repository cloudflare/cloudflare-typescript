// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectionsAPI from 'cloudflare/resources/page-shield/connections';

export class Connections extends APIResource {
  /**
   * Fetches a connection detected by Page Shield by connection ID.
   */
  retrieve(
    zoneId: string,
    connectionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/page_shield/connections/${connectionId}`, options);
  }
}

export interface ConnectionRetrieveResponse {
  id?: unknown;

  added_at?: unknown;

  domain_reported_malicious?: unknown;

  first_page_url?: unknown;

  first_seen_at?: unknown;

  host?: unknown;

  last_seen_at?: unknown;

  page_urls?: unknown;

  url?: unknown;

  url_contains_cdn_cgi_path?: unknown;
}

export namespace Connections {
  export import ConnectionRetrieveResponse = ConnectionsAPI.ConnectionRetrieveResponse;
}
