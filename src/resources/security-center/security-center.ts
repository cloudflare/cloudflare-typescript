// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InsightsAPI from './insights/insights';
import {
  InsightDismissParams,
  InsightDismissResponse,
  InsightGetParams,
  InsightGetResponse,
  Insights,
} from './insights/insights';

export class SecurityCenter extends APIResource {
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
}

SecurityCenter.Insights = Insights;

export declare namespace SecurityCenter {
  export {
    Insights as Insights,
    type InsightDismissResponse as InsightDismissResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightDismissParams as InsightDismissParams,
    type InsightGetParams as InsightGetParams,
  };
}
