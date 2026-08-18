// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AlertingAPI from './alerting';
import {
  Alerting,
  AlertingEditParams,
  AlertingEditResponse,
  AlertingGetParams,
  AlertingGetResponse,
  BaseAlerting,
} from './alerting';

export class BaseCT extends APIResource {
  static override readonly _key: readonly ['zones', 'ct'] = Object.freeze(['zones', 'ct'] as const);
}
export class CT extends BaseCT {
  alerting: AlertingAPI.Alerting = new AlertingAPI.Alerting(this._client);
}

CT.Alerting = Alerting;
CT.BaseAlerting = BaseAlerting;

export declare namespace CT {
  export {
    Alerting as Alerting,
    BaseAlerting as BaseAlerting,
    type AlertingEditResponse as AlertingEditResponse,
    type AlertingGetResponse as AlertingGetResponse,
    type AlertingEditParams as AlertingEditParams,
    type AlertingGetParams as AlertingGetParams,
  };
}
