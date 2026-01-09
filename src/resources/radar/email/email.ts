// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RoutingAPI from './routing/routing';
import {
  Routing,
  RoutingSummaryV2Params,
  RoutingSummaryV2Response,
  RoutingTimeseriesGroupsV2Params,
  RoutingTimeseriesGroupsV2Response,
} from './routing/routing';
import * as SecurityAPI from './security/security';
import {
  Security,
  SecuritySummaryV2Params,
  SecuritySummaryV2Response,
  SecurityTimeseriesGroupsV2Params,
  SecurityTimeseriesGroupsV2Response,
} from './security/security';

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
Email.Security = Security;

export declare namespace Email {
  export { type RadarEmailSeries as RadarEmailSeries, type RadarEmailSummary as RadarEmailSummary };

  export {
    Routing as Routing,
    type RoutingSummaryV2Response as RoutingSummaryV2Response,
    type RoutingTimeseriesGroupsV2Response as RoutingTimeseriesGroupsV2Response,
    type RoutingSummaryV2Params as RoutingSummaryV2Params,
    type RoutingTimeseriesGroupsV2Params as RoutingTimeseriesGroupsV2Params,
  };

  export {
    Security as Security,
    type SecuritySummaryV2Response as SecuritySummaryV2Response,
    type SecurityTimeseriesGroupsV2Response as SecurityTimeseriesGroupsV2Response,
    type SecuritySummaryV2Params as SecuritySummaryV2Params,
    type SecurityTimeseriesGroupsV2Params as SecurityTimeseriesGroupsV2Params,
  };
}
