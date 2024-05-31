// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { CloudflareError } from '../../../../error';
import * as CAsAPI from './cas';
import { SinglePage } from '../../../../pagination';

export class CAs extends APIResource {
  /**
   * Lists short-lived certificate CAs and their public keys.
   */
  list(params?: CAListParams, options?: Core.RequestOptions): Core.PagePromise<CAsSinglePage, CA>;
  list(options?: Core.RequestOptions): Core.PagePromise<CAsSinglePage, CA>;
  list(
    params: CAListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CAsSinglePage, CA> {
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
      `/${accountOrZone}/${accountOrZoneId}/access/apps/ca`,
      CAsSinglePage,
      options,
    );
  }
}

export class CAsSinglePage extends SinglePage<CA> {}

export interface CA {
  /**
   * The ID of the CA.
   */
  id?: string;

  /**
   * The Application Audience (AUD) tag. Identifies the application associated with
   * the CA.
   */
  aud?: string;

  /**
   * The public key to add to your SSH server configuration.
   */
  public_key?: string;
}

export interface CAListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace CAs {
  export import CA = CAsAPI.CA;
  export import CAsSinglePage = CAsAPI.CAsSinglePage;
  export import CAListParams = CAsAPI.CAListParams;
}
