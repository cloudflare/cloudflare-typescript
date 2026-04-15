// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RoutingAPI from './routing/routing';
import {
  BaseRouting,
  Routing,
  RoutingSummaryV2Params,
  RoutingSummaryV2Response,
  RoutingTimeseriesGroupsV2Params,
  RoutingTimeseriesGroupsV2Response,
} from './routing/routing';
import * as SecurityAPI from './security/security';
import {
  BaseSecurity,
  Security,
  SecuritySummaryV2Params,
  SecuritySummaryV2Response,
  SecurityTimeseriesGroupsV2Params,
  SecurityTimeseriesGroupsV2Response,
} from './security/security';

export class BaseEmail extends APIResource {
  static override readonly _key: readonly ['radar', 'email'] = Object.freeze(['radar', 'email'] as const);
}
export class Email extends BaseEmail {
  routing: RoutingAPI.Routing = new RoutingAPI.Routing(this._client);
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

export interface RadarEmailSeries {
  FAIL: Array<string>;

  NONE: Array<string>;

  PASS: Array<string>;
}

export interface RadarEmailSummary {
  /**
   * A numeric string.
   */
  FAIL: string;

  /**
   * A numeric string.
   */
  NONE: string;

  /**
   * A numeric string.
   */
  PASS: string;
}

Email.Routing = Routing;
Email.BaseRouting = BaseRouting;
Email.Security = Security;
Email.BaseSecurity = BaseSecurity;

export declare namespace Email {
  export { type RadarEmailSeries as RadarEmailSeries, type RadarEmailSummary as RadarEmailSummary };

  export {
    Routing as Routing,
    BaseRouting as BaseRouting,
    type RoutingSummaryV2Response as RoutingSummaryV2Response,
    type RoutingTimeseriesGroupsV2Response as RoutingTimeseriesGroupsV2Response,
    type RoutingSummaryV2Params as RoutingSummaryV2Params,
    type RoutingTimeseriesGroupsV2Params as RoutingTimeseriesGroupsV2Params,
  };

  export {
    Security as Security,
    BaseSecurity as BaseSecurity,
    type SecuritySummaryV2Response as SecuritySummaryV2Response,
    type SecurityTimeseriesGroupsV2Response as SecurityTimeseriesGroupsV2Response,
    type SecuritySummaryV2Params as SecuritySummaryV2Params,
    type SecurityTimeseriesGroupsV2Params as SecurityTimeseriesGroupsV2Params,
  };
}
