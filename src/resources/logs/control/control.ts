// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RetentionAPI from './retention';
import * as CmbAPI from './cmb/cmb';

export class Control extends APIResource {
  retention: RetentionAPI.Retention = new RetentionAPI.Retention(this._client);
  cmb: CmbAPI.Cmb = new CmbAPI.Cmb(this._client);
}

export namespace Control {
  export import Retention = RetentionAPI.Retention;
  export import RetentionCreateResponse = RetentionAPI.RetentionCreateResponse;
  export import RetentionGetResponse = RetentionAPI.RetentionGetResponse;
  export import RetentionCreateParams = RetentionAPI.RetentionCreateParams;
  export import RetentionGetParams = RetentionAPI.RetentionGetParams;
  export import Cmb = CmbAPI.Cmb;
}
