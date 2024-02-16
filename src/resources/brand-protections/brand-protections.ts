// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SubmitsAPI from 'cloudflare/resources/brand-protections/submits';
import * as URLInfosAPI from 'cloudflare/resources/brand-protections/url-infos';

export class BrandProtections extends APIResource {
  submits: SubmitsAPI.Submits = new SubmitsAPI.Submits(this._client);
  urlInfos: URLInfosAPI.URLInfos = new URLInfosAPI.URLInfos(this._client);
}

export namespace BrandProtections {
  export import Submits = SubmitsAPI.Submits;
  export import SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse = SubmitsAPI.SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse;
  export import SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams = SubmitsAPI.SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams;
  export import URLInfos = URLInfosAPI.URLInfos;
  export import URLInfoPhishingURLInformationGetResultsForAURLScanResponse = URLInfosAPI.URLInfoPhishingURLInformationGetResultsForAURLScanResponse;
  export import URLInfoPhishingURLInformationGetResultsForAURLScanParams = URLInfosAPI.URLInfoPhishingURLInformationGetResultsForAURLScanParams;
}
