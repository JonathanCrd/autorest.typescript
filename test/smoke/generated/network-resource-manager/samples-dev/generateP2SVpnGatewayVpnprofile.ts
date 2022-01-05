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
 * This sample demonstrates how to Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
 *
 * @summary Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/P2SVpnGatewayGenerateVpnProfile.json
 */
import {
  P2SVpnProfileParameters,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function generateP2SVpnGatewayVpnprofile() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const gatewayName = "p2sVpnGateway1";
  const parameters: P2SVpnProfileParameters = {
    authenticationMethod: "EAPTLS"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.p2SVpnGateways.beginGenerateVpnProfileAndWait(
    resourceGroupName,
    gatewayName,
    parameters
  );
  console.log(result);
}

generateP2SVpnGatewayVpnprofile().catch(console.error);
