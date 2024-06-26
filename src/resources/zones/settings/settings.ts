// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AdvancedDDoSAPI from './advanced-ddos';
import * as AlwaysOnlineAPI from './always-online';
import * as AlwaysUseHTTPSAPI from './always-use-https';
import * as AutomaticHTTPSRewritesAPI from './automatic-https-rewrites';
import * as AutomaticPlatformOptimizationAPI from './automatic-platform-optimization';
import * as BrotliAPI from './brotli';
import * as BrowserCacheTTLAPI from './browser-cache-ttl';
import * as BrowserCheckAPI from './browser-check';
import * as CacheLevelAPI from './cache-level';
import * as ChallengeTTLAPI from './challenge-ttl';
import * as CiphersAPI from './ciphers';
import * as DevelopmentModeAPI from './development-mode';
import * as EarlyHintsAPI from './early-hints';
import * as EmailObfuscationAPI from './email-obfuscation';
import * as FontSettingsAPI from './font-settings';
import * as H2PrioritizationAPI from './h2-prioritization';
import * as HotlinkProtectionAPI from './hotlink-protection';
import * as HTTP2API from './http2';
import * as HTTP3API from './http3';
import * as ImageResizingAPI from './image-resizing';
import * as IPGeolocationAPI from './ip-geolocation';
import * as IPV6API from './ipv6';
import * as MinTLSVersionAPI from './min-tls-version';
import * as MinifyAPI from './minify';
import * as MirageAPI from './mirage';
import * as MobileRedirectAPI from './mobile-redirect';
import * as NELAPI from './nel';
import * as OpportunisticEncryptionAPI from './opportunistic-encryption';
import * as OpportunisticOnionAPI from './opportunistic-onion';
import * as OrangeToOrangeAPI from './orange-to-orange';
import * as OriginErrorPagePassThruAPI from './origin-error-page-pass-thru';
import * as OriginMaxHTTPVersionAPI from './origin-max-http-version';
import * as PolishAPI from './polish';
import * as PrefetchPreloadAPI from './prefetch-preload';
import * as ProxyReadTimeoutAPI from './proxy-read-timeout';
import * as PseudoIPV4API from './pseudo-ipv4';
import * as ResponseBufferingAPI from './response-buffering';
import * as RocketLoaderAPI from './rocket-loader';
import * as SecurityHeadersAPI from './security-headers';
import * as SecurityLevelAPI from './security-level';
import * as ServerSideExcludesAPI from './server-side-excludes';
import * as SortQueryStringForCacheAPI from './sort-query-string-for-cache';
import * as SSLAPI from './ssl';
import * as SSLRecommenderAPI from './ssl-recommender';
import * as TLS1_3API from './tls-1-3';
import * as TLSClientAuthAPI from './tls-client-auth';
import * as TrueClientIPHeaderAPI from './true-client-ip-header';
import * as WAFAPI from './waf';
import * as WebPAPI from './webp';
import * as WebsocketAPI from './websocket';
import * as ZeroRTTAPI from './zero-rtt';

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
  export import AdvancedDDoS = AdvancedDDoSAPI.AdvancedDDoS;
  export import AlwaysOnlineResource = AlwaysOnlineAPI.AlwaysOnlineResource;
  export import AlwaysOnline = AlwaysOnlineAPI.AlwaysOnline;
  export import AlwaysUseHTTPS = AlwaysUseHTTPSAPI.AlwaysUseHTTPS;
  export import AutomaticHTTPSRewrites = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites;
  export import AutomaticPlatformOptimizationResource = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationResource;
  export import AutomaticPlatformOptimization = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimization;
  export import BrotliResource = BrotliAPI.BrotliResource;
  export import Brotli = BrotliAPI.Brotli;
  export import BrowserCacheTTLResource = BrowserCacheTTLAPI.BrowserCacheTTLResource;
  export import BrowserCacheTTL = BrowserCacheTTLAPI.BrowserCacheTTL;
  export import BrowserCheckResource = BrowserCheckAPI.BrowserCheckResource;
  export import BrowserCheck = BrowserCheckAPI.BrowserCheck;
  export import CacheLevelResource = CacheLevelAPI.CacheLevelResource;
  export import CacheLevel = CacheLevelAPI.CacheLevel;
  export import ChallengeTTLResource = ChallengeTTLAPI.ChallengeTTLResource;
  export import ChallengeTTL = ChallengeTTLAPI.ChallengeTTL;
  export import Ciphers = CiphersAPI.Ciphers;
  export import DevelopmentModeResource = DevelopmentModeAPI.DevelopmentModeResource;
  export import DevelopmentMode = DevelopmentModeAPI.DevelopmentMode;
  export import EarlyHints = EarlyHintsAPI.EarlyHints;
  export import EmailObfuscationResource = EmailObfuscationAPI.EmailObfuscationResource;
  export import EmailObfuscation = EmailObfuscationAPI.EmailObfuscation;
  export import H2PrioritizationResource = H2PrioritizationAPI.H2PrioritizationResource;
  export import H2Prioritization = H2PrioritizationAPI.H2Prioritization;
  export import HotlinkProtectionResource = HotlinkProtectionAPI.HotlinkProtectionResource;
  export import HotlinkProtection = HotlinkProtectionAPI.HotlinkProtection;
  export import HTTP2Resource = HTTP2API.HTTP2Resource;
  export import HTTP2 = HTTP2API.HTTP2;
  export import HTTP3Resource = HTTP3API.HTTP3Resource;
  export import HTTP3 = HTTP3API.HTTP3;
  export import ImageResizingResource = ImageResizingAPI.ImageResizingResource;
  export import ImageResizing = ImageResizingAPI.ImageResizing;
  export import IPGeolocationResource = IPGeolocationAPI.IPGeolocationResource;
  export import IPGeolocation = IPGeolocationAPI.IPGeolocation;
  export import IPV6Resource = IPV6API.IPV6Resource;
  export import IPV6 = IPV6API.IPV6;
  export import MinTLSVersionResource = MinTLSVersionAPI.MinTLSVersionResource;
  export import MinTLSVersion = MinTLSVersionAPI.MinTLSVersion;
  export import MinifyResource = MinifyAPI.MinifyResource;
  export import Minify = MinifyAPI.Minify;
  export import MirageResource = MirageAPI.MirageResource;
  export import Mirage = MirageAPI.Mirage;
  export import MobileRedirectResource = MobileRedirectAPI.MobileRedirectResource;
  export import MobileRedirect = MobileRedirectAPI.MobileRedirect;
  export import NELResource = NELAPI.NELResource;
  export import NEL = NELAPI.NEL;
  export import OpportunisticEncryptionResource = OpportunisticEncryptionAPI.OpportunisticEncryptionResource;
  export import OpportunisticEncryption = OpportunisticEncryptionAPI.OpportunisticEncryption;
  export import OpportunisticOnionResource = OpportunisticOnionAPI.OpportunisticOnionResource;
  export import OpportunisticOnion = OpportunisticOnionAPI.OpportunisticOnion;
  export import OrangeToOrangeResource = OrangeToOrangeAPI.OrangeToOrangeResource;
  export import OrangeToOrange = OrangeToOrangeAPI.OrangeToOrange;
  export import OriginErrorPagePassThruResource = OriginErrorPagePassThruAPI.OriginErrorPagePassThruResource;
  export import OriginErrorPagePassThru = OriginErrorPagePassThruAPI.OriginErrorPagePassThru;
  export import OriginMaxHTTPVersionResource = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionResource;
  export import OriginMaxHTTPVersion = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion;
  export import OriginMaxHTTPVersionEditResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditResponse;
  export import OriginMaxHTTPVersionGetResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetResponse;
  export import OriginMaxHTTPVersionEditParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditParams;
  export import OriginMaxHTTPVersionGetParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetParams;
  export import PolishResource = PolishAPI.PolishResource;
  export import Polish = PolishAPI.Polish;
  export import PrefetchPreloadResource = PrefetchPreloadAPI.PrefetchPreloadResource;
  export import PrefetchPreload = PrefetchPreloadAPI.PrefetchPreload;
  export import ProxyReadTimeoutResource = ProxyReadTimeoutAPI.ProxyReadTimeoutResource;
  export import ProxyReadTimeout = ProxyReadTimeoutAPI.ProxyReadTimeout;
  export import PseudoIPV4Resource = PseudoIPV4API.PseudoIPV4Resource;
  export import PseudoIPV4 = PseudoIPV4API.PseudoIPV4;
  export import ResponseBufferingResource = ResponseBufferingAPI.ResponseBufferingResource;
  export import ResponseBuffering = ResponseBufferingAPI.ResponseBuffering;
  export import RocketLoaderResource = RocketLoaderAPI.RocketLoaderResource;
  export import RocketLoader = RocketLoaderAPI.RocketLoader;
  export import SecurityHeaders = SecurityHeadersAPI.SecurityHeaders;
  export import SecurityLevelResource = SecurityLevelAPI.SecurityLevelResource;
  export import SecurityLevel = SecurityLevelAPI.SecurityLevel;
  export import ServerSideExcludes = ServerSideExcludesAPI.ServerSideExcludes;
  export import SortQueryStringForCacheResource = SortQueryStringForCacheAPI.SortQueryStringForCacheResource;
  export import SortQueryStringForCache = SortQueryStringForCacheAPI.SortQueryStringForCache;
  export import SSLResource = SSLAPI.SSLResource;
  export import SSL = SSLAPI.SSL;
  export import SSLRecommenderResource = SSLRecommenderAPI.SSLRecommenderResource;
  export import SSLRecommender = SSLRecommenderAPI.SSLRecommender;
  export import TLS1_3Resource = TLS1_3API.TLS1_3Resource;
  export import TLS1_3 = TLS1_3API.TLS1_3;
  export import TLSClientAuthResource = TLSClientAuthAPI.TLSClientAuthResource;
  export import TLSClientAuth = TLSClientAuthAPI.TLSClientAuth;
  export import TrueClientIPHeaderResource = TrueClientIPHeaderAPI.TrueClientIPHeaderResource;
  export import TrueClientIPHeader = TrueClientIPHeaderAPI.TrueClientIPHeader;
  export import WAFResource = WAFAPI.WAFResource;
  export import WAF = WAFAPI.WAF;
  export import WebPResource = WebPAPI.WebPResource;
  export import WebP = WebPAPI.WebP;
  export import WebsocketResource = WebsocketAPI.WebsocketResource;
  export import Websocket = WebsocketAPI.Websocket;
  export import FontSettings = FontSettingsAPI.FontSettings;
  export import FontSettingEditParams = FontSettingsAPI.FontSettingEditParams;
  export import FontSettingGetParams = FontSettingsAPI.FontSettingGetParams;
}
