// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LOADocuments extends APIResource {
  /**
   * Download specified LOA document under the account.
   *
   * @example
   * ```ts
   * const loaDocument =
   *   await client.addressing.loaDocuments.get(
   *     'd933b1530bc56c9953cf8ce166da8004',
   *     { account_id: '258def64c72dae45f3e4c8516e2111f2' },
   *   );
   *
   * const content = await loaDocument.blob();
   * console.log(content);
   * ```
   */
  get(
    loaDocumentID: string | null,
    params: LOADocumentGetParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/addressing/loa_documents/${loaDocumentID}/download`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }
}

export interface LOADocumentGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export declare namespace LOADocuments {
  export { type LOADocumentGetParams as LOADocumentGetParams };
}
