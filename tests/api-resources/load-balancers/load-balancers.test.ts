// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loadBalancers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.loadBalancers.create({
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: 'fallback_pool',
      name: 'www.example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.loadBalancers.create({
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: 'fallback_pool',
      name: 'www.example.com',
      adaptive_routing: { failover_across_pools: true },
      country_pools: {
        GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
        US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
      },
      description: 'Load Balancer for www.example.com',
      location_strategy: { mode: 'pop', prefer_ecs: 'always' },
      pop_pools: {
        LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
        LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
        SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
      },
      proxied: true,
      random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
      region_pools: {
        ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
        WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
      },
      rules: [
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
      ],
      session_affinity: 'none',
      session_affinity_attributes: {
        drain_duration: 100,
        headers: ['x'],
        require_all_headers: true,
        samesite: 'Auto',
        secure: 'Auto',
        zero_downtime_failover: 'none',
      },
      session_affinity_ttl: 1800,
      steering_policy: 'off',
      ttl: 30,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.loadBalancers.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: 'fallback_pool',
      name: 'www.example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.loadBalancers.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: 'fallback_pool',
      name: 'www.example.com',
      adaptive_routing: { failover_across_pools: true },
      country_pools: {
        GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
        US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
      },
      description: 'Load Balancer for www.example.com',
      enabled: true,
      location_strategy: { mode: 'pop', prefer_ecs: 'always' },
      pop_pools: {
        LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
        LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
        SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
      },
      proxied: true,
      random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
      region_pools: {
        ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
        WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
      },
      rules: [
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
      ],
      session_affinity: 'none',
      session_affinity_attributes: {
        drain_duration: 100,
        headers: ['x'],
        require_all_headers: true,
        samesite: 'Auto',
        secure: 'Auto',
        zero_downtime_failover: 'none',
      },
      session_affinity_ttl: 1800,
      steering_policy: 'off',
      ttl: 30,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.loadBalancers.list({ zone_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.loadBalancers.list({ zone_id: '699d98642c564d2e855e9661899b7252' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.loadBalancers.delete('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.loadBalancers.delete('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.loadBalancers.edit('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.loadBalancers.edit('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      adaptive_routing: { failover_across_pools: true },
      country_pools: {
        GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
        US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
      },
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      description: 'Load Balancer for www.example.com',
      enabled: true,
      fallback_pool: 'fallback_pool',
      location_strategy: { mode: 'pop', prefer_ecs: 'always' },
      name: 'www.example.com',
      pop_pools: {
        LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
        LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
        SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
      },
      proxied: true,
      random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
      region_pools: {
        ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
        WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
      },
      rules: [
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: 'fallback_pool',
            location_strategy: { mode: 'pop', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: { default_weight: 0.2, pool_weights: { key: 'key', value: 0 } },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'none',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'none',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'off',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
      ],
      session_affinity: 'none',
      session_affinity_attributes: {
        drain_duration: 100,
        headers: ['x'],
        require_all_headers: true,
        samesite: 'Auto',
        secure: 'Auto',
        zero_downtime_failover: 'none',
      },
      session_affinity_ttl: 1800,
      steering_policy: 'off',
      ttl: 30,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.loadBalancers.get('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.loadBalancers.get('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
