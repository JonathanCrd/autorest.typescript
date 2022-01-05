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
 * This sample demonstrates how to Gets the list of Microsoft.Compute SKUs available for your Subscription.
 *
 * @summary Gets the list of Microsoft.Compute SKUs available for your Subscription.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/skus/ListAvailableResourceSkusWithExtendedLocations.json
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function listsAllAvailableResourceSkUsWithExtendedLocationInformation() {
  const subscriptionId = "{subscription-id}";
  const includeExtendedLocations = "true";
  const options = { includeExtendedLocations: includeExtendedLocations };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.resourceSkus.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listsAllAvailableResourceSkUsWithExtendedLocationInformation().catch(
  console.error
);
