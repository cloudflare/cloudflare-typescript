// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResponsesAPI from './responses';
import { BaseResponses, Responses } from './responses';
import * as ScansAPI from './scans';
import { BaseScans, Scans } from './scans';

export class BaseURLScanner extends APIResource {
  static override readonly _key: readonly ['urlScanner'] = Object.freeze(['urlScanner'] as const);
}
export class URLScanner extends BaseURLScanner {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
}

URLScanner.Responses = Responses;
URLScanner.BaseResponses = BaseResponses;
URLScanner.Scans = Scans;
URLScanner.BaseScans = BaseScans;

export declare namespace URLScanner {
  export { Responses as Responses, BaseResponses as BaseResponses };

  export { Scans as Scans, BaseScans as BaseScans };
}
