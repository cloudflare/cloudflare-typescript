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

export class BaseAses extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases'] = Object.freeze([
    'radar',
    'http',
    'ases',
  ] as const);
}
export class Ases extends BaseAses {
  botClass: BotClassAPI.BotClass = new BotClassAPI.BotClass(this._client);
  deviceType: DeviceTypeAPI.DeviceType = new DeviceTypeAPI.DeviceType(this._client);
  httpProtocol: HTTPProtocolAPI.HTTPProtocol = new HTTPProtocolAPI.HTTPProtocol(this._client);
  httpMethod: HTTPMethodAPI.HTTPMethod = new HTTPMethodAPI.HTTPMethod(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  os: OSAPI.OS = new OSAPI.OS(this._client);
  tlsVersion: TLSVersionAPI.TLSVersion = new TLSVersionAPI.TLSVersion(this._client);
  browserFamily: BrowserFamilyAPI.BrowserFamily = new BrowserFamilyAPI.BrowserFamily(this._client);
}

Ases.BotClass = BotClass;
Ases.BaseBotClass = BaseBotClass;
Ases.DeviceType = DeviceType;
Ases.BaseDeviceType = BaseDeviceType;
Ases.HTTPProtocol = HTTPProtocol;
Ases.BaseHTTPProtocol = BaseHTTPProtocol;
Ases.HTTPMethod = HTTPMethod;
Ases.BaseHTTPMethod = BaseHTTPMethod;
Ases.IPVersion = IPVersion;
Ases.BaseIPVersion = BaseIPVersion;
Ases.OS = OS;
Ases.BaseOS = BaseOS;
Ases.TLSVersion = TLSVersion;
Ases.BaseTLSVersion = BaseTLSVersion;
Ases.BrowserFamily = BrowserFamily;
Ases.BaseBrowserFamily = BaseBrowserFamily;

export declare namespace Ases {
  export { BotClass as BotClass, BaseBotClass as BaseBotClass };

  export { DeviceType as DeviceType, BaseDeviceType as BaseDeviceType };

  export { HTTPProtocol as HTTPProtocol, BaseHTTPProtocol as BaseHTTPProtocol };

  export { HTTPMethod as HTTPMethod, BaseHTTPMethod as BaseHTTPMethod };

  export { IPVersion as IPVersion, BaseIPVersion as BaseIPVersion };

  export { OS as OS, BaseOS as BaseOS };

  export { TLSVersion as TLSVersion, BaseTLSVersion as BaseTLSVersion };

  export { BrowserFamily as BrowserFamily, BaseBrowserFamily as BaseBrowserFamily };
}
