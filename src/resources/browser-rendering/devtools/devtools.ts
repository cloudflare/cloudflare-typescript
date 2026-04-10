// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionAPI from './session';
import { Session } from './session';
import * as BrowserAPI from './browser/browser';
import { Browser } from './browser/browser';

export class Devtools extends APIResource {
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
  browser: BrowserAPI.Browser = new BrowserAPI.Browser(this._client);
}

Devtools.Session = Session;
Devtools.Browser = Browser;

export declare namespace Devtools {
  export { Session as Session };

  export { Browser as Browser };
}
