// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SettingsAPI from './settings';

export class Settings extends APIResource {
  /**
   * Updates a single zone setting by the identifier
   */
  edit(
    settingId: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/${settingId}`, { body, ...options }) as Core.APIPromise<{
        result: SettingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single zone setting by name
   */
  get(
    settingId: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/${settingId}`, options) as Core.APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
 * website. This is an uneditable value that is 'on' in the case of Business and
 * Enterprise zones.
 */
export interface AdvancedDDoS {
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
 * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
 * website. This is an uneditable value that is 'on' in the case of Business and
 * Enterprise zones.
 */
export interface AdvancedDDoSParam {
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
 * Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your
 * layer 7 WAF and CDN services. The egress IPs are reserved exclusively for your
 * account so that you can increase your origin security by only allowing traffic
 * from a small list of IP addresses.
 */
export interface Aegis {
  /**
   * ID of the zone setting.
   */
  id: 'aegis';

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;

  /**
   * Value of the zone setting.
   */
  value?: Aegis.Value;
}

export namespace Aegis {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * Whether the feature is enabled or not.
     */
    enabled?: boolean;

    /**
     * Egress pool id which refers to a grouping of dedicated egress IPs through which
     * Cloudflare will connect to origin.
     */
    pool_id?: string;
  }
}

/**
 * When enabled, Cloudflare serves limited copies of web pages available from the
 * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
 * offline. Refer to
 * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
 * more information.
 */
export interface AlwaysOnline {
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
 * When enabled, Cloudflare serves limited copies of web pages available from the
 * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
 * offline. Refer to
 * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
 * more information.
 */
export interface AlwaysOnlineParam {
  /**
   * ID of the zone setting.
   */
  id: 'always_online';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface AlwaysUseHTTPS {
  /**
   * If enabled, any ` http://`` URL is converted to  `https://` through a 301
   * redirect.
   */
  id?: 'always_use_https';
}

export interface AlwaysUseHTTPSParam {
  /**
   * If enabled, any ` http://`` URL is converted to  `https://` through a 301
   * redirect.
   */
  id?: 'always_use_https';
}

export interface AutomaticHTTPSRewrites {
  /**
   * Turn on or off Automatic HTTPS Rewrites.
   */
  id?: 'automatic_https_rewrites';

  /**
   * The status of Automatic HTTPS Rewrites.
   */
  value?: 'on' | 'off';
}

export interface AutomaticHTTPSRewritesParam {
  /**
   * Turn on or off Automatic HTTPS Rewrites.
   */
  id?: 'automatic_https_rewrites';

  /**
   * The status of Automatic HTTPS Rewrites.
   */
  value?: 'on' | 'off';
}

export interface AutomaticPlatformOptimization {
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

export interface AutomaticPlatformOptimizationParam {
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

/**
 * When the client requesting an asset supports the Brotli compression algorithm,
 * Cloudflare will serve a Brotli compressed version of the asset.
 */
export interface Brotli {
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
 * When the client requesting an asset supports the Brotli compression algorithm,
 * Cloudflare will serve a Brotli compressed version of the asset.
 */
export interface BrotliParam {
  /**
   * ID of the zone setting.
   */
  id: 'brotli';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';
}

export interface BrowserCacheTTL {
  /**
   * Control how long resources cached by client browsers remain valid.
   */
  id?: 'browser_cache_ttl';

  /**
   * The number of seconds to cache resources for. The API prohibits setting this to
   * 0 for non-Enterprise domains.
   */
  value?: number;
}

export interface BrowserCacheTTLParam {
  /**
   * Control how long resources cached by client browsers remain valid.
   */
  id?: 'browser_cache_ttl';

  /**
   * The number of seconds to cache resources for. The API prohibits setting this to
   * 0 for non-Enterprise domains.
   */
  value?: number;
}

export interface BrowserCheck {
  /**
   * Inspect the visitor's browser for headers commonly associated with spammers and
   * certain bots.
   */
  id?: 'browser_check';

  /**
   * The status of Browser Integrity Check.
   */
  value?: 'on' | 'off';
}

export interface BrowserCheckParam {
  /**
   * Inspect the visitor's browser for headers commonly associated with spammers and
   * certain bots.
   */
  id?: 'browser_check';

  /**
   * The status of Browser Integrity Check.
   */
  value?: 'on' | 'off';
}

export interface CacheLevel {
  /**
   * Apply custom caching based on the option selected.
   */
  id?: 'cache_level';

  /**
   * - `bypass`: Cloudflare does not cache.
   * - `basic`: Delivers resources from cache when there is no query string.
   * - `simplified`: Delivers the same resource to everyone independent of the query
   *   string.
   * - `aggressive`: Caches all static content that has a query string.
   * - `cache_everything`: Treats all content as static and caches all file types
   *   beyond the
   *   [Cloudflare default cached content](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/#default-cached-file-extensions).
   */
  value?: 'bypass' | 'basic' | 'simplified' | 'aggressive' | 'cache_everything';
}

export interface CacheLevelParam {
  /**
   * Apply custom caching based on the option selected.
   */
  id?: 'cache_level';

