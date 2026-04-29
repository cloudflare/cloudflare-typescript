// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BotClassAPI from './bot-class';
import { BaseBotClass, BotClass } from './bot-class';
import * as BrowserFamilyAPI from './browser-family';
import { BaseBrowserFamily, BrowserFamily } from './browser-family';
import * as DeviceTypeAPI from './device-type';
import { BaseDeviceType, DeviceType } from './device-type';
import * as HTTPMethodAPI from './http-method';
import { BaseHTTPMethod, HTTPMethod } from './http-method';
import * as HTTPProtocolAPI from './http-protocol';
import { BaseHTTPProtocol, HTTPProtocol } from './http-protocol';
import * as IPVersionAPI from './ip-version';
import { BaseIPVersion, IPVersion } from './ip-version';
import * as OSAPI from './os';
import { BaseOS, OS } from './os';
import * as TLSVersionAPI from './tls-version';
import { BaseTLSVersion, TLSVersion } from './tls-version';

export class BaseLocations extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'locations'] = Object.freeze([
    'radar',
    'http',
    'locations',
  ] as const);
}
export class Locations extends BaseLocations {
  botClass: BotClassAPI.BotClass = new BotClassAPI.BotClass(this._client);
  deviceType: DeviceTypeAPI.DeviceType = new DeviceTypeAPI.DeviceType(this._client);
  httpProtocol: HTTPProtocolAPI.HTTPProtocol = new HTTPProtocolAPI.HTTPProtocol(this._client);
  httpMethod: HTTPMethodAPI.HTTPMethod = new HTTPMethodAPI.HTTPMethod(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  os: OSAPI.OS = new OSAPI.OS(this._client);
  tlsVersion: TLSVersionAPI.TLSVersion = new TLSVersionAPI.TLSVersion(this._client);
  browserFamily: BrowserFamilyAPI.BrowserFamily = new BrowserFamilyAPI.BrowserFamily(this._client);
}

Locations.BotClass = BotClass;
Locations.BaseBotClass = BaseBotClass;
Locations.DeviceType = DeviceType;
Locations.BaseDeviceType = BaseDeviceType;
Locations.HTTPProtocol = HTTPProtocol;
Locations.BaseHTTPProtocol = BaseHTTPProtocol;
Locations.HTTPMethod = HTTPMethod;
Locations.BaseHTTPMethod = BaseHTTPMethod;
Locations.IPVersion = IPVersion;
Locations.BaseIPVersion = BaseIPVersion;
Locations.OS = OS;
Locations.BaseOS = BaseOS;
Locations.TLSVersion = TLSVersion;
Locations.BaseTLSVersion = BaseTLSVersion;
Locations.BrowserFamily = BrowserFamily;
Locations.BaseBrowserFamily = BaseBrowserFamily;

export declare namespace Locations {
  export { BotClass as BotClass, BaseBotClass as BaseBotClass };

  export { DeviceType as DeviceType, BaseDeviceType as BaseDeviceType };

  export { HTTPProtocol as HTTPProtocol, BaseHTTPProtocol as BaseHTTPProtocol };

  export { HTTPMethod as HTTPMethod, BaseHTTPMethod as BaseHTTPMethod };

  export { IPVersion as IPVersion, BaseIPVersion as BaseIPVersion };

  export { OS as OS, BaseOS as BaseOS };

  export { TLSVersion as TLSVersion, BaseTLSVersion as BaseTLSVersion };

  export { BrowserFamily as BrowserFamily, BaseBrowserFamily as BaseBrowserFamily };
}
