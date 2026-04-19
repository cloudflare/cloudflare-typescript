// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SessionAPI from './session';
import {
  Session,
  SessionGetParams,
  SessionGetResponse,
  SessionListParams,
  SessionListResponse,
} from './session';
import * as BrowserAPI from './browser/browser';
import {
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

export class Devtools extends APIResource {
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
  browser: BrowserAPI.Browser = new BrowserAPI.Browser(this._client);
}

Devtools.Session = Session;
Devtools.Browser = Browser;

export declare namespace Devtools {
  export {
    Session as Session,
    type SessionListResponse as SessionListResponse,
    type SessionGetResponse as SessionGetResponse,
    type SessionListParams as SessionListParams,
    type SessionGetParams as SessionGetParams,
  };

  export {
    Browser as Browser,
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
