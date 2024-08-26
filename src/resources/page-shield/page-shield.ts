// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConnectionsAPI from './connections';
import * as CookiesAPI from './cookies';
import * as PoliciesAPI from './policies';
import * as ScriptsAPI from './scripts';

export class PageShield extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  cookies: CookiesAPI.Cookies = new CookiesAPI.Cookies(this._client);

  /**
   * Updates Page Shield settings.
   */
  update(
    params: PageShieldUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/page_shield`, { body, ...options }) as Core.APIPromise<{
        result: PageShieldUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the Page Shield settings.
   */
  get(params: PageShieldGetParams, options?: Core.RequestOptions): Core.APIPromise<Setting | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/page_shield`, options) as Core.APIPromise<{
        result: Setting | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Setting {
  /**
   * When true, indicates that Page Shield is enabled.
   */
  enabled: boolean;

  /**
   * The timestamp of when Page Shield was last updated.
   */
  updated_at: string;

  /**
   * When true, CSP reports will be sent to
   * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
   */
  use_cloudflare_reporting_endpoint: boolean;

  /**
   * When true, the paths associated with connections URLs will also be analyzed.
   */
  use_connection_url_path: boolean;
}

export interface PageShieldUpdateResponse {
  /**
   * When true, indicates that Page Shield is enabled.
   */
  enabled: boolean;

  /**
   * The timestamp of when Page Shield was last updated.
   */
  updated_at: string;

  /**
   * When true, CSP reports will be sent to
   * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
   */
  use_cloudflare_reporting_endpoint: boolean;

  /**
   * When true, the paths associated with connections URLs will also be analyzed.
   */
  use_connection_url_path: boolean;
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
  export import Policies = PoliciesAPI.Policies;
  export import Policy = PoliciesAPI.Policy;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyListResponsesSinglePage = PoliciesAPI.PolicyListResponsesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import Connections = ConnectionsAPI.Connections;
  export import Connection = ConnectionsAPI.Connection;
  export import ConnectionsSinglePage = ConnectionsAPI.ConnectionsSinglePage;
  export import ConnectionListParams = ConnectionsAPI.ConnectionListParams;
  export import ConnectionGetParams = ConnectionsAPI.ConnectionGetParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import Script = ScriptsAPI.Script;
  export import ScriptGetResponse = ScriptsAPI.ScriptGetResponse;
  export import ScriptsSinglePage = ScriptsAPI.ScriptsSinglePage;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
  export import Cookies = CookiesAPI.Cookies;
  export import CookieListResponse = CookiesAPI.CookieListResponse;
  export import CookieGetResponse = CookiesAPI.CookieGetResponse;
  export import CookieListResponsesSinglePage = CookiesAPI.CookieListResponsesSinglePage;
  export import CookieListParams = CookiesAPI.CookieListParams;
  export import CookieGetParams = CookiesAPI.CookieGetParams;
}
