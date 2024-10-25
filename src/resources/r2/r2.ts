// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BucketsAPI from './buckets';
import * as SippyAPI from './sippy';
import * as TemporaryCredentialsAPI from './temporary-credentials';
import * as DomainsAPI from './domains/domains';
import * as EventNotificationsAPI from './event-notifications/event-notifications';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  sippy: SippyAPI.SippyResource = new SippyAPI.SippyResource(this._client);
  temporaryCredentials: TemporaryCredentialsAPI.TemporaryCredentials =
    new TemporaryCredentialsAPI.TemporaryCredentials(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  eventNotifications: EventNotificationsAPI.EventNotifications = new EventNotificationsAPI.EventNotifications(
    this._client,
  );
}

export namespace R2 {
  export import Buckets = BucketsAPI.Buckets;
  export type Bucket = BucketsAPI.Bucket;
  export type BucketListResponse = BucketsAPI.BucketListResponse;
  export type BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export type BucketCreateParams = BucketsAPI.BucketCreateParams;
  export type BucketListParams = BucketsAPI.BucketListParams;
  export type BucketDeleteParams = BucketsAPI.BucketDeleteParams;
  export type BucketGetParams = BucketsAPI.BucketGetParams;
  export import SippyResource = SippyAPI.SippyResource;
  export type Provider = SippyAPI.Provider;
  export type Sippy = SippyAPI.Sippy;
  export type SippyDeleteResponse = SippyAPI.SippyDeleteResponse;
  export type SippyUpdateParams = SippyAPI.SippyUpdateParams;
  export type SippyDeleteParams = SippyAPI.SippyDeleteParams;
  export type SippyGetParams = SippyAPI.SippyGetParams;
  export import TemporaryCredentials = TemporaryCredentialsAPI.TemporaryCredentials;
  export type TemporaryCredential = TemporaryCredentialsAPI.TemporaryCredential;
  export type TemporaryCredentialCreateResponse = TemporaryCredentialsAPI.TemporaryCredentialCreateResponse;
  export type TemporaryCredentialCreateParams = TemporaryCredentialsAPI.TemporaryCredentialCreateParams;
  export import Domains = DomainsAPI.Domains;
  export import EventNotifications = EventNotificationsAPI.EventNotifications;
}
