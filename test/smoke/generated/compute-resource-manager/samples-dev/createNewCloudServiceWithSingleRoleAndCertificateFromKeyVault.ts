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
 * This sample demonstrates how to Create or update a cloud service. Please note some properties can be set only during cloud service creation.
 *
 * @summary Create or update a cloud service. Please note some properties can be set only during cloud service creation.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/examples/CreateCloudServiceWithSingleRoleAndCertificate.json
 */
import {
  CloudService,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createNewCloudServiceWithSingleRoleAndCertificateFromKeyVault() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const parameters: CloudService = {
    location: "westus",
    properties: {
      configuration: "{ServiceConfiguration}",
      networkProfile: {
        loadBalancerConfigurations: [
          {
            name: "contosolb",
            properties: {
              frontendIPConfigurations: [
                {
                  name: "contosofe",
                  properties: {
                    publicIPAddress: {
                      id:
                        "/subscriptions/{subscription-id}/resourceGroups/ConstosoRG/providers/Microsoft.Network/publicIPAddresses/contosopublicip"
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      osProfile: {
        secrets: [
          {
            sourceVault: {
              id:
                "/subscriptions/{subscription-id}/resourceGroups/ConstosoRG/providers/Microsoft.KeyVault/vaults/{keyvault-name}"
            },
            vaultCertificates: [
              {
                certificateUrl:
                  "https://{keyvault-name}.vault.azure.net:443/secrets/ContosoCertificate/{secret-id}"
              }
            ]
          }
        ]
      },
      packageUrl: "{PackageUrl}",
      roleProfile: {
        roles: [
          {
            name: "ContosoFrontend",
            sku: { name: "Standard_D1_v2", capacity: 1, tier: "Standard" }
          }
        ]
      },
      upgradeMode: "Auto"
    }
  };
  const options = { parameters: parameters };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cloudServiceName,
    options
  );
  console.log(result);
}

createNewCloudServiceWithSingleRoleAndCertificateFromKeyVault().catch(
  console.error
);
