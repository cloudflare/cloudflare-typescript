import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const accountId = '023e105f4ecef8ad9ca31a8372d0c353';

describe('script upload', () => {
  describe('simple script upload', () => {
    test('upload script with minimal configuration', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const responsePromise = client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      const rawResponse = await responsePromise.asResponse();
      expect(rawResponse).toBeInstanceOf(Response);
      const response = await responsePromise;
      expect(response).not.toBeInstanceOf(Response);
      const dataAndResponse = await responsePromise.withResponse();
      expect(dataAndResponse.data).toBe(response);
      expect(dataAndResponse.response).toBe(rawResponse);
    });

    test('upload script with bindings', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response(env.MESSAGE, { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'plain_text',
            name: 'MESSAGE',
            text: 'Hello from binding!',
          },
        ],
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload script with multiple modules', async () => {
      const mainScript = `
        import { helper } from './utils.js';
        export default {
          async fetch(request, env, ctx) {
            return new Response(helper(), { status: 200 });
          },
        }`.trim();

      const utilsScript = `
        export function helper() {
          return 'Hello from module!';
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'index.mjs',
        compatibility_date: '2024-01-01',
        modules: [
          {
            name: 'index.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(mainScript).toString('base64'),
          },
          {
            name: 'utils.js',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(utilsScript).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload script with compatibility flags', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        compatibility_flags: ['nodejs_compat', 'streams_enable_constructors'],
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload script with limits', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        limits: {
          cpu_ms: 50,
        },
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });
  });

  describe('script upload with bindings', () => {
    test('upload with KV namespace binding', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            const value = await env.MY_KV.get('key');
            return new Response(value || 'Not found', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'kv_namespace',
            name: 'MY_KV',
            namespace_id: 'namespace-id-123',
          },
        ],
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload with R2 bucket binding', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            const object = await env.MY_BUCKET.get('file.txt');
            return new Response(object?.body || 'Not found', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'r2_bucket',
            name: 'MY_BUCKET',
            bucket_name: 'my-bucket',
          },
        ],
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload with service binding', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return env.MY_SERVICE.fetch(request);
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'service',
            name: 'MY_SERVICE',
            service: 'other-worker',
            environment: 'production',
          },
        ],
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload with multiple binding types', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            const message = env.MESSAGE;
            const kvValue = await env.MY_KV.get('key');
            return new Response(\`\${message}: \${kvValue}\`, { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'plain_text',
            name: 'MESSAGE',
            text: 'Hello',
          },
          {
            type: 'kv_namespace',
            name: 'MY_KV',
            namespace_id: 'namespace-id-123',
          },
        ],
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });
  });

  describe('script upload with assets', () => {
    test('upload script with assets configuration', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return env.ASSETS.fetch(request);
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'assets',
            name: 'ASSETS',
          },
        ],
        assets: {
          jwt: 'asset-jwt-token',
        },
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload script with assets and custom config', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            const url = new URL(request.url);
            if (url.pathname === '/api') {
              return new Response('API response', { status: 200 });
            }
            return env.ASSETS.fetch(request);
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'assets',
            name: 'ASSETS',
          },
        ],
        assets: {
          jwt: 'asset-jwt-token',
          config: {
            html_handling: 'auto-trailing-slash',
            not_found_handling: '404-page',
            run_worker_first: ['/api/*'],
          },
        },
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });
  });

  describe('script upload with deployment', () => {
    test('upload script and deploy immediately', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        deploy: true,
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload script with annotations', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        annotations: {
          'workers/message': 'Initial deployment',
          'workers/tag': 'v1.0.0',
        },
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });
  });

  describe('script upload with advanced features', () => {
    test('upload script with durable object migrations', async () => {
      const scriptContent = `
        export class MyDurableObject {
          constructor(state, env) {
            this.state = state;
          }
          async fetch(request) {
            return new Response('Hello from DO!', { status: 200 });
          }
        }
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        migrations: {
          new_tag: 'v2',
          old_tag: 'v1',
          new_classes: ['MyDurableObject'],
        },
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload script with usage model', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        usage_model: 'bundled',
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });

    test('upload script with placement mode', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response('Hello World!', { status: 200 });
          },
        }`.trim();

      const response = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        placement: {
          mode: 'smart',
        },
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(response).toBeDefined();
    });
  });

  describe('complete workflow', () => {
    test('create version and deployment', async () => {
      const scriptContent = `
        export default {
          async fetch(request, env, ctx) {
            return new Response(env.MESSAGE, { status: 200 });
          },
        }`.trim();

      const versionResponse = await client.workers.beta.workers.versions.create('test-worker-id', {
        account_id: accountId,
        main_module: 'worker.mjs',
        compatibility_date: '2024-01-01',
        bindings: [
          {
            type: 'plain_text',
            name: 'MESSAGE',
            text: 'Hello World!',
          },
        ],
        modules: [
          {
            name: 'worker.mjs',
            content_type: 'application/javascript+module',
            content_base64: Buffer.from(scriptContent).toString('base64'),
          },
        ],
      });

      expect(versionResponse).toBeDefined();
      expect(versionResponse.id).toBeDefined();

      const deploymentResponse = await client.workers.scripts.deployments.create('test-worker', {
        account_id: accountId,
        strategy: 'percentage',
        versions: [
          {
            percentage: 100,
            version_id: versionResponse.id,
          },
        ],
      });

      expect(deploymentResponse).toBeDefined();
    });
  });
});
