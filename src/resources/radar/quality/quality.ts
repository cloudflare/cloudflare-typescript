// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as IqiAPI from 'cloudflare/resources/radar/quality/iqi/iqi';
import * as SpeedAPI from 'cloudflare/resources/radar/quality/speed/speed';

export class Quality extends APIResource {
  iqi: IqiAPI.Iqi = new IqiAPI.Iqi(this._client);
  speed: SpeedAPI.Speed = new SpeedAPI.Speed(this._client);
}

export namespace Quality {
  export import Iqi = IqiAPI.Iqi;
  export import IqiListResponse = IqiAPI.IqiListResponse;
  export import IqiListParams = IqiAPI.IqiListParams;
  export import Speed = SpeedAPI.Speed;
}
