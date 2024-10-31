// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DOMAPI from './dom';
import { DOM, DOMGetResponse } from './dom';
import * as HARAPI from './har';
import { HAR, HARGetResponse } from './har';
import * as ResponsesAPI from './responses';
import { ResponseGetResponse, Responses } from './responses';
import * as ResultAPI from './result';
import { Result, ResultGetResponse } from './result';
import * as ScansAPI from './scans';
import {
  ScanCreateParams,
  ScanCreateResponse,
  ScanGetParams,
  ScanGetResponse,
  ScanHARResponse,
  ScanListParams,
  ScanListResponse,
  ScanScreenshotParams,
  Scans,
} from './scans';
import * as ScreenshotAPI from './screenshot';
import { Screenshot, ScreenshotGetParams } from './screenshot';

export class URLScanner extends APIResource {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
  dom: DOMAPI.DOM = new DOMAPI.DOM(this._client);
  har: HARAPI.HAR = new HARAPI.HAR(this._client);
  result: ResultAPI.Result = new ResultAPI.Result(this._client);
  screenshot: ScreenshotAPI.Screenshot = new ScreenshotAPI.Screenshot(this._client);
}

export interface URLScannerDomain {
  id: number;

  name: string;

  super_category_id?: number;
}

export interface URLScannerTask {
  effectiveUrl: string;

  errors: Array<URLScannerTask.Error>;

  location: string;

  region: string;

  status: string;

  success: boolean;

  time: string;

  url: string;

  uuid: string;

  visibility: string;
}

export namespace URLScannerTask {
  export interface Error {
    message: string;
  }
}

URLScanner.Responses = Responses;
URLScanner.Scans = Scans;
URLScanner.DOM = DOM;
URLScanner.HAR = HAR;
URLScanner.Result = Result;
URLScanner.Screenshot = Screenshot;

export declare namespace URLScanner {
  export { Responses as Responses, type ResponseGetResponse as ResponseGetResponse };

  export {
    Scans as Scans,
    type ScanCreateResponse as ScanCreateResponse,
    type ScanListResponse as ScanListResponse,
    type ScanGetResponse as ScanGetResponse,
    type ScanHARResponse as ScanHARResponse,
    type ScanCreateParams as ScanCreateParams,
    type ScanListParams as ScanListParams,
    type ScanGetParams as ScanGetParams,
    type ScanScreenshotParams as ScanScreenshotParams,
  };

  export { DOM as DOM, type DOMGetResponse as DOMGetResponse };

  export { HAR as HAR, type HARGetResponse as HARGetResponse };

  export { Result as Result, type ResultGetResponse as ResultGetResponse };

  export { Screenshot as Screenshot, type ScreenshotGetParams as ScreenshotGetParams };
}
