// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DatasetsAPI from 'cloudflare/resources/dlp/datasets';

export class DLP extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
}

export namespace DLP {
  export import Datasets = DatasetsAPI.Datasets;
  export import DatasetCreateResponse = DatasetsAPI.DatasetCreateResponse;
  export import DatasetUpdateResponse = DatasetsAPI.DatasetUpdateResponse;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetUploadResponse = DatasetsAPI.DatasetUploadResponse;
  export import DatasetUploadPrepareResponse = DatasetsAPI.DatasetUploadPrepareResponse;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetUploadParams = DatasetsAPI.DatasetUploadParams;
}
