// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
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
  DeploymentDeleteParams,
  DeploymentDeleteResponse,
  DeploymentGetParams,
  DeploymentListParams,
  DeploymentRetryParams,
  DeploymentRollbackParams,
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
  create(params: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<Project> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pages/projects`, { body, ...options }) as Core.APIPromise<{
        result: Project;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all user projects.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deployment of client.pages.projects.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeploymentsV4PagePaginationArray, Deployment> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pages/projects`,
      DeploymentsV4PagePaginationArray,
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
   * const project = await client.pages.projects.edit(
   *   'this-is-my-project-01',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'my-pages-app',
   *     production_branch: 'main',
   *   },
   * );
   * ```
   */
  edit(
    projectName: string,
    params: ProjectEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Project> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/pages/projects/${projectName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Project }>
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
  ): Core.APIPromise<Project> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pages/projects/${projectName}`, options) as Core.APIPromise<{
        result: Project;
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

export class DeploymentsV4PagePaginationArray extends V4PagePaginationArray<Deployment> {}

export interface Deployment {
  /**
   * Id of the deployment.
   */
  id?: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases?: Array<string> | null;

  /**
   * Configs for the project build process.
   */
  build_config?: Deployment.BuildConfig;

  /**
   * When the deployment was created.
   */
  created_on?: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger?: Deployment.DeploymentTrigger;

  /**
   * Environment variables used for builds and Pages Functions.
   */
  env_vars?: {
    [key: string]: Deployment.PagesPlainTextEnvVar | null | Deployment.PagesSecretTextEnvVar | null;
  } | null;

  /**
   * Type of deploy.
   */
  environment?: 'preview' | 'production';

  /**
   * If the deployment has been skipped.
   */
  is_skipped?: boolean;

  /**
   * The status of the deployment.
   */
  latest_stage?: Stage;

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

  source?: Deployment.Source;

  /**
   * List of past stages.
   */
  stages?: Array<Stage>;

  /**
   * The live URL to view this deployment.
   */
  url?: string;
}

export namespace Deployment {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;

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
    type?: 'push' | 'ad_hoc';
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

  export interface Source {
    config?: Source.Config;

    /**
     * The source control management provider.
     */
    type?: 'github' | 'gitlab';
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
       * The name of the repository.
       */
      repo_name?: string;
    }
  }
}

export interface Project {
  /**
   * ID of the project.
   */
  id: string;

  /**
   * Name of the project.
   */
  name: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch: string;

  /**
   * Configs for the project build process.
   */
  build_config?: Project.BuildConfig | null;

  /**
   * Most recent production deployment of the project.
   */
  canonical_deployment?: Deployment | null;

  /**
   * When the project was created.
   */
  created_on?: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs?: Project.DeploymentConfigs | null;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<string>;

  /**
   * Framework the project is using.
   */
  framework?: string;

  /**
   * Version of the framework the project is using.
   */
  framework_version?: string;

  /**
   * Most recent deployment of the project.
   */
  latest_deployment?: Deployment | null;

  /**
   * Name of the preview script.
   */
  preview_script_name?: string;

  /**
   * Name of the production script.
   */
  production_script_name?: string;

  source?: Project.Source;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;

  /**
   * Whether the project uses functions.
   */
  uses_functions?: boolean;
}

