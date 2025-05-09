import { dynamicTools } from '../src/dynamic-tools';
import { Endpoint } from '../src/tools';

describe('dynamicTools', () => {
  const fakeClient = {} as any;

  const endpoints: Endpoint[] = [
    makeEndpoint('test_read_endpoint', 'test_resource', 'read', ['test']),
    makeEndpoint('test_write_endpoint', 'test_resource', 'write', ['test']),
    makeEndpoint('user_endpoint', 'user', 'read', ['user', 'admin']),
    makeEndpoint('admin_endpoint', 'admin', 'write', ['admin']),
  ];

  const tools = dynamicTools(endpoints);

  describe('list_api_endpoints', () => {
    const listEndpointsTool = tools.find((tool) => tool.tool.name === 'list_api_endpoints');

    it('should return all endpoints when no search query is provided', async () => {
      if (!listEndpointsTool) fail('list_api_endpoints tool not found');

      const result = await listEndpointsTool.handler(fakeClient, {});

      expect(result.tools).toHaveLength(endpoints.length);
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('test_read_endpoint');
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('test_write_endpoint');
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('user_endpoint');
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('admin_endpoint');
    });

    it('should filter endpoints by name', async () => {
      if (!listEndpointsTool) fail('list_api_endpoints tool not found');

      const result = await listEndpointsTool.handler(fakeClient, { search_query: 'user' });

      expect(result.tools).toHaveLength(1);
      expect(result.tools[0].name).toBe('user_endpoint');
    });

    it('should filter endpoints by resource', async () => {
      if (!listEndpointsTool) fail('list_api_endpoints tool not found');

      const result = await listEndpointsTool.handler(fakeClient, { search_query: 'admin' });

      expect(result.tools.some((t: { resource: string }) => t.resource === 'admin')).toBeTruthy();
    });

    it('should filter endpoints by tag', async () => {
      if (!listEndpointsTool) fail('list_api_endpoints tool not found');

      const result = await listEndpointsTool.handler(fakeClient, { search_query: 'admin' });

      expect(result.tools.some((t: { tags: string[] }) => t.tags.includes('admin'))).toBeTruthy();
    });

    it('should be case insensitive in search', async () => {
      if (!listEndpointsTool) fail('list_api_endpoints tool not found');

      const result = await listEndpointsTool.handler(fakeClient, { search_query: 'ADMIN' });

      expect(result.tools.length).toBeGreaterThan(0);
      result.tools.forEach((tool: { name: string; resource: string; tags: string[] }) => {
        expect(
          tool.name.toLowerCase().includes('admin') ||
            tool.resource.toLowerCase().includes('admin') ||
            tool.tags.some((tag: string) => tag.toLowerCase().includes('admin')),
        ).toBeTruthy();
      });
    });
  });

  describe('get_api_endpoint_schema', () => {
    const getEndpointSchemaTool = tools.find((tool) => tool.tool.name === 'get_api_endpoint_schema');

    it('should return schema for existing endpoint', async () => {
      if (!getEndpointSchemaTool) fail('get_api_endpoint_schema tool not found');

      const result = await getEndpointSchemaTool.handler(fakeClient, { endpoint: 'test_read_endpoint' });

      expect(result).toEqual(endpoints[0]?.tool);
    });

    it('should throw error for non-existent endpoint', async () => {
      if (!getEndpointSchemaTool) fail('get_api_endpoint_schema tool not found');

      await expect(
        getEndpointSchemaTool.handler(fakeClient, { endpoint: 'non_existent_endpoint' }),
      ).rejects.toThrow('Endpoint non_existent_endpoint not found');
    });

    it('should throw error when no endpoint provided', async () => {
      if (!getEndpointSchemaTool) fail('get_api_endpoint_schema tool not found');

      await expect(getEndpointSchemaTool.handler(fakeClient, undefined)).rejects.toThrow(
        'No endpoint provided',
      );
    });
  });

  describe('invoke_api_endpoint', () => {
    const invokeEndpointTool = tools.find((tool) => tool.tool.name === 'invoke_api_endpoint');

    it('should successfully invoke endpoint with valid arguments', async () => {
      if (!invokeEndpointTool) fail('invoke_api_endpoint tool not found');

      const mockHandler = endpoints[0]?.handler as jest.Mock;
      mockHandler.mockClear();

      await invokeEndpointTool.handler(fakeClient, {
        endpoint_name: 'test_read_endpoint',
        args: { testParam: 'test value' },
      });

      expect(mockHandler).toHaveBeenCalledWith(fakeClient, { testParam: 'test value' });
    });

    it('should throw error for non-existent endpoint', async () => {
      if (!invokeEndpointTool) fail('invoke_api_endpoint tool not found');

      await expect(
        invokeEndpointTool.handler(fakeClient, {
          endpoint_name: 'non_existent_endpoint',
          args: { testParam: 'test value' },
        }),
      ).rejects.toThrow(/Endpoint non_existent_endpoint not found/);
    });

    it('should throw error when no arguments provided', async () => {
      if (!invokeEndpointTool) fail('invoke_api_endpoint tool not found');

      await expect(invokeEndpointTool.handler(fakeClient, undefined)).rejects.toThrow('No endpoint provided');
    });

    it('should throw error for invalid argument schema', async () => {
      if (!invokeEndpointTool) fail('invoke_api_endpoint tool not found');

      await expect(
        invokeEndpointTool.handler(fakeClient, {
          endpoint_name: 'test_read_endpoint',
          args: { wrongParam: 'test value' }, // Missing required testParam
        }),
      ).rejects.toThrow(/Invalid arguments for endpoint/);
    });
  });
});

function makeEndpoint(
  name: string,
  resource: string,
  operation: 'read' | 'write',
  tags: string[] = [],
): Endpoint {
  return {
    metadata: {
      resource,
      operation,
      tags,
    },
    tool: {
      name,
      description: `Test endpoint for ${name}`,
      inputSchema: {
        type: 'object',
        properties: {
          testParam: { type: 'string' },
        },
        required: ['testParam'],
      },
    },
    handler: jest.fn().mockResolvedValue({ success: true }),
  };
}
