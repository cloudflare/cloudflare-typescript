// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SettingsAPI from './settings';
import { SettingListParams, SettingListResponse, Settings } from './settings';
import * as ZonesSettingsAPI from '../zones/settings';

export class Pagerules extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Creates a new Page Rule.
   *
   * @deprecated The Page Rules API is deprecated in favour of the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#page-rules for full details.
   */
  create(params: PageruleCreateParams, options?: Core.RequestOptions): Core.APIPromise<PageRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/pagerules`, { body, ...options }) as Core.APIPromise<{
        result: PageRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the configuration of an existing Page Rule. The configuration of the
   * updated Page Rule will exactly match the data passed in the API request.
   *
   * @deprecated The Page Rules API is deprecated in favour of the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#page-rules for full details.
   */
  update(
    pageruleId: string,
    params: PageruleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/pagerules/${pageruleId}`, { body, ...options }) as Core.APIPromise<{
        result: PageRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Page Rules in a zone.
   *
   * @deprecated The Page Rules API is deprecated in favour of the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#page-rules for full details.
   */
  list(params: PageruleListParams, options?: Core.RequestOptions): Core.APIPromise<PageruleListResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/pagerules`, { query, ...options }) as Core.APIPromise<{
        result: PageruleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing Page Rule.
   *
   * @deprecated The Page Rules API is deprecated in favour of the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#page-rules for full details.
   */
  delete(
    pageruleId: string,
    params: PageruleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/pagerules/${pageruleId}`, options) as Core.APIPromise<{
        result: PageruleDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates one or more fields of an existing Page Rule.
   *
   * @deprecated The Page Rules API is deprecated in favour of the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#page-rules for full details.
   */
  edit(
    pageruleId: string,
    params: PageruleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/pagerules/${pageruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PageRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a Page Rule.
   *
   * @deprecated The Page Rules API is deprecated in favour of the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#page-rules for full details.
   */
  get(
    pageruleId: string,
    params: PageruleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageRule> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/pagerules/${pageruleId}`, options) as Core.APIPromise<{
        result: PageRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PageRule {
  /**
   * Identifier
   */
  id: string;

  /**
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<
    | ZonesSettingsAPI.AlwaysUseHTTPS
    | ZonesSettingsAPI.AutomaticHTTPSRewrites
    | ZonesSettingsAPI.BrowserCacheTTL
    | ZonesSettingsAPI.BrowserCheck
    | PageRule.BypassCacheOnCookie
    | PageRule.CacheByDeviceType
    | PageRule.CacheDeceptionArmor
    | PageRule.CacheKey
    | PageRule.CacheKeyFields
    | ZonesSettingsAPI.CacheLevel
    | PageRule.CacheOnCookie
    | PageRule.CacheTTLByStatus
    | PageRule.DDoSProtection
    | ZonesSettingsAPI.DevelopmentMode
    | PageRule.DisableApps
    | PageRule.DisablePerformance
    | PageRule.DisableSecurity
    | PageRule.DisableZaraz
    | PageRule.EdgeCacheTTL
    | ZonesSettingsAPI.EmailObfuscation
    | PageRule.ExplicitCacheControl
    | PageRule.ForwardingURL
    | PageRule.HostHeaderOverride
    | ZonesSettingsAPI.HotlinkProtection
    | ZonesSettingsAPI.IPGeolocation
    | PageRule.Minify
    | ZonesSettingsAPI.Mirage
    | ZonesSettingsAPI.OpportunisticEncryption
    | ZonesSettingsAPI.OriginErrorPagePassThru
    | ZonesSettingsAPI.Polish
    | PageRule.PurgeByPageRule
    | PageRule.ResolveOverride
    | PageRule.RespectStrongEtag
    | ZonesSettingsAPI.ResponseBuffering
    | ZonesSettingsAPI.RocketLoader
    | ZonesSettingsAPI.SecurityLevel
    | ZonesSettingsAPI.ServerSideExcludes
    | ZonesSettingsAPI.SortQueryStringForCache
    | ZonesSettingsAPI.SSL
    | ZonesSettingsAPI.TrueClientIPHeader
    | ZonesSettingsAPI.WAF
  >;

  /**
   * The timestamp of when the Page Rule was created.
   */
  created_on: string;

  /**
   * The timestamp of when the Page Rule was last modified.
   */
  modified_on: string;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority: number;

  /**
   * The status of the Page Rule.
   */
  status: 'active' | 'disabled';

  /**
   * The rule targets to evaluate on each request.
   */
  targets: Array<Target>;
}

export namespace PageRule {
  export interface BypassCacheOnCookie {
    /**
     * Bypass cache and fetch resources from the origin server if a regular expression
     * matches against a cookie name present in the request.
     */
    id?: 'bypass_cache_on_cookie';

    /**
     * The regular expression to use for matching cookie names in the request. Refer to
     * [Bypass Cache on Cookie setting](https://developers.cloudflare.com/rules/page-rules/reference/additional-reference/#bypass-cache-on-cookie-setting)
     * to learn about limited regular expression support.
     */
    value?: string;
  }

  export interface CacheByDeviceType {
    /**
     * Separate cached content based on the visitor's device type.
     */
    id?: 'cache_by_device_type';

    /**
     * The status of Cache By Device Type.
     */
    value?: 'on' | 'off';
  }

  export interface CacheDeceptionArmor {
    /**
     * Protect from web cache deception attacks while still allowing static assets to
     * be cached. This setting verifies that the URL's extension matches the returned
     * `Content-Type`.
     */
    id?: 'cache_deception_armor';

    /**
     * The status of Cache Deception Armor.
     */
    value?: 'on' | 'off';
  }

  export interface CacheKey {
    /**
     * Control specifically what variables to include when deciding which resources to
     * cache. This allows customers to determine what to cache based on something other
     * than just the URL.
     */
    id?: 'cache_key';

    value?: CacheKey.Value;
  }

  export namespace CacheKey {
    export interface Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      cookie?: Value.Cookie;

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      header?: Value.Header;

      /**
       * Determines which host header to include in the Cache Key.
       */
      host?: Value.Host;

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      query_string?: Value.QueryString;

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      user?: Value.User;
    }

    export namespace Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      export interface Cookie {
        /**
         * A list of cookies to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of cookies to include.
         */
        include?: Array<string>;
      }

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      export interface Header {
        /**
         * A list of headers to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of headers to ignore.
         */
        exclude?: Array<string>;

        /**
         * A list of headers to include.
         */
        include?: Array<string>;
      }

      /**
       * Determines which host header to include in the Cache Key.
       */
      export interface Host {
        /**
         * Whether to include the Host header in the HTTP request sent to the origin.
         */
        resolved?: boolean;
      }

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      export interface QueryString {
        /**
         * Ignore all query string parameters.
         */
        exclude?: '*' | Array<string>;

        /**
         * Include all query string parameters.
         */
        include?: '*' | Array<string>;
      }

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      export interface User {
        /**
         * Classifies a request as `mobile`, `desktop`, or `tablet` based on the User
         * Agent.
         */
        device_type?: boolean;

        /**
         * Includes the client's country, derived from the IP address.
         */
        geo?: boolean;

        /**
         * Includes the first language code contained in the `Accept-Language` header sent
         * by the client.
         */
        lang?: boolean;
      }
    }
  }

  export interface CacheKeyFields {
    id?: 'cache_key_fields';
  }

  export interface CacheOnCookie {
    id?: 'cache_on_cookie';
  }

  export interface CacheTTLByStatus {
    id?: 'cache_ttl_by_status';
  }

  export interface DDoSProtection {
    id?: 'ddos_protection';
  }

  export interface DisableApps {
    /**
     * Turn off all active
     * [Cloudflare Apps](https://developers.cloudflare.com/support/more-dashboard-apps/cloudflare-apps/)
     * (deprecated).
     */
    id?: 'disable_apps';
  }

  export interface DisablePerformance {
    /**
     * Turn off
     * [Rocket Loader](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/),
     * [Mirage](https://developers.cloudflare.com/speed/optimization/images/mirage/),
     * and [Polish](https://developers.cloudflare.com/images/polish/).
     */
    id?: 'disable_performance';
  }

  export interface DisableSecurity {
    /**
     * Turn off
     * [Email Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/),
     * [Rate Limiting (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-rate-limiting/),
     * [Scrape Shield](https://developers.cloudflare.com/waf/tools/scrape-shield/),
     * [URL (Zone) Lockdown](https://developers.cloudflare.com/waf/tools/zone-lockdown/),
     * and
     * [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).
     */
    id?: 'disable_security';
  }

  export interface DisableZaraz {
    /**
     * Turn off [Zaraz](https://developers.cloudflare.com/zaraz/).
     */
    id?: 'disable_zaraz';
  }

  export interface EdgeCacheTTL {
    /**
     * Specify how long to cache a resource in the Cloudflare global network. _Edge
     * Cache TTL_ is not visible in response headers.
     */
    id?: 'edge_cache_ttl';

    value?: number;
  }

  export interface ExplicitCacheControl {
    id?: 'explicit_cache_control';
  }

  export interface ForwardingURL {
    /**
     * Redirects one URL to another using an `HTTP 301/302` redirect. Refer to
     * [Wildcard matching and referencing](https://developers.cloudflare.com/rules/page-rules/reference/wildcard-matching/).
     */
    id?: 'forwarding_url';

    value?: ForwardingURL.Value;
  }

  export namespace ForwardingURL {
    export interface Value {
      /**
       * The status code to use for the URL redirect. 301 is a permanent redirect. 302 is
       * a temporary redirect.
       */
      status_code?: 301 | 302;

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  export interface HostHeaderOverride {
    /**
     * Apply a specific host header.
     */
    id?: 'host_header_override';

    /**
     * The hostname to use in the `Host` header
     */
    value?: string;
  }

  export interface Minify {
    id?: 'minify';
  }

  export interface PurgeByPageRule {
    id?: 'purge_by_page_rule';
  }

  export interface ResolveOverride {
    /**
     * Change the origin address to the value specified in this setting.
     */
    id?: 'resolve_override';

    value?: ResolveOverride.Value;
  }

  export namespace ResolveOverride {
    export interface Value {
      /**
       * The origin address you want to override with.
       */
      value?: string;
    }
  }

  export interface RespectStrongEtag {
    /**
     * Turn on or off byte-for-byte equivalency checks between the Cloudflare cache and
     * the origin server.
     */
    id?: 'respect_strong_etag';

    /**
     * The status of Respect Strong ETags
     */
    value?: 'on' | 'off';
  }
}

/**
 * A request condition target.
 */
export interface Target {
  /**
   * String constraint.
   */
  constraint: Target.Constraint;

  /**
   * A target based on the URL of the request.
   */
  target: 'url';
}

export namespace Target {
  /**
   * String constraint.
   */
  export interface Constraint {
    /**
     * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
     */
    operator: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

    /**
     * The URL pattern to match against the current request. The pattern may contain up
     * to four asterisks ('\*') as placeholders.
     */
    value: string;
  }
}

/**
 * A request condition target.
 */
export interface TargetParam {
  /**
   * String constraint.
   */
  constraint: TargetParam.Constraint;

  /**
   * A target based on the URL of the request.
   */
  target: 'url';
}

export namespace TargetParam {
  /**
   * String constraint.
   */
  export interface Constraint {
    /**
     * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
     */
    operator: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

    /**
     * The URL pattern to match against the current request. The pattern may contain up
     * to four asterisks ('\*') as placeholders.
     */
    value: string;
  }
}

export type PageruleListResponse = Array<PageRule>;

export interface PageruleDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface PageruleCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The set of actions to perform if the targets of this rule match the
   * request. Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<
    | ZonesSettingsAPI.AlwaysUseHTTPSParam
    | ZonesSettingsAPI.AutomaticHTTPSRewritesParam
    | ZonesSettingsAPI.BrowserCacheTTLParam
    | ZonesSettingsAPI.BrowserCheckParam
    | PageruleCreateParams.BypassCacheOnCookie
    | PageruleCreateParams.CacheByDeviceType
    | PageruleCreateParams.CacheDeceptionArmor
    | PageruleCreateParams.CacheKey
    | PageruleCreateParams.CacheKeyFields
    | ZonesSettingsAPI.CacheLevelParam
    | PageruleCreateParams.CacheOnCookie
    | PageruleCreateParams.CacheTTLByStatus
    | PageruleCreateParams.DDoSProtection
    | ZonesSettingsAPI.DevelopmentModeParam
    | PageruleCreateParams.DisableApps
    | PageruleCreateParams.DisablePerformance
    | PageruleCreateParams.DisableSecurity
    | PageruleCreateParams.DisableZaraz
    | PageruleCreateParams.EdgeCacheTTL
    | ZonesSettingsAPI.EmailObfuscationParam
    | PageruleCreateParams.ExplicitCacheControl
    | PageruleCreateParams.ForwardingURL
    | PageruleCreateParams.HostHeaderOverride
    | ZonesSettingsAPI.HotlinkProtectionParam
    | ZonesSettingsAPI.IPGeolocationParam
    | PageruleCreateParams.Minify
    | ZonesSettingsAPI.MirageParam
    | ZonesSettingsAPI.OpportunisticEncryptionParam
    | ZonesSettingsAPI.OriginErrorPagePassThruParam
    | ZonesSettingsAPI.PolishParam
    | PageruleCreateParams.PurgeByPageRule
    | PageruleCreateParams.ResolveOverride
    | PageruleCreateParams.RespectStrongEtag
    | ZonesSettingsAPI.ResponseBufferingParam
    | ZonesSettingsAPI.RocketLoaderParam
    | ZonesSettingsAPI.SecurityLevelParam
    | ZonesSettingsAPI.ServerSideExcludesParam
    | ZonesSettingsAPI.SortQueryStringForCacheParam
    | ZonesSettingsAPI.SSLParam
    | ZonesSettingsAPI.TrueClientIPHeaderParam
    | ZonesSettingsAPI.WAFParam
  >;

  /**
   * Body param: The rule targets to evaluate on each request.
   */
  targets: Array<TargetParam>;

  /**
   * Body param: The priority of the rule, used to define which Page Rule is
   * processed over another. A higher number indicates a higher priority. For
   * example, if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
   * specific Page Rule to take precedence (rule B: `/images/special/*`), specify a
   * higher priority for rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * Body param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export namespace PageruleCreateParams {
  export interface BypassCacheOnCookie {
    /**
     * Bypass cache and fetch resources from the origin server if a regular expression
     * matches against a cookie name present in the request.
     */
    id?: 'bypass_cache_on_cookie';

    /**
     * The regular expression to use for matching cookie names in the request. Refer to
     * [Bypass Cache on Cookie setting](https://developers.cloudflare.com/rules/page-rules/reference/additional-reference/#bypass-cache-on-cookie-setting)
     * to learn about limited regular expression support.
     */
    value?: string;
  }

  export interface CacheByDeviceType {
    /**
     * Separate cached content based on the visitor's device type.
     */
    id?: 'cache_by_device_type';

    /**
     * The status of Cache By Device Type.
     */
    value?: 'on' | 'off';
  }

  export interface CacheDeceptionArmor {
    /**
     * Protect from web cache deception attacks while still allowing static assets to
     * be cached. This setting verifies that the URL's extension matches the returned
     * `Content-Type`.
     */
    id?: 'cache_deception_armor';

    /**
     * The status of Cache Deception Armor.
     */
    value?: 'on' | 'off';
  }

  export interface CacheKey {
    /**
     * Control specifically what variables to include when deciding which resources to
     * cache. This allows customers to determine what to cache based on something other
     * than just the URL.
     */
    id?: 'cache_key';

    value?: CacheKey.Value;
  }

  export namespace CacheKey {
    export interface Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      cookie?: Value.Cookie;

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      header?: Value.Header;

      /**
       * Determines which host header to include in the Cache Key.
       */
      host?: Value.Host;

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      query_string?: Value.QueryString;

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      user?: Value.User;
    }

    export namespace Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      export interface Cookie {
        /**
         * A list of cookies to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of cookies to include.
         */
        include?: Array<string>;
      }

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      export interface Header {
        /**
         * A list of headers to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of headers to ignore.
         */
        exclude?: Array<string>;

        /**
         * A list of headers to include.
         */
        include?: Array<string>;
      }

      /**
       * Determines which host header to include in the Cache Key.
       */
      export interface Host {
        /**
         * Whether to include the Host header in the HTTP request sent to the origin.
         */
        resolved?: boolean;
      }

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      export interface QueryString {
        /**
         * Ignore all query string parameters.
         */
        exclude?: '*' | Array<string>;

        /**
         * Include all query string parameters.
         */
        include?: '*' | Array<string>;
      }

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      export interface User {
        /**
         * Classifies a request as `mobile`, `desktop`, or `tablet` based on the User
         * Agent.
         */
        device_type?: boolean;

        /**
         * Includes the client's country, derived from the IP address.
         */
        geo?: boolean;

        /**
         * Includes the first language code contained in the `Accept-Language` header sent
         * by the client.
         */
        lang?: boolean;
      }
    }
  }

  export interface CacheKeyFields {
    id?: 'cache_key_fields';
  }

  export interface CacheOnCookie {
    id?: 'cache_on_cookie';
  }

  export interface CacheTTLByStatus {
    id?: 'cache_ttl_by_status';
  }

  export interface DDoSProtection {
    id?: 'ddos_protection';
  }

  export interface DisableApps {
    /**
     * Turn off all active
     * [Cloudflare Apps](https://developers.cloudflare.com/support/more-dashboard-apps/cloudflare-apps/)
     * (deprecated).
     */
    id?: 'disable_apps';
  }

  export interface DisablePerformance {
    /**
     * Turn off
     * [Rocket Loader](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/),
     * [Mirage](https://developers.cloudflare.com/speed/optimization/images/mirage/),
     * and [Polish](https://developers.cloudflare.com/images/polish/).
     */
    id?: 'disable_performance';
  }

  export interface DisableSecurity {
    /**
     * Turn off
     * [Email Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/),
     * [Rate Limiting (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-rate-limiting/),
     * [Scrape Shield](https://developers.cloudflare.com/waf/tools/scrape-shield/),
     * [URL (Zone) Lockdown](https://developers.cloudflare.com/waf/tools/zone-lockdown/),
     * and
     * [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).
     */
    id?: 'disable_security';
  }

  export interface DisableZaraz {
    /**
     * Turn off [Zaraz](https://developers.cloudflare.com/zaraz/).
     */
    id?: 'disable_zaraz';
  }

  export interface EdgeCacheTTL {
    /**
     * Specify how long to cache a resource in the Cloudflare global network. _Edge
     * Cache TTL_ is not visible in response headers.
     */
    id?: 'edge_cache_ttl';

    value?: number;
  }

  export interface ExplicitCacheControl {
    id?: 'explicit_cache_control';
  }

  export interface ForwardingURL {
    /**
     * Redirects one URL to another using an `HTTP 301/302` redirect. Refer to
     * [Wildcard matching and referencing](https://developers.cloudflare.com/rules/page-rules/reference/wildcard-matching/).
     */
    id?: 'forwarding_url';

    value?: ForwardingURL.Value;
  }

  export namespace ForwardingURL {
    export interface Value {
      /**
       * The status code to use for the URL redirect. 301 is a permanent redirect. 302 is
       * a temporary redirect.
       */
      status_code?: 301 | 302;

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  export interface HostHeaderOverride {
    /**
     * Apply a specific host header.
     */
    id?: 'host_header_override';

    /**
     * The hostname to use in the `Host` header
     */
    value?: string;
  }

  export interface Minify {
    id?: 'minify';
  }

  export interface PurgeByPageRule {
    id?: 'purge_by_page_rule';
  }

  export interface ResolveOverride {
    /**
     * Change the origin address to the value specified in this setting.
     */
    id?: 'resolve_override';

    value?: ResolveOverride.Value;
  }

  export namespace ResolveOverride {
    export interface Value {
      /**
       * The origin address you want to override with.
       */
      value?: string;
    }
  }

  export interface RespectStrongEtag {
    /**
     * Turn on or off byte-for-byte equivalency checks between the Cloudflare cache and
     * the origin server.
     */
    id?: 'respect_strong_etag';

    /**
     * The status of Respect Strong ETags
     */
    value?: 'on' | 'off';
  }
}

export interface PageruleUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The set of actions to perform if the targets of this rule match the
   * request. Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<
    | ZonesSettingsAPI.AlwaysUseHTTPSParam
    | ZonesSettingsAPI.AutomaticHTTPSRewritesParam
    | ZonesSettingsAPI.BrowserCacheTTLParam
    | ZonesSettingsAPI.BrowserCheckParam
    | PageruleUpdateParams.BypassCacheOnCookie
    | PageruleUpdateParams.CacheByDeviceType
    | PageruleUpdateParams.CacheDeceptionArmor
    | PageruleUpdateParams.CacheKey
    | PageruleUpdateParams.CacheKeyFields
    | ZonesSettingsAPI.CacheLevelParam
    | PageruleUpdateParams.CacheOnCookie
    | PageruleUpdateParams.CacheTTLByStatus
    | PageruleUpdateParams.DDoSProtection
    | ZonesSettingsAPI.DevelopmentModeParam
    | PageruleUpdateParams.DisableApps
    | PageruleUpdateParams.DisablePerformance
    | PageruleUpdateParams.DisableSecurity
    | PageruleUpdateParams.DisableZaraz
    | PageruleUpdateParams.EdgeCacheTTL
    | ZonesSettingsAPI.EmailObfuscationParam
    | PageruleUpdateParams.ExplicitCacheControl
    | PageruleUpdateParams.ForwardingURL
    | PageruleUpdateParams.HostHeaderOverride
    | ZonesSettingsAPI.HotlinkProtectionParam
    | ZonesSettingsAPI.IPGeolocationParam
    | PageruleUpdateParams.Minify
    | ZonesSettingsAPI.MirageParam
    | ZonesSettingsAPI.OpportunisticEncryptionParam
    | ZonesSettingsAPI.OriginErrorPagePassThruParam
    | ZonesSettingsAPI.PolishParam
    | PageruleUpdateParams.PurgeByPageRule
    | PageruleUpdateParams.ResolveOverride
    | PageruleUpdateParams.RespectStrongEtag
    | ZonesSettingsAPI.ResponseBufferingParam
    | ZonesSettingsAPI.RocketLoaderParam
    | ZonesSettingsAPI.SecurityLevelParam
    | ZonesSettingsAPI.ServerSideExcludesParam
    | ZonesSettingsAPI.SortQueryStringForCacheParam
    | ZonesSettingsAPI.SSLParam
    | ZonesSettingsAPI.TrueClientIPHeaderParam
    | ZonesSettingsAPI.WAFParam
  >;

  /**
   * Body param: The rule targets to evaluate on each request.
   */
  targets: Array<TargetParam>;

  /**
   * Body param: The priority of the rule, used to define which Page Rule is
   * processed over another. A higher number indicates a higher priority. For
   * example, if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
   * specific Page Rule to take precedence (rule B: `/images/special/*`), specify a
   * higher priority for rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * Body param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export namespace PageruleUpdateParams {
  export interface BypassCacheOnCookie {
    /**
     * Bypass cache and fetch resources from the origin server if a regular expression
     * matches against a cookie name present in the request.
     */
    id?: 'bypass_cache_on_cookie';

    /**
     * The regular expression to use for matching cookie names in the request. Refer to
     * [Bypass Cache on Cookie setting](https://developers.cloudflare.com/rules/page-rules/reference/additional-reference/#bypass-cache-on-cookie-setting)
     * to learn about limited regular expression support.
     */
    value?: string;
  }

  export interface CacheByDeviceType {
    /**
     * Separate cached content based on the visitor's device type.
     */
    id?: 'cache_by_device_type';

    /**
     * The status of Cache By Device Type.
     */
    value?: 'on' | 'off';
  }

  export interface CacheDeceptionArmor {
    /**
     * Protect from web cache deception attacks while still allowing static assets to
     * be cached. This setting verifies that the URL's extension matches the returned
     * `Content-Type`.
     */
    id?: 'cache_deception_armor';

    /**
     * The status of Cache Deception Armor.
     */
    value?: 'on' | 'off';
  }

  export interface CacheKey {
    /**
     * Control specifically what variables to include when deciding which resources to
     * cache. This allows customers to determine what to cache based on something other
     * than just the URL.
     */
    id?: 'cache_key';

    value?: CacheKey.Value;
  }

  export namespace CacheKey {
    export interface Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      cookie?: Value.Cookie;

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      header?: Value.Header;

      /**
       * Determines which host header to include in the Cache Key.
       */
      host?: Value.Host;

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      query_string?: Value.QueryString;

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      user?: Value.User;
    }

    export namespace Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      export interface Cookie {
        /**
         * A list of cookies to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of cookies to include.
         */
        include?: Array<string>;
      }

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      export interface Header {
        /**
         * A list of headers to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of headers to ignore.
         */
        exclude?: Array<string>;

        /**
         * A list of headers to include.
         */
        include?: Array<string>;
      }

      /**
       * Determines which host header to include in the Cache Key.
       */
      export interface Host {
        /**
         * Whether to include the Host header in the HTTP request sent to the origin.
         */
        resolved?: boolean;
      }

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      export interface QueryString {
        /**
         * Ignore all query string parameters.
         */
        exclude?: '*' | Array<string>;

        /**
         * Include all query string parameters.
         */
        include?: '*' | Array<string>;
      }

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      export interface User {
        /**
         * Classifies a request as `mobile`, `desktop`, or `tablet` based on the User
         * Agent.
         */
        device_type?: boolean;

        /**
         * Includes the client's country, derived from the IP address.
         */
        geo?: boolean;

        /**
         * Includes the first language code contained in the `Accept-Language` header sent
         * by the client.
         */
        lang?: boolean;
      }
    }
  }

  export interface CacheKeyFields {
    id?: 'cache_key_fields';
  }

  export interface CacheOnCookie {
    id?: 'cache_on_cookie';
  }

  export interface CacheTTLByStatus {
    id?: 'cache_ttl_by_status';
  }

  export interface DDoSProtection {
    id?: 'ddos_protection';
  }

  export interface DisableApps {
    /**
     * Turn off all active
     * [Cloudflare Apps](https://developers.cloudflare.com/support/more-dashboard-apps/cloudflare-apps/)
     * (deprecated).
     */
    id?: 'disable_apps';
  }

  export interface DisablePerformance {
    /**
     * Turn off
     * [Rocket Loader](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/),
     * [Mirage](https://developers.cloudflare.com/speed/optimization/images/mirage/),
     * and [Polish](https://developers.cloudflare.com/images/polish/).
     */
    id?: 'disable_performance';
  }

  export interface DisableSecurity {
    /**
     * Turn off
     * [Email Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/),
     * [Rate Limiting (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-rate-limiting/),
     * [Scrape Shield](https://developers.cloudflare.com/waf/tools/scrape-shield/),
     * [URL (Zone) Lockdown](https://developers.cloudflare.com/waf/tools/zone-lockdown/),
     * and
     * [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).
     */
    id?: 'disable_security';
  }

  export interface DisableZaraz {
    /**
     * Turn off [Zaraz](https://developers.cloudflare.com/zaraz/).
     */
    id?: 'disable_zaraz';
  }

  export interface EdgeCacheTTL {
    /**
     * Specify how long to cache a resource in the Cloudflare global network. _Edge
     * Cache TTL_ is not visible in response headers.
     */
    id?: 'edge_cache_ttl';

    value?: number;
  }

  export interface ExplicitCacheControl {
    id?: 'explicit_cache_control';
  }

  export interface ForwardingURL {
    /**
     * Redirects one URL to another using an `HTTP 301/302` redirect. Refer to
     * [Wildcard matching and referencing](https://developers.cloudflare.com/rules/page-rules/reference/wildcard-matching/).
     */
    id?: 'forwarding_url';

    value?: ForwardingURL.Value;
  }

  export namespace ForwardingURL {
    export interface Value {
      /**
       * The status code to use for the URL redirect. 301 is a permanent redirect. 302 is
       * a temporary redirect.
       */
      status_code?: 301 | 302;

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  export interface HostHeaderOverride {
    /**
     * Apply a specific host header.
     */
    id?: 'host_header_override';

    /**
     * The hostname to use in the `Host` header
     */
    value?: string;
  }

  export interface Minify {
    id?: 'minify';
  }

  export interface PurgeByPageRule {
    id?: 'purge_by_page_rule';
  }

  export interface ResolveOverride {
    /**
     * Change the origin address to the value specified in this setting.
     */
    id?: 'resolve_override';

    value?: ResolveOverride.Value;
  }

  export namespace ResolveOverride {
    export interface Value {
      /**
       * The origin address you want to override with.
       */
      value?: string;
    }
  }

  export interface RespectStrongEtag {
    /**
     * Turn on or off byte-for-byte equivalency checks between the Cloudflare cache and
     * the origin server.
     */
    id?: 'respect_strong_etag';

    /**
     * The status of Respect Strong ETags
     */
    value?: 'on' | 'off';
  }
}

export interface PageruleListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned Page Rules.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When set to `all`, all the search requirements must match. When set
   * to `any`, only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * Query param: The field used to sort returned Page Rules.
   */
  order?: 'status' | 'priority';

  /**
   * Query param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export interface PageruleDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface PageruleEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The set of actions to perform if the targets of this rule match the
   * request. Actions can redirect to another URL or override settings, but not both.
   */
  actions?: Array<
    | ZonesSettingsAPI.AlwaysUseHTTPSParam
    | ZonesSettingsAPI.AutomaticHTTPSRewritesParam
    | ZonesSettingsAPI.BrowserCacheTTLParam
    | ZonesSettingsAPI.BrowserCheckParam
    | PageruleEditParams.BypassCacheOnCookie
    | PageruleEditParams.CacheByDeviceType
    | PageruleEditParams.CacheDeceptionArmor
    | PageruleEditParams.CacheKey
    | PageruleEditParams.CacheKeyFields
    | ZonesSettingsAPI.CacheLevelParam
    | PageruleEditParams.CacheOnCookie
    | PageruleEditParams.CacheTTLByStatus
    | PageruleEditParams.DDoSProtection
    | ZonesSettingsAPI.DevelopmentModeParam
    | PageruleEditParams.DisableApps
    | PageruleEditParams.DisablePerformance
    | PageruleEditParams.DisableSecurity
    | PageruleEditParams.DisableZaraz
    | PageruleEditParams.EdgeCacheTTL
    | ZonesSettingsAPI.EmailObfuscationParam
    | PageruleEditParams.ExplicitCacheControl
    | PageruleEditParams.ForwardingURL
    | PageruleEditParams.HostHeaderOverride
    | ZonesSettingsAPI.HotlinkProtectionParam
    | ZonesSettingsAPI.IPGeolocationParam
    | PageruleEditParams.Minify
    | ZonesSettingsAPI.MirageParam
    | ZonesSettingsAPI.OpportunisticEncryptionParam
    | ZonesSettingsAPI.OriginErrorPagePassThruParam
    | ZonesSettingsAPI.PolishParam
    | PageruleEditParams.PurgeByPageRule
    | PageruleEditParams.ResolveOverride
    | PageruleEditParams.RespectStrongEtag
    | ZonesSettingsAPI.ResponseBufferingParam
    | ZonesSettingsAPI.RocketLoaderParam
    | ZonesSettingsAPI.SecurityLevelParam
    | ZonesSettingsAPI.ServerSideExcludesParam
    | ZonesSettingsAPI.SortQueryStringForCacheParam
    | ZonesSettingsAPI.SSLParam
    | ZonesSettingsAPI.TrueClientIPHeaderParam
    | ZonesSettingsAPI.WAFParam
  >;

  /**
   * Body param: The priority of the rule, used to define which Page Rule is
   * processed over another. A higher number indicates a higher priority. For
   * example, if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
   * specific Page Rule to take precedence (rule B: `/images/special/*`), specify a
   * higher priority for rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * Body param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';

  /**
   * Body param: The rule targets to evaluate on each request.
   */
  targets?: Array<TargetParam>;
}

