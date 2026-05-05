// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RetentionAPI from './retention';
import {
  BaseRetention,
  Retention,
  RetentionCreateParams,
  RetentionCreateResponse,
  RetentionGetParams,
  RetentionGetResponse,
} from './retention';
import * as CmbAPI from './cmb/cmb';
import { BaseCmb, Cmb } from './cmb/cmb';

export class BaseControl extends APIResource {
  static override readonly _key: readonly ['logs', 'control'] = Object.freeze(['logs', 'control'] as const);
}
export class Control extends BaseControl {
  retention: RetentionAPI.Retention = new RetentionAPI.Retention(this._client);
  cmb: CmbAPI.Cmb = new CmbAPI.Cmb(this._client);
}

Control.Retention = Retention;
Control.BaseRetention = BaseRetention;
Control.Cmb = Cmb;
Control.BaseCmb = BaseCmb;

export declare namespace Control {
  export {
    Retention as Retention,
    BaseRetention as BaseRetention,
    type RetentionCreateResponse as RetentionCreateResponse,
    type RetentionGetResponse as RetentionGetResponse,
    type RetentionCreateParams as RetentionCreateParams,
    type RetentionGetParams as RetentionGetParams,
  };

  export { Cmb as Cmb, BaseCmb as BaseCmb };
}
