// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionAPI from './session';
import {
  BaseSession,
  Session,
  SessionGetParams,
  SessionGetResponse,
  SessionListParams,
  SessionListResponse,
} from './session';
import * as BrowserAPI from './browser/browser';
import {
  BaseBrowser,
  Browser,
  BrowserConnectParams,
  BrowserCreateParams,
  BrowserCreateResponse,
  BrowserDeleteParams,
  BrowserDeleteResponse,
  BrowserLaunchParams,
  BrowserProtocolParams,
  BrowserProtocolResponse,
  BrowserVersionParams,
  BrowserVersionResponse,
} from './browser/browser';

export class BaseDevtools extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'devtools'] = Object.freeze([
    'browserRendering',
    'devtools',
  ] as const);
}
export class Devtools extends BaseDevtools {
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
  browser: BrowserAPI.Browser = new BrowserAPI.Browser(this._client);
}

Devtools.Session = Session;
Devtools.BaseSession = BaseSession;
Devtools.Browser = Browser;
Devtools.BaseBrowser = BaseBrowser;

export declare namespace Devtools {
  export {
    Session as Session,
    BaseSession as BaseSession,
    type SessionListResponse as SessionListResponse,
    type SessionGetResponse as SessionGetResponse,
    type SessionListParams as SessionListParams,
    type SessionGetParams as SessionGetParams,
  };

  export {
    Browser as Browser,
    BaseBrowser as BaseBrowser,
    type BrowserCreateResponse as BrowserCreateResponse,
    type BrowserDeleteResponse as BrowserDeleteResponse,
    type BrowserProtocolResponse as BrowserProtocolResponse,
    type BrowserVersionResponse as BrowserVersionResponse,
    type BrowserCreateParams as BrowserCreateParams,
    type BrowserDeleteParams as BrowserDeleteParams,
    type BrowserConnectParams as BrowserConnectParams,
    type BrowserLaunchParams as BrowserLaunchParams,
    type BrowserProtocolParams as BrowserProtocolParams,
    type BrowserVersionParams as BrowserVersionParams,
  };
}
