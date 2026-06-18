// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InspectAPI from './inspect';
import { BaseInspect, Inspect, InspectGetParams, InspectGetResponse } from './inspect';

export class BaseSPF extends APIResource {
  static override readonly _key: readonly ['emailAuth', 'spf'] = Object.freeze(['emailAuth', 'spf'] as const);
}
export class SPF extends BaseSPF {
  inspect: InspectAPI.Inspect = new InspectAPI.Inspect(this._client);
}

SPF.Inspect = Inspect;
SPF.BaseInspect = BaseInspect;

export declare namespace SPF {
  export {
    Inspect as Inspect,
    BaseInspect as BaseInspect,
    type InspectGetResponse as InspectGetResponse,
    type InspectGetParams as InspectGetParams,
  };
}
