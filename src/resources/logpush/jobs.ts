// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as JobsAPI from 'cloudflare/resources/logpush/jobs';
import * as Shared from 'cloudflare/resources/shared';
import * as DatasetsJobsAPI from 'cloudflare/resources/logpush/datasets/jobs';
import { JobsSinglePage } from 'cloudflare/resources/logpush/datasets/jobs';

export class Jobs extends APIResource {
  /**
   * Creates a new Logpush job for an account or zone.
   */
  create(
    params: JobCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsJobsAPI.Job | null> {
    const { account_id, zone_id, ...body } = params;
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
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/logpush/jobs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatasetsJobsAPI.Job | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a Logpush job.
   */
  update(
    jobId: number,
    params: JobUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsJobsAPI.Job | null> {
    const { account_id, zone_id, ...body } = params;
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
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/logpush/jobs/${jobId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatasetsJobsAPI.Job | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Logpush jobs for an account or zone.
   */
  list(
    params?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobsSinglePage, DatasetsJobsAPI.Job | null>;
  list(options?: Core.RequestOptions): Core.PagePromise<JobsSinglePage, DatasetsJobsAPI.Job | null>;
  list(
    params: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobsSinglePage, DatasetsJobsAPI.Job | null> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
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
      `/${accountOrZone}/${accountOrZoneId}/logpush/jobs`,
      JobsSinglePage,
      options,
    );
  }

  /**
   * Deletes a Logpush job.
   */
  delete(
    jobId: number,
    params: JobDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null> {
    const { body, account_id, zone_id } = params;
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
    return (
      this._client.delete(`/${accountOrZone}/${accountOrZoneId}/logpush/jobs/${jobId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the details of a Logpush job.
   */
  get(
    jobId: number,
    params?: JobGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsJobsAPI.Job | null>;
  get(jobId: number, options?: Core.RequestOptions): Core.APIPromise<DatasetsJobsAPI.Job | null>;
  get(
    jobId: number,
    params: JobGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsJobsAPI.Job | null> {
    if (isRequestOptions(params)) {
      return this.get(jobId, {}, params);
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
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/logpush/jobs/${jobId}`,
        options,
      ) as Core.APIPromise<{ result: DatasetsJobsAPI.Job | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UnnamedSchemaRef2f2e9d7fbcc0e6856257a03a1dbbdfb5 {
  /**
   * Unique id of the job.
   */
  id?: number;

  /**
   * Name of the dataset.
   */
  dataset?: string | null;

  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf?: string;

  /**
   * Flag that indicates if the job is enabled.
   */
  enabled?: boolean;

  /**
   * If not null, the job is currently failing. Failures are usually repetitive
   * (example: no permissions to write to destination bucket). Only the last failure
   * is recorded. On successful execution of a job the error_message and last_error
   * are set to null.
   */
  error_message?: string | null;

  /**
   * The frequency at which Cloudflare sends batches of logs to your destination.
   * Setting frequency to high sends your logs in larger quantities of smaller files.
   * Setting frequency to low sends logs in smaller quantities of larger files.
   */
  frequency?: 'high' | 'low' | null;

  /**
   * Records the last time for which logs have been successfully pushed. If the last
   * successful push was for logs range 2018-07-23T10:00:00Z to 2018-07-23T10:01:00Z
   * then the value of this field will be 2018-07-23T10:01:00Z. If the job has never
   * run or has just been enabled and hasn't run yet then the field will be empty.
   */
  last_complete?: string | null;

  /**
   * Records the last time the job failed. If not null, the job is currently failing.
   * If null, the job has either never failed or has run successfully at least once
   * since last failure. See also the error_message field.
   */
  last_error?: string | null;

  /**
   * @deprecated: This field is deprecated. Use `output_options` instead.
   * Configuration string. It specifies things like requested fields and timestamp
   * formats. If migrating from the logpull api, copy the url (full url or just the
   * query string) of your call here, and logpush will keep on making this call for
   * you, setting start and end times appropriately.
   */
  logpull_options?: string | null;

  /**
   * Optional human readable job name. Not unique. Cloudflare suggests that you set
   * this to a meaningful string, like the domain name, to make it easier to identify
   * your job.
   */
  name?: string | null;

  /**
   * The structured replacement for `logpull_options`. When including this field, the
   * `logpull_option` field will be ignored.
   */
  output_options?: DatasetsJobsAPI.OutputOptions | null;
}

export interface JobCreateParams {
  /**
   * Body param: Uniquely identifies a resource (such as an s3 bucket) where data
   * will be pushed. Additional configuration parameters supported by the destination
   * may be included.
   */
  destination_conf: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Name of the dataset.
   */
  dataset?: string | null;

  /**
   * Body param: Flag that indicates if the job is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: The frequency at which Cloudflare sends batches of logs to your
   * destination. Setting frequency to high sends your logs in larger quantities of
   * smaller files. Setting frequency to low sends logs in smaller quantities of
   * larger files.
   */
  frequency?: 'high' | 'low' | null;

  /**
   * Body param: This field is deprecated. Use `output_options` instead.
   * Configuration string. It specifies things like requested fields and timestamp
   * formats. If migrating from the logpull api, copy the url (full url or just the
   * query string) of your call here, and logpush will keep on making this call for
   * you, setting start and end times appropriately.
   */
  logpull_options?: string | null;

  /**
   * Body param: Optional human readable job name. Not unique. Cloudflare suggests
   * that you set this to a meaningful string, like the domain name, to make it
   * easier to identify your job.
   */
  name?: string | null;

  /**
   * Body param: The structured replacement for `logpull_options`. When including
   * this field, the `logpull_option` field will be ignored.
   */
  output_options?: DatasetsJobsAPI.OutputOptions | null;

  /**
   * Body param: Ownership challenge token to prove destination ownership.
   */
  ownership_challenge?: string;
}

export interface JobUpdateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Uniquely identifies a resource (such as an s3 bucket) where data
   * will be pushed. Additional configuration parameters supported by the destination
   * may be included.
   */
  destination_conf?: string;

  /**
   * Body param: Flag that indicates if the job is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: The frequency at which Cloudflare sends batches of logs to your
   * destination. Setting frequency to high sends your logs in larger quantities of
   * smaller files. Setting frequency to low sends logs in smaller quantities of
   * larger files.
   */
  frequency?: 'high' | 'low' | null;

  /**
   * Body param: This field is deprecated. Use `output_options` instead.
   * Configuration string. It specifies things like requested fields and timestamp
   * formats. If migrating from the logpull api, copy the url (full url or just the
   * query string) of your call here, and logpush will keep on making this call for
   * you, setting start and end times appropriately.
   */
  logpull_options?: string | null;

  /**
   * Body param: The structured replacement for `logpull_options`. When including
   * this field, the `logpull_option` field will be ignored.
   */
  output_options?: DatasetsJobsAPI.OutputOptions | null;

  /**
   * Body param: Ownership challenge token to prove destination ownership.
   */
  ownership_challenge?: string;
}

export interface JobListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface JobDeleteParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;
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

export namespace Jobs {
  export import UnnamedSchemaRef2f2e9d7fbcc0e6856257a03a1dbbdfb5 = JobsAPI.UnnamedSchemaRef2f2e9d7fbcc0e6856257a03a1dbbdfb5;
  export import JobCreateParams = JobsAPI.JobCreateParams;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
  export import JobListParams = JobsAPI.JobListParams;
  export import JobDeleteParams = JobsAPI.JobDeleteParams;
  export import JobGetParams = JobsAPI.JobGetParams;
}

export { JobsSinglePage };
