// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WorkflowAPI from 'cloudflare/resources/zaraz/workflow';

export class Workflow extends APIResource {
  /**
   * Gets Zaraz workflow for a zone.
   */
  retrieve(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<WorkflowRetrieveResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/zaraz/workflow`, options) as Core.APIPromise<{
        result: WorkflowRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Zaraz workflow
 */
export type WorkflowRetrieveResponse = 'realtime' | 'preview';

export namespace Workflow {
  export import WorkflowRetrieveResponse = WorkflowAPI.WorkflowRetrieveResponse;
}
