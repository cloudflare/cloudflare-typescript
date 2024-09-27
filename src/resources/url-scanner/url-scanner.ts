// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ScansAPI from './scans';

export class URLScanner extends APIResource {
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
}

export namespace URLScanner {
  export import Scans = ScansAPI.Scans;
  export import URLScannerDomain = ScansAPI.URLScannerDomain;
  export import URLScannerTask = ScansAPI.URLScannerTask;
  export import ScanCreateResponse = ScansAPI.ScanCreateResponse;
  export import ScanListResponse = ScansAPI.ScanListResponse;
  export import ScanGetResponse = ScansAPI.ScanGetResponse;
  export import ScanHarResponse = ScansAPI.ScanHarResponse;
  export import ScanCreateParams = ScansAPI.ScanCreateParams;
  export import ScanListParams = ScansAPI.ScanListParams;
  export import ScanGetParams = ScansAPI.ScanGetParams;
  export import ScanScreenshotParams = ScansAPI.ScanScreenshotParams;
}