  /**
   * - `bypass`: Cloudflare does not cache.
   * - `basic`: Delivers resources from cache when there is no query string.
   * - `simplified`: Delivers the same resource to everyone independent of the query
   *   string.
   * - `aggressive`: Caches all static content that has a query string.
   * - `cache_everything`: Treats all content as static and caches all file types
   *   beyond the
   *   [Cloudflare default cached content](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/#default-cached-file-extensions).
   */
  value?: 'bypass' | 'basic' | 'simplified' | 'aggressive' | 'cache_everything';
}

/**
 * Specify how long a visitor is allowed access to your site after successfully
 * completing a challenge (such as a CAPTCHA). After the TTL has expired the
 * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
 * setting and will attempt to honor any setting above 45 minutes.
 * (https://support.cloudflare.com/hc/en-us/articles/200170136).
 */
export interface ChallengeTTL {
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
 * Specify how long a visitor is allowed access to your site after successfully
 * completing a challenge (such as a CAPTCHA). After the TTL has expired the
 * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
 * setting and will attempt to honor any setting above 45 minutes.
 * (https://support.cloudflare.com/hc/en-us/articles/200170136).
 */
export interface ChallengeTTLParam {
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
export interface Ciphers {
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
 * An allowlist of ciphers for TLS termination. These ciphers must be in the
 * BoringSSL format.
 */
export interface CiphersParam {
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
 * Development Mode temporarily allows you to enter development mode for your
 * websites if you need to make changes to your site. This will bypass Cloudflare's
 * accelerated cache and slow down your site, but is useful if you are making
 * changes to cacheable content (like images, css, or JavaScript) and would like to
 * see those changes right away. Once entered, development mode will last for 3
 * hours and then automatically toggle off.
 */
export interface DevelopmentMode {
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
 * Development Mode temporarily allows you to enter development mode for your
 * websites if you need to make changes to your site. This will bypass Cloudflare's
 * accelerated cache and slow down your site, but is useful if you are making
 * changes to cacheable content (like images, css, or JavaScript) and would like to
 * see those changes right away. Once entered, development mode will last for 3
 * hours and then automatically toggle off.
 */
export interface DevelopmentModeParam {
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
export interface EarlyHints {
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
 * When enabled, Cloudflare will attempt to speed up overall page loads by serving
 * `103` responses with `Link` headers from the final response. Refer to
 * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
 * more information.
 */
export interface EarlyHintsParam {
  /**
   * ID of the zone setting.
   */
  id: 'early_hints';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface EmailObfuscation {
  /**
   * Turn on or off **Email Obfuscation**.
   */
  id?: 'email_obfuscation';

  /**
   * The status of Email Obfuscation.
   */
  value?: 'on' | 'off';
}

export interface EmailObfuscationParam {
  /**
   * Turn on or off **Email Obfuscation**.
   */
  id?: 'email_obfuscation';

  /**
   * The status of Email Obfuscation.
   */
  value?: 'on' | 'off';
}

/**
 * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
 * Hosted fonts from your own domain, boost performance, and enhance user privacy.
 * Refer to the Cloudflare Fonts documentation for more information.
 */
export interface FontSettings {
  /**
   * ID of the zone setting.
   */
  id?: 'fonts';

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
   * Current value of the zone setting.
   */
  value?: 'on' | 'off';
}

/**
 * HTTP/2 Edge Prioritization optimises the delivery of resources served through
 * HTTP/2 to improve page load performance. It also supports fine control of
 * content delivery when used in conjunction with Workers.
 */
export interface H2Prioritization {
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
 * HTTP/2 Edge Prioritization optimises the delivery of resources served through
 * HTTP/2 to improve page load performance. It also supports fine control of
 * content delivery when used in conjunction with Workers.
 */
export interface H2PrioritizationParam {
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
export interface HotlinkProtection {
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
 * When enabled, the Hotlink Protection option ensures that other sites cannot suck
 * up your bandwidth by building pages that use images hosted on your site. Anytime
 * a request for an image on your site hits Cloudflare, we check to ensure that
 * it's not another site requesting them. People will still be able to download and
 * view images from your page, but other sites won't be able to steal them for use
 * on their own pages.
 * (https://support.cloudflare.com/hc/en-us/articles/200170026).
 */
export interface HotlinkProtectionParam {
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
export interface HTTP2 {
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
 * HTTP2 enabled for this zone.
 */
export interface HTTP2Param {
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
export interface HTTP3 {
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
 * HTTP3 enabled for this zone.
 */
export interface HTTP3Param {
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
export interface ImageResizing {
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
 * Image Resizing provides on-demand resizing, conversion and optimisation for
 * images served through Cloudflare's network. Refer to the
 * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
 * more information.
 */
export interface ImageResizingParam {
  /**
   * ID of the zone setting.
   */
  id: 'image_resizing';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off' | 'open';
}

export interface IPGeolocation {
  /**
   * Cloudflare adds a CF-IPCountry HTTP header containing the country code that
   * corresponds to the visitor.
   */
  id?: 'ip_geolocation';

  /**
   * The status of adding the IP Geolocation Header.
   */
  value?: 'on' | 'off';
}

export interface IPGeolocationParam {
  /**
   * Cloudflare adds a CF-IPCountry HTTP header containing the country code that
   * corresponds to the visitor.
   */
  id?: 'ip_geolocation';

  /**
   * The status of adding the IP Geolocation Header.
   */
  value?: 'on' | 'off';
}

/**
 * Enable IPv6 on all subdomains that are Cloudflare enabled.
 * (https://support.cloudflare.com/hc/en-us/articles/200168586).
 */
export interface IPV6 {
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
 * Enable IPv6 on all subdomains that are Cloudflare enabled.
 * (https://support.cloudflare.com/hc/en-us/articles/200168586).
 */
export interface IPV6Param {
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
 * Only accepts HTTPS requests that use at least the TLS protocol version
 * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
 * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
 */
export interface MinTLSVersion {
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
 * Only accepts HTTPS requests that use at least the TLS protocol version
 * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
 * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
 */
export interface MinTLSVersionParam {
  /**
   * ID of the zone setting.
   */
  id: 'min_tls_version';

  /**
   * Current value of the zone setting.
   */
  value: '1.0' | '1.1' | '1.2' | '1.3';
}

export interface Mirage {
  /**
   * Cloudflare Mirage reduces bandwidth used by images in mobile browsers. It can
   * accelerate loading of image-heavy websites on very slow mobile connections and
   * HTTP/1.
   */
  id?: 'mirage';

  /**
   * The status of Mirage.
   */
  value?: 'on' | 'off';
}

export interface MirageParam {
  /**
   * Cloudflare Mirage reduces bandwidth used by images in mobile browsers. It can
   * accelerate loading of image-heavy websites on very slow mobile connections and
   * HTTP/1.
   */
  id?: 'mirage';

  /**
   * The status of Mirage.
   */
  value?: 'on' | 'off';
}

/**
 * Enable Network Error Logging reporting on your zone. (Beta)
 */
export interface NEL {
  /**
   * Zone setting identifier.
   */
  id: 'nel';

  /**
   * Current value of the zone setting.
   */
  value: NEL.Value;

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

export namespace NEL {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    enabled?: boolean;
  }
}

/**
 * Enable Network Error Logging reporting on your zone. (Beta)
 */
export interface NELParam {
  /**
   * Zone setting identifier.
   */
  id: 'nel';

  /**
   * Current value of the zone setting.
   */
  value: NELParam.Value;
}

export namespace NELParam {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    enabled?: boolean;
  }
}

export interface OpportunisticEncryption {
  /**
   * Opportunistic Encryption allows browsers to access HTTP URIs over an encrypted
   * TLS channel. It's not a substitute for HTTPS, but provides additional security
   * for otherwise vulnerable requests.
   */
  id?: 'opportunistic_encryption';

  /**
   * The status of Opportunistic Encryption.
   */
  value?: 'on' | 'off';
}

export interface OpportunisticEncryptionParam {
  /**
   * Opportunistic Encryption allows browsers to access HTTP URIs over an encrypted
   * TLS channel. It's not a substitute for HTTPS, but provides additional security
   * for otherwise vulnerable requests.
   */
  id?: 'opportunistic_encryption';

  /**
   * The status of Opportunistic Encryption.
   */
  value?: 'on' | 'off';
}

/**
 * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
 * connection to use our onion services instead of exit nodes.
 */
export interface OpportunisticOnion {
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
 * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
 * connection to use our onion services instead of exit nodes.
 */
export interface OpportunisticOnionParam {
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
export interface OrangeToOrange {
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
 * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
 * on Cloudflare.
 */
export interface OrangeToOrangeParam {
  /**
   * ID of the zone setting.
   */
  id: 'orange_to_orange';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface OriginErrorPagePassThru {
  /**
   * Turn on or off Cloudflare error pages generated from issues sent from the origin
   * server. If enabled, this setting triggers error pages issued by the origin.
   */
  id?: 'origin_error_page_pass_thru';

  /**
   * The status of Origin Error Page Passthru.
   */
  value?: 'on' | 'off';
}

export interface OriginErrorPagePassThruParam {
  /**
   * Turn on or off Cloudflare error pages generated from issues sent from the origin
   * server. If enabled, this setting triggers error pages issued by the origin.
   */
  id?: 'origin_error_page_pass_thru';

  /**
   * The status of Origin Error Page Passthru.
   */
  value?: 'on' | 'off';
}

export interface OriginMaxHTTPVersion {
  /**
   * Value of the zone setting.
   */
  id: 'origin_max_http_version';

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The value of the feature
   */
  value: '2' | '1';

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface Polish {
  /**
   * Apply options from the Polish feature of the Cloudflare Speed app.
   */
  id?: 'polish';

  /**
   * The level of Polish you want applied to your origin.
   */
  value?: 'off' | 'lossless' | 'lossy';
}

export interface PolishParam {
  /**
   * Apply options from the Polish feature of the Cloudflare Speed app.
   */
  id?: 'polish';

  /**
   * The level of Polish you want applied to your origin.
   */
  value?: 'off' | 'lossless' | 'lossy';
}

/**
 * Cloudflare will prefetch any URLs that are included in the response headers.
 * This is limited to Enterprise Zones.
 */
export interface PrefetchPreload {
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
 * Cloudflare will prefetch any URLs that are included in the response headers.
 * This is limited to Enterprise Zones.
 */
export interface PrefetchPreloadParam {
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
export interface ProxyReadTimeout {
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
 * Maximum time between two read operations from origin.
 */
export interface ProxyReadTimeoutParam {
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
export interface PseudoIPV4 {
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
 * The value set for the Pseudo IPv4 setting.
 */
export interface PseudoIPV4Param {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  id: 'pseudo_ipv4';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'add_header' | 'overwrite_header';
}

export interface ResponseBuffering {
  /**
   * Turn on or off whether Cloudflare should wait for an entire file from the origin
   * server before forwarding it to the site visitor. By default, Cloudflare sends
   * packets to the client as they arrive from the origin server.
   */
  id?: 'response_buffering';

  /**
   * The status of Response Buffering
   */
  value?: 'on' | 'off';
}

export interface ResponseBufferingParam {
  /**
   * Turn on or off whether Cloudflare should wait for an entire file from the origin
   * server before forwarding it to the site visitor. By default, Cloudflare sends
   * packets to the client as they arrive from the origin server.
   */
  id?: 'response_buffering';

  /**
   * The status of Response Buffering
   */
  value?: 'on' | 'off';
}

export interface RocketLoader {
  /**
   * Turn on or off Rocket Loader in the Cloudflare Speed app.
   */
  id?: 'rocket_loader';

  /**
   * The status of Rocket Loader
   */
  value?: 'on' | 'off';
}

export interface RocketLoaderParam {
  /**
   * Turn on or off Rocket Loader in the Cloudflare Speed app.
   */
  id?: 'rocket_loader';

  /**
   * The status of Rocket Loader
   */
  value?: 'on' | 'off';
}

/**
 * Cloudflare security header for a zone.
 */
export interface SecurityHeaders {
  /**
   * ID of the zone's security header.
   */
  id: 'security_header';

  /**
   * Current value of the zone setting.
   */
  value: SecurityHeaders.Value;

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

export namespace SecurityHeaders {
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

      /**
       * Enable automatic preload of the HSTS configuration.
       */
      preload?: boolean;
    }
  }
}

/**
 * Cloudflare security header for a zone.
 */
export interface SecurityHeadersParam {
  /**
   * ID of the zone's security header.
   */
  id: 'security_header';

  /**
   * Current value of the zone setting.
   */
  value: SecurityHeadersParam.Value;
}

export namespace SecurityHeadersParam {
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

      /**
       * Enable automatic preload of the HSTS configuration.
       */
      preload?: boolean;
    }
  }
}

export interface SecurityLevel {
  /**
   * Control options for the **Security Level** feature from the **Security** app.
   */
  id?: 'security_level';

  value?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
}

export interface SecurityLevelParam {
  /**
   * Control options for the **Security Level** feature from the **Security** app.
   */
  id?: 'security_level';

  value?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
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
export interface ServerSideExcludes {
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
export interface ServerSideExcludesParam {
  /**
   * ID of the zone setting.
   */
  id: 'server_side_exclude';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface SortQueryStringForCache {
  /**
   * Turn on or off the reordering of query strings. When query strings have the same
   * structure, caching improves.
   */
  id?: 'sort_query_string_for_cache';

  /**
   * The status of Query String Sort
   */
  value?: 'on' | 'off';
}

export interface SortQueryStringForCacheParam {
  /**
   * Turn on or off the reordering of query strings. When query strings have the same
   * structure, caching improves.
   */
  id?: 'sort_query_string_for_cache';

  /**
   * The status of Query String Sort
   */
  value?: 'on' | 'off';
}

export interface SSL {
  /**
   * Control options for the SSL feature of the Edge Certificates tab in the
   * Cloudflare SSL/TLS app.
   */
  id?: 'ssl';

  /**
   * The encryption mode that Cloudflare uses to connect to your origin server.
   */
  value?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';
}

export interface SSLParam {
  /**
   * Control options for the SSL feature of the Edge Certificates tab in the
   * Cloudflare SSL/TLS app.
   */
  id?: 'ssl';

  /**
   * The encryption mode that Cloudflare uses to connect to your origin server.
   */
  value?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';
}

/**
 * Enrollment in the SSL/TLS Recommender service which tries to detect and
 * recommend (by sending periodic emails) the most secure SSL/TLS setting your
 * origin servers support.
 */
export interface SSLRecommender {
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
 * Enrollment in the SSL/TLS Recommender service which tries to detect and
 * recommend (by sending periodic emails) the most secure SSL/TLS setting your
 * origin servers support.
 */
export interface SSLRecommenderParam {
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
 * Enables Crypto TLS 1.3 feature for a zone.
 */
export interface TLS1_3 {
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
 * Enables Crypto TLS 1.3 feature for a zone.
 */
export interface TLS1_3Param {
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
export interface TLSClientAuth {
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
 * TLS Client Auth requires Cloudflare to connect to your origin server using a
 * client certificate (Enterprise Only).
 */
export interface TLSClientAuthParam {
  /**
   * ID of the zone setting.
   */
  id: 'tls_client_auth';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface TrueClientIPHeader {
  /**
   * Turn on or off the True-Client-IP Header feature of the Cloudflare Network app.
   */
  id?: 'true_client_ip_header';

  /**
   * The status of True Client IP Header.
   */
  value?: 'on' | 'off';
}

export interface TrueClientIPHeaderParam {
  /**
   * Turn on or off the True-Client-IP Header feature of the Cloudflare Network app.
   */
  id?: 'true_client_ip_header';

  /**
   * The status of True Client IP Header.
   */
  value?: 'on' | 'off';
}

export interface WAF {
  /**
   * Turn on or off
   * [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).
   * You cannot enable or disable individual WAF managed rules via Page Rules.
   */
  id?: 'waf';

  /**
   * The status of WAF managed rules (previous version).
   */
  value?: 'on' | 'off';
}

export interface WAFParam {
  /**
   * Turn on or off
   * [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/).
   * You cannot enable or disable individual WAF managed rules via Page Rules.
   */
  id?: 'waf';

  /**
   * The status of WAF managed rules (previous version).
   */
  value?: 'on' | 'off';
}

/**
 * When the client requesting the image supports the WebP image codec, and WebP
 * offers a performance advantage over the original image format, Cloudflare will
 * serve a WebP version of the original image.
 */
export interface WebP {
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
 * When the client requesting the image supports the WebP image codec, and WebP
 * offers a performance advantage over the original image format, Cloudflare will
 * serve a WebP version of the original image.
 */
export interface WebPParam {
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
export interface Websocket {
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

/**
 * WebSockets are open connections sustained between the client and the origin
 * server. Inside a WebSockets connection, the client and the origin can pass data
 * back and forth without having to reestablish sessions. This makes exchanging
 * data within a WebSockets connection fast. WebSockets are often used for
 * real-time applications such as live chat and gaming. For more information refer
 * to
 * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
 */
export interface WebsocketParam {
  /**
   * ID of the zone setting.
   */
  id: 'websockets';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRTT {
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
 * 0-RTT session resumption enabled for this zone.
 */
export interface ZeroRTTParam {
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
 * 0-RTT session resumption enabled for this zone.
 */
export type SettingEditResponse =
  | ZeroRTT
  | AdvancedDDoS
  | AlwaysOnline
  | SettingEditResponse.ZonesSchemasAlwaysUseHTTPS
  | SettingEditResponse.ZonesSchemasAutomaticHTTPSRewrites
  | Brotli
  | SettingEditResponse.ZonesSchemasBrowserCacheTTL
  | SettingEditResponse.ZonesSchemasBrowserCheck
  | SettingEditResponse.ZonesSchemasCacheLevel
  | ChallengeTTL
  | Ciphers
  | SettingEditResponse.ZonesCNAMEFlattening
  | DevelopmentMode
  | EarlyHints
  | SettingEditResponse.ZonesSchemasEdgeCacheTTL
  | SettingEditResponse.ZonesSchemasEmailObfuscation
  | H2Prioritization
  | HotlinkProtection
  | HTTP2
  | HTTP3
  | ImageResizing
  | SettingEditResponse.ZonesSchemasIPGeolocation
  | IPV6
  | SettingEditResponse.ZonesMaxUpload
  | MinTLSVersion
  | SettingEditResponse.ZonesSchemasMirage
  | NEL
  | SettingEditResponse.ZonesSchemasOpportunisticEncryption
  | OpportunisticOnion
  | OrangeToOrange
  | SettingEditResponse.ZonesSchemasOriginErrorPagePassThru
  | SettingEditResponse.ZonesSchemasPolish
  | PrefetchPreload
  | ProxyReadTimeout
  | PseudoIPV4
  | SettingEditResponse.ZonesReplaceInsecureJS
  | SettingEditResponse.ZonesSchemasResponseBuffering
  | SettingEditResponse.ZonesSchemasRocketLoader
  | SettingEditResponse.ZonesSchemasAutomaticPlatformOptimization
  | SecurityHeaders
  | SettingEditResponse.ZonesSchemasSecurityLevel
  | ServerSideExcludes
  | SettingEditResponse.ZonesSha1Support
  | SettingEditResponse.ZonesSchemasSortQueryStringForCache
  | SettingEditResponse.ZonesSchemasSSL
  | SSLRecommender
  | SettingEditResponse.ZonesTLS1_2Only
  | TLS1_3
  | TLSClientAuth
  | SettingEditResponse.ZonesSchemasTrueClientIPHeader
  | SettingEditResponse.ZonesSchemasWAF
  | WebP
  | Websocket;

export namespace SettingEditResponse {
  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesSchemasAlwaysUseHTTPS {
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
  export interface ZonesSchemasAutomaticHTTPSRewrites {
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
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesSchemasBrowserCacheTTL {
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
  export interface ZonesSchemasBrowserCheck {
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
  export interface ZonesSchemasCacheLevel {
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
   * Whether or not cname flattening is on.
   */
  export interface ZonesCNAMEFlattening {
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
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesSchemasEdgeCacheTTL {
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
  export interface ZonesSchemasEmailObfuscation {
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
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesSchemasIPGeolocation {
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
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesSchemasMirage {
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
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesSchemasOpportunisticEncryption {
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
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesSchemasOriginErrorPagePassThru {
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
  export interface ZonesSchemasPolish {
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
   * Automatically replace insecure JavaScript libraries with safer and faster
   * alternatives provided under cdnjs and powered by Cloudflare. Currently supports
   * the following libraries: Polyfill under polyfill.io.
   */
  export interface ZonesReplaceInsecureJS {
    /**
     * ID of the zone setting.
     */
    id: 'replace_insecure_js';

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
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesSchemasResponseBuffering {
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
  export interface ZonesSchemasRocketLoader {
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
    value: SettingsAPI.AutomaticPlatformOptimization;

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
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSchemasSecurityLevel {
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
  export interface ZonesSchemasSortQueryStringForCache {
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
  export interface ZonesSchemasSSL {
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
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesSchemasTrueClientIPHeader {
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
  export interface ZonesSchemasWAF {
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
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export type SettingGetResponse =
  | ZeroRTT
  | AdvancedDDoS
  | AlwaysOnline
  | SettingGetResponse.ZonesSchemasAlwaysUseHTTPS
  | SettingGetResponse.ZonesSchemasAutomaticHTTPSRewrites
  | Brotli
  | SettingGetResponse.ZonesSchemasBrowserCacheTTL
  | SettingGetResponse.ZonesSchemasBrowserCheck
  | SettingGetResponse.ZonesSchemasCacheLevel
  | ChallengeTTL
  | Ciphers
  | SettingGetResponse.ZonesCNAMEFlattening
  | DevelopmentMode
  | EarlyHints
  | SettingGetResponse.ZonesSchemasEdgeCacheTTL
  | SettingGetResponse.ZonesSchemasEmailObfuscation
  | H2Prioritization
  | HotlinkProtection
  | HTTP2
  | HTTP3
  | ImageResizing
  | SettingGetResponse.ZonesSchemasIPGeolocation
  | IPV6
  | SettingGetResponse.ZonesMaxUpload
  | MinTLSVersion
  | SettingGetResponse.ZonesSchemasMirage
  | NEL
  | SettingGetResponse.ZonesSchemasOpportunisticEncryption
  | OpportunisticOnion
  | OrangeToOrange
  | SettingGetResponse.ZonesSchemasOriginErrorPagePassThru
  | SettingGetResponse.ZonesSchemasPolish
  | PrefetchPreload
  | ProxyReadTimeout
  | PseudoIPV4
  | SettingGetResponse.ZonesReplaceInsecureJS
  | SettingGetResponse.ZonesSchemasResponseBuffering
  | SettingGetResponse.ZonesSchemasRocketLoader
  | SettingGetResponse.ZonesSchemasAutomaticPlatformOptimization
  | SecurityHeaders
  | SettingGetResponse.ZonesSchemasSecurityLevel
  | ServerSideExcludes
  | SettingGetResponse.ZonesSha1Support
  | SettingGetResponse.ZonesSchemasSortQueryStringForCache
  | SettingGetResponse.ZonesSchemasSSL
  | SSLRecommender
  | SettingGetResponse.ZonesTLS1_2Only
  | TLS1_3
  | TLSClientAuth
  | SettingGetResponse.ZonesSchemasTrueClientIPHeader
  | SettingGetResponse.ZonesSchemasWAF
  | WebP
  | Websocket;

export namespace SettingGetResponse {
  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesSchemasAlwaysUseHTTPS {
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
  export interface ZonesSchemasAutomaticHTTPSRewrites {
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
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesSchemasBrowserCacheTTL {
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
  export interface ZonesSchemasBrowserCheck {
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
  export interface ZonesSchemasCacheLevel {
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
   * Whether or not cname flattening is on.
   */
  export interface ZonesCNAMEFlattening {
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
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesSchemasEdgeCacheTTL {
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
  export interface ZonesSchemasEmailObfuscation {
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
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesSchemasIPGeolocation {
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
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesSchemasMirage {
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
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesSchemasOpportunisticEncryption {
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
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesSchemasOriginErrorPagePassThru {
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
  export interface ZonesSchemasPolish {
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
   * Automatically replace insecure JavaScript libraries with safer and faster
   * alternatives provided under cdnjs and powered by Cloudflare. Currently supports
   * the following libraries: Polyfill under polyfill.io.
   */
  export interface ZonesReplaceInsecureJS {
    /**
     * ID of the zone setting.
     */
    id: 'replace_insecure_js';

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
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesSchemasResponseBuffering {
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
  export interface ZonesSchemasRocketLoader {
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
    value: SettingsAPI.AutomaticPlatformOptimization;

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
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSchemasSecurityLevel {
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
  export interface ZonesSchemasSortQueryStringForCache {
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
  export interface ZonesSchemasSSL {
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
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesSchemasTrueClientIPHeader {
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
  export interface ZonesSchemasWAF {
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
}

export type SettingEditParams =
  | SettingEditParams.ZeroRTT
  | SettingEditParams.AdvancedDDoS
  | SettingEditParams.AlwaysOnline
  | SettingEditParams.ZonesSchemasAlwaysUseHTTPS
  | SettingEditParams.ZonesSchemasAutomaticHTTPSRewrites
  | SettingEditParams.Brotli
  | SettingEditParams.ZonesSchemasBrowserCacheTTL
  | SettingEditParams.ZonesSchemasBrowserCheck
  | SettingEditParams.ZonesSchemasCacheLevel
  | SettingEditParams.ChallengeTTL
  | SettingEditParams.Ciphers
  | SettingEditParams.ZonesCNAMEFlattening
  | SettingEditParams.DevelopmentMode
  | SettingEditParams.EarlyHints
  | SettingEditParams.ZonesSchemasEdgeCacheTTL
  | SettingEditParams.ZonesSchemasEmailObfuscation
  | SettingEditParams.H2Prioritization
  | SettingEditParams.HotlinkProtection
  | SettingEditParams.HTTP2
  | SettingEditParams.HTTP3
  | SettingEditParams.ImageResizing
  | SettingEditParams.ZonesSchemasIPGeolocation
  | SettingEditParams.IPV6
  | SettingEditParams.ZonesMaxUpload
  | SettingEditParams.MinTLSVersion
  | SettingEditParams.ZonesSchemasMirage
  | SettingEditParams.NEL
  | SettingEditParams.ZonesSchemasOpportunisticEncryption
  | SettingEditParams.OpportunisticOnion
  | SettingEditParams.OrangeToOrange
  | SettingEditParams.ZonesSchemasOriginErrorPagePassThru
  | SettingEditParams.ZonesSchemasPolish
  | SettingEditParams.PrefetchPreload
  | SettingEditParams.ProxyReadTimeout
  | SettingEditParams.PseudoIPV4
  | SettingEditParams.ZonesReplaceInsecureJS
  | SettingEditParams.ZonesSchemasResponseBuffering
  | SettingEditParams.ZonesSchemasRocketLoader
  | SettingEditParams.ZonesSchemasAutomaticPlatformOptimization
  | SettingEditParams.SecurityHeaders
  | SettingEditParams.ZonesSchemasSecurityLevel
  | SettingEditParams.ServerSideExcludes
  | SettingEditParams.ZonesSha1Support
  | SettingEditParams.ZonesSchemasSortQueryStringForCache
  | SettingEditParams.ZonesSchemasSSL
  | SettingEditParams.SSLRecommender
  | SettingEditParams.ZonesTLS1_2Only
  | SettingEditParams.TLS1_3
  | SettingEditParams.TLSClientAuth
  | SettingEditParams.ZonesSchemasTrueClientIPHeader
  | SettingEditParams.ZonesSchemasWAF
  | SettingEditParams.WebP
  | SettingEditParams.Websocket;

export declare namespace SettingEditParams {
  export interface ZeroRTT {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: '0rtt';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface AdvancedDDoS {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'advanced_ddos';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface AlwaysOnline {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'always_online';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasAlwaysUseHTTPS {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'always_use_https';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasAutomaticHTTPSRewrites {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'automatic_https_rewrites';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface Brotli {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'brotli';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  export interface ZonesSchemasBrowserCacheTTL {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'browser_cache_ttl';

    /**
     * Body param: Current value of the zone setting.
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

  export interface ZonesSchemasBrowserCheck {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'browser_check';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasCacheLevel {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'cache_level';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'aggressive' | 'basic' | 'simplified';
  }

  export interface ChallengeTTL {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'challenge_ttl';

    /**
     * Body param: Current value of the zone setting.
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

  export interface Ciphers {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'ciphers';

    /**
     * Body param: Current value of the zone setting.
     */
    value: Array<string>;
  }

  export interface ZonesCNAMEFlattening {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: How to flatten the cname destination.
     */
    id: 'cname_flattening';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'flatten_at_root' | 'flatten_all';
  }

  export interface DevelopmentMode {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'development_mode';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface EarlyHints {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'early_hints';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasEdgeCacheTTL {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'edge_cache_ttl';

    /**
     * Body param: Current value of the zone setting.
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

  export interface ZonesSchemasEmailObfuscation {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'email_obfuscation';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface H2Prioritization {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'h2_prioritization';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off' | 'custom';
  }

  export interface HotlinkProtection {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'hotlink_protection';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface HTTP2 {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'http2';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface HTTP3 {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'http3';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ImageResizing {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'image_resizing';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off' | 'open';
  }

  export interface ZonesSchemasIPGeolocation {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'ip_geolocation';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface IPV6 {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'ipv6';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  export interface ZonesMaxUpload {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: identifier of the zone setting.
     */
    id: 'max_upload';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 100 | 200 | 500;
  }

  export interface MinTLSVersion {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'min_tls_version';

    /**
     * Body param: Current value of the zone setting.
     */
    value: '1.0' | '1.1' | '1.2' | '1.3';
  }

  export interface ZonesSchemasMirage {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'mirage';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface NEL {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Zone setting identifier.
     */
    id: 'nel';

    /**
     * Body param: Current value of the zone setting.
     */
    value: SettingEditParams.NEL.Value;
  }

  export namespace NEL {
    /**
     * Current value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }

  export interface ZonesSchemasOpportunisticEncryption {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'opportunistic_encryption';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface OpportunisticOnion {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'opportunistic_onion';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface OrangeToOrange {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'orange_to_orange';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasOriginErrorPagePassThru {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'origin_error_page_pass_thru';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasPolish {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'polish';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'lossless' | 'lossy';
  }

  export interface PrefetchPreload {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'prefetch_preload';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ProxyReadTimeout {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'proxy_read_timeout';

    /**
     * Body param: Current value of the zone setting.
     */
    value: number;
  }

  export interface PseudoIPV4 {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Value of the Pseudo IPv4 setting.
     */
    id: 'pseudo_ipv4';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'add_header' | 'overwrite_header';
  }

  export interface ZonesReplaceInsecureJS {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'replace_insecure_js';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasResponseBuffering {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'response_buffering';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasRocketLoader {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'rocket_loader';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'automatic_platform_optimization';

    /**
     * Body param: Current value of the zone setting.
     */
    value: AutomaticPlatformOptimizationParam;
  }

  export interface SecurityHeaders {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone's security header.
     */
    id: 'security_header';

    /**
     * Body param: Current value of the zone setting.
     */
    value: SettingEditParams.SecurityHeaders.Value;
  }

  export namespace SecurityHeaders {
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

        /**
         * Enable automatic preload of the HSTS configuration.
         */
        preload?: boolean;
      }
    }
  }

  export interface ZonesSchemasSecurityLevel {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'security_level';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  }

  export interface ServerSideExcludes {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'server_side_exclude';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSha1Support {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Zone setting identifier.
     */
    id: 'sha1_support';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  export interface ZonesSchemasSortQueryStringForCache {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'sort_query_string_for_cache';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasSSL {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'ssl';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'flexible' | 'full' | 'strict';
  }

  export interface SSLRecommender {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * Body param: ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }

  export interface ZonesTLS1_2Only {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Zone setting identifier.
     */
    id: 'tls_1_2_only';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  export interface TLS1_3 {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'tls_1_3';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off' | 'zrt';
  }

  export interface TLSClientAuth {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'tls_client_auth';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasTrueClientIPHeader {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'true_client_ip_header';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface ZonesSchemasWAF {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'waf';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'on' | 'off';
  }

  export interface WebP {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'webp';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'on';
  }

  export interface Websocket {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: ID of the zone setting.
     */
    id: 'websockets';

    /**
     * Body param: Current value of the zone setting.
     */
    value: 'off' | 'on';
  }
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Settings {
  export {
    type AdvancedDDoS as AdvancedDDoS,
    type Aegis as Aegis,
    type AlwaysOnline as AlwaysOnline,
    type AlwaysUseHTTPS as AlwaysUseHTTPS,
    type AutomaticHTTPSRewrites as AutomaticHTTPSRewrites,
    type AutomaticPlatformOptimization as AutomaticPlatformOptimization,
    type Brotli as Brotli,
    type BrowserCacheTTL as BrowserCacheTTL,
    type BrowserCheck as BrowserCheck,
    type CacheLevel as CacheLevel,
    type ChallengeTTL as ChallengeTTL,
    type Ciphers as Ciphers,
    type DevelopmentMode as DevelopmentMode,
    type EarlyHints as EarlyHints,
    type EmailObfuscation as EmailObfuscation,
    type FontSettings as FontSettings,
    type H2Prioritization as H2Prioritization,
    type HotlinkProtection as HotlinkProtection,
    type HTTP2 as HTTP2,
    type HTTP3 as HTTP3,
    type ImageResizing as ImageResizing,
    type IPGeolocation as IPGeolocation,
    type IPV6 as IPV6,
    type MinTLSVersion as MinTLSVersion,
    type Mirage as Mirage,
    type NEL as NEL,
    type OpportunisticEncryption as OpportunisticEncryption,
    type OpportunisticOnion as OpportunisticOnion,
    type OrangeToOrange as OrangeToOrange,
    type OriginErrorPagePassThru as OriginErrorPagePassThru,
    type OriginMaxHTTPVersion as OriginMaxHTTPVersion,
    type Polish as Polish,
    type PrefetchPreload as PrefetchPreload,
    type ProxyReadTimeout as ProxyReadTimeout,
    type PseudoIPV4 as PseudoIPV4,
    type ResponseBuffering as ResponseBuffering,
    type RocketLoader as RocketLoader,
    type SecurityHeaders as SecurityHeaders,
    type SecurityLevel as SecurityLevel,
    type ServerSideExcludes as ServerSideExcludes,
    type SortQueryStringForCache as SortQueryStringForCache,
    type SSL as SSL,
    type SSLRecommender as SSLRecommender,
    type TLS1_3 as TLS1_3,
    type TLSClientAuth as TLSClientAuth,
    type TrueClientIPHeader as TrueClientIPHeader,
    type WAF as WAF,
    type WebP as WebP,
    type Websocket as Websocket,
    type ZeroRTT as ZeroRTT,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };
}
