// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZarazAPI from 'cloudflare/resources/zaraz/zaraz';
import * as ConfigAPI from 'cloudflare/resources/zaraz/config';
import * as DefaultAPI from 'cloudflare/resources/zaraz/default';
import * as ExportAPI from 'cloudflare/resources/zaraz/export';
import * as PublishAPI from 'cloudflare/resources/zaraz/publish';
import * as WorkflowAPI from 'cloudflare/resources/zaraz/workflow';
import * as HistoryAPI from 'cloudflare/resources/zaraz/history/history';

export class Zaraz extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  publish: PublishAPI.Publish = new PublishAPI.Publish(this._client);
  workflow: WorkflowAPI.Workflow = new WorkflowAPI.Workflow(this._client);

  /**
   * Updates Zaraz workflow for a zone.
   */
  workflowUpdate(
    zoneId: string,
    body: ZarazWorkflowUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZarazWorkflowUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/settings/zaraz/workflow`, { body, ...options }) as Core.APIPromise<{
        result: ZarazWorkflowUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Zaraz workflow
 */
export type ZarazWorkflowUpdateResponse = 'realtime' | 'preview';

export type ZarazWorkflowUpdateParams = 'realtime' | 'preview';

export namespace Zaraz {
  export import ZarazWorkflowUpdateResponse = ZarazAPI.ZarazWorkflowUpdateResponse;
  export import ZarazWorkflowUpdateParams = ZarazAPI.ZarazWorkflowUpdateParams;
  export import Config = ConfigAPI.Config;
  export import ConfigUpdateResponse = ConfigAPI.ConfigUpdateResponse;
  export import ConfigGetResponse = ConfigAPI.ConfigGetResponse;
  export import ConfigUpdateParams = ConfigAPI.ConfigUpdateParams;
  export import Default = DefaultAPI.Default;
  export import DefaultGetResponse = DefaultAPI.DefaultGetResponse;
  export import Export = ExportAPI.Export;
  export import ExportGetResponse = ExportAPI.ExportGetResponse;
  export import History = HistoryAPI.History;
  export import HistoryUpdateResponse = HistoryAPI.HistoryUpdateResponse;
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryUpdateParams = HistoryAPI.HistoryUpdateParams;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import Publish = PublishAPI.Publish;
  export import PublishCreateResponse = PublishAPI.PublishCreateResponse;
  export import PublishCreateParams = PublishAPI.PublishCreateParams;
  export import Workflow = WorkflowAPI.Workflow;
  export import WorkflowGetResponse = WorkflowAPI.WorkflowGetResponse;
}
