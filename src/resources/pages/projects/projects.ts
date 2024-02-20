// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProjectsAPI from 'cloudflare/resources/pages/projects/projects';
import * as DomainsAPI from 'cloudflare/resources/pages/projects/domains';
import * as DeploymentsAPI from 'cloudflare/resources/pages/projects/deployments/deployments';

export class Projects extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Create a new project.
   */
  create(
    accountId: string,
    body: ProjectCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/pages/projects`, { body, ...options }) as Core.APIPromise<{
        result: ProjectCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all user projects.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/pages/projects`, options) as Core.APIPromise<{
        result: ProjectListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a project by name.
   */
  delete(accountId: string, projectName: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/accounts/${accountId}/pages/projects/${projectName}`, options);
  }

  /**
   * Set new attributes for an existing project. Modify environment variables. To
   * delete an environment variable, set the key to null.
   */
  edit(
    accountId: string,
    projectName: string,
    body: ProjectEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectEditResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/pages/projects/${projectName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProjectEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a project by name.
   */
  get(
    accountId: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/pages/projects/${projectName}`, options) as Core.APIPromise<{
        result: ProjectGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Purge all cached build artifacts for a Pages project
   */
  purgeBuildCache(
    accountId: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(
      `/accounts/${accountId}/pages/projects/${projectName}/purge_build_cache`,
      options,
    );
  }
}

export type ProjectCreateResponse = unknown | Array<unknown> | string;

export type ProjectListResponse = Array<ProjectListResponse.ProjectListResponseItem>;

export namespace ProjectListResponse {
  export interface ProjectListResponseItem {
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
    deployment_trigger?: ProjectListResponseItem.DeploymentTrigger;

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
    stages?: Array<ProjectListResponseItem.Stage>;

    /**
     * The live URL to view this deployment.
     */
    url?: string;
  }

  export namespace ProjectListResponseItem {
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

export type ProjectDeleteResponse = unknown;

export type ProjectEditResponse = unknown | Array<unknown> | string;

export interface ProjectGetResponse {
  /**
   * Id of the project.
   */
  id?: string;

  /**
   * Configs for the project build process.
   */
  build_config?: ProjectGetResponse.BuildConfig;

  canonical_deployment?: ProjectGetResponse.CanonicalDeployment;

  /**
   * When the project was created.
   */
  created_on?: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs?: ProjectGetResponse.DeploymentConfigs;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<unknown>;

  latest_deployment?: ProjectGetResponse.LatestDeployment;

  /**
   * Name of the project.
   */
  name?: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch?: string;

  source?: unknown;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
}

export namespace ProjectGetResponse {
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

  export interface CanonicalDeployment {
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
    deployment_trigger?: CanonicalDeployment.DeploymentTrigger;

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
    stages?: Array<CanonicalDeployment.Stage>;

    /**
     * The live URL to view this deployment.
     */
    url?: string;
  }

  export namespace CanonicalDeployment {
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
      ai_bindings?: Preview.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Preview.AnalyticsEngineDatasets | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Preview.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Preview.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Preview.EnvVars | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Preview.KvNamespaces;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Preview.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Preview.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      service_bindings?: Preview.ServiceBindings | null;
    }

    export namespace Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KvNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KvNamespaces.KvBinding;
      }

      export namespace KvNamespaces {
        /**
         * KV binding.
         */
        export interface KvBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
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
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface ServiceBindings {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: ServiceBindings.ServiceBinding;
      }

      export namespace ServiceBindings {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Production.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Production.AnalyticsEngineDatasets | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Production.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Production.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Production.EnvVars | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Production.KvNamespaces;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Production.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Production.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      service_bindings?: Production.ServiceBindings | null;
    }

    export namespace Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KvNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KvNamespaces.KvBinding;
      }

      export namespace KvNamespaces {
        /**
         * KV binding.
         */
        export interface KvBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
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
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface ServiceBindings {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: ServiceBindings.ServiceBinding;
      }

      export namespace ServiceBindings {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }
    }
  }

  export interface LatestDeployment {
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
    deployment_trigger?: LatestDeployment.DeploymentTrigger;

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
    stages?: Array<LatestDeployment.Stage>;

    /**
     * The live URL to view this deployment.
     */
    url?: string;
  }

  export namespace LatestDeployment {
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

export type ProjectPurgeBuildCacheResponse = unknown;

export interface ProjectCreateParams {
  /**
   * Configs for the project build process.
   */
  build_config?: ProjectCreateParams.BuildConfig;

  canonical_deployment?: ProjectCreateParams.CanonicalDeployment;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs?: ProjectCreateParams.DeploymentConfigs;

  latest_deployment?: ProjectCreateParams.LatestDeployment;

  /**
   * Name of the project.
   */
  name?: string;

  /**
   * Production branch of the project. Used to identify production deployments.
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

  export interface CanonicalDeployment {}

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
      ai_bindings?: Preview.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Preview.AnalyticsEngineDatasets | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Preview.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Preview.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Preview.EnvVars | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Preview.KvNamespaces;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Preview.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Preview.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      service_bindings?: Preview.ServiceBindings | null;
    }

    export namespace Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KvNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KvNamespaces.KvBinding;
      }

      export namespace KvNamespaces {
        /**
         * KV binding.
         */
        export interface KvBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
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
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface ServiceBindings {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: ServiceBindings.ServiceBinding;
      }

      export namespace ServiceBindings {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Production.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Production.AnalyticsEngineDatasets | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Production.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Production.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Production.EnvVars | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Production.KvNamespaces;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Production.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Production.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      service_bindings?: Production.ServiceBindings | null;
    }

    export namespace Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KvNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KvNamespaces.KvBinding;
      }

      export namespace KvNamespaces {
        /**
         * KV binding.
         */
        export interface KvBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
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
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface ServiceBindings {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: ServiceBindings.ServiceBinding;
      }

      export namespace ServiceBindings {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }
    }
  }

  export interface LatestDeployment {}
}

export type ProjectEditParams = unknown;

export namespace Projects {
  export import ProjectCreateResponse = ProjectsAPI.ProjectCreateResponse;
  export import ProjectListResponse = ProjectsAPI.ProjectListResponse;
  export import ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export import ProjectEditResponse = ProjectsAPI.ProjectEditResponse;
  export import ProjectGetResponse = ProjectsAPI.ProjectGetResponse;
  export import ProjectPurgeBuildCacheResponse = ProjectsAPI.ProjectPurgeBuildCacheResponse;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectEditParams = ProjectsAPI.ProjectEditParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import DeploymentCreateResponse = DeploymentsAPI.DeploymentCreateResponse;
  export import DeploymentListResponse = DeploymentsAPI.DeploymentListResponse;
  export import DeploymentDeleteResponse = DeploymentsAPI.DeploymentDeleteResponse;
  export import DeploymentGetResponse = DeploymentsAPI.DeploymentGetResponse;
  export import DeploymentRetryResponse = DeploymentsAPI.DeploymentRetryResponse;
  export import DeploymentRollbackResponse = DeploymentsAPI.DeploymentRollbackResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainCreateResponse = DomainsAPI.DomainCreateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
}
