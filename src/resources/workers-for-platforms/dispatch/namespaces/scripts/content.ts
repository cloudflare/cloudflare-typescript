// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as WorkersAPI from '../../../../workers/workers';
import * as ScriptsAPI from '../../../../workers/scripts/scripts';
import { APIPromise } from '../../../../../core/api-promise';
import { type Uploadable } from '../../../../../core/uploads';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../../internal/uploads';
import { path } from '../../../../../internal/utils/path';

export class Content extends APIResource {
  /**
   * Put script content for a script uploaded to a Workers for Platforms namespace.
   */
  update(
    scriptName: string,
    params: ContentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScriptsAPI.Script> {
    const {
      account_id,
      dispatch_namespace,
      'CF-WORKER-BODY-PART': cfWorkerBodyPart,
      'CF-WORKER-MAIN-MODULE-PART': cfWorkerMainModulePart,
      ...body
    } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/content`,
        multipartFormRequestOptions(
          {
            body,
            ...options,
            headers: buildHeaders([
              {
                ...(cfWorkerBodyPart != null ? { 'CF-WORKER-BODY-PART': cfWorkerBodyPart } : undefined),
                ...(cfWorkerMainModulePart != null ?
                  { 'CF-WORKER-MAIN-MODULE-PART': cfWorkerMainModulePart }
                : undefined),
              },
              options?.headers,
            ]),
          },
          this._client,
        ),
      ) as APIPromise<{ result: ScriptsAPI.Script }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch script content from a script uploaded to a Workers for Platforms
   * namespace.
   */
  get(scriptName: string, params: ContentGetParams, options?: RequestOptions): APIPromise<Response> {
    const { account_id, dispatch_namespace } = params;
    return this._client.get(
      path`/accounts/${account_id}/workers/dispatch/namespaces/${dispatch_namespace}/scripts/${scriptName}/content`,
      { ...options, headers: buildHeaders([{ Accept: 'string' }, options?.headers]), __binaryResponse: true },
    );
  }
}

export interface ContentUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;

  /**
   * Body param: JSON encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata: WorkersAPI.WorkerMetadataParam;

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

  [k: string]: Array<Uploadable> | string | WorkersAPI.WorkerMetadataParam | undefined;
}

export interface ContentGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace: string;
}

export declare namespace Content {
  export { type ContentUpdateParams as ContentUpdateParams, type ContentGetParams as ContentGetParams };
}
