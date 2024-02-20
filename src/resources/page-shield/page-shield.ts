// File generated from our OpenAPI spec by Stainless.

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
  replace(
    zoneId: string,
    body: PageShieldReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/page_shield`, { body, ...options }) as Core.APIPromise<{
        result: PageShieldReplaceResponse;
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

export interface PageShieldReplaceResponse {
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

export interface PageShieldReplaceParams {
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

export namespace PageShield {
  export import PageShieldListResponse = PageShieldAPI.PageShieldListResponse;
  export import PageShieldReplaceResponse = PageShieldAPI.PageShieldReplaceResponse;
  export import PageShieldReplaceParams = PageShieldAPI.PageShieldReplaceParams;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyReplaceResponse = PoliciesAPI.PolicyReplaceResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyReplaceParams = PoliciesAPI.PolicyReplaceParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionListResponse = ConnectionsAPI.ConnectionListResponse;
  export import ConnectionGetResponse = ConnectionsAPI.ConnectionGetResponse;
  export import ConnectionListParams = ConnectionsAPI.ConnectionListParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptGetResponse = ScriptsAPI.ScriptGetResponse;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
}
