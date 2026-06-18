// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as InspectAPI from './inspect';
import { Inspect, InspectGetParams, InspectGetResponse } from './inspect';

export class SPF extends APIResource {
  inspect: InspectAPI.Inspect = new InspectAPI.Inspect(this._client);
}

SPF.Inspect = Inspect;

export declare namespace SPF {
  export {
    Inspect as Inspect,
    type InspectGetResponse as InspectGetResponse,
    type InspectGetParams as InspectGetParams,
  };
}
