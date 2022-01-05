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
 * This sample demonstrates how to Gets properties of a guest operating system family that can be specified in the XML service configuration (.cscfg) for a cloud service.
 *
 * @summary Gets properties of a guest operating system family that can be specified in the XML service configuration (.cscfg) for a cloud service.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/examples/GetCloudServiceOSFamily.json
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getCloudServiceOSFamily() {
  const subscriptionId = "{subscription-id}";
  const location = "westus2";
  const osFamilyName = "3";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServiceOperatingSystems.getOSFamily(
    location,
    osFamilyName
  );
  console.log(result);
}

getCloudServiceOSFamily().catch(console.error);
