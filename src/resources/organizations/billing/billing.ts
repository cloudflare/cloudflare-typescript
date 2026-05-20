// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsageAPI from './usage';
import { BaseUsage, Usage, UsageGetParams, UsageGetResponse } from './usage';

export class BaseBilling extends APIResource {
  static override readonly _key: readonly ['organizations', 'billing'] = Object.freeze([
    'organizations',
    'billing',
  ] as const);
}
export class Billing extends BaseBilling {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Billing.Usage = Usage;
Billing.BaseUsage = BaseUsage;

export declare namespace Billing {
  export {
    Usage as Usage,
    BaseUsage as BaseUsage,
    type UsageGetResponse as UsageGetResponse,
    type UsageGetParams as UsageGetParams,
  };
}
