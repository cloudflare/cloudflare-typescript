// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.jobs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_logpush_jobs',
  description: 'Updates a Logpush job.',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'integer',
        description: 'Unique id of the job.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      destination_conf: {
        type: 'string',
        description:
          'Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included.',
      },
      enabled: {
        type: 'boolean',
        description: 'Flag that indicates if the job is enabled.',
      },
      frequency: {
        type: 'string',
        description:
          'This field is deprecated. Please use `max_upload_*` parameters instead. The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your logs in larger quantities of smaller files. Setting frequency to low sends logs in smaller quantities of larger files.',
        enum: ['high', 'low'],
      },
      kind: {
        type: 'string',
        description:
          'The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs. Currently, Edge Log Delivery is only supported for the `http_requests` dataset.',
        enum: ['edge'],
      },
      logpull_options: {
        type: 'string',
        description:
          'This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the url (full url or just the query string) of your call here, and logpush will keep on making this call for you, setting start and end times appropriately.',
      },
      max_upload_bytes: {
        type: 'integer',
        description:
          'The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log files may be much smaller than this batch size. This parameter is not available for jobs with `edge` as its kind.',
      },
      max_upload_interval_seconds: {
        type: 'integer',
        description:
          'The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; this means that log files may be sent in shorter intervals than this. This parameter is only used for jobs with `edge` as its kind.',
      },
      max_upload_records: {
        type: 'integer',
        description:
          'The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means that log files may contain many fewer lines than this. This parameter is not available for jobs with `edge` as its kind.',
      },
      name: {
        type: 'string',
        description:
          'Optional human readable job name. Not unique. Cloudflare suggests that you set this to a meaningful string, like the domain name, to make it easier to identify your job.',
      },
      output_options: {
        type: 'object',
        description:
          'The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored.',
        properties: {
          batch_prefix: {
            type: 'string',
            description: 'String to be prepended before each batch.',
          },
          batch_suffix: {
            type: 'string',
            description: 'String to be appended after each batch.',
          },
          'CVE-2021-44228': {
            type: 'boolean',
            description:
              'If set to true, will cause all occurrences of `${` in the generated files to be replaced with `x{`.',
          },
          field_delimiter: {
            type: 'string',
            description: 'String to join fields. This field be ignored when `record_template` is set.',
          },
          field_names: {
            type: 'array',
            description:
              'List of field names to be included in the Logpush output. For the moment, there is no option to add all fields at once, so you must specify all the fields names you are interested in.',
            items: {
              type: 'string',
            },
          },
          output_type: {
            type: 'string',
            description:
              'Specifies the output type, such as `ndjson` or `csv`. This sets default values for the rest of the settings, depending on the chosen output type. Some formatting rules, like string quoting, are different between output types.',
            enum: ['ndjson', 'csv'],
          },
          record_delimiter: {
            type: 'string',
            description: 'String to be inserted in-between the records as separator.',
          },
          record_prefix: {
            type: 'string',
            description: 'String to be prepended before each record.',
          },
          record_suffix: {
            type: 'string',
            description: 'String to be appended after each record.',
          },
          record_template: {
            type: 'string',
            description:
              'String to use as template for each record instead of the default json key value mapping. All fields used in the template must be present in `field_names` as well, otherwise they will end up as null. Format as a Go `text/template` without any standard functions, like conditionals, loops, sub-templates, etc.',
          },
          sample_rate: {
            type: 'number',
            description:
              'Floating number to specify sampling rate. Sampling is applied on top of filtering, and regardless of the current `sample_interval` of the data.',
          },
          timestamp_format: {
            type: 'string',
            description:
              'String to specify the format for timestamps, such as `unixnano`, `unix`, or `rfc3339`.',
            enum: ['unixnano', 'unix', 'rfc3339'],
          },
        },
        required: [],
      },
      ownership_challenge: {
        type: 'string',
        description: 'Ownership challenge token to prove destination ownership.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { job_id, ...body } = args;
  return client.logpush.jobs.update(job_id, body);
};

export default { metadata, tool, handler };
