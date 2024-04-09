// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AdvancedDDoSAPI from 'cloudflare/resources/zones/settings/advanced-ddos';
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
import * as WebPAPI from 'cloudflare/resources/zones/settings/webp';
import * as WebsocketAPI from 'cloudflare/resources/zones/settings/websocket';
import * as ZeroRTTAPI from 'cloudflare/resources/zones/settings/zero-rtt';

export class Settings extends APIResource {
  zeroRTT: ZeroRTTAPI.ZeroRTTResource = new ZeroRTTAPI.ZeroRTTResource(this._client);
  advancedDDoS: AdvancedDDoSAPI.AdvancedDDoS = new AdvancedDDoSAPI.AdvancedDDoS(this._client);
  alwaysOnline: AlwaysOnlineAPI.AlwaysOnlineResource = new AlwaysOnlineAPI.AlwaysOnlineResource(this._client);
  alwaysUseHTTPS: AlwaysUseHTTPSAPI.AlwaysUseHTTPS = new AlwaysUseHTTPSAPI.AlwaysUseHTTPS(this._client);
  automaticHTTPSRewrites: AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites =
    new AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites(this._client);
  automaticPlatformOptimization: AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationResource =
    new AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationResource(this._client);
  brotli: BrotliAPI.BrotliResource = new BrotliAPI.BrotliResource(this._client);
  browserCacheTTL: BrowserCacheTTLAPI.BrowserCacheTTLResource =
    new BrowserCacheTTLAPI.BrowserCacheTTLResource(this._client);
  browserCheck: BrowserCheckAPI.BrowserCheckResource = new BrowserCheckAPI.BrowserCheckResource(this._client);
  cacheLevel: CacheLevelAPI.CacheLevelResource = new CacheLevelAPI.CacheLevelResource(this._client);
  challengeTTL: ChallengeTTLAPI.ChallengeTTLResource = new ChallengeTTLAPI.ChallengeTTLResource(this._client);
  ciphers: CiphersAPI.Ciphers = new CiphersAPI.Ciphers(this._client);
  developmentMode: DevelopmentModeAPI.DevelopmentModeResource =
    new DevelopmentModeAPI.DevelopmentModeResource(this._client);
  earlyHints: EarlyHintsAPI.EarlyHints = new EarlyHintsAPI.EarlyHints(this._client);
  emailObfuscation: EmailObfuscationAPI.EmailObfuscationResource =
    new EmailObfuscationAPI.EmailObfuscationResource(this._client);
  h2Prioritization: H2PrioritizationAPI.H2PrioritizationResource =
    new H2PrioritizationAPI.H2PrioritizationResource(this._client);
  hotlinkProtection: HotlinkProtectionAPI.HotlinkProtectionResource =
    new HotlinkProtectionAPI.HotlinkProtectionResource(this._client);
  http2: HTTP2API.HTTP2Resource = new HTTP2API.HTTP2Resource(this._client);
  http3: HTTP3API.HTTP3Resource = new HTTP3API.HTTP3Resource(this._client);
  imageResizing: ImageResizingAPI.ImageResizingResource = new ImageResizingAPI.ImageResizingResource(
    this._client,
  );
  ipGeolocation: IPGeolocationAPI.IPGeolocationResource = new IPGeolocationAPI.IPGeolocationResource(
    this._client,
  );
  ipv6: IPV6API.IPV6Resource = new IPV6API.IPV6Resource(this._client);
  minTLSVersion: MinTLSVersionAPI.MinTLSVersionResource = new MinTLSVersionAPI.MinTLSVersionResource(
    this._client,
  );
  minify: MinifyAPI.MinifyResource = new MinifyAPI.MinifyResource(this._client);
  mirage: MirageAPI.MirageResource = new MirageAPI.MirageResource(this._client);
  mobileRedirect: MobileRedirectAPI.MobileRedirectResource = new MobileRedirectAPI.MobileRedirectResource(
    this._client,
  );
  nel: NELAPI.NELResource = new NELAPI.NELResource(this._client);
  opportunisticEncryption: OpportunisticEncryptionAPI.OpportunisticEncryptionResource =
    new OpportunisticEncryptionAPI.OpportunisticEncryptionResource(this._client);
  opportunisticOnion: OpportunisticOnionAPI.OpportunisticOnionResource =
    new OpportunisticOnionAPI.OpportunisticOnionResource(this._client);
  orangeToOrange: OrangeToOrangeAPI.OrangeToOrangeResource = new OrangeToOrangeAPI.OrangeToOrangeResource(
    this._client,
  );
  originErrorPagePassThru: OriginErrorPagePassThruAPI.OriginErrorPagePassThruResource =
    new OriginErrorPagePassThruAPI.OriginErrorPagePassThruResource(this._client);
  originMaxHTTPVersion: OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionResource =
    new OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionResource(this._client);
  polish: PolishAPI.PolishResource = new PolishAPI.PolishResource(this._client);
  prefetchPreload: PrefetchPreloadAPI.PrefetchPreloadResource =
    new PrefetchPreloadAPI.PrefetchPreloadResource(this._client);
  proxyReadTimeout: ProxyReadTimeoutAPI.ProxyReadTimeoutResource =
    new ProxyReadTimeoutAPI.ProxyReadTimeoutResource(this._client);
  pseudoIPV4: PseudoIPV4API.PseudoIPV4Resource = new PseudoIPV4API.PseudoIPV4Resource(this._client);
  responseBuffering: ResponseBufferingAPI.ResponseBufferingResource =
    new ResponseBufferingAPI.ResponseBufferingResource(this._client);
  rocketLoader: RocketLoaderAPI.RocketLoaderResource = new RocketLoaderAPI.RocketLoaderResource(this._client);
  securityHeaders: SecurityHeadersAPI.SecurityHeaders = new SecurityHeadersAPI.SecurityHeaders(this._client);
  securityLevel: SecurityLevelAPI.SecurityLevelResource = new SecurityLevelAPI.SecurityLevelResource(
    this._client,
  );
  serverSideExcludes: ServerSideExcludesAPI.ServerSideExcludes = new ServerSideExcludesAPI.ServerSideExcludes(
    this._client,
  );
  sortQueryStringForCache: SortQueryStringForCacheAPI.SortQueryStringForCacheResource =
    new SortQueryStringForCacheAPI.SortQueryStringForCacheResource(this._client);
  ssl: SSLAPI.SSLResource = new SSLAPI.SSLResource(this._client);
  sslRecommender: SSLRecommenderAPI.SSLRecommenderResource = new SSLRecommenderAPI.SSLRecommenderResource(
    this._client,
  );
  tls1_3: TLS1_3API.TLS1_3Resource = new TLS1_3API.TLS1_3Resource(this._client);
  tlsClientAuth: TLSClientAuthAPI.TLSClientAuthResource = new TLSClientAuthAPI.TLSClientAuthResource(
    this._client,
  );
  trueClientIPHeader: TrueClientIPHeaderAPI.TrueClientIPHeaderResource =
    new TrueClientIPHeaderAPI.TrueClientIPHeaderResource(this._client);
  waf: WAFAPI.WAFResource = new WAFAPI.WAFResource(this._client);
  WebP: WebPAPI.WebPResource = new WebPAPI.WebPResource(this._client);
  websocket: WebsocketAPI.WebsocketResource = new WebsocketAPI.WebsocketResource(this._client);
  fontSettings: FontSettingsAPI.FontSettings = new FontSettingsAPI.FontSettings(this._client);
}

