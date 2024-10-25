// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IQIAPI from './iqi';
import * as SpeedAPI from './speed/speed';

export class Quality extends APIResource {
  iqi: IQIAPI.IQI = new IQIAPI.IQI(this._client);
  speed: SpeedAPI.Speed = new SpeedAPI.Speed(this._client);
}

export namespace Quality {
  export import IQI = IQIAPI.IQI;
  export type IQISummaryResponse = IQIAPI.IQISummaryResponse;
  export type IQITimeseriesGroupsResponse = IQIAPI.IQITimeseriesGroupsResponse;
  export type IQISummaryParams = IQIAPI.IQISummaryParams;
  export type IQITimeseriesGroupsParams = IQIAPI.IQITimeseriesGroupsParams;
  export import Speed = SpeedAPI.Speed;
  export type SpeedHistogramResponse = SpeedAPI.SpeedHistogramResponse;
  export type SpeedSummaryResponse = SpeedAPI.SpeedSummaryResponse;
  export type SpeedHistogramParams = SpeedAPI.SpeedHistogramParams;
  export type SpeedSummaryParams = SpeedAPI.SpeedSummaryParams;
}
