import * as coreClient from "@azure/core-client";

export const ServicesProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceAccessPolicyEntry"
            }
          }
        }
      },
      cosmosDbConfiguration: {
        serializedName: "cosmosDbConfiguration",
        type: {
          name: "Composite",
          className: "ServiceCosmosDbConfigurationInfo"
        }
      },
      authenticationConfiguration: {
        serializedName: "authenticationConfiguration",
        type: {
          name: "Composite",
          className: "ServiceAuthenticationConfigurationInfo"
        }
      },
      corsConfiguration: {
        serializedName: "corsConfiguration",
        type: {
          name: "Composite",
          className: "ServiceCorsConfigurationInfo"
        }
      },
      exportConfiguration: {
        serializedName: "exportConfiguration",
        type: {
          name: "Composite",
          className: "ServiceExportConfigurationInfo"
        }
      },
      privateEndpointConnections: {
        serializedName: "privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      publicNetworkAccess: {
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      acrConfiguration: {
        serializedName: "acrConfiguration",
        type: {
          name: "Composite",
          className: "ServiceAcrConfigurationInfo"
        }
      }
    }
  }
};

export const ServiceAccessPolicyEntry: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceAccessPolicyEntry",
    modelProperties: {
      objectId: {
        constraints: {
          Pattern: new RegExp(
            "^(([0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}){1})+$"
          )
        },
        serializedName: "objectId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceCosmosDbConfigurationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceCosmosDbConfigurationInfo",
    modelProperties: {
      offerThroughput: {
        constraints: {
          InclusiveMaximum: 10000,
          InclusiveMinimum: 400
        },
        serializedName: "offerThroughput",
        type: {
          name: "Number"
        }
      },
      keyVaultKeyUri: {
        serializedName: "keyVaultKeyUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceAuthenticationConfigurationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceAuthenticationConfigurationInfo",
    modelProperties: {
      authority: {
        serializedName: "authority",
        type: {
          name: "String"
        }
      },
      audience: {
        serializedName: "audience",
        type: {
          name: "String"
        }
      },
      smartProxyEnabled: {
        serializedName: "smartProxyEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServiceCorsConfigurationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceCorsConfigurationInfo",
    modelProperties: {
      origins: {
        serializedName: "origins",
        type: {
          name: "Sequence",
          element: {
            constraints: {
              Pattern: new RegExp(
                "^(?:(?:(?:[hH][tT][tT][pP](?:[sS]|))\\:\\/\\/(?:[a-zA-Z0-9-]+[.]?)+(?:\\:[0-9]{1,5})?|[*]))$"
              )
            },
            type: {
              name: "String"
            }
          }
        }
      },
      headers: {
        serializedName: "headers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      methods: {
        serializedName: "methods",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      maxAge: {
        constraints: {
          InclusiveMaximum: 99999,
          InclusiveMinimum: 0
        },
        serializedName: "maxAge",
        type: {
          name: "Number"
        }
      },
      allowCredentials: {
        serializedName: "allowCredentials",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServiceExportConfigurationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceExportConfigurationInfo",
    modelProperties: {
      storageAccountName: {
        serializedName: "storageAccountName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceAcrConfigurationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceAcrConfigurationInfo",
    modelProperties: {
      loginServers: {
        serializedName: "loginServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ServicesResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          Pattern: new RegExp("^[a-z0-9][a-z0-9-]{1,21}[a-z0-9]$")
        },
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["fhir", "fhir-Stu3", "fhir-R4"]
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ServicesResourceIdentity"
        }
      }
    }
  }
};

export const ServicesResourceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesResourceIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetails",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetailsInternal"
        }
      }
    }
  }
};

export const ErrorDetailsInternal: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetailsInternal",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServicesPatchDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesPatchDescription",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServicesDescriptionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesDescriptionListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServicesDescription"
            }
          }
        }
      }
    }
  }
};

