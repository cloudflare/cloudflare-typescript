// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

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
    loaDocumentId: string | null,
    params: LOADocumentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/addressing/loa_documents/${loaDocumentId}/download`, {
      ...options,
      headers: { Accept: 'application/pdf', ...options?.headers },
      __binaryResponse: true,
    });
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
