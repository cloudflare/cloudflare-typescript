// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Downloads extends APIResource {
  /**
   * Downloads artifacts for an executed command. Bulk downloads are not supported
   *
   * @example
   * ```ts
   * const download =
   *   await client.zeroTrust.dex.commands.downloads.get(
   *     'filename',
   *     {
   *       account_id: '01a7362d577a6c3019a474fd6f485823',
   *       command_id: '5758fefe-ae7e-4538-a39b-1fef6abcb909',
   *     },
   *   );
   *
   * const content = await download.blob();
   * console.log(content);
   * ```
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
