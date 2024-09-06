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
 * Reply to all requests for URLs that use "http" with a 301 redirect to the
 * equivalent "https" URL. If you only want to redirect for a subset of requests,
 * consider creating an "Always use HTTPS" page rule.
 */
export interface AlwaysUseHTTPS {
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
export interface AutomaticHTTPSRewrites {
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
 * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
 * will remain on your visitors' computers. Cloudflare will honor any larger times
 * specified by your server.
 * (https://support.cloudflare.com/hc/en-us/articles/200168276).
 */
export interface BrowserCacheTTL {
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
export interface BrowserCheck {
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
export interface CacheLevel {
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
 * Encrypt email adresses on your web page from bots, while keeping them visible to
 * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
 */
export interface EmailObfuscation {
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
 * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
 * pass the country code to you.
 * (https://support.cloudflare.com/hc/en-us/articles/200168236).
 */
export interface IPGeolocation {
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
 * Automatically optimize image loading for website visitors on mobile devices.
 * Refer to
 * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
 * more information.
 */
export interface Mirage {
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
 * Enables the Opportunistic Encryption feature for a zone.
 */
export interface OpportunisticEncryption {
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
 * Cloudflare will proxy customer error pages on any 502,504 errors on origin
 * server instead of showing a default Cloudflare error page. This does not apply
 * to 522 errors and is limited to Enterprise Zones.
 */
export interface OriginErrorPagePassThru {
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
 * Value of the zone setting.
 */
export type OriginMaxHTTPVersion = 'origin_max_http_version';

/**
 * Removes metadata and compresses your images for faster page load times. Basic
 * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
 * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
 * image loading. Larger JPEGs are converted to progressive images, loading a
 * lower-resolution image first and ending in a higher-resolution version. Not
 * recommended for hi-res photography sites.
 */
export interface Polish {
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
 * Enables or disables buffering of responses from the proxied server. Cloudflare
 * may buffer the whole payload to deliver it at once to the client versus allowing
 * it to be delivered in chunks. By default, the proxied server streams directly
 * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
 */
export interface ResponseBuffering {
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
export interface RocketLoader {
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
 * Choose the appropriate security profile for your website, which will
 * automatically adjust each of the security settings. If you choose to customize
 * an individual security setting, the profile will become Custom.
 * (https://support.cloudflare.com/hc/en-us/articles/200170056).
 */
export interface SecurityLevel {
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
 * Cloudflare will treat files with the same query strings as the same file in
 * cache, regardless of the order of the query strings. This is limited to
 * Enterprise Zones.
 */
export interface SortQueryStringForCache {
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
export interface SSL {
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
 * Allows customer to continue to use True Client IP (Akamai feature) in the
 * headers we send to the origin. This is limited to Enterprise Zones.
 */
export interface TrueClientIPHeader {
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
export interface WAF {
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
export type SettingEditResponse =
  | ZeroRTT
  | AdvancedDDoS
  | AlwaysOnline
  | AlwaysUseHTTPS
  | AutomaticHTTPSRewrites
  | Brotli
  | BrowserCacheTTL
  | BrowserCheck
  | CacheLevel
  | ChallengeTTL
  | Ciphers
  | SettingEditResponse.ZonesCNAMEFlattening
  | DevelopmentMode
  | EarlyHints
  | SettingEditResponse.ZonesEdgeCacheTTL
  | EmailObfuscation
  | H2Prioritization
  | HotlinkProtection
  | HTTP2
  | HTTP3
  | ImageResizing
  | IPGeolocation
  | IPV6
  | SettingEditResponse.ZonesMaxUpload
  | MinTLSVersion
  | Mirage
  | NEL
  | OpportunisticEncryption
  | OpportunisticOnion
  | OrangeToOrange
  | OriginErrorPagePassThru
  | Polish
  | PrefetchPreload
  | ProxyReadTimeout
  | PseudoIPV4
  | SettingEditResponse.ZonesReplaceInsecureJS
  | ResponseBuffering
  | RocketLoader
  | SettingEditResponse.ZonesSchemasAutomaticPlatformOptimization
  | SecurityHeaders
  | SecurityLevel
  | ServerSideExcludes
  | SettingEditResponse.ZonesSha1Support
  | SortQueryStringForCache
  | SSL
  | SSLRecommender
  | SettingEditResponse.ZonesTLS1_2Only
  | TLS1_3
  | TLSClientAuth
  | TrueClientIPHeader
  | WAF
  | WebP
  | Websocket;

export namespace SettingEditResponse {
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
}

/**
 * 0-RTT session resumption enabled for this zone.
 */
export type SettingGetResponse =
  | ZeroRTT
  | AdvancedDDoS
  | AlwaysOnline
  | AlwaysUseHTTPS
  | AutomaticHTTPSRewrites
  | Brotli
  | BrowserCacheTTL
  | BrowserCheck
  | CacheLevel
  | ChallengeTTL
  | Ciphers
  | SettingGetResponse.ZonesCNAMEFlattening
  | DevelopmentMode
  | EarlyHints
  | SettingGetResponse.ZonesEdgeCacheTTL
  | EmailObfuscation
  | H2Prioritization
  | HotlinkProtection
  | HTTP2
  | HTTP3
  | ImageResizing
  | IPGeolocation
  | IPV6
  | SettingGetResponse.ZonesMaxUpload
  | MinTLSVersion
  | Mirage
  | NEL
  | OpportunisticEncryption
  | OpportunisticOnion
  | OrangeToOrange
  | OriginErrorPagePassThru
  | Polish
  | PrefetchPreload
  | ProxyReadTimeout
  | PseudoIPV4
  | SettingGetResponse.ZonesReplaceInsecureJS
  | ResponseBuffering
  | RocketLoader
  | SettingGetResponse.ZonesSchemasAutomaticPlatformOptimization
  | SecurityHeaders
  | SecurityLevel
  | ServerSideExcludes
  | SettingGetResponse.ZonesSha1Support
  | SortQueryStringForCache
  | SSL
  | SSLRecommender
  | SettingGetResponse.ZonesTLS1_2Only
  | TLS1_3
  | TLSClientAuth
  | TrueClientIPHeader
  | WAF
  | WebP
  | Websocket;

export namespace SettingGetResponse {
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
}

export type SettingEditParams =
  | SettingEditParams.ZeroRTT
  | SettingEditParams.AdvancedDDoS
  | SettingEditParams.AlwaysOnline
  | SettingEditParams.AlwaysUseHTTPS
  | SettingEditParams.AutomaticHTTPSRewrites
  | SettingEditParams.Brotli
  | SettingEditParams.BrowserCacheTTL
  | SettingEditParams.BrowserCheck
  | SettingEditParams.CacheLevel
  | SettingEditParams.ChallengeTTL
  | SettingEditParams.Ciphers
  | SettingEditParams.ZonesCNAMEFlattening
  | SettingEditParams.DevelopmentMode
  | SettingEditParams.EarlyHints
  | SettingEditParams.ZonesEdgeCacheTTL
  | SettingEditParams.EmailObfuscation
  | SettingEditParams.H2Prioritization
  | SettingEditParams.HotlinkProtection
  | SettingEditParams.HTTP2
  | SettingEditParams.HTTP3
  | SettingEditParams.ImageResizing
  | SettingEditParams.IPGeolocation
  | SettingEditParams.IPV6
  | SettingEditParams.ZonesMaxUpload
  | SettingEditParams.MinTLSVersion
  | SettingEditParams.Mirage
  | SettingEditParams.NEL
  | SettingEditParams.OpportunisticEncryption
  | SettingEditParams.OpportunisticOnion
  | SettingEditParams.OrangeToOrange
  | SettingEditParams.OriginErrorPagePassThru
  | SettingEditParams.Polish
  | SettingEditParams.PrefetchPreload
  | SettingEditParams.ProxyReadTimeout
  | SettingEditParams.PseudoIPV4
  | SettingEditParams.ZonesReplaceInsecureJS
  | SettingEditParams.ResponseBuffering
  | SettingEditParams.RocketLoader
  | SettingEditParams.ZonesSchemasAutomaticPlatformOptimization
  | SettingEditParams.SecurityHeaders
  | SettingEditParams.SecurityLevel
  | SettingEditParams.ServerSideExcludes
  | SettingEditParams.ZonesSha1Support
  | SettingEditParams.SortQueryStringForCache
  | SettingEditParams.SSL
  | SettingEditParams.SSLRecommender
  | SettingEditParams.ZonesTLS1_2Only
  | SettingEditParams.TLS1_3
  | SettingEditParams.TLSClientAuth
  | SettingEditParams.TrueClientIPHeader
  | SettingEditParams.WAF
  | SettingEditParams.WebP
  | SettingEditParams.Websocket;

export namespace SettingEditParams {
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

  export interface AlwaysUseHTTPS {
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

  export interface AutomaticHTTPSRewrites {
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

  export interface BrowserCacheTTL {
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

  export interface BrowserCheck {
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

  export interface CacheLevel {
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

  export interface ZonesEdgeCacheTTL {
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

  export interface EmailObfuscation {
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

  export interface IPGeolocation {
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

  export interface Mirage {
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

  export interface OpportunisticEncryption {
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

  export interface OriginErrorPagePassThru {
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

  export interface Polish {
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

  export interface ResponseBuffering {
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

  export interface RocketLoader {
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

  export interface SecurityLevel {
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

  export interface SortQueryStringForCache {
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

  export interface SSL {
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

  export interface TrueClientIPHeader {
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

  export interface WAF {
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

export namespace Settings {
  export import AdvancedDDoS = SettingsAPI.AdvancedDDoS;
  export import AlwaysOnline = SettingsAPI.AlwaysOnline;
  export import AlwaysUseHTTPS = SettingsAPI.AlwaysUseHTTPS;
  export import AutomaticHTTPSRewrites = SettingsAPI.AutomaticHTTPSRewrites;
  export import AutomaticPlatformOptimization = SettingsAPI.AutomaticPlatformOptimization;
  export import Brotli = SettingsAPI.Brotli;
  export import BrowserCacheTTL = SettingsAPI.BrowserCacheTTL;
  export import BrowserCheck = SettingsAPI.BrowserCheck;
  export import CacheLevel = SettingsAPI.CacheLevel;
  export import ChallengeTTL = SettingsAPI.ChallengeTTL;
  export import Ciphers = SettingsAPI.Ciphers;
  export import DevelopmentMode = SettingsAPI.DevelopmentMode;
  export import EarlyHints = SettingsAPI.EarlyHints;
  export import EmailObfuscation = SettingsAPI.EmailObfuscation;
  export import FontSettings = SettingsAPI.FontSettings;
  export import H2Prioritization = SettingsAPI.H2Prioritization;
  export import HotlinkProtection = SettingsAPI.HotlinkProtection;
  export import HTTP2 = SettingsAPI.HTTP2;
  export import HTTP3 = SettingsAPI.HTTP3;
  export import ImageResizing = SettingsAPI.ImageResizing;
  export import IPGeolocation = SettingsAPI.IPGeolocation;
  export import IPV6 = SettingsAPI.IPV6;
  export import MinTLSVersion = SettingsAPI.MinTLSVersion;
  export import Mirage = SettingsAPI.Mirage;
  export import NEL = SettingsAPI.NEL;
  export import OpportunisticEncryption = SettingsAPI.OpportunisticEncryption;
  export import OpportunisticOnion = SettingsAPI.OpportunisticOnion;
  export import OrangeToOrange = SettingsAPI.OrangeToOrange;
  export import OriginErrorPagePassThru = SettingsAPI.OriginErrorPagePassThru;
  export import OriginMaxHTTPVersion = SettingsAPI.OriginMaxHTTPVersion;
  export import Polish = SettingsAPI.Polish;
  export import PrefetchPreload = SettingsAPI.PrefetchPreload;
  export import ProxyReadTimeout = SettingsAPI.ProxyReadTimeout;
  export import PseudoIPV4 = SettingsAPI.PseudoIPV4;
  export import ResponseBuffering = SettingsAPI.ResponseBuffering;
  export import RocketLoader = SettingsAPI.RocketLoader;
  export import SecurityHeaders = SettingsAPI.SecurityHeaders;
  export import SecurityLevel = SettingsAPI.SecurityLevel;
  export import ServerSideExcludes = SettingsAPI.ServerSideExcludes;
  export import SortQueryStringForCache = SettingsAPI.SortQueryStringForCache;
  export import SSL = SettingsAPI.SSL;
  export import SSLRecommender = SettingsAPI.SSLRecommender;
  export import TLS1_3 = SettingsAPI.TLS1_3;
  export import TLSClientAuth = SettingsAPI.TLSClientAuth;
  export import TrueClientIPHeader = SettingsAPI.TrueClientIPHeader;
  export import WAF = SettingsAPI.WAF;
  export import WebP = SettingsAPI.WebP;
  export import Websocket = SettingsAPI.Websocket;
  export import ZeroRTT = SettingsAPI.ZeroRTT;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
