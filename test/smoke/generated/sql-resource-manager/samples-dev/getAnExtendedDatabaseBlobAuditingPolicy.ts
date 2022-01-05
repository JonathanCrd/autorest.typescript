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
 * This sample demonstrates how to Gets an extended database's blob auditing policy.
 *
 * @summary Gets an extended database's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ExtendedDatabaseBlobAuditingGet.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getAnExtendedDatabaseBlobAuditingPolicy() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "blobauditingtest-6852";
  const serverName = "blobauditingtest-2080";
  const databaseName = "testdb";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.extendedDatabaseBlobAuditingPolicies.get(
    resourceGroupName,
    serverName,
    databaseName
  );
  console.log(result);
}

getAnExtendedDatabaseBlobAuditingPolicy().catch(console.error);
