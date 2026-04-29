// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RetentionAPI from './retention';
import { Retention } from './retention';
import * as CmbAPI from './cmb/cmb';
import { Cmb } from './cmb/cmb';

export class Control extends APIResource {
  retention: RetentionAPI.Retention = new RetentionAPI.Retention(this._client);
  cmb: CmbAPI.Cmb = new CmbAPI.Cmb(this._client);
}

Control.Retention = Retention;
Control.Cmb = Cmb;

export declare namespace Control {
  export { Retention as Retention };

  export { Cmb as Cmb };
}
