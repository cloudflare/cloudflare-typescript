// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/settings/settings';
import * as AdvancedDDOSAPI from 'cloudflare/resources/zones/settings/advanced-ddos';
import * as AlwaysOnlineAPI from 'cloudflare/resources/zones/settings/always-online';
import * as AlwaysUseHTTPSAPI from 'cloudflare/resources/zones/settings/always-use-https';
import * as AutomaticHTTPSRewritesAPI from 'cloudflare/resources/zones/settings/automatic-https-rewrites';
import * as AutomaticPlatformOptimizationAPI from 'cloudflare/resources/zones/settings/automatic-platform-optimization';
import * as BrotliAPI from 'cloudflare/resources/zones/settings/brotli';
import * as BrowserCacheTTLAPI from 'cloudflare/resources/zones/settings/browser-cache-ttl';
import * as BrowserCheckAPI from 'cloudflare/resources/zones/settings/browser-check';
import * as CacheLevelAPI from 'cloudflare/resources/zones/settings/cache-level';
import * as ChallengeTTLAPI from 'cloudflare/resources/zones/settings/challenge-ttl';
import * as CiphersAPI from 'cloudflare/resources/zones/settings/ciphers';
import * as DevelopmentModeAPI from 'cloudflare/resources/zones/settings/development-mode';
import * as EarlyHintsAPI from 'cloudflare/resources/zones/settings/early-hints';
import * as EmailObfuscationAPI from 'cloudflare/resources/zones/settings/email-obfuscation';
import * as FontSettingsAPI from 'cloudflare/resources/zones/settings/font-settings';
import * as H2PrioritizationAPI from 'cloudflare/resources/zones/settings/h2-prioritization';
import * as HotlinkProtectionAPI from 'cloudflare/resources/zones/settings/hotlink-protection';
import * as HTTP2API from 'cloudflare/resources/zones/settings/http2';
import * as HTTP3API from 'cloudflare/resources/zones/settings/http3';
import * as ImageResizingAPI from 'cloudflare/resources/zones/settings/image-resizing';
import * as IPGeolocationAPI from 'cloudflare/resources/zones/settings/ip-geolocation';
import * as IPV6API from 'cloudflare/resources/zones/settings/ipv6';
import * as MinTLSVersionAPI from 'cloudflare/resources/zones/settings/min-tls-version';
import * as MinifyAPI from 'cloudflare/resources/zones/settings/minify';
import * as MirageAPI from 'cloudflare/resources/zones/settings/mirage';
import * as MobileRedirectAPI from 'cloudflare/resources/zones/settings/mobile-redirect';
import * as NELAPI from 'cloudflare/resources/zones/settings/nel';
import * as OpportunisticEncryptionAPI from 'cloudflare/resources/zones/settings/opportunistic-encryption';
import * as OpportunisticOnionAPI from 'cloudflare/resources/zones/settings/opportunistic-onion';
import * as OrangeToOrangeAPI from 'cloudflare/resources/zones/settings/orange-to-orange';
import * as OriginErrorPagePassThruAPI from 'cloudflare/resources/zones/settings/origin-error-page-pass-thru';
import * as OriginMaxHTTPVersionAPI from 'cloudflare/resources/zones/settings/origin-max-http-version';
import * as PolishAPI from 'cloudflare/resources/zones/settings/polish';
import * as PrefetchPreloadAPI from 'cloudflare/resources/zones/settings/prefetch-preload';
import * as ProxyReadTimeoutAPI from 'cloudflare/resources/zones/settings/proxy-read-timeout';
import * as PseudoIPV4API from 'cloudflare/resources/zones/settings/pseudo-ipv4';
import * as ResponseBufferingAPI from 'cloudflare/resources/zones/settings/response-buffering';
import * as RocketLoaderAPI from 'cloudflare/resources/zones/settings/rocket-loader';
import * as SecurityHeadersAPI from 'cloudflare/resources/zones/settings/security-headers';
import * as SecurityLevelAPI from 'cloudflare/resources/zones/settings/security-level';
import * as ServerSideExcludesAPI from 'cloudflare/resources/zones/settings/server-side-excludes';
import * as SortQueryStringForCacheAPI from 'cloudflare/resources/zones/settings/sort-query-string-for-cache';
import * as SSLAPI from 'cloudflare/resources/zones/settings/ssl';
import * as SSLRecommenderAPI from 'cloudflare/resources/zones/settings/ssl-recommender';
import * as TLS1_3API from 'cloudflare/resources/zones/settings/tls-1-3';
import * as TLSClientAuthAPI from 'cloudflare/resources/zones/settings/tls-client-auth';
import * as TrueClientIPHeaderAPI from 'cloudflare/resources/zones/settings/true-client-ip-header';
import * as WAFAPI from 'cloudflare/resources/zones/settings/waf';
import * as WebpAPI from 'cloudflare/resources/zones/settings/webp';
import * as WebsocketAPI from 'cloudflare/resources/zones/settings/websocket';
import * as ZeroRTTAPI from 'cloudflare/resources/zones/settings/zero-rtt';

export class Settings extends APIResource {
  zeroRTT: ZeroRTTAPI.ZeroRTT = new ZeroRTTAPI.ZeroRTT(this._client);
  advancedDDOS: AdvancedDDOSAPI.AdvancedDDOS = new AdvancedDDOSAPI.AdvancedDDOS(this._client);
  alwaysOnline: AlwaysOnlineAPI.AlwaysOnline = new AlwaysOnlineAPI.AlwaysOnline(this._client);
  alwaysUseHTTPS: AlwaysUseHTTPSAPI.AlwaysUseHTTPS = new AlwaysUseHTTPSAPI.AlwaysUseHTTPS(this._client);
  automaticHTTPSRewrites: AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites =
    new AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites(this._client);
  automaticPlatformOptimization: AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization =
    new AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization(this._client);
  brotli: BrotliAPI.Brotli = new BrotliAPI.Brotli(this._client);
  browserCacheTTL: BrowserCacheTTLAPI.BrowserCacheTTL = new BrowserCacheTTLAPI.BrowserCacheTTL(this._client);
  browserCheck: BrowserCheckAPI.BrowserCheck = new BrowserCheckAPI.BrowserCheck(this._client);
  cacheLevel: CacheLevelAPI.CacheLevel = new CacheLevelAPI.CacheLevel(this._client);
  challengeTTL: ChallengeTTLAPI.ChallengeTTL = new ChallengeTTLAPI.ChallengeTTL(this._client);
  ciphers: CiphersAPI.Ciphers = new CiphersAPI.Ciphers(this._client);
  developmentMode: DevelopmentModeAPI.DevelopmentMode = new DevelopmentModeAPI.DevelopmentMode(this._client);
  earlyHints: EarlyHintsAPI.EarlyHints = new EarlyHintsAPI.EarlyHints(this._client);
  emailObfuscation: EmailObfuscationAPI.EmailObfuscation = new EmailObfuscationAPI.EmailObfuscation(
    this._client,
  );
  h2Prioritization: H2PrioritizationAPI.H2Prioritization = new H2PrioritizationAPI.H2Prioritization(
    this._client,
  );
  hotlinkProtection: HotlinkProtectionAPI.HotlinkProtection = new HotlinkProtectionAPI.HotlinkProtection(
    this._client,
  );
  http2: HTTP2API.HTTP2 = new HTTP2API.HTTP2(this._client);
  http3: HTTP3API.HTTP3 = new HTTP3API.HTTP3(this._client);
  imageResizing: ImageResizingAPI.ImageResizing = new ImageResizingAPI.ImageResizing(this._client);
  ipGeolocation: IPGeolocationAPI.IPGeolocation = new IPGeolocationAPI.IPGeolocation(this._client);
  ipv6: IPV6API.IPV6 = new IPV6API.IPV6(this._client);
  minTLSVersion: MinTLSVersionAPI.MinTLSVersion = new MinTLSVersionAPI.MinTLSVersion(this._client);
  minify: MinifyAPI.Minify = new MinifyAPI.Minify(this._client);
  mirage: MirageAPI.Mirage = new MirageAPI.Mirage(this._client);
  mobileRedirect: MobileRedirectAPI.MobileRedirect = new MobileRedirectAPI.MobileRedirect(this._client);
  nel: NELAPI.NEL = new NELAPI.NEL(this._client);
  opportunisticEncryption: OpportunisticEncryptionAPI.OpportunisticEncryption =
    new OpportunisticEncryptionAPI.OpportunisticEncryption(this._client);
  opportunisticOnion: OpportunisticOnionAPI.OpportunisticOnion = new OpportunisticOnionAPI.OpportunisticOnion(
    this._client,
  );
  orangeToOrange: OrangeToOrangeAPI.OrangeToOrange = new OrangeToOrangeAPI.OrangeToOrange(this._client);
  originErrorPagePassThru: OriginErrorPagePassThruAPI.OriginErrorPagePassThru =
    new OriginErrorPagePassThruAPI.OriginErrorPagePassThru(this._client);
  originMaxHTTPVersion: OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion =
    new OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion(this._client);
  polish: PolishAPI.Polish = new PolishAPI.Polish(this._client);
  prefetchPreload: PrefetchPreloadAPI.PrefetchPreload = new PrefetchPreloadAPI.PrefetchPreload(this._client);
  proxyReadTimeout: ProxyReadTimeoutAPI.ProxyReadTimeout = new ProxyReadTimeoutAPI.ProxyReadTimeout(
    this._client,
  );
  pseudoIPV4: PseudoIPV4API.PseudoIPV4 = new PseudoIPV4API.PseudoIPV4(this._client);
  responseBuffering: ResponseBufferingAPI.ResponseBuffering = new ResponseBufferingAPI.ResponseBuffering(
    this._client,
  );
  rocketLoader: RocketLoaderAPI.RocketLoader = new RocketLoaderAPI.RocketLoader(this._client);
  securityHeaders: SecurityHeadersAPI.SecurityHeaders = new SecurityHeadersAPI.SecurityHeaders(this._client);
  securityLevel: SecurityLevelAPI.SecurityLevel = new SecurityLevelAPI.SecurityLevel(this._client);
  serverSideExcludes: ServerSideExcludesAPI.ServerSideExcludes = new ServerSideExcludesAPI.ServerSideExcludes(
    this._client,
  );
  sortQueryStringForCache: SortQueryStringForCacheAPI.SortQueryStringForCache =
    new SortQueryStringForCacheAPI.SortQueryStringForCache(this._client);
  ssl: SSLAPI.SSL = new SSLAPI.SSL(this._client);
  sslRecommender: SSLRecommenderAPI.SSLRecommender = new SSLRecommenderAPI.SSLRecommender(this._client);
  tls1_3: TLS1_3API.TLS1_3 = new TLS1_3API.TLS1_3(this._client);
  tlsClientAuth: TLSClientAuthAPI.TLSClientAuth = new TLSClientAuthAPI.TLSClientAuth(this._client);
  trueClientIPHeader: TrueClientIPHeaderAPI.TrueClientIPHeader = new TrueClientIPHeaderAPI.TrueClientIPHeader(
    this._client,
  );
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
  webp: WebpAPI.Webp = new WebpAPI.Webp(this._client);
  websocket: WebsocketAPI.Websocket = new WebsocketAPI.Websocket(this._client);
  fontSettings: FontSettingsAPI.FontSettings = new FontSettingsAPI.FontSettings(this._client);

