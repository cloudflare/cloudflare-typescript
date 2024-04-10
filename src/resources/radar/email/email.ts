// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as EmailAPI from 'cloudflare/resources/radar/email/email';
import * as RoutingAPI from 'cloudflare/resources/radar/email/routing/routing';
import * as SecurityAPI from 'cloudflare/resources/radar/email/security/security';

export class Email extends APIResource {
  routing: RoutingAPI.Routing = new RoutingAPI.Routing(this._client);
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

export interface RadarEmailSeries {
  FAIL: Array<string>;

  NONE: Array<string>;

  PASS: Array<string>;
}

export interface RadarEmailSummary {
  FAIL: string;

  NONE: string;

  PASS: string;
}

export namespace Email {
  export import RadarEmailSeries = EmailAPI.RadarEmailSeries;
  export import RadarEmailSummary = EmailAPI.RadarEmailSummary;
  export import Routing = RoutingAPI.Routing;
  export import Security = SecurityAPI.Security;
}
