// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.cache.cacheReserve.clear',
    fullyQualifiedName: 'cache.cacheReserve.clear',
    httpMethod: 'post',
    httpPath: '/zones/{zone_id}/cache/cache_reserve_clear',
  },
  {
    clientCallName: 'client.cache.cacheReserve.edit',
    fullyQualifiedName: 'cache.cacheReserve.edit',
    httpMethod: 'patch',
    httpPath: '/zones/{zone_id}/cache/cache_reserve',
  },
  {
    clientCallName: 'client.cache.cacheReserve.get',
    fullyQualifiedName: 'cache.cacheReserve.get',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/cache_reserve',
  },
  {
    clientCallName: 'client.cache.cacheReserve.status',
    fullyQualifiedName: 'cache.cacheReserve.status',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/cache_reserve_clear',
  },
  {
    clientCallName: 'client.cache.smartTieredCache.delete',
    fullyQualifiedName: 'cache.smartTieredCache.delete',
    httpMethod: 'delete',
    httpPath: '/zones/{zone_id}/cache/tiered_cache_smart_topology_enable',
  },
  {
    clientCallName: 'client.cache.smartTieredCache.edit',
    fullyQualifiedName: 'cache.smartTieredCache.edit',
    httpMethod: 'patch',
    httpPath: '/zones/{zone_id}/cache/tiered_cache_smart_topology_enable',
  },
  {
    clientCallName: 'client.cache.smartTieredCache.get',
    fullyQualifiedName: 'cache.smartTieredCache.get',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/tiered_cache_smart_topology_enable',
  },
  {
    clientCallName: 'client.cache.variants.delete',
    fullyQualifiedName: 'cache.variants.delete',
    httpMethod: 'delete',
    httpPath: '/zones/{zone_id}/cache/variants',
  },
  {
    clientCallName: 'client.cache.variants.edit',
    fullyQualifiedName: 'cache.variants.edit',
    httpMethod: 'patch',
    httpPath: '/zones/{zone_id}/cache/variants',
  },
  {
    clientCallName: 'client.cache.variants.get',
    fullyQualifiedName: 'cache.variants.get',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/variants',
  },
  {
    clientCallName: 'client.cache.regionalTieredCache.edit',
    fullyQualifiedName: 'cache.regionalTieredCache.edit',
    httpMethod: 'patch',
    httpPath: '/zones/{zone_id}/cache/regional_tiered_cache',
  },
  {
    clientCallName: 'client.cache.regionalTieredCache.get',
    fullyQualifiedName: 'cache.regionalTieredCache.get',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/regional_tiered_cache',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.create',
    fullyQualifiedName: 'cache.originCloudRegions.create',
    httpMethod: 'post',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.list',
    fullyQualifiedName: 'cache.originCloudRegions.list',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.delete',
    fullyQualifiedName: 'cache.originCloudRegions.delete',
    httpMethod: 'delete',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.bulkDelete',
    fullyQualifiedName: 'cache.originCloudRegions.bulkDelete',
    httpMethod: 'delete',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions/batch',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.bulkEdit',
    fullyQualifiedName: 'cache.originCloudRegions.bulkEdit',
    httpMethod: 'patch',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions/batch',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.edit',
    fullyQualifiedName: 'cache.originCloudRegions.edit',
    httpMethod: 'patch',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.get',
    fullyQualifiedName: 'cache.originCloudRegions.get',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}',
  },
  {
    clientCallName: 'client.cache.originCloudRegions.supportedRegions',
    fullyQualifiedName: 'cache.originCloudRegions.supportedRegions',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/origin_cloud_regions/supported_regions',
  },
  {
    clientCallName: 'client.argo.tieredCaching.edit',
    fullyQualifiedName: 'argo.tieredCaching.edit',
    httpMethod: 'patch',
    httpPath: '/zones/{zone_id}/argo/tiered_caching',
  },
  {
    clientCallName: 'client.argo.tieredCaching.get',
    fullyQualifiedName: 'argo.tieredCaching.get',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/argo/tiered_caching',
  },
  {
    clientCallName: 'client.originPostQuantumEncryption.update',
    fullyQualifiedName: 'originPostQuantumEncryption.update',
    httpMethod: 'put',
    httpPath: '/zones/{zone_id}/cache/origin_post_quantum_encryption',
  },
  {
    clientCallName: 'client.originPostQuantumEncryption.get',
    fullyQualifiedName: 'originPostQuantumEncryption.get',
    httpMethod: 'get',
    httpPath: '/zones/{zone_id}/cache/origin_post_quantum_encryption',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
