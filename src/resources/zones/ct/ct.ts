// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AlertingAPI from './alerting';
import {
  Alerting,
  AlertingEditParams,
  AlertingEditResponse,
  AlertingGetParams,
  AlertingGetResponse,
} from './alerting';

export class CT extends APIResource {
  alerting: AlertingAPI.Alerting = new AlertingAPI.Alerting(this._client);
}

CT.Alerting = Alerting;

export declare namespace CT {
  export {
    Alerting as Alerting,
    type AlertingEditResponse as AlertingEditResponse,
    type AlertingGetResponse as AlertingGetResponse,
    type AlertingEditParams as AlertingEditParams,
    type AlertingGetParams as AlertingGetParams,
  };
}