export namespace Project {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;

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
    preview?: DeploymentConfigs.Preview | null;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production | null;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings | null } | null;

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets | null } | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null } | null;

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
      compatibility_flags?: Array<string> | null;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases | null } | null;

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces | null } | null;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings | null } | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces | null } | null;

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates | null } | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers | null } | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets | null } | null;

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services | null } | null;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings | null } | null;

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
        project_id?: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset?: string;
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
        id?: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id?: string;
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
        id?: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id?: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms?: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id?: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name?: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;

        /**
         * Name of the R2 bucket.
         */
        name?: string;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;

        /**
         * The Service name.
         */
        service?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name?: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings | null } | null;

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets | null } | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null } | null;

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
      compatibility_flags?: Array<string> | null;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases | null } | null;

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces | null } | null;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings | null } | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces | null } | null;

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates | null } | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers | null } | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets | null } | null;

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services | null } | null;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings | null } | null;

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
        project_id?: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset?: string;
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
        id?: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id?: string;
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
        id?: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id?: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms?: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id?: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name?: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;

        /**
         * Name of the R2 bucket.
         */
        name?: string;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;

        /**
         * The Service name.
         */
        service?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name?: string;
      }
    }
  }

  export interface Source {
    config?: Source.Config;

    /**
     * The source control management provider.
     */
    type?: 'github' | 'gitlab';
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
       * The name of the repository.
       */
      repo_name?: string;
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
  ended_on?: string | null;

  /**
   * The current build stage.
   */
  name?: 'queued' | 'initialize' | 'clone_repo' | 'build' | 'deploy';

  /**
   * When the stage started.
   */
  started_on?: string | null;

  /**
   * State of the current stage.
   */
  status?: 'success' | 'idle' | 'active' | 'failure' | 'canceled';
}

export type ProjectDeleteResponse = unknown;

export type ProjectPurgeBuildCacheResponse = unknown;

export interface ProjectCreateParams {
  /**
   * Path param: Identifier
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
  build_config?: ProjectCreateParams.BuildConfig | null;

  /**
   * Body param: Configs for deployments in a project.
   */
  deployment_configs?: ProjectCreateParams.DeploymentConfigs | null;

  /**
   * Body param:
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
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;

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
    preview?: DeploymentConfigs.Preview | null;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production | null;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings | null } | null;

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets | null } | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null } | null;

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
      compatibility_flags?: Array<string> | null;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases | null } | null;

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces | null } | null;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings | null } | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces | null } | null;

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates | null } | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers | null } | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets | null } | null;

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services | null } | null;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings | null } | null;

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
        project_id?: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset?: string;
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
        id?: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id?: string;
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
        id?: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id?: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms?: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id?: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name?: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;

        /**
         * Name of the R2 bucket.
         */
        name?: string;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;

        /**
         * The Service name.
         */
        service?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name?: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings | null } | null;

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets | null } | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null } | null;

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
      compatibility_flags?: Array<string> | null;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases | null } | null;

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces | null } | null;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings | null } | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces | null } | null;

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates | null } | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers | null } | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets | null } | null;

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services | null } | null;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings | null } | null;

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
        project_id?: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset?: string;
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
        id?: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id?: string;
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
        id?: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id?: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms?: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id?: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name?: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;

        /**
         * Name of the R2 bucket.
         */
        name?: string;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;

        /**
         * The Service name.
         */
        service?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name?: string;
      }
    }
  }

  export interface Source {
    config?: Source.Config;

    /**
     * The source control management provider.
     */
    type?: 'github' | 'gitlab';
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
       * The name of the repository.
       */
      repo_name?: string;
    }
  }
}

export interface ProjectListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;
}

export interface ProjectDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProjectEditParams {
  /**
   * Path param: Identifier
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
  build_config?: ProjectEditParams.BuildConfig | null;

  /**
   * Body param: Configs for deployments in a project.
   */
  deployment_configs?: ProjectEditParams.DeploymentConfigs | null;

