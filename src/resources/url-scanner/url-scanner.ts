// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ResponsesAPI from './responses';
import { Responses } from './responses';
import * as ScansAPI from './scans';
import { Scans } from './scans';

export class URLScanner extends APIResource {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
}

URLScanner.Responses = Responses;
URLScanner.Scans = Scans;

export declare namespace URLScanner {
  export { Responses as Responses };

  export { Scans as Scans };
}
