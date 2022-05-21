/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DdosProtectionPlan,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a DDoS protection plan.
 *
 * @summary Creates or updates a DDoS protection plan.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/DdosProtectionPlanCreate.json
 */
async function createDDoSProtectionPlan() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const ddosProtectionPlanName = "test-plan";
  const parameters: DdosProtectionPlan = { location: "westus" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ddosProtectionPlans.beginCreateOrUpdateAndWait(
    resourceGroupName,
    ddosProtectionPlanName,
    parameters
  );
  console.log(result);
}

createDDoSProtectionPlan().catch(console.error);
