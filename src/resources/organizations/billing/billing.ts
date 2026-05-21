// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UsageAPI from './usage';
import { Usage, UsageGetParams, UsageGetResponse } from './usage';

export class Billing extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Billing.Usage = Usage;

export declare namespace Billing {
  export { Usage as Usage, type UsageGetResponse as UsageGetResponse, type UsageGetParams as UsageGetParams };
}
