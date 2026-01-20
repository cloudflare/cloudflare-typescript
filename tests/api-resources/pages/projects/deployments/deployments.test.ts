// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deployments', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.create('this-is-my-project-01', {
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

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.pages.projects.deployments.create('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      _headers: await toFile(Buffer.from('# my file contents'), 'README.md'),
      _redirects: await toFile(Buffer.from('# my file contents'), 'README.md'),
      '_routes.json': await toFile(Buffer.from('# my file contents'), 'README.md'),
      '_worker.bundle': await toFile(Buffer.from('# my file contents'), 'README.md'),
      '_worker.js': await toFile(Buffer.from('# my file contents'), 'README.md'),
      branch: 'staging',
      commit_dirty: 'false',
      commit_hash: 'a1b2c3d4e5f6',
      commit_message: 'Update homepage',
      'functions-filepath-routing-config.json': await toFile(Buffer.from('# my file contents'), 'README.md'),
      manifest: '{"index.html": "abc123", "style.css": "def456"}',
      pages_build_output_dir: 'dist',
      wrangler_config_hash: 'wrangler_config_hash',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.list('this-is-my-project-01', {
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

  test('list: required and optional params', async () => {
    const response = await client.pages.projects.deployments.list('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      env: 'preview',
      page: 1,
      per_page: 10,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.delete(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.pages.projects.deployments.delete(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.get(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.pages.projects.deployments.get(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('retry: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.retry(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retry: required and optional params', async () => {
    const response = await client.pages.projects.deployments.retry(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('rollback: only required params', async () => {
    const responsePromise = client.pages.projects.deployments.rollback(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rollback: required and optional params', async () => {
    const response = await client.pages.projects.deployments.rollback(
      'this-is-my-project-01',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
