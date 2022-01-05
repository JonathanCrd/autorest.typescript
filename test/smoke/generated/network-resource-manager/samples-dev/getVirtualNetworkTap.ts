/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets information about the specified virtual network tap.
 *
 * @summary Gets information about the specified virtual network tap.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/VirtualNetworkTapGet.json
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getVirtualNetworkTap() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const tapName = "testvtap";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkTaps.get(
    resourceGroupName,
    tapName
  );
  console.log(result);
}

getVirtualNetworkTap().catch(console.error);
