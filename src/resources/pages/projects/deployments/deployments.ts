// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DeploymentsAPI from 'cloudflare/resources/pages/projects/deployments/deployments';
import * as RetriesAPI from 'cloudflare/resources/pages/projects/deployments/retries';
import * as RollbacksAPI from 'cloudflare/resources/pages/projects/deployments/rollbacks';
import * as HistoriesAPI from 'cloudflare/resources/pages/projects/deployments/histories/histories';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Deployments extends APIResource {
  histories: HistoriesAPI.Histories = new HistoriesAPI.Histories(this._client);
  retries: RetriesAPI.Retries = new RetriesAPI.Retries(this._client);
  rollbacks: RollbacksAPI.Rollbacks = new RollbacksAPI.Rollbacks(this._client);

  /**
   * Start a new deployment from production. The repository and account must have
   * already been authorized on the Cloudflare Pages dashboard.
   */
  create(
    accountId: string,
    projectName: string,
    body: DeploymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/pages/projects/${projectName}/deployments`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: DeploymentCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of project deployments.
   */
  list(
    accountId: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/pages/projects/${projectName}/deployments`,
        options,
      ) as Core.APIPromise<{ result: DeploymentListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a deployment.
   */
  delete(
    accountId: string,
    projectName: string,
    deploymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(
      `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}`,
      options,
    );
  }

  /**
   * Fetch information about a deployment.
   */
  get(
    accountId: string,
    projectName: string,
    deploymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DeploymentCreateResponse {
  /**
   * Id of the deployment.
   */
  id?: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases?: Array<unknown> | null;

  build_config?: unknown;

  /**
   * When the deployment was created.
   */
  created_on?: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger?: DeploymentCreateResponse.DeploymentTrigger;

  /**
   * A dict of env variables to build this deploy.
   */
  env_vars?: unknown;

  /**
   * Type of deploy.
   */
  environment?: string;

  /**
   * If the deployment has been skipped.
   */
  is_skipped?: boolean;

  latest_stage?: unknown;

  /**
   * When the deployment was last modified.
   */
  modified_on?: string;

  /**
   * Id of the project.
   */
  project_id?: string;

  /**
   * Name of the project.
   */
  project_name?: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id?: string;

  source?: unknown;

  /**
   * List of past stages.
   */
  stages?: Array<DeploymentCreateResponse.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url?: string;
}

export namespace DeploymentCreateResponse {
  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata?: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type?: string;
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch?: string;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash?: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message?: string;
    }
  }

  /**
   * The status of the deployment.
   */
  export interface Stage {
    /**
     * When the stage ended.
     */
    ended_on?: string | null;

    /**
     * The current build stage.
     */
    name?: string;

    /**
     * When the stage started.
     */
    started_on?: string | null;

    /**
     * State of the current stage.
     */
    status?: string;
  }
}

export type DeploymentListResponse = Array<DeploymentListResponse.DeploymentListResponseItem>;

export namespace DeploymentListResponse {
  export interface DeploymentListResponseItem {
    /**
     * Id of the deployment.
     */
    id?: string;

    /**
     * A list of alias URLs pointing to this deployment.
     */
    aliases?: Array<unknown> | null;

    build_config?: unknown;

    /**
     * When the deployment was created.
     */
    created_on?: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger?: DeploymentListResponseItem.DeploymentTrigger;

    /**
     * A dict of env variables to build this deploy.
     */
    env_vars?: unknown;

    /**
     * Type of deploy.
     */
    environment?: string;

    /**
     * If the deployment has been skipped.
     */
    is_skipped?: boolean;

    latest_stage?: unknown;

    /**
     * When the deployment was last modified.
     */
    modified_on?: string;

    /**
     * Id of the project.
     */
    project_id?: string;

    /**
     * Name of the project.
     */
    project_name?: string;

    /**
     * Short Id (8 character) of the deployment.
     */
    short_id?: string;

    source?: unknown;

    /**
     * List of past stages.
     */
    stages?: Array<DeploymentListResponseItem.Stage>;

    /**
     * The live URL to view this deployment.
     */
    url?: string;
  }

  export namespace DeploymentListResponseItem {
    /**
     * Info about what caused the deployment.
     */
    export interface DeploymentTrigger {
      /**
       * Additional info about the trigger.
       */
      metadata?: DeploymentTrigger.Metadata;

      /**
       * What caused the deployment.
       */
      type?: string;
    }

    export namespace DeploymentTrigger {
      /**
       * Additional info about the trigger.
       */
      export interface Metadata {
        /**
         * Where the trigger happened.
         */
        branch?: string;

        /**
         * Hash of the deployment trigger commit.
         */
        commit_hash?: string;

        /**
         * Message of the deployment trigger commit.
         */
        commit_message?: string;
      }
    }

    /**
     * The status of the deployment.
     */
    export interface Stage {
      /**
       * When the stage ended.
       */
      ended_on?: string | null;

      /**
       * The current build stage.
       */
      name?: string;

      /**
       * When the stage started.
       */
      started_on?: string | null;

      /**
       * State of the current stage.
       */
      status?: string;
    }
  }
}

export type DeploymentDeleteResponse = unknown;

export interface DeploymentGetResponse {
  /**
   * Id of the deployment.
   */
  id?: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases?: Array<unknown> | null;

  build_config?: unknown;

  /**
   * When the deployment was created.
   */
  created_on?: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger?: DeploymentGetResponse.DeploymentTrigger;

  /**
   * A dict of env variables to build this deploy.
   */
  env_vars?: unknown;

  /**
   * Type of deploy.
   */
  environment?: string;

  /**
   * If the deployment has been skipped.
   */
  is_skipped?: boolean;

  latest_stage?: unknown;

  /**
   * When the deployment was last modified.
   */
  modified_on?: string;

  /**
   * Id of the project.
   */
  project_id?: string;

  /**
   * Name of the project.
   */
  project_name?: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id?: string;

  source?: unknown;

  /**
   * List of past stages.
   */
  stages?: Array<DeploymentGetResponse.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url?: string;
}

export namespace DeploymentGetResponse {
  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata?: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type?: string;
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch?: string;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash?: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message?: string;
    }
  }

  /**
   * The status of the deployment.
   */
  export interface Stage {
    /**
     * When the stage ended.
     */
    ended_on?: string | null;

    /**
     * The current build stage.
     */
    name?: string;

    /**
     * When the stage started.
     */
    started_on?: string | null;

    /**
     * State of the current stage.
     */
    status?: string;
  }
}

export interface DeploymentCreateParams {
  /**
   * The branch to build the new deployment from. The `HEAD` of the branch will be
   * used. If omitted, the production branch will be used by default.
   */
  branch?: string;
}

export namespace Deployments {
  export import DeploymentCreateResponse = DeploymentsAPI.DeploymentCreateResponse;
  export import DeploymentListResponse = DeploymentsAPI.DeploymentListResponse;
  export import DeploymentDeleteResponse = DeploymentsAPI.DeploymentDeleteResponse;
  export import DeploymentGetResponse = DeploymentsAPI.DeploymentGetResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import Histories = HistoriesAPI.Histories;
  export import Retries = RetriesAPI.Retries;
  export import RetryPagesDeploymentRetryDeploymentResponse = RetriesAPI.RetryPagesDeploymentRetryDeploymentResponse;
  export import Rollbacks = RollbacksAPI.Rollbacks;
  export import RollbackPagesDeploymentRollbackDeploymentResponse = RollbacksAPI.RollbackPagesDeploymentRollbackDeploymentResponse;
}
