// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Routing } from './routing/routing';
import { Security } from './security/security';
import * as EmailAPI from './email';
import * as RoutingAPI from './routing/routing';
import * as SecurityAPI from './security/security';

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