export namespace PageruleEditParams {
  export interface BypassCacheOnCookie {
    /**
     * Bypass cache and fetch resources from the origin server if a regular expression
     * matches against a cookie name present in the request.
     */
    id?: 'bypass_cache_on_cookie';

    /**
     * The regular expression to use for matching cookie names in the request. Refer to
     * [Bypass Cache on Cookie setting](https://developers.cloudflare.com/rules/page-rules/reference/additional-reference/#bypass-cache-on-cookie-setting)
     * to learn about limited regular expression support.
     */
    value?: string;
  }

  export interface CacheByDeviceType {
    /**
     * Separate cached content based on the visitor's device type.
     */
    id?: 'cache_by_device_type';

    /**
     * The status of Cache By Device Type.
     */
    value?: 'on' | 'off';
  }

  export interface CacheDeceptionArmor {
    /**
     * Protect from web cache deception attacks while still allowing static assets to
     * be cached. This setting verifies that the URL's extension matches the returned
     * `Content-Type`.
     */
    id?: 'cache_deception_armor';

    /**
     * The status of Cache Deception Armor.
     */
    value?: 'on' | 'off';
  }

  export interface CacheKey {
    /**
     * Control specifically what variables to include when deciding which resources to
     * cache. This allows customers to determine what to cache based on something other
     * than just the URL.
     */
    id?: 'cache_key';

