// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { type Response } from '../../../../_shims/index';

export class Downloads extends APIResource {
  /**
   * Downloads artifacts for an executed command. Bulk downloads are not supported
   */
  get(
    commandId: string,
    filename: string,
    params: DownloadGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/dex/commands/${commandId}/downloads/${filename}`, {
      ...options,
      headers: { Accept: 'application/zip', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface DownloadGetParams {
  /**
   * unique identifier linked to an account in the API request path
   */
  account_id: string;
}

export declare namespace Downloads {
  export { type DownloadGetParams as DownloadGetParams };
}
