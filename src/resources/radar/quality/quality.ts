// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { IQI } from './iqi';
import { Speed } from './speed/speed';
import * as IQIAPI from './iqi';
import * as SpeedAPI from './speed/speed';

export class Quality extends APIResource {
  iqi: IQIAPI.IQI = new IQIAPI.IQI(this._client);
  speed: SpeedAPI.Speed = new SpeedAPI.Speed(this._client);
}

export namespace Quality {
  export import IQI = IQIAPI.IQI;
  export import IQISummaryResponse = IQIAPI.IQISummaryResponse;
  export import IQITimeseriesGroupsResponse = IQIAPI.IQITimeseriesGroupsResponse;
  export import IQISummaryParams = IQIAPI.IQISummaryParams;
  export import IQITimeseriesGroupsParams = IQIAPI.IQITimeseriesGroupsParams;
  export import Speed = SpeedAPI.Speed;
  export import SpeedHistogramResponse = SpeedAPI.SpeedHistogramResponse;
  export import SpeedSummaryResponse = SpeedAPI.SpeedSummaryResponse;
  export import SpeedHistogramParams = SpeedAPI.SpeedHistogramParams;
  export import SpeedSummaryParams = SpeedAPI.SpeedSummaryParams;
}
