// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QueryAPI from './query';
import { BaseQuery, Query, QuerySqlParams, QuerySqlResponse, QuerySqlResponsesSinglePage } from './query';
import * as DatasetsAPI from './datasets/datasets';
import {
  BaseDatasets,
  CreateRequest,
  Dataset,
  DatasetCreateParams,
  DatasetGetParams,
  DatasetListParams,
  DatasetSummariesSinglePage,
  DatasetSummary,
  DatasetUpdateParams,
  Datasets,
  UpdateRequest,
} from './datasets/datasets';

export class BaseLogExplorer extends APIResource {
  static override readonly _key: readonly ['logs', 'logExplorer'] = Object.freeze([
    'logs',
    'logExplorer',
  ] as const);
}
export class LogExplorer extends BaseLogExplorer {
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
}

LogExplorer.Query = Query;
LogExplorer.BaseQuery = BaseQuery;
LogExplorer.Datasets = Datasets;
LogExplorer.BaseDatasets = BaseDatasets;

export declare namespace LogExplorer {
  export {
    Query as Query,
    BaseQuery as BaseQuery,
    type QuerySqlResponse as QuerySqlResponse,
    type QuerySqlResponsesSinglePage as QuerySqlResponsesSinglePage,
    type QuerySqlParams as QuerySqlParams,
  };

  export {
    Datasets as Datasets,
    BaseDatasets as BaseDatasets,
    type CreateRequest as CreateRequest,
    type Dataset as Dataset,
    type DatasetSummary as DatasetSummary,
    type UpdateRequest as UpdateRequest,
    type DatasetSummariesSinglePage as DatasetSummariesSinglePage,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetGetParams as DatasetGetParams,
  };
}
