// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectionsAPI from './connections';
import {
  BaseConnections,
  Connection,
  ConnectionGetParams,
  ConnectionListParams,
  Connections,
  ConnectionsSinglePage,
} from './connections';
import * as CookiesAPI from './cookies';
import {
  BaseCookies,
  CookieGetParams,
  CookieGetResponse,
  CookieListParams,
  CookieListResponse,
  CookieListResponsesSinglePage,
  Cookies,
} from './cookies';
import * as PoliciesAPI from './policies';
import {
  BasePolicies,
  Policies,
  Policy,
  PolicyCreateParams,
  PolicyCreateResponse,
  PolicyDeleteParams,
  PolicyGetParams,
  PolicyGetResponse,
  PolicyListParams,
  PolicyListResponse,
  PolicyListResponsesSinglePage,
  PolicyUpdateParams,
  PolicyUpdateResponse,
} from './policies';
import * as ScriptsAPI from './scripts';
import {
  BaseScripts,
  Script,
  ScriptGetParams,
  ScriptGetResponse,
  ScriptListParams,
  Scripts,
  ScriptsSinglePage,
} from './scripts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePageShield extends APIResource {
  static override readonly _key: readonly ['pageShield'] = Object.freeze(['pageShield'] as const);

  /**
   * Updates Page Shield settings.
   *
   * @example
   * ```ts
   * const pageShield = await client.pageShield.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  update(params: PageShieldUpdateParams, options?: RequestOptions): APIPromise<PageShieldUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/page_shield`, { body, ...options }) as APIPromise<{
        result: PageShieldUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the Page Shield settings.
   *
   * @example
   * ```ts
   * const setting = await client.pageShield.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: PageShieldGetParams, options?: RequestOptions): APIPromise<Setting | null> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/page_shield`, options) as APIPromise<{ result: Setting | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class PageShield extends BasePageShield {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  cookies: CookiesAPI.Cookies = new CookiesAPI.Cookies(this._client);
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

PageShield.Policies = Policies;
PageShield.BasePolicies = BasePolicies;
PageShield.Connections = Connections;
PageShield.BaseConnections = BaseConnections;
PageShield.Scripts = Scripts;
PageShield.BaseScripts = BaseScripts;
PageShield.Cookies = Cookies;
PageShield.BaseCookies = BaseCookies;

export declare namespace PageShield {
  export {
    type Setting as Setting,
    type PageShieldUpdateResponse as PageShieldUpdateResponse,
    type PageShieldUpdateParams as PageShieldUpdateParams,
    type PageShieldGetParams as PageShieldGetParams,
  };

  export {
    Policies as Policies,
    BasePolicies as BasePolicies,
    type Policy as Policy,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListResponsesSinglePage as PolicyListResponsesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };

  export {
    Connections as Connections,
    BaseConnections as BaseConnections,
    type Connection as Connection,
    type ConnectionsSinglePage as ConnectionsSinglePage,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionGetParams as ConnectionGetParams,
  };

  export {
    Scripts as Scripts,
    BaseScripts as BaseScripts,
    type Script as Script,
    type ScriptGetResponse as ScriptGetResponse,
    type ScriptsSinglePage as ScriptsSinglePage,
    type ScriptListParams as ScriptListParams,
    type ScriptGetParams as ScriptGetParams,
  };

  export {
    Cookies as Cookies,
    BaseCookies as BaseCookies,
    type CookieListResponse as CookieListResponse,
    type CookieGetResponse as CookieGetResponse,
    type CookieListResponsesSinglePage as CookieListResponsesSinglePage,
    type CookieListParams as CookieListParams,
    type CookieGetParams as CookieGetParams,
  };
}
