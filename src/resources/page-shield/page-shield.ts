// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PageShieldAPI from 'cloudflare/resources/page-shield/page-shield';
import * as ConnectionsAPI from 'cloudflare/resources/page-shield/connections';
import * as PoliciesAPI from 'cloudflare/resources/page-shield/policies';
import * as ScriptsAPI from 'cloudflare/resources/page-shield/scripts';

export class PageShield extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);

  /**
   * Updates Page Shield settings.
   */
  update(
    params: PageShieldUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldUpdateZoneSettings> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/page_shield`, { body, ...options }) as Core.APIPromise<{
        result: PageShieldUpdateZoneSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the Page Shield settings.
   */
  get(
    params: PageShieldGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldGetZoneSettings> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/page_shield`, options) as Core.APIPromise<{
        result: PageShieldGetZoneSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PageShieldGetZoneSettings {
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

export interface PageShieldUpdateZoneSettings {
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

export interface PageShieldUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: When true, indicates that Page Shield is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: When true, CSP reports will be sent to
   * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
   */
  use_cloudflare_reporting_endpoint?: boolean;

  /**
   * Body param: When true, the paths associated with connections URLs will also be
   * analyzed.
   */
  use_connection_url_path?: boolean;
}

export interface PageShieldGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace PageShield {
  export import PageShieldGetZoneSettings = PageShieldAPI.PageShieldGetZoneSettings;
  export import PageShieldUpdateZoneSettings = PageShieldAPI.PageShieldUpdateZoneSettings;
  export import PageShieldUpdateParams = PageShieldAPI.PageShieldUpdateParams;
  export import PageShieldGetParams = PageShieldAPI.PageShieldGetParams;
  export import Policies = PoliciesAPI.Policies;
  export import PageShieldPageshieldPolicy = PoliciesAPI.PageShieldPageshieldPolicy;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import Connections = ConnectionsAPI.Connections;
  export import PageShieldConnection = ConnectionsAPI.PageShieldConnection;
  export import ConnectionListResponse = ConnectionsAPI.ConnectionListResponse;
  export import ConnectionListParams = ConnectionsAPI.ConnectionListParams;
  export import ConnectionGetParams = ConnectionsAPI.ConnectionGetParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import PageShieldScript = ScriptsAPI.PageShieldScript;
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptGetResponse = ScriptsAPI.ScriptGetResponse;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
}
