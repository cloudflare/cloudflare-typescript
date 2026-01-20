// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ProjectsAPI from '../projects';
import * as HistoryAPI from './history/history';
import { History } from './history/history';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Deployments extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Start a new deployment from production. The repository and account must have
   * already been authorized on the Cloudflare Pages dashboard.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.create(
   *     'this-is-my-project-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    projectName: string,
    params: DeploymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: DeploymentCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of project deployments.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deploymentListResponse of client.pages.projects.deployments.list(
   *   'this-is-my-project-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    projectName: string,
    params: DeploymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeploymentListResponsesV4PagePaginationArray, DeploymentListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pages/projects/${projectName}/deployments`,
      DeploymentListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.delete(
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    projectName: string,
    deploymentId: string,
    params: DeploymentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch information about a deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.get(
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    projectName: string,
    deploymentId: string,
    params: DeploymentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retry a previous deployment.
   *
   * @example
   * ```ts
   * const response =
   *   await client.pages.projects.deployments.retry(
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  retry(
    projectName: string,
    deploymentId: string,
    params: DeploymentRetryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentRetryResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/retry`,
        options,
      ) as Core.APIPromise<{ result: DeploymentRetryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Rollback the production deployment to a previous deployment. You can only
   * rollback to succesful builds on production.
   *
   * @example
   * ```ts
   * const response =
   *   await client.pages.projects.deployments.rollback(
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  rollback(
    projectName: string,
    deploymentId: string,
    params: DeploymentRollbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentRollbackResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/rollback`,
        options,
      ) as Core.APIPromise<{ result: DeploymentRollbackResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DeploymentListResponsesV4PagePaginationArray extends V4PagePaginationArray<DeploymentListResponse> {}

export interface DeploymentCreateResponse {
  /**
   * Id of the deployment.
   */
  id: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases: Array<string> | null;

  /**
   * Configs for the project build process.
   */
  build_config: DeploymentCreateResponse.BuildConfig;

  /**
   * When the deployment was created.
   */
  created_on: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger: DeploymentCreateResponse.DeploymentTrigger;

  /**
   * Environment variables used for builds and Pages Functions.
   */
  env_vars: {
    [key: string]:
      | DeploymentCreateResponse.PagesPlainTextEnvVar
      | null
      | DeploymentCreateResponse.PagesSecretTextEnvVar
      | null;
  } | null;

  /**
   * Type of deploy.
   */
  environment: 'preview' | 'production';

  /**
   * If the deployment has been skipped.
   */
  is_skipped: boolean;

  /**
   * The status of the deployment.
   */
  latest_stage: ProjectsAPI.Stage;

  /**
   * When the deployment was last modified.
   */
  modified_on: string;

  /**
   * Id of the project.
   */
  project_id: string;

  /**
   * Name of the project.
   */
  project_name: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id: string;

  /**
   * Configs for the project source control.
   */
  source: DeploymentCreateResponse.Source;

  /**
   * List of past stages.
   */
  stages: Array<ProjectsAPI.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url: string;

  /**
   * Whether the deployment uses functions.
   */
  uses_functions?: boolean | null;
}

export namespace DeploymentCreateResponse {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token: string | null;

    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Assets output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;
  }

  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type: 'github:push' | 'ad_hoc' | 'deploy_hook';
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch: string;

      /**
       * Whether the deployment trigger commit was dirty.
       */
      commit_dirty: boolean;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message: string;
    }
  }

  /**
   * A plaintext environment variable.
   */
  export interface PagesPlainTextEnvVar {
    type: 'plain_text';

    /**
     * Environment variable value.
     */
    value: string;
  }

  /**
   * An encrypted environment variable.
   */
  export interface PagesSecretTextEnvVar {
    type: 'secret_text';

    /**
     * Secret value.
     */
    value: string;
  }

  /**
   * Configs for the project source control.
   */
  export interface Source {
    config: Source.Config;

    /**
     * The source control management provider.
     */
    type: 'github' | 'gitlab';
  }

  export namespace Source {
    export interface Config {
      /**
       * @deprecated Use `production_deployments_enabled` and
       * `preview_deployment_setting` for more granular control.
       */
      deployments_enabled: boolean;

      /**
       * The owner of the repository.
       */
      owner: string;

      /**
       * The owner ID of the repository.
       */
      owner_id: string;

      /**
       * A list of paths that should be excluded from triggering a preview deployment.
       * Wildcard syntax (`*`) is supported.
       */
      path_excludes: Array<string>;

      /**
       * A list of paths that should be watched to trigger a preview deployment. Wildcard
       * syntax (`*`) is supported.
       */
      path_includes: Array<string>;

      /**
       * Whether to enable PR comments.
       */
      pr_comments_enabled: boolean;

      /**
       * A list of branches that should not trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_excludes: Array<string>;

      /**
       * A list of branches that should trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_includes: Array<string>;

      /**
       * Controls whether commits to preview branches trigger a preview deployment.
       */
      preview_deployment_setting: 'all' | 'none' | 'custom';

      /**
       * The production branch of the repository.
       */
      production_branch: string;

      /**
       * Whether to trigger a production deployment on commits to the production branch.
       */
      production_deployments_enabled: boolean;

      /**
       * The ID of the repository.
       */
      repo_id: string;

      /**
       * The name of the repository.
       */
      repo_name: string;
    }
  }
}

export interface DeploymentListResponse {
  /**
   * Id of the deployment.
   */
  id: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases: Array<string> | null;

  /**
   * Configs for the project build process.
   */
  build_config: DeploymentListResponse.BuildConfig;

  /**
   * When the deployment was created.
   */
  created_on: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger: DeploymentListResponse.DeploymentTrigger;

  /**
   * Environment variables used for builds and Pages Functions.
   */
  env_vars: {
    [key: string]:
      | DeploymentListResponse.PagesPlainTextEnvVar
      | null
      | DeploymentListResponse.PagesSecretTextEnvVar
      | null;
  } | null;

  /**
   * Type of deploy.
   */
  environment: 'preview' | 'production';

  /**
   * If the deployment has been skipped.
   */
  is_skipped: boolean;

  /**
   * The status of the deployment.
   */
  latest_stage: ProjectsAPI.Stage;

  /**
   * When the deployment was last modified.
   */
  modified_on: string;

  /**
   * Id of the project.
   */
  project_id: string;

  /**
   * Name of the project.
   */
  project_name: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id: string;

  /**
   * Configs for the project source control.
   */
  source: DeploymentListResponse.Source;

  /**
   * List of past stages.
   */
  stages: Array<ProjectsAPI.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url: string;

  /**
   * Whether the deployment uses functions.
   */
  uses_functions?: boolean | null;
}

export namespace DeploymentListResponse {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token: string | null;

    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Assets output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;
  }

  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type: 'github:push' | 'ad_hoc' | 'deploy_hook';
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch: string;

      /**
       * Whether the deployment trigger commit was dirty.
       */
      commit_dirty: boolean;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message: string;
    }
  }

  /**
   * A plaintext environment variable.
   */
  export interface PagesPlainTextEnvVar {
    type: 'plain_text';

    /**
     * Environment variable value.
     */
    value: string;
  }

  /**
   * An encrypted environment variable.
   */
  export interface PagesSecretTextEnvVar {
    type: 'secret_text';

    /**
     * Secret value.
     */
    value: string;
  }

  /**
   * Configs for the project source control.
   */
  export interface Source {
    config: Source.Config;

    /**
     * The source control management provider.
     */
    type: 'github' | 'gitlab';
  }

  export namespace Source {
    export interface Config {
      /**
       * @deprecated Use `production_deployments_enabled` and
       * `preview_deployment_setting` for more granular control.
       */
      deployments_enabled: boolean;

      /**
       * The owner of the repository.
       */
      owner: string;

      /**
       * The owner ID of the repository.
       */
      owner_id: string;

      /**
       * A list of paths that should be excluded from triggering a preview deployment.
       * Wildcard syntax (`*`) is supported.
       */
      path_excludes: Array<string>;

      /**
       * A list of paths that should be watched to trigger a preview deployment. Wildcard
       * syntax (`*`) is supported.
       */
      path_includes: Array<string>;

      /**
       * Whether to enable PR comments.
       */
      pr_comments_enabled: boolean;

      /**
       * A list of branches that should not trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_excludes: Array<string>;

      /**
       * A list of branches that should trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_includes: Array<string>;

      /**
       * Controls whether commits to preview branches trigger a preview deployment.
       */
      preview_deployment_setting: 'all' | 'none' | 'custom';

      /**
       * The production branch of the repository.
       */
      production_branch: string;

      /**
       * Whether to trigger a production deployment on commits to the production branch.
       */
      production_deployments_enabled: boolean;

      /**
       * The ID of the repository.
       */
      repo_id: string;

      /**
       * The name of the repository.
       */
      repo_name: string;
    }
  }
}

export type DeploymentDeleteResponse = unknown;

export interface DeploymentGetResponse {
  /**
   * Id of the deployment.
   */
  id: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases: Array<string> | null;

  /**
   * Configs for the project build process.
   */
  build_config: DeploymentGetResponse.BuildConfig;

  /**
   * When the deployment was created.
   */
  created_on: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger: DeploymentGetResponse.DeploymentTrigger;

  /**
   * Environment variables used for builds and Pages Functions.
   */
  env_vars: {
    [key: string]:
      | DeploymentGetResponse.PagesPlainTextEnvVar
      | null
      | DeploymentGetResponse.PagesSecretTextEnvVar
      | null;
  } | null;

  /**
   * Type of deploy.
   */
  environment: 'preview' | 'production';

  /**
   * If the deployment has been skipped.
   */
  is_skipped: boolean;

  /**
   * The status of the deployment.
   */
  latest_stage: ProjectsAPI.Stage;

  /**
   * When the deployment was last modified.
   */
  modified_on: string;

  /**
   * Id of the project.
   */
  project_id: string;

  /**
   * Name of the project.
   */
  project_name: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id: string;

  /**
   * Configs for the project source control.
   */
  source: DeploymentGetResponse.Source;

  /**
   * List of past stages.
   */
  stages: Array<ProjectsAPI.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url: string;

  /**
   * Whether the deployment uses functions.
   */
  uses_functions?: boolean | null;
}

export namespace DeploymentGetResponse {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token: string | null;

    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Assets output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;
  }

  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type: 'github:push' | 'ad_hoc' | 'deploy_hook';
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch: string;

      /**
       * Whether the deployment trigger commit was dirty.
       */
      commit_dirty: boolean;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message: string;
    }
  }

  /**
   * A plaintext environment variable.
   */
  export interface PagesPlainTextEnvVar {
    type: 'plain_text';

    /**
     * Environment variable value.
     */
    value: string;
  }

  /**
   * An encrypted environment variable.
   */
  export interface PagesSecretTextEnvVar {
    type: 'secret_text';

    /**
     * Secret value.
     */
    value: string;
  }

  /**
   * Configs for the project source control.
   */
  export interface Source {
    config: Source.Config;

    /**
     * The source control management provider.
     */
    type: 'github' | 'gitlab';
  }

  export namespace Source {
    export interface Config {
      /**
       * @deprecated Use `production_deployments_enabled` and
       * `preview_deployment_setting` for more granular control.
       */
      deployments_enabled: boolean;

      /**
       * The owner of the repository.
       */
      owner: string;

      /**
       * The owner ID of the repository.
       */
      owner_id: string;

      /**
       * A list of paths that should be excluded from triggering a preview deployment.
       * Wildcard syntax (`*`) is supported.
       */
      path_excludes: Array<string>;

      /**
       * A list of paths that should be watched to trigger a preview deployment. Wildcard
       * syntax (`*`) is supported.
       */
      path_includes: Array<string>;

      /**
       * Whether to enable PR comments.
       */
      pr_comments_enabled: boolean;

      /**
       * A list of branches that should not trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_excludes: Array<string>;

      /**
       * A list of branches that should trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_includes: Array<string>;

      /**
       * Controls whether commits to preview branches trigger a preview deployment.
       */
      preview_deployment_setting: 'all' | 'none' | 'custom';

      /**
       * The production branch of the repository.
       */
      production_branch: string;

      /**
       * Whether to trigger a production deployment on commits to the production branch.
       */
      production_deployments_enabled: boolean;

      /**
       * The ID of the repository.
       */
      repo_id: string;

      /**
       * The name of the repository.
       */
      repo_name: string;
    }
  }
}

export interface DeploymentRetryResponse {
  /**
   * Id of the deployment.
   */
  id: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases: Array<string> | null;

  /**
   * Configs for the project build process.
   */
  build_config: DeploymentRetryResponse.BuildConfig;

  /**
   * When the deployment was created.
   */
  created_on: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger: DeploymentRetryResponse.DeploymentTrigger;

  /**
   * Environment variables used for builds and Pages Functions.
   */
  env_vars: {
    [key: string]:
      | DeploymentRetryResponse.PagesPlainTextEnvVar
      | null
      | DeploymentRetryResponse.PagesSecretTextEnvVar
      | null;
  } | null;

  /**
   * Type of deploy.
   */
  environment: 'preview' | 'production';

  /**
   * If the deployment has been skipped.
   */
  is_skipped: boolean;

  /**
   * The status of the deployment.
   */
  latest_stage: ProjectsAPI.Stage;

  /**
   * When the deployment was last modified.
   */
  modified_on: string;

  /**
   * Id of the project.
   */
  project_id: string;

  /**
   * Name of the project.
   */
  project_name: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id: string;

  /**
   * Configs for the project source control.
   */
  source: DeploymentRetryResponse.Source;

  /**
   * List of past stages.
   */
  stages: Array<ProjectsAPI.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url: string;

  /**
   * Whether the deployment uses functions.
   */
  uses_functions?: boolean | null;
}

export namespace DeploymentRetryResponse {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token: string | null;

    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Assets output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;
  }

  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type: 'github:push' | 'ad_hoc' | 'deploy_hook';
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch: string;

      /**
       * Whether the deployment trigger commit was dirty.
       */
      commit_dirty: boolean;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message: string;
    }
  }

  /**
   * A plaintext environment variable.
   */
  export interface PagesPlainTextEnvVar {
    type: 'plain_text';

    /**
     * Environment variable value.
     */
    value: string;
  }

  /**
   * An encrypted environment variable.
   */
  export interface PagesSecretTextEnvVar {
    type: 'secret_text';

    /**
     * Secret value.
     */
    value: string;
  }

  /**
   * Configs for the project source control.
   */
  export interface Source {
    config: Source.Config;

    /**
     * The source control management provider.
     */
    type: 'github' | 'gitlab';
  }

  export namespace Source {
    export interface Config {
      /**
       * @deprecated Use `production_deployments_enabled` and
       * `preview_deployment_setting` for more granular control.
       */
      deployments_enabled: boolean;

      /**
       * The owner of the repository.
       */
      owner: string;

      /**
       * The owner ID of the repository.
       */
      owner_id: string;

      /**
       * A list of paths that should be excluded from triggering a preview deployment.
       * Wildcard syntax (`*`) is supported.
       */
      path_excludes: Array<string>;

      /**
       * A list of paths that should be watched to trigger a preview deployment. Wildcard
       * syntax (`*`) is supported.
       */
      path_includes: Array<string>;

      /**
       * Whether to enable PR comments.
       */
      pr_comments_enabled: boolean;

      /**
       * A list of branches that should not trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_excludes: Array<string>;

      /**
       * A list of branches that should trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_includes: Array<string>;

      /**
       * Controls whether commits to preview branches trigger a preview deployment.
       */
      preview_deployment_setting: 'all' | 'none' | 'custom';

      /**
       * The production branch of the repository.
       */
      production_branch: string;

      /**
       * Whether to trigger a production deployment on commits to the production branch.
       */
      production_deployments_enabled: boolean;

      /**
       * The ID of the repository.
       */
      repo_id: string;

      /**
       * The name of the repository.
       */
      repo_name: string;
    }
  }
}

export interface DeploymentRollbackResponse {
  /**
   * Id of the deployment.
   */
  id: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases: Array<string> | null;

  /**
   * Configs for the project build process.
   */
  build_config: DeploymentRollbackResponse.BuildConfig;

  /**
   * When the deployment was created.
   */
  created_on: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger: DeploymentRollbackResponse.DeploymentTrigger;

  /**
   * Environment variables used for builds and Pages Functions.
   */
  env_vars: {
    [key: string]:
      | DeploymentRollbackResponse.PagesPlainTextEnvVar
      | null
      | DeploymentRollbackResponse.PagesSecretTextEnvVar
      | null;
  } | null;

  /**
   * Type of deploy.
   */
  environment: 'preview' | 'production';

  /**
   * If the deployment has been skipped.
   */
  is_skipped: boolean;

  /**
   * The status of the deployment.
   */
  latest_stage: ProjectsAPI.Stage;

  /**
   * When the deployment was last modified.
   */
  modified_on: string;

  /**
   * Id of the project.
   */
  project_id: string;

  /**
   * Name of the project.
   */
  project_name: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id: string;

  /**
   * Configs for the project source control.
   */
  source: DeploymentRollbackResponse.Source;

  /**
   * List of past stages.
   */
  stages: Array<ProjectsAPI.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url: string;

  /**
   * Whether the deployment uses functions.
   */
  uses_functions?: boolean | null;
}

export namespace DeploymentRollbackResponse {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token: string | null;

    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Assets output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;
  }

  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type: 'github:push' | 'ad_hoc' | 'deploy_hook';
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch: string;

      /**
       * Whether the deployment trigger commit was dirty.
       */
      commit_dirty: boolean;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message: string;
    }
  }

  /**
   * A plaintext environment variable.
   */
  export interface PagesPlainTextEnvVar {
    type: 'plain_text';

    /**
     * Environment variable value.
     */
    value: string;
  }

  /**
   * An encrypted environment variable.
   */
  export interface PagesSecretTextEnvVar {
    type: 'secret_text';

    /**
     * Secret value.
     */
    value: string;
  }

  /**
   * Configs for the project source control.
   */
  export interface Source {
    config: Source.Config;

    /**
     * The source control management provider.
     */
    type: 'github' | 'gitlab';
  }

  export namespace Source {
    export interface Config {
      /**
       * @deprecated Use `production_deployments_enabled` and
       * `preview_deployment_setting` for more granular control.
       */
      deployments_enabled: boolean;

      /**
       * The owner of the repository.
       */
      owner: string;

      /**
       * The owner ID of the repository.
       */
      owner_id: string;

      /**
       * A list of paths that should be excluded from triggering a preview deployment.
       * Wildcard syntax (`*`) is supported.
       */
      path_excludes: Array<string>;

      /**
       * A list of paths that should be watched to trigger a preview deployment. Wildcard
       * syntax (`*`) is supported.
       */
      path_includes: Array<string>;

      /**
       * Whether to enable PR comments.
       */
      pr_comments_enabled: boolean;

      /**
       * A list of branches that should not trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_excludes: Array<string>;

      /**
       * A list of branches that should trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_includes: Array<string>;

      /**
       * Controls whether commits to preview branches trigger a preview deployment.
       */
      preview_deployment_setting: 'all' | 'none' | 'custom';

      /**
       * The production branch of the repository.
       */
      production_branch: string;

      /**
       * Whether to trigger a production deployment on commits to the production branch.
       */
      production_deployments_enabled: boolean;

      /**
       * The ID of the repository.
       */
      repo_id: string;

      /**
       * The name of the repository.
       */
      repo_name: string;
    }
  }
}

export interface DeploymentCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Headers configuration file for the deployment.
   */
  _headers?: Core.Uploadable;

  /**
   * Body param: Redirects configuration file for the deployment.
   */
  _redirects?: Core.Uploadable;

  /**
   * Body param: Routes configuration file defining routing rules.
   */
  '_routes.json'?: Core.Uploadable;

  /**
   * Body param: Worker bundle file in multipart/form-data format. Mutually exclusive
   * with `_worker.js`. Cannot specify both `_worker.js` and `_worker.bundle` in the
   * same request. Maximum size: 25 MiB.
   */
  '_worker.bundle'?: Core.Uploadable;

  /**
   * Body param: Worker JavaScript file. Mutually exclusive with `_worker.bundle`.
   * Cannot specify both `_worker.js` and `_worker.bundle` in the same request.
   */
  '_worker.js'?: Core.Uploadable;

  /**
   * Body param: The branch to build the new deployment from. The `HEAD` of the
   * branch will be used. If omitted, the production branch will be used by default.
   */
  branch?: string;

  /**
   * Body param: Boolean string indicating if the working directory has uncommitted
   * changes.
   */
  commit_dirty?: 'true' | 'false';

  /**
   * Body param: Git commit SHA associated with this deployment.
   */
  commit_hash?: string;

  /**
   * Body param: Git commit message associated with this deployment.
   */
  commit_message?: string;

  /**
   * Body param: Functions routing configuration file.
   */
  'functions-filepath-routing-config.json'?: Core.Uploadable;

  /**
   * Body param: JSON string containing a manifest of files to deploy. Maps file
   * paths to their content hashes. Required for direct upload deployments. Maximum
   * 20,000 entries.
   */
  manifest?: string;

  /**
   * Body param: The build output directory path.
   */
  pages_build_output_dir?: string;

  /**
   * Body param: Hash of the Wrangler configuration file used for this deployment.
   */
  wrangler_config_hash?: string;
}

export interface DeploymentListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: What type of deployments to fetch.
   */
  env?: 'production' | 'preview';
}

export interface DeploymentDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DeploymentGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DeploymentRetryParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DeploymentRollbackParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Deployments.DeploymentListResponsesV4PagePaginationArray = DeploymentListResponsesV4PagePaginationArray;
Deployments.History = History;

export declare namespace Deployments {
  export {
    type DeploymentCreateResponse as DeploymentCreateResponse,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentGetResponse as DeploymentGetResponse,
    type DeploymentRetryResponse as DeploymentRetryResponse,
    type DeploymentRollbackResponse as DeploymentRollbackResponse,
    DeploymentListResponsesV4PagePaginationArray as DeploymentListResponsesV4PagePaginationArray,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
    type DeploymentGetParams as DeploymentGetParams,
    type DeploymentRetryParams as DeploymentRetryParams,
    type DeploymentRollbackParams as DeploymentRollbackParams,
  };

  export { History as History };
}
