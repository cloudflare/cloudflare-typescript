// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as IqiAPI from 'cloudflare/resources/radar/quality/iqi';
import * as SpeedAPI from 'cloudflare/resources/radar/quality/speed/speed';

export class Quality extends APIResource {
  iqi: IqiAPI.Iqi = new IqiAPI.Iqi(this._client);
  speed: SpeedAPI.Speed = new SpeedAPI.Speed(this._client);
}

export namespace Quality {
  export import Iqi = IqiAPI.Iqi;
  export import IqiSummaryResponse = IqiAPI.IqiSummaryResponse;
  export import IqiSummaryParams = IqiAPI.IqiSummaryParams;
  export import Speed = SpeedAPI.Speed;
  export import SpeedHistogramResponse = SpeedAPI.SpeedHistogramResponse;
  export import SpeedSummaryResponse = SpeedAPI.SpeedSummaryResponse;
  export import SpeedHistogramParams = SpeedAPI.SpeedHistogramParams;
  export import SpeedSummaryParams = SpeedAPI.SpeedSummaryParams;
}
