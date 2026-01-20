// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProjectsAPI from './projects';
import * as DomainsAPI from './domains';
import {
  DomainCreateParams,
  DomainCreateResponse,
  DomainDeleteParams,
  DomainDeleteResponse,
  DomainEditParams,
  DomainEditResponse,
  DomainGetParams,
  DomainGetResponse,
  DomainListParams,
  DomainListResponse,
  DomainListResponsesSinglePage,
  Domains,
} from './domains';
import * as DeploymentsAPI from './deployments/deployments';
import {
  DeploymentCreateParams,
  DeploymentCreateResponse,
  DeploymentDeleteParams,
  DeploymentDeleteResponse,
  DeploymentGetParams,
  DeploymentGetResponse,
  DeploymentListParams,
  DeploymentListResponse,
  DeploymentListResponsesV4PagePaginationArray,
  DeploymentRetryParams,
  DeploymentRetryResponse,
  DeploymentRollbackParams,
  DeploymentRollbackResponse,
  Deployments,
} from './deployments/deployments';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Projects extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Create a new project.
   *
   * @example
   * ```ts
   * const project = await client.pages.projects.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'my-pages-app',
   *   production_branch: 'main',
   * });
   * ```
   */
  create(params: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProjectCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pages/projects`, { body, ...options }) as Core.APIPromise<{
        result: ProjectCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all user projects.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const projectListResponse of client.pages.projects.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectListResponsesV4PagePaginationArray, ProjectListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pages/projects`,
      ProjectListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a project by name.
   *
   * @example
   * ```ts
   * const project = await client.pages.projects.delete(
   *   'this-is-my-project-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    projectName: string,
    params: ProjectDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/pages/projects/${projectName}`,
        options,
      ) as Core.APIPromise<{ result: ProjectDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Set new attributes for an existing project. Modify environment variables. To
   * delete an environment variable, set the key to null.
   *
   * @example
   * ```ts
   * const response = await client.pages.projects.edit(
   *   'this-is-my-project-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  edit(
    projectName: string,
    params: ProjectEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/pages/projects/${projectName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProjectEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a project by name.
   *
   * @example
   * ```ts
   * const project = await client.pages.projects.get(
   *   'this-is-my-project-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    projectName: string,
    params: ProjectGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pages/projects/${projectName}`, options) as Core.APIPromise<{
        result: ProjectGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Purge all cached build artifacts for a Pages project
   *
   * @example
   * ```ts
   * const response =
   *   await client.pages.projects.purgeBuildCache(
   *     'this-is-my-project-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  purgeBuildCache(
    projectName: string,
    params: ProjectPurgeBuildCacheParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectPurgeBuildCacheResponse | null> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/purge_build_cache`,
        options,
      ) as Core.APIPromise<{ result: ProjectPurgeBuildCacheResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ProjectListResponsesV4PagePaginationArray extends V4PagePaginationArray<ProjectListResponse> {}

export interface Deployment {
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
  build_config: Deployment.BuildConfig;

  /**
   * When the deployment was created.
   */
  created_on: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger: Deployment.DeploymentTrigger;

  /**
   * Environment variables used for builds and Pages Functions.
   */
  env_vars: {
    [key: string]: Deployment.PagesPlainTextEnvVar | null | Deployment.PagesSecretTextEnvVar | null;
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
  latest_stage: Stage;

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
  source: Deployment.Source;

  /**
   * List of past stages.
   */
  stages: Array<Stage>;

  /**
   * The live URL to view this deployment.
   */
  url: string;

  /**
   * Whether the deployment uses functions.
   */
  uses_functions?: boolean | null;
}

export namespace Deployment {
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

export interface Project {
  /**
   * ID of the project.
   */
  id: string;

  /**
   * Most recent production deployment of the project.
   */
  canonical_deployment: Project.CanonicalDeployment | null;

  /**
   * When the project was created.
   */
  created_on: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs: Project.DeploymentConfigs;

  /**
   * Framework the project is using.
   */
  framework: string;

  /**
   * Version of the framework the project is using.
   */
  framework_version: string;

  /**
   * Most recent deployment of the project.
   */
  latest_deployment: Project.LatestDeployment | null;

  /**
   * Name of the project.
   */
  name: string;

  /**
   * Name of the preview script.
   */
  preview_script_name: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch: string;

  /**
   * Name of the production script.
   */
  production_script_name: string;

  /**
   * Whether the project uses functions.
   */
  uses_functions: boolean | null;

  /**
   * Configs for the project build process.
   */
  build_config?: Project.BuildConfig;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<string>;

  /**
   * Configs for the project source control.
   */
  source?: Project.Source;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
}

export namespace Project {
  /**
   * Most recent production deployment of the project.
   */
  export interface CanonicalDeployment {
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
    build_config: CanonicalDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: CanonicalDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | CanonicalDeployment.PagesPlainTextEnvVar
        | null
        | CanonicalDeployment.PagesSecretTextEnvVar
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
    source: CanonicalDeployment.Source;

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

  export namespace CanonicalDeployment {
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

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Preview {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Production {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }
  }

  /**
   * Most recent deployment of the project.
   */
  export interface LatestDeployment {
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
    build_config: LatestDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: LatestDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | LatestDeployment.PagesPlainTextEnvVar
        | null
        | LatestDeployment.PagesSecretTextEnvVar
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
    source: LatestDeployment.Source;

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

  export namespace LatestDeployment {
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

/**
 * The status of the deployment.
 */
export interface Stage {
  /**
   * When the stage ended.
   */
  ended_on: string | null;

  /**
   * The current build stage.
   */
  name: 'queued' | 'initialize' | 'clone_repo' | 'build' | 'deploy';

  /**
   * When the stage started.
   */
  started_on: string | null;

  /**
   * State of the current stage.
   */
  status: 'success' | 'idle' | 'active' | 'failure' | 'canceled';
}

export interface ProjectCreateResponse {
  /**
   * ID of the project.
   */
  id: string;

  /**
   * Most recent production deployment of the project.
   */
  canonical_deployment: ProjectCreateResponse.CanonicalDeployment | null;

  /**
   * When the project was created.
   */
  created_on: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs: ProjectCreateResponse.DeploymentConfigs;

  /**
   * Framework the project is using.
   */
  framework: string;

  /**
   * Version of the framework the project is using.
   */
  framework_version: string;

  /**
   * Most recent deployment of the project.
   */
  latest_deployment: ProjectCreateResponse.LatestDeployment | null;

  /**
   * Name of the project.
   */
  name: string;

  /**
   * Name of the preview script.
   */
  preview_script_name: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch: string;

  /**
   * Name of the production script.
   */
  production_script_name: string;

  /**
   * Whether the project uses functions.
   */
  uses_functions: boolean | null;

  /**
   * Configs for the project build process.
   */
  build_config?: ProjectCreateResponse.BuildConfig;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<string>;

  /**
   * Configs for the project source control.
   */
  source?: ProjectCreateResponse.Source;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
}

export namespace ProjectCreateResponse {
  /**
   * Most recent production deployment of the project.
   */
  export interface CanonicalDeployment {
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
    build_config: CanonicalDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: CanonicalDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | CanonicalDeployment.PagesPlainTextEnvVar
        | null
        | CanonicalDeployment.PagesSecretTextEnvVar
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
    source: CanonicalDeployment.Source;

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

  export namespace CanonicalDeployment {
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

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Preview {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Production {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }
  }

  /**
   * Most recent deployment of the project.
   */
  export interface LatestDeployment {
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
    build_config: LatestDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: LatestDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | LatestDeployment.PagesPlainTextEnvVar
        | null
        | LatestDeployment.PagesSecretTextEnvVar
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
    source: LatestDeployment.Source;

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

  export namespace LatestDeployment {
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

export interface ProjectListResponse {
  /**
   * ID of the project.
   */
  id: string;

  /**
   * Most recent production deployment of the project.
   */
  canonical_deployment: ProjectListResponse.CanonicalDeployment | null;

  /**
   * When the project was created.
   */
  created_on: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs: ProjectListResponse.DeploymentConfigs;

  /**
   * Framework the project is using.
   */
  framework: string;

  /**
   * Version of the framework the project is using.
   */
  framework_version: string;

  /**
   * Most recent deployment of the project.
   */
  latest_deployment: ProjectListResponse.LatestDeployment | null;

  /**
   * Name of the project.
   */
  name: string;

  /**
   * Name of the preview script.
   */
  preview_script_name: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch: string;

  /**
   * Name of the production script.
   */
  production_script_name: string;

  /**
   * Whether the project uses functions.
   */
  uses_functions: boolean | null;

  /**
   * Configs for the project build process.
   */
  build_config?: ProjectListResponse.BuildConfig;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<string>;

  /**
   * Configs for the project source control.
   */
  source?: ProjectListResponse.Source;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
}

export namespace ProjectListResponse {
  /**
   * Most recent production deployment of the project.
   */
  export interface CanonicalDeployment {
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
    build_config: CanonicalDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: CanonicalDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | CanonicalDeployment.PagesPlainTextEnvVar
        | null
        | CanonicalDeployment.PagesSecretTextEnvVar
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
    source: CanonicalDeployment.Source;

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

  export namespace CanonicalDeployment {
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

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Preview {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Production {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }
  }

  /**
   * Most recent deployment of the project.
   */
  export interface LatestDeployment {
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
    build_config: LatestDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: LatestDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | LatestDeployment.PagesPlainTextEnvVar
        | null
        | LatestDeployment.PagesSecretTextEnvVar
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
    source: LatestDeployment.Source;

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

  export namespace LatestDeployment {
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

export type ProjectDeleteResponse = unknown;

export interface ProjectEditResponse {
  /**
   * ID of the project.
   */
  id: string;

  /**
   * Most recent production deployment of the project.
   */
  canonical_deployment: ProjectEditResponse.CanonicalDeployment | null;

  /**
   * When the project was created.
   */
  created_on: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs: ProjectEditResponse.DeploymentConfigs;

  /**
   * Framework the project is using.
   */
  framework: string;

  /**
   * Version of the framework the project is using.
   */
  framework_version: string;

  /**
   * Most recent deployment of the project.
   */
  latest_deployment: ProjectEditResponse.LatestDeployment | null;

  /**
   * Name of the project.
   */
  name: string;

  /**
   * Name of the preview script.
   */
  preview_script_name: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch: string;

  /**
   * Name of the production script.
   */
  production_script_name: string;

  /**
   * Whether the project uses functions.
   */
  uses_functions: boolean | null;

  /**
   * Configs for the project build process.
   */
  build_config?: ProjectEditResponse.BuildConfig;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<string>;

  /**
   * Configs for the project source control.
   */
  source?: ProjectEditResponse.Source;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
}

export namespace ProjectEditResponse {
  /**
   * Most recent production deployment of the project.
   */
  export interface CanonicalDeployment {
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
    build_config: CanonicalDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: CanonicalDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | CanonicalDeployment.PagesPlainTextEnvVar
        | null
        | CanonicalDeployment.PagesSecretTextEnvVar
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
    source: CanonicalDeployment.Source;

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

  export namespace CanonicalDeployment {
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

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Preview {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Production {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }
  }

  /**
   * Most recent deployment of the project.
   */
  export interface LatestDeployment {
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
    build_config: LatestDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: LatestDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | LatestDeployment.PagesPlainTextEnvVar
        | null
        | LatestDeployment.PagesSecretTextEnvVar
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
    source: LatestDeployment.Source;

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

  export namespace LatestDeployment {
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

export interface ProjectGetResponse {
  /**
   * ID of the project.
   */
  id: string;

  /**
   * Most recent production deployment of the project.
   */
  canonical_deployment: ProjectGetResponse.CanonicalDeployment | null;

  /**
   * When the project was created.
   */
  created_on: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs: ProjectGetResponse.DeploymentConfigs;

  /**
   * Framework the project is using.
   */
  framework: string;

  /**
   * Version of the framework the project is using.
   */
  framework_version: string;

  /**
   * Most recent deployment of the project.
   */
  latest_deployment: ProjectGetResponse.LatestDeployment | null;

  /**
   * Name of the project.
   */
  name: string;

  /**
   * Name of the preview script.
   */
  preview_script_name: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch: string;

  /**
   * Name of the production script.
   */
  production_script_name: string;

  /**
   * Whether the project uses functions.
   */
  uses_functions: boolean | null;

  /**
   * Configs for the project build process.
   */
  build_config?: ProjectGetResponse.BuildConfig;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<string>;

  /**
   * Configs for the project source control.
   */
  source?: ProjectGetResponse.Source;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
}

export namespace ProjectGetResponse {
  /**
   * Most recent production deployment of the project.
   */
  export interface CanonicalDeployment {
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
    build_config: CanonicalDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: CanonicalDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | CanonicalDeployment.PagesPlainTextEnvVar
        | null
        | CanonicalDeployment.PagesSecretTextEnvVar
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
    source: CanonicalDeployment.Source;

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

  export namespace CanonicalDeployment {
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

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Preview {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date: boolean;

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags: Array<string>;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open: boolean;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model: 'standard' | 'bundled' | 'unbound';

      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings };

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null };

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces };

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces };

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services };

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Production {
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
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
      }

      /**
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service environment.
         */
        environment: string;

        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }
  }

  /**
   * Most recent deployment of the project.
   */
  export interface LatestDeployment {
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
    build_config: LatestDeployment.BuildConfig;

    /**
     * When the deployment was created.
     */
    created_on: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger: LatestDeployment.DeploymentTrigger;

    /**
     * Environment variables used for builds and Pages Functions.
     */
    env_vars: {
      [key: string]:
        | LatestDeployment.PagesPlainTextEnvVar
        | null
        | LatestDeployment.PagesSecretTextEnvVar
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
    source: LatestDeployment.Source;

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

  export namespace LatestDeployment {
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

export type ProjectPurgeBuildCacheResponse = unknown;

export interface ProjectCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Name of the project.
   */
  name: string;

  /**
   * Body param: Production branch of the project. Used to identify production
   * deployments.
   */
  production_branch: string;

  /**
   * Body param: Configs for the project build process.
   */
  build_config?: ProjectCreateParams.BuildConfig;

  /**
   * Body param: Configs for deployments in a project.
   */
  deployment_configs?: ProjectCreateParams.DeploymentConfigs;

  /**
   * Body param: Configs for the project source control.
   */
  source?: ProjectCreateParams.Source;
}

export namespace ProjectCreateParams {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean;

    /**
     * Command used to build project.
     */
    build_command?: string;

    /**
     * Output directory of the build.
     */
    destination_dir?: string;

    /**
     * Directory to run the command.
     */
    root_dir?: string;

    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag?: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token?: string | null;
  }

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview?: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings | null };

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets | null };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null };

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version?: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<string>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases | null };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces | null };

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      };

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings | null };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces | null };

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates | null };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers | null };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets | null };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services | null };

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings | null };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Preview {
      /**
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
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
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings | null };

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets | null };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null };

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version?: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<string>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases | null };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces | null };

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      };

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings | null };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces | null };

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates | null };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers | null };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets | null };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services | null };

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings | null };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Production {
      /**
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
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
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }
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
      deployments_enabled?: boolean;

      /**
       * The owner of the repository.
       */
      owner?: string;

      /**
       * The owner ID of the repository.
       */
      owner_id?: string;

      /**
       * A list of paths that should be excluded from triggering a preview deployment.
       * Wildcard syntax (`*`) is supported.
       */
      path_excludes?: Array<string>;

      /**
       * A list of paths that should be watched to trigger a preview deployment. Wildcard
       * syntax (`*`) is supported.
       */
      path_includes?: Array<string>;

      /**
       * Whether to enable PR comments.
       */
      pr_comments_enabled?: boolean;

      /**
       * A list of branches that should not trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_excludes?: Array<string>;

      /**
       * A list of branches that should trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_includes?: Array<string>;

      /**
       * Controls whether commits to preview branches trigger a preview deployment.
       */
      preview_deployment_setting?: 'all' | 'none' | 'custom';

      /**
       * The production branch of the repository.
       */
      production_branch?: string;

      /**
       * Whether to trigger a production deployment on commits to the production branch.
       */
      production_deployments_enabled?: boolean;

      /**
       * The ID of the repository.
       */
      repo_id?: string;

      /**
       * The name of the repository.
       */
      repo_name?: string;
    }
  }
}

export interface ProjectListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface ProjectDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface ProjectEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Configs for the project build process.
   */
  build_config?: ProjectEditParams.BuildConfig;

  /**
   * Body param: Configs for deployments in a project.
   */
  deployment_configs?: ProjectEditParams.DeploymentConfigs;

  /**
   * Body param: Name of the project.
   */
  name?: string;

  /**
   * Body param: Production branch of the project. Used to identify production
   * deployments.
   */
  production_branch?: string;

  /**
   * Body param: Configs for the project source control.
   */
  source?: ProjectEditParams.Source;
}

export namespace ProjectEditParams {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean;

    /**
     * Command used to build project.
     */
    build_command?: string;

    /**
     * Output directory of the build.
     */
    destination_dir?: string;

    /**
     * Directory to run the command.
     */
    root_dir?: string;

    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag?: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token?: string | null;
  }

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview?: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings | null };

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets | null };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null };

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version?: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<string>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases | null };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces | null };

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      };

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings | null };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces | null };

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates | null };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers | null };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets | null };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services | null };

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings | null };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Preview {
      /**
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
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
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings | null };

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets | null };

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null };

      /**
       * The major version of the build image to use for Pages Functions.
       */
      build_image_major_version?: number;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<string>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases | null };

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces | null };

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      };

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings | null };

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces | null };

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates | null };

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers | null };

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets | null };

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services | null };

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings | null };

      /**
       * Hash of the Wrangler configuration used for the deployment.
       */
      wrangler_config_hash?: string;
    }

    export namespace Production {
      /**
       * AI binding.
       */
      export interface AIBindings {
        project_id: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset: string;
      }

      /**
       * Browser binding.
       */
      export interface Browsers {}

      /**
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id: string;
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
       * Hyperdrive binding.
       */
      export interface HyperdriveBindings {
        id: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Name of the R2 bucket.
         */
        name: string;

        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The Service name.
         */
        service: string;

        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name: string;
      }
    }
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
      deployments_enabled?: boolean;

      /**
       * The owner of the repository.
       */
      owner?: string;

      /**
       * The owner ID of the repository.
       */
      owner_id?: string;

      /**
       * A list of paths that should be excluded from triggering a preview deployment.
       * Wildcard syntax (`*`) is supported.
       */
      path_excludes?: Array<string>;

      /**
       * A list of paths that should be watched to trigger a preview deployment. Wildcard
       * syntax (`*`) is supported.
       */
      path_includes?: Array<string>;

      /**
       * Whether to enable PR comments.
       */
      pr_comments_enabled?: boolean;

      /**
       * A list of branches that should not trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_excludes?: Array<string>;

      /**
       * A list of branches that should trigger a preview deployment. Wildcard syntax
       * (`*`) is supported. Must be used with `preview_deployment_setting` set to
       * `custom`.
       */
      preview_branch_includes?: Array<string>;

      /**
       * Controls whether commits to preview branches trigger a preview deployment.
       */
      preview_deployment_setting?: 'all' | 'none' | 'custom';

      /**
       * The production branch of the repository.
       */
      production_branch?: string;

      /**
       * Whether to trigger a production deployment on commits to the production branch.
       */
      production_deployments_enabled?: boolean;

      /**
       * The ID of the repository.
       */
      repo_id?: string;

      /**
       * The name of the repository.
       */
      repo_name?: string;
    }
  }
}

export interface ProjectGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface ProjectPurgeBuildCacheParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Projects.ProjectListResponsesV4PagePaginationArray = ProjectListResponsesV4PagePaginationArray;
Projects.Deployments = Deployments;
Projects.DeploymentListResponsesV4PagePaginationArray = DeploymentListResponsesV4PagePaginationArray;
Projects.Domains = Domains;
Projects.DomainListResponsesSinglePage = DomainListResponsesSinglePage;

export declare namespace Projects {
  export {
    type Deployment as Deployment,
    type Project as Project,
    type Stage as Stage,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectEditResponse as ProjectEditResponse,
    type ProjectGetResponse as ProjectGetResponse,
    type ProjectPurgeBuildCacheResponse as ProjectPurgeBuildCacheResponse,
    ProjectListResponsesV4PagePaginationArray as ProjectListResponsesV4PagePaginationArray,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectEditParams as ProjectEditParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectPurgeBuildCacheParams as ProjectPurgeBuildCacheParams,
  };

  export {
    Deployments as Deployments,
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

  export {
    Domains as Domains,
    type DomainCreateResponse as DomainCreateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    DomainListResponsesSinglePage as DomainListResponsesSinglePage,
    type DomainCreateParams as DomainCreateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };
}