    value?: CacheKey.Value;
  }

  export namespace CacheKey {
    export interface Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      cookie?: Value.Cookie;

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      header?: Value.Header;

      /**
       * Determines which host header to include in the Cache Key.
       */
      host?: Value.Host;

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      query_string?: Value.QueryString;

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      user?: Value.User;
    }

    export namespace Value {
      /**
       * Controls which cookies appear in the Cache Key.
       */
      export interface Cookie {
        /**
         * A list of cookies to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of cookies to include.
         */
        include?: Array<string>;
      }

      /**
       * Controls which headers go into the Cache Key. Exactly one of `include` or
       * `exclude` is expected.
       */
      export interface Header {
        /**
         * A list of headers to check for the presence of, without including their actual
         * values.
         */
        check_presence?: Array<string>;

        /**
         * A list of headers to ignore.
         */
        exclude?: Array<string>;

        /**
         * A list of headers to include.
         */
        include?: Array<string>;
      }

      /**
       * Determines which host header to include in the Cache Key.
       */
      export interface Host {
        /**
         * Whether to include the Host header in the HTTP request sent to the origin.
         */
        resolved?: boolean;
      }

      /**
       * Controls which URL query string parameters go into the Cache Key. Exactly one of
       * `include` or `exclude` is expected.
       */
      export interface QueryString {
        /**
         * Ignore all query string parameters.
         */
        exclude?: '*' | Array<string>;

