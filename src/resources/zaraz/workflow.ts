// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WorkflowAPI from 'cloudflare/resources/zaraz/workflow';

export class Workflow extends APIResource {
  /**
   * Gets Zaraz workflow for a zone.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<WorkflowGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/zaraz/workflow`, options) as Core.APIPromise<{
        result: WorkflowGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Zaraz workflow
 */
export type WorkflowGetResponse = 'realtime' | 'preview';

export namespace Workflow {
  export import WorkflowGetResponse = WorkflowAPI.WorkflowGetResponse;
}
