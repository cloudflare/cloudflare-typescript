// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatusesAPI from 'cloudflare/resources/addresses/prefixes/bgps/statuses';

export class Statuses extends APIResource {
  /**
   * List the current advertisement state for a prefix.
   */
  ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(
    accountId: string,
    prefixId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/status`,
        options,
      ) as Core.APIPromise<{
        result: StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Advertise or withdraw BGP route for a prefix.
   */
  ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(
    accountId: string,
    prefixId: string,
    body: StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/status`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse {
  /**
   * Enablement of prefix advertisement to the Internet.
   */
  advertised?: boolean;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;
}

export interface StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse {
  /**
   * Enablement of prefix advertisement to the Internet.
   */
  advertised?: boolean;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;
}

export interface StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams {
  /**
   * Enablement of prefix advertisement to the Internet.
   */
  advertised: boolean;
}

export namespace Statuses {
  export import StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse;
  export import StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse;
  export import StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams;
}
