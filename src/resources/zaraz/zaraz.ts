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
  replace(
    zoneId: string,
    body: ZarazReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZarazReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/settings/zaraz/workflow`, { body, ...options }) as Core.APIPromise<{
        result: ZarazReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Zaraz workflow
 */
export type ZarazReplaceResponse = 'realtime' | 'preview';

export type ZarazReplaceParams = 'realtime' | 'preview';

export namespace Zaraz {
  export import ZarazReplaceResponse = ZarazAPI.ZarazReplaceResponse;
  export import ZarazReplaceParams = ZarazAPI.ZarazReplaceParams;
  export import Config = ConfigAPI.Config;
  export import ConfigGetResponse = ConfigAPI.ConfigGetResponse;
  export import ConfigReplaceResponse = ConfigAPI.ConfigReplaceResponse;
  export import ConfigReplaceParams = ConfigAPI.ConfigReplaceParams;
  export import Default = DefaultAPI.Default;
  export import DefaultGetResponse = DefaultAPI.DefaultGetResponse;
  export import Export = ExportAPI.Export;
  export import ExportGetResponse = ExportAPI.ExportGetResponse;
  export import History = HistoryAPI.History;
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryReplaceResponse = HistoryAPI.HistoryReplaceResponse;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import HistoryReplaceParams = HistoryAPI.HistoryReplaceParams;
  export import Publish = PublishAPI.Publish;
  export import PublishCreateResponse = PublishAPI.PublishCreateResponse;
  export import PublishCreateParams = PublishAPI.PublishCreateParams;
  export import Workflow = WorkflowAPI.Workflow;
  export import WorkflowGetResponse = WorkflowAPI.WorkflowGetResponse;
}