export const CheckNameAvailabilityParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServicesNameAvailabilityInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesNameAvailabilityInfo",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Invalid", "AlreadyExists"]
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResultDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResultDescription",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnectionDescription"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResourceListResultDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResultDescription",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResourceDescription"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceTags: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceTags",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ResourceCore: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceCore",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          Pattern: new RegExp("^[a-z0-9][a-z0-9-]{1,21}[a-z0-9]$")
        },
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetailsInternal"
        }
      }
    }
  }
};

export const DicomServiceCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DicomServiceCollection",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DicomService"
            }
          }
        }
      }
    }
  }
};

export const DicomServiceAuthenticationConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DicomServiceAuthenticationConfiguration",
    modelProperties: {
      authority: {
        serializedName: "authority",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      audiences: {
        serializedName: "audiences",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const IotConnectorCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotConnectorCollection",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IotConnector"
            }
          }
        }
      }
    }
  }
};

export const IotEventHubIngestionEndpointConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotEventHubIngestionEndpointConfiguration",
    modelProperties: {
      eventHubName: {
        serializedName: "eventHubName",
        type: {
          name: "String"
        }
      },
      consumerGroup: {
        serializedName: "consumerGroup",
        type: {
          name: "String"
        }
      },
      fullyQualifiedEventHubNamespace: {
        serializedName: "fullyQualifiedEventHubNamespace",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotMappingProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotMappingProperties",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ServiceManagedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceManagedIdentity",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ServiceManagedIdentityIdentity"
        }
      }
    }
  }
};

export const ServiceManagedIdentityIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceManagedIdentityIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotFhirDestinationCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotFhirDestinationCollection",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IotFhirDestination"
            }
          }
        }
      }
    }
  }
};

export const IotDestinationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotDestinationProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FhirServiceCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirServiceCollection",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FhirService"
            }
          }
        }
      }
    }
  }
};

