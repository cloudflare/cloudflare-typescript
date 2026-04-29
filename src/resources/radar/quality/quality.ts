// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IQIAPI from './iqi';
import { BaseIQI, IQI } from './iqi';
import * as SpeedAPI from './speed/speed';
import { BaseSpeed, Speed } from './speed/speed';

export class BaseQuality extends APIResource {
  static override readonly _key: readonly ['radar', 'quality'] = Object.freeze(['radar', 'quality'] as const);
}
export class Quality extends BaseQuality {
  iqi: IQIAPI.IQI = new IQIAPI.IQI(this._client);
  speed: SpeedAPI.Speed = new SpeedAPI.Speed(this._client);
}

Quality.IQI = IQI;
Quality.BaseIQI = BaseIQI;
Quality.Speed = Speed;
Quality.BaseSpeed = BaseSpeed;

export declare namespace Quality {
  export { IQI as IQI, BaseIQI as BaseIQI };

  export { Speed as Speed, BaseSpeed as BaseSpeed };
}
