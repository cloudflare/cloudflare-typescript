// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EdgesAPI from 'cloudflare/resources/logpush/edges';
import * as JobsAPI from 'cloudflare/resources/logpush/jobs';
import * as DatasetsAPI from 'cloudflare/resources/logpush/datasets/datasets';
import * as OwnershipsAPI from 'cloudflare/resources/logpush/ownerships/ownerships';
import * as ValidatesAPI from 'cloudflare/resources/logpush/validates/validates';

export class Logpush extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  edges: EdgesAPI.Edges = new EdgesAPI.Edges(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  ownerships: OwnershipsAPI.Ownerships = new OwnershipsAPI.Ownerships(this._client);
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);
}

export namespace Logpush {
  export import Datasets = DatasetsAPI.Datasets;
  export import Edges = EdgesAPI.Edges;
  export import EdgeCreateResponse = EdgesAPI.EdgeCreateResponse;
  export import EdgeGetResponse = EdgesAPI.EdgeGetResponse;
  export import EdgeCreateParams = EdgesAPI.EdgeCreateParams;
  export import Jobs = JobsAPI.Jobs;
  export import JobCreateResponse = JobsAPI.JobCreateResponse;
  export import JobUpdateResponse = JobsAPI.JobUpdateResponse;
  export import JobListResponse = JobsAPI.JobListResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobGetResponse = JobsAPI.JobGetResponse;
  export import JobCreateParams = JobsAPI.JobCreateParams;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
  export import Ownerships = OwnershipsAPI.Ownerships;
  export import OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse = OwnershipsAPI.OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse;
  export import OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams = OwnershipsAPI.OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams;
  export import Validates = ValidatesAPI.Validates;
}
