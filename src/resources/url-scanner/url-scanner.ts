// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DOMAPI from './dom';
import * as HARAPI from './har';
import * as ResponsesAPI from './responses';
import * as ResultAPI from './result';
import * as ScansAPI from './scans';
import * as ScreenshotAPI from './screenshot';

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

export namespace URLScanner {
  export import Responses = ResponsesAPI.Responses;
  export import ResponseGetResponse = ResponsesAPI.ResponseGetResponse;
  export import Scans = ScansAPI.Scans;
  export import ScanCreateResponse = ScansAPI.ScanCreateResponse;
  export import ScanListResponse = ScansAPI.ScanListResponse;
  export import ScanGetResponse = ScansAPI.ScanGetResponse;
  export import ScanHARResponse = ScansAPI.ScanHARResponse;
  export import ScanCreateParams = ScansAPI.ScanCreateParams;
  export import ScanListParams = ScansAPI.ScanListParams;
  export import ScanGetParams = ScansAPI.ScanGetParams;
  export import ScanScreenshotParams = ScansAPI.ScanScreenshotParams;
  export import DOM = DOMAPI.DOM;
  export import DOMGetResponse = DOMAPI.DOMGetResponse;
  export import HAR = HARAPI.HAR;
  export import HARGetResponse = HARAPI.HARGetResponse;
  export import Result = ResultAPI.Result;
  export import ResultGetResponse = ResultAPI.ResultGetResponse;
  export import Screenshot = ScreenshotAPI.Screenshot;
  export import ScreenshotGetParams = ScreenshotAPI.ScreenshotGetParams;
}
