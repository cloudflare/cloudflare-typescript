// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error'
import * as DatasetsJobsAPI from './jobs';
import * as JobsAPI from '../jobs';

export class Jobs extends APIResource {
  /**
   * Lists Logpush jobs for an account or zone for a dataset.
   */
  get(datasetId: string | null, params?: JobGetParams, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse>
  get(datasetId: string | null, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse>
  get(datasetId: string | null, params: JobGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(datasetId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return (this._client.get(`/${accountOrZone}/${accountOrZoneId}/logpush/datasets/${datasetId}/jobs`, options) as Core.APIPromise<{ result: JobGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type JobGetResponse = Array<JobsAPI.LogpushJob | null>

export interface JobGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Jobs {
  export import JobGetResponse = DatasetsJobsAPI.JobGetResponse;
  export import JobGetParams = DatasetsJobsAPI.JobGetParams;
}
