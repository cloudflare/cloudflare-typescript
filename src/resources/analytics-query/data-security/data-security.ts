// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContentFindingsAPI from './content-findings';
import {
  BaseContentFindings,
  ContentFindingTopNParams,
  ContentFindingTopNResponse,
  ContentFindingTopNResponsesSinglePage,
  ContentFindings,
} from './content-findings';
import * as FindingsAPI from './findings';
import {
  BaseFindings,
  FindingSummaryParams,
  FindingSummaryResponse,
  FindingTimeseriesParams,
  FindingTimeseriesResponse,
  Findings,
} from './findings';

export class BaseDataSecurity extends APIResource {
  static override readonly _key: readonly ['analyticsQuery', 'dataSecurity'] = Object.freeze([
    'analyticsQuery',
    'dataSecurity',
  ] as const);
}
export class DataSecurity extends BaseDataSecurity {
  contentFindings: ContentFindingsAPI.ContentFindings = new ContentFindingsAPI.ContentFindings(this._client);
  findings: FindingsAPI.Findings = new FindingsAPI.Findings(this._client);
}

DataSecurity.ContentFindings = ContentFindings;
DataSecurity.BaseContentFindings = BaseContentFindings;
DataSecurity.Findings = Findings;
DataSecurity.BaseFindings = BaseFindings;

export declare namespace DataSecurity {
  export {
    ContentFindings as ContentFindings,
    BaseContentFindings as BaseContentFindings,
    type ContentFindingTopNResponse as ContentFindingTopNResponse,
    type ContentFindingTopNResponsesSinglePage as ContentFindingTopNResponsesSinglePage,
    type ContentFindingTopNParams as ContentFindingTopNParams,
  };

  export {
    Findings as Findings,
    BaseFindings as BaseFindings,
    type FindingSummaryResponse as FindingSummaryResponse,
    type FindingTimeseriesResponse as FindingTimeseriesResponse,
    type FindingSummaryParams as FindingSummaryParams,
    type FindingTimeseriesParams as FindingTimeseriesParams,
  };
}
