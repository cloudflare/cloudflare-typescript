// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pages.projects.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.pages.projects.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      build_config: {
        build_caching: true,
        build_command: 'npm run build',
        destination_dir: 'build',
        root_dir: '/',
        web_analytics_tag: 'cee1c73f6e4743d0b5e6bb1a0bcaabcc',
        web_analytics_token: '021e1057c18547eca7b79f2516f06o7x',
      },
      deployment_configs: {
        preview: {
          ai_bindings: { AI_BINDING: { project_id: 'some-project-id' } },
          analytics_engine_datasets: { ANALYTICS_ENGINE_BINDING: { dataset: 'api_analytics' } },
          browsers: { BROWSER: {} },
          compatibility_date: '2022-01-01',
          compatibility_flags: ['url_standard'],
          d1_databases: { D1_BINDING: { id: '445e2955-951a-43f8-a35b-a4d0c8138f63' } },
          durable_object_namespaces: { DO_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          env_vars: { foo: { value: 'hello world', type: 'plain_text' } },
          hyperdrive_bindings: { HYPERDRIVE: { id: 'a76a99bc342644deb02c38d66082262a' } },
          kv_namespaces: { KV_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          mtls_certificates: { MTLS: { certificate_id: 'd7cdd17c-916f-4cb7-aabe-585eb382ec4e' } },
          placement: { mode: 'smart' },
          queue_producers: { QUEUE_PRODUCER_BINDING: { name: 'some-queue' } },
          r2_buckets: { R2_BINDING: { jurisdiction: 'eu', name: 'some-bucket' } },
          services: {
            SERVICE_BINDING: {
              entrypoint: 'MyHandler',
              environment: 'production',
              service: 'example-worker',
            },
          },
          vectorize_bindings: { VECTORIZE: { index_name: 'my_index' } },
        },
        production: {
          ai_bindings: { AI_BINDING: { project_id: 'some-project-id' } },
          analytics_engine_datasets: { ANALYTICS_ENGINE_BINDING: { dataset: 'api_analytics' } },
          browsers: { BROWSER: {} },
          compatibility_date: '2022-01-01',
          compatibility_flags: ['url_standard'],
          d1_databases: { D1_BINDING: { id: '445e2955-951a-43f8-a35b-a4d0c8138f63' } },
          durable_object_namespaces: { DO_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          env_vars: { foo: { value: 'hello world', type: 'plain_text' } },
          hyperdrive_bindings: { HYPERDRIVE: { id: 'a76a99bc342644deb02c38d66082262a' } },
          kv_namespaces: { KV_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          mtls_certificates: { MTLS: { certificate_id: 'd7cdd17c-916f-4cb7-aabe-585eb382ec4e' } },
          placement: { mode: 'smart' },
          queue_producers: { QUEUE_PRODUCER_BINDING: { name: 'some-queue' } },
          r2_buckets: { R2_BINDING: { jurisdiction: 'eu', name: 'some-bucket' } },
          services: {
            SERVICE_BINDING: {
              entrypoint: 'MyHandler',
              environment: 'production',
              service: 'example-worker',
            },
          },
          vectorize_bindings: { VECTORIZE: { index_name: 'my_index' } },
        },
      },
      name: 'NextJS Blog',
      production_branch: 'main',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pages.projects.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pages.projects.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pages.projects.delete('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.pages.projects.delete('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.pages.projects.edit('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.pages.projects.edit('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      build_config: {
        build_caching: true,
        build_command: 'npm run build',
        destination_dir: 'build',
        root_dir: '/',
        web_analytics_tag: 'cee1c73f6e4743d0b5e6bb1a0bcaabcc',
        web_analytics_token: '021e1057c18547eca7b79f2516f06o7x',
      },
      deployment_configs: {
        preview: {
          ai_bindings: { AI_BINDING: { project_id: 'some-project-id' } },
          analytics_engine_datasets: { ANALYTICS_ENGINE_BINDING: { dataset: 'api_analytics' } },
          browsers: { BROWSER: {} },
          compatibility_date: '2022-01-01',
          compatibility_flags: ['url_standard'],
          d1_databases: { D1_BINDING: { id: '445e2955-951a-43f8-a35b-a4d0c8138f63' } },
          durable_object_namespaces: { DO_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          env_vars: { foo: { value: 'hello world', type: 'plain_text' } },
          hyperdrive_bindings: { HYPERDRIVE: { id: 'a76a99bc342644deb02c38d66082262a' } },
          kv_namespaces: { KV_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          mtls_certificates: { MTLS: { certificate_id: 'd7cdd17c-916f-4cb7-aabe-585eb382ec4e' } },
          placement: { mode: 'smart' },
          queue_producers: { QUEUE_PRODUCER_BINDING: { name: 'some-queue' } },
          r2_buckets: { R2_BINDING: { jurisdiction: 'eu', name: 'some-bucket' } },
          services: {
            SERVICE_BINDING: {
              entrypoint: 'MyHandler',
              environment: 'production',
              service: 'example-worker',
            },
          },
          vectorize_bindings: { VECTORIZE: { index_name: 'my_index' } },
        },
        production: {
          ai_bindings: { AI_BINDING: { project_id: 'some-project-id' } },
          analytics_engine_datasets: { ANALYTICS_ENGINE_BINDING: { dataset: 'api_analytics' } },
          browsers: { BROWSER: {} },
          compatibility_date: '2022-01-01',
          compatibility_flags: ['url_standard'],
          d1_databases: { D1_BINDING: { id: '445e2955-951a-43f8-a35b-a4d0c8138f63' } },
          durable_object_namespaces: { DO_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          env_vars: {
            BUILD_VERSION: { value: '3.3', type: 'plain_text' },
            delete_this_env_var: { value: 'value', type: 'plain_text' },
            secret_var: { value: 'A_CMS_API_TOKEN', type: 'plain_text' },
          },
          hyperdrive_bindings: { HYPERDRIVE: { id: 'a76a99bc342644deb02c38d66082262a' } },
          kv_namespaces: { KV_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          mtls_certificates: { MTLS: { certificate_id: 'd7cdd17c-916f-4cb7-aabe-585eb382ec4e' } },
          placement: { mode: 'smart' },
          queue_producers: { QUEUE_PRODUCER_BINDING: { name: 'some-queue' } },
          r2_buckets: { R2_BINDING: { jurisdiction: 'eu', name: 'some-bucket' } },
          services: {
            SERVICE_BINDING: {
              entrypoint: 'MyHandler',
              environment: 'production',
              service: 'example-worker',
            },
          },
          vectorize_bindings: { VECTORIZE: { index_name: 'my_index' } },
        },
      },
      name: 'NextJS Blog',
      production_branch: 'main',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pages.projects.get('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.pages.projects.get('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('purgeBuildCache: only required params', async () => {
    const responsePromise = client.pages.projects.purgeBuildCache('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('purgeBuildCache: required and optional params', async () => {
    const response = await client.pages.projects.purgeBuildCache('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
