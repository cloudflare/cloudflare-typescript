// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDestinations extends APIResource {
  static override readonly _key: readonly ['workers', 'observability', 'destinations'] = Object.freeze([
    'workers',
    'observability',
    'destinations',
  ] as const);

  /**
   * Create a new Workers Observability Telemetry Destination.
   *
   * @example
   * ```ts
   * const destination =
   *   await client.workers.observability.destinations.create({
   *     account_id: 'account_id',
   *     configuration: {
   *       headers: { foo: 'string' },
   *       logpushDataset: 'opentelemetry-traces',
   *       type: 'logpush',
   *       url: 'url',
   *     },
   *     enabled: true,
   *     name: 'name',
   *   });
   * ```
   */
  create(params: DestinationCreateParams, options?: RequestOptions): APIPromise<DestinationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/workers/observability/destinations`, {
        body,
        ...options,
      }) as APIPromise<{ result: DestinationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing Workers Observability Telemetry Destination.
   *
   * @example
   * ```ts
   * const destination =
   *   await client.workers.observability.destinations.update(
   *     'slug',
   *     {
   *       account_id: 'account_id',
   *       configuration: {
   *         headers: { foo: 'string' },
   *         type: 'logpush',
   *         url: 'url',
   *       },
   *       enabled: true,
   *     },
   *   );
   * ```
   */
  update(
    slug: string,
    params: DestinationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DestinationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/workers/observability/destinations/${slug}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DestinationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List your Workers Observability Telemetry Destinations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const destinationListResponse of client.workers.observability.destinations.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DestinationListParams,
    options?: RequestOptions,
  ): PagePromise<DestinationListResponsesSinglePage, DestinationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/observability/destinations`,
      SinglePage<DestinationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Workers Observability Telemetry Destination.
   *
   * @example
   * ```ts
   * const destination =
   *   await client.workers.observability.destinations.delete(
   *     'slug',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    slug: string,
    params: DestinationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DestinationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/workers/observability/destinations/${slug}`,
        options,
      ) as APIPromise<{ result: DestinationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Destinations extends BaseDestinations {}

export type DestinationListResponsesSinglePage = SinglePage<DestinationListResponse>;

export interface DestinationCreateResponse {
  configuration: DestinationCreateResponse.Configuration;

  enabled: boolean;

  name: string;

  scripts: Array<string>;

  slug: string;
}

export namespace DestinationCreateResponse {
  export interface Configuration {
    destination_conf: string;

    logpushDataset: 'opentelemetry-traces' | 'opentelemetry-logs';

    logpushJob: number;

    type: 'logpush';

    url: string;
  }
}

export interface DestinationUpdateResponse {
  configuration: DestinationUpdateResponse.Configuration;

  enabled: boolean;

  name: string;

  scripts: Array<string>;

  slug: string;
}

export namespace DestinationUpdateResponse {
  export interface Configuration {
    destination_conf: string;

    logpushDataset: 'opentelemetry-traces' | 'opentelemetry-logs';

    logpushJob: number;

    type: 'logpush';

    url: string;
  }
}

export interface DestinationListResponse {
  configuration: DestinationListResponse.Configuration;

  enabled: boolean;

  name: string;

  scripts: Array<string>;

  slug: string;
}

export namespace DestinationListResponse {
  export interface Configuration {
    destination_conf: string;

    headers: { [key: string]: string };

    jobStatus: Configuration.JobStatus;

    logpushDataset: 'opentelemetry-traces' | 'opentelemetry-logs';

    type: 'logpush';

    url: string;
  }

  export namespace Configuration {
    export interface JobStatus {
      error_message: string;

      last_complete: string;

      last_error: string;
    }
  }
}

export interface DestinationDeleteResponse {
  configuration: DestinationDeleteResponse.Configuration;

  enabled: boolean;

  name: string;

  scripts: Array<string>;

  slug: string;
}

export namespace DestinationDeleteResponse {
  export interface Configuration {
    destination_conf: string;

    logpushDataset: 'opentelemetry-traces' | 'opentelemetry-logs';

    logpushJob: number;

    type: 'logpush';

    url: string;
  }
}

export interface DestinationCreateParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  configuration: DestinationCreateParams.Configuration;

  /**
   * Body param
   */
  enabled: boolean;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  skipPreflightCheck?: boolean;
}

export namespace DestinationCreateParams {
  export interface Configuration {
    headers: { [key: string]: string };

    logpushDataset: 'opentelemetry-traces' | 'opentelemetry-logs';

    type: 'logpush';

    url: string;
  }
}

export interface DestinationUpdateParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  configuration: DestinationUpdateParams.Configuration;

  /**
   * Body param
   */
  enabled: boolean;
}

export namespace DestinationUpdateParams {
  export interface Configuration {
    headers: { [key: string]: string };

    type: 'logpush';

    url: string;
  }
}

export interface DestinationListParams {
  /**
   * Path param: Your Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param
   */
  order?: 'asc' | 'desc';

  /**
   * Query param
   */
  orderBy?: 'created' | 'updated';

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  perPage?: number;
}

export interface DestinationDeleteParams {
  /**
   * Your Cloudflare account ID.
   */
  account_id: string;
}

export declare namespace Destinations {
  export {
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationUpdateResponse as DestinationUpdateResponse,
    type DestinationListResponse as DestinationListResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    type DestinationListResponsesSinglePage as DestinationListResponsesSinglePage,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationListParams as DestinationListParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };
}
