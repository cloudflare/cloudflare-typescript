// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as EmailAPI from 'cloudflare/resources/radar/email/email';
import * as RoutingAPI from 'cloudflare/resources/radar/email/routing/routing';
import * as SecurityAPI from 'cloudflare/resources/radar/email/security/security';

export class Email extends APIResource {
  routing: RoutingAPI.Routing = new RoutingAPI.Routing(this._client);
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

export interface UnnamedSchemaRef67c73d4742566cab0909f71b1822e88c {
  FAIL: Array<string>;

  NONE: Array<string>;

  PASS: Array<string>;
}

export interface UnnamedSchemaRef853c157ad369010995e35be614e0343f {
  FAIL: string;

  NONE: string;

  PASS: string;
}

export namespace Email {
  export import UnnamedSchemaRef67c73d4742566cab0909f71b1822e88c = EmailAPI.UnnamedSchemaRef67c73d4742566cab0909f71b1822e88c;
  export import UnnamedSchemaRef853c157ad369010995e35be614e0343f = EmailAPI.UnnamedSchemaRef853c157ad369010995e35be614e0343f;
  export import Routing = RoutingAPI.Routing;
  export import Security = SecurityAPI.Security;
}
