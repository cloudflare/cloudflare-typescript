// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InsightsAPI from './insights/insights';
import {
  BaseInsights,
  InsightDismissParams,
  InsightDismissResponse,
  InsightListParams,
  InsightListResponse,
  InsightListResponsesV4PagePagination,
  Insights,
} from './insights/insights';

export class BaseSecurityCenter extends APIResource {
  static override readonly _key: readonly ['securityCenter'] = Object.freeze(['securityCenter'] as const);
}
export class SecurityCenter extends BaseSecurityCenter {
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
}

SecurityCenter.Insights = Insights;
SecurityCenter.BaseInsights = BaseInsights;

export declare namespace SecurityCenter {
  export {
    Insights as Insights,
    BaseInsights as BaseInsights,
    type InsightListResponse as InsightListResponse,
    type InsightDismissResponse as InsightDismissResponse,
    type InsightListResponsesV4PagePagination as InsightListResponsesV4PagePagination,
    type InsightListParams as InsightListParams,
    type InsightDismissParams as InsightDismissParams,
  };
}
