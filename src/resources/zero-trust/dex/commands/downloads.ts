// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Downloads extends APIResource {
  /**
   * Downloads artifacts for an executed command. Bulk downloads are not supported
   */
  get(filename: string, params: DownloadGetParams, options?: RequestOptions): APIPromise<Response> {
    const { account_id, command_id } = params;
    return this._client.get(path`/accounts/${account_id}/dex/commands/${command_id}/downloads/${filename}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/zip' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface DownloadGetParams {
  /**
   * unique identifier linked to an account in the API request path
   */
  account_id: string;

  /**
   * Unique identifier for a command
   */
  command_id: string;
}

export declare namespace Downloads {
  export { type DownloadGetParams as DownloadGetParams };
}
