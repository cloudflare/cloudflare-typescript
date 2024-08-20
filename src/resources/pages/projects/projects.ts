// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProjectsAPI from './projects';
import * as DomainsAPI from './domains';
import * as DeploymentsAPI from './deployments/deployments';
import { SinglePage } from '../../../pagination';

export class Projects extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Create a new project.
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
   */
  list(
    params: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeploymentsSinglePage, Deployment> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/pages/projects`, DeploymentsSinglePage, options);
  }

  /**
   * Delete a project by name.
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

export class DeploymentsSinglePage extends SinglePage<Deployment> {}

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
   * A dict of env variables to build this deploy.
   */
  env_vars?: Record<string, Deployment.EnvVars | null>;

  /**
   * Type of deploy.
   */
  environment?: string;

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
   * Environment variable.
   */
  export interface EnvVars {
    /**
     * Environment variable value.
     */
    value: string;

    /**
     * The type of environment variable.
     */
    type?: string;
  }

  export interface Source {
    config?: Source.Config;

    type?: string;
  }

  export namespace Source {
    export interface Config {
      deployments_enabled?: boolean;

      owner?: string;

      path_excludes?: Array<string>;

      path_includes?: Array<string>;

      pr_comments_enabled?: boolean;

      preview_branch_excludes?: Array<string>;

      preview_branch_includes?: Array<string>;

      preview_deployment_setting?: 'all' | 'none' | 'custom';

      production_branch?: string;

      production_deployments_enabled?: boolean;

      repo_name?: string;
    }
  }
}

export interface Project {
  /**
   * Id of the project.
   */
  id?: string;

  /**
   * Configs for the project build process.
   */
  build_config?: Project.BuildConfig;

  /**
   * Most recent deployment to the repo.
   */
  canonical_deployment?: Deployment | null;

  /**
   * When the project was created.
   */
  created_on?: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs?: Project.DeploymentConfigs;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<string>;

  /**
   * Most recent deployment to the repo.
   */
  latest_deployment?: Deployment | null;

  /**
   * Name of the project.
   */
  name?: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch?: string;

  source?: Project.Source;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
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
      ai_bindings?: Record<string, Preview.AIBindings | null> | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Record<string, Preview.AnalyticsEngineDatasets | null> | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Record<string, unknown> | null;

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
      d1_databases?: Record<string, Preview.D1Databases | null> | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Record<string, Preview.DurableObjectNamespaces | null> | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Record<string, Preview.EnvVars | null> | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Record<string, Preview.HyperdriveBindings | null> | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Record<string, Preview.KVNamespaces | null> | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Record<string, Preview.MTLSCertificates | null> | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Record<string, Preview.QueueProducers | null> | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Record<string, Preview.R2Buckets | null> | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Record<string, Preview.Services | null> | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Record<string, Preview.VectorizeBindings | null> | null;
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
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id?: string;
      }

      /**
       * Durabble Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durabble Object namespace.
         */
        namespace_id?: string;
      }

      /**
       * Environment variable.
       */
      export interface EnvVars {
        /**
         * Environment variable value.
         */
        value: string;

        /**
         * The type of environment variable.
         */
        type?: 'plain_text' | 'secret_text';
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
      ai_bindings?: Record<string, Production.AIBindings | null> | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Record<string, Production.AnalyticsEngineDatasets | null> | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Record<string, unknown> | null;

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
      d1_databases?: Record<string, Production.D1Databases | null> | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Record<string, Production.DurableObjectNamespaces | null> | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Record<string, Production.EnvVars | null> | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Record<string, Production.HyperdriveBindings | null> | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Record<string, Production.KVNamespaces | null> | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Record<string, Production.MTLSCertificates | null> | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Record<string, Production.QueueProducers | null> | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Record<string, Production.R2Buckets | null> | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Record<string, Production.Services | null> | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Record<string, Production.VectorizeBindings | null> | null;
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
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id?: string;
      }

      /**
       * Durabble Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durabble Object namespace.
         */
        namespace_id?: string;
      }

      /**
       * Environment variable.
       */
      export interface EnvVars {
        /**
         * Environment variable value.
         */
        value: string;

        /**
         * The type of environment variable.
         */
        type?: 'plain_text' | 'secret_text';
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

    type?: string;
  }

  export namespace Source {
    export interface Config {
      deployments_enabled?: boolean;

      owner?: string;

      path_excludes?: Array<string>;

      path_includes?: Array<string>;

      pr_comments_enabled?: boolean;

      preview_branch_excludes?: Array<string>;

      preview_branch_includes?: Array<string>;

      preview_deployment_setting?: 'all' | 'none' | 'custom';

      production_branch?: string;

      production_deployments_enabled?: boolean;

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

export type ProjectDeleteResponse = unknown;

export type ProjectPurgeBuildCacheResponse = unknown;

export interface ProjectCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Configs for the project build process.
   */
  build_config?: ProjectCreateParams.BuildConfig;

  /**
   * Body param: Configs for deployments in a project.
   */
  deployment_configs?: ProjectCreateParams.DeploymentConfigs;

  /**
   * Body param: Name of the project.
   */
  name?: string;

  /**
   * Body param: Production branch of the project. Used to identify production
   * deployments.
   */
  production_branch?: string;
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
      ai_bindings?: Record<string, Preview.AIBindings | null> | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Record<string, Preview.AnalyticsEngineDatasets | null> | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Record<string, unknown> | null;

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
      d1_databases?: Record<string, Preview.D1Databases | null> | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Record<string, Preview.DurableObjectNamespaces | null> | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Record<string, Preview.EnvVars | null> | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Record<string, Preview.HyperdriveBindings | null> | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Record<string, Preview.KVNamespaces | null> | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Record<string, Preview.MTLSCertificates | null> | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Record<string, Preview.QueueProducers | null> | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Record<string, Preview.R2Buckets | null> | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Record<string, Preview.Services | null> | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Record<string, Preview.VectorizeBindings | null> | null;
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
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id?: string;
      }

      /**
       * Durabble Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durabble Object namespace.
         */
        namespace_id?: string;
      }

      /**
       * Environment variable.
       */
      export interface EnvVars {
        /**
         * Environment variable value.
         */
        value: string;

        /**
         * The type of environment variable.
         */
        type?: 'plain_text' | 'secret_text';
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
      ai_bindings?: Record<string, Production.AIBindings | null> | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Record<string, Production.AnalyticsEngineDatasets | null> | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Record<string, unknown> | null;

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
      d1_databases?: Record<string, Production.D1Databases | null> | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Record<string, Production.DurableObjectNamespaces | null> | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Record<string, Production.EnvVars | null> | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Record<string, Production.HyperdriveBindings | null> | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Record<string, Production.KVNamespaces | null> | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Record<string, Production.MTLSCertificates | null> | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Record<string, Production.QueueProducers | null> | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Record<string, Production.R2Buckets | null> | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Record<string, Production.Services | null> | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Record<string, Production.VectorizeBindings | null> | null;
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
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id?: string;
      }

      /**
       * Durabble Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durabble Object namespace.
         */
        namespace_id?: string;
      }

      /**
       * Environment variable.
       */
      export interface EnvVars {
        /**
         * Environment variable value.
         */
        value: string;

        /**
         * The type of environment variable.
         */
        type?: 'plain_text' | 'secret_text';
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
}

export interface ProjectListParams {
  /**
   * Identifier
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
      ai_bindings?: Record<string, Preview.AIBindings | null> | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Record<string, Preview.AnalyticsEngineDatasets | null> | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Record<string, unknown> | null;

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
      d1_databases?: Record<string, Preview.D1Databases | null> | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Record<string, Preview.DurableObjectNamespaces | null> | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Record<string, Preview.EnvVars | null> | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Record<string, Preview.HyperdriveBindings | null> | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Record<string, Preview.KVNamespaces | null> | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Record<string, Preview.MTLSCertificates | null> | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Record<string, Preview.QueueProducers | null> | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Record<string, Preview.R2Buckets | null> | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Record<string, Preview.Services | null> | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Record<string, Preview.VectorizeBindings | null> | null;
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
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id?: string;
      }

      /**
       * Durabble Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durabble Object namespace.
         */
        namespace_id?: string;
      }

      /**
       * Environment variable.
       */
      export interface EnvVars {
        /**
         * Environment variable value.
         */
        value: string;

        /**
         * The type of environment variable.
         */
        type?: 'plain_text' | 'secret_text';
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
      ai_bindings?: Record<string, Production.AIBindings | null> | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Record<string, Production.AnalyticsEngineDatasets | null> | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Record<string, unknown> | null;

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
      d1_databases?: Record<string, Production.D1Databases | null> | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Record<string, Production.DurableObjectNamespaces | null> | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Record<string, Production.EnvVars | null> | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Record<string, Production.HyperdriveBindings | null> | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Record<string, Production.KVNamespaces | null> | null;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Record<string, Production.MTLSCertificates | null> | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Record<string, Production.QueueProducers | null> | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Record<string, Production.R2Buckets | null> | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Record<string, Production.Services | null> | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Record<string, Production.VectorizeBindings | null> | null;
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
       * D1 binding.
       */
      export interface D1Databases {
        /**
         * UUID of the D1 database.
         */
        id?: string;
      }

      /**
       * Durabble Object binding.
       */
      export interface DurableObjectNamespaces {
        /**
         * ID of the Durabble Object namespace.
         */
        namespace_id?: string;
      }

      /**
       * Environment variable.
       */
      export interface EnvVars {
        /**
         * Environment variable value.
         */
        value: string;

        /**
         * The type of environment variable.
         */
        type?: 'plain_text' | 'secret_text';
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

export namespace Projects {
  export import Deployment = ProjectsAPI.Deployment;
  export import Project = ProjectsAPI.Project;
  export import Stage = ProjectsAPI.Stage;
  export import ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export import ProjectPurgeBuildCacheResponse = ProjectsAPI.ProjectPurgeBuildCacheResponse;
  export import DeploymentsSinglePage = ProjectsAPI.DeploymentsSinglePage;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectListParams = ProjectsAPI.ProjectListParams;
  export import ProjectDeleteParams = ProjectsAPI.ProjectDeleteParams;
  export import ProjectEditParams = ProjectsAPI.ProjectEditParams;
  export import ProjectGetParams = ProjectsAPI.ProjectGetParams;
  export import ProjectPurgeBuildCacheParams = ProjectsAPI.ProjectPurgeBuildCacheParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import DeploymentDeleteResponse = DeploymentsAPI.DeploymentDeleteResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentListParams = DeploymentsAPI.DeploymentListParams;
  export import DeploymentDeleteParams = DeploymentsAPI.DeploymentDeleteParams;
  export import DeploymentGetParams = DeploymentsAPI.DeploymentGetParams;
  export import DeploymentRetryParams = DeploymentsAPI.DeploymentRetryParams;
  export import DeploymentRollbackParams = DeploymentsAPI.DeploymentRollbackParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainCreateResponse = DomainsAPI.DomainCreateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainListResponsesSinglePage = DomainsAPI.DomainListResponsesSinglePage;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainEditParams = DomainsAPI.DomainEditParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