export const FhirServiceAccessPolicyEntry: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirServiceAccessPolicyEntry",
    modelProperties: {
      objectId: {
        constraints: {
          Pattern: new RegExp(
            "^(([0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}){1})+$"
          )
        },
        serializedName: "objectId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FhirServiceAcrConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirServiceAcrConfiguration",
    modelProperties: {
      loginServers: {
        serializedName: "loginServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const FhirServiceAuthenticationConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirServiceAuthenticationConfiguration",
    modelProperties: {
      authority: {
        serializedName: "authority",
        type: {
          name: "String"
        }
      },
      audience: {
        serializedName: "audience",
        type: {
          name: "String"
        }
      },
      smartProxyEnabled: {
        serializedName: "smartProxyEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const FhirServiceCorsConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirServiceCorsConfiguration",
    modelProperties: {
      origins: {
        serializedName: "origins",
        type: {
          name: "Sequence",
          element: {
            constraints: {
              Pattern: new RegExp(
                "^(?:(?:(?:[hH][tT][tT][pP](?:[sS]|))\\:\\/\\/(?:[a-zA-Z0-9-]+[.]?)+(?:\\:[0-9]{1,5})?|[*]))$"
              )
            },
            type: {
              name: "String"
            }
          }
        }
      },
      headers: {
        serializedName: "headers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      methods: {
        serializedName: "methods",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      maxAge: {
        constraints: {
          InclusiveMaximum: 99999,
          InclusiveMinimum: 0
        },
        serializedName: "maxAge",
        type: {
          name: "Number"
        }
      },
      allowCredentials: {
        serializedName: "allowCredentials",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const FhirServiceExportConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirServiceExportConfiguration",
    modelProperties: {
      storageAccountName: {
        serializedName: "storageAccountName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListOperations: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListOperations",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationDetail"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDetail",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResultsDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResultsDescription",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...Resource.type.modelProperties,
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      groupId: {
        serializedName: "properties.groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ServicesDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServicesDescription",
    modelProperties: {
      ...ServicesResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ServicesProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const LocationBasedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationBasedResource",
    modelProperties: {
      ...ResourceCore.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TaggedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TaggedResource",
    modelProperties: {
      ...ResourceTags.type.modelProperties,
      ...LocationBasedResource.type.modelProperties
    }
  }
};

export const WorkspacePatchResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspacePatchResource",
    modelProperties: {
      ...ResourceTags.type.modelProperties
    }
  }
};

export const DicomServicePatchResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DicomServicePatchResource",
    modelProperties: {
      ...ResourceTags.type.modelProperties
    }
  }
};

export const IotConnectorPatchResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotConnectorPatchResource",
    modelProperties: {
      ...ResourceTags.type.modelProperties,
      ...ServiceManagedIdentity.type.modelProperties
    }
  }
};

export const FhirServicePatchResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirServicePatchResource",
    modelProperties: {
      ...ResourceTags.type.modelProperties,
      ...ServiceManagedIdentity.type.modelProperties
    }
  }
};

export const IotConnector: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotConnector",
    modelProperties: {
      ...TaggedResource.type.modelProperties,
      ...ServiceManagedIdentity.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      ingestionEndpointConfiguration: {
        serializedName: "properties.ingestionEndpointConfiguration",
        type: {
          name: "Composite",
          className: "IotEventHubIngestionEndpointConfiguration"
        }
      },
      deviceMapping: {
        serializedName: "properties.deviceMapping",
        type: {
          name: "Composite",
          className: "IotMappingProperties"
        }
      }
    }
  }
};

export const FhirService: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FhirService",
    modelProperties: {
      ...TaggedResource.type.modelProperties,
      ...ServiceManagedIdentity.type.modelProperties,
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      accessPolicies: {
        serializedName: "properties.accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FhirServiceAccessPolicyEntry"
            }
          }
        }
      },
      acrConfiguration: {
        serializedName: "properties.acrConfiguration",
        type: {
          name: "Composite",
          className: "FhirServiceAcrConfiguration"
        }
      },
      authenticationConfiguration: {
        serializedName: "properties.authenticationConfiguration",
        type: {
          name: "Composite",
          className: "FhirServiceAuthenticationConfiguration"
        }
      },
      corsConfiguration: {
        serializedName: "properties.corsConfiguration",
        type: {
          name: "Composite",
          className: "FhirServiceCorsConfiguration"
        }
      },
      exportConfiguration: {
        serializedName: "properties.exportConfiguration",
        type: {
          name: "Composite",
          className: "FhirServiceExportConfiguration"
        }
      }
    }
  }
};

export const IotFhirDestinationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotFhirDestinationProperties",
    modelProperties: {
      ...IotDestinationProperties.type.modelProperties,
      resourceIdentityResolutionType: {
        serializedName: "resourceIdentityResolutionType",
        required: true,
        type: {
          name: "String"
        }
      },
      fhirServiceResourceId: {
        serializedName: "fhirServiceResourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      fhirMapping: {
        serializedName: "fhirMapping",
        type: {
          name: "Composite",
          className: "IotMappingProperties"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionDescription",
    modelProperties: {
      ...PrivateEndpointConnection.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const PrivateLinkResourceDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceDescription",
    modelProperties: {
      ...PrivateLinkResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const Workspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      ...TaggedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "WorkspaceProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const DicomService: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DicomService",
    modelProperties: {
      ...TaggedResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      authenticationConfiguration: {
        serializedName: "properties.authenticationConfiguration",
        type: {
          name: "Composite",
          className: "DicomServiceAuthenticationConfiguration"
        }
      },
      serviceUrl: {
        serializedName: "properties.serviceUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotFhirDestination: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotFhirDestination",
    modelProperties: {
      ...LocationBasedResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      resourceIdentityResolutionType: {
        serializedName: "properties.resourceIdentityResolutionType",
        required: true,
        type: {
          name: "String"
        }
      },
      fhirServiceResourceId: {
        serializedName: "properties.fhirServiceResourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      fhirMapping: {
        serializedName: "properties.fhirMapping",
        type: {
          name: "Composite",
          className: "IotMappingProperties"
        }
      }
    }
  }
};
