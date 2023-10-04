     

### <a id="documentation-body"></a>

![Hackolade image](/nse-staging/image1.png?raw=true)

MongoDB Physical Model
----------------------

#### Schema for:

Model name: New Model

Author:

Version:

File name: nse-beta.hck.json

File path: /Volumes/Scratch HD/Beck/NSe/Database/nse-beta.hck.json

Printed On: Thu Jun 01 2023 13:52:49 GMT-0400 (Eastern Daylight Time)

Created with: [Hackolade](https://hackolade.com/) - Polyglot data modeling for NoSQL databases, storage formats, REST APIs, and JSON in RDBMS

### <a id="contents"></a>

*   [Table of Contents](#contents)
*   [1\. Model](#model)
*   [2\. Databases](#containers)
    *   [2.1 nse-staging](#c11f356c-4b16-4d91-8d2b-cd055aead9e0)
        
        [2.1.2. Collections](#c11f356c-4b16-4d91-8d2b-cd055aead9e0-children)
        
        [2.1.2.1 apikeys](#b9665bc1-91b3-4e09-b755-22cb96f67723)
        
        [2.1.2.2 captchas](#abc54747-bd03-4aab-9a2c-cf11c60e6a93)
        
        [2.1.2.3 cloudstorages](#ee6c86e8-e163-4a96-a044-16173901991f)
        
        [2.1.2.4 domains](#9ac69500-3e48-4537-a4f8-8f3d8b06ca6a)
        
        [2.1.2.5 emailproviders](#ed42c176-2f77-4b10-b832-db6976f5a268)
        
        [2.1.2.6 emailreports](#277372dd-7714-4c0a-935a-a80177b939f3)
        
        [2.1.2.7 emailreports\_backup](#a1f30ee9-97c3-4199-b150-5d5bfa49848c)
        
        [2.1.2.8 events](#4fdbc167-5d68-4330-b18b-fdd0ee36f253)
        
        [2.1.2.9 notifications](#c0dbdd3b-f213-4066-bf85-523b88292c6f)
        
        [2.1.2.10 notificationssettings](#fe399826-287f-453f-abb7-98b1f49aacc3)
        
        [2.1.2.11 providerdetails](#40c10d28-5c14-4905-8432-a12a4b9a08d3)
        
        [2.1.2.12 providergroups](#64d43079-0215-426f-9d5e-f0fc257c3c99)
        
        [2.1.2.13 smsotps](#61faf0b8-1c0c-4896-9ac2-c146d3227ce3)
        
        [2.1.2.14 users](#ba95bb47-a973-4c8f-ad40-984266f98e88)
        
        [2.1.2.15 webhooks](#de3e3484-96c3-44d0-9942-94947d2bd3c0)
        
*   [3\. Relationships](#relationships)
    *   [3.1 fk domains.\_id to providergroups.domain.0](#3bae0de9-e8f6-42d2-83e2-b23e88430382)
    *   [3.2 fk domains.\_id to providergroups.domain.0](#cf425178-996d-4571-a904-563cce7b3d47)
    *   [3.3 fk emailproviders.\_id to emailreports.emailProvider](#ec55de17-ee62-43fc-a34e-8e69173d810c)
    *   [3.4 fk emailproviders.\_id to events.emailProvider](#2cf69109-c125-46a4-8fbb-fc46790445ea)
    *   [3.5 fk emailproviders.\_id to events.emailProvider](#061d0dd3-3b5e-4dc7-9ff1-c484109eea56)
    *   [3.6 fk emailproviders.\_id to providerdetails.provider](#9be59619-a8e7-4f9a-a5e9-8209817f1ca1)
    *   [3.7 fk emailproviders.\_id to providerdetails.provider](#4645ecd0-837c-4d1c-9624-bbbfeb0c1169)
    *   [3.8 fk emailproviders.\_id to webhooks.provider](#344c5400-de15-41c4-a95f-6d422dbe3355)
    *   [3.9 fk emailproviders.\_id to webhooks.provider](#5d1df391-37d1-4bd6-8980-3a0d7a6feb4b)
    *   [3.10 fk providerdetails.\_id to emailreports.providerDetails](#fa631839-c564-4f98-bc3d-ec1e07aedb06)
    *   [3.11 fk providerdetails.\_id to emailreports.providerDetails](#a6d443c9-a199-4736-a95c-0df3872f65fe)
    *   [3.12 fk providerdetails.\_id to emailreports.providerdetails](#e80d8065-e9a2-477d-af88-ea1231122f58)
    *   [3.13 fk providerdetails.\_id to emailreports\_backup.providerDetails](#b3b5f1ba-4405-4558-bbc3-1fb13100ab22)
    *   [3.14 fk providerdetails.\_id to providergroups.providers.0](#e0d87a8b-3822-406f-bed6-5494d4ad5efc)
    *   [3.15 fk providerdetails.\_id to providergroups.providers.0](#73d6ad92-3e13-40c1-96c6-ccea2f353d50)
    *   [3.16 fk providergroups.\_id to apikeys.providerGroup](#f1d57db7-ef05-4b57-bfad-1999e62bf734)
    *   [3.17 fk providergroups.\_id to emailreports.group](#3c28ada4-861e-48a5-b22a-9205c285fa23)
    *   [3.18 fk providergroups.\_id to emailreports.group](#0fdfeb74-7e99-42ab-9531-07e49297a738)
    *   [3.19 fk providergroups.\_id to emailreports\_backup.group](#799c4c12-ca70-42af-aeb9-a081c6a20c23)
    *   [3.20 fk providergroups.\_id to notificationssettings.providerGroup](#907f635d-ec04-4b5e-b551-e4ebdbf4df1e)
    *   [3.21 fk providergroups.\_id to webhooks.providerGroup](#41c6a148-0ab2-488d-a975-a5d1111c0539)
    *   [3.22 fk users.\_id to apikeys.user](#3e852a60-ff05-4f5b-8900-1ad664a0951b)
    *   [3.23 fk users.\_id to apikeys.user](#2fbabb22-13e4-4a2a-8fde-9ac5ea6adfe1)
    *   [3.24 fk users.\_id to cloudstorages.user](#f4477814-6360-436b-a55e-7c11007f19d9)
    *   [3.25 fk users.\_id to cloudstorages.user](#6298bc52-eea2-4b5d-901c-098e63466d50)
    *   [3.26 fk users.\_id to domains.user](#2b672d56-9622-4c1b-b7c9-efb3bca2d264)
    *   [3.27 fk users.\_id to domains.user](#b8b74f1a-66fb-47ac-9cf9-21a0e24617fe)
    *   [3.28 fk users.\_id to emailproviders.user](#86c6713e-b602-44bc-ba48-db557751ccc8)
    *   [3.29 fk users.\_id to emailproviders.user](#4d17ad70-8582-4971-bd5a-ade31f3deee3)
    *   [3.30 fk users.\_id to emailreports.user](#955b9f0c-6c96-43c0-8425-3cc1cae15f6f)
    *   [3.31 fk users.\_id to emailreports.user](#030e54a8-f797-4374-8fca-afb0db2b8b09)
    *   [3.32 fk users.\_id to emailreports\_backup.user](#e07f5dd7-e62c-4b4d-8292-8f0303b9f059)
    *   [3.33 fk users.\_id to events.user](#7d01c541-198a-4c88-a6c1-330b3d6e5d80)
    *   [3.34 fk users.\_id to events.user](#b43c49cd-3dc2-40c9-b2b7-3c7b4c6d77cb)
    *   [3.35 fk users.\_id to notificationssettings.createdBy](#5c0eb35b-c6ad-48d0-8008-21a57a05f9ce)
    *   [3.36 fk users.\_id to notificationssettings.user](#28160dab-af74-4840-8350-26db89e9f475)
    *   [3.37 fk users.\_id to notificationssettings.user](#293b98db-6c36-4873-98ef-fa0c7dc24eef)
    *   [3.38 fk users.\_id to providerdetails.user](#24b221f1-ef64-42bb-87c6-97c6e30157a2)
    *   [3.39 fk users.\_id to providerdetails.user](#04322f87-f7db-472e-bac4-19d0f6cb291d)
    *   [3.40 fk users.\_id to providergroups.user](#1e80c652-a654-46c5-bbfe-e8afac4396c3)
    *   [3.41 fk users.\_id to providergroups.user](#796dd32f-5519-4599-929f-f8ce81566639)
    *   [3.42 fk users.\_id to webhooks.createdBy](#8b086206-4cd5-4335-ad59-eb3e93f3d19f)
    *   [3.43 fk users.\_id to webhooks.user](#97062c7f-6d5f-4351-a5be-e31080f4cfe7)
    *   [3.44 fk users.\_id to webhooks.user](#e1f22e58-5abb-4195-87d8-4124d794fb20)

### <a id="model"></a>

##### 1\. Model

##### 1.1 Model **New Model**

##### 1.1.1 **New Model** Entity Relationship Diagram

![Hackolade image](/nse-staging/image2.png?raw=true)

##### 1.1.2 **New Model** Properties

##### 1.1.2.1 **Details** tab

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td><span>Model name</span></td><td>New Model</td></tr><tr><td><span>Technical name</span></td><td></td></tr><tr><td><span>Description</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Author</span></td><td></td></tr><tr><td><span>Version</span></td><td></td></tr><tr><td><span>Target</span></td><td>MongoDB</td></tr><tr><td><span>DB version</span></td><td>v5.0</td></tr><tr><td><span>Synchronization Id</span></td><td></td></tr><tr><td><span>Lineage capture</span></td><td></td></tr><tr><td><span>Polyglot models</span></td><td></td></tr><tr><td><span>Comments</span></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 1.1.3 **New Model** DB Definitions

### <a id="containers"></a>

##### 2\. Databases

### <a id="c11f356c-4b16-4d91-8d2b-cd055aead9e0"></a>2.1 Database **nse-staging**

![Hackolade image](/nse-staging/image3.png?raw=true)

##### 2.1.1 **nse-staging** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>nse-staging</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c11f356c-4b16-4d91-8d2b-cd055aead9e0-children"></a>2.1.2 **nse-staging** Collections

### <a id="b9665bc1-91b3-4e09-b755-22cb96f67723"></a>2.1.2.1 Collection **apikeys**

##### 2.1.2.1.1 **apikeys** Tree Diagram

![Hackolade image](/nse-staging/image4.png?raw=true)

##### 2.1.2.1.2 **apikeys** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>apikeys</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3 **apikeys** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#18cd0b56-8427-4cc0-8a80-c892cfcc34f5 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#687e7461-418f-4e2f-abe4-3926eac1140d class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e08ae0e8-a2c0-429c-81a8-42f3eaaa58a5 class="margin-0">description</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f768e6da-b5a1-4f54-8342-c1105e50233c class="margin-0">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#09608053-f98b-4616-9d01-193bb9104e62 class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d46f235d-00d6-42e6-bcdd-1b9221827b20 class="margin-0">providerGroup</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e82800bb-3acd-4f21-b630-f93b0b10ebda class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6787b970-404f-4de4-a4ad-07bcbf57e37e class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d94d3187-42e3-46db-aa70-e2e0975c7628 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#909c4d9b-db2b-4b09-b354-f2ed9ff8680b class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="18cd0b56-8427-4cc0-8a80-c892cfcc34f5"></a>2.1.2.1.3.1 Field **\_id**

##### 2.1.2.1.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image5.png?raw=true)

##### 2.1.2.1.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="687e7461-418f-4e2f-abe4-3926eac1140d"></a>2.1.2.1.3.2 Field **name**

##### 2.1.2.1.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-staging/image6.png?raw=true)

##### 2.1.2.1.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>test smtp</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e08ae0e8-a2c0-429c-81a8-42f3eaaa58a5"></a>2.1.2.1.3.3 Field **description**

##### 2.1.2.1.3.3.1 **description** Tree Diagram

![Hackolade image](/nse-staging/image7.png?raw=true)

##### 2.1.2.1.3.3.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f768e6da-b5a1-4f54-8342-c1105e50233c"></a>2.1.2.1.3.4 Field **key**

##### 2.1.2.1.3.4.1 **key** Tree Diagram

![Hackolade image](/nse-staging/image8.png?raw=true)

##### 2.1.2.1.3.4.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>DXAM037-HMR4KQ3-H2MEZSR-243ZVB3</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="09608053-f98b-4616-9d01-193bb9104e62"></a>2.1.2.1.3.5 Field **isActive**

##### 2.1.2.1.3.5.1 **isActive** Tree Diagram

![Hackolade image](/nse-staging/image9.png?raw=true)

##### 2.1.2.1.3.5.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d46f235d-00d6-42e6-bcdd-1b9221827b20"></a>2.1.2.1.3.6 Field **providerGroup**

##### 2.1.2.1.3.6.1 **providerGroup** Tree Diagram

![Hackolade image](/nse-staging/image10.png?raw=true)

##### 2.1.2.1.3.6.2 **providerGroup** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providerGroup</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Foreign field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providergroups._id to apikeys.providerGroup</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e82800bb-3acd-4f21-b630-f93b0b10ebda"></a>2.1.2.1.3.7 Field **user**

##### 2.1.2.1.3.7.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image11.png?raw=true)

##### 2.1.2.1.3.7.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to apikeys.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6787b970-404f-4de4-a4ad-07bcbf57e37e"></a>2.1.2.1.3.8 Field **createdAt**

##### 2.1.2.1.3.8.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image12.png?raw=true)

##### 2.1.2.1.3.8.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d94d3187-42e3-46db-aa70-e2e0975c7628"></a>2.1.2.1.3.9 Field **updatedAt**

##### 2.1.2.1.3.9.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image13.png?raw=true)

##### 2.1.2.1.3.9.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="909c4d9b-db2b-4b09-b354-f2ed9ff8680b"></a>2.1.2.1.3.10 Field **\_\_v**

##### 2.1.2.1.3.10.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image14.png?raw=true)

##### 2.1.2.1.3.10.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.4 **apikeys** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">name_text_description_text_key_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">name_text_description_text_key_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">description('text'), key('text'), name('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.1.5 **apikeys** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "apikeys",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "key": {
            "type": "string"
        },
        "isActive": {
            "type": "boolean"
        },
        "providerGroup": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "name",
        "description",
        "key",
        "isActive",
        "user",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.1.6 **apikeys** JSON data

```
{
    "_id": ObjectId("fe4ccbbdeaccc3bf14ab2f40"),
    "name": "test smtp",
    "description": "Lorem",
    "key": "DXAM037-HMR4KQ3-H2MEZSR-243ZVB3",
    "isActive": true,
    "providerGroup": ObjectId("9d3ba240a880eea52443105c"),
    "user": ObjectId("5ff5578dadda032e66ef5d32"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.1.7 **apikeys** Target Script

```
use nse-staging;

db.createCollection("apikeys", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "apikeys",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                },
                "key": {
                    "bsonType": "string"
                },
                "isActive": {
                    "bsonType": "bool"
                },
                "providerGroup": {
                    "bsonType": "objectId"
                },
                "user": {
                    "bsonType": "objectId"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "name",
                "description",
                "key",
                "isActive",
                "user",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.apikeys.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});

db.apikeys.createIndex({
    "description": "text",
    "key": "text",
    "name": "text"
},
{
    "name": "name_text_description_text_key_text",
    "background": true,
    "weights": {
        "description": 1,
        "key": 1,
        "name": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
});
```

### <a id="abc54747-bd03-4aab-9a2c-cf11c60e6a93"></a>2.1.2.2 Collection **captchas**

##### 2.1.2.2.1 **captchas** Tree Diagram

![Hackolade image](/nse-staging/image15.png?raw=true)

##### 2.1.2.2.2 **captchas** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>captchas</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3 **captchas** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody></tbody></table>

##### 2.1.2.2.4 **captchas** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "captchas",
    "additionalProperties": true
}
```

##### 2.1.2.2.5 **captchas** JSON data

```
{}
```

##### 2.1.2.2.6 **captchas** Target Script

```
use nse-staging;

db.createCollection("captchas", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "captchas",
            "additionalProperties": true,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                }
            }
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="ee6c86e8-e163-4a96-a044-16173901991f"></a>2.1.2.3 Collection **cloudstorages**

##### 2.1.2.3.1 **cloudstorages** Tree Diagram

![Hackolade image](/nse-staging/image16.png?raw=true)

##### 2.1.2.3.2 **cloudstorages** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>cloudstorages</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3 **cloudstorages** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#7bd8a66e-7434-41f8-8291-c5d351143fa6 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#eac3e98a-bc1e-4d7a-987c-d412d67fc1d2 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#09082029-12b4-46d8-a476-7c9045ebfd9c class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#83e28659-d062-42b3-8cfd-ab635c50b611 class="margin-0">data</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f0b80252-36b6-4a41-8aff-9a02419fc0f3 class="margin-5">refreshToken</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#29790bc9-7eb3-4337-abf2-bfd97a0874f6 class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a7e35595-b117-45f8-aed4-c3b9274c198c class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1c9a247a-397a-42e5-b109-de262b137b0c class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#73e4159b-b980-44c1-99af-3e02caa086d5 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d33ac9bb-750e-4a03-ba97-9caf15ebdca9 class="margin-0">cloudStorageName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a3233ab0-95da-486f-b706-81b5a1598d98 class="margin-0">email</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7bd8a66e-7434-41f8-8291-c5d351143fa6"></a>2.1.2.3.3.1 Field **\_id**

##### 2.1.2.3.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image17.png?raw=true)

##### 2.1.2.3.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="eac3e98a-bc1e-4d7a-987c-d412d67fc1d2"></a>2.1.2.3.3.2 Field **user**

##### 2.1.2.3.3.2.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image18.png?raw=true)

##### 2.1.2.3.3.2.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to cloudstorages.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="09082029-12b4-46d8-a476-7c9045ebfd9c"></a>2.1.2.3.3.3 Field **name**

##### 2.1.2.3.3.3.1 **name** Tree Diagram

![Hackolade image](/nse-staging/image19.png?raw=true)

##### 2.1.2.3.3.3.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>gd</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="83e28659-d062-42b3-8cfd-ab635c50b611"></a>2.1.2.3.3.4 Field **data**

##### 2.1.2.3.3.4.1 **data** Tree Diagram

![Hackolade image](/nse-staging/image20.png?raw=true)

##### 2.1.2.3.3.4.2 **data** Hierarchy

Parent field: **cloudstorages**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f0b80252-36b6-4a41-8aff-9a02419fc0f3 class="margin-NaN">refreshToken</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3.4.3 **data** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>data</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f0b80252-36b6-4a41-8aff-9a02419fc0f3"></a>2.1.2.3.3.5 Field **refreshToken**

##### 2.1.2.3.3.5.1 **refreshToken** Tree Diagram

![Hackolade image](/nse-staging/image21.png?raw=true)

##### 2.1.2.3.3.5.2 **refreshToken** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>refreshToken</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>1//0gFKYeAiYxh0zCgYIARAAGBASNwF-L9IrNTSdhsutoFIGv8DN9_uMdRBPHCp87QMLictWhWdLrFxnectV3myFmRAUgXAjpUqghJw</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="29790bc9-7eb3-4337-abf2-bfd97a0874f6"></a>2.1.2.3.3.6 Field **isActive**

##### 2.1.2.3.3.6.1 **isActive** Tree Diagram

![Hackolade image](/nse-staging/image22.png?raw=true)

##### 2.1.2.3.3.6.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a7e35595-b117-45f8-aed4-c3b9274c198c"></a>2.1.2.3.3.7 Field **createdAt**

##### 2.1.2.3.3.7.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image23.png?raw=true)

##### 2.1.2.3.3.7.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1c9a247a-397a-42e5-b109-de262b137b0c"></a>2.1.2.3.3.8 Field **updatedAt**

##### 2.1.2.3.3.8.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image24.png?raw=true)

##### 2.1.2.3.3.8.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="73e4159b-b980-44c1-99af-3e02caa086d5"></a>2.1.2.3.3.9 Field **\_\_v**

##### 2.1.2.3.3.9.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image25.png?raw=true)

##### 2.1.2.3.3.9.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d33ac9bb-750e-4a03-ba97-9caf15ebdca9"></a>2.1.2.3.3.10 Field **cloudStorageName**

##### 2.1.2.3.3.10.1 **cloudStorageName** Tree Diagram

![Hackolade image](/nse-staging/image26.png?raw=true)

##### 2.1.2.3.3.10.2 **cloudStorageName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>cloudStorageName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>GOOGLE_DRIVE</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a3233ab0-95da-486f-b706-81b5a1598d98"></a>2.1.2.3.3.11 Field **email**

##### 2.1.2.3.3.11.1 **email** Tree Diagram

![Hackolade image](/nse-staging/image27.png?raw=true)

##### 2.1.2.3.3.11.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>mallikarjun@homeclosingservices.net</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.4 **cloudstorages** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.3.5 **cloudstorages** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "cloudstorages",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "data": {
            "type": "object",
            "properties": {
                "refreshToken": {
                    "type": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "refreshToken"
            ]
        },
        "isActive": {
            "type": "boolean"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "cloudStorageName": {
            "type": "string"
        },
        "email": {
            "type": "string"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "user",
        "name",
        "data",
        "isActive",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.3.6 **cloudstorages** JSON data

```
{
    "_id": ObjectId("dffdad4f13d4bed3ee2ffd7a"),
    "user": ObjectId("edd809a778b0aebb6c9bddec"),
    "name": "gd",
    "data": {
        "refreshToken": "1//0gFKYeAiYxh0zCgYIARAAGBASNwF-L9IrNTSdhsutoFIGv8DN9_uMdRBPHCp87QMLictWhWdLrFxnectV3myFmRAUgXAjpUqghJw"
    },
    "isActive": true,
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "cloudStorageName": "GOOGLE_DRIVE",
    "email": "mallikarjun@homeclosingservices.net"
}
```

##### 2.1.2.3.7 **cloudstorages** Target Script

```
use nse-staging;

db.createCollection("cloudstorages", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "cloudstorages",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "user": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "data": {
                    "bsonType": "object",
                    "properties": {
                        "refreshToken": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "refreshToken"
                    ]
                },
                "isActive": {
                    "bsonType": "bool"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "cloudStorageName": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "user",
                "name",
                "data",
                "isActive",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.cloudstorages.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});
```

### <a id="9ac69500-3e48-4537-a4f8-8f3d8b06ca6a"></a>2.1.2.4 Collection **domains**

##### 2.1.2.4.1 **domains** Tree Diagram

![Hackolade image](/nse-staging/image28.png?raw=true)

##### 2.1.2.4.2 **domains** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>domains</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3 **domains** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#8be85225-02dd-40d2-9b60-1814b90ef414 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1221d904-d760-4bbf-8638-86820bd30d3e class="margin-0">user</a></td><td class="no-break-word">objectId,string</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0d35bf23-5278-4e99-9af8-f822ec96b923 class="margin-0">domain</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#891974b2-6228-4c3a-91f7-f9fbe2c9e002 class="margin-0">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#96e2a312-2ed4-4594-81c2-c3efdaf7c37e class="margin-0">value</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d8b8d946-d2f6-4f6f-af50-ae3ac21312ee class="margin-0">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aed84aab-120e-4b3a-8368-58f3b170d307 class="margin-0">isVerified</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#13d8a8f7-c3bc-4c11-af20-7288b7c1e4e6 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#635d35ae-663c-4797-9f22-af0a7bb30003 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b41cff4a-27ac-4530-b54b-c981f9d0d282 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e919bd4a-43fb-4a06-bc74-d80f4010e18d class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#20fcf21d-a85f-411e-9e33-4d10dd7fd499 class="margin-0">authentication</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b5aa15e1-edb3-431b-a057-cc1ebfacdb5a class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#81ddfc59-fab9-425d-aa63-95952e46e523 class="margin-10">provider</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#22ddaaa3-be16-4c2c-87c6-a1138c825348 class="margin-10">records</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0422145b-42f9-4ffc-809b-646f9cc01cfc class="margin-15">CNAME</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8bc32da1-4005-4f30-a485-703eeb7aacf8 class="margin-15">DKIM</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#39e19307-df83-4539-95df-60a15cf1776e class="margin-15">DMarc</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e886440d-ceb8-436e-8280-d1b7c25bbccf class="margin-15">MX</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f3203d2a-76f0-41f4-8ba2-cfaa8253de2a class="margin-15">SPF</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d3d31f18-4747-451a-b2d9-270f3cc6deb1 class="margin-0">comments</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8be85225-02dd-40d2-9b60-1814b90ef414"></a>2.1.2.4.3.1 Field **\_id**

##### 2.1.2.4.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image29.png?raw=true)

##### 2.1.2.4.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1221d904-d760-4bbf-8638-86820bd30d3e"></a>2.1.2.4.3.2 Field **user**

##### 2.1.2.4.3.2.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image30.png?raw=true)

##### 2.1.2.4.3.2.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>multiple (objectId,string)</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to domains.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr></tbody></table>

### <a id="0d35bf23-5278-4e99-9af8-f822ec96b923"></a>2.1.2.4.3.3 Field **domain**

##### 2.1.2.4.3.3.1 **domain** Tree Diagram

![Hackolade image](/nse-staging/image31.png?raw=true)

##### 2.1.2.4.3.3.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="891974b2-6228-4c3a-91f7-f9fbe2c9e002"></a>2.1.2.4.3.4 Field **key**

##### 2.1.2.4.3.4.1 **key** Tree Diagram

![Hackolade image](/nse-staging/image32.png?raw=true)

##### 2.1.2.4.3.4.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="96e2a312-2ed4-4594-81c2-c3efdaf7c37e"></a>2.1.2.4.3.5 Field **value**

##### 2.1.2.4.3.5.1 **value** Tree Diagram

![Hackolade image](/nse-staging/image33.png?raw=true)

##### 2.1.2.4.3.5.2 **value** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>value</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>nse-site-verification-CKM71o9hC9PghgkTWpEz0s1fKDcAzk</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d8b8d946-d2f6-4f6f-af50-ae3ac21312ee"></a>2.1.2.4.3.6 Field **type**

##### 2.1.2.4.3.6.1 **type** Tree Diagram

![Hackolade image](/nse-staging/image34.png?raw=true)

##### 2.1.2.4.3.6.2 **type** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>type</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>TXT</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aed84aab-120e-4b3a-8368-58f3b170d307"></a>2.1.2.4.3.7 Field **isVerified**

##### 2.1.2.4.3.7.1 **isVerified** Tree Diagram

![Hackolade image](/nse-staging/image35.png?raw=true)

##### 2.1.2.4.3.7.2 **isVerified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isVerified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="13d8a8f7-c3bc-4c11-af20-7288b7c1e4e6"></a>2.1.2.4.3.8 Field **createdAt**

##### 2.1.2.4.3.8.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image36.png?raw=true)

##### 2.1.2.4.3.8.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="635d35ae-663c-4797-9f22-af0a7bb30003"></a>2.1.2.4.3.9 Field **updatedAt**

##### 2.1.2.4.3.9.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image37.png?raw=true)

##### 2.1.2.4.3.9.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b41cff4a-27ac-4530-b54b-c981f9d0d282"></a>2.1.2.4.3.10 Field **\_\_v**

##### 2.1.2.4.3.10.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image38.png?raw=true)

##### 2.1.2.4.3.10.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e919bd4a-43fb-4a06-bc74-d80f4010e18d"></a>2.1.2.4.3.11 Field **isActive**

##### 2.1.2.4.3.11.1 **isActive** Tree Diagram

![Hackolade image](/nse-staging/image39.png?raw=true)

##### 2.1.2.4.3.11.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="20fcf21d-a85f-411e-9e33-4d10dd7fd499"></a>2.1.2.4.3.12 Field **authentication**

##### 2.1.2.4.3.12.1 **authentication** Tree Diagram

![Hackolade image](/nse-staging/image40.png?raw=true)

##### 2.1.2.4.3.12.2 **authentication** Hierarchy

Parent field: **domains**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#b5aa15e1-edb3-431b-a057-cc1ebfacdb5a class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.12.3 **authentication** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>authentication</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b5aa15e1-edb3-431b-a057-cc1ebfacdb5a"></a>2.1.2.4.3.13 Field **\[0\]**

##### 2.1.2.4.3.13.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image41.png?raw=true)

##### 2.1.2.4.3.13.2 **\[0\]** Hierarchy

Parent field: **authentication**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#81ddfc59-fab9-425d-aa63-95952e46e523 class="margin-NaN">provider</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#22ddaaa3-be16-4c2c-87c6-a1138c825348 class="margin-NaN">records</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.13.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="81ddfc59-fab9-425d-aa63-95952e46e523"></a>2.1.2.4.3.14 Field **provider**

##### 2.1.2.4.3.14.1 **provider** Tree Diagram

![Hackolade image](/nse-staging/image42.png?raw=true)

##### 2.1.2.4.3.14.2 **provider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>provider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>mailslurp</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="22ddaaa3-be16-4c2c-87c6-a1138c825348"></a>2.1.2.4.3.15 Field **records**

##### 2.1.2.4.3.15.1 **records** Tree Diagram

![Hackolade image](/nse-staging/image43.png?raw=true)

##### 2.1.2.4.3.15.2 **records** Hierarchy

Parent field: **\[0\]**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#0422145b-42f9-4ffc-809b-646f9cc01cfc class="margin-NaN">CNAME</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8bc32da1-4005-4f30-a485-703eeb7aacf8 class="margin-NaN">DKIM</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#39e19307-df83-4539-95df-60a15cf1776e class="margin-NaN">DMarc</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e886440d-ceb8-436e-8280-d1b7c25bbccf class="margin-NaN">MX</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f3203d2a-76f0-41f4-8ba2-cfaa8253de2a class="margin-NaN">SPF</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.15.3 **records** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>records</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0422145b-42f9-4ffc-809b-646f9cc01cfc"></a>2.1.2.4.3.16 Field **CNAME**

##### 2.1.2.4.3.16.1 **CNAME** Tree Diagram

![Hackolade image](/nse-staging/image44.png?raw=true)

##### 2.1.2.4.3.16.2 **CNAME** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>CNAME</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8bc32da1-4005-4f30-a485-703eeb7aacf8"></a>2.1.2.4.3.17 Field **DKIM**

##### 2.1.2.4.3.17.1 **DKIM** Tree Diagram

![Hackolade image](/nse-staging/image45.png?raw=true)

##### 2.1.2.4.3.17.2 **DKIM** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>DKIM</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="39e19307-df83-4539-95df-60a15cf1776e"></a>2.1.2.4.3.18 Field **DMarc**

##### 2.1.2.4.3.18.1 **DMarc** Tree Diagram

![Hackolade image](/nse-staging/image46.png?raw=true)

##### 2.1.2.4.3.18.2 **DMarc** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>DMarc</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e886440d-ceb8-436e-8280-d1b7c25bbccf"></a>2.1.2.4.3.19 Field **MX**

##### 2.1.2.4.3.19.1 **MX** Tree Diagram

![Hackolade image](/nse-staging/image47.png?raw=true)

##### 2.1.2.4.3.19.2 **MX** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>MX</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f3203d2a-76f0-41f4-8ba2-cfaa8253de2a"></a>2.1.2.4.3.20 Field **SPF**

##### 2.1.2.4.3.20.1 **SPF** Tree Diagram

![Hackolade image](/nse-staging/image48.png?raw=true)

##### 2.1.2.4.3.20.2 **SPF** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>SPF</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d3d31f18-4747-451a-b2d9-270f3cc6deb1"></a>2.1.2.4.3.21 Field **comments**

##### 2.1.2.4.3.21.1 **comments** Tree Diagram

![Hackolade image](/nse-staging/image49.png?raw=true)

##### 2.1.2.4.3.21.2 **comments** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>comments</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.4 **domains** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">domain_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">domain_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">domain('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.4.5 **domains** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "domains",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "user": {
            "type": "string"
        },
        "domain": {
            "type": "string"
        },
        "key": {
            "type": "string"
        },
        "value": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "isVerified": {
            "type": "boolean"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "isActive": {
            "type": "boolean"
        },
        "authentication": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "provider": {
                        "type": "string"
                    },
                    "records": {
                        "type": "object",
                        "properties": {
                            "CNAME": {
                                "type": "boolean"
                            },
                            "DKIM": {
                                "type": "boolean"
                            },
                            "DMarc": {
                                "type": "boolean"
                            },
                            "MX": {
                                "type": "boolean"
                            },
                            "SPF": {
                                "type": "boolean"
                            }
                        },
                        "additionalProperties": true,
                        "required": [
                            "CNAME",
                            "DKIM",
                            "DMarc",
                            "MX",
                            "SPF"
                        ]
                    }
                },
                "additionalProperties": true,
                "required": [
                    "provider",
                    "records"
                ]
            }
        },
        "comments": {
            "type": "string"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "user",
        "domain",
        "key",
        "value",
        "type",
        "isVerified",
        "createdAt",
        "updatedAt",
        "__v",
        "isActive"
    ]
}
```

##### 2.1.2.4.6 **domains** JSON data

```
{
    "_id": ObjectId("7dde0e4e8ead4cf2b0cdd8ec"),
    "user": ObjectId("e5efdbbcfbeaf73d1fd8be24"),
    "domain": "sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
    "key": "sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
    "value": "nse-site-verification-CKM71o9hC9PghgkTWpEz0s1fKDcAzk",
    "type": "TXT",
    "isVerified": true,
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "isActive": false,
    "authentication": [
        {
            "provider": "mailslurp",
            "records": {
                "CNAME": false,
                "DKIM": false,
                "DMarc": false,
                "MX": false,
                "SPF": false
            }
        }
    ],
    "comments": "Lorem"
}
```

##### 2.1.2.4.7 **domains** Target Script

```
use nse-staging;

db.createCollection("domains", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "domains",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "user": {
                    "bsonType": [
                        "objectId",
                        "string"
                    ]
                },
                "domain": {
                    "bsonType": "string"
                },
                "key": {
                    "bsonType": "string"
                },
                "value": {
                    "bsonType": "string"
                },
                "type": {
                    "bsonType": "string"
                },
                "isVerified": {
                    "bsonType": "bool"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "isActive": {
                    "bsonType": "bool"
                },
                "authentication": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "provider": {
                                "bsonType": "string"
                            },
                            "records": {
                                "bsonType": "object",
                                "properties": {
                                    "CNAME": {
                                        "bsonType": "bool"
                                    },
                                    "DKIM": {
                                        "bsonType": "bool"
                                    },
                                    "DMarc": {
                                        "bsonType": "bool"
                                    },
                                    "MX": {
                                        "bsonType": "bool"
                                    },
                                    "SPF": {
                                        "bsonType": "bool"
                                    }
                                },
                                "additionalProperties": true,
                                "required": [
                                    "CNAME",
                                    "DKIM",
                                    "DMarc",
                                    "MX",
                                    "SPF"
                                ]
                            }
                        },
                        "additionalProperties": true,
                        "required": [
                            "provider",
                            "records"
                        ]
                    }
                },
                "comments": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "user",
                "domain",
                "key",
                "value",
                "type",
                "isVerified",
                "createdAt",
                "updatedAt",
                "__v",
                "isActive"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.domains.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});

db.domains.createIndex({
    "domain": "text"
},
{
    "name": "domain_text",
    "background": true,
    "weights": {
        "domain": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
});
```

### <a id="ed42c176-2f77-4b10-b832-db6976f5a268"></a>2.1.2.5 Collection **emailproviders**

##### 2.1.2.5.1 **emailproviders** Tree Diagram

![Hackolade image](/nse-staging/image50.png?raw=true)

##### 2.1.2.5.2 **emailproviders** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>emailproviders</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3 **emailproviders** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#895a6140-e811-4894-9812-c94e5f6e6b81 class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b160ba10-05e8-4571-b228-310cdfce3695 class="margin-0">displayName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9e530ebe-30d8-44f1-b512-e1484afd1797 class="margin-0">records</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#611c0d10-89c3-42ba-b5c3-38ffd18fe97d class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#36efb4a1-e02e-42bb-982b-33fb04fa7996 class="margin-10">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d17b86d5-1958-4a09-a82b-f416c3931e92 class="margin-10">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ee8e4443-e192-41b5-89fb-463d3031a53d class="margin-0">apiSchema</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#91ca0690-712a-425d-92a3-75221e7ad41f class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aee65dd7-ba5e-4965-98f1-7227f5b96843 class="margin-10">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#77c590eb-664a-465f-b872-c8984178ae06 class="margin-10">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4c8e06bb-8c30-4bde-a8a2-9c897462b076 class="margin-10">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b7688df7-8c27-4138-8c1e-d63963080b9c class="margin-0">smtpSchema</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a93d2661-3d57-4cc8-93bc-64e14d606914 class="margin-0">supports</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f67ab459-70b0-4c88-8719-046b3f429c9e class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3386bbd0-2205-4a53-bdc7-c8b145b24291 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c6dbd410-f5b3-45ca-93b1-ea4e941f6bab class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#88c40df3-13f3-4a61-aad4-97cf821a53e3 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#13ba5c67-5da8-4cd9-9e10-95c73d37563c class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0487bfea-bc57-4786-a67c-e5eea5bd3845"></a>2.1.2.5.3.1 Field **\_id**

##### 2.1.2.5.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image51.png?raw=true)

##### 2.1.2.5.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="895a6140-e811-4894-9812-c94e5f6e6b81"></a>2.1.2.5.3.2 Field **name**

##### 2.1.2.5.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-staging/image52.png?raw=true)

##### 2.1.2.5.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Mailgun</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b160ba10-05e8-4571-b228-310cdfce3695"></a>2.1.2.5.3.3 Field **displayName**

##### 2.1.2.5.3.3.1 **displayName** Tree Diagram

![Hackolade image](/nse-staging/image53.png?raw=true)

##### 2.1.2.5.3.3.2 **displayName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>displayName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9e530ebe-30d8-44f1-b512-e1484afd1797"></a>2.1.2.5.3.4 Field **records**

##### 2.1.2.5.3.4.1 **records** Tree Diagram

![Hackolade image](/nse-staging/image54.png?raw=true)

##### 2.1.2.5.3.4.2 **records** Hierarchy

Parent field: **emailproviders**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#611c0d10-89c3-42ba-b5c3-38ffd18fe97d class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.4.3 **records** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>records</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="611c0d10-89c3-42ba-b5c3-38ffd18fe97d"></a>2.1.2.5.3.5 Field **\[0\]**

##### 2.1.2.5.3.5.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image55.png?raw=true)

##### 2.1.2.5.3.5.2 **\[0\]** Hierarchy

Parent field: **records**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#36efb4a1-e02e-42bb-982b-33fb04fa7996 class="margin-NaN">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d17b86d5-1958-4a09-a82b-f416c3931e92 class="margin-NaN">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.5.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="36efb4a1-e02e-42bb-982b-33fb04fa7996"></a>2.1.2.5.3.6 Field **type**

##### 2.1.2.5.3.6.1 **type** Tree Diagram

![Hackolade image](/nse-staging/image56.png?raw=true)

##### 2.1.2.5.3.6.2 **type** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>type</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>CNAME</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d17b86d5-1958-4a09-a82b-f416c3931e92"></a>2.1.2.5.3.7 Field **key**

##### 2.1.2.5.3.7.1 **key** Tree Diagram

![Hackolade image](/nse-staging/image57.png?raw=true)

##### 2.1.2.5.3.7.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>s2._domainkey.[DOMAIN]</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ee8e4443-e192-41b5-89fb-463d3031a53d"></a>2.1.2.5.3.8 Field **apiSchema**

##### 2.1.2.5.3.8.1 **apiSchema** Tree Diagram

![Hackolade image](/nse-staging/image58.png?raw=true)

##### 2.1.2.5.3.8.2 **apiSchema** Hierarchy

Parent field: **emailproviders**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#91ca0690-712a-425d-92a3-75221e7ad41f class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.8.3 **apiSchema** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>apiSchema</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="91ca0690-712a-425d-92a3-75221e7ad41f"></a>2.1.2.5.3.9 Field **\[0\]**

##### 2.1.2.5.3.9.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image59.png?raw=true)

##### 2.1.2.5.3.9.2 **\[0\]** Hierarchy

Parent field: **apiSchema**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#aee65dd7-ba5e-4965-98f1-7227f5b96843 class="margin-NaN">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#77c590eb-664a-465f-b872-c8984178ae06 class="margin-NaN">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4c8e06bb-8c30-4bde-a8a2-9c897462b076 class="margin-NaN">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.9.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aee65dd7-ba5e-4965-98f1-7227f5b96843"></a>2.1.2.5.3.10 Field **name**

##### 2.1.2.5.3.10.1 **name** Tree Diagram

![Hackolade image](/nse-staging/image60.png?raw=true)

##### 2.1.2.5.3.10.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>API Key</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="77c590eb-664a-465f-b872-c8984178ae06"></a>2.1.2.5.3.11 Field **type**

##### 2.1.2.5.3.11.1 **type** Tree Diagram

![Hackolade image](/nse-staging/image61.png?raw=true)

##### 2.1.2.5.3.11.2 **type** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>type</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>text</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4c8e06bb-8c30-4bde-a8a2-9c897462b076"></a>2.1.2.5.3.12 Field **key**

##### 2.1.2.5.3.12.1 **key** Tree Diagram

![Hackolade image](/nse-staging/image62.png?raw=true)

##### 2.1.2.5.3.12.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>apiKey</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b7688df7-8c27-4138-8c1e-d63963080b9c"></a>2.1.2.5.3.13 Field **smtpSchema**

##### 2.1.2.5.3.13.1 **smtpSchema** Tree Diagram

![Hackolade image](/nse-staging/image63.png?raw=true)

##### 2.1.2.5.3.13.2 **smtpSchema** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>smtpSchema</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a93d2661-3d57-4cc8-93bc-64e14d606914"></a>2.1.2.5.3.14 Field **supports**

##### 2.1.2.5.3.14.1 **supports** Tree Diagram

![Hackolade image](/nse-staging/image64.png?raw=true)

##### 2.1.2.5.3.14.2 **supports** Hierarchy

Parent field: **emailproviders**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f67ab459-70b0-4c88-8719-046b3f429c9e class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.14.3 **supports** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>supports</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f67ab459-70b0-4c88-8719-046b3f429c9e"></a>2.1.2.5.3.15 Field **\[0\]**

##### 2.1.2.5.3.15.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image65.png?raw=true)

##### 2.1.2.5.3.15.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>API</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3386bbd0-2205-4a53-bdc7-c8b145b24291"></a>2.1.2.5.3.16 Field **user**

##### 2.1.2.5.3.16.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image66.png?raw=true)

##### 2.1.2.5.3.16.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to emailproviders.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c6dbd410-f5b3-45ca-93b1-ea4e941f6bab"></a>2.1.2.5.3.17 Field **createdAt**

##### 2.1.2.5.3.17.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image67.png?raw=true)

##### 2.1.2.5.3.17.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="88c40df3-13f3-4a61-aad4-97cf821a53e3"></a>2.1.2.5.3.18 Field **updatedAt**

##### 2.1.2.5.3.18.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image68.png?raw=true)

##### 2.1.2.5.3.18.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="13ba5c67-5da8-4cd9-9e10-95c73d37563c"></a>2.1.2.5.3.19 Field **\_\_v**

##### 2.1.2.5.3.19.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image69.png?raw=true)

##### 2.1.2.5.3.19.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.4 **emailproviders** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">name_text_displayName_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">name_text_displayName_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">displayName('text'), name('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.5.5 **emailproviders** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "emailproviders",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "displayName": {
            "type": "string"
        },
        "records": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string"
                    },
                    "key": {
                        "type": "string"
                    }
                },
                "additionalProperties": true,
                "required": [
                    "type",
                    "key"
                ]
            }
        },
        "apiSchema": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "type": {
                        "type": "string"
                    },
                    "key": {
                        "type": "string"
                    }
                },
                "additionalProperties": true,
                "required": [
                    "name",
                    "type",
                    "key"
                ]
            }
        },
        "smtpSchema": {
            "type": "array",
            "additionalItems": true
        },
        "supports": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "string"
            }
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "name",
        "displayName",
        "records",
        "apiSchema",
        "smtpSchema",
        "supports",
        "user",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.5.6 **emailproviders** JSON data

```
{
    "_id": ObjectId("54fab39c78ffa01c94d5d1df"),
    "name": "Mailgun",
    "displayName": "Lorem",
    "records": [
        {
            "type": "CNAME",
            "key": "s2._domainkey.[DOMAIN]"
        }
    ],
    "apiSchema": [
        {
            "name": "API Key",
            "type": "text",
            "key": "apiKey"
        }
    ],
    "smtpSchema": [],
    "supports": [
        "API"
    ],
    "user": ObjectId("03e5f9f5e3a2dc8fd54db9f3"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.5.7 **emailproviders** Target Script

```
use nse-staging;

db.createCollection("emailproviders", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "emailproviders",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "displayName": {
                    "bsonType": "string"
                },
                "records": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "type": {
                                "bsonType": "string"
                            },
                            "key": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": true,
                        "required": [
                            "type",
                            "key"
                        ]
                    }
                },
                "apiSchema": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "name": {
                                "bsonType": "string"
                            },
                            "type": {
                                "bsonType": "string"
                            },
                            "key": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": true,
                        "required": [
                            "name",
                            "type",
                            "key"
                        ]
                    }
                },
                "smtpSchema": {
                    "bsonType": "array",
                    "additionalItems": true
                },
                "supports": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string"
                    }
                },
                "user": {
                    "bsonType": "objectId"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "name",
                "displayName",
                "records",
                "apiSchema",
                "smtpSchema",
                "supports",
                "user",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.emailproviders.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});

db.emailproviders.createIndex({
    "displayName": "text",
    "name": "text"
},
{
    "name": "name_text_displayName_text",
    "background": true,
    "weights": {
        "displayName": 1,
        "name": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
});
```

### <a id="277372dd-7714-4c0a-935a-a80177b939f3"></a>2.1.2.6 Collection **emailreports**

##### 2.1.2.6.1 **emailreports** Tree Diagram

![Hackolade image](/nse-staging/image70.png?raw=true)

##### 2.1.2.6.2 **emailreports** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>emailreports</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.6.3 **emailreports** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#34e1fb26-8b52-4d99-b32f-39571468d677 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a7381d56-d62b-45d9-b734-ae5969eea185 class="margin-0">from</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a624f8d5-f8b1-443b-8701-e9d4b2e5e217 class="margin-0">to</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7a932fa6-a15d-45ad-9cd4-77ba1477afe7 class="margin-0">error</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4b6d2ded-9d35-40c6-a850-a3e2bb6f1f52 class="margin-0">group</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#28a52a41-010b-4955-8764-3a4c06bf357a class="margin-0">status</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cb022f2c-c87d-4929-a3c3-84a3e91ae2b9 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3e890d3c-2395-4287-99f2-dc805e7aa7e4 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#dc136686-1605-46d9-a448-47b8816181e7 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#00845154-fb99-4040-a42d-989e59728f5d class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c7fb65b5-8cfb-42ab-80a7-084e60d79e75 class="margin-0">providerDetails</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a3ce51d2-a0a6-4132-a370-89ed6ac34062 class="margin-0">bounceDetailLong</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b1c890a8-c1d6-4078-8e45-932ce8ca5781 class="margin-0">bounceDetailShort</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#bdeae027-5158-4fda-b7ea-394e51a9c461 class="margin-0">isNotified</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b5480805-11f0-4855-acff-012fd8156737 class="margin-0">notificationFrom</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0ec02343-2eb4-4221-a2c0-8052bf16f215 class="margin-0">notificationTo</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7df29bc8-4bc6-4e6c-9fe1-21a8fef3f44a class="margin-0">notifiedAt</a></td><td class="no-break-word">null,date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#96e57d4b-3479-4a25-a91a-56c1ee584755 class="margin-0">recipient</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d413db05-24a5-4db6-bed7-30ea186a37d8 class="margin-0">referenceId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c46e91d1-dfb9-47c1-ab1e-5d2fbffdb7eb class="margin-0">sender</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#aa918455-2123-4241-80cb-d60d9bcdfee7 class="margin-0">subject</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="34e1fb26-8b52-4d99-b32f-39571468d677"></a>2.1.2.6.3.1 Field **\_id**

##### 2.1.2.6.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image71.png?raw=true)

##### 2.1.2.6.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a7381d56-d62b-45d9-b734-ae5969eea185"></a>2.1.2.6.3.2 Field **from**

##### 2.1.2.6.3.2.1 **from** Tree Diagram

![Hackolade image](/nse-staging/image72.png?raw=true)

##### 2.1.2.6.3.2.2 **from** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>from</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>pramod@nxwv.io</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a624f8d5-f8b1-443b-8701-e9d4b2e5e217"></a>2.1.2.6.3.3 Field **to**

##### 2.1.2.6.3.3.1 **to** Tree Diagram

![Hackolade image](/nse-staging/image73.png?raw=true)

##### 2.1.2.6.3.3.2 **to** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>to</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>pramod2@programmaticnft.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7a932fa6-a15d-45ad-9cd4-77ba1477afe7"></a>2.1.2.6.3.4 Field **error**

##### 2.1.2.6.3.4.1 **error** Tree Diagram

![Hackolade image](/nse-staging/image74.png?raw=true)

##### 2.1.2.6.3.4.2 **error** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>error</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Maximum credits exceeded</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4b6d2ded-9d35-40c6-a850-a3e2bb6f1f52"></a>2.1.2.6.3.5 Field **group**

##### 2.1.2.6.3.5.1 **group** Tree Diagram

![Hackolade image](/nse-staging/image75.png?raw=true)

##### 2.1.2.6.3.5.2 **group** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>group</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Foreign field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providergroups._id to emailreports.group</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="28a52a41-010b-4955-8764-3a4c06bf357a"></a>2.1.2.6.3.6 Field **status**

##### 2.1.2.6.3.6.1 **status** Tree Diagram

![Hackolade image](/nse-staging/image76.png?raw=true)

##### 2.1.2.6.3.6.2 **status** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>status</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>SENT</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cb022f2c-c87d-4929-a3c3-84a3e91ae2b9"></a>2.1.2.6.3.7 Field **createdAt**

##### 2.1.2.6.3.7.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image77.png?raw=true)

##### 2.1.2.6.3.7.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3e890d3c-2395-4287-99f2-dc805e7aa7e4"></a>2.1.2.6.3.8 Field **updatedAt**

##### 2.1.2.6.3.8.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image78.png?raw=true)

##### 2.1.2.6.3.8.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="dc136686-1605-46d9-a448-47b8816181e7"></a>2.1.2.6.3.9 Field **\_\_v**

##### 2.1.2.6.3.9.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image79.png?raw=true)

##### 2.1.2.6.3.9.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="00845154-fb99-4040-a42d-989e59728f5d"></a>2.1.2.6.3.10 Field **user**

##### 2.1.2.6.3.10.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image80.png?raw=true)

##### 2.1.2.6.3.10.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to emailreports.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c7fb65b5-8cfb-42ab-80a7-084e60d79e75"></a>2.1.2.6.3.11 Field **providerDetails**

##### 2.1.2.6.3.11.1 **providerDetails** Tree Diagram

![Hackolade image](/nse-staging/image81.png?raw=true)

##### 2.1.2.6.3.11.2 **providerDetails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providerDetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Foreign field</td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providerdetails._id to emailreports.providerDetails</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a3ce51d2-a0a6-4132-a370-89ed6ac34062"></a>2.1.2.6.3.12 Field **bounceDetailLong**

##### 2.1.2.6.3.12.1 **bounceDetailLong** Tree Diagram

![Hackolade image](/nse-staging/image82.png?raw=true)

##### 2.1.2.6.3.12.2 **bounceDetailLong** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailLong</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b1c890a8-c1d6-4078-8e45-932ce8ca5781"></a>2.1.2.6.3.13 Field **bounceDetailShort**

##### 2.1.2.6.3.13.1 **bounceDetailShort** Tree Diagram

![Hackolade image](/nse-staging/image83.png?raw=true)

##### 2.1.2.6.3.13.2 **bounceDetailShort** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailShort</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="bdeae027-5158-4fda-b7ea-394e51a9c461"></a>2.1.2.6.3.14 Field **isNotified**

##### 2.1.2.6.3.14.1 **isNotified** Tree Diagram

![Hackolade image](/nse-staging/image84.png?raw=true)

##### 2.1.2.6.3.14.2 **isNotified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isNotified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b5480805-11f0-4855-acff-012fd8156737"></a>2.1.2.6.3.15 Field **notificationFrom**

##### 2.1.2.6.3.15.1 **notificationFrom** Tree Diagram

![Hackolade image](/nse-staging/image85.png?raw=true)

##### 2.1.2.6.3.15.2 **notificationFrom** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationFrom</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0ec02343-2eb4-4221-a2c0-8052bf16f215"></a>2.1.2.6.3.16 Field **notificationTo**

##### 2.1.2.6.3.16.1 **notificationTo** Tree Diagram

![Hackolade image](/nse-staging/image86.png?raw=true)

##### 2.1.2.6.3.16.2 **notificationTo** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationTo</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7df29bc8-4bc6-4e6c-9fe1-21a8fef3f44a"></a>2.1.2.6.3.17 Field **notifiedAt**

##### 2.1.2.6.3.17.1 **notifiedAt** Tree Diagram

![Hackolade image](/nse-staging/image87.png?raw=true)

##### 2.1.2.6.3.17.2 **notifiedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notifiedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>multiple (null,date)</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>null</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr></tbody></table>

### <a id="96e57d4b-3479-4a25-a91a-56c1ee584755"></a>2.1.2.6.3.18 Field **recipient**

##### 2.1.2.6.3.18.1 **recipient** Tree Diagram

![Hackolade image](/nse-staging/image88.png?raw=true)

##### 2.1.2.6.3.18.2 **recipient** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>recipient</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>mallikarjun+32@nexweave.co</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d413db05-24a5-4db6-bed7-30ea186a37d8"></a>2.1.2.6.3.19 Field **referenceId**

##### 2.1.2.6.3.19.1 **referenceId** Tree Diagram

![Hackolade image](/nse-staging/image89.png?raw=true)

##### 2.1.2.6.3.19.2 **referenceId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>referenceId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>P_3dybDmq54mJe8YDK7iu</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c46e91d1-dfb9-47c1-ab1e-5d2fbffdb7eb"></a>2.1.2.6.3.20 Field **sender**

##### 2.1.2.6.3.20.1 **sender** Tree Diagram

![Hackolade image](/nse-staging/image90.png?raw=true)

##### 2.1.2.6.3.20.2 **sender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>sender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Aryan &lt;aryan@beckcomputers.com&gt;</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="aa918455-2123-4241-80cb-d60d9bcdfee7"></a>2.1.2.6.3.21 Field **subject**

##### 2.1.2.6.3.21.1 **subject** Tree Diagram

![Hackolade image](/nse-staging/image91.png?raw=true)

##### 2.1.2.6.3.21.2 **subject** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>subject</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Join Aryan on WL nexweave</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.6.4 **emailreports** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">group('text'), recipient('text'), sender('text'), status('text'), subject('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.6.5 **emailreports** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "emailreports",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "from": {
            "type": "string"
        },
        "to": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "group": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "status": {
            "type": "string"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "providerDetails": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "bounceDetailLong": {
            "type": "string"
        },
        "bounceDetailShort": {
            "type": "string"
        },
        "isNotified": {
            "type": "boolean"
        },
        "notificationFrom": {
            "type": "string"
        },
        "notificationTo": {
            "type": "string"
        },
        "notifiedAt": {
            "type": [
                "null",
                "string"
            ],
            "format": "date-time"
        },
        "recipient": {
            "type": "string"
        },
        "referenceId": {
            "type": "string"
        },
        "sender": {
            "type": "string"
        },
        "subject": {
            "type": "string"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "group",
        "status",
        "createdAt",
        "updatedAt",
        "__v",
        "providerDetails"
    ]
}
```

##### 2.1.2.6.6 **emailreports** JSON data

```
{
    "_id": ObjectId("50dadcc868acf2f6adf3ccde"),
    "from": "pramod@nxwv.io",
    "to": "pramod2@programmaticnft.com",
    "error": "Maximum credits exceeded",
    "group": ObjectId("b987fcaaacaab6fbbfba0da8"),
    "status": "SENT",
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "user": ObjectId("aabe78aebb696037c4e55c23"),
    "providerDetails": ObjectId("bdcdcc3ea4ae77ad05caf0af"),
    "bounceDetailLong": "Lorem",
    "bounceDetailShort": "Lorem",
    "isNotified": false,
    "notificationFrom": "Lorem",
    "notificationTo": "Lorem",
    "notifiedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "recipient": "mallikarjun+32@nexweave.co",
    "referenceId": "P_3dybDmq54mJe8YDK7iu",
    "sender": "Aryan <aryan@beckcomputers.com>",
    "subject": "Join Aryan on WL nexweave"
}
```

##### 2.1.2.6.7 **emailreports** Target Script

```
use nse-staging;

db.createCollection("emailreports", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "emailreports",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "from": {
                    "bsonType": "string"
                },
                "to": {
                    "bsonType": "string"
                },
                "error": {
                    "bsonType": "string"
                },
                "group": {
                    "bsonType": "objectId"
                },
                "status": {
                    "bsonType": "string"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "user": {
                    "bsonType": "objectId"
                },
                "providerDetails": {
                    "bsonType": "objectId"
                },
                "bounceDetailLong": {
                    "bsonType": "string"
                },
                "bounceDetailShort": {
                    "bsonType": "string"
                },
                "isNotified": {
                    "bsonType": "bool"
                },
                "notificationFrom": {
                    "bsonType": "string"
                },
                "notificationTo": {
                    "bsonType": "string"
                },
                "notifiedAt": {
                    "bsonType": [
                        "null",
                        "date"
                    ]
                },
                "recipient": {
                    "bsonType": "string"
                },
                "referenceId": {
                    "bsonType": "string"
                },
                "sender": {
                    "bsonType": "string"
                },
                "subject": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "group",
                "status",
                "createdAt",
                "updatedAt",
                "__v",
                "providerDetails"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.emailreports.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});

db.emailreports.createIndex({
    "group": "text",
    "recipient": "text",
    "sender": "text",
    "status": "text",
    "subject": "text"
},
{
    "name": "sender_text_recipient_text_domain_text_status_text_subject_text_group_text",
    "background": true,
    "weights": {
        "domain": 1,
        "group": 1,
        "recipient": 1,
        "sender": 1,
        "status": 1,
        "subject": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
});
```

### <a id="a1f30ee9-97c3-4199-b150-5d5bfa49848c"></a>2.1.2.7 Collection **emailreports\_backup**

##### 2.1.2.7.1 **emailreports\_backup** Tree Diagram

![Hackolade image](/nse-staging/image92.png?raw=true)

##### 2.1.2.7.2 **emailreports\_backup** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>emailreports_backup</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.7.3 **emailreports\_backup** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#c2d3fb57-eeb9-4744-a5e4-f3ba6fdb5151 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#02e934d4-1e2a-4d36-80ef-4a03dbeab6b1 class="margin-0">from</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#08ed373a-309e-4792-8ccd-fa4c7189cae0 class="margin-0">to</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7b5b004a-bb28-4c53-b6b0-8222c1d468b0 class="margin-0">error</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a850151d-0574-45da-aad8-42a46774ef42 class="margin-0">group</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#140dc540-6e93-488d-9aa3-fe3d8afaf1f4 class="margin-0">status</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3ab5c563-db4a-43e2-b86a-aaf04341c4b5 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#efea566b-e86d-44f5-b173-eda6edec86b0 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#426f47be-5fed-42f4-8f5c-07bc8eca357e class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#26429953-9329-48e1-ab7a-5ff8f99cf461 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#33fa9264-3f6e-4675-98c0-ecf9a3a20f13 class="margin-0">providerDetails</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#07a96762-dbb3-4ff5-895c-f5d1695f033e class="margin-0">bounceDetailLong</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c2bd88ac-583c-428a-a935-d72a60cec642 class="margin-0">bounceDetailShort</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#be8f7db8-b026-4e5c-ac72-a1ddb919735a class="margin-0">domain</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#56bd9940-bbd0-4a1c-96f3-7eb0021cf6be class="margin-0">isNotified</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8f538c59-8f68-49d3-9b8e-b87d311eed05 class="margin-0">notificationFrom</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#19fe4973-ac57-4ff1-aa65-1bb925e3264e class="margin-0">notificationTo</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#78a3f923-1bf4-4d62-9675-233c3441676d class="margin-0">notifiedAt</a></td><td class="no-break-word">null,date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c115b2d6-80b9-4f24-94fa-ccc233be2384 class="margin-0">recipient</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#33e8344c-ed0a-4ac1-bd4c-cf4841feeee3 class="margin-0">referenceId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1ab968c7-a0ab-4c19-8b21-be4b277de76a class="margin-0">sender</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#02d6e4eb-6a09-4eac-b18a-5cfd16a2f204 class="margin-0">subject</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c2d3fb57-eeb9-4744-a5e4-f3ba6fdb5151"></a>2.1.2.7.3.1 Field **\_id**

##### 2.1.2.7.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image93.png?raw=true)

##### 2.1.2.7.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="02e934d4-1e2a-4d36-80ef-4a03dbeab6b1"></a>2.1.2.7.3.2 Field **from**

##### 2.1.2.7.3.2.1 **from** Tree Diagram

![Hackolade image](/nse-staging/image94.png?raw=true)

##### 2.1.2.7.3.2.2 **from** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>from</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Pramod &lt;pramod@nxwv.io&gt;</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="08ed373a-309e-4792-8ccd-fa4c7189cae0"></a>2.1.2.7.3.3 Field **to**

##### 2.1.2.7.3.3.1 **to** Tree Diagram

![Hackolade image](/nse-staging/image95.png?raw=true)

##### 2.1.2.7.3.3.2 **to** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>to</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>pramod@nexweave.co</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7b5b004a-bb28-4c53-b6b0-8222c1d468b0"></a>2.1.2.7.3.4 Field **error**

##### 2.1.2.7.3.4.1 **error** Tree Diagram

![Hackolade image](/nse-staging/image96.png?raw=true)

##### 2.1.2.7.3.4.2 **error** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>error</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a850151d-0574-45da-aad8-42a46774ef42"></a>2.1.2.7.3.5 Field **group**

##### 2.1.2.7.3.5.1 **group** Tree Diagram

![Hackolade image](/nse-staging/image97.png?raw=true)

##### 2.1.2.7.3.5.2 **group** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>group</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Foreign field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providergroups._id to emailreports_backup.group</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="140dc540-6e93-488d-9aa3-fe3d8afaf1f4"></a>2.1.2.7.3.6 Field **status**

##### 2.1.2.7.3.6.1 **status** Tree Diagram

![Hackolade image](/nse-staging/image98.png?raw=true)

##### 2.1.2.7.3.6.2 **status** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>status</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>DELIVERED</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3ab5c563-db4a-43e2-b86a-aaf04341c4b5"></a>2.1.2.7.3.7 Field **createdAt**

##### 2.1.2.7.3.7.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image99.png?raw=true)

##### 2.1.2.7.3.7.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="efea566b-e86d-44f5-b173-eda6edec86b0"></a>2.1.2.7.3.8 Field **updatedAt**

##### 2.1.2.7.3.8.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image100.png?raw=true)

##### 2.1.2.7.3.8.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="426f47be-5fed-42f4-8f5c-07bc8eca357e"></a>2.1.2.7.3.9 Field **\_\_v**

##### 2.1.2.7.3.9.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image101.png?raw=true)

##### 2.1.2.7.3.9.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="26429953-9329-48e1-ab7a-5ff8f99cf461"></a>2.1.2.7.3.10 Field **user**

##### 2.1.2.7.3.10.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image102.png?raw=true)

##### 2.1.2.7.3.10.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to emailreports_backup.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="33fa9264-3f6e-4675-98c0-ecf9a3a20f13"></a>2.1.2.7.3.11 Field **providerDetails**

##### 2.1.2.7.3.11.1 **providerDetails** Tree Diagram

![Hackolade image](/nse-staging/image103.png?raw=true)

##### 2.1.2.7.3.11.2 **providerDetails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providerDetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Foreign field</td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providerdetails._id to emailreports_backup.providerDetails</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="07a96762-dbb3-4ff5-895c-f5d1695f033e"></a>2.1.2.7.3.12 Field **bounceDetailLong**

##### 2.1.2.7.3.12.1 **bounceDetailLong** Tree Diagram

![Hackolade image](/nse-staging/image104.png?raw=true)

##### 2.1.2.7.3.12.2 **bounceDetailLong** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailLong</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c2bd88ac-583c-428a-a935-d72a60cec642"></a>2.1.2.7.3.13 Field **bounceDetailShort**

##### 2.1.2.7.3.13.1 **bounceDetailShort** Tree Diagram

![Hackolade image](/nse-staging/image105.png?raw=true)

##### 2.1.2.7.3.13.2 **bounceDetailShort** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailShort</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="be8f7db8-b026-4e5c-ac72-a1ddb919735a"></a>2.1.2.7.3.14 Field **domain**

##### 2.1.2.7.3.14.1 **domain** Tree Diagram

![Hackolade image](/nse-staging/image106.png?raw=true)

##### 2.1.2.7.3.14.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="56bd9940-bbd0-4a1c-96f3-7eb0021cf6be"></a>2.1.2.7.3.15 Field **isNotified**

##### 2.1.2.7.3.15.1 **isNotified** Tree Diagram

![Hackolade image](/nse-staging/image107.png?raw=true)

##### 2.1.2.7.3.15.2 **isNotified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isNotified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8f538c59-8f68-49d3-9b8e-b87d311eed05"></a>2.1.2.7.3.16 Field **notificationFrom**

##### 2.1.2.7.3.16.1 **notificationFrom** Tree Diagram

![Hackolade image](/nse-staging/image108.png?raw=true)

##### 2.1.2.7.3.16.2 **notificationFrom** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationFrom</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="19fe4973-ac57-4ff1-aa65-1bb925e3264e"></a>2.1.2.7.3.17 Field **notificationTo**

##### 2.1.2.7.3.17.1 **notificationTo** Tree Diagram

![Hackolade image](/nse-staging/image109.png?raw=true)

##### 2.1.2.7.3.17.2 **notificationTo** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationTo</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="78a3f923-1bf4-4d62-9675-233c3441676d"></a>2.1.2.7.3.18 Field **notifiedAt**

##### 2.1.2.7.3.18.1 **notifiedAt** Tree Diagram

![Hackolade image](/nse-staging/image110.png?raw=true)

##### 2.1.2.7.3.18.2 **notifiedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notifiedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>multiple (null,date)</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>null</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr></tbody></table>

### <a id="c115b2d6-80b9-4f24-94fa-ccc233be2384"></a>2.1.2.7.3.19 Field **recipient**

##### 2.1.2.7.3.19.1 **recipient** Tree Diagram

![Hackolade image](/nse-staging/image111.png?raw=true)

##### 2.1.2.7.3.19.2 **recipient** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>recipient</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>mallikarjun+169@nexweave.co</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="33e8344c-ed0a-4ac1-bd4c-cf4841feeee3"></a>2.1.2.7.3.20 Field **referenceId**

##### 2.1.2.7.3.20.1 **referenceId** Tree Diagram

![Hackolade image](/nse-staging/image112.png?raw=true)

##### 2.1.2.7.3.20.2 **referenceId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>referenceId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>uKHLosJUSgSq1Usvs4uYjw</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1ab968c7-a0ab-4c19-8b21-be4b277de76a"></a>2.1.2.7.3.21 Field **sender**

##### 2.1.2.7.3.21.1 **sender** Tree Diagram

![Hackolade image](/nse-staging/image113.png?raw=true)

##### 2.1.2.7.3.21.2 **sender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>sender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="02d6e4eb-6a09-4eac-b18a-5cfd16a2f204"></a>2.1.2.7.3.22 Field **subject**

##### 2.1.2.7.3.22.1 **subject** Tree Diagram

![Hackolade image](/nse-staging/image114.png?raw=true)

##### 2.1.2.7.3.22.2 **subject** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>subject</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.7.4 **emailreports\_backup** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">from_text_to_text</td><td class="table-column-property">sender_1</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">from_text_to_text</td><td class="table-column-indexes">sender_1</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">from('text'), to('text')</td><td class="table-column-indexes">sender('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.7.5 **emailreports\_backup** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "emailreports_backup",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "from": {
            "type": "string"
        },
        "to": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "group": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "status": {
            "type": "string"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "providerDetails": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "bounceDetailLong": {
            "type": "string"
        },
        "bounceDetailShort": {
            "type": "string"
        },
        "domain": {
            "type": "string"
        },
        "isNotified": {
            "type": "boolean"
        },
        "notificationFrom": {
            "type": "string"
        },
        "notificationTo": {
            "type": "string"
        },
        "notifiedAt": {
            "type": [
                "null",
                "string"
            ],
            "format": "date-time"
        },
        "recipient": {
            "type": "string"
        },
        "referenceId": {
            "type": "string"
        },
        "sender": {
            "type": "string"
        },
        "subject": {
            "type": "string"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "status",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.7.6 **emailreports\_backup** JSON data

```
{
    "_id": ObjectId("8d17ccd8a6bbab805ab1de3c"),
    "from": "Pramod <pramod@nxwv.io>",
    "to": "pramod@nexweave.co",
    "error": "Lorem",
    "group": ObjectId("af4f22dba4f0cea55815cd48"),
    "status": "DELIVERED",
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "user": ObjectId("ed6ba2d4e50f7369cfcaed14"),
    "providerDetails": ObjectId("74dc2eca1fdfd45ccbeceb6f"),
    "bounceDetailLong": "Lorem",
    "bounceDetailShort": "Lorem",
    "domain": "Lorem",
    "isNotified": false,
    "notificationFrom": "Lorem",
    "notificationTo": "Lorem",
    "notifiedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "recipient": "mallikarjun+169@nexweave.co",
    "referenceId": "uKHLosJUSgSq1Usvs4uYjw",
    "sender": "Lorem",
    "subject": "Lorem"
}
```

##### 2.1.2.7.7 **emailreports\_backup** Target Script

```
use nse-staging;

db.createCollection("emailreports_backup", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "emailreports_backup",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "from": {
                    "bsonType": "string"
                },
                "to": {
                    "bsonType": "string"
                },
                "error": {
                    "bsonType": "string"
                },
                "group": {
                    "bsonType": "objectId"
                },
                "status": {
                    "bsonType": "string"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "user": {
                    "bsonType": "objectId"
                },
                "providerDetails": {
                    "bsonType": "objectId"
                },
                "bounceDetailLong": {
                    "bsonType": "string"
                },
                "bounceDetailShort": {
                    "bsonType": "string"
                },
                "domain": {
                    "bsonType": "string"
                },
                "isNotified": {
                    "bsonType": "bool"
                },
                "notificationFrom": {
                    "bsonType": "string"
                },
                "notificationTo": {
                    "bsonType": "string"
                },
                "notifiedAt": {
                    "bsonType": [
                        "null",
                        "date"
                    ]
                },
                "recipient": {
                    "bsonType": "string"
                },
                "referenceId": {
                    "bsonType": "string"
                },
                "sender": {
                    "bsonType": "string"
                },
                "subject": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "status",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.emailreports_backup.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});

db.emailreports_backup.createIndex({
    "from": "text",
    "to": "text"
},
{
    "name": "from_text_to_text",
    "background": true,
    "weights": {
        "from": 1,
        "to": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
});

db.emailreports_backup.createIndex({
    "sender": 1
},
{
    "name": "sender_1",
    "background": true
});
```

### <a id="4fdbc167-5d68-4330-b18b-fdd0ee36f253"></a>2.1.2.8 Collection **events**

##### 2.1.2.8.1 **events** Tree Diagram

![Hackolade image](/nse-staging/image115.png?raw=true)

##### 2.1.2.8.2 **events** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>events</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.8.3 **events** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#833676c0-6872-4565-86fe-a8aed23beea4 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#bd7701b7-4fd8-4247-a4e4-b2fcaec23d59 class="margin-0">notificationFrom</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#eced0961-9395-4f12-b4f8-73733b09e5fc class="margin-0">notificationTo</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#af4b6c58-1ece-472f-8771-6f2f6597e155 class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6bb9764a-110d-4370-92f2-15eb0ca5b0d8 class="margin-0">error</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1e140900-fcab-4b07-a60f-710343afb76e class="margin-0">domain</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#35695c66-8b9d-41c1-a32e-e9f971c5440d class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5e588543-d5ce-41a4-914b-be9f3c8ee297 class="margin-0">emailProvider</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5be5a20c-932b-499c-a77e-b44a8b65d439 class="margin-0">status</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9e898045-e4f0-49d9-b6b8-53aae951c944 class="margin-0">referenceId</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cb7dba86-9617-4636-adef-1dead00463ab class="margin-0">notifiedAt</a></td><td class="no-break-word">null,date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e9e3aa5d-9359-41de-89ae-dee1fbc34424 class="margin-0">isNotified</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#579421ee-ada7-4e75-9432-a427ccc5649b class="margin-0">sender</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#475ae91a-9d67-4feb-aca2-7a20fbd9cf25 class="margin-0">recipient</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0a431187-9509-4bdd-81da-c34d98c073b4 class="margin-0">bounceDetailShort</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3e625503-c5bb-4ad6-bd05-4fb7deb9701e class="margin-0">bounceDetailLong</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#14f1b4a6-a08a-48a4-9be8-4ccb6bcce4b0 class="margin-0">subject</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f2a72d1b-63aa-4ebc-90cb-2186ee151c5a class="margin-0">messageId</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#04e7d234-afbe-471b-ae83-63a6a8e498ad class="margin-0">hasAttachment</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8ef28b16-6bb6-4760-a8e2-a1fdbcaae695 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#40cf902f-670b-4dc4-b756-c936e4ea58e0 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#578ac1d1-3fed-4016-ae26-f88a7cf9a69d class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d5b3ffb8-33e5-4415-9706-f62ab206384a class="margin-0">webhookId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="833676c0-6872-4565-86fe-a8aed23beea4"></a>2.1.2.8.3.1 Field **\_id**

##### 2.1.2.8.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image116.png?raw=true)

##### 2.1.2.8.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="bd7701b7-4fd8-4247-a4e4-b2fcaec23d59"></a>2.1.2.8.3.2 Field **notificationFrom**

##### 2.1.2.8.3.2.1 **notificationFrom** Tree Diagram

![Hackolade image](/nse-staging/image117.png?raw=true)

##### 2.1.2.8.3.2.2 **notificationFrom** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationFrom</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="eced0961-9395-4f12-b4f8-73733b09e5fc"></a>2.1.2.8.3.3 Field **notificationTo**

##### 2.1.2.8.3.3.1 **notificationTo** Tree Diagram

![Hackolade image](/nse-staging/image118.png?raw=true)

##### 2.1.2.8.3.3.2 **notificationTo** Hierarchy

Parent field: **events**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#af4b6c58-1ece-472f-8771-6f2f6597e155 class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.8.3.3.3 **notificationTo** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationTo</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="af4b6c58-1ece-472f-8771-6f2f6597e155"></a>2.1.2.8.3.4 Field **\[0\]**

##### 2.1.2.8.3.4.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image119.png?raw=true)

##### 2.1.2.8.3.4.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6bb9764a-110d-4370-92f2-15eb0ca5b0d8"></a>2.1.2.8.3.5 Field **error**

##### 2.1.2.8.3.5.1 **error** Tree Diagram

![Hackolade image](/nse-staging/image120.png?raw=true)

##### 2.1.2.8.3.5.2 **error** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>error</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1e140900-fcab-4b07-a60f-710343afb76e"></a>2.1.2.8.3.6 Field **domain**

##### 2.1.2.8.3.6.1 **domain** Tree Diagram

![Hackolade image](/nse-staging/image121.png?raw=true)

##### 2.1.2.8.3.6.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="35695c66-8b9d-41c1-a32e-e9f971c5440d"></a>2.1.2.8.3.7 Field **user**

##### 2.1.2.8.3.7.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image122.png?raw=true)

##### 2.1.2.8.3.7.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to events.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5e588543-d5ce-41a4-914b-be9f3c8ee297"></a>2.1.2.8.3.8 Field **emailProvider**

##### 2.1.2.8.3.8.1 **emailProvider** Tree Diagram

![Hackolade image](/nse-staging/image123.png?raw=true)

##### 2.1.2.8.3.8.2 **emailProvider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>emailProvider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td></tr><tr><td>Foreign field</td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk emailproviders._id to events.emailProvider</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5be5a20c-932b-499c-a77e-b44a8b65d439"></a>2.1.2.8.3.9 Field **status**

##### 2.1.2.8.3.9.1 **status** Tree Diagram

![Hackolade image](/nse-staging/image124.png?raw=true)

##### 2.1.2.8.3.9.2 **status** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>status</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>DELIVERED</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9e898045-e4f0-49d9-b6b8-53aae951c944"></a>2.1.2.8.3.10 Field **referenceId**

##### 2.1.2.8.3.10.1 **referenceId** Tree Diagram

![Hackolade image](/nse-staging/image125.png?raw=true)

##### 2.1.2.8.3.10.2 **referenceId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>referenceId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>20230411125554.2737732f9f1450e6@sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cb7dba86-9617-4636-adef-1dead00463ab"></a>2.1.2.8.3.11 Field **notifiedAt**

##### 2.1.2.8.3.11.1 **notifiedAt** Tree Diagram

![Hackolade image](/nse-staging/image126.png?raw=true)

##### 2.1.2.8.3.11.2 **notifiedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notifiedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>multiple (null,date)</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>null</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr></tbody></table>

### <a id="e9e3aa5d-9359-41de-89ae-dee1fbc34424"></a>2.1.2.8.3.12 Field **isNotified**

##### 2.1.2.8.3.12.1 **isNotified** Tree Diagram

![Hackolade image](/nse-staging/image127.png?raw=true)

##### 2.1.2.8.3.12.2 **isNotified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isNotified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="579421ee-ada7-4e75-9432-a427ccc5649b"></a>2.1.2.8.3.13 Field **sender**

##### 2.1.2.8.3.13.1 **sender** Tree Diagram

![Hackolade image](/nse-staging/image128.png?raw=true)

##### 2.1.2.8.3.13.2 **sender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>sender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>master@sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="475ae91a-9d67-4feb-aca2-7a20fbd9cf25"></a>2.1.2.8.3.14 Field **recipient**

##### 2.1.2.8.3.14.1 **recipient** Tree Diagram

![Hackolade image](/nse-staging/image129.png?raw=true)

##### 2.1.2.8.3.14.2 **recipient** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>recipient</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>aryans.develop@gmail.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0a431187-9509-4bdd-81da-c34d98c073b4"></a>2.1.2.8.3.15 Field **bounceDetailShort**

##### 2.1.2.8.3.15.1 **bounceDetailShort** Tree Diagram

![Hackolade image](/nse-staging/image130.png?raw=true)

##### 2.1.2.8.3.15.2 **bounceDetailShort** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailShort</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3e625503-c5bb-4ad6-bd05-4fb7deb9701e"></a>2.1.2.8.3.16 Field **bounceDetailLong**

##### 2.1.2.8.3.16.1 **bounceDetailLong** Tree Diagram

![Hackolade image](/nse-staging/image131.png?raw=true)

##### 2.1.2.8.3.16.2 **bounceDetailLong** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailLong</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="14f1b4a6-a08a-48a4-9be8-4ccb6bcce4b0"></a>2.1.2.8.3.17 Field **subject**

##### 2.1.2.8.3.17.1 **subject** Tree Diagram

![Hackolade image](/nse-staging/image132.png?raw=true)

##### 2.1.2.8.3.17.2 **subject** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>subject</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f2a72d1b-63aa-4ebc-90cb-2186ee151c5a"></a>2.1.2.8.3.18 Field **messageId**

##### 2.1.2.8.3.18.1 **messageId** Tree Diagram

![Hackolade image](/nse-staging/image133.png?raw=true)

##### 2.1.2.8.3.18.2 **messageId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>messageId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="04e7d234-afbe-471b-ae83-63a6a8e498ad"></a>2.1.2.8.3.19 Field **hasAttachment**

##### 2.1.2.8.3.19.1 **hasAttachment** Tree Diagram

![Hackolade image](/nse-staging/image134.png?raw=true)

##### 2.1.2.8.3.19.2 **hasAttachment** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>hasAttachment</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8ef28b16-6bb6-4760-a8e2-a1fdbcaae695"></a>2.1.2.8.3.20 Field **createdAt**

##### 2.1.2.8.3.20.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image135.png?raw=true)

##### 2.1.2.8.3.20.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="40cf902f-670b-4dc4-b756-c936e4ea58e0"></a>2.1.2.8.3.21 Field **updatedAt**

##### 2.1.2.8.3.21.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image136.png?raw=true)

##### 2.1.2.8.3.21.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="578ac1d1-3fed-4016-ae26-f88a7cf9a69d"></a>2.1.2.8.3.22 Field **\_\_v**

##### 2.1.2.8.3.22.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image137.png?raw=true)

##### 2.1.2.8.3.22.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d5b3ffb8-33e5-4415-9706-f62ab206384a"></a>2.1.2.8.3.23 Field **webhookId**

##### 2.1.2.8.3.23.1 **webhookId** Tree Diagram

![Hackolade image](/nse-staging/image138.png?raw=true)

##### 2.1.2.8.3.23.2 **webhookId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>webhookId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>XPNjqT7KOAB-</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.8.4 **events** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">domain('text'), recipient('text'), sender('text'), status('text'), subject('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.8.5 **events** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "events",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "notificationFrom": {
            "type": "string"
        },
        "notificationTo": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "string"
            }
        },
        "error": {
            "type": "string"
        },
        "domain": {
            "type": "string"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "emailProvider": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "status": {
            "type": "string"
        },
        "referenceId": {
            "type": "string"
        },
        "notifiedAt": {
            "type": [
                "null",
                "string"
            ],
            "format": "date-time"
        },
        "isNotified": {
            "type": "boolean"
        },
        "sender": {
            "type": "string"
        },
        "recipient": {
            "type": "string"
        },
        "bounceDetailShort": {
            "type": "string"
        },
        "bounceDetailLong": {
            "type": "string"
        },
        "subject": {
            "type": "string"
        },
        "messageId": {
            "type": "string"
        },
        "hasAttachment": {
            "type": "boolean"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "webhookId": {
            "type": "string"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "notificationFrom",
        "notificationTo",
        "error",
        "domain",
        "user",
        "emailProvider",
        "status",
        "referenceId",
        "isNotified",
        "sender",
        "recipient",
        "bounceDetailShort",
        "bounceDetailLong",
        "subject",
        "messageId",
        "hasAttachment",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.8.6 **events** JSON data

```
{
    "_id": ObjectId("faff54da47b5fb6ca2ecadea"),
    "notificationFrom": "Lorem",
    "notificationTo": [
        "Lorem"
    ],
    "error": "Lorem",
    "domain": "sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
    "user": ObjectId("2871feebc8ca5db5cda5fdce"),
    "emailProvider": ObjectId("9d05cd5a29d0637c894e4e0a"),
    "status": "DELIVERED",
    "referenceId": "20230411125554.2737732f9f1450e6@sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
    "notifiedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "isNotified": false,
    "sender": "master@sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
    "recipient": "aryans.develop@gmail.com",
    "bounceDetailShort": "Lorem",
    "bounceDetailLong": "Lorem",
    "subject": "Lorem",
    "messageId": "Lorem",
    "hasAttachment": false,
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "webhookId": "XPNjqT7KOAB-"
}
```

##### 2.1.2.8.7 **events** Target Script

```
use nse-staging;

db.createCollection("events", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "events",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "notificationFrom": {
                    "bsonType": "string"
                },
                "notificationTo": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string"
                    }
                },
                "error": {
                    "bsonType": "string"
                },
                "domain": {
                    "bsonType": "string"
                },
                "user": {
                    "bsonType": "objectId"
                },
                "emailProvider": {
                    "bsonType": "objectId"
                },
                "status": {
                    "bsonType": "string"
                },
                "referenceId": {
                    "bsonType": "string"
                },
                "notifiedAt": {
                    "bsonType": [
                        "null",
                        "date"
                    ]
                },
                "isNotified": {
                    "bsonType": "bool"
                },
                "sender": {
                    "bsonType": "string"
                },
                "recipient": {
                    "bsonType": "string"
                },
                "bounceDetailShort": {
                    "bsonType": "string"
                },
                "bounceDetailLong": {
                    "bsonType": "string"
                },
                "subject": {
                    "bsonType": "string"
                },
                "messageId": {
                    "bsonType": "string"
                },
                "hasAttachment": {
                    "bsonType": "bool"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "webhookId": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "notificationFrom",
                "notificationTo",
                "error",
                "domain",
                "user",
                "emailProvider",
                "status",
                "referenceId",
                "isNotified",
                "sender",
                "recipient",
                "bounceDetailShort",
                "bounceDetailLong",
                "subject",
                "messageId",
                "hasAttachment",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.events.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});

db.events.createIndex({
    "domain": "text",
    "recipient": "text",
    "sender": "text",
    "status": "text",
    "subject": "text"
},
{
    "name": "sender_text_recipient_text_domain_text_status_text_subject_text_group_text",
    "background": true,
    "weights": {
        "domain": 1,
        "group": 1,
        "recipient": 1,
        "sender": 1,
        "status": 1,
        "subject": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
});
```

### <a id="c0dbdd3b-f213-4066-bf85-523b88292c6f"></a>2.1.2.9 Collection **notifications**

##### 2.1.2.9.1 **notifications** Tree Diagram

![Hackolade image](/nse-staging/image139.png?raw=true)

##### 2.1.2.9.2 **notifications** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>notifications</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.9.3 **notifications** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody></tbody></table>

##### 2.1.2.9.4 **notifications** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "notifications",
    "additionalProperties": true
}
```

##### 2.1.2.9.5 **notifications** JSON data

```
{}
```

##### 2.1.2.9.6 **notifications** Target Script

```
use nse-staging;

db.createCollection("notifications", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "notifications",
            "additionalProperties": true,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                }
            }
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="fe399826-287f-453f-abb7-98b1f49aacc3"></a>2.1.2.10 Collection **notificationssettings**

##### 2.1.2.10.1 **notificationssettings** Tree Diagram

![Hackolade image](/nse-staging/image140.png?raw=true)

##### 2.1.2.10.2 **notificationssettings** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>notificationssettings</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.10.3 **notificationssettings** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#3cdce332-b593-4fa7-913b-6b70534698b4 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#99e93cf9-15d3-470e-bcf7-a1376dc40c87 class="margin-0">providerGroup</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ed32e333-68c8-4154-859c-57c97555a744 class="margin-0">createdBy</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8e9895ce-395b-4d96-9676-83349cbe2a5c class="margin-0">maxNotifications</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#75fe3b22-9284-4cdf-b857-ec190473ebae class="margin-0">notifyEmails</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#19849827-fd98-47ed-9da8-2e0cfccb837f class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9fd4900f-6350-4f62-b9f7-b25fb1a91a64 class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#915c4024-9f74-4394-aa70-2dc5e42af162 class="margin-0">description</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#78e25721-c3c1-4313-86ff-da3b5af6eede class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2c4ec814-a029-4c6e-93f7-12af61147051 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#49c2ba31-9fd6-4d6e-b5d8-b7d31a8e7116 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1fc9a3d2-17b0-4c87-933c-7d7fd8aa09a1 class="margin-0">comments</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b77e1c66-3312-4bd7-90e3-1fa585d6afd6 class="margin-0">domain</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#bfa7187f-237a-44af-b907-a8d7bab8e3a2 class="margin-0">email</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#babce2b8-388f-4ad6-bc64-d8b7c688e334 class="margin-0">isNotifySender</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e1faf080-2671-4393-be81-de8218ef8cad class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3cdce332-b593-4fa7-913b-6b70534698b4"></a>2.1.2.10.3.1 Field **\_id**

##### 2.1.2.10.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image141.png?raw=true)

##### 2.1.2.10.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="99e93cf9-15d3-470e-bcf7-a1376dc40c87"></a>2.1.2.10.3.2 Field **providerGroup**

##### 2.1.2.10.3.2.1 **providerGroup** Tree Diagram

![Hackolade image](/nse-staging/image142.png?raw=true)

##### 2.1.2.10.3.2.2 **providerGroup** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providerGroup</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Foreign field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providergroups._id to notificationssettings.providerGroup</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ed32e333-68c8-4154-859c-57c97555a744"></a>2.1.2.10.3.3 Field **createdBy**

##### 2.1.2.10.3.3.1 **createdBy** Tree Diagram

![Hackolade image](/nse-staging/image143.png?raw=true)

##### 2.1.2.10.3.3.2 **createdBy** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdBy</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to notificationssettings.createdBy</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8e9895ce-395b-4d96-9676-83349cbe2a5c"></a>2.1.2.10.3.4 Field **maxNotifications**

##### 2.1.2.10.3.4.1 **maxNotifications** Tree Diagram

![Hackolade image](/nse-staging/image144.png?raw=true)

##### 2.1.2.10.3.4.2 **maxNotifications** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>maxNotifications</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>1000</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="75fe3b22-9284-4cdf-b857-ec190473ebae"></a>2.1.2.10.3.5 Field **notifyEmails**

##### 2.1.2.10.3.5.1 **notifyEmails** Tree Diagram

![Hackolade image](/nse-staging/image145.png?raw=true)

##### 2.1.2.10.3.5.2 **notifyEmails** Hierarchy

Parent field: **notificationssettings**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#19849827-fd98-47ed-9da8-2e0cfccb837f class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.10.3.5.3 **notifyEmails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notifyEmails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="19849827-fd98-47ed-9da8-2e0cfccb837f"></a>2.1.2.10.3.6 Field **\[0\]**

##### 2.1.2.10.3.6.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image146.png?raw=true)

##### 2.1.2.10.3.6.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>suraj.kadam@nexweave.co</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9fd4900f-6350-4f62-b9f7-b25fb1a91a64"></a>2.1.2.10.3.7 Field **isActive**

##### 2.1.2.10.3.7.1 **isActive** Tree Diagram

![Hackolade image](/nse-staging/image147.png?raw=true)

##### 2.1.2.10.3.7.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="915c4024-9f74-4394-aa70-2dc5e42af162"></a>2.1.2.10.3.8 Field **description**

##### 2.1.2.10.3.8.1 **description** Tree Diagram

![Hackolade image](/nse-staging/image148.png?raw=true)

##### 2.1.2.10.3.8.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="78e25721-c3c1-4313-86ff-da3b5af6eede"></a>2.1.2.10.3.9 Field **createdAt**

##### 2.1.2.10.3.9.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image149.png?raw=true)

##### 2.1.2.10.3.9.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2c4ec814-a029-4c6e-93f7-12af61147051"></a>2.1.2.10.3.10 Field **updatedAt**

##### 2.1.2.10.3.10.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image150.png?raw=true)

##### 2.1.2.10.3.10.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="49c2ba31-9fd6-4d6e-b5d8-b7d31a8e7116"></a>2.1.2.10.3.11 Field **\_\_v**

##### 2.1.2.10.3.11.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image151.png?raw=true)

##### 2.1.2.10.3.11.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1fc9a3d2-17b0-4c87-933c-7d7fd8aa09a1"></a>2.1.2.10.3.12 Field **comments**

##### 2.1.2.10.3.12.1 **comments** Tree Diagram

![Hackolade image](/nse-staging/image152.png?raw=true)

##### 2.1.2.10.3.12.2 **comments** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>comments</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b77e1c66-3312-4bd7-90e3-1fa585d6afd6"></a>2.1.2.10.3.13 Field **domain**

##### 2.1.2.10.3.13.1 **domain** Tree Diagram

![Hackolade image](/nse-staging/image153.png?raw=true)

##### 2.1.2.10.3.13.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="bfa7187f-237a-44af-b907-a8d7bab8e3a2"></a>2.1.2.10.3.14 Field **email**

##### 2.1.2.10.3.14.1 **email** Tree Diagram

![Hackolade image](/nse-staging/image154.png?raw=true)

##### 2.1.2.10.3.14.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="babce2b8-388f-4ad6-bc64-d8b7c688e334"></a>2.1.2.10.3.15 Field **isNotifySender**

##### 2.1.2.10.3.15.1 **isNotifySender** Tree Diagram

![Hackolade image](/nse-staging/image155.png?raw=true)

##### 2.1.2.10.3.15.2 **isNotifySender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isNotifySender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e1faf080-2671-4393-be81-de8218ef8cad"></a>2.1.2.10.3.16 Field **user**

##### 2.1.2.10.3.16.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image156.png?raw=true)

##### 2.1.2.10.3.16.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to notificationssettings.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.10.4 **notificationssettings** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.10.5 **notificationssettings** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "notificationssettings",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "providerGroup": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "createdBy": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "maxNotifications": {
            "type": "integer"
        },
        "notifyEmails": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "string"
            }
        },
        "isActive": {
            "type": "boolean"
        },
        "description": {
            "type": "string"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "comments": {
            "type": "string"
        },
        "domain": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "isNotifySender": {
            "type": "boolean"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "maxNotifications",
        "notifyEmails",
        "isActive",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.10.6 **notificationssettings** JSON data

```
{
    "_id": ObjectId("c91d7cae657dcaf5c4c1866e"),
    "providerGroup": ObjectId("bab25e8b1da3b1ddfdad1e67"),
    "createdBy": ObjectId("dafbbe1db5bcb5c42764f39d"),
    "maxNotifications": Int32(1000),
    "notifyEmails": [
        "suraj.kadam@nexweave.co"
    ],
    "isActive": true,
    "description": "Lorem",
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "comments": "Lorem",
    "domain": "sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
    "email": "Lorem",
    "isNotifySender": false,
    "user": ObjectId("aecac21dbb7de948e6504d55")
}
```

##### 2.1.2.10.7 **notificationssettings** Target Script

```
use nse-staging;

db.createCollection("notificationssettings", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "notificationssettings",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "providerGroup": {
                    "bsonType": "objectId"
                },
                "createdBy": {
                    "bsonType": "objectId"
                },
                "maxNotifications": {
                    "bsonType": "int"
                },
                "notifyEmails": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string"
                    }
                },
                "isActive": {
                    "bsonType": "bool"
                },
                "description": {
                    "bsonType": "string"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "comments": {
                    "bsonType": "string"
                },
                "domain": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "isNotifySender": {
                    "bsonType": "bool"
                },
                "user": {
                    "bsonType": "objectId"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "maxNotifications",
                "notifyEmails",
                "isActive",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.notificationssettings.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});
```

### <a id="40c10d28-5c14-4905-8432-a12a4b9a08d3"></a>2.1.2.11 Collection **providerdetails**

##### 2.1.2.11.1 **providerdetails** Tree Diagram

![Hackolade image](/nse-staging/image157.png?raw=true)

##### 2.1.2.11.2 **providerdetails** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>providerdetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.11.3 **providerdetails** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8552a0c3-77f9-437e-b561-fb74a6d17a51 class="margin-0">provider</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#71747168-86ec-4520-ba73-b766c1ab4d8e class="margin-0">connectionType</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cf726884-5e32-48d4-99c2-70801577a8f6 class="margin-0">isVerified</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7bb2a260-8392-44c0-8a59-12d435eee0f9 class="margin-0">apiDetails</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e13152f0-606e-4564-be31-48e3f7100e44 class="margin-5">displayName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ad4da186-fb20-4a64-bd79-cbfdc74e5852 class="margin-5">apiKey</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#825f4ac9-8a44-4a7b-8d4a-01e811648159 class="margin-5">client_id</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8109b38c-a76f-4d39-ad77-b172708444f2 class="margin-5">client_secret</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cbe0340d-32a8-4f1b-b2b0-2093770a7653 class="margin-5">domainName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7e54f93e-2777-4761-a61e-617e0c612d8f class="margin-5">inboxId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8dd748fa-7986-4cd6-b96d-ee8c0ffdd19b class="margin-5">name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#20063f90-3f56-424f-b3d4-2ec637ffeba5 class="margin-5">serverId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e8e35353-94b5-46ce-97cc-0605ad139da9 class="margin-5">tenant_id</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a811babf-23a0-4ee6-b97e-4a6dcdb29d59 class="margin-5">token</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6c927e47-f859-46f6-a203-b4ada4945195 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1dad5f67-cea9-4867-a7f5-ad359b1ce9e3 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#84929c68-e1db-4408-9a85-dd5005ce0d78 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5fb0aacd-e234-452a-930c-9feb3d1f28aa class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cfec2e36-0d4c-4221-b49d-f92407c2c24c class="margin-0">__enc_apiDetails</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5be204cf-0eca-4a9f-b6dd-c8f6ddbd0d05 class="margin-0">__enc_apiDetails_d</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0d2d4787-8a13-479b-926f-fc8826ea4755 class="margin-0">configuration</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#af852dc6-a82b-4682-9784-30a3831388f0 class="margin-5">dailyMailLimit</a></td><td class="no-break-word">integer32</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7fb44a93-da2c-4919-a34c-5745e63eed95 class="margin-5">mailLimit</a></td><td class="no-break-word">integer32</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5fe77ade-7b1b-4d3f-85af-b7fad2d31e14 class="margin-5">monthlyMailLimit</a></td><td class="no-break-word">integer32</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f4cd9eb1-45dd-42ea-a9c5-c1de420d6c2e class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="468c25bb-cbb5-45cc-8e34-325f0fb0240b"></a>2.1.2.11.3.1 Field **\_id**

##### 2.1.2.11.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image158.png?raw=true)

##### 2.1.2.11.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8552a0c3-77f9-437e-b561-fb74a6d17a51"></a>2.1.2.11.3.2 Field **provider**

##### 2.1.2.11.3.2.1 **provider** Tree Diagram

![Hackolade image](/nse-staging/image159.png?raw=true)

##### 2.1.2.11.3.2.2 **provider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>provider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td></tr><tr><td>Foreign field</td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk emailproviders._id to providerdetails.provider</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="71747168-86ec-4520-ba73-b766c1ab4d8e"></a>2.1.2.11.3.3 Field **connectionType**

##### 2.1.2.11.3.3.1 **connectionType** Tree Diagram

![Hackolade image](/nse-staging/image160.png?raw=true)

##### 2.1.2.11.3.3.2 **connectionType** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>connectionType</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>API</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cf726884-5e32-48d4-99c2-70801577a8f6"></a>2.1.2.11.3.4 Field **isVerified**

##### 2.1.2.11.3.4.1 **isVerified** Tree Diagram

![Hackolade image](/nse-staging/image161.png?raw=true)

##### 2.1.2.11.3.4.2 **isVerified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isVerified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7bb2a260-8392-44c0-8a59-12d435eee0f9"></a>2.1.2.11.3.5 Field **apiDetails**

##### 2.1.2.11.3.5.1 **apiDetails** Tree Diagram

![Hackolade image](/nse-staging/image162.png?raw=true)

##### 2.1.2.11.3.5.2 **apiDetails** Hierarchy

Parent field: **providerdetails**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#e13152f0-606e-4564-be31-48e3f7100e44 class="margin-NaN">displayName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ad4da186-fb20-4a64-bd79-cbfdc74e5852 class="margin-NaN">apiKey</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#825f4ac9-8a44-4a7b-8d4a-01e811648159 class="margin-NaN">client_id</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8109b38c-a76f-4d39-ad77-b172708444f2 class="margin-NaN">client_secret</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cbe0340d-32a8-4f1b-b2b0-2093770a7653 class="margin-NaN">domainName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7e54f93e-2777-4761-a61e-617e0c612d8f class="margin-NaN">inboxId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8dd748fa-7986-4cd6-b96d-ee8c0ffdd19b class="margin-NaN">name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#20063f90-3f56-424f-b3d4-2ec637ffeba5 class="margin-NaN">serverId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e8e35353-94b5-46ce-97cc-0605ad139da9 class="margin-NaN">tenant_id</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a811babf-23a0-4ee6-b97e-4a6dcdb29d59 class="margin-NaN">token</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.11.3.5.3 **apiDetails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>apiDetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e13152f0-606e-4564-be31-48e3f7100e44"></a>2.1.2.11.3.6 Field **displayName**

##### 2.1.2.11.3.6.1 **displayName** Tree Diagram

![Hackolade image](/nse-staging/image163.png?raw=true)

##### 2.1.2.11.3.6.2 **displayName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>displayName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>MG</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ad4da186-fb20-4a64-bd79-cbfdc74e5852"></a>2.1.2.11.3.7 Field **apiKey**

##### 2.1.2.11.3.7.1 **apiKey** Tree Diagram

![Hackolade image](/nse-staging/image164.png?raw=true)

##### 2.1.2.11.3.7.2 **apiKey** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>apiKey</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>7c447982fa166cc5a7c72f84963f03ff-f2340574-aaec1565</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="825f4ac9-8a44-4a7b-8d4a-01e811648159"></a>2.1.2.11.3.8 Field **client\_id**

##### 2.1.2.11.3.8.1 **client\_id** Tree Diagram

![Hackolade image](/nse-staging/image165.png?raw=true)

##### 2.1.2.11.3.8.2 **client\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>client_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>f76c3d0d-9ccb-4321-b27e-872c60df0d6b</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8109b38c-a76f-4d39-ad77-b172708444f2"></a>2.1.2.11.3.9 Field **client\_secret**

##### 2.1.2.11.3.9.1 **client\_secret** Tree Diagram

![Hackolade image](/nse-staging/image166.png?raw=true)

##### 2.1.2.11.3.9.2 **client\_secret** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>client_secret</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>kwg8Q~04CuU3mILj9Ps9uoKtHO4qr4mgD05vbb~X</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cbe0340d-32a8-4f1b-b2b0-2093770a7653"></a>2.1.2.11.3.10 Field **domainName**

##### 2.1.2.11.3.10.1 **domainName** Tree Diagram

![Hackolade image](/nse-staging/image167.png?raw=true)

##### 2.1.2.11.3.10.2 **domainName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domainName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7e54f93e-2777-4761-a61e-617e0c612d8f"></a>2.1.2.11.3.11 Field **inboxId**

##### 2.1.2.11.3.11.1 **inboxId** Tree Diagram

![Hackolade image](/nse-staging/image168.png?raw=true)

##### 2.1.2.11.3.11.2 **inboxId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>inboxId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>4f4b4179-ba25-4a66-a137-a849700a53e1</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8dd748fa-7986-4cd6-b96d-ee8c0ffdd19b"></a>2.1.2.11.3.12 Field **name**

##### 2.1.2.11.3.12.1 **name** Tree Diagram

![Hackolade image](/nse-staging/image169.png?raw=true)

##### 2.1.2.11.3.12.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Sendgrid</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="20063f90-3f56-424f-b3d4-2ec637ffeba5"></a>2.1.2.11.3.13 Field **serverId**

##### 2.1.2.11.3.13.1 **serverId** Tree Diagram

![Hackolade image](/nse-staging/image170.png?raw=true)

##### 2.1.2.11.3.13.2 **serverId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>serverId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>44744</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e8e35353-94b5-46ce-97cc-0605ad139da9"></a>2.1.2.11.3.14 Field **tenant\_id**

##### 2.1.2.11.3.14.1 **tenant\_id** Tree Diagram

![Hackolade image](/nse-staging/image171.png?raw=true)

##### 2.1.2.11.3.14.2 **tenant\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>tenant_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>f8cdef31-a31e-4b4a-93e4-5f571e91255a</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a811babf-23a0-4ee6-b97e-4a6dcdb29d59"></a>2.1.2.11.3.15 Field **token**

##### 2.1.2.11.3.15.1 **token** Tree Diagram

![Hackolade image](/nse-staging/image172.png?raw=true)

##### 2.1.2.11.3.15.2 **token** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>token</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>hkhkhk</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6c927e47-f859-46f6-a203-b4ada4945195"></a>2.1.2.11.3.16 Field **user**

##### 2.1.2.11.3.16.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image173.png?raw=true)

##### 2.1.2.11.3.16.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to providerdetails.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1dad5f67-cea9-4867-a7f5-ad359b1ce9e3"></a>2.1.2.11.3.17 Field **createdAt**

##### 2.1.2.11.3.17.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image174.png?raw=true)

##### 2.1.2.11.3.17.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="84929c68-e1db-4408-9a85-dd5005ce0d78"></a>2.1.2.11.3.18 Field **updatedAt**

##### 2.1.2.11.3.18.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image175.png?raw=true)

##### 2.1.2.11.3.18.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5fb0aacd-e234-452a-930c-9feb3d1f28aa"></a>2.1.2.11.3.19 Field **\_\_v**

##### 2.1.2.11.3.19.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image176.png?raw=true)

##### 2.1.2.11.3.19.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cfec2e36-0d4c-4221-b49d-f92407c2c24c"></a>2.1.2.11.3.20 Field **\_\_enc\_apiDetails**

##### 2.1.2.11.3.20.1 **\_\_enc\_apiDetails** Tree Diagram

![Hackolade image](/nse-staging/image177.png?raw=true)

##### 2.1.2.11.3.20.2 **\_\_enc\_apiDetails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__enc_apiDetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5be204cf-0eca-4a9f-b6dd-c8f6ddbd0d05"></a>2.1.2.11.3.21 Field **\_\_enc\_apiDetails\_d**

##### 2.1.2.11.3.21.1 **\_\_enc\_apiDetails\_d** Tree Diagram

![Hackolade image](/nse-staging/image178.png?raw=true)

##### 2.1.2.11.3.21.2 **\_\_enc\_apiDetails\_d** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__enc_apiDetails_d</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>3ad761ea3b220ec6600c365bff964feb:f466fd2e93640556f6f05d854c1120e1e7e7d5c666fa6d51a8afee90dbf5db0064da196a9dde24febcc4edf5b8cd714b7a247a5b642c1fb05a07cbe6e627cd02</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0d2d4787-8a13-479b-926f-fc8826ea4755"></a>2.1.2.11.3.22 Field **configuration**

##### 2.1.2.11.3.22.1 **configuration** Tree Diagram

![Hackolade image](/nse-staging/image179.png?raw=true)

##### 2.1.2.11.3.22.2 **configuration** Hierarchy

Parent field: **providerdetails**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#af852dc6-a82b-4682-9784-30a3831388f0 class="margin-NaN">dailyMailLimit</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7fb44a93-da2c-4919-a34c-5745e63eed95 class="margin-NaN">mailLimit</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5fe77ade-7b1b-4d3f-85af-b7fad2d31e14 class="margin-NaN">monthlyMailLimit</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.11.3.22.3 **configuration** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>configuration</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="af852dc6-a82b-4682-9784-30a3831388f0"></a>2.1.2.11.3.23 Field **dailyMailLimit**

##### 2.1.2.11.3.23.1 **dailyMailLimit** Tree Diagram

![Hackolade image](/nse-staging/image180.png?raw=true)

##### 2.1.2.11.3.23.2 **dailyMailLimit** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>dailyMailLimit</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>50000</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7fb44a93-da2c-4919-a34c-5745e63eed95"></a>2.1.2.11.3.24 Field **mailLimit**

##### 2.1.2.11.3.24.1 **mailLimit** Tree Diagram

![Hackolade image](/nse-staging/image181.png?raw=true)

##### 2.1.2.11.3.24.2 **mailLimit** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>mailLimit</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>500</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5fe77ade-7b1b-4d3f-85af-b7fad2d31e14"></a>2.1.2.11.3.25 Field **monthlyMailLimit**

##### 2.1.2.11.3.25.1 **monthlyMailLimit** Tree Diagram

![Hackolade image](/nse-staging/image182.png?raw=true)

##### 2.1.2.11.3.25.2 **monthlyMailLimit** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>monthlyMailLimit</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>50000</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f4cd9eb1-45dd-42ea-a9c5-c1de420d6c2e"></a>2.1.2.11.3.26 Field **isActive**

##### 2.1.2.11.3.26.1 **isActive** Tree Diagram

![Hackolade image](/nse-staging/image183.png?raw=true)

##### 2.1.2.11.3.26.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.11.4 **providerdetails** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.11.5 **providerdetails** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "providerdetails",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "provider": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "connectionType": {
            "type": "string"
        },
        "isVerified": {
            "type": "boolean"
        },
        "apiDetails": {
            "type": "object",
            "properties": {
                "displayName": {
                    "type": "string"
                },
                "apiKey": {
                    "type": "string"
                },
                "client_id": {
                    "type": "string"
                },
                "client_secret": {
                    "type": "string"
                },
                "domainName": {
                    "type": "string"
                },
                "inboxId": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "serverId": {
                    "type": "string"
                },
                "tenant_id": {
                    "type": "string"
                },
                "token": {
                    "type": "string"
                }
            },
            "additionalProperties": true
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "__enc_apiDetails": {
            "type": "boolean"
        },
        "__enc_apiDetails_d": {
            "type": "string"
        },
        "configuration": {
            "type": "object",
            "properties": {
                "dailyMailLimit": {
                    "type": "integer"
                },
                "mailLimit": {
                    "type": "integer"
                },
                "monthlyMailLimit": {
                    "type": "integer"
                }
            },
            "additionalProperties": true
        },
        "isActive": {
            "type": "boolean"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "provider",
        "connectionType",
        "user",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.11.6 **providerdetails** JSON data

```
{
    "_id": ObjectId("0112f1a84f4febadae86bb1b"),
    "provider": ObjectId("2885ab171e1b6771b3bde98d"),
    "connectionType": "API",
    "isVerified": false,
    "apiDetails": {
        "displayName": "MG",
        "apiKey": "7c447982fa166cc5a7c72f84963f03ff-f2340574-aaec1565",
        "client_id": "f76c3d0d-9ccb-4321-b27e-872c60df0d6b",
        "client_secret": "kwg8Q~04CuU3mILj9Ps9uoKtHO4qr4mgD05vbb~X",
        "domainName": "sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
        "inboxId": "4f4b4179-ba25-4a66-a137-a849700a53e1",
        "name": "Sendgrid",
        "serverId": "44744",
        "tenant_id": "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
        "token": "hkhkhk"
    },
    "user": ObjectId("ed7ae53b20a22cfdbe6325ca"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "__enc_apiDetails": true,
    "__enc_apiDetails_d": "3ad761ea3b220ec6600c365bff964feb:f466fd2e93640556f6f05d854c1120e1e7e7d5c666fa6d51a8afee90dbf5db0064da196a9dde24febcc4edf5b8cd714b7a247a5b642c1fb05a07cbe6e627cd02",
    "configuration": {
        "dailyMailLimit": Int32(50000),
        "mailLimit": Int32(500),
        "monthlyMailLimit": Int32(50000)
    },
    "isActive": true
}
```

##### 2.1.2.11.7 **providerdetails** Target Script

```
use nse-staging;

db.createCollection("providerdetails", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "providerdetails",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "provider": {
                    "bsonType": "objectId"
                },
                "connectionType": {
                    "bsonType": "string"
                },
                "isVerified": {
                    "bsonType": "bool"
                },
                "apiDetails": {
                    "bsonType": "object",
                    "properties": {
                        "displayName": {
                            "bsonType": "string"
                        },
                        "apiKey": {
                            "bsonType": "string"
                        },
                        "client_id": {
                            "bsonType": "string"
                        },
                        "client_secret": {
                            "bsonType": "string"
                        },
                        "domainName": {
                            "bsonType": "string"
                        },
                        "inboxId": {
                            "bsonType": "string"
                        },
                        "name": {
                            "bsonType": "string"
                        },
                        "serverId": {
                            "bsonType": "string"
                        },
                        "tenant_id": {
                            "bsonType": "string"
                        },
                        "token": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": true
                },
                "user": {
                    "bsonType": "objectId"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "__enc_apiDetails": {
                    "bsonType": "bool"
                },
                "__enc_apiDetails_d": {
                    "bsonType": "string"
                },
                "configuration": {
                    "bsonType": "object",
                    "properties": {
                        "dailyMailLimit": {
                            "bsonType": "int"
                        },
                        "mailLimit": {
                            "bsonType": "int"
                        },
                        "monthlyMailLimit": {
                            "bsonType": "int"
                        }
                    },
                    "additionalProperties": true
                },
                "isActive": {
                    "bsonType": "bool"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "provider",
                "connectionType",
                "user",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.providerdetails.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});
```

### <a id="64d43079-0215-426f-9d5e-f0fc257c3c99"></a>2.1.2.12 Collection **providergroups**

##### 2.1.2.12.1 **providergroups** Tree Diagram

![Hackolade image](/nse-staging/image184.png?raw=true)

##### 2.1.2.12.2 **providergroups** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>providergroups</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.12.3 **providergroups** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#779443b5-ef2a-4112-aa35-c64bd1d760bc class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f1b32552-c344-4ad3-acb8-0b33c8a9de82 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a2633d5e-157d-4099-a747-dae4b33dfd4e class="margin-0">domain</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a395d945-5327-44a7-a512-91376b57085b class="margin-5">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7541de29-ebc1-4bbc-b582-867dcd82d4c5 class="margin-0">providers</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f058ed5a-bd1e-4685-afa3-e94685d99ce2 class="margin-5">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a608c070-6da5-487e-b898-14fd12b2b79c class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#29e16b8d-3ba0-4361-b204-53d561a2a693 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a951e96f-d455-415a-a50d-6e2d335950c6 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4f4a82f2-6d29-4e9b-81b1-2810a5808daa"></a>2.1.2.12.3.1 Field **\_id**

##### 2.1.2.12.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image185.png?raw=true)

##### 2.1.2.12.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="779443b5-ef2a-4112-aa35-c64bd1d760bc"></a>2.1.2.12.3.2 Field **name**

##### 2.1.2.12.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-staging/image186.png?raw=true)

##### 2.1.2.12.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>MG</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f1b32552-c344-4ad3-acb8-0b33c8a9de82"></a>2.1.2.12.3.3 Field **user**

##### 2.1.2.12.3.3.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image187.png?raw=true)

##### 2.1.2.12.3.3.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to providergroups.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a2633d5e-157d-4099-a747-dae4b33dfd4e"></a>2.1.2.12.3.4 Field **domain**

##### 2.1.2.12.3.4.1 **domain** Tree Diagram

![Hackolade image](/nse-staging/image188.png?raw=true)

##### 2.1.2.12.3.4.2 **domain** Hierarchy

Parent field: **providergroups**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#a395d945-5327-44a7-a512-91376b57085b class="margin-NaN">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.12.3.4.3 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a395d945-5327-44a7-a512-91376b57085b"></a>2.1.2.12.3.5 Field **\[0\]**

##### 2.1.2.12.3.5.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image189.png?raw=true)

##### 2.1.2.12.3.5.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#9ac69500-3e48-4537-a4f8-8f3d8b06ca6a>domains</a></td></tr><tr><td>Foreign field</td><td><a href=#8be85225-02dd-40d2-9b60-1814b90ef414>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk domains._id to providergroups.domain.0</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7541de29-ebc1-4bbc-b582-867dcd82d4c5"></a>2.1.2.12.3.6 Field **providers**

##### 2.1.2.12.3.6.1 **providers** Tree Diagram

![Hackolade image](/nse-staging/image190.png?raw=true)

##### 2.1.2.12.3.6.2 **providers** Hierarchy

Parent field: **providergroups**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f058ed5a-bd1e-4685-afa3-e94685d99ce2 class="margin-NaN">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.12.3.6.3 **providers** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providers</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f058ed5a-bd1e-4685-afa3-e94685d99ce2"></a>2.1.2.12.3.7 Field **\[0\]**

##### 2.1.2.12.3.7.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-staging/image191.png?raw=true)

##### 2.1.2.12.3.7.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Foreign field</td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providerdetails._id to providergroups.providers.0</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a608c070-6da5-487e-b898-14fd12b2b79c"></a>2.1.2.12.3.8 Field **createdAt**

##### 2.1.2.12.3.8.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image192.png?raw=true)

##### 2.1.2.12.3.8.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="29e16b8d-3ba0-4361-b204-53d561a2a693"></a>2.1.2.12.3.9 Field **updatedAt**

##### 2.1.2.12.3.9.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image193.png?raw=true)

##### 2.1.2.12.3.9.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a951e96f-d455-415a-a50d-6e2d335950c6"></a>2.1.2.12.3.10 Field **\_\_v**

##### 2.1.2.12.3.10.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image194.png?raw=true)

##### 2.1.2.12.3.10.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.12.4 **providergroups** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">name_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">name_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">name('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.12.5 **providergroups** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "providergroups",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "domain": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "string",
                "pattern": "^[a-fA-F0-9]{24}$"
            }
        },
        "providers": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "string",
                "pattern": "^[a-fA-F0-9]{24}$"
            }
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "name",
        "user",
        "domain",
        "providers",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.12.6 **providergroups** JSON data

```
{
    "_id": ObjectId("dacd4ff19b49dddf21138eee"),
    "name": "MG",
    "user": ObjectId("3acaf17fced1d516f8bb9fc5"),
    "domain": [
        ObjectId("4ddfb3d9c0c2de4f0bb0dfde")
    ],
    "providers": [
        ObjectId("dd7b545994def5777620d5d5")
    ],
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.12.7 **providergroups** Target Script

```
use nse-staging;

db.createCollection("providergroups", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "providergroups",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "user": {
                    "bsonType": "objectId"
                },
                "domain": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "providers": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "name",
                "user",
                "domain",
                "providers",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.providergroups.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});

db.providergroups.createIndex({
    "name": "text"
},
{
    "name": "name_text",
    "background": true,
    "weights": {
        "name": 1
    },
    "default_language": "english",
    "language_override": "language",
    "textIndexVersion": 3
});
```

### <a id="61faf0b8-1c0c-4896-9ac2-c146d3227ce3"></a>2.1.2.13 Collection **smsotps**

##### 2.1.2.13.1 **smsotps** Tree Diagram

![Hackolade image](/nse-staging/image195.png?raw=true)

##### 2.1.2.13.2 **smsotps** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>smsotps</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.13.3 **smsotps** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody></tbody></table>

##### 2.1.2.13.4 **smsotps** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "smsotps",
    "additionalProperties": true
}
```

##### 2.1.2.13.5 **smsotps** JSON data

```
{}
```

##### 2.1.2.13.6 **smsotps** Target Script

```
use nse-staging;

db.createCollection("smsotps", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "smsotps",
            "additionalProperties": true,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                }
            }
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="ba95bb47-a973-4c8f-ad40-984266f98e88"></a>2.1.2.14 Collection **users**

##### 2.1.2.14.1 **users** Tree Diagram

![Hackolade image](/nse-staging/image196.png?raw=true)

##### 2.1.2.14.2 **users** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>users</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.14.3 **users** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3e77a7dd-cf16-4933-b12b-49192ffc4286 class="margin-0">isPhoneVerified</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3952ed13-c421-42e3-a33b-d06cb90492fd class="margin-0">profileImage</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#26ac666d-db54-4b33-b1e5-b0c905224ec4 class="margin-0">countryCode</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c84c0744-a32b-4918-93b5-ec62dfe8e0b4 class="margin-0">phone</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6c6ac895-8963-410b-975b-1878692a392a class="margin-0">email</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#30a184b6-4cb2-4c5c-bfdc-ddd2a0b8c678 class="margin-0">lastName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#00760882-62f4-47fa-8455-a69fdc3ba360 class="margin-0">firstName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#234a5d96-ff9f-4a90-951d-985b946f9a0c class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#06edb292-901b-4b64-a55e-d84febea4437 class="margin-0">address</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#45ffa477-f1f1-4c93-9e40-dca5639f3470 class="margin-0">city</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#29ede713-cfb1-49d9-a7e1-8da15a0fd006 class="margin-0">companyName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2fbf8268-7648-4b1a-9367-cabb82ed985a class="margin-0">country</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#54e07e83-a5b5-4f3c-832d-9b082912a72d class="margin-0">state</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b4dc821c-9c8b-486e-885e-5dce2640720f class="margin-0">vatOrGstNumber</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#400fd890-de0f-4eee-8a00-9281a04229c8 class="margin-0">zipCode</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#92ac6e8f-b322-41ef-890b-135a030e9ddd class="margin-0">dialCode</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1636d1cf-9914-463b-ae5e-56517a9d73e4"></a>2.1.2.14.3.1 Field **\_id**

##### 2.1.2.14.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image197.png?raw=true)

##### 2.1.2.14.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3e77a7dd-cf16-4933-b12b-49192ffc4286"></a>2.1.2.14.3.2 Field **isPhoneVerified**

##### 2.1.2.14.3.2.1 **isPhoneVerified** Tree Diagram

![Hackolade image](/nse-staging/image198.png?raw=true)

##### 2.1.2.14.3.2.2 **isPhoneVerified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isPhoneVerified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3952ed13-c421-42e3-a33b-d06cb90492fd"></a>2.1.2.14.3.3 Field **profileImage**

##### 2.1.2.14.3.3.1 **profileImage** Tree Diagram

![Hackolade image](/nse-staging/image199.png?raw=true)

##### 2.1.2.14.3.3.2 **profileImage** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>profileImage</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>https://ui-avatars.com/api/?name=mallikarjun+1&amp;size=128</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="26ac666d-db54-4b33-b1e5-b0c905224ec4"></a>2.1.2.14.3.4 Field **countryCode**

##### 2.1.2.14.3.4.1 **countryCode** Tree Diagram

![Hackolade image](/nse-staging/image200.png?raw=true)

##### 2.1.2.14.3.4.2 **countryCode** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>countryCode</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c84c0744-a32b-4918-93b5-ec62dfe8e0b4"></a>2.1.2.14.3.5 Field **phone**

##### 2.1.2.14.3.5.1 **phone** Tree Diagram

![Hackolade image](/nse-staging/image201.png?raw=true)

##### 2.1.2.14.3.5.2 **phone** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>phone</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6c6ac895-8963-410b-975b-1878692a392a"></a>2.1.2.14.3.6 Field **email**

##### 2.1.2.14.3.6.1 **email** Tree Diagram

![Hackolade image](/nse-staging/image202.png?raw=true)

##### 2.1.2.14.3.6.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>mallikarjun+1@nexweave.co</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="30a184b6-4cb2-4c5c-bfdc-ddd2a0b8c678"></a>2.1.2.14.3.7 Field **lastName**

##### 2.1.2.14.3.7.1 **lastName** Tree Diagram

![Hackolade image](/nse-staging/image203.png?raw=true)

##### 2.1.2.14.3.7.2 **lastName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>lastName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="00760882-62f4-47fa-8455-a69fdc3ba360"></a>2.1.2.14.3.8 Field **firstName**

##### 2.1.2.14.3.8.1 **firstName** Tree Diagram

![Hackolade image](/nse-staging/image204.png?raw=true)

##### 2.1.2.14.3.8.2 **firstName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>firstName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="234a5d96-ff9f-4a90-951d-985b946f9a0c"></a>2.1.2.14.3.9 Field **\_\_v**

##### 2.1.2.14.3.9.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image205.png?raw=true)

##### 2.1.2.14.3.9.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="06edb292-901b-4b64-a55e-d84febea4437"></a>2.1.2.14.3.10 Field **address**

##### 2.1.2.14.3.10.1 **address** Tree Diagram

![Hackolade image](/nse-staging/image206.png?raw=true)

##### 2.1.2.14.3.10.2 **address** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>address</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="45ffa477-f1f1-4c93-9e40-dca5639f3470"></a>2.1.2.14.3.11 Field **city**

##### 2.1.2.14.3.11.1 **city** Tree Diagram

![Hackolade image](/nse-staging/image207.png?raw=true)

##### 2.1.2.14.3.11.2 **city** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>city</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="29ede713-cfb1-49d9-a7e1-8da15a0fd006"></a>2.1.2.14.3.12 Field **companyName**

##### 2.1.2.14.3.12.1 **companyName** Tree Diagram

![Hackolade image](/nse-staging/image208.png?raw=true)

##### 2.1.2.14.3.12.2 **companyName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>companyName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2fbf8268-7648-4b1a-9367-cabb82ed985a"></a>2.1.2.14.3.13 Field **country**

##### 2.1.2.14.3.13.1 **country** Tree Diagram

![Hackolade image](/nse-staging/image209.png?raw=true)

##### 2.1.2.14.3.13.2 **country** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>country</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>IN</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="54e07e83-a5b5-4f3c-832d-9b082912a72d"></a>2.1.2.14.3.14 Field **state**

##### 2.1.2.14.3.14.1 **state** Tree Diagram

![Hackolade image](/nse-staging/image210.png?raw=true)

##### 2.1.2.14.3.14.2 **state** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>state</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b4dc821c-9c8b-486e-885e-5dce2640720f"></a>2.1.2.14.3.15 Field **vatOrGstNumber**

##### 2.1.2.14.3.15.1 **vatOrGstNumber** Tree Diagram

![Hackolade image](/nse-staging/image211.png?raw=true)

##### 2.1.2.14.3.15.2 **vatOrGstNumber** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>vatOrGstNumber</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="400fd890-de0f-4eee-8a00-9281a04229c8"></a>2.1.2.14.3.16 Field **zipCode**

##### 2.1.2.14.3.16.1 **zipCode** Tree Diagram

![Hackolade image](/nse-staging/image212.png?raw=true)

##### 2.1.2.14.3.16.2 **zipCode** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>zipCode</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="92ac6e8f-b322-41ef-890b-135a030e9ddd"></a>2.1.2.14.3.17 Field **dialCode**

##### 2.1.2.14.3.17.1 **dialCode** Tree Diagram

![Hackolade image](/nse-staging/image213.png?raw=true)

##### 2.1.2.14.3.17.2 **dialCode** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>dialCode</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.14.4 **users** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.14.5 **users** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "users",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "isPhoneVerified": {
            "type": "boolean"
        },
        "profileImage": {
            "type": "string"
        },
        "countryCode": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "firstName": {
            "type": "string"
        },
        "__v": {
            "type": "integer"
        },
        "address": {
            "type": "string"
        },
        "city": {
            "type": "string"
        },
        "companyName": {
            "type": "string"
        },
        "country": {
            "type": "string"
        },
        "state": {
            "type": "string"
        },
        "vatOrGstNumber": {
            "type": "string"
        },
        "zipCode": {
            "type": "string"
        },
        "dialCode": {
            "type": "string"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "profileImage",
        "phone",
        "email",
        "lastName",
        "firstName",
        "__v",
        "dialCode"
    ]
}
```

##### 2.1.2.14.6 **users** JSON data

```
{
    "_id": ObjectId("1dd70e17f521ea04a97fe74b"),
    "isPhoneVerified": false,
    "profileImage": "https://ui-avatars.com/api/?name=mallikarjun+1&size=128",
    "countryCode": "Lorem",
    "phone": "Lorem",
    "email": "mallikarjun+1@nexweave.co",
    "lastName": "Lorem",
    "firstName": "Lorem",
    "__v": Int32(0),
    "address": "Lorem",
    "city": "Lorem",
    "companyName": "Lorem",
    "country": "IN",
    "state": "Lorem",
    "vatOrGstNumber": "Lorem",
    "zipCode": "Lorem",
    "dialCode": "Lorem"
}
```

##### 2.1.2.14.7 **users** Target Script

```
use nse-staging;

db.createCollection("users", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "users",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "isPhoneVerified": {
                    "bsonType": "bool"
                },
                "profileImage": {
                    "bsonType": "string"
                },
                "countryCode": {
                    "bsonType": "string"
                },
                "phone": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "lastName": {
                    "bsonType": "string"
                },
                "firstName": {
                    "bsonType": "string"
                },
                "__v": {
                    "bsonType": "int"
                },
                "address": {
                    "bsonType": "string"
                },
                "city": {
                    "bsonType": "string"
                },
                "companyName": {
                    "bsonType": "string"
                },
                "country": {
                    "bsonType": "string"
                },
                "state": {
                    "bsonType": "string"
                },
                "vatOrGstNumber": {
                    "bsonType": "string"
                },
                "zipCode": {
                    "bsonType": "string"
                },
                "dialCode": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "profileImage",
                "phone",
                "email",
                "lastName",
                "firstName",
                "__v",
                "dialCode"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.users.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});
```

### <a id="de3e3484-96c3-44d0-9942-94947d2bd3c0"></a>2.1.2.15 Collection **webhooks**

##### 2.1.2.15.1 **webhooks** Tree Diagram

![Hackolade image](/nse-staging/image214.png?raw=true)

##### 2.1.2.15.2 **webhooks** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>webhooks</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c11f356c-4b16-4d91-8d2b-cd055aead9e0><span class="name-container">nse-staging</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.15.3 **webhooks** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#d7e07e3f-f8ed-4ef5-a9b4-832363f64be9 class="margin-0">_id</a></td><td class="no-break-word">string</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#92e69a32-b93b-48ab-b72c-961462cc0528 class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8dfac1c8-8a24-43b5-a2f2-4b9dd3c4257d class="margin-0">providerGroup</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e911a2cb-46c3-4bdf-b416-2bf64bae705f class="margin-0">provider</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c7c0ff6a-f58f-4ff5-846f-89739c96df58 class="margin-0">createdBy</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#91aa435b-a5e5-400f-8250-f9aad009e131 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c0a82332-e2ba-407a-9f65-1a521d69cc4d class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8fc56e36-72c6-47f0-adea-8b9884998134 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6a891a0c-3bdd-4a68-b6f4-377aec7dc9ca class="margin-0">accountId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f65f2fac-9878-4eb7-b2e6-fc219772d03f class="margin-0">configurations</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e4ea82e0-e773-4c38-bdc3-12064222d47a class="margin-5">isBounced</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d548e475-5f36-4681-a9eb-d5e12b9cf010 class="margin-5">isDeferred</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8062f08a-799a-473f-b01a-4e8beca951bd class="margin-5">isDelivered</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#666d52a2-f4b8-4450-81f6-5f7d496a6443 class="margin-5">isDropped</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#dc00302f-e32d-4509-8bf8-e2b5f7266edc class="margin-5">isFailed</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#29c42d31-2d5b-4e10-acf5-da491b00e065 class="margin-5">isSpammed</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a7e99a75-cde3-4a3e-8e70-ec9196f5ade7 class="margin-0">description</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9538d1e5-da84-4512-8f5d-a9d1743b809f class="margin-0">domain</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c8dd441d-1236-4aba-be16-9f2ebd1467af class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d9622975-57b5-429a-9d81-2167abe2a3f2 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d7e07e3f-f8ed-4ef5-a9b4-832363f64be9"></a>2.1.2.15.3.1 Field **\_id**

##### 2.1.2.15.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-staging/image215.png?raw=true)

##### 2.1.2.15.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>ztjJAT_RKhsC</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="92e69a32-b93b-48ab-b72c-961462cc0528"></a>2.1.2.15.3.2 Field **name**

##### 2.1.2.15.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-staging/image216.png?raw=true)

##### 2.1.2.15.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>new test2</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8dfac1c8-8a24-43b5-a2f2-4b9dd3c4257d"></a>2.1.2.15.3.3 Field **providerGroup**

##### 2.1.2.15.3.3.1 **providerGroup** Tree Diagram

![Hackolade image](/nse-staging/image217.png?raw=true)

##### 2.1.2.15.3.3.2 **providerGroup** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providerGroup</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Foreign field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providergroups._id to webhooks.providerGroup</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e911a2cb-46c3-4bdf-b416-2bf64bae705f"></a>2.1.2.15.3.4 Field **provider**

##### 2.1.2.15.3.4.1 **provider** Tree Diagram

![Hackolade image](/nse-staging/image218.png?raw=true)

##### 2.1.2.15.3.4.2 **provider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>provider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td></tr><tr><td>Foreign field</td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk emailproviders._id to webhooks.provider</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c7c0ff6a-f58f-4ff5-846f-89739c96df58"></a>2.1.2.15.3.5 Field **createdBy**

##### 2.1.2.15.3.5.1 **createdBy** Tree Diagram

![Hackolade image](/nse-staging/image219.png?raw=true)

##### 2.1.2.15.3.5.2 **createdBy** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdBy</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to webhooks.createdBy</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="91aa435b-a5e5-400f-8250-f9aad009e131"></a>2.1.2.15.3.6 Field **createdAt**

##### 2.1.2.15.3.6.1 **createdAt** Tree Diagram

![Hackolade image](/nse-staging/image220.png?raw=true)

##### 2.1.2.15.3.6.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c0a82332-e2ba-407a-9f65-1a521d69cc4d"></a>2.1.2.15.3.7 Field **updatedAt**

##### 2.1.2.15.3.7.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-staging/image221.png?raw=true)

##### 2.1.2.15.3.7.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8fc56e36-72c6-47f0-adea-8b9884998134"></a>2.1.2.15.3.8 Field **\_\_v**

##### 2.1.2.15.3.8.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-staging/image222.png?raw=true)

##### 2.1.2.15.3.8.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6a891a0c-3bdd-4a68-b6f4-377aec7dc9ca"></a>2.1.2.15.3.9 Field **accountId**

##### 2.1.2.15.3.9.1 **accountId** Tree Diagram

![Hackolade image](/nse-staging/image223.png?raw=true)

##### 2.1.2.15.3.9.2 **accountId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>accountId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f65f2fac-9878-4eb7-b2e6-fc219772d03f"></a>2.1.2.15.3.10 Field **configurations**

##### 2.1.2.15.3.10.1 **configurations** Tree Diagram

![Hackolade image](/nse-staging/image224.png?raw=true)

##### 2.1.2.15.3.10.2 **configurations** Hierarchy

Parent field: **webhooks**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#e4ea82e0-e773-4c38-bdc3-12064222d47a class="margin-NaN">isBounced</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d548e475-5f36-4681-a9eb-d5e12b9cf010 class="margin-NaN">isDeferred</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8062f08a-799a-473f-b01a-4e8beca951bd class="margin-NaN">isDelivered</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#666d52a2-f4b8-4450-81f6-5f7d496a6443 class="margin-NaN">isDropped</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#dc00302f-e32d-4509-8bf8-e2b5f7266edc class="margin-NaN">isFailed</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#29c42d31-2d5b-4e10-acf5-da491b00e065 class="margin-NaN">isSpammed</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.15.3.10.3 **configurations** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>configurations</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e4ea82e0-e773-4c38-bdc3-12064222d47a"></a>2.1.2.15.3.11 Field **isBounced**

##### 2.1.2.15.3.11.1 **isBounced** Tree Diagram

![Hackolade image](/nse-staging/image225.png?raw=true)

##### 2.1.2.15.3.11.2 **isBounced** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isBounced</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d548e475-5f36-4681-a9eb-d5e12b9cf010"></a>2.1.2.15.3.12 Field **isDeferred**

##### 2.1.2.15.3.12.1 **isDeferred** Tree Diagram

![Hackolade image](/nse-staging/image226.png?raw=true)

##### 2.1.2.15.3.12.2 **isDeferred** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isDeferred</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8062f08a-799a-473f-b01a-4e8beca951bd"></a>2.1.2.15.3.13 Field **isDelivered**

##### 2.1.2.15.3.13.1 **isDelivered** Tree Diagram

![Hackolade image](/nse-staging/image227.png?raw=true)

##### 2.1.2.15.3.13.2 **isDelivered** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isDelivered</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="666d52a2-f4b8-4450-81f6-5f7d496a6443"></a>2.1.2.15.3.14 Field **isDropped**

##### 2.1.2.15.3.14.1 **isDropped** Tree Diagram

![Hackolade image](/nse-staging/image228.png?raw=true)

##### 2.1.2.15.3.14.2 **isDropped** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isDropped</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="dc00302f-e32d-4509-8bf8-e2b5f7266edc"></a>2.1.2.15.3.15 Field **isFailed**

##### 2.1.2.15.3.15.1 **isFailed** Tree Diagram

![Hackolade image](/nse-staging/image229.png?raw=true)

##### 2.1.2.15.3.15.2 **isFailed** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isFailed</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="29c42d31-2d5b-4e10-acf5-da491b00e065"></a>2.1.2.15.3.16 Field **isSpammed**

##### 2.1.2.15.3.16.1 **isSpammed** Tree Diagram

![Hackolade image](/nse-staging/image230.png?raw=true)

##### 2.1.2.15.3.16.2 **isSpammed** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isSpammed</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a7e99a75-cde3-4a3e-8e70-ec9196f5ade7"></a>2.1.2.15.3.17 Field **description**

##### 2.1.2.15.3.17.1 **description** Tree Diagram

![Hackolade image](/nse-staging/image231.png?raw=true)

##### 2.1.2.15.3.17.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9538d1e5-da84-4512-8f5d-a9d1743b809f"></a>2.1.2.15.3.18 Field **domain**

##### 2.1.2.15.3.18.1 **domain** Tree Diagram

![Hackolade image](/nse-staging/image232.png?raw=true)

##### 2.1.2.15.3.18.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>beckcomputers.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c8dd441d-1236-4aba-be16-9f2ebd1467af"></a>2.1.2.15.3.19 Field **isActive**

##### 2.1.2.15.3.19.1 **isActive** Tree Diagram

![Hackolade image](/nse-staging/image233.png?raw=true)

##### 2.1.2.15.3.19.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d9622975-57b5-429a-9d81-2167abe2a3f2"></a>2.1.2.15.3.20 Field **user**

##### 2.1.2.15.3.20.1 **user** Tree Diagram

![Hackolade image](/nse-staging/image234.png?raw=true)

##### 2.1.2.15.3.20.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Foreign field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to webhooks.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.15.4 **webhooks** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.15.5 **webhooks** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "webhooks",
    "properties": {
        "_id": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "providerGroup": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "provider": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "createdBy": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time"
        },
        "__v": {
            "type": "integer"
        },
        "accountId": {
            "type": "string"
        },
        "configurations": {
            "type": "object",
            "properties": {
                "isBounced": {
                    "type": "boolean"
                },
                "isDeferred": {
                    "type": "boolean"
                },
                "isDelivered": {
                    "type": "boolean"
                },
                "isDropped": {
                    "type": "boolean"
                },
                "isFailed": {
                    "type": "boolean"
                },
                "isSpammed": {
                    "type": "boolean"
                }
            },
            "additionalProperties": true,
            "required": [
                "isBounced",
                "isDeferred",
                "isDelivered",
                "isDropped",
                "isFailed"
            ]
        },
        "description": {
            "type": "string"
        },
        "domain": {
            "type": "string"
        },
        "isActive": {
            "type": "boolean"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "name",
        "provider",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.15.6 **webhooks** JSON data

```
{
    "_id": "ztjJAT_RKhsC",
    "name": "new test2",
    "providerGroup": ObjectId("2e5298e330c02d1b1efbe89d"),
    "provider": ObjectId("df1e0ecccadc364912804dd6"),
    "createdBy": ObjectId("b2fad8e6eda5c08d2cf622de"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "accountId": "Lorem",
    "configurations": {
        "isBounced": true,
        "isDeferred": true,
        "isDelivered": true,
        "isDropped": true,
        "isFailed": true,
        "isSpammed": true
    },
    "description": "Lorem",
    "domain": "beckcomputers.com",
    "isActive": false,
    "user": ObjectId("08af0d4124ccfedb2fbd1ec6")
}
```

##### 2.1.2.15.7 **webhooks** Target Script

```
use nse-staging;

db.createCollection("webhooks", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "webhooks",
            "properties": {
                "_id": {
                    "bsonType": "string"
                },
                "name": {
                    "bsonType": "string"
                },
                "providerGroup": {
                    "bsonType": "objectId"
                },
                "provider": {
                    "bsonType": "objectId"
                },
                "createdBy": {
                    "bsonType": "objectId"
                },
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "accountId": {
                    "bsonType": "string"
                },
                "configurations": {
                    "bsonType": "object",
                    "properties": {
                        "isBounced": {
                            "bsonType": "bool"
                        },
                        "isDeferred": {
                            "bsonType": "bool"
                        },
                        "isDelivered": {
                            "bsonType": "bool"
                        },
                        "isDropped": {
                            "bsonType": "bool"
                        },
                        "isFailed": {
                            "bsonType": "bool"
                        },
                        "isSpammed": {
                            "bsonType": "bool"
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "isBounced",
                        "isDeferred",
                        "isDelivered",
                        "isDropped",
                        "isFailed"
                    ]
                },
                "description": {
                    "bsonType": "string"
                },
                "domain": {
                    "bsonType": "string"
                },
                "isActive": {
                    "bsonType": "bool"
                },
                "user": {
                    "bsonType": "objectId"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "name",
                "provider",
                "createdAt",
                "updatedAt",
                "__v"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.webhooks.createIndex({
    "_id": 1
},
{
    "name": "_id_"
});
```

### <a id="relationships"></a>

##### 3\. Relationships

### <a id="3bae0de9-e8f6-42d2-83e2-b23e88430382"></a>3.1 Relationship **fk domains.\_id to providergroups.domain.0**

##### 3.1.1 **fk domains.\_id to providergroups.domain.0** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td><td><a href=#c08c29f6-a449-497c-83f2-fb333e500f7e>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image235.png?raw=true)![Hackolade image](/nse-staging/image236.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#83ef5f2e-dc31-41a4-9e4d-4cd1f61e5da3>domain.[-1]</a></td></tr></tbody></table>

##### 3.1.2 **fk domains.\_id to providergroups.domain.0** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk domains._id to providergroups.domain.0</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td></tr><tr><td>Parent field</td><td><a href=#c08c29f6-a449-497c-83f2-fb333e500f7e>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#83ef5f2e-dc31-41a4-9e4d-4cd1f61e5da3></a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="cf425178-996d-4571-a904-563cce7b3d47"></a>3.2 Relationship **fk domains.\_id to providergroups.domain.0**

##### 3.2.1 **fk domains.\_id to providergroups.domain.0** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#9ac69500-3e48-4537-a4f8-8f3d8b06ca6a>domains</a></td><td><a href=#8be85225-02dd-40d2-9b60-1814b90ef414>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image237.png?raw=true)![Hackolade image](/nse-staging/image238.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#a395d945-5327-44a7-a512-91376b57085b>domain.[-1]</a></td></tr></tbody></table>

##### 3.2.2 **fk domains.\_id to providergroups.domain.0** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk domains._id to providergroups.domain.0</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#9ac69500-3e48-4537-a4f8-8f3d8b06ca6a>domains</a></td></tr><tr><td>Parent field</td><td><a href=#8be85225-02dd-40d2-9b60-1814b90ef414>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#a395d945-5327-44a7-a512-91376b57085b></a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="ec55de17-ee62-43fc-a34e-8e69173d810c"></a>3.3 Relationship **fk emailproviders.\_id to emailreports.emailProvider**

##### 3.3.1 **fk emailproviders.\_id to emailreports.emailProvider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image239.png?raw=true)![Hackolade image](/nse-staging/image240.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#d7cb9d97-b0e0-40cb-a00a-4090445d86c6>emailProvider</a></td></tr></tbody></table>

##### 3.3.2 **fk emailproviders.\_id to emailreports.emailProvider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to emailreports.emailProvider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#d7cb9d97-b0e0-40cb-a00a-4090445d86c6>emailProvider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="2cf69109-c125-46a4-8fbb-fc46790445ea"></a>3.4 Relationship **fk emailproviders.\_id to events.emailProvider**

##### 3.4.1 **fk emailproviders.\_id to events.emailProvider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image241.png?raw=true)![Hackolade image](/nse-staging/image242.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td><td><a href=#cb6601f6-e415-4181-8efe-3be960cb1d72>emailProvider</a></td></tr></tbody></table>

##### 3.4.2 **fk emailproviders.\_id to events.emailProvider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to events.emailProvider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td></tr><tr><td>Child field</td><td><a href=#cb6601f6-e415-4181-8efe-3be960cb1d72>emailProvider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="061d0dd3-3b5e-4dc7-9ff1-c484109eea56"></a>3.5 Relationship **fk emailproviders.\_id to events.emailProvider**

##### 3.5.1 **fk emailproviders.\_id to events.emailProvider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image243.png?raw=true)![Hackolade image](/nse-staging/image244.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#4fdbc167-5d68-4330-b18b-fdd0ee36f253>events</a></td><td><a href=#5e588543-d5ce-41a4-914b-be9f3c8ee297>emailProvider</a></td></tr></tbody></table>

##### 3.5.2 **fk emailproviders.\_id to events.emailProvider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to events.emailProvider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#4fdbc167-5d68-4330-b18b-fdd0ee36f253>events</a></td></tr><tr><td>Child field</td><td><a href=#5e588543-d5ce-41a4-914b-be9f3c8ee297>emailProvider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="9be59619-a8e7-4f9a-a5e9-8209817f1ca1"></a>3.6 Relationship **fk emailproviders.\_id to providerdetails.provider**

##### 3.6.1 **fk emailproviders.\_id to providerdetails.provider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image245.png?raw=true)![Hackolade image](/nse-staging/image246.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#153cdf7e-0396-4966-909b-bb43d039fa4b>provider</a></td></tr></tbody></table>

##### 3.6.2 **fk emailproviders.\_id to providerdetails.provider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to providerdetails.provider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Child field</td><td><a href=#153cdf7e-0396-4966-909b-bb43d039fa4b>provider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="4645ecd0-837c-4d1c-9624-bbbfeb0c1169"></a>3.7 Relationship **fk emailproviders.\_id to providerdetails.provider**

##### 3.7.1 **fk emailproviders.\_id to providerdetails.provider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image247.png?raw=true)![Hackolade image](/nse-staging/image248.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td><td><a href=#8552a0c3-77f9-437e-b561-fb74a6d17a51>provider</a></td></tr></tbody></table>

##### 3.7.2 **fk emailproviders.\_id to providerdetails.provider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to providerdetails.provider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Child field</td><td><a href=#8552a0c3-77f9-437e-b561-fb74a6d17a51>provider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="344c5400-de15-41c4-a95f-6d422dbe3355"></a>3.8 Relationship **fk emailproviders.\_id to webhooks.provider**

##### 3.8.1 **fk emailproviders.\_id to webhooks.provider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image249.png?raw=true)![Hackolade image](/nse-staging/image250.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td><td><a href=#334a7698-cc37-485a-aca1-66b73f27cf75>provider</a></td></tr></tbody></table>

##### 3.8.2 **fk emailproviders.\_id to webhooks.provider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to webhooks.provider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#334a7698-cc37-485a-aca1-66b73f27cf75>provider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="5d1df391-37d1-4bd6-8980-3a0d7a6feb4b"></a>3.9 Relationship **fk emailproviders.\_id to webhooks.provider**

##### 3.9.1 **fk emailproviders.\_id to webhooks.provider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image251.png?raw=true)![Hackolade image](/nse-staging/image252.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td><td><a href=#e911a2cb-46c3-4bdf-b416-2bf64bae705f>provider</a></td></tr></tbody></table>

##### 3.9.2 **fk emailproviders.\_id to webhooks.provider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to webhooks.provider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#0487bfea-bc57-4786-a67c-e5eea5bd3845>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#e911a2cb-46c3-4bdf-b416-2bf64bae705f>provider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="fa631839-c564-4f98-bc3d-ec1e07aedb06"></a>3.10 Relationship **fk providerdetails.\_id to emailreports.providerDetails**

##### 3.10.1 **fk providerdetails.\_id to emailreports.providerDetails** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image253.png?raw=true)![Hackolade image](/nse-staging/image254.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#47888936-6c6f-4e79-bba3-09fe03d213b6>providerDetails</a></td></tr></tbody></table>

##### 3.10.2 **fk providerdetails.\_id to emailreports.providerDetails** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to emailreports.providerDetails</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#47888936-6c6f-4e79-bba3-09fe03d213b6>providerDetails</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="a6d443c9-a199-4736-a95c-0df3872f65fe"></a>3.11 Relationship **fk providerdetails.\_id to emailreports.providerDetails**

##### 3.11.1 **fk providerdetails.\_id to emailreports.providerDetails** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image255.png?raw=true)![Hackolade image](/nse-staging/image256.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#277372dd-7714-4c0a-935a-a80177b939f3>emailreports</a></td><td><a href=#c7fb65b5-8cfb-42ab-80a7-084e60d79e75>providerDetails</a></td></tr></tbody></table>

##### 3.11.2 **fk providerdetails.\_id to emailreports.providerDetails** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to emailreports.providerDetails</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#277372dd-7714-4c0a-935a-a80177b939f3>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#c7fb65b5-8cfb-42ab-80a7-084e60d79e75>providerDetails</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="e80d8065-e9a2-477d-af88-ea1231122f58"></a>3.12 Relationship **fk providerdetails.\_id to emailreports.providerdetails**

##### 3.12.1 **fk providerdetails.\_id to emailreports.providerdetails** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image257.png?raw=true)![Hackolade image](/nse-staging/image258.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#2d310dbd-e009-43bd-8b3d-daabedbe9f91>providerdetails</a></td></tr></tbody></table>

##### 3.12.2 **fk providerdetails.\_id to emailreports.providerdetails** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to emailreports.providerdetails</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#2d310dbd-e009-43bd-8b3d-daabedbe9f91>providerdetails</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="b3b5f1ba-4405-4558-bbc3-1fb13100ab22"></a>3.13 Relationship **fk providerdetails.\_id to emailreports\_backup.providerDetails**

##### 3.13.1 **fk providerdetails.\_id to emailreports\_backup.providerDetails** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image259.png?raw=true)![Hackolade image](/nse-staging/image260.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#a1f30ee9-97c3-4199-b150-5d5bfa49848c>emailreports_backup</a></td><td><a href=#33fa9264-3f6e-4675-98c0-ecf9a3a20f13>providerDetails</a></td></tr></tbody></table>

##### 3.13.2 **fk providerdetails.\_id to emailreports\_backup.providerDetails** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to emailreports_backup.providerDetails</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#a1f30ee9-97c3-4199-b150-5d5bfa49848c>emailreports_backup</a></td></tr><tr><td>Child field</td><td><a href=#33fa9264-3f6e-4675-98c0-ecf9a3a20f13>providerDetails</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="e0d87a8b-3822-406f-bed6-5494d4ad5efc"></a>3.14 Relationship **fk providerdetails.\_id to providergroups.providers.0**

##### 3.14.1 **fk providerdetails.\_id to providergroups.providers.0** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image261.png?raw=true)![Hackolade image](/nse-staging/image262.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#4be71bbb-6827-44f8-8517-ae09545e421b>providers.[-1]</a></td></tr></tbody></table>

##### 3.14.2 **fk providerdetails.\_id to providergroups.providers.0** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to providergroups.providers.0</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#4be71bbb-6827-44f8-8517-ae09545e421b></a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="73d6ad92-3e13-40c1-96c6-ccea2f353d50"></a>3.15 Relationship **fk providerdetails.\_id to providergroups.providers.0**

##### 3.15.1 **fk providerdetails.\_id to providergroups.providers.0** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image263.png?raw=true)![Hackolade image](/nse-staging/image264.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#f058ed5a-bd1e-4685-afa3-e94685d99ce2>providers.[-1]</a></td></tr></tbody></table>

##### 3.15.2 **fk providerdetails.\_id to providergroups.providers.0** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to providergroups.providers.0</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#468c25bb-cbb5-45cc-8e34-325f0fb0240b>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#f058ed5a-bd1e-4685-afa3-e94685d99ce2></a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="f1d57db7-ef05-4b57-bfad-1999e62bf734"></a>3.16 Relationship **fk providergroups.\_id to apikeys.providerGroup**

##### 3.16.1 **fk providergroups.\_id to apikeys.providerGroup** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image265.png?raw=true)![Hackolade image](/nse-staging/image266.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#b9665bc1-91b3-4e09-b755-22cb96f67723>apikeys</a></td><td><a href=#d46f235d-00d6-42e6-bcdd-1b9221827b20>providerGroup</a></td></tr></tbody></table>

##### 3.16.2 **fk providergroups.\_id to apikeys.providerGroup** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providergroups._id to apikeys.providerGroup</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Parent field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#b9665bc1-91b3-4e09-b755-22cb96f67723>apikeys</a></td></tr><tr><td>Child field</td><td><a href=#d46f235d-00d6-42e6-bcdd-1b9221827b20>providerGroup</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="3c28ada4-861e-48a5-b22a-9205c285fa23"></a>3.17 Relationship **fk providergroups.\_id to emailreports.group**

##### 3.17.1 **fk providergroups.\_id to emailreports.group** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#0602e2b4-5e65-4d24-bcec-e7841a766bb4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image267.png?raw=true)![Hackolade image](/nse-staging/image268.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#e776d0c0-11f5-48c9-8ea1-335391c5cf63>group</a></td></tr></tbody></table>

##### 3.17.2 **fk providergroups.\_id to emailreports.group** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providergroups._id to emailreports.group</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Parent field</td><td><a href=#0602e2b4-5e65-4d24-bcec-e7841a766bb4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#e776d0c0-11f5-48c9-8ea1-335391c5cf63>group</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="0fdfeb74-7e99-42ab-9531-07e49297a738"></a>3.18 Relationship **fk providergroups.\_id to emailreports.group**

##### 3.18.1 **fk providergroups.\_id to emailreports.group** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image269.png?raw=true)![Hackolade image](/nse-staging/image270.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#277372dd-7714-4c0a-935a-a80177b939f3>emailreports</a></td><td><a href=#4b6d2ded-9d35-40c6-a850-a3e2bb6f1f52>group</a></td></tr></tbody></table>

##### 3.18.2 **fk providergroups.\_id to emailreports.group** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providergroups._id to emailreports.group</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Parent field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#277372dd-7714-4c0a-935a-a80177b939f3>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#4b6d2ded-9d35-40c6-a850-a3e2bb6f1f52>group</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="799c4c12-ca70-42af-aeb9-a081c6a20c23"></a>3.19 Relationship **fk providergroups.\_id to emailreports\_backup.group**

##### 3.19.1 **fk providergroups.\_id to emailreports\_backup.group** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image271.png?raw=true)![Hackolade image](/nse-staging/image272.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#a1f30ee9-97c3-4199-b150-5d5bfa49848c>emailreports_backup</a></td><td><a href=#a850151d-0574-45da-aad8-42a46774ef42>group</a></td></tr></tbody></table>

##### 3.19.2 **fk providergroups.\_id to emailreports\_backup.group** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providergroups._id to emailreports_backup.group</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Parent field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#a1f30ee9-97c3-4199-b150-5d5bfa49848c>emailreports_backup</a></td></tr><tr><td>Child field</td><td><a href=#a850151d-0574-45da-aad8-42a46774ef42>group</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="907f635d-ec04-4b5e-b551-e4ebdbf4df1e"></a>3.20 Relationship **fk providergroups.\_id to notificationssettings.providerGroup**

##### 3.20.1 **fk providergroups.\_id to notificationssettings.providerGroup** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image273.png?raw=true)![Hackolade image](/nse-staging/image274.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#fe399826-287f-453f-abb7-98b1f49aacc3>notificationssettings</a></td><td><a href=#99e93cf9-15d3-470e-bcf7-a1376dc40c87>providerGroup</a></td></tr></tbody></table>

##### 3.20.2 **fk providergroups.\_id to notificationssettings.providerGroup** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providergroups._id to notificationssettings.providerGroup</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Parent field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#fe399826-287f-453f-abb7-98b1f49aacc3>notificationssettings</a></td></tr><tr><td>Child field</td><td><a href=#99e93cf9-15d3-470e-bcf7-a1376dc40c87>providerGroup</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="41c6a148-0ab2-488d-a975-a5d1111c0539"></a>3.21 Relationship **fk providergroups.\_id to webhooks.providerGroup**

##### 3.21.1 **fk providergroups.\_id to webhooks.providerGroup** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image275.png?raw=true)![Hackolade image](/nse-staging/image276.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td><td><a href=#8dfac1c8-8a24-43b5-a2f2-4b9dd3c4257d>providerGroup</a></td></tr></tbody></table>

##### 3.21.2 **fk providergroups.\_id to webhooks.providerGroup** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providergroups._id to webhooks.providerGroup</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Parent field</td><td><a href=#4f4a82f2-6d29-4e9b-81b1-2810a5808daa>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#8dfac1c8-8a24-43b5-a2f2-4b9dd3c4257d>providerGroup</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="3e852a60-ff05-4f5b-8900-1ad664a0951b"></a>3.22 Relationship **fk users.\_id to apikeys.user**

##### 3.22.1 **fk users.\_id to apikeys.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image277.png?raw=true)![Hackolade image](/nse-staging/image278.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#8cd9e26f-1bbd-4bfe-9f8e-d3d241494e74>apikeys</a></td><td><a href=#39ccf151-2f9a-4e32-8660-e78f9dfe481d>user</a></td></tr></tbody></table>

##### 3.22.2 **fk users.\_id to apikeys.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to apikeys.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#8cd9e26f-1bbd-4bfe-9f8e-d3d241494e74>apikeys</a></td></tr><tr><td>Child field</td><td><a href=#39ccf151-2f9a-4e32-8660-e78f9dfe481d>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="2fbabb22-13e4-4a2a-8fde-9ac5ea6adfe1"></a>3.23 Relationship **fk users.\_id to apikeys.user**

##### 3.23.1 **fk users.\_id to apikeys.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image279.png?raw=true)![Hackolade image](/nse-staging/image280.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#b9665bc1-91b3-4e09-b755-22cb96f67723>apikeys</a></td><td><a href=#e82800bb-3acd-4f21-b630-f93b0b10ebda>user</a></td></tr></tbody></table>

##### 3.23.2 **fk users.\_id to apikeys.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to apikeys.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#b9665bc1-91b3-4e09-b755-22cb96f67723>apikeys</a></td></tr><tr><td>Child field</td><td><a href=#e82800bb-3acd-4f21-b630-f93b0b10ebda>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="f4477814-6360-436b-a55e-7c11007f19d9"></a>3.24 Relationship **fk users.\_id to cloudstorages.user**

##### 3.24.1 **fk users.\_id to cloudstorages.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image281.png?raw=true)![Hackolade image](/nse-staging/image282.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#eb7e3a09-688d-4136-b462-7e8100b8eb3c>cloudstorages</a></td><td><a href=#2229df0b-c1a7-46aa-9950-64128a5b2e6c>user</a></td></tr></tbody></table>

##### 3.24.2 **fk users.\_id to cloudstorages.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to cloudstorages.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#eb7e3a09-688d-4136-b462-7e8100b8eb3c>cloudstorages</a></td></tr><tr><td>Child field</td><td><a href=#2229df0b-c1a7-46aa-9950-64128a5b2e6c>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="6298bc52-eea2-4b5d-901c-098e63466d50"></a>3.25 Relationship **fk users.\_id to cloudstorages.user**

##### 3.25.1 **fk users.\_id to cloudstorages.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image283.png?raw=true)![Hackolade image](/nse-staging/image284.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#ee6c86e8-e163-4a96-a044-16173901991f>cloudstorages</a></td><td><a href=#eac3e98a-bc1e-4d7a-987c-d412d67fc1d2>user</a></td></tr></tbody></table>

##### 3.25.2 **fk users.\_id to cloudstorages.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to cloudstorages.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#ee6c86e8-e163-4a96-a044-16173901991f>cloudstorages</a></td></tr><tr><td>Child field</td><td><a href=#eac3e98a-bc1e-4d7a-987c-d412d67fc1d2>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="2b672d56-9622-4c1b-b7c9-efb3bca2d264"></a>3.26 Relationship **fk users.\_id to domains.user**

##### 3.26.1 **fk users.\_id to domains.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image285.png?raw=true)![Hackolade image](/nse-staging/image286.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td><td><a href=#0147d9da-5a21-4008-a9c9-c67795de9e90>user</a></td></tr></tbody></table>

##### 3.26.2 **fk users.\_id to domains.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to domains.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td></tr><tr><td>Child field</td><td><a href=#0147d9da-5a21-4008-a9c9-c67795de9e90>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="b8b74f1a-66fb-47ac-9cf9-21a0e24617fe"></a>3.27 Relationship **fk users.\_id to domains.user**

##### 3.27.1 **fk users.\_id to domains.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image287.png?raw=true)![Hackolade image](/nse-staging/image288.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#9ac69500-3e48-4537-a4f8-8f3d8b06ca6a>domains</a></td><td><a href=#1221d904-d760-4bbf-8638-86820bd30d3e>user</a></td></tr></tbody></table>

##### 3.27.2 **fk users.\_id to domains.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to domains.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#9ac69500-3e48-4537-a4f8-8f3d8b06ca6a>domains</a></td></tr><tr><td>Child field</td><td><a href=#1221d904-d760-4bbf-8638-86820bd30d3e>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="86c6713e-b602-44bc-ba48-db557751ccc8"></a>3.28 Relationship **fk users.\_id to emailproviders.user**

##### 3.28.1 **fk users.\_id to emailproviders.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image289.png?raw=true)![Hackolade image](/nse-staging/image290.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#93e27ad9-a09f-4392-8dd4-f59165a9ab11>user</a></td></tr></tbody></table>

##### 3.28.2 **fk users.\_id to emailproviders.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to emailproviders.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Child field</td><td><a href=#93e27ad9-a09f-4392-8dd4-f59165a9ab11>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="4d17ad70-8582-4971-bd5a-ade31f3deee3"></a>3.29 Relationship **fk users.\_id to emailproviders.user**

##### 3.29.1 **fk users.\_id to emailproviders.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image291.png?raw=true)![Hackolade image](/nse-staging/image292.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td><td><a href=#3386bbd0-2205-4a53-bdc7-c8b145b24291>user</a></td></tr></tbody></table>

##### 3.29.2 **fk users.\_id to emailproviders.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to emailproviders.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#ed42c176-2f77-4b10-b832-db6976f5a268>emailproviders</a></td></tr><tr><td>Child field</td><td><a href=#3386bbd0-2205-4a53-bdc7-c8b145b24291>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="955b9f0c-6c96-43c0-8425-3cc1cae15f6f"></a>3.30 Relationship **fk users.\_id to emailreports.user**

##### 3.30.1 **fk users.\_id to emailreports.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image293.png?raw=true)![Hackolade image](/nse-staging/image294.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#26005a69-c23a-490a-8fe5-8ec444158b3f>user</a></td></tr></tbody></table>

##### 3.30.2 **fk users.\_id to emailreports.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to emailreports.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#26005a69-c23a-490a-8fe5-8ec444158b3f>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="030e54a8-f797-4374-8fca-afb0db2b8b09"></a>3.31 Relationship **fk users.\_id to emailreports.user**

##### 3.31.1 **fk users.\_id to emailreports.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image295.png?raw=true)![Hackolade image](/nse-staging/image296.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#277372dd-7714-4c0a-935a-a80177b939f3>emailreports</a></td><td><a href=#00845154-fb99-4040-a42d-989e59728f5d>user</a></td></tr></tbody></table>

##### 3.31.2 **fk users.\_id to emailreports.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to emailreports.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#277372dd-7714-4c0a-935a-a80177b939f3>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#00845154-fb99-4040-a42d-989e59728f5d>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="e07f5dd7-e62c-4b4d-8292-8f0303b9f059"></a>3.32 Relationship **fk users.\_id to emailreports\_backup.user**

##### 3.32.1 **fk users.\_id to emailreports\_backup.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image297.png?raw=true)![Hackolade image](/nse-staging/image298.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#a1f30ee9-97c3-4199-b150-5d5bfa49848c>emailreports_backup</a></td><td><a href=#26429953-9329-48e1-ab7a-5ff8f99cf461>user</a></td></tr></tbody></table>

##### 3.32.2 **fk users.\_id to emailreports\_backup.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to emailreports_backup.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#a1f30ee9-97c3-4199-b150-5d5bfa49848c>emailreports_backup</a></td></tr><tr><td>Child field</td><td><a href=#26429953-9329-48e1-ab7a-5ff8f99cf461>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="7d01c541-198a-4c88-a6c1-330b3d6e5d80"></a>3.33 Relationship **fk users.\_id to events.user**

##### 3.33.1 **fk users.\_id to events.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image299.png?raw=true)![Hackolade image](/nse-staging/image300.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td><td><a href=#feb7ccb7-38eb-4d88-a602-4f787436e469>user</a></td></tr></tbody></table>

##### 3.33.2 **fk users.\_id to events.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to events.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td></tr><tr><td>Child field</td><td><a href=#feb7ccb7-38eb-4d88-a602-4f787436e469>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="b43c49cd-3dc2-40c9-b2b7-3c7b4c6d77cb"></a>3.34 Relationship **fk users.\_id to events.user**

##### 3.34.1 **fk users.\_id to events.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image301.png?raw=true)![Hackolade image](/nse-staging/image302.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#4fdbc167-5d68-4330-b18b-fdd0ee36f253>events</a></td><td><a href=#35695c66-8b9d-41c1-a32e-e9f971c5440d>user</a></td></tr></tbody></table>

##### 3.34.2 **fk users.\_id to events.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to events.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#4fdbc167-5d68-4330-b18b-fdd0ee36f253>events</a></td></tr><tr><td>Child field</td><td><a href=#35695c66-8b9d-41c1-a32e-e9f971c5440d>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="5c0eb35b-c6ad-48d0-8008-21a57a05f9ce"></a>3.35 Relationship **fk users.\_id to notificationssettings.createdBy**

##### 3.35.1 **fk users.\_id to notificationssettings.createdBy** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image303.png?raw=true)![Hackolade image](/nse-staging/image304.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#fe399826-287f-453f-abb7-98b1f49aacc3>notificationssettings</a></td><td><a href=#ed32e333-68c8-4154-859c-57c97555a744>createdBy</a></td></tr></tbody></table>

##### 3.35.2 **fk users.\_id to notificationssettings.createdBy** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to notificationssettings.createdBy</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#fe399826-287f-453f-abb7-98b1f49aacc3>notificationssettings</a></td></tr><tr><td>Child field</td><td><a href=#ed32e333-68c8-4154-859c-57c97555a744>createdBy</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="28160dab-af74-4840-8350-26db89e9f475"></a>3.36 Relationship **fk users.\_id to notificationssettings.user**

##### 3.36.1 **fk users.\_id to notificationssettings.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image305.png?raw=true)![Hackolade image](/nse-staging/image306.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#2ce8c184-74b8-4517-a222-24b98a0b67c7>notificationssettings</a></td><td><a href=#10acdb81-3036-4012-b6f1-4775e2c09b76>user</a></td></tr></tbody></table>

##### 3.36.2 **fk users.\_id to notificationssettings.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to notificationssettings.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#2ce8c184-74b8-4517-a222-24b98a0b67c7>notificationssettings</a></td></tr><tr><td>Child field</td><td><a href=#10acdb81-3036-4012-b6f1-4775e2c09b76>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="293b98db-6c36-4873-98ef-fa0c7dc24eef"></a>3.37 Relationship **fk users.\_id to notificationssettings.user**

##### 3.37.1 **fk users.\_id to notificationssettings.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image307.png?raw=true)![Hackolade image](/nse-staging/image308.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#fe399826-287f-453f-abb7-98b1f49aacc3>notificationssettings</a></td><td><a href=#e1faf080-2671-4393-be81-de8218ef8cad>user</a></td></tr></tbody></table>

##### 3.37.2 **fk users.\_id to notificationssettings.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to notificationssettings.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#fe399826-287f-453f-abb7-98b1f49aacc3>notificationssettings</a></td></tr><tr><td>Child field</td><td><a href=#e1faf080-2671-4393-be81-de8218ef8cad>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="24b221f1-ef64-42bb-87c6-97c6e30157a2"></a>3.38 Relationship **fk users.\_id to providerdetails.user**

##### 3.38.1 **fk users.\_id to providerdetails.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image309.png?raw=true)![Hackolade image](/nse-staging/image310.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#9b803c41-6b61-4705-9332-35a311b09df9>user</a></td></tr></tbody></table>

##### 3.38.2 **fk users.\_id to providerdetails.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to providerdetails.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Child field</td><td><a href=#9b803c41-6b61-4705-9332-35a311b09df9>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="04322f87-f7db-472e-bac4-19d0f6cb291d"></a>3.39 Relationship **fk users.\_id to providerdetails.user**

##### 3.39.1 **fk users.\_id to providerdetails.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image311.png?raw=true)![Hackolade image](/nse-staging/image312.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td><td><a href=#6c927e47-f859-46f6-a203-b4ada4945195>user</a></td></tr></tbody></table>

##### 3.39.2 **fk users.\_id to providerdetails.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to providerdetails.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#40c10d28-5c14-4905-8432-a12a4b9a08d3>providerdetails</a></td></tr><tr><td>Child field</td><td><a href=#6c927e47-f859-46f6-a203-b4ada4945195>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="1e80c652-a654-46c5-bbfe-e8afac4396c3"></a>3.40 Relationship **fk users.\_id to providergroups.user**

##### 3.40.1 **fk users.\_id to providergroups.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image313.png?raw=true)![Hackolade image](/nse-staging/image314.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#cfbc6ced-eb2f-4802-9c30-366d7f232ad8>user</a></td></tr></tbody></table>

##### 3.40.2 **fk users.\_id to providergroups.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to providergroups.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#cfbc6ced-eb2f-4802-9c30-366d7f232ad8>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="796dd32f-5519-4599-929f-f8ce81566639"></a>3.41 Relationship **fk users.\_id to providergroups.user**

##### 3.41.1 **fk users.\_id to providergroups.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image315.png?raw=true)![Hackolade image](/nse-staging/image316.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td><td><a href=#f1b32552-c344-4ad3-acb8-0b33c8a9de82>user</a></td></tr></tbody></table>

##### 3.41.2 **fk users.\_id to providergroups.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to providergroups.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#64d43079-0215-426f-9d5e-f0fc257c3c99>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#f1b32552-c344-4ad3-acb8-0b33c8a9de82>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="8b086206-4cd5-4335-ad59-eb3e93f3d19f"></a>3.42 Relationship **fk users.\_id to webhooks.createdBy**

##### 3.42.1 **fk users.\_id to webhooks.createdBy** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image317.png?raw=true)![Hackolade image](/nse-staging/image318.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td><td><a href=#c7c0ff6a-f58f-4ff5-846f-89739c96df58>createdBy</a></td></tr></tbody></table>

##### 3.42.2 **fk users.\_id to webhooks.createdBy** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to webhooks.createdBy</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#c7c0ff6a-f58f-4ff5-846f-89739c96df58>createdBy</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="97062c7f-6d5f-4351-a5be-e31080f4cfe7"></a>3.43 Relationship **fk users.\_id to webhooks.user**

##### 3.43.1 **fk users.\_id to webhooks.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image319.png?raw=true)![Hackolade image](/nse-staging/image320.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td><td><a href=#f2ce532d-0d82-4c54-b5e4-8b8e026d2578>user</a></td></tr></tbody></table>

##### 3.43.2 **fk users.\_id to webhooks.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to webhooks.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#f2ce532d-0d82-4c54-b5e4-8b8e026d2578>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="e1f22e58-5abb-4195-87d8-4124d794fb20"></a>3.44 Relationship **fk users.\_id to webhooks.user**

##### 3.44.1 **fk users.\_id to webhooks.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-staging/image321.png?raw=true)![Hackolade image](/nse-staging/image322.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td><td><a href=#d9622975-57b5-429a-9d81-2167abe2a3f2>user</a></td></tr></tbody></table>

##### 3.44.2 **fk users.\_id to webhooks.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to webhooks.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ba95bb47-a973-4c8f-ad40-984266f98e88>users</a></td></tr><tr><td>Parent field</td><td><a href=#1636d1cf-9914-463b-ae5e-56517a9d73e4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#de3e3484-96c3-44d0-9942-94947d2bd3c0>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#d9622975-57b5-429a-9d81-2167abe2a3f2>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="edges"></a>