// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as SummaryAPI from './summary';

export class Summary extends APIResource {
  /**
   * Percentage distribution of unique accounts per model.
   */
  model(query?: SummaryModelParams, options?: Core.RequestOptions): Core.APIPromise<SummaryModelResponse>;
  model(options?: Core.RequestOptions): Core.APIPromise<SummaryModelResponse>;
  model(
    query: SummaryModelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryModelResponse> {
    if (isRequestOptions(query)) {
      return this.model({}, query);
    }
    return (
      this._client.get('/radar/ai/inference/summary/model', { query, ...options }) as Core.APIPromise<{
        result: SummaryModelResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of unique accounts per provider.
   */
  provider(
    query?: SummaryProviderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryProviderResponse>;
  provider(options?: Core.RequestOptions): Core.APIPromise<SummaryProviderResponse>;
  provider(
    query: SummaryProviderParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryProviderResponse> {
    if (isRequestOptions(query)) {
      return this.provider({}, query);
    }
    return (
      this._client.get('/radar/ai/gateway/summary/provider', { query, ...options }) as Core.APIPromise<{
        result: SummaryProviderResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of unique accounts per task.
   */
  task(query?: SummaryTaskParams, options?: Core.RequestOptions): Core.APIPromise<SummaryTaskResponse>;
  task(options?: Core.RequestOptions): Core.APIPromise<SummaryTaskResponse>;
  task(
    query: SummaryTaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryTaskResponse> {
    if (isRequestOptions(query)) {
      return this.task({}, query);
    }
    return (
      this._client.get('/radar/ai/inference/summary/task', { query, ...options }) as Core.APIPromise<{
        result: SummaryTaskResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryModelResponse {
  meta: SummaryModelResponse.Meta;

  summary_0: Record<string, Array<string>>;
}

export namespace SummaryModelResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }
}

export interface SummaryProviderResponse {
  meta: SummaryProviderResponse.Meta;

  summary_0: Record<string, Array<string>>;
}

export namespace SummaryProviderResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }
}

export interface SummaryTaskResponse {
  meta: SummaryTaskResponse.Meta;

  summary_0: Record<string, Array<string>>;
}

export namespace SummaryTaskResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }
}

export interface SummaryModelParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface SummaryProviderParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface SummaryTaskParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace Summary {
  export import SummaryModelResponse = SummaryAPI.SummaryModelResponse;
  export import SummaryProviderResponse = SummaryAPI.SummaryProviderResponse;
  export import SummaryTaskResponse = SummaryAPI.SummaryTaskResponse;
  export import SummaryModelParams = SummaryAPI.SummaryModelParams;
  export import SummaryProviderParams = SummaryAPI.SummaryProviderParams;
  export import SummaryTaskParams = SummaryAPI.SummaryTaskParams;
}
