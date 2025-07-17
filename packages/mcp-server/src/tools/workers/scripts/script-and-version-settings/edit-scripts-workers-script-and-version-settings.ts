// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.script_and_version_settings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/settings',
  operationId: 'worker-script-patch-settings',
};

export const tool: Tool = {
  name: 'edit_scripts_workers_script_and_version_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatch metadata or config, such as bindings or usage model.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      settings: {
        type: 'object',
        properties: {
          bindings: {
            type: 'array',
            description:
              'List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['ai'],
                    },
                  },
                  required: ['name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    dataset: {
                      type: 'string',
                      description: 'The name of the dataset to bind to.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['analytics_engine'],
                    },
                  },
                  required: ['dataset', 'name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['assets'],
                    },
                  },
                  required: ['name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['browser'],
                    },
                  },
                  required: ['name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'Identifier of the D1 database to bind to.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['d1'],
                    },
                  },
                  required: ['id', 'name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    namespace: {
                      type: 'string',
                      description: 'Namespace to bind to.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['dispatch_namespace'],
                    },
                    outbound: {
                      type: 'object',
                      description: 'Outbound worker.',
                      properties: {
                        params: {
                          type: 'array',
                          description:
                            'Pass information from the Dispatch Worker to the Outbound Worker through the parameters.',
                          items: {
                            type: 'string',
                          },
                        },
                        worker: {
                          type: 'object',
                          description: 'Outbound worker.',
                          properties: {
                            environment: {
                              type: 'string',
                              description: 'Environment of the outbound worker.',
                            },
                            service: {
                              type: 'string',
                              description: 'Name of the outbound worker.',
                            },
                          },
                        },
                      },
                    },
                  },
                  required: ['name', 'namespace', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['durable_object_namespace'],
                    },
                    class_name: {
                      type: 'string',
                      description: 'The exported class name of the Durable Object.',
                    },
                    environment: {
                      type: 'string',
                      description: 'The environment of the script_name to bind to.',
                    },
                    namespace_id: {
                      type: 'string',
                      description: 'Namespace identifier tag.',
                    },
                    script_name: {
                      type: 'string',
                      description:
                        'The script where the Durable Object is defined, if it is external to this Worker.',
                    },
                  },
                  required: ['name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'Identifier of the Hyperdrive connection to bind to.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['hyperdrive'],
                    },
                  },
                  required: ['id', 'name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    json: {
                      type: 'string',
                      description: 'JSON data to use.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['json'],
                    },
                  },
                  required: ['json', 'name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    namespace_id: {
                      type: 'string',
                      description: 'Namespace identifier tag.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['kv_namespace'],
                    },
                  },
                  required: ['name', 'namespace_id', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    certificate_id: {
                      type: 'string',
                      description: 'Identifier of the certificate to bind to.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['mtls_certificate'],
                    },
                  },
                  required: ['certificate_id', 'name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    text: {
                      type: 'string',
                      description: 'The text value to use.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['plain_text'],
                    },
                  },
                  required: ['name', 'text', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    pipeline: {
                      type: 'string',
                      description: 'Name of the Pipeline to bind to.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['pipelines'],
                    },
                  },
                  required: ['name', 'pipeline', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    queue_name: {
                      type: 'string',
                      description: 'Name of the Queue to bind to.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['queue'],
                    },
                  },
                  required: ['name', 'queue_name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    bucket_name: {
                      type: 'string',
                      description: 'R2 bucket to bind to.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['r2_bucket'],
                    },
                  },
                  required: ['bucket_name', 'name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    text: {
                      type: 'string',
                      description: 'The secret value to use.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['secret_text'],
                    },
                  },
                  required: ['name', 'text', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    environment: {
                      type: 'string',
                      description: 'Optional environment if the Worker utilizes one.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    service: {
                      type: 'string',
                      description: 'Name of Worker to bind to.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['service'],
                    },
                  },
                  required: ['environment', 'name', 'service', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    service: {
                      type: 'string',
                      description: 'Name of Tail Worker to bind to.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['tail_consumer'],
                    },
                  },
                  required: ['name', 'service', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    index_name: {
                      type: 'string',
                      description: 'Name of the Vectorize index to bind to.',
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['vectorize'],
                    },
                  },
                  required: ['index_name', 'name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['version_metadata'],
                    },
                  },
                  required: ['name', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    secret_name: {
                      type: 'string',
                      description: 'Name of the secret in the store.',
                    },
                    store_id: {
                      type: 'string',
                      description: 'ID of the store containing the secret.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['secrets_store_secret'],
                    },
                  },
                  required: ['name', 'secret_name', 'store_id', 'type'],
                },
                {
                  type: 'object',
                  properties: {
                    algorithm: {
                      type: 'object',
                      description:
                        'Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).',
                    },
                    format: {
                      type: 'string',
                      description:
                        'Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).',
                      enum: ['raw', 'pkcs8', 'spki', 'jwk'],
                    },
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['secret_key'],
                    },
                    usages: {
                      type: 'array',
                      description:
                        'Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).',
                      items: {
                        type: 'string',
                        enum: [
                          'encrypt',
                          'decrypt',
                          'sign',
                          'verify',
                          'deriveKey',
                          'deriveBits',
                          'wrapKey',
                          'unwrapKey',
                        ],
                      },
                    },
                    key_base64: {
                      type: 'string',
                      description:
                        'Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".',
                    },
                    key_jwk: {
                      type: 'object',
                      description:
                        'Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".',
                    },
                  },
                  required: ['algorithm', 'format', 'name', 'type', 'usages'],
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'A JavaScript variable name for the binding.',
                    },
                    type: {
                      type: 'string',
                      description: 'The kind of resource that the binding provides.',
                      enum: ['workflow'],
                    },
                    workflow_name: {
                      type: 'string',
                      description: 'Name of the Workflow to bind to.',
                    },
                    class_name: {
                      type: 'string',
                      description:
                        'Class name of the Workflow. Should only be provided if the Workflow belongs to this script.',
                    },
                    script_name: {
                      type: 'string',
                      description:
                        'Script name that contains the Workflow. If not provided, defaults to this script name.',
                    },
                  },
                  required: ['name', 'type', 'workflow_name'],
                },
              ],
              description: 'A binding to allow the Worker to communicate with resources.',
            },
          },
          compatibility_date: {
            type: 'string',
            description:
              'Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.',
          },
          compatibility_flags: {
            type: 'array',
            description:
              'Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.',
            items: {
              type: 'string',
              description: 'Flag that enables or disables a specific feature in the Workers runtime.',
            },
          },
          limits: {
            type: 'object',
            description: 'Limits to apply for this Worker.',
            properties: {
              cpu_ms: {
                type: 'integer',
                description: 'The amount of CPU time this Worker can use in milliseconds.',
              },
            },
          },
          logpush: {
            type: 'boolean',
            description: 'Whether Logpush is turned on for the Worker.',
          },
          migrations: {
            anyOf: [
              {
                $ref: '#/$defs/single_step_migration',
              },
              {
                type: 'object',
                properties: {
                  new_tag: {
                    type: 'string',
                    description: 'Tag to set as the latest migration tag.',
                  },
                  old_tag: {
                    type: 'string',
                    description:
                      "Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.",
                  },
                  steps: {
                    type: 'array',
                    description: 'Migrations to apply in order.',
                    items: {
                      $ref: '#/$defs/migration_step',
                    },
                  },
                },
              },
            ],
            description: 'Migrations to apply for Durable Objects associated with this Worker.\n',
          },
          observability: {
            type: 'object',
            description: 'Observability settings for the Worker.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Whether observability is enabled for the Worker.',
              },
              head_sampling_rate: {
                type: 'number',
                description:
                  'The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
              },
              logs: {
                type: 'object',
                description: 'Log settings for the Worker.',
                properties: {
                  enabled: {
                    type: 'boolean',
                    description: 'Whether logs are enabled for the Worker.',
                  },
                  invocation_logs: {
                    type: 'boolean',
                    description:
                      'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.',
                  },
                  head_sampling_rate: {
                    type: 'number',
                    description:
                      'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
                  },
                },
                required: ['enabled', 'invocation_logs'],
              },
            },
            required: ['enabled'],
          },
          placement: {
            type: 'object',
            description:
              'Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',
            properties: {
              mode: {
                type: 'string',
                description:
                  'Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',
                enum: ['smart'],
              },
            },
          },
          tags: {
            type: 'array',
            description: 'Tags to help you manage your Workers.',
            items: {
              type: 'string',
              description: 'Tag to help you manage your Worker.',
            },
          },
          tail_consumers: {
            type: 'array',
            description: 'List of Workers that will consume logs from the attached Worker.',
            items: {
              $ref: '#/$defs/consumer_script',
            },
          },
          usage_model: {
            type: 'string',
            description: 'Usage model for the Worker invocations.',
            enum: ['standard'],
          },
        },
      },
    },
    required: ['account_id', 'script_name'],
    $defs: {
      single_step_migration: {
        type: 'object',
        description: 'A single set of migrations to apply.',
        properties: {
          deleted_classes: {
            type: 'array',
            description: 'A list of classes to delete Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_sqlite_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces with SQLite from.',
            items: {
              type: 'string',
            },
          },
          new_tag: {
            type: 'string',
            description: 'Tag to set as the latest migration tag.',
          },
          old_tag: {
            type: 'string',
            description:
              "Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.",
          },
          renamed_classes: {
            type: 'array',
            description: 'A list of classes with Durable Object namespaces that were renamed.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
          transferred_classes: {
            type: 'array',
            description:
              'A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                from_script: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      migration_step: {
        type: 'object',
        properties: {
          deleted_classes: {
            type: 'array',
            description: 'A list of classes to delete Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces from.',
            items: {
              type: 'string',
            },
          },
          new_sqlite_classes: {
            type: 'array',
            description: 'A list of classes to create Durable Object namespaces with SQLite from.',
            items: {
              type: 'string',
            },
          },
          renamed_classes: {
            type: 'array',
            description: 'A list of classes with Durable Object namespaces that were renamed.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
          transferred_classes: {
            type: 'array',
            description:
              'A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.',
            items: {
              type: 'object',
              properties: {
                from: {
                  type: 'string',
                },
                from_script: {
                  type: 'string',
                },
                to: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      consumer_script: {
        type: 'object',
        description: 'A reference to a script that will consume logs from the attached Worker.',
        properties: {
          service: {
            type: 'string',
            description: 'Name of Worker that is to be the consumer.',
          },
          environment: {
            type: 'string',
            description: 'Optional environment if the Worker utilizes one.',
          },
          namespace: {
            type: 'string',
            description: 'Optional dispatch namespace the script belongs to.',
          },
        },
        required: ['service'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(await client.workers.scripts.scriptAndVersionSettings.edit(script_name, body));
};

export default { metadata, tool, handler };
