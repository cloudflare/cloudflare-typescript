// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ContentScriptsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/content/scripts';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';
import { type Uploadable, multipartFormRequestOptions } from 'cloudflare/core';

export class Scripts extends APIResource {
  /**
   * Put script content for a script uploaded to a Workers for Platforms namespace.
   */
  update(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.WorkersScript> {
    const {
      account_id,
      'CF-WORKER-BODY-PART': cfWorkerBodyPart,
      'CF-WORKER-MAIN-MODULE-PART': cfWorkerMainModulePart,
      ...body
    } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/content`,
        multipartFormRequestOptions({
          body,
          ...options,
          headers: {
            'CF-WORKER-BODY-PART': cfWorkerBodyPart || '',
            'CF-WORKER-MAIN-MODULE-PART': cfWorkerMainModulePart || '',
            ...options?.headers,
          },
        }),
      ) as Core.APIPromise<{ result: ScriptsAPI.WorkersScript }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch script content from a script uploaded to a Workers for Platforms
   * namespace.
   */
  get(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/content`,
      { ...options, __binaryResponse: true },
    );
  }
}

export interface ScriptUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A module comprising a Worker script, often a javascript file.
   * Multiple modules may be provided as separate named parts, but at least one
   * module must be present. This should be referenced either in the metadata as
   * `main_module` (esm)/`body_part` (service worker) or as a header
   * `CF-WORKER-MAIN-MODULE-PART` (esm) /`CF-WORKER-BODY-PART` (service worker) by
   * part name.
   */
  '<any part name>'?: Array<Uploadable>;

  /**
   * Body param: JSON encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata?: ScriptUpdateParams.Metadata;

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

export namespace ScriptUpdateParams {
  /**
   * JSON encoded metadata about the uploaded parts and Worker configuration.
   */
  export interface Metadata {
    /**
     * Name of the part in the multipart request that contains the script (e.g. the
     * file adding a listener to the `fetch` event). Indicates a
     * `service worker syntax` Worker.
     */
    body_part?: string;

    /**
     * Name of the part in the multipart request that contains the main module (e.g.
     * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
     */
    main_module?: string;
  }
}

export interface ScriptGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Scripts {
  export import ScriptUpdateParams = ContentScriptsAPI.ScriptUpdateParams;
  export import ScriptGetParams = ContentScriptsAPI.ScriptGetParams;
}
