// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectionsAPI from './connections';
import { BaseConnections, Connections } from './connections';
import * as CookiesAPI from './cookies';
import { BaseCookies, Cookies } from './cookies';
import * as PoliciesAPI from './policies';
import { BasePolicies, Policies } from './policies';
import * as ScriptsAPI from './scripts';
import { BaseScripts, Scripts } from './scripts';

export class BasePageShield extends APIResource {
  static override readonly _key: readonly ['pageShield'] = Object.freeze(['pageShield'] as const);
}
export class PageShield extends BasePageShield {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  cookies: CookiesAPI.Cookies = new CookiesAPI.Cookies(this._client);
}

PageShield.Policies = Policies;
PageShield.BasePolicies = BasePolicies;
PageShield.Connections = Connections;
PageShield.BaseConnections = BaseConnections;
PageShield.Scripts = Scripts;
PageShield.BaseScripts = BaseScripts;
PageShield.Cookies = Cookies;
PageShield.BaseCookies = BaseCookies;

export declare namespace PageShield {
  export { Policies as Policies, BasePolicies as BasePolicies };

  export { Connections as Connections, BaseConnections as BaseConnections };

  export { Scripts as Scripts, BaseScripts as BaseScripts };

  export { Cookies as Cookies, BaseCookies as BaseCookies };
}
