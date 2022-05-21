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
  TdeCertificate,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a TDE certificate for a given server.
 *
 * @summary Creates a TDE certificate for a given server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/SqlTdeCertificateCreate.json
 */
async function uploadATdeCertificate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000001";
  const resourceGroupName = "testtdecert";
  const serverName = "testtdecert";
  const parameters: TdeCertificate = { privateBlob: "MIIXXXXXXXX" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.tdeCertificates.beginCreateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

uploadATdeCertificate().catch(console.error);
