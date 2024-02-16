// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PageShieldsAPI from 'cloudflare/resources/page-shields/page-shields';
import * as ConnectionsAPI from 'cloudflare/resources/page-shields/connections';
import * as ScriptsAPI from 'cloudflare/resources/page-shields/scripts';

export class PageShields extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);

  /**
   * Fetches the Page Shield settings.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PageShieldListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/page_shield`, options) as Core.APIPromise<{
        result: PageShieldListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates Page Shield settings.
   */
  pageShieldUpdatePageShieldSettings(
    zoneId: string,
    body: PageShieldPageShieldUpdatePageShieldSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldPageShieldUpdatePageShieldSettingsResponse> {
    return (
      this._client.put(`/zones/${zoneId}/page_shield`, { body, ...options }) as Core.APIPromise<{
        result: PageShieldPageShieldUpdatePageShieldSettingsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PageShieldListResponse {
  /**
   * When true, indicates that Page Shield is enabled.
   */
  enabled?: boolean;

  /**
   * The timestamp of when Page Shield was last updated.
   */
  updated_at?: string;

  /**
   * When true, CSP reports will be sent to
   * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
   */
  use_cloudflare_reporting_endpoint?: boolean;

  /**
   * When true, the paths associated with connections URLs will also be analyzed.
   */
  use_connection_url_path?: boolean;
}

export interface PageShieldPageShieldUpdatePageShieldSettingsResponse {
  /**
   * When true, indicates that Page Shield is enabled.
   */
  enabled?: boolean;

  /**
   * The timestamp of when Page Shield was last updated.
   */
  updated_at?: string;

  /**
   * When true, CSP reports will be sent to
   * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
   */
  use_cloudflare_reporting_endpoint?: boolean;

  /**
   * When true, the paths associated with connections URLs will also be analyzed.
   */
  use_connection_url_path?: boolean;
}

export interface PageShieldPageShieldUpdatePageShieldSettingsParams {
  /**
   * When true, indicates that Page Shield is enabled.
   */
  enabled?: boolean;

  /**
   * When true, CSP reports will be sent to
   * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
   */
  use_cloudflare_reporting_endpoint?: boolean;

  /**
   * When true, the paths associated with connections URLs will also be analyzed.
   */
  use_connection_url_path?: boolean;
}

export namespace PageShields {
  export import PageShieldListResponse = PageShieldsAPI.PageShieldListResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsResponse = PageShieldsAPI.PageShieldPageShieldUpdatePageShieldSettingsResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsParams = PageShieldsAPI.PageShieldPageShieldUpdatePageShieldSettingsParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionGetResponse = ConnectionsAPI.ConnectionGetResponse;
  export import ConnectionPageShieldListPageShieldConnectionsResponse = ConnectionsAPI.ConnectionPageShieldListPageShieldConnectionsResponse;
  export import ConnectionPageShieldListPageShieldConnectionsParams = ConnectionsAPI.ConnectionPageShieldListPageShieldConnectionsParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptGetResponse = ScriptsAPI.ScriptGetResponse;
  export import ScriptPageShieldListPageShieldScriptsResponse = ScriptsAPI.ScriptPageShieldListPageShieldScriptsResponse;
  export import ScriptPageShieldListPageShieldScriptsParams = ScriptsAPI.ScriptPageShieldListPageShieldScriptsParams;
}
