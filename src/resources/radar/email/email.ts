// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RoutingAPI from 'cloudflare/resources/radar/email/routing/routing';
import * as SecurityAPI from 'cloudflare/resources/radar/email/security/security';

export class Email extends APIResource {
  routing: RoutingAPI.Routing = new RoutingAPI.Routing(this._client);
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

export namespace Email {
  export import Routing = RoutingAPI.Routing;
  export import Security = SecurityAPI.Security;
}
