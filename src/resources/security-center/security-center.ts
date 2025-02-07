// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InsightsAPI from './insights/insights';
import {
  InsightDismissParams,
  InsightDismissResponse,
  InsightListParams,
  InsightListResponse,
  InsightListResponsesV4PagePagination,
  Insights,
} from './insights/insights';

export class SecurityCenter extends APIResource {
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
}

SecurityCenter.Insights = Insights;

export declare namespace SecurityCenter {
  export {
    Insights as Insights,
    type InsightListResponse as InsightListResponse,
    type InsightDismissResponse as InsightDismissResponse,
    type InsightListResponsesV4PagePagination as InsightListResponsesV4PagePagination,
    type InsightListParams as InsightListParams,
    type InsightDismissParams as InsightDismissParams,
  };
}
