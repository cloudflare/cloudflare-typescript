// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WorkflowResource extends APIResource {
  /**
   * Gets Zaraz workflow for a zone.
   */
  get(params: WorkflowGetParams, options?: RequestOptions): APIPromise<Workflow> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/settings/zaraz/workflow`, options) as APIPromise<{
        result: Workflow;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Zaraz workflow
 */
export type Workflow = 'realtime' | 'preview';

/**
 * Zaraz workflow
 */
export type WorkflowParam = 'realtime' | 'preview';

export interface WorkflowGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace WorkflowResource {
  export { type Workflow as Workflow, type WorkflowGetParams as WorkflowGetParams };
}
