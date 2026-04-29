// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConnectionsAPI from './connections';
import { Connections } from './connections';
import * as CookiesAPI from './cookies';
import { Cookies } from './cookies';
import * as PoliciesAPI from './policies';
import { Policies } from './policies';
import * as ScriptsAPI from './scripts';
import { Scripts } from './scripts';

export class PageShield extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  cookies: CookiesAPI.Cookies = new CookiesAPI.Cookies(this._client);
}

PageShield.Policies = Policies;
PageShield.Connections = Connections;
PageShield.Scripts = Scripts;
PageShield.Cookies = Cookies;

export declare namespace PageShield {
  export { Policies as Policies };

  export { Connections as Connections };

  export { Scripts as Scripts };

  export { Cookies as Cookies };
}