  /**
   * Available settings for your user in relation to a zone.
   */
  list(params: SettingListParams, options?: Core.RequestOptions): Core.APIPromise<SettingListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings`, options) as Core.APIPromise<{
        result: SettingListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit settings for a zone.
   */
  edit(params: SettingEditParams, options?: Core.RequestOptions): Core.APIPromise<SettingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings`, { body, ...options }) as Core.APIPromise<{
        result: SettingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SettingListResponse = Array<
  | SettingListResponse.Zones0rtt
  | SettingListResponse.ZonesAdvancedDDOS
  | SettingListResponse.ZonesAlwaysOnline
  | SettingListResponse.ZonesAlwaysUseHTTPS
  | SettingListResponse.ZonesAutomaticHTTPSRewrites
  | SettingListResponse.ZonesBrotli
  | SettingListResponse.ZonesBrowserCacheTTL
  | SettingListResponse.ZonesBrowserCheck
  | SettingListResponse.ZonesCacheLevel
  | SettingListResponse.ZonesChallengeTTL
  | SettingListResponse.ZonesCiphers
  | SettingListResponse.ZonesCnameFlattening
  | SettingListResponse.ZonesDevelopmentMode
  | SettingListResponse.ZonesEarlyHints
  | SettingListResponse.ZonesEdgeCacheTTL
  | SettingListResponse.ZonesEmailObfuscation
  | SettingListResponse.ZonesH2Prioritization
  | SettingListResponse.ZonesHotlinkProtection
  | SettingListResponse.ZonesHTTP2
  | SettingListResponse.ZonesHTTP3
  | SettingListResponse.ZonesImageResizing
  | SettingListResponse.ZonesIPGeolocation
  | SettingListResponse.ZonesIPV6
  | SettingListResponse.ZonesMaxUpload
  | SettingListResponse.ZonesMinTLSVersion
  | SettingListResponse.ZonesMinify
  | SettingListResponse.ZonesMirage
  | SettingListResponse.ZonesMobileRedirect
  | SettingListResponse.ZonesNEL
  | SettingListResponse.ZonesOpportunisticEncryption
  | SettingListResponse.ZonesOpportunisticOnion
  | SettingListResponse.ZonesOrangeToOrange
  | SettingListResponse.ZonesOriginErrorPagePassThru
  | SettingListResponse.ZonesPolish
  | SettingListResponse.ZonesPrefetchPreload
  | SettingListResponse.ZonesProxyReadTimeout
  | SettingListResponse.ZonesPseudoIPV4
  | SettingListResponse.ZonesResponseBuffering
  | SettingListResponse.ZonesRocketLoader
  | SettingListResponse.ZonesSchemasAutomaticPlatformOptimization
  | SettingListResponse.ZonesSecurityHeader
  | SettingListResponse.ZonesSecurityLevel
  | SettingListResponse.ZonesServerSideExclude
  | SettingListResponse.ZonesSha1Support
  | SettingListResponse.ZonesSortQueryStringForCache
  | SettingListResponse.ZonesSSL
  | SettingListResponse.ZonesSSLRecommender
  | SettingListResponse.ZonesTLS1_2Only
  | SettingListResponse.ZonesTLS1_3
  | SettingListResponse.ZonesTLSClientAuth
  | SettingListResponse.ZonesTrueClientIPHeader
  | SettingListResponse.ZonesWAF
  | SettingListResponse.ZonesWebp
  | SettingListResponse.ZonesWebsockets
>;

export namespace SettingListResponse {
  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Zones0rtt {
    /**
     * ID of the zone setting.
     */
    id: '0rtt';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  export interface ZonesAdvancedDDOS {
    /**
     * ID of the zone setting.
     */
    id: 'advanced_ddos';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface ZonesAlwaysOnline {
    /**
     * ID of the zone setting.
     */
    id: 'always_online';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesAlwaysUseHTTPS {
    /**
     * ID of the zone setting.
     */
    id: 'always_use_https';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface ZonesAutomaticHTTPSRewrites {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_https_rewrites';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface ZonesBrotli {
    /**
     * ID of the zone setting.
     */
    id: 'brotli';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesBrowserCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'browser_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface ZonesBrowserCheck {
    /**
     * ID of the zone setting.
     */
    id: 'browser_check';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface ZonesCacheLevel {
    /**
     * ID of the zone setting.
     */
    id: 'cache_level';

    /**
     * Current value of the zone setting.
     */
    value: 'aggressive' | 'basic' | 'simplified';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface ZonesChallengeTTL {
    /**
     * ID of the zone setting.
     */
    id: 'challenge_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface ZonesCiphers {
    /**
     * ID of the zone setting.
     */
    id: 'ciphers';

    /**
     * Current value of the zone setting.
     */
    value: Array<string>;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCnameFlattening {
    /**
     * How to flatten the cname destination.
     */
    id: 'cname_flattening';

    /**
     * Current value of the zone setting.
     */
    value: 'flatten_at_root' | 'flatten_all';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface ZonesDevelopmentMode {
    /**
     * ID of the zone setting.
     */
    id: 'development_mode';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The interval (in seconds) from when
     * development mode expires (positive integer) or last expired (negative integer)
     * for the domain. If development mode has never been enabled, this value is false.
     */
    time_remaining?: number;
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface ZonesEarlyHints {
    /**
     * ID of the zone setting.
     */
    id: 'early_hints';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'edge_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface ZonesEmailObfuscation {
    /**
     * ID of the zone setting.
     */
    id: 'email_obfuscation';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface ZonesH2Prioritization {
    /**
     * ID of the zone setting.
     */
    id: 'h2_prioritization';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'custom';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface ZonesHotlinkProtection {
    /**
     * ID of the zone setting.
     */
    id: 'hotlink_protection';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface ZonesHTTP2 {
    /**
     * ID of the zone setting.
     */
    id: 'http2';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface ZonesHTTP3 {
    /**
     * ID of the zone setting.
     */
    id: 'http3';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface ZonesImageResizing {
    /**
     * ID of the zone setting.
     */
    id: 'image_resizing';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'open';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesIPGeolocation {
    /**
     * ID of the zone setting.
     */
    id: 'ip_geolocation';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface ZonesIPV6 {
    /**
     * ID of the zone setting.
     */
    id: 'ipv6';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id: 'max_upload';

    /**
     * Current value of the zone setting.
     */
    value: 100 | 200 | 500;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface ZonesMinTLSVersion {
    /**
     * ID of the zone setting.
     */
    id: 'min_tls_version';

    /**
     * Current value of the zone setting.
     */
    value: '1.0' | '1.1' | '1.2' | '1.3';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface ZonesMinify {
    /**
     * Zone setting identifier.
     */
    id: 'minify';

    /**
     * Current value of the zone setting.
     */
    value: ZonesMinify.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesMinify {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesMirage {
    /**
     * ID of the zone setting.
     */
    id: 'mirage';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface ZonesMobileRedirect {
    /**
     * Identifier of the zone setting.
     */
    id: 'mobile_redirect';

    /**
     * Current value of the zone setting.
     */
    value: ZonesMobileRedirect.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesMobileRedirect {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface ZonesNEL {
    /**
     * Zone setting identifier.
     */
    id: 'nel';

    /**
     * Current value of the zone setting.
     */
    value: ZonesNEL.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesNEL {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesOpportunisticEncryption {
    /**
     * ID of the zone setting.
     */
    id: 'opportunistic_encryption';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface ZonesOpportunisticOnion {
    /**
     * ID of the zone setting.
     */
    id: 'opportunistic_onion';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface ZonesOrangeToOrange {
    /**
     * ID of the zone setting.
     */
    id: 'orange_to_orange';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesOriginErrorPagePassThru {
    /**
     * ID of the zone setting.
     */
    id: 'origin_error_page_pass_thru';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface ZonesPolish {
    /**
     * ID of the zone setting.
     */
    id: 'polish';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'lossless' | 'lossy';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface ZonesPrefetchPreload {
    /**
     * ID of the zone setting.
     */
    id: 'prefetch_preload';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface ZonesProxyReadTimeout {
    /**
     * ID of the zone setting.
     */
    id: 'proxy_read_timeout';

    /**
     * Current value of the zone setting.
     */
    value: number;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface ZonesPseudoIPV4 {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id: 'pseudo_ipv4';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'add_header' | 'overwrite_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesResponseBuffering {
    /**
     * ID of the zone setting.
     */
    id: 'response_buffering';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  export interface ZonesRocketLoader {
    /**
     * ID of the zone setting.
     */
    id: 'rocket_loader';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_platform_optimization';

    /**
     * Current value of the zone setting.
     */
    value: ZonesSchemasAutomaticPlatformOptimization.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesSchemasAutomaticPlatformOptimization {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Indicates whether or not
       * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
       * is enabled.
       */
      cache_by_device_type: boolean;

      /**
       * Indicates whether or not Cloudflare proxy is enabled.
       */
      cf: boolean;

      /**
       * Indicates whether or not Automatic Platform Optimization is enabled.
       */
      enabled: boolean;

      /**
       * An array of hostnames where Automatic Platform Optimization for WordPress is
       * activated.
       */
      hostnames: Array<string>;

      /**
       * Indicates whether or not site is powered by WordPress.
       */
      wordpress: boolean;

      /**
       * Indicates whether or not
       * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
       * installed.
       */
      wp_plugin: boolean;
    }
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface ZonesSecurityHeader {
    /**
     * ID of the zone's security header.
     */
    id: 'security_header';

    /**
     * Current value of the zone setting.
     */
    value: ZonesSecurityHeader.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesSecurityHeader {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSecurityLevel {
    /**
     * ID of the zone setting.
     */
    id: 'security_level';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface ZonesServerSideExclude {
    /**
     * ID of the zone setting.
     */
    id: 'server_side_exclude';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id: 'sha1_support';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface ZonesSortQueryStringForCache {
    /**
     * ID of the zone setting.
     */
    id: 'sort_query_string_for_cache';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  export interface ZonesSSL {
    /**
     * ID of the zone setting.
     */
    id: 'ssl';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  export interface ZonesSSLRecommender {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTLS1_2Only {
    /**
     * Zone setting identifier.
     */
    id: 'tls_1_2_only';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface ZonesTLS1_3 {
    /**
     * ID of the zone setting.
     */
    id: 'tls_1_3';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'zrt';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface ZonesTLSClientAuth {
    /**
     * ID of the zone setting.
     */
    id: 'tls_client_auth';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesTrueClientIPHeader {
    /**
     * ID of the zone setting.
     */
    id: 'true_client_ip_header';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface ZonesWAF {
    /**
     * ID of the zone setting.
     */
    id: 'waf';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface ZonesWebp {
    /**
     * ID of the zone setting.
     */
    id: 'webp';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface ZonesWebsockets {
    /**
     * ID of the zone setting.
     */
    id: 'websockets';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }
}

export type SettingEditResponse = Array<
  | SettingEditResponse.Zones0rtt
  | SettingEditResponse.ZonesAdvancedDDOS
  | SettingEditResponse.ZonesAlwaysOnline
  | SettingEditResponse.ZonesAlwaysUseHTTPS
  | SettingEditResponse.ZonesAutomaticHTTPSRewrites
  | SettingEditResponse.ZonesBrotli
  | SettingEditResponse.ZonesBrowserCacheTTL
  | SettingEditResponse.ZonesBrowserCheck
  | SettingEditResponse.ZonesCacheLevel
  | SettingEditResponse.ZonesChallengeTTL
  | SettingEditResponse.ZonesCiphers
  | SettingEditResponse.ZonesCnameFlattening
  | SettingEditResponse.ZonesDevelopmentMode
  | SettingEditResponse.ZonesEarlyHints
  | SettingEditResponse.ZonesEdgeCacheTTL
  | SettingEditResponse.ZonesEmailObfuscation
  | SettingEditResponse.ZonesH2Prioritization
  | SettingEditResponse.ZonesHotlinkProtection
  | SettingEditResponse.ZonesHTTP2
  | SettingEditResponse.ZonesHTTP3
  | SettingEditResponse.ZonesImageResizing
  | SettingEditResponse.ZonesIPGeolocation
  | SettingEditResponse.ZonesIPV6
  | SettingEditResponse.ZonesMaxUpload
  | SettingEditResponse.ZonesMinTLSVersion
  | SettingEditResponse.ZonesMinify
  | SettingEditResponse.ZonesMirage
  | SettingEditResponse.ZonesMobileRedirect
  | SettingEditResponse.ZonesNEL
  | SettingEditResponse.ZonesOpportunisticEncryption
  | SettingEditResponse.ZonesOpportunisticOnion
  | SettingEditResponse.ZonesOrangeToOrange
  | SettingEditResponse.ZonesOriginErrorPagePassThru
  | SettingEditResponse.ZonesPolish
  | SettingEditResponse.ZonesPrefetchPreload
  | SettingEditResponse.ZonesProxyReadTimeout
  | SettingEditResponse.ZonesPseudoIPV4
  | SettingEditResponse.ZonesResponseBuffering
  | SettingEditResponse.ZonesRocketLoader
  | SettingEditResponse.ZonesSchemasAutomaticPlatformOptimization
  | SettingEditResponse.ZonesSecurityHeader
  | SettingEditResponse.ZonesSecurityLevel
  | SettingEditResponse.ZonesServerSideExclude
  | SettingEditResponse.ZonesSha1Support
  | SettingEditResponse.ZonesSortQueryStringForCache
  | SettingEditResponse.ZonesSSL
  | SettingEditResponse.ZonesSSLRecommender
  | SettingEditResponse.ZonesTLS1_2Only
  | SettingEditResponse.ZonesTLS1_3
  | SettingEditResponse.ZonesTLSClientAuth
  | SettingEditResponse.ZonesTrueClientIPHeader
  | SettingEditResponse.ZonesWAF
  | SettingEditResponse.ZonesWebp
  | SettingEditResponse.ZonesWebsockets
>;

export namespace SettingEditResponse {
  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Zones0rtt {
    /**
     * ID of the zone setting.
     */
    id: '0rtt';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  export interface ZonesAdvancedDDOS {
    /**
     * ID of the zone setting.
     */
    id: 'advanced_ddos';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface ZonesAlwaysOnline {
    /**
     * ID of the zone setting.
     */
    id: 'always_online';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesAlwaysUseHTTPS {
    /**
     * ID of the zone setting.
     */
    id: 'always_use_https';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface ZonesAutomaticHTTPSRewrites {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_https_rewrites';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface ZonesBrotli {
    /**
     * ID of the zone setting.
     */
    id: 'brotli';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesBrowserCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'browser_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface ZonesBrowserCheck {
    /**
     * ID of the zone setting.
     */
    id: 'browser_check';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface ZonesCacheLevel {
    /**
     * ID of the zone setting.
     */
    id: 'cache_level';

    /**
     * Current value of the zone setting.
     */
    value: 'aggressive' | 'basic' | 'simplified';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface ZonesChallengeTTL {
    /**
     * ID of the zone setting.
     */
    id: 'challenge_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface ZonesCiphers {
    /**
     * ID of the zone setting.
     */
    id: 'ciphers';

    /**
     * Current value of the zone setting.
     */
    value: Array<string>;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCnameFlattening {
    /**
     * How to flatten the cname destination.
     */
    id: 'cname_flattening';

    /**
     * Current value of the zone setting.
     */
    value: 'flatten_at_root' | 'flatten_all';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface ZonesDevelopmentMode {
    /**
     * ID of the zone setting.
     */
    id: 'development_mode';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The interval (in seconds) from when
     * development mode expires (positive integer) or last expired (negative integer)
     * for the domain. If development mode has never been enabled, this value is false.
     */
    time_remaining?: number;
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface ZonesEarlyHints {
    /**
     * ID of the zone setting.
     */
    id: 'early_hints';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'edge_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface ZonesEmailObfuscation {
    /**
     * ID of the zone setting.
     */
    id: 'email_obfuscation';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface ZonesH2Prioritization {
    /**
     * ID of the zone setting.
     */
    id: 'h2_prioritization';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'custom';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface ZonesHotlinkProtection {
    /**
     * ID of the zone setting.
     */
    id: 'hotlink_protection';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface ZonesHTTP2 {
    /**
     * ID of the zone setting.
     */
    id: 'http2';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface ZonesHTTP3 {
    /**
     * ID of the zone setting.
     */
    id: 'http3';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface ZonesImageResizing {
    /**
     * ID of the zone setting.
     */
    id: 'image_resizing';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'open';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesIPGeolocation {
    /**
     * ID of the zone setting.
     */
    id: 'ip_geolocation';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface ZonesIPV6 {
    /**
     * ID of the zone setting.
     */
    id: 'ipv6';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id: 'max_upload';

    /**
     * Current value of the zone setting.
     */
    value: 100 | 200 | 500;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface ZonesMinTLSVersion {
    /**
     * ID of the zone setting.
     */
    id: 'min_tls_version';

    /**
     * Current value of the zone setting.
     */
    value: '1.0' | '1.1' | '1.2' | '1.3';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface ZonesMinify {
    /**
     * Zone setting identifier.
     */
    id: 'minify';

    /**
     * Current value of the zone setting.
     */
    value: ZonesMinify.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesMinify {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesMirage {
    /**
     * ID of the zone setting.
     */
    id: 'mirage';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface ZonesMobileRedirect {
    /**
     * Identifier of the zone setting.
     */
    id: 'mobile_redirect';

    /**
     * Current value of the zone setting.
     */
    value: ZonesMobileRedirect.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesMobileRedirect {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface ZonesNEL {
    /**
     * Zone setting identifier.
     */
    id: 'nel';

    /**
     * Current value of the zone setting.
     */
    value: ZonesNEL.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesNEL {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesOpportunisticEncryption {
    /**
     * ID of the zone setting.
     */
    id: 'opportunistic_encryption';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface ZonesOpportunisticOnion {
    /**
     * ID of the zone setting.
     */
    id: 'opportunistic_onion';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface ZonesOrangeToOrange {
    /**
     * ID of the zone setting.
     */
    id: 'orange_to_orange';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesOriginErrorPagePassThru {
    /**
     * ID of the zone setting.
     */
    id: 'origin_error_page_pass_thru';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface ZonesPolish {
    /**
     * ID of the zone setting.
     */
    id: 'polish';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'lossless' | 'lossy';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface ZonesPrefetchPreload {
    /**
     * ID of the zone setting.
     */
    id: 'prefetch_preload';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface ZonesProxyReadTimeout {
    /**
     * ID of the zone setting.
     */
    id: 'proxy_read_timeout';

    /**
     * Current value of the zone setting.
     */
    value: number;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface ZonesPseudoIPV4 {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id: 'pseudo_ipv4';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'add_header' | 'overwrite_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesResponseBuffering {
    /**
     * ID of the zone setting.
     */
    id: 'response_buffering';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  export interface ZonesRocketLoader {
    /**
     * ID of the zone setting.
     */
    id: 'rocket_loader';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_platform_optimization';

    /**
     * Current value of the zone setting.
     */
    value: ZonesSchemasAutomaticPlatformOptimization.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesSchemasAutomaticPlatformOptimization {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Indicates whether or not
       * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
       * is enabled.
       */
      cache_by_device_type: boolean;

      /**
       * Indicates whether or not Cloudflare proxy is enabled.
       */
      cf: boolean;

      /**
       * Indicates whether or not Automatic Platform Optimization is enabled.
       */
      enabled: boolean;

      /**
       * An array of hostnames where Automatic Platform Optimization for WordPress is
       * activated.
       */
      hostnames: Array<string>;

      /**
       * Indicates whether or not site is powered by WordPress.
       */
      wordpress: boolean;

      /**
       * Indicates whether or not
       * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
       * installed.
       */
      wp_plugin: boolean;
    }
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface ZonesSecurityHeader {
    /**
     * ID of the zone's security header.
     */
    id: 'security_header';

    /**
     * Current value of the zone setting.
     */
    value: ZonesSecurityHeader.Value;

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  export namespace ZonesSecurityHeader {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSecurityLevel {
    /**
     * ID of the zone setting.
     */
    id: 'security_level';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface ZonesServerSideExclude {
    /**
     * ID of the zone setting.
     */
    id: 'server_side_exclude';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id: 'sha1_support';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface ZonesSortQueryStringForCache {
    /**
     * ID of the zone setting.
     */
    id: 'sort_query_string_for_cache';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  export interface ZonesSSL {
    /**
     * ID of the zone setting.
     */
    id: 'ssl';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'flexible' | 'full' | 'strict';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  export interface ZonesSSLRecommender {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTLS1_2Only {
    /**
     * Zone setting identifier.
     */
    id: 'tls_1_2_only';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface ZonesTLS1_3 {
    /**
     * ID of the zone setting.
     */
    id: 'tls_1_3';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'zrt';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface ZonesTLSClientAuth {
    /**
     * ID of the zone setting.
     */
    id: 'tls_client_auth';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesTrueClientIPHeader {
    /**
     * ID of the zone setting.
     */
    id: 'true_client_ip_header';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface ZonesWAF {
    /**
     * ID of the zone setting.
     */
    id: 'waf';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface ZonesWebp {
    /**
     * ID of the zone setting.
     */
    id: 'webp';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface ZonesWebsockets {
    /**
     * ID of the zone setting.
     */
    id: 'websockets';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }
}

export interface SettingListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface SettingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: One or more zone setting objects. Must contain an ID and a value.
   */
  items: Array<
    | SettingEditParams.Zones0rtt
    | SettingEditParams.ZonesAdvancedDDOS
    | SettingEditParams.ZonesAlwaysOnline
    | SettingEditParams.ZonesAlwaysUseHTTPS
    | SettingEditParams.ZonesAutomaticHTTPSRewrites
    | SettingEditParams.ZonesBrotli
    | SettingEditParams.ZonesBrowserCacheTTL
    | SettingEditParams.ZonesBrowserCheck
    | SettingEditParams.ZonesCacheLevel
    | SettingEditParams.ZonesChallengeTTL
    | SettingEditParams.ZonesCiphers
    | SettingEditParams.ZonesCnameFlattening
    | SettingEditParams.ZonesDevelopmentMode
    | SettingEditParams.ZonesEarlyHints
    | SettingEditParams.ZonesEdgeCacheTTL
    | SettingEditParams.ZonesEmailObfuscation
    | SettingEditParams.ZonesH2Prioritization
    | SettingEditParams.ZonesHotlinkProtection
    | SettingEditParams.ZonesHTTP2
    | SettingEditParams.ZonesHTTP3
    | SettingEditParams.ZonesImageResizing
    | SettingEditParams.ZonesIPGeolocation
    | SettingEditParams.ZonesIPV6
    | SettingEditParams.ZonesMaxUpload
    | SettingEditParams.ZonesMinTLSVersion
    | SettingEditParams.ZonesMinify
    | SettingEditParams.ZonesMirage
    | SettingEditParams.ZonesMobileRedirect
    | SettingEditParams.ZonesNEL
    | SettingEditParams.ZonesOpportunisticEncryption
    | SettingEditParams.ZonesOpportunisticOnion
    | SettingEditParams.ZonesOrangeToOrange
    | SettingEditParams.ZonesOriginErrorPagePassThru
    | SettingEditParams.ZonesPolish
    | SettingEditParams.ZonesPrefetchPreload
    | SettingEditParams.ZonesProxyReadTimeout
    | SettingEditParams.ZonesPseudoIPV4
    | SettingEditParams.ZonesResponseBuffering
    | SettingEditParams.ZonesRocketLoader
    | SettingEditParams.ZonesSchemasAutomaticPlatformOptimization
    | SettingEditParams.ZonesSecurityHeader
    | SettingEditParams.ZonesSecurityLevel
    | SettingEditParams.ZonesServerSideExclude
    | SettingEditParams.ZonesSha1Support
    | SettingEditParams.ZonesSortQueryStringForCache
    | SettingEditParams.ZonesSSL
    | SettingEditParams.ZonesSSLRecommender
    | SettingEditParams.ZonesTLS1_2Only
    | SettingEditParams.ZonesTLS1_3
    | SettingEditParams.ZonesTLSClientAuth
    | SettingEditParams.ZonesTrueClientIPHeader
    | SettingEditParams.ZonesWAF
    | SettingEditParams.ZonesWebp
    | SettingEditParams.ZonesWebsockets
  >;
}

export namespace SettingEditParams {
  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Zones0rtt {
    /**
     * ID of the zone setting.
     */
    id: '0rtt';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  export interface ZonesAdvancedDDOS {
    /**
     * ID of the zone setting.
     */
    id: 'advanced_ddos';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface ZonesAlwaysOnline {
    /**
     * ID of the zone setting.
     */
    id: 'always_online';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesAlwaysUseHTTPS {
    /**
     * ID of the zone setting.
     */
    id: 'always_use_https';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface ZonesAutomaticHTTPSRewrites {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_https_rewrites';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface ZonesBrotli {
    /**
     * ID of the zone setting.
     */
    id: 'brotli';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesBrowserCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'browser_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface ZonesBrowserCheck {
    /**
     * ID of the zone setting.
     */
    id: 'browser_check';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface ZonesCacheLevel {
    /**
     * ID of the zone setting.
     */
    id: 'cache_level';

    /**
     * Current value of the zone setting.
     */
    value: 'aggressive' | 'basic' | 'simplified';
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface ZonesChallengeTTL {
    /**
     * ID of the zone setting.
     */
    id: 'challenge_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface ZonesCiphers {
    /**
     * ID of the zone setting.
     */
    id: 'ciphers';

    /**
     * Current value of the zone setting.
     */
    value: Array<string>;
  }

  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCnameFlattening {
    /**
     * How to flatten the cname destination.
     */
    id: 'cname_flattening';

    /**
     * Current value of the zone setting.
     */
    value: 'flatten_at_root' | 'flatten_all';
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface ZonesDevelopmentMode {
    /**
     * ID of the zone setting.
     */
    id: 'development_mode';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface ZonesEarlyHints {
    /**
     * ID of the zone setting.
     */
    id: 'early_hints';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTTL {
    /**
     * ID of the zone setting.
     */
    id: 'edge_cache_ttl';

    /**
     * Current value of the zone setting.
     */
    value:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface ZonesEmailObfuscation {
    /**
     * ID of the zone setting.
     */
    id: 'email_obfuscation';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface ZonesH2Prioritization {
    /**
     * ID of the zone setting.
     */
    id: 'h2_prioritization';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'custom';
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface ZonesHotlinkProtection {
    /**
     * ID of the zone setting.
     */
    id: 'hotlink_protection';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface ZonesHTTP2 {
    /**
     * ID of the zone setting.
     */
    id: 'http2';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface ZonesHTTP3 {
    /**
     * ID of the zone setting.
     */
    id: 'http3';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface ZonesImageResizing {
    /**
     * ID of the zone setting.
     */
    id: 'image_resizing';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'open';
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesIPGeolocation {
    /**
     * ID of the zone setting.
     */
    id: 'ip_geolocation';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface ZonesIPV6 {
    /**
     * ID of the zone setting.
     */
    id: 'ipv6';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id: 'max_upload';

    /**
     * Current value of the zone setting.
     */
    value: 100 | 200 | 500;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface ZonesMinTLSVersion {
    /**
     * ID of the zone setting.
     */
    id: 'min_tls_version';

    /**
     * Current value of the zone setting.
     */
    value: '1.0' | '1.1' | '1.2' | '1.3';
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface ZonesMinify {
    /**
     * Zone setting identifier.
     */
    id: 'minify';

    /**
     * Current value of the zone setting.
     */
    value: ZonesMinify.Value;
  }

  export namespace ZonesMinify {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesMirage {
    /**
     * ID of the zone setting.
     */
    id: 'mirage';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface ZonesMobileRedirect {
    /**
     * Identifier of the zone setting.
     */
    id: 'mobile_redirect';

    /**
     * Current value of the zone setting.
     */
    value: ZonesMobileRedirect.Value;
  }

  export namespace ZonesMobileRedirect {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface ZonesNEL {
    /**
     * Zone setting identifier.
     */
    id: 'nel';

    /**
     * Current value of the zone setting.
     */
    value: ZonesNEL.Value;
  }

  export namespace ZonesNEL {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesOpportunisticEncryption {
    /**
     * ID of the zone setting.
     */
    id: 'opportunistic_encryption';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface ZonesOpportunisticOnion {
    /**
     * ID of the zone setting.
     */
    id: 'opportunistic_onion';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface ZonesOrangeToOrange {
    /**
     * ID of the zone setting.
     */
    id: 'orange_to_orange';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesOriginErrorPagePassThru {
    /**
     * ID of the zone setting.
     */
    id: 'origin_error_page_pass_thru';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface ZonesPolish {
    /**
     * ID of the zone setting.
     */
    id: 'polish';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'lossless' | 'lossy';
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface ZonesPrefetchPreload {
    /**
     * ID of the zone setting.
     */
    id: 'prefetch_preload';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface ZonesProxyReadTimeout {
    /**
     * ID of the zone setting.
     */
    id: 'proxy_read_timeout';

    /**
     * Current value of the zone setting.
     */
    value: number;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface ZonesPseudoIPV4 {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id: 'pseudo_ipv4';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'add_header' | 'overwrite_header';
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesResponseBuffering {
    /**
     * ID of the zone setting.
     */
    id: 'response_buffering';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  export interface ZonesRocketLoader {
    /**
     * ID of the zone setting.
     */
    id: 'rocket_loader';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id: 'automatic_platform_optimization';

    /**
     * Current value of the zone setting.
     */
    value: ZonesSchemasAutomaticPlatformOptimization.Value;
  }

  export namespace ZonesSchemasAutomaticPlatformOptimization {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Indicates whether or not
       * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
       * is enabled.
       */
      cache_by_device_type: boolean;

      /**
       * Indicates whether or not Cloudflare proxy is enabled.
       */
      cf: boolean;

      /**
       * Indicates whether or not Automatic Platform Optimization is enabled.
       */
      enabled: boolean;

      /**
       * An array of hostnames where Automatic Platform Optimization for WordPress is
       * activated.
       */
      hostnames: Array<string>;

      /**
       * Indicates whether or not site is powered by WordPress.
       */
      wordpress: boolean;

      /**
       * Indicates whether or not
       * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
       * installed.
       */
      wp_plugin: boolean;
    }
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface ZonesSecurityHeader {
    /**
     * ID of the zone's security header.
     */
    id: 'security_header';

    /**
     * Current value of the zone setting.
     */
    value: ZonesSecurityHeader.Value;
  }

  export namespace ZonesSecurityHeader {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSecurityLevel {
    /**
     * ID of the zone setting.
     */
    id: 'security_level';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface ZonesServerSideExclude {
    /**
     * ID of the zone setting.
     */
    id: 'server_side_exclude';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id: 'sha1_support';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface ZonesSortQueryStringForCache {
    /**
     * ID of the zone setting.
     */
    id: 'sort_query_string_for_cache';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  export interface ZonesSSL {
    /**
     * ID of the zone setting.
     */
    id: 'ssl';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'flexible' | 'full' | 'strict';
  }

  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  export interface ZonesSSLRecommender {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTLS1_2Only {
    /**
     * Zone setting identifier.
     */
    id: 'tls_1_2_only';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface ZonesTLS1_3 {
    /**
     * ID of the zone setting.
     */
    id: 'tls_1_3';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'zrt';
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface ZonesTLSClientAuth {
    /**
     * ID of the zone setting.
     */
    id: 'tls_client_auth';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesTrueClientIPHeader {
    /**
     * ID of the zone setting.
     */
    id: 'true_client_ip_header';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface ZonesWAF {
    /**
     * ID of the zone setting.
     */
    id: 'waf';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface ZonesWebp {
    /**
     * ID of the zone setting.
     */
    id: 'webp';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface ZonesWebsockets {
    /**
     * ID of the zone setting.
     */
    id: 'websockets';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'on';
  }
}

export namespace Settings {
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingListParams = SettingsAPI.SettingListParams;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import ZeroRTT = ZeroRTTAPI.ZeroRTT;
  export import ZeroRTTEditResponse = ZeroRTTAPI.ZeroRTTEditResponse;
  export import ZeroRTTGetResponse = ZeroRTTAPI.ZeroRTTGetResponse;
  export import ZeroRTTEditParams = ZeroRTTAPI.ZeroRTTEditParams;
  export import ZeroRTTGetParams = ZeroRTTAPI.ZeroRTTGetParams;
  export import AdvancedDDOS = AdvancedDDOSAPI.AdvancedDDOS;
  export import AdvancedDDOSGetResponse = AdvancedDDOSAPI.AdvancedDDOSGetResponse;
  export import AdvancedDDOSGetParams = AdvancedDDOSAPI.AdvancedDDOSGetParams;
  export import AlwaysOnline = AlwaysOnlineAPI.AlwaysOnline;
  export import AlwaysOnlineEditResponse = AlwaysOnlineAPI.AlwaysOnlineEditResponse;
  export import AlwaysOnlineGetResponse = AlwaysOnlineAPI.AlwaysOnlineGetResponse;
  export import AlwaysOnlineEditParams = AlwaysOnlineAPI.AlwaysOnlineEditParams;
  export import AlwaysOnlineGetParams = AlwaysOnlineAPI.AlwaysOnlineGetParams;
  export import AlwaysUseHTTPS = AlwaysUseHTTPSAPI.AlwaysUseHTTPS;
  export import AlwaysUseHTTPSEditResponse = AlwaysUseHTTPSAPI.AlwaysUseHTTPSEditResponse;
  export import AlwaysUseHTTPSGetResponse = AlwaysUseHTTPSAPI.AlwaysUseHTTPSGetResponse;
  export import AlwaysUseHTTPSEditParams = AlwaysUseHTTPSAPI.AlwaysUseHTTPSEditParams;
  export import AlwaysUseHTTPSGetParams = AlwaysUseHTTPSAPI.AlwaysUseHTTPSGetParams;
  export import AutomaticHTTPSRewrites = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites;
  export import AutomaticHTTPSRewriteEditResponse = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteEditResponse;
  export import AutomaticHTTPSRewriteGetResponse = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteGetResponse;
  export import AutomaticHTTPSRewriteEditParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteEditParams;
  export import AutomaticHTTPSRewriteGetParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteGetParams;
  export import AutomaticPlatformOptimization = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization;
  export import AutomaticPlatformOptimizationEditResponse = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationEditResponse;
  export import AutomaticPlatformOptimizationGetResponse = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationGetResponse;
  export import AutomaticPlatformOptimizationEditParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationEditParams;
  export import AutomaticPlatformOptimizationGetParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationGetParams;
  export import Brotli = BrotliAPI.Brotli;
  export import BrotliEditResponse = BrotliAPI.BrotliEditResponse;
  export import BrotliGetResponse = BrotliAPI.BrotliGetResponse;
  export import BrotliEditParams = BrotliAPI.BrotliEditParams;
  export import BrotliGetParams = BrotliAPI.BrotliGetParams;
  export import BrowserCacheTTL = BrowserCacheTTLAPI.BrowserCacheTTL;
  export import BrowserCacheTTLEditResponse = BrowserCacheTTLAPI.BrowserCacheTTLEditResponse;
  export import BrowserCacheTTLGetResponse = BrowserCacheTTLAPI.BrowserCacheTTLGetResponse;
  export import BrowserCacheTTLEditParams = BrowserCacheTTLAPI.BrowserCacheTTLEditParams;
  export import BrowserCacheTTLGetParams = BrowserCacheTTLAPI.BrowserCacheTTLGetParams;
  export import BrowserCheck = BrowserCheckAPI.BrowserCheck;
  export import BrowserCheckEditResponse = BrowserCheckAPI.BrowserCheckEditResponse;
  export import BrowserCheckGetResponse = BrowserCheckAPI.BrowserCheckGetResponse;
  export import BrowserCheckEditParams = BrowserCheckAPI.BrowserCheckEditParams;
  export import BrowserCheckGetParams = BrowserCheckAPI.BrowserCheckGetParams;
  export import CacheLevel = CacheLevelAPI.CacheLevel;
  export import CacheLevelEditResponse = CacheLevelAPI.CacheLevelEditResponse;
  export import CacheLevelGetResponse = CacheLevelAPI.CacheLevelGetResponse;
  export import CacheLevelEditParams = CacheLevelAPI.CacheLevelEditParams;
  export import CacheLevelGetParams = CacheLevelAPI.CacheLevelGetParams;
  export import ChallengeTTL = ChallengeTTLAPI.ChallengeTTL;
  export import ChallengeTTLEditResponse = ChallengeTTLAPI.ChallengeTTLEditResponse;
  export import ChallengeTTLGetResponse = ChallengeTTLAPI.ChallengeTTLGetResponse;
  export import ChallengeTTLEditParams = ChallengeTTLAPI.ChallengeTTLEditParams;
  export import ChallengeTTLGetParams = ChallengeTTLAPI.ChallengeTTLGetParams;
  export import Ciphers = CiphersAPI.Ciphers;
  export import CipherEditResponse = CiphersAPI.CipherEditResponse;
  export import CipherGetResponse = CiphersAPI.CipherGetResponse;
  export import CipherEditParams = CiphersAPI.CipherEditParams;
  export import CipherGetParams = CiphersAPI.CipherGetParams;
  export import DevelopmentMode = DevelopmentModeAPI.DevelopmentMode;
  export import DevelopmentModeEditResponse = DevelopmentModeAPI.DevelopmentModeEditResponse;
  export import DevelopmentModeGetResponse = DevelopmentModeAPI.DevelopmentModeGetResponse;
  export import DevelopmentModeEditParams = DevelopmentModeAPI.DevelopmentModeEditParams;
  export import DevelopmentModeGetParams = DevelopmentModeAPI.DevelopmentModeGetParams;
  export import EarlyHints = EarlyHintsAPI.EarlyHints;
  export import EarlyHintEditResponse = EarlyHintsAPI.EarlyHintEditResponse;
  export import EarlyHintGetResponse = EarlyHintsAPI.EarlyHintGetResponse;
  export import EarlyHintEditParams = EarlyHintsAPI.EarlyHintEditParams;
  export import EarlyHintGetParams = EarlyHintsAPI.EarlyHintGetParams;
  export import EmailObfuscation = EmailObfuscationAPI.EmailObfuscation;
  export import EmailObfuscationEditResponse = EmailObfuscationAPI.EmailObfuscationEditResponse;
  export import EmailObfuscationGetResponse = EmailObfuscationAPI.EmailObfuscationGetResponse;
  export import EmailObfuscationEditParams = EmailObfuscationAPI.EmailObfuscationEditParams;
  export import EmailObfuscationGetParams = EmailObfuscationAPI.EmailObfuscationGetParams;
  export import H2Prioritization = H2PrioritizationAPI.H2Prioritization;
  export import H2PrioritizationEditResponse = H2PrioritizationAPI.H2PrioritizationEditResponse;
  export import H2PrioritizationGetResponse = H2PrioritizationAPI.H2PrioritizationGetResponse;
  export import H2PrioritizationEditParams = H2PrioritizationAPI.H2PrioritizationEditParams;
  export import H2PrioritizationGetParams = H2PrioritizationAPI.H2PrioritizationGetParams;
  export import HotlinkProtection = HotlinkProtectionAPI.HotlinkProtection;
  export import HotlinkProtectionEditResponse = HotlinkProtectionAPI.HotlinkProtectionEditResponse;
  export import HotlinkProtectionGetResponse = HotlinkProtectionAPI.HotlinkProtectionGetResponse;
  export import HotlinkProtectionEditParams = HotlinkProtectionAPI.HotlinkProtectionEditParams;
  export import HotlinkProtectionGetParams = HotlinkProtectionAPI.HotlinkProtectionGetParams;
  export import HTTP2 = HTTP2API.HTTP2;
  export import HTTP2EditResponse = HTTP2API.HTTP2EditResponse;
  export import HTTP2GetResponse = HTTP2API.HTTP2GetResponse;
  export import HTTP2EditParams = HTTP2API.HTTP2EditParams;
  export import HTTP2GetParams = HTTP2API.HTTP2GetParams;
  export import HTTP3 = HTTP3API.HTTP3;
  export import HTTP3EditResponse = HTTP3API.HTTP3EditResponse;
  export import HTTP3GetResponse = HTTP3API.HTTP3GetResponse;
  export import HTTP3EditParams = HTTP3API.HTTP3EditParams;
  export import HTTP3GetParams = HTTP3API.HTTP3GetParams;
  export import ImageResizing = ImageResizingAPI.ImageResizing;
  export import ImageResizingEditResponse = ImageResizingAPI.ImageResizingEditResponse;
  export import ImageResizingGetResponse = ImageResizingAPI.ImageResizingGetResponse;
  export import ImageResizingEditParams = ImageResizingAPI.ImageResizingEditParams;
  export import ImageResizingGetParams = ImageResizingAPI.ImageResizingGetParams;
  export import IPGeolocation = IPGeolocationAPI.IPGeolocation;
  export import IPGeolocationEditResponse = IPGeolocationAPI.IPGeolocationEditResponse;
  export import IPGeolocationGetResponse = IPGeolocationAPI.IPGeolocationGetResponse;
  export import IPGeolocationEditParams = IPGeolocationAPI.IPGeolocationEditParams;
  export import IPGeolocationGetParams = IPGeolocationAPI.IPGeolocationGetParams;
  export import IPV6 = IPV6API.IPV6;
  export import IPV6EditResponse = IPV6API.IPV6EditResponse;
  export import IPV6GetResponse = IPV6API.IPV6GetResponse;
  export import IPV6EditParams = IPV6API.IPV6EditParams;
  export import IPV6GetParams = IPV6API.IPV6GetParams;
  export import MinTLSVersion = MinTLSVersionAPI.MinTLSVersion;
  export import MinTLSVersionEditResponse = MinTLSVersionAPI.MinTLSVersionEditResponse;
  export import MinTLSVersionGetResponse = MinTLSVersionAPI.MinTLSVersionGetResponse;
  export import MinTLSVersionEditParams = MinTLSVersionAPI.MinTLSVersionEditParams;
  export import MinTLSVersionGetParams = MinTLSVersionAPI.MinTLSVersionGetParams;
  export import Minify = MinifyAPI.Minify;
  export import MinifyEditResponse = MinifyAPI.MinifyEditResponse;
  export import MinifyGetResponse = MinifyAPI.MinifyGetResponse;
  export import MinifyEditParams = MinifyAPI.MinifyEditParams;
  export import MinifyGetParams = MinifyAPI.MinifyGetParams;
  export import Mirage = MirageAPI.Mirage;
  export import MirageEditResponse = MirageAPI.MirageEditResponse;
  export import MirageGetResponse = MirageAPI.MirageGetResponse;
  export import MirageEditParams = MirageAPI.MirageEditParams;
  export import MirageGetParams = MirageAPI.MirageGetParams;
  export import MobileRedirect = MobileRedirectAPI.MobileRedirect;
  export import MobileRedirectEditResponse = MobileRedirectAPI.MobileRedirectEditResponse;
  export import MobileRedirectGetResponse = MobileRedirectAPI.MobileRedirectGetResponse;
  export import MobileRedirectEditParams = MobileRedirectAPI.MobileRedirectEditParams;
  export import MobileRedirectGetParams = MobileRedirectAPI.MobileRedirectGetParams;
  export import NEL = NELAPI.NEL;
  export import NELEditResponse = NELAPI.NELEditResponse;
  export import NELGetResponse = NELAPI.NELGetResponse;
  export import NELEditParams = NELAPI.NELEditParams;
  export import NELGetParams = NELAPI.NELGetParams;
  export import OpportunisticEncryption = OpportunisticEncryptionAPI.OpportunisticEncryption;
  export import OpportunisticEncryptionEditResponse = OpportunisticEncryptionAPI.OpportunisticEncryptionEditResponse;
  export import OpportunisticEncryptionGetResponse = OpportunisticEncryptionAPI.OpportunisticEncryptionGetResponse;
  export import OpportunisticEncryptionEditParams = OpportunisticEncryptionAPI.OpportunisticEncryptionEditParams;
  export import OpportunisticEncryptionGetParams = OpportunisticEncryptionAPI.OpportunisticEncryptionGetParams;
  export import OpportunisticOnion = OpportunisticOnionAPI.OpportunisticOnion;
  export import OpportunisticOnionEditResponse = OpportunisticOnionAPI.OpportunisticOnionEditResponse;
  export import OpportunisticOnionGetResponse = OpportunisticOnionAPI.OpportunisticOnionGetResponse;
  export import OpportunisticOnionEditParams = OpportunisticOnionAPI.OpportunisticOnionEditParams;
  export import OpportunisticOnionGetParams = OpportunisticOnionAPI.OpportunisticOnionGetParams;
  export import OrangeToOrange = OrangeToOrangeAPI.OrangeToOrange;
  export import OrangeToOrangeEditResponse = OrangeToOrangeAPI.OrangeToOrangeEditResponse;
  export import OrangeToOrangeGetResponse = OrangeToOrangeAPI.OrangeToOrangeGetResponse;
  export import OrangeToOrangeEditParams = OrangeToOrangeAPI.OrangeToOrangeEditParams;
  export import OrangeToOrangeGetParams = OrangeToOrangeAPI.OrangeToOrangeGetParams;
  export import OriginErrorPagePassThru = OriginErrorPagePassThruAPI.OriginErrorPagePassThru;
  export import OriginErrorPagePassThruEditResponse = OriginErrorPagePassThruAPI.OriginErrorPagePassThruEditResponse;
  export import OriginErrorPagePassThruGetResponse = OriginErrorPagePassThruAPI.OriginErrorPagePassThruGetResponse;
  export import OriginErrorPagePassThruEditParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruEditParams;
  export import OriginErrorPagePassThruGetParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruGetParams;
  export import OriginMaxHTTPVersion = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion;
  export import OriginMaxHTTPVersionEditResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditResponse;
  export import OriginMaxHTTPVersionGetResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetResponse;
  export import OriginMaxHTTPVersionEditParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditParams;
  export import OriginMaxHTTPVersionGetParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetParams;
  export import Polish = PolishAPI.Polish;
  export import PolishEditResponse = PolishAPI.PolishEditResponse;
  export import PolishGetResponse = PolishAPI.PolishGetResponse;
  export import PolishEditParams = PolishAPI.PolishEditParams;
  export import PolishGetParams = PolishAPI.PolishGetParams;
  export import PrefetchPreload = PrefetchPreloadAPI.PrefetchPreload;
  export import PrefetchPreloadEditResponse = PrefetchPreloadAPI.PrefetchPreloadEditResponse;
  export import PrefetchPreloadGetResponse = PrefetchPreloadAPI.PrefetchPreloadGetResponse;
  export import PrefetchPreloadEditParams = PrefetchPreloadAPI.PrefetchPreloadEditParams;
  export import PrefetchPreloadGetParams = PrefetchPreloadAPI.PrefetchPreloadGetParams;
  export import ProxyReadTimeout = ProxyReadTimeoutAPI.ProxyReadTimeout;
  export import ProxyReadTimeoutEditResponse = ProxyReadTimeoutAPI.ProxyReadTimeoutEditResponse;
  export import ProxyReadTimeoutGetResponse = ProxyReadTimeoutAPI.ProxyReadTimeoutGetResponse;
  export import ProxyReadTimeoutEditParams = ProxyReadTimeoutAPI.ProxyReadTimeoutEditParams;
  export import ProxyReadTimeoutGetParams = ProxyReadTimeoutAPI.ProxyReadTimeoutGetParams;
  export import PseudoIPV4 = PseudoIPV4API.PseudoIPV4;
  export import PseudoIPV4EditResponse = PseudoIPV4API.PseudoIPV4EditResponse;
  export import PseudoIPV4GetResponse = PseudoIPV4API.PseudoIPV4GetResponse;
  export import PseudoIPV4EditParams = PseudoIPV4API.PseudoIPV4EditParams;
  export import PseudoIPV4GetParams = PseudoIPV4API.PseudoIPV4GetParams;
  export import ResponseBuffering = ResponseBufferingAPI.ResponseBuffering;
  export import ResponseBufferingEditResponse = ResponseBufferingAPI.ResponseBufferingEditResponse;
  export import ResponseBufferingGetResponse = ResponseBufferingAPI.ResponseBufferingGetResponse;
  export import ResponseBufferingEditParams = ResponseBufferingAPI.ResponseBufferingEditParams;
  export import ResponseBufferingGetParams = ResponseBufferingAPI.ResponseBufferingGetParams;
  export import RocketLoader = RocketLoaderAPI.RocketLoader;
  export import RocketLoaderEditResponse = RocketLoaderAPI.RocketLoaderEditResponse;
  export import RocketLoaderGetResponse = RocketLoaderAPI.RocketLoaderGetResponse;
  export import RocketLoaderEditParams = RocketLoaderAPI.RocketLoaderEditParams;
  export import RocketLoaderGetParams = RocketLoaderAPI.RocketLoaderGetParams;
  export import SecurityHeaders = SecurityHeadersAPI.SecurityHeaders;
  export import SecurityHeaderEditResponse = SecurityHeadersAPI.SecurityHeaderEditResponse;
  export import SecurityHeaderGetResponse = SecurityHeadersAPI.SecurityHeaderGetResponse;
  export import SecurityHeaderEditParams = SecurityHeadersAPI.SecurityHeaderEditParams;
  export import SecurityHeaderGetParams = SecurityHeadersAPI.SecurityHeaderGetParams;
  export import SecurityLevel = SecurityLevelAPI.SecurityLevel;
  export import SecurityLevelEditResponse = SecurityLevelAPI.SecurityLevelEditResponse;
  export import SecurityLevelGetResponse = SecurityLevelAPI.SecurityLevelGetResponse;
  export import SecurityLevelEditParams = SecurityLevelAPI.SecurityLevelEditParams;
  export import SecurityLevelGetParams = SecurityLevelAPI.SecurityLevelGetParams;
  export import ServerSideExcludes = ServerSideExcludesAPI.ServerSideExcludes;
  export import ServerSideExcludeEditResponse = ServerSideExcludesAPI.ServerSideExcludeEditResponse;
  export import ServerSideExcludeGetResponse = ServerSideExcludesAPI.ServerSideExcludeGetResponse;
  export import ServerSideExcludeEditParams = ServerSideExcludesAPI.ServerSideExcludeEditParams;
  export import ServerSideExcludeGetParams = ServerSideExcludesAPI.ServerSideExcludeGetParams;
  export import SortQueryStringForCache = SortQueryStringForCacheAPI.SortQueryStringForCache;
  export import SortQueryStringForCacheEditResponse = SortQueryStringForCacheAPI.SortQueryStringForCacheEditResponse;
  export import SortQueryStringForCacheGetResponse = SortQueryStringForCacheAPI.SortQueryStringForCacheGetResponse;
  export import SortQueryStringForCacheEditParams = SortQueryStringForCacheAPI.SortQueryStringForCacheEditParams;
  export import SortQueryStringForCacheGetParams = SortQueryStringForCacheAPI.SortQueryStringForCacheGetParams;
  export import SSL = SSLAPI.SSL;
  export import SSLEditResponse = SSLAPI.SSLEditResponse;
  export import SSLGetResponse = SSLAPI.SSLGetResponse;
  export import SSLEditParams = SSLAPI.SSLEditParams;
  export import SSLGetParams = SSLAPI.SSLGetParams;
  export import SSLRecommender = SSLRecommenderAPI.SSLRecommender;
  export import SSLRecommenderEditResponse = SSLRecommenderAPI.SSLRecommenderEditResponse;
  export import SSLRecommenderGetResponse = SSLRecommenderAPI.SSLRecommenderGetResponse;
  export import SSLRecommenderEditParams = SSLRecommenderAPI.SSLRecommenderEditParams;
  export import SSLRecommenderGetParams = SSLRecommenderAPI.SSLRecommenderGetParams;
  export import TLS1_3 = TLS1_3API.TLS1_3;
  export import TLS1_3EditResponse = TLS1_3API.TLS1_3EditResponse;
  export import TLS1_3GetResponse = TLS1_3API.TLS1_3GetResponse;
  export import TLS1_3EditParams = TLS1_3API.TLS1_3EditParams;
  export import TLS1_3GetParams = TLS1_3API.TLS1_3GetParams;
  export import TLSClientAuth = TLSClientAuthAPI.TLSClientAuth;
  export import TLSClientAuthEditResponse = TLSClientAuthAPI.TLSClientAuthEditResponse;
  export import TLSClientAuthGetResponse = TLSClientAuthAPI.TLSClientAuthGetResponse;
  export import TLSClientAuthEditParams = TLSClientAuthAPI.TLSClientAuthEditParams;
  export import TLSClientAuthGetParams = TLSClientAuthAPI.TLSClientAuthGetParams;
  export import TrueClientIPHeader = TrueClientIPHeaderAPI.TrueClientIPHeader;
  export import TrueClientIPHeaderEditResponse = TrueClientIPHeaderAPI.TrueClientIPHeaderEditResponse;
  export import TrueClientIPHeaderGetResponse = TrueClientIPHeaderAPI.TrueClientIPHeaderGetResponse;
  export import TrueClientIPHeaderEditParams = TrueClientIPHeaderAPI.TrueClientIPHeaderEditParams;
  export import TrueClientIPHeaderGetParams = TrueClientIPHeaderAPI.TrueClientIPHeaderGetParams;
  export import WAF = WAFAPI.WAF;
  export import WAFEditResponse = WAFAPI.WAFEditResponse;
  export import WAFGetResponse = WAFAPI.WAFGetResponse;
  export import WAFEditParams = WAFAPI.WAFEditParams;
  export import WAFGetParams = WAFAPI.WAFGetParams;
  export import Webp = WebpAPI.Webp;
  export import WebpEditResponse = WebpAPI.WebpEditResponse;
  export import WebpGetResponse = WebpAPI.WebpGetResponse;
  export import WebpEditParams = WebpAPI.WebpEditParams;
  export import WebpGetParams = WebpAPI.WebpGetParams;
  export import Websocket = WebsocketAPI.Websocket;
  export import WebsocketEditResponse = WebsocketAPI.WebsocketEditResponse;
  export import WebsocketGetResponse = WebsocketAPI.WebsocketGetResponse;
  export import WebsocketEditParams = WebsocketAPI.WebsocketEditParams;
  export import WebsocketGetParams = WebsocketAPI.WebsocketGetParams;
  export import FontSettings = FontSettingsAPI.FontSettings;
  export import FontSettingEditResponse = FontSettingsAPI.FontSettingEditResponse;
  export import FontSettingGetResponse = FontSettingsAPI.FontSettingGetResponse;
  export import FontSettingEditParams = FontSettingsAPI.FontSettingEditParams;
  export import FontSettingGetParams = FontSettingsAPI.FontSettingGetParams;
}
