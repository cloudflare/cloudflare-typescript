// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionAPI from './session';
import { BaseSession, Session } from './session';
import * as BrowserAPI from './browser/browser';
import { BaseBrowser, Browser } from './browser/browser';

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
  export { Session as Session, BaseSession as BaseSession };

  export { Browser as Browser, BaseBrowser as BaseBrowser };
}
