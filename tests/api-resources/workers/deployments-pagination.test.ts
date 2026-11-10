import Cloudflare from 'cloudflare';

const deployment = {
  id: 'deployment-1',
  created_on: '2026-01-01T00:00:00Z',
  source: 'api',
  strategy: 'percentage' as const,
  versions: [{ version_id: 'version-1', percentage: 100 }],
};

test('list iterates deployments from the nested result field', async () => {
  const requestedURLs: string[] = [];
  const pages = [
    { result: { deployments: [deployment] }, result_info: { page: 1, per_page: 1 } },
    { result: { deployments: [] }, result_info: { page: 2, per_page: 1 } },
  ];
  const client = new Cloudflare({
    apiToken: 'test-token',
    fetch: async (input) => {
      requestedURLs.push(String(input));
      const body = pages.shift();
      if (!body) throw new Error('Unexpected pagination request');
      return new Response(JSON.stringify({ success: true, errors: [], messages: [], ...body }), {
        headers: { 'content-type': 'application/json' },
      });
    },
  });

  const deployments = [];
  for await (const currentDeployment of client.workers.scripts.deployments.list('worker', {
    account_id: 'account',
    per_page: 1,
  })) {
    deployments.push(currentDeployment);
  }

  expect(deployments).toEqual([deployment]);
  expect(requestedURLs).toHaveLength(2);
  const secondURL = requestedURLs[1];
  if (!secondURL) throw new Error('Expected a second-page request');
  expect(new URL(secondURL).searchParams.get('page')).toBe('2');
});
