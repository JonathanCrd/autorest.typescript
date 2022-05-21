/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get all ip configurations in a network interface.
 *
 * @summary Get all ip configurations in a network interface.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/NetworkInterfaceIPConfigurationList.json
 */
async function networkInterfaceIPConfigurationList() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const networkInterfaceName = "nic1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.networkInterfaceIPConfigurations.list(
    resourceGroupName,
    networkInterfaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

networkInterfaceIPConfigurationList().catch(console.error);
