// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ScriptsAPI from './scripts';
import { type Response } from '../../../_shims/index';

export class Content extends APIResource {
  /**
   * Put script content without touching config or metadata.
   *
   * @example
   * ```ts
   * const script = await client.workers.scripts.content.update(
   *   'this-is_my_script-01',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     metadata: {},
   *   },
   * );
   * ```
   */
  update(
    scriptName: string,
    params: ContentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.Script> {
    const {
      account_id,
      'CF-WORKER-BODY-PART': cfWorkerBodyPart,
      'CF-WORKER-MAIN-MODULE-PART': cfWorkerMainModulePart,
      ...body
    } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/workers/scripts/${scriptName}/content`,
        Core.multipartFormRequestOptions({
          body,
          ...options,
          __multipartSyntax: 'json',
          headers: {
            ...(cfWorkerBodyPart != null ? { 'CF-WORKER-BODY-PART': cfWorkerBodyPart } : undefined),
            ...(cfWorkerMainModulePart != null ?
              { 'CF-WORKER-MAIN-MODULE-PART': cfWorkerMainModulePart }
            : undefined),
            ...options?.headers,
          },
        }),
      ) as Core.APIPromise<{ result: ScriptsAPI.Script }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch script content only.
   *
   * @example
   * ```ts
   * const content = await client.workers.scripts.content.get(
   *   'this-is_my_script-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   *
   * const data = await content.blob();
   * console.log(data);
   * ```
   */
  get(
    scriptName: string,
    params: ContentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/workers/scripts/${scriptName}/content/v2`, {
      ...options,
      headers: { Accept: 'string', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface ContentUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: JSON-encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata: ContentUpdateParams.Metadata;

  /**
   * Body param: An array of modules (often JavaScript files) comprising a Worker
   * script. At least one module must be present and referenced in the metadata as
   * `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are:
   * `application/javascript+module`, `text/javascript+module`,
   * `application/javascript`, `text/javascript`, `text/x-python`,
   * `text/x-python-requirement`, `application/wasm`, `text/plain`,
   * `application/octet-stream`, `application/source-map`.
   */
  files?: Array<Core.Uploadable>;

  /**
   * Header param: The multipart name of a script upload part containing script
   * content in service worker format. Alternative to including in a metadata part.
   */
  'CF-WORKER-BODY-PART'?: string;

  /**
   * Header param: The multipart name of a script upload part containing script
   * content in es module format. Alternative to including in a metadata part.
   */
  'CF-WORKER-MAIN-MODULE-PART'?: string;
}

export namespace ContentUpdateParams {
  /**
   * JSON-encoded metadata about the uploaded parts and Worker configuration.
   */
  export interface Metadata {
    /**
     * Name of the uploaded file that contains the Worker script (e.g. the file adding
     * a listener to the `fetch` event). Indicates a `service worker syntax` Worker.
     */
    body_part?: string;

    /**
     * Name of the uploaded file that contains the main module (e.g. the file exporting
     * a `fetch` handler). Indicates a `module syntax` Worker.
     */
    main_module?: string;
  }
}

export interface ContentGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Content {
  export { type ContentUpdateParams as ContentUpdateParams, type ContentGetParams as ContentGetParams };
}
