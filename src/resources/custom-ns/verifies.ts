// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VerifiesAPI from 'cloudflare/resources/custom-ns/verifies';

export class Verifies extends APIResource {
  /**
   * Verify Account Custom Nameserver Glue Records
   */
  create(accountId: string, options?: Core.RequestOptions): Core.APIPromise<VerifyCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/custom_ns/verify`, options) as Core.APIPromise<{
        result: VerifyCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type VerifyCreateResponse = Array<VerifyCreateResponse.VerifyCreateResponseItem>;

export namespace VerifyCreateResponse {
  /**
   * A single account custom nameserver.
   */
  export interface VerifyCreateResponseItem {
    /**
     * A and AAAA records associated with the nameserver.
     */
    dns_records: Array<VerifyCreateResponseItem.DNSRecord>;

    /**
     * The FQDN of the name server.
     */
    ns_name: string;

    /**
     * Verification status of the nameserver.
     */
    status: 'moved' | 'pending' | 'verified';

    /**
     * Identifier
     */
    zone_tag: string;

    /**
     * The number of the set that this name server belongs to.
     */
    ns_set?: number;
  }

  export namespace VerifyCreateResponseItem {
    export interface DNSRecord {
      /**
       * DNS record type.
       */
      type?: 'A' | 'AAAA';

      /**
       * DNS record contents (an IPv4 or IPv6 address).
       */
      value?: string;
    }
  }
}

export namespace Verifies {
  export import VerifyCreateResponse = VerifiesAPI.VerifyCreateResponse;
}
