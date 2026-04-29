// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RoutingAPI from './routing/routing';
import { BaseRouting, Routing } from './routing/routing';
import * as SecurityAPI from './security/security';
import { BaseSecurity, Security } from './security/security';

export class BaseEmail extends APIResource {
  static override readonly _key: readonly ['radar', 'email'] = Object.freeze(['radar', 'email'] as const);
}
export class Email extends BaseEmail {
  routing: RoutingAPI.Routing = new RoutingAPI.Routing(this._client);
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

Email.Routing = Routing;
Email.BaseRouting = BaseRouting;
Email.Security = Security;
Email.BaseSecurity = BaseSecurity;

export declare namespace Email {
  export { Routing as Routing, BaseRouting as BaseRouting };

  export { Security as Security, BaseSecurity as BaseSecurity };
}
