// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CORSAPI from './cors';
import {
  CORS,
  CORSDeleteParams,
  CORSDeleteResponse,
  CORSGetParams,
  CORSGetResponse,
  CORSUpdateParams,
  CORSUpdateResponse,
} from './cors';
import * as LifecycleAPI from './lifecycle';
import {
  Lifecycle,
  LifecycleGetParams,
  LifecycleGetResponse,
  LifecycleUpdateParams,
  LifecycleUpdateResponse,
} from './lifecycle';
import * as SippyAPI from './sippy';
import {
  Provider,
  Sippy,
  SippyDeleteParams,
  SippyDeleteResponse,
  SippyGetParams,
  SippyResource,
  SippyUpdateParams,
} from './sippy';
import * as DomainsAPI from './domains/domains';
import { Domains } from './domains/domains';
import * as EventNotificationsAPI from './event-notifications/event-notifications';
import { EventNotifications } from './event-notifications/event-notifications';

export class Buckets extends APIResource {
  lifecycle: LifecycleAPI.Lifecycle = new LifecycleAPI.Lifecycle(this._client);
  cors: CORSAPI.CORS = new CORSAPI.CORS(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  eventNotifications: EventNotificationsAPI.EventNotifications = new EventNotificationsAPI.EventNotifications(
    this._client,
  );
  sippy: SippyAPI.SippyResource = new SippyAPI.SippyResource(this._client);

  /**
   * Creates a new R2 bucket.
   */
  create(params: BucketCreateParams, options?: Core.RequestOptions): Core.APIPromise<Bucket> {
    const { account_id, jurisdiction, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/r2/buckets`, {
        body,
        ...options,
        headers: {
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: Bucket }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all R2 buckets on your account
   */
  list(params: BucketListParams, options?: Core.RequestOptions): Core.APIPromise<BucketListResponse> {
    const { account_id, jurisdiction, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2/buckets`, {
        query,
        ...options,
        headers: {
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: BucketListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing R2 bucket.
   */
  delete(
    bucketName: string,
    params: BucketDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketDeleteResponse> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.delete(`/accounts/${account_id}/r2/buckets/${bucketName}`, {
        ...options,
        headers: {
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: BucketDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets metadata for an existing R2 bucket.
   */
  get(bucketName: string, params: BucketGetParams, options?: Core.RequestOptions): Core.APIPromise<Bucket> {
    const { account_id, jurisdiction } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2/buckets/${bucketName}`, {
        ...options,
        headers: {
          ...(jurisdiction?.toString() != null ?
            { 'cf-r2-jurisdiction': jurisdiction?.toString() }
          : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ result: Bucket }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A single R2 bucket
 */
export interface Bucket {
  /**
   * Creation timestamp
   */
  creation_date?: string;

  /**
   * Location of the bucket
   */
  location?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

  /**
   * Name of the bucket
   */
  name?: string;

  /**
   * Storage class for newly uploaded objects, unless specified otherwise.
   */
  storage_class?: 'Standard' | 'InfrequentAccess';
}

export interface BucketListResponse {
  buckets?: Array<Bucket>;
}

export type BucketDeleteResponse = unknown;

export interface BucketCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: Name of the bucket
   */
  name: string;

  /**
   * Body param: Location of the bucket
   */
  locationHint?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

  /**
   * Body param: Storage class for newly uploaded objects, unless specified
   * otherwise.
   */
  storageClass?: 'Standard' | 'InfrequentAccess';

  /**
   * Header param: Creates the bucket in the provided jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface BucketListParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Query param: Pagination cursor received during the last List Buckets call. R2
   * buckets are paginated using cursors instead of page numbers.
   */
  cursor?: string;

  /**
   * Query param: Direction to order buckets
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Bucket names to filter by. Only buckets with this phrase in their
   * name will be returned.
   */
  name_contains?: string;

  /**
   * Query param: Field to order buckets by
   */
  order?: 'name';

  /**
   * Query param: Maximum number of buckets to return in a single call
   */
  per_page?: number;

  /**
   * Query param: Bucket name to start searching after. Buckets are ordered
   * lexicographically.
   */
  start_after?: string;

  /**
   * Header param: Lists buckets in the provided jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface BucketDeleteParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

export interface BucketGetParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Header param: The bucket jurisdiction
   */
  jurisdiction?: 'default' | 'eu' | 'fedramp';
}

Buckets.Lifecycle = Lifecycle;
Buckets.CORS = CORS;
Buckets.Domains = Domains;
Buckets.EventNotifications = EventNotifications;
Buckets.SippyResource = SippyResource;

export declare namespace Buckets {
  export {
    type Bucket as Bucket,
    type BucketListResponse as BucketListResponse,
    type BucketDeleteResponse as BucketDeleteResponse,
    type BucketCreateParams as BucketCreateParams,
    type BucketListParams as BucketListParams,
    type BucketDeleteParams as BucketDeleteParams,
    type BucketGetParams as BucketGetParams,
  };

  export {
    Lifecycle as Lifecycle,
    type LifecycleUpdateResponse as LifecycleUpdateResponse,
    type LifecycleGetResponse as LifecycleGetResponse,
    type LifecycleUpdateParams as LifecycleUpdateParams,
    type LifecycleGetParams as LifecycleGetParams,
  };

  export {
    CORS as CORS,
    type CORSUpdateResponse as CORSUpdateResponse,
    type CORSDeleteResponse as CORSDeleteResponse,
    type CORSGetResponse as CORSGetResponse,
    type CORSUpdateParams as CORSUpdateParams,
    type CORSDeleteParams as CORSDeleteParams,
    type CORSGetParams as CORSGetParams,
  };

  export { Domains as Domains };

  export { EventNotifications as EventNotifications };

  export {
    SippyResource as SippyResource,
    type Provider as Provider,
    type Sippy as Sippy,
    type SippyDeleteResponse as SippyDeleteResponse,
    type SippyUpdateParams as SippyUpdateParams,
    type SippyDeleteParams as SippyDeleteParams,
    type SippyGetParams as SippyGetParams,
  };
}
