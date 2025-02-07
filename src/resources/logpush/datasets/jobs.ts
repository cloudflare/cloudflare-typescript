// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as JobsAPI from '../jobs';
import { LogpushJobsSinglePage } from '../jobs';
import { CloudflareError } from '../../../error';

export class Jobs extends APIResource {
  /**
   * Lists Logpush jobs for an account or zone for a dataset.
   */
  get(
    datasetId: string | null,
    params?: JobGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogpushJobsSinglePage, JobsAPI.LogpushJob | null>;
  get(
    datasetId: string | null,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogpushJobsSinglePage, JobsAPI.LogpushJob | null>;
  get(
    datasetId: string | null,
    params: JobGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogpushJobsSinglePage, JobsAPI.LogpushJob | null> {
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
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/logpush/datasets/${datasetId}/jobs`,
      LogpushJobsSinglePage,
      options,
    );
  }
}

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

export declare namespace Jobs {
  export { type JobGetParams as JobGetParams };
}

export { LogpushJobsSinglePage };
