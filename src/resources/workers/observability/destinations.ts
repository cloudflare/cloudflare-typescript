// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Destinations extends APIResource {
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
  create(
    params: DestinationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/observability/destinations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DestinationCreateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/workers/observability/destinations/${slug}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DestinationUpdateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<DestinationListResponsesSinglePage, DestinationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/observability/destinations`,
      DestinationListResponsesSinglePage,
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/workers/observability/destinations/${slug}`,
        options,
      ) as Core.APIPromise<{ result: DestinationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DestinationListResponsesSinglePage extends SinglePage<DestinationListResponse> {}

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

Destinations.DestinationListResponsesSinglePage = DestinationListResponsesSinglePage;

export declare namespace Destinations {
  export {
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationUpdateResponse as DestinationUpdateResponse,
    type DestinationListResponse as DestinationListResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    DestinationListResponsesSinglePage as DestinationListResponsesSinglePage,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationListParams as DestinationListParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };
}