        /**
         * Include all query string parameters.
         */
        include?: '*' | Array<string>;
      }

      /**
       * Feature fields to add features about the end-user (client) into the Cache Key.
       */
      export interface User {
        /**
         * Classifies a request as `mobile`, `desktop`, or `tablet` based on the User
         * Agent.
         */
        device_type?: boolean;

        /**
         * Includes the client's country, derived from the IP address.
         */
        geo?: boolean;

        /**
         * Includes the first language code contained in the `Accept-Language` header sent
         * by the client.
         */
        lang?: boolean;
      }
    }
  }

  export interface CacheKeyFields {
    id?: 'cache_key_fields';
  }

  export interface CacheOnCookie {
    id?: 'cache_on_cookie';
  }

  export interface CacheTTLByStatus {
    id?: 'cache_ttl_by_status';
  }

  export interface DDoSProtection {
    id?: 'ddos_protection';
  }

  export interface DisableApps {
    /**
     * Turn off all active
     * [Cloudflare Apps](https://developers.cloudflare.com/support/more-dashboard-apps/cloudflare-apps/)
     * (deprecated).
     */
    id?: 'disable_apps';
  }

  export interface DisablePerformance {
    /**
     * Turn off
     * [Rocket Loader](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/),
     * [Mirage](https://developers.cloudflare.com/speed/optimization/images/mirage/),
     * and [Polish](https://developers.cloudflare.com/images/polish/).
     */
    id?: 'disable_performance';
  }

  export interface DisableSecurity {
    /**
     * Turn off
     * [Email Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/),
     * [Rate Limiting (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-rate-limiting/),
     * [Scrape Shield](https://developers.cloudflare.com/waf/tools/scrape-shield/),
     * [URL (Zone) Lockdown](https://developers.cloudflare.com/waf/tools/zone-lockdown/),
     * and
     * [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).
     */
    id?: 'disable_security';
  }

  export interface DisableZaraz {
    /**
     * Turn off [Zaraz](https://developers.cloudflare.com/zaraz/).
     */
    id?: 'disable_zaraz';
  }

  export interface EdgeCacheTTL {
    /**
     * Specify how long to cache a resource in the Cloudflare global network. _Edge
     * Cache TTL_ is not visible in response headers.
     */
    id?: 'edge_cache_ttl';

    value?: number;
  }

  export interface ExplicitCacheControl {
    id?: 'explicit_cache_control';
  }

  export interface ForwardingURL {
    /**
     * Redirects one URL to another using an `HTTP 301/302` redirect. Refer to
     * [Wildcard matching and referencing](https://developers.cloudflare.com/rules/page-rules/reference/wildcard-matching/).
     */
    id?: 'forwarding_url';

    value?: ForwardingURL.Value;
  }

  export namespace ForwardingURL {
    export interface Value {
      /**
       * The status code to use for the URL redirect. 301 is a permanent redirect. 302 is
       * a temporary redirect.
       */
      status_code?: 301 | 302;

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  export interface HostHeaderOverride {
    /**
     * Apply a specific host header.
     */
    id?: 'host_header_override';

    /**
     * The hostname to use in the `Host` header
     */
    value?: string;
  }

  export interface Minify {
    id?: 'minify';
  }

  export interface PurgeByPageRule {
    id?: 'purge_by_page_rule';
  }

  export interface ResolveOverride {
    /**
     * Change the origin address to the value specified in this setting.
     */
    id?: 'resolve_override';

    value?: ResolveOverride.Value;
  }

  export namespace ResolveOverride {
    export interface Value {
      /**
       * The origin address you want to override with.
       */
      value?: string;
    }
  }

  export interface RespectStrongEtag {
    /**
     * Turn on or off byte-for-byte equivalency checks between the Cloudflare cache and
     * the origin server.
     */
    id?: 'respect_strong_etag';

    /**
     * The status of Respect Strong ETags
     */
    value?: 'on' | 'off';
  }
}

export interface PageruleGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

Pagerules.Settings = Settings;

export declare namespace Pagerules {
  export {
    Settings as Settings,
    type SettingListResponse as SettingListResponse,
    type SettingListParams as SettingListParams,
  };
}