export namespace Settings {
  export import ZeroRTTResource = ZeroRTTAPI.ZeroRTTResource;
  export import ZeroRTT = ZeroRTTAPI.ZeroRTT;
  export import ZeroRTTEditParams = ZeroRTTAPI.ZeroRTTEditParams;
  export import ZeroRTTGetParams = ZeroRTTAPI.ZeroRTTGetParams;
  export import AdvancedDDoS = AdvancedDDoSAPI.AdvancedDDoS;
  export import AdvancedDDoSGetParams = AdvancedDDoSAPI.AdvancedDDoSGetParams;
  export import AlwaysOnlineResource = AlwaysOnlineAPI.AlwaysOnlineResource;
  export import AlwaysOnline = AlwaysOnlineAPI.AlwaysOnline;
  export import AlwaysOnlineEditParams = AlwaysOnlineAPI.AlwaysOnlineEditParams;
  export import AlwaysOnlineGetParams = AlwaysOnlineAPI.AlwaysOnlineGetParams;
  export import AlwaysUseHTTPS = AlwaysUseHTTPSAPI.AlwaysUseHTTPS;
  export import AlwaysUseHTTPSEditParams = AlwaysUseHTTPSAPI.AlwaysUseHTTPSEditParams;
  export import AlwaysUseHTTPSGetParams = AlwaysUseHTTPSAPI.AlwaysUseHTTPSGetParams;
  export import AutomaticHTTPSRewrites = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites;
  export import AutomaticHTTPSRewriteEditParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteEditParams;
  export import AutomaticHTTPSRewriteGetParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteGetParams;
  export import AutomaticPlatformOptimizationResource = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationResource;
  export import AutomaticPlatformOptimization = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization;
  export import AutomaticPlatformOptimizationEditParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationEditParams;
  export import AutomaticPlatformOptimizationGetParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationGetParams;
  export import BrotliResource = BrotliAPI.BrotliResource;
  export import Brotli = BrotliAPI.Brotli;
  export import BrotliEditParams = BrotliAPI.BrotliEditParams;
  export import BrotliGetParams = BrotliAPI.BrotliGetParams;
  export import BrowserCacheTTLResource = BrowserCacheTTLAPI.BrowserCacheTTLResource;
  export import BrowserCacheTTL = BrowserCacheTTLAPI.BrowserCacheTTL;
  export import BrowserCacheTTLEditParams = BrowserCacheTTLAPI.BrowserCacheTTLEditParams;
  export import BrowserCacheTTLGetParams = BrowserCacheTTLAPI.BrowserCacheTTLGetParams;
  export import BrowserCheckResource = BrowserCheckAPI.BrowserCheckResource;
  export import BrowserCheck = BrowserCheckAPI.BrowserCheck;
  export import BrowserCheckEditParams = BrowserCheckAPI.BrowserCheckEditParams;
  export import BrowserCheckGetParams = BrowserCheckAPI.BrowserCheckGetParams;
  export import CacheLevelResource = CacheLevelAPI.CacheLevelResource;
  export import CacheLevel = CacheLevelAPI.CacheLevel;
  export import CacheLevelEditParams = CacheLevelAPI.CacheLevelEditParams;
  export import CacheLevelGetParams = CacheLevelAPI.CacheLevelGetParams;
  export import ChallengeTTLResource = ChallengeTTLAPI.ChallengeTTLResource;
  export import ChallengeTTL = ChallengeTTLAPI.ChallengeTTL;
  export import ChallengeTTLEditParams = ChallengeTTLAPI.ChallengeTTLEditParams;
  export import ChallengeTTLGetParams = ChallengeTTLAPI.ChallengeTTLGetParams;
  export import Ciphers = CiphersAPI.Ciphers;
  export import CipherEditParams = CiphersAPI.CipherEditParams;
  export import CipherGetParams = CiphersAPI.CipherGetParams;
  export import DevelopmentModeResource = DevelopmentModeAPI.DevelopmentModeResource;
  export import DevelopmentMode = DevelopmentModeAPI.DevelopmentMode;
  export import DevelopmentModeEditParams = DevelopmentModeAPI.DevelopmentModeEditParams;
  export import DevelopmentModeGetParams = DevelopmentModeAPI.DevelopmentModeGetParams;
  export import EarlyHints = EarlyHintsAPI.EarlyHints;
  export import EarlyHintEditParams = EarlyHintsAPI.EarlyHintEditParams;
  export import EarlyHintGetParams = EarlyHintsAPI.EarlyHintGetParams;
  export import EmailObfuscationResource = EmailObfuscationAPI.EmailObfuscationResource;
  export import EmailObfuscation = EmailObfuscationAPI.EmailObfuscation;
  export import EmailObfuscationEditParams = EmailObfuscationAPI.EmailObfuscationEditParams;
  export import EmailObfuscationGetParams = EmailObfuscationAPI.EmailObfuscationGetParams;
  export import H2PrioritizationResource = H2PrioritizationAPI.H2PrioritizationResource;
  export import H2Prioritization = H2PrioritizationAPI.H2Prioritization;
  export import H2PrioritizationEditParams = H2PrioritizationAPI.H2PrioritizationEditParams;
  export import H2PrioritizationGetParams = H2PrioritizationAPI.H2PrioritizationGetParams;
  export import HotlinkProtectionResource = HotlinkProtectionAPI.HotlinkProtectionResource;
  export import HotlinkProtection = HotlinkProtectionAPI.HotlinkProtection;
  export import HotlinkProtectionEditParams = HotlinkProtectionAPI.HotlinkProtectionEditParams;
  export import HotlinkProtectionGetParams = HotlinkProtectionAPI.HotlinkProtectionGetParams;
  export import HTTP2Resource = HTTP2API.HTTP2Resource;
  export import HTTP2 = HTTP2API.HTTP2;
  export import HTTP2EditParams = HTTP2API.HTTP2EditParams;
  export import HTTP2GetParams = HTTP2API.HTTP2GetParams;
  export import HTTP3Resource = HTTP3API.HTTP3Resource;
  export import HTTP3 = HTTP3API.HTTP3;
  export import HTTP3EditParams = HTTP3API.HTTP3EditParams;
  export import HTTP3GetParams = HTTP3API.HTTP3GetParams;
  export import ImageResizingResource = ImageResizingAPI.ImageResizingResource;
  export import ImageResizing = ImageResizingAPI.ImageResizing;
  export import ImageResizingEditParams = ImageResizingAPI.ImageResizingEditParams;
  export import ImageResizingGetParams = ImageResizingAPI.ImageResizingGetParams;
  export import IPGeolocationResource = IPGeolocationAPI.IPGeolocationResource;
  export import IPGeolocation = IPGeolocationAPI.IPGeolocation;
  export import IPGeolocationEditParams = IPGeolocationAPI.IPGeolocationEditParams;
  export import IPGeolocationGetParams = IPGeolocationAPI.IPGeolocationGetParams;
  export import IPV6Resource = IPV6API.IPV6Resource;
  export import IPV6 = IPV6API.IPV6;
  export import IPV6EditParams = IPV6API.IPV6EditParams;
  export import IPV6GetParams = IPV6API.IPV6GetParams;
  export import MinTLSVersionResource = MinTLSVersionAPI.MinTLSVersionResource;
  export import MinTLSVersion = MinTLSVersionAPI.MinTLSVersion;
  export import MinTLSVersionEditParams = MinTLSVersionAPI.MinTLSVersionEditParams;
  export import MinTLSVersionGetParams = MinTLSVersionAPI.MinTLSVersionGetParams;
  export import MinifyResource = MinifyAPI.MinifyResource;
  export import Minify = MinifyAPI.Minify;
  export import MinifyEditParams = MinifyAPI.MinifyEditParams;
  export import MinifyGetParams = MinifyAPI.MinifyGetParams;
  export import MirageResource = MirageAPI.MirageResource;
  export import Mirage = MirageAPI.Mirage;
  export import MirageEditParams = MirageAPI.MirageEditParams;
  export import MirageGetParams = MirageAPI.MirageGetParams;
  export import MobileRedirectResource = MobileRedirectAPI.MobileRedirectResource;
  export import MobileRedirect = MobileRedirectAPI.MobileRedirect;
  export import MobileRedirectEditParams = MobileRedirectAPI.MobileRedirectEditParams;
  export import MobileRedirectGetParams = MobileRedirectAPI.MobileRedirectGetParams;
  export import NELResource = NELAPI.NELResource;
  export import NEL = NELAPI.NEL;
  export import NELEditParams = NELAPI.NELEditParams;
  export import NELGetParams = NELAPI.NELGetParams;
  export import OpportunisticEncryptionResource = OpportunisticEncryptionAPI.OpportunisticEncryptionResource;
  export import OpportunisticEncryption = OpportunisticEncryptionAPI.OpportunisticEncryption;
  export import OpportunisticEncryptionEditParams = OpportunisticEncryptionAPI.OpportunisticEncryptionEditParams;
  export import OpportunisticEncryptionGetParams = OpportunisticEncryptionAPI.OpportunisticEncryptionGetParams;
  export import OpportunisticOnionResource = OpportunisticOnionAPI.OpportunisticOnionResource;
  export import OpportunisticOnion = OpportunisticOnionAPI.OpportunisticOnion;
  export import OpportunisticOnionEditParams = OpportunisticOnionAPI.OpportunisticOnionEditParams;
  export import OpportunisticOnionGetParams = OpportunisticOnionAPI.OpportunisticOnionGetParams;
  export import OrangeToOrangeResource = OrangeToOrangeAPI.OrangeToOrangeResource;
  export import OrangeToOrange = OrangeToOrangeAPI.OrangeToOrange;
  export import OrangeToOrangeEditParams = OrangeToOrangeAPI.OrangeToOrangeEditParams;
  export import OrangeToOrangeGetParams = OrangeToOrangeAPI.OrangeToOrangeGetParams;
  export import OriginErrorPagePassThruResource = OriginErrorPagePassThruAPI.OriginErrorPagePassThruResource;
  export import OriginErrorPagePassThru = OriginErrorPagePassThruAPI.OriginErrorPagePassThru;
  export import OriginErrorPagePassThruEditParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruEditParams;
  export import OriginErrorPagePassThruGetParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruGetParams;
  export import OriginMaxHTTPVersionResource = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionResource;
  export import OriginMaxHTTPVersion = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion;
  export import OriginMaxHTTPVersionEditResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditResponse;
  export import OriginMaxHTTPVersionGetResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetResponse;
  export import OriginMaxHTTPVersionEditParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditParams;
  export import OriginMaxHTTPVersionGetParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetParams;
  export import PolishResource = PolishAPI.PolishResource;
  export import Polish = PolishAPI.Polish;
  export import PolishEditParams = PolishAPI.PolishEditParams;
  export import PolishGetParams = PolishAPI.PolishGetParams;
  export import PrefetchPreloadResource = PrefetchPreloadAPI.PrefetchPreloadResource;
  export import PrefetchPreload = PrefetchPreloadAPI.PrefetchPreload;
  export import PrefetchPreloadEditParams = PrefetchPreloadAPI.PrefetchPreloadEditParams;
  export import PrefetchPreloadGetParams = PrefetchPreloadAPI.PrefetchPreloadGetParams;
  export import ProxyReadTimeoutResource = ProxyReadTimeoutAPI.ProxyReadTimeoutResource;
  export import ProxyReadTimeout = ProxyReadTimeoutAPI.ProxyReadTimeout;
  export import ProxyReadTimeoutEditParams = ProxyReadTimeoutAPI.ProxyReadTimeoutEditParams;
  export import ProxyReadTimeoutGetParams = ProxyReadTimeoutAPI.ProxyReadTimeoutGetParams;
  export import PseudoIPV4Resource = PseudoIPV4API.PseudoIPV4Resource;
  export import PseudoIPV4 = PseudoIPV4API.PseudoIPV4;
  export import PseudoIPV4EditParams = PseudoIPV4API.PseudoIPV4EditParams;
  export import PseudoIPV4GetParams = PseudoIPV4API.PseudoIPV4GetParams;
  export import ResponseBufferingResource = ResponseBufferingAPI.ResponseBufferingResource;
  export import ResponseBuffering = ResponseBufferingAPI.ResponseBuffering;
  export import ResponseBufferingEditParams = ResponseBufferingAPI.ResponseBufferingEditParams;
  export import ResponseBufferingGetParams = ResponseBufferingAPI.ResponseBufferingGetParams;
  export import RocketLoaderResource = RocketLoaderAPI.RocketLoaderResource;
  export import RocketLoader = RocketLoaderAPI.RocketLoader;
  export import RocketLoaderEditParams = RocketLoaderAPI.RocketLoaderEditParams;
  export import RocketLoaderGetParams = RocketLoaderAPI.RocketLoaderGetParams;
  export import SecurityHeaders = SecurityHeadersAPI.SecurityHeaders;
  export import SecurityHeaderEditParams = SecurityHeadersAPI.SecurityHeaderEditParams;
  export import SecurityHeaderGetParams = SecurityHeadersAPI.SecurityHeaderGetParams;
  export import SecurityLevelResource = SecurityLevelAPI.SecurityLevelResource;
  export import SecurityLevel = SecurityLevelAPI.SecurityLevel;
  export import SecurityLevelEditParams = SecurityLevelAPI.SecurityLevelEditParams;
  export import SecurityLevelGetParams = SecurityLevelAPI.SecurityLevelGetParams;
  export import ServerSideExcludes = ServerSideExcludesAPI.ServerSideExcludes;
  export import ServerSideExcludeEditParams = ServerSideExcludesAPI.ServerSideExcludeEditParams;
  export import ServerSideExcludeGetParams = ServerSideExcludesAPI.ServerSideExcludeGetParams;
  export import SortQueryStringForCacheResource = SortQueryStringForCacheAPI.SortQueryStringForCacheResource;
  export import SortQueryStringForCache = SortQueryStringForCacheAPI.SortQueryStringForCache;
  export import SortQueryStringForCacheEditParams = SortQueryStringForCacheAPI.SortQueryStringForCacheEditParams;
  export import SortQueryStringForCacheGetParams = SortQueryStringForCacheAPI.SortQueryStringForCacheGetParams;
  export import SSLResource = SSLAPI.SSLResource;
  export import SSL = SSLAPI.SSL;
  export import SSLEditParams = SSLAPI.SSLEditParams;
  export import SSLGetParams = SSLAPI.SSLGetParams;
  export import SSLRecommenderResource = SSLRecommenderAPI.SSLRecommenderResource;
  export import SSLRecommender = SSLRecommenderAPI.SSLRecommender;
  export import SSLRecommenderEditParams = SSLRecommenderAPI.SSLRecommenderEditParams;
  export import SSLRecommenderGetParams = SSLRecommenderAPI.SSLRecommenderGetParams;
  export import TLS1_3Resource = TLS1_3API.TLS1_3Resource;
  export import TLS1_3 = TLS1_3API.TLS1_3;
  export import TLS1_3EditParams = TLS1_3API.TLS1_3EditParams;
  export import TLS1_3GetParams = TLS1_3API.TLS1_3GetParams;
  export import TLSClientAuthResource = TLSClientAuthAPI.TLSClientAuthResource;
  export import TLSClientAuth = TLSClientAuthAPI.TLSClientAuth;
  export import TLSClientAuthEditParams = TLSClientAuthAPI.TLSClientAuthEditParams;
  export import TLSClientAuthGetParams = TLSClientAuthAPI.TLSClientAuthGetParams;
  export import TrueClientIPHeaderResource = TrueClientIPHeaderAPI.TrueClientIPHeaderResource;
  export import TrueClientIPHeader = TrueClientIPHeaderAPI.TrueClientIPHeader;
  export import TrueClientIPHeaderEditParams = TrueClientIPHeaderAPI.TrueClientIPHeaderEditParams;
  export import TrueClientIPHeaderGetParams = TrueClientIPHeaderAPI.TrueClientIPHeaderGetParams;
  export import WAFResource = WAFAPI.WAFResource;
  export import WAF = WAFAPI.WAF;
  export import WAFEditParams = WAFAPI.WAFEditParams;
  export import WAFGetParams = WAFAPI.WAFGetParams;
  export import WebPResource = WebPAPI.WebPResource;
  export import WebP = WebPAPI.WebP;
  export import WebPEditParams = WebPAPI.WebPEditParams;
  export import WebPGetParams = WebPAPI.WebPGetParams;
  export import WebsocketResource = WebsocketAPI.WebsocketResource;
  export import Websocket = WebsocketAPI.Websocket;
  export import WebsocketEditParams = WebsocketAPI.WebsocketEditParams;
  export import WebsocketGetParams = WebsocketAPI.WebsocketGetParams;
  export import FontSettings = FontSettingsAPI.FontSettings;
  export import FontSettingEditParams = FontSettingsAPI.FontSettingEditParams;
  export import FontSettingGetParams = FontSettingsAPI.FontSettingGetParams;
}