  /**
   * Body param:
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
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;

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
    preview?: DeploymentConfigs.Preview | null;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production | null;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Preview.AIBindings | null } | null;

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Preview.AnalyticsEngineDatasets | null } | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Preview.Browsers | null } | null;

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
      compatibility_flags?: Array<string> | null;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Preview.D1Databases | null } | null;

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Preview.DurableObjectNamespaces | null } | null;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Preview.PagesPlainTextEnvVar | null | Preview.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Preview.HyperdriveBindings | null } | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Preview.KVNamespaces | null } | null;

      /**
       * Limits for Pages Functions.
       */
      limits?: Preview.Limits | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Preview.MTLSCertificates | null } | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Preview.QueueProducers | null } | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Preview.R2Buckets | null } | null;

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Preview.Services | null } | null;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Preview.VectorizeBindings | null } | null;

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
        project_id?: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset?: string;
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
        id?: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id?: string;
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
        id?: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id?: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms?: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id?: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name?: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;

        /**
         * Name of the R2 bucket.
         */
        name?: string;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;

        /**
         * The Service name.
         */
        service?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name?: string;
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: { [key: string]: Production.AIBindings | null } | null;

      /**
       * Whether to always use the latest compatibility date for Pages Functions.
       */
      always_use_latest_compatibility_date?: boolean;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: { [key: string]: Production.AnalyticsEngineDatasets | null } | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: { [key: string]: Production.Browsers | null } | null;

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
      compatibility_flags?: Array<string> | null;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: { [key: string]: Production.D1Databases | null } | null;

      /**
       * Durable Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: { [key: string]: Production.DurableObjectNamespaces | null } | null;

      /**
       * Environment variables used for builds and Pages Functions.
       */
      env_vars?: {
        [key: string]: Production.PagesPlainTextEnvVar | null | Production.PagesSecretTextEnvVar | null;
      } | null;

      /**
       * Whether to fail open when the deployment config cannot be applied.
       */
      fail_open?: boolean;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: { [key: string]: Production.HyperdriveBindings | null } | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: { [key: string]: Production.KVNamespaces | null } | null;

      /**
       * Limits for Pages Functions.
       */
      limits?: Production.Limits | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: { [key: string]: Production.MTLSCertificates | null } | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: { [key: string]: Production.QueueProducers | null } | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: { [key: string]: Production.R2Buckets | null } | null;

      /**
       * Services used for Pages Functions.
       */
      services?: { [key: string]: Production.Services | null } | null;

      /**
       * @deprecated All new projects now use the Standard usage model.
       */
      usage_model?: 'standard' | 'bundled' | 'unbound';

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: { [key: string]: Production.VectorizeBindings | null } | null;

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
        project_id?: string;
      }

      /**
       * Analytics Engine binding.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Name of the dataset.
         */
        dataset?: string;
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
        id?: string;
      }

      /**
       * Durable Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durable Object namespace.
         */
        namespace_id?: string;
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
        id?: string;
      }

      /**
       * KV namespace binding.
       */
      export interface KVNamespaces {
        /**
         * ID of the KV namespace.
         */
        namespace_id?: string;
      }

      /**
       * Limits for Pages Functions.
       */
      export interface Limits {
        /**
         * CPU time limit in milliseconds.
         */
        cpu_ms?: number;
      }

      /**
       * mTLS binding.
       */
      export interface MTLSCertificates {
        certificate_id?: string;
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer binding.
       */
      export interface QueueProducers {
        /**
         * Name of the Queue.
         */
        name?: string;
      }

      /**
       * R2 binding.
       */
      export interface R2Buckets {
        /**
         * Jurisdiction of the R2 bucket.
         */
        jurisdiction?: string | null;

        /**
         * Name of the R2 bucket.
         */
        name?: string;
      }

      /**
       * Service binding.
       */
      export interface Services {
        /**
         * The entrypoint to bind to.
         */
        entrypoint?: string | null;

        /**
         * The Service environment.
         */
        environment?: string;

        /**
         * The Service name.
         */
        service?: string;
      }

      /**
       * Vectorize binding.
       */
      export interface VectorizeBindings {
        index_name?: string;
      }
    }
  }

  export interface Source {
    config?: Source.Config;

    /**
     * The source control management provider.
     */
    type?: 'github' | 'gitlab';
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
       * The name of the repository.
       */
      repo_name?: string;
    }
  }
}

export interface ProjectGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProjectPurgeBuildCacheParams {
  /**
   * Identifier
   */
  account_id: string;
}

Projects.DeploymentsV4PagePaginationArray = DeploymentsV4PagePaginationArray;
Projects.Deployments = Deployments;
Projects.Domains = Domains;
Projects.DomainListResponsesSinglePage = DomainListResponsesSinglePage;

export declare namespace Projects {
  export {
    type Deployment as Deployment,
    type Project as Project,
    type Stage as Stage,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectPurgeBuildCacheResponse as ProjectPurgeBuildCacheResponse,
    DeploymentsV4PagePaginationArray as DeploymentsV4PagePaginationArray,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectEditParams as ProjectEditParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectPurgeBuildCacheParams as ProjectPurgeBuildCacheParams,
  };

  export {
    Deployments as Deployments,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
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
