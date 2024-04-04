// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/pages/projects/deployments/history/logs';
import * as Shared from 'cloudflare/resources/shared';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   */
  get(
    projectName: string,
    deploymentId: string,
    params: LogGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/history/logs`,
        options,
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LogGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Logs {
  export import LogGetParams = LogsAPI.LogGetParams;
}
