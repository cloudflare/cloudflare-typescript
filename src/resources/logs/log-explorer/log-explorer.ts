// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as QueryAPI from './query';
import { Query, QuerySqlParams, QuerySqlResponse, QuerySqlResponsesSinglePage } from './query';
import * as DatasetsAPI from './datasets/datasets';
import {
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

export class LogExplorer extends APIResource {
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
}

LogExplorer.Query = Query;
LogExplorer.QuerySqlResponsesSinglePage = QuerySqlResponsesSinglePage;
LogExplorer.Datasets = Datasets;
LogExplorer.DatasetSummariesSinglePage = DatasetSummariesSinglePage;

export declare namespace LogExplorer {
  export {
    Query as Query,
    type QuerySqlResponse as QuerySqlResponse,
    QuerySqlResponsesSinglePage as QuerySqlResponsesSinglePage,
    type QuerySqlParams as QuerySqlParams,
  };

  export {
    Datasets as Datasets,
    type CreateRequest as CreateRequest,
    type Dataset as Dataset,
    type DatasetSummary as DatasetSummary,
    type UpdateRequest as UpdateRequest,
    DatasetSummariesSinglePage as DatasetSummariesSinglePage,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetGetParams as DatasetGetParams,
  };
}
