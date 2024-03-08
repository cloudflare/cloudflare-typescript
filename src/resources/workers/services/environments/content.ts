// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ContentAPI from 'cloudflare/resources/workers/services/environments/content';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';
import { type Uploadable, multipartFormRequestOptions } from 'cloudflare/core';

export class Content extends APIResource {
  /**
   * Put script content from a worker with an environment
   */
  update(
    serviceName: string,
    environmentName: string,
    params: ContentUpdateParams,
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
        `/accounts/${account_id}/workers/services/${serviceName}/environments/${environmentName}/content`,
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
   * Get script content from a worker with an environment
   */
  get(
    serviceName: string,
    environmentName: string,
    params: ContentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/workers/services/${serviceName}/environments/${environmentName}/content`,
      { ...options, __binaryResponse: true },
    );
  }
}

export interface ContentUpdateParams {
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
  metadata?: ContentUpdateParams.Metadata;

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

export interface ContentGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Content {
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import ContentGetParams = ContentAPI.ContentGetParams;
}
