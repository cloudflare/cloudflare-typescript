// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResponsesAPI from './responses';
import { BaseResponses, ResponseGetParams, ResponseGetResponse, Responses } from './responses';
import * as ScansAPI from './scans';
import {
  BaseScans,
  ScanBulkCreateParams,
  ScanBulkCreateResponse,
  ScanCreateParams,
  ScanCreateResponse,
  ScanDOMParams,
  ScanDOMResponse,
  ScanGetParams,
  ScanGetResponse,
  ScanHARParams,
  ScanHARResponse,
  ScanListParams,
  ScanListResponse,
  ScanScreenshotParams,
  Scans,
} from './scans';

export class BaseURLScanner extends APIResource {
  static override readonly _key: readonly ['urlScanner'] = Object.freeze(['urlScanner'] as const);
}
export class URLScanner extends BaseURLScanner {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
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
URLScanner.BaseResponses = BaseResponses;
URLScanner.Scans = Scans;
URLScanner.BaseScans = BaseScans;

export declare namespace URLScanner {
  export { type URLScannerDomain as URLScannerDomain, type URLScannerTask as URLScannerTask };

  export {
    Responses as Responses,
    BaseResponses as BaseResponses,
    type ResponseGetResponse as ResponseGetResponse,
    type ResponseGetParams as ResponseGetParams,
  };

  export {
    Scans as Scans,
    BaseScans as BaseScans,
    type ScanCreateResponse as ScanCreateResponse,
    type ScanListResponse as ScanListResponse,
    type ScanBulkCreateResponse as ScanBulkCreateResponse,
    type ScanDOMResponse as ScanDOMResponse,
    type ScanGetResponse as ScanGetResponse,
    type ScanHARResponse as ScanHARResponse,
    type ScanCreateParams as ScanCreateParams,
    type ScanListParams as ScanListParams,
    type ScanBulkCreateParams as ScanBulkCreateParams,
    type ScanDOMParams as ScanDOMParams,
    type ScanGetParams as ScanGetParams,
    type ScanHARParams as ScanHARParams,
    type ScanScreenshotParams as ScanScreenshotParams,
  };
}
