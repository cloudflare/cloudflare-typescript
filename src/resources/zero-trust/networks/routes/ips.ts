// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as RoutesAPI from './routes';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class IPs extends APIResource {
  /**
   * Fetches routes that contain the given IP address.
   */
  get(ip: string, params: IPGetParams, options?: RequestOptions): APIPromise<RoutesAPI.Teamnet> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/teamnet/routes/ip/${ip}`, {
        query,
        ...options,
      }) as APIPromise<{ result: RoutesAPI.Teamnet }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IPGetParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param: UUID of the virtual network.
   */
  virtual_network_id?: string;
}

export declare namespace IPs {
  export { type IPGetParams as IPGetParams };
}
