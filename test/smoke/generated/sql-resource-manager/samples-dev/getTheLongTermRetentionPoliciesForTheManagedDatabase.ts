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
 * This sample demonstrates how to Gets a database's long term retention policy.
 *
 * @summary Gets a database's long term retention policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceLongTermRetentionPolicyListByDatabase.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getTheLongTermRetentionPoliciesForTheManagedDatabase() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testResourceGroup";
  const managedInstanceName = "testInstance";
  const databaseName = "testDatabase";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstanceLongTermRetentionPolicies.listByDatabase(
    resourceGroupName,
    managedInstanceName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getTheLongTermRetentionPoliciesForTheManagedDatabase().catch(console.error);
