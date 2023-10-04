     

### <a id="documentation-body"></a>

![Hackolade image](/nse-beta/image1.png?raw=true)

MongoDB Physical Model
----------------------

#### Schema for:

Model name: New Model

Author:

Version:

File name: nse-beta.hck.json

File path: /Volumes/Scratch HD/Beck/NSe/Database/nse-beta.hck.json

Printed On: Thu Jun 01 2023 13:38:15 GMT-0400 (Eastern Daylight Time)

Created with: [Hackolade](https://hackolade.com/) - Polyglot data modeling for NoSQL databases, storage formats, REST APIs, and JSON in RDBMS

### <a id="contents"></a>

*   [Table of Contents](#contents)
*   [1\. Model](#model)
*   [2\. Databases](#containers)
    *   [2.1 nse-beta](#20a3d522-6352-4201-af49-d112a69a79d5)
        
        [2.1.2. Collections](#20a3d522-6352-4201-af49-d112a69a79d5-children)
        
        [2.1.2.1 apikeys](#8cd9e26f-1bbd-4bfe-9f8e-d3d241494e74)
        
        [2.1.2.2 captchas](#7d1dcaeb-8d5c-428c-b1de-34471252454e)
        
        [2.1.2.3 cloudstorages](#eb7e3a09-688d-4136-b462-7e8100b8eb3c)
        
        [2.1.2.4 domains](#daa1c73b-2b63-4899-a5f8-ea620917d44c)
        
        [2.1.2.5 emailproviders](#712b44d5-5cff-471a-ac84-da4acb536d8c)
        
        [2.1.2.6 emailreports](#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480)
        
        [2.1.2.7 events](#642e7545-b0c8-4fee-8f1d-0b043015b111)
        
        [2.1.2.8 notificationssettings](#2ce8c184-74b8-4517-a222-24b98a0b67c7)
        
        [2.1.2.9 providerdetails](#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a)
        
        [2.1.2.10 providergroups](#90011552-0886-4828-bd16-a5374affc7dc)
        
        [2.1.2.11 smsotps](#374495c2-8ca2-4c2c-82cb-7b6567461ab3)
        
        [2.1.2.12 users](#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0)
        
        [2.1.2.13 webhooks](#ee28d1f1-9e22-41fa-be97-826659a14baf)
        
*   [3\. Relationships](#relationships)
    *   [3.1 fk domains.\_id to providergroups.domain.0](#3bae0de9-e8f6-42d2-83e2-b23e88430382)
    *   [3.2 fk emailproviders.\_id to emailreports.emailProvider](#ec55de17-ee62-43fc-a34e-8e69173d810c)
    *   [3.3 fk emailproviders.\_id to events.emailProvider](#2cf69109-c125-46a4-8fbb-fc46790445ea)
    *   [3.4 fk emailproviders.\_id to providerdetails.provider](#9be59619-a8e7-4f9a-a5e9-8209817f1ca1)
    *   [3.5 fk emailproviders.\_id to webhooks.provider](#344c5400-de15-41c4-a95f-6d422dbe3355)
    *   [3.6 fk providerdetails.\_id to emailreports.providerDetails](#fa631839-c564-4f98-bc3d-ec1e07aedb06)
    *   [3.7 fk providerdetails.\_id to emailreports.providerdetails](#e80d8065-e9a2-477d-af88-ea1231122f58)
    *   [3.8 fk providerdetails.\_id to providergroups.providers.0](#e0d87a8b-3822-406f-bed6-5494d4ad5efc)
    *   [3.9 fk providergroups.\_id to emailreports.group](#3c28ada4-861e-48a5-b22a-9205c285fa23)
    *   [3.10 fk users.\_id to apikeys.user](#3e852a60-ff05-4f5b-8900-1ad664a0951b)
    *   [3.11 fk users.\_id to cloudstorages.user](#f4477814-6360-436b-a55e-7c11007f19d9)
    *   [3.12 fk users.\_id to domains.user](#2b672d56-9622-4c1b-b7c9-efb3bca2d264)
    *   [3.13 fk users.\_id to emailproviders.user](#86c6713e-b602-44bc-ba48-db557751ccc8)
    *   [3.14 fk users.\_id to emailreports.user](#955b9f0c-6c96-43c0-8425-3cc1cae15f6f)
    *   [3.15 fk users.\_id to events.user](#7d01c541-198a-4c88-a6c1-330b3d6e5d80)
    *   [3.16 fk users.\_id to notificationssettings.user](#28160dab-af74-4840-8350-26db89e9f475)
    *   [3.17 fk users.\_id to providerdetails.user](#24b221f1-ef64-42bb-87c6-97c6e30157a2)
    *   [3.18 fk users.\_id to providergroups.user](#1e80c652-a654-46c5-bbfe-e8afac4396c3)
    *   [3.19 fk users.\_id to webhooks.user](#97062c7f-6d5f-4351-a5be-e31080f4cfe7)

### <a id="model"></a>

##### 1\. Model

##### 1.1 Model **New Model**

##### 1.1.1 **New Model** Entity Relationship Diagram

![Hackolade image](/nse-beta/image2.png?raw=true)

##### 1.1.2 **New Model** Properties

##### 1.1.2.1 **Details** tab

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td><span>Model name</span></td><td>New Model</td></tr><tr><td><span>Technical name</span></td><td></td></tr><tr><td><span>Description</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Author</span></td><td></td></tr><tr><td><span>Version</span></td><td></td></tr><tr><td><span>Target</span></td><td>MongoDB</td></tr><tr><td><span>DB version</span></td><td>v5.0</td></tr><tr><td><span>Synchronization Id</span></td><td></td></tr><tr><td><span>Lineage capture</span></td><td></td></tr><tr><td><span>Polyglot models</span></td><td></td></tr><tr><td><span>Comments</span></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 1.1.3 **New Model** DB Definitions

### <a id="containers"></a>

##### 2\. Databases

### <a id="20a3d522-6352-4201-af49-d112a69a79d5"></a>2.1 Database **nse-beta**

![Hackolade image](/nse-beta/image3.png?raw=true)

##### 2.1.1 **nse-beta** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>nse-beta</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="20a3d522-6352-4201-af49-d112a69a79d5-children"></a>2.1.2 **nse-beta** Collections

### <a id="8cd9e26f-1bbd-4bfe-9f8e-d3d241494e74"></a>2.1.2.1 Collection **apikeys**

##### 2.1.2.1.1 **apikeys** Tree Diagram

![Hackolade image](/nse-beta/image4.png?raw=true)

##### 2.1.2.1.2 **apikeys** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>apikeys</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3 **apikeys** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#cc4e0f39-c7e9-4934-bca5-16f83e48759a class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8efe715b-236c-4b00-87e5-642ecf68b1be class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4c50c95e-a6ea-4818-a72a-7db8ad4a2947 class="margin-0">description</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#becd87e3-1358-45ea-8dcf-6ca9b1937da1 class="margin-0">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8871c12f-9b29-44cb-a078-b12f1c9703fb class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#39ccf151-2f9a-4e32-8660-e78f9dfe481d class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1dbc115f-4f6f-4f98-8e66-3bad55ac2539 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#120306bc-a2da-418a-800b-dfd98d33eb49 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6a2ad77f-24d4-4fc8-8815-c68ab54d1823 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cc4e0f39-c7e9-4934-bca5-16f83e48759a"></a>2.1.2.1.3.1 Field **\_id**

##### 2.1.2.1.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image5.png?raw=true)

##### 2.1.2.1.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8efe715b-236c-4b00-87e5-642ecf68b1be"></a>2.1.2.1.3.2 Field **name**

##### 2.1.2.1.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-beta/image6.png?raw=true)

##### 2.1.2.1.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Key 1</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4c50c95e-a6ea-4818-a72a-7db8ad4a2947"></a>2.1.2.1.3.3 Field **description**

##### 2.1.2.1.3.3.1 **description** Tree Diagram

![Hackolade image](/nse-beta/image7.png?raw=true)

##### 2.1.2.1.3.3.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="becd87e3-1358-45ea-8dcf-6ca9b1937da1"></a>2.1.2.1.3.4 Field **key**

##### 2.1.2.1.3.4.1 **key** Tree Diagram

![Hackolade image](/nse-beta/image8.png?raw=true)

##### 2.1.2.1.3.4.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>39RH2PA-D4XM8EQ-NCGHNC7-E4J4645</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8871c12f-9b29-44cb-a078-b12f1c9703fb"></a>2.1.2.1.3.5 Field **isActive**

##### 2.1.2.1.3.5.1 **isActive** Tree Diagram

![Hackolade image](/nse-beta/image9.png?raw=true)

##### 2.1.2.1.3.5.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="39ccf151-2f9a-4e32-8660-e78f9dfe481d"></a>2.1.2.1.3.6 Field **user**

##### 2.1.2.1.3.6.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image10.png?raw=true)

##### 2.1.2.1.3.6.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to apikeys.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1dbc115f-4f6f-4f98-8e66-3bad55ac2539"></a>2.1.2.1.3.7 Field **createdAt**

##### 2.1.2.1.3.7.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image11.png?raw=true)

##### 2.1.2.1.3.7.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="120306bc-a2da-418a-800b-dfd98d33eb49"></a>2.1.2.1.3.8 Field **updatedAt**

##### 2.1.2.1.3.8.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image12.png?raw=true)

##### 2.1.2.1.3.8.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6a2ad77f-24d4-4fc8-8815-c68ab54d1823"></a>2.1.2.1.3.9 Field **\_\_v**

##### 2.1.2.1.3.9.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image13.png?raw=true)

##### 2.1.2.1.3.9.2 **\_\_v** properties

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
    "_id": ObjectId("ad03c3b456e2ccf5af6af2dd"),
    "name": "Key 1",
    "description": "Lorem",
    "key": "39RH2PA-D4XM8EQ-NCGHNC7-E4J4645",
    "isActive": true,
    "user": ObjectId("d36e5d7d6f180be2695d5caa"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.1.7 **apikeys** Target Script

```
use nse-beta;

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

### <a id="7d1dcaeb-8d5c-428c-b1de-34471252454e"></a>2.1.2.2 Collection **captchas**

##### 2.1.2.2.1 **captchas** Tree Diagram

![Hackolade image](/nse-beta/image14.png?raw=true)

##### 2.1.2.2.2 **captchas** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>captchas</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

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
use nse-beta;

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

### <a id="eb7e3a09-688d-4136-b462-7e8100b8eb3c"></a>2.1.2.3 Collection **cloudstorages**

##### 2.1.2.3.1 **cloudstorages** Tree Diagram

![Hackolade image](/nse-beta/image15.png?raw=true)

##### 2.1.2.3.2 **cloudstorages** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>cloudstorages</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3 **cloudstorages** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#65c9d78b-51f8-4037-8884-c6eac4d10931 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2229df0b-c1a7-46aa-9950-64128a5b2e6c class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7909b4d2-737c-4935-854f-5fb35dcf0acf class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#72dc4d58-0e8e-408e-9018-599fd12c92ce class="margin-0">data</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ec40b1cc-4220-41bd-90e5-3786c4cdb292 class="margin-5">refreshToken</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e2a9363a-88f4-4c4a-865c-86ffaff5d055 class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#92df8113-9890-4e24-ab9d-33f4c123310c class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c21d5b86-64da-417c-8e7b-b433bde224d7 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c5235212-c296-496f-9205-6bb472d444bd class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5b3849ad-7563-4761-a1ab-f3b2ce657db3 class="margin-0">cloudStorageName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#751d8c86-f189-4662-87d7-1ea8db064b03 class="margin-0">email</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="65c9d78b-51f8-4037-8884-c6eac4d10931"></a>2.1.2.3.3.1 Field **\_id**

##### 2.1.2.3.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image16.png?raw=true)

##### 2.1.2.3.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2229df0b-c1a7-46aa-9950-64128a5b2e6c"></a>2.1.2.3.3.2 Field **user**

##### 2.1.2.3.3.2.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image17.png?raw=true)

##### 2.1.2.3.3.2.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to cloudstorages.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7909b4d2-737c-4935-854f-5fb35dcf0acf"></a>2.1.2.3.3.3 Field **name**

##### 2.1.2.3.3.3.1 **name** Tree Diagram

![Hackolade image](/nse-beta/image18.png?raw=true)

##### 2.1.2.3.3.3.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Beck Dropbox</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="72dc4d58-0e8e-408e-9018-599fd12c92ce"></a>2.1.2.3.3.4 Field **data**

##### 2.1.2.3.3.4.1 **data** Tree Diagram

![Hackolade image](/nse-beta/image19.png?raw=true)

##### 2.1.2.3.3.4.2 **data** Hierarchy

Parent field: **cloudstorages**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#ec40b1cc-4220-41bd-90e5-3786c4cdb292 class="margin-NaN">refreshToken</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3.4.3 **data** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>data</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ec40b1cc-4220-41bd-90e5-3786c4cdb292"></a>2.1.2.3.3.5 Field **refreshToken**

##### 2.1.2.3.3.5.1 **refreshToken** Tree Diagram

![Hackolade image](/nse-beta/image20.png?raw=true)

##### 2.1.2.3.3.5.2 **refreshToken** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>refreshToken</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>X3trjqHxEnUAAAAAAAAAAWaThSJ9dhJQS5Ep3UJTevt7PeiQtS2B1ynP-Jc3sZnR</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e2a9363a-88f4-4c4a-865c-86ffaff5d055"></a>2.1.2.3.3.6 Field **isActive**

##### 2.1.2.3.3.6.1 **isActive** Tree Diagram

![Hackolade image](/nse-beta/image21.png?raw=true)

##### 2.1.2.3.3.6.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="92df8113-9890-4e24-ab9d-33f4c123310c"></a>2.1.2.3.3.7 Field **createdAt**

##### 2.1.2.3.3.7.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image22.png?raw=true)

##### 2.1.2.3.3.7.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c21d5b86-64da-417c-8e7b-b433bde224d7"></a>2.1.2.3.3.8 Field **updatedAt**

##### 2.1.2.3.3.8.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image23.png?raw=true)

##### 2.1.2.3.3.8.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c5235212-c296-496f-9205-6bb472d444bd"></a>2.1.2.3.3.9 Field **\_\_v**

##### 2.1.2.3.3.9.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image24.png?raw=true)

##### 2.1.2.3.3.9.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5b3849ad-7563-4761-a1ab-f3b2ce657db3"></a>2.1.2.3.3.10 Field **cloudStorageName**

##### 2.1.2.3.3.10.1 **cloudStorageName** Tree Diagram

![Hackolade image](/nse-beta/image25.png?raw=true)

##### 2.1.2.3.3.10.2 **cloudStorageName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>cloudStorageName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>DROPBOX</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="751d8c86-f189-4662-87d7-1ea8db064b03"></a>2.1.2.3.3.11 Field **email**

##### 2.1.2.3.3.11.1 **email** Tree Diagram

![Hackolade image](/nse-beta/image26.png?raw=true)

##### 2.1.2.3.3.11.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>admin@beckcomputers.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

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
    "_id": ObjectId("0f2ffa5e2609ccf4c0eec73b"),
    "user": ObjectId("fe4f861ae07a32003dbef9ff"),
    "name": "Beck Dropbox",
    "data": {
        "refreshToken": "X3trjqHxEnUAAAAAAAAAAWaThSJ9dhJQS5Ep3UJTevt7PeiQtS2B1ynP-Jc3sZnR"
    },
    "isActive": true,
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "cloudStorageName": "DROPBOX",
    "email": "admin@beckcomputers.com"
}
```

##### 2.1.2.3.7 **cloudstorages** Target Script

```
use nse-beta;

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

### <a id="daa1c73b-2b63-4899-a5f8-ea620917d44c"></a>2.1.2.4 Collection **domains**

##### 2.1.2.4.1 **domains** Tree Diagram

![Hackolade image](/nse-beta/image27.png?raw=true)

##### 2.1.2.4.2 **domains** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>domains</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3 **domains** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#c08c29f6-a449-497c-83f2-fb333e500f7e class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0147d9da-5a21-4008-a9c9-c67795de9e90 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#31c0f1ca-4458-4916-bda4-8aa276e2f513 class="margin-0">domain</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#02872d8f-8432-477c-9229-f951fd07baec class="margin-0">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#adbdc02c-2d84-4de2-98ad-635b295edb9e class="margin-0">value</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b98063b9-e709-4456-959e-fdc18005124d class="margin-0">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#88551aea-a9b1-4e60-8798-3d8918c8f4be class="margin-0">isVerified</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#09c33b33-cf23-418e-8885-e1707a6e9010 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#138a59d4-29bd-4101-8926-e388799809bf class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cf0ab2fc-3b37-4612-8f42-95a8d6359a55 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#fc807307-7870-4f61-83b8-a20e8ba05a9a class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c15aa5d2-1632-4f9b-807c-eb87a3113114 class="margin-0">authentication</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f7478f0d-ccb4-478f-94eb-612e64a69e29 class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1330dc3a-bfea-49d0-aeb7-d0c3af6fcd8e class="margin-10">provider</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b6e51def-74cd-46c9-b93a-7eeb4cd0f427 class="margin-10">records</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ed6f9d7d-e7ee-43f0-995c-accfc2632e61 class="margin-15">CNAME</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#97ec9270-a60e-4391-835b-c34d4e1470b6 class="margin-15">DKIM</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#abdb26bf-cd86-46ce-8d5f-2a4b46f83d75 class="margin-15">DMarc</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#081ffe16-85c5-41bc-b64e-3ab7b32dbbbf class="margin-15">MX</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#332c406e-bc59-46cd-82bd-f188eb1faf6b class="margin-15">SPF</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a0a9951a-6d36-42d9-803a-8c02fca21fb8 class="margin-0">comments</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c08c29f6-a449-497c-83f2-fb333e500f7e"></a>2.1.2.4.3.1 Field **\_id**

##### 2.1.2.4.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image28.png?raw=true)

##### 2.1.2.4.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0147d9da-5a21-4008-a9c9-c67795de9e90"></a>2.1.2.4.3.2 Field **user**

##### 2.1.2.4.3.2.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image29.png?raw=true)

##### 2.1.2.4.3.2.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to domains.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="31c0f1ca-4458-4916-bda4-8aa276e2f513"></a>2.1.2.4.3.3 Field **domain**

##### 2.1.2.4.3.3.1 **domain** Tree Diagram

![Hackolade image](/nse-beta/image30.png?raw=true)

##### 2.1.2.4.3.3.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>gmail.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="02872d8f-8432-477c-9229-f951fd07baec"></a>2.1.2.4.3.4 Field **key**

##### 2.1.2.4.3.4.1 **key** Tree Diagram

![Hackolade image](/nse-beta/image31.png?raw=true)

##### 2.1.2.4.3.4.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>gmail.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="adbdc02c-2d84-4de2-98ad-635b295edb9e"></a>2.1.2.4.3.5 Field **value**

##### 2.1.2.4.3.5.1 **value** Tree Diagram

![Hackolade image](/nse-beta/image32.png?raw=true)

##### 2.1.2.4.3.5.2 **value** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>value</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>nse-site-verification-LQKPNqIN5r5Rr1FxzoqFQ3m7NyXo0o</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b98063b9-e709-4456-959e-fdc18005124d"></a>2.1.2.4.3.6 Field **type**

##### 2.1.2.4.3.6.1 **type** Tree Diagram

![Hackolade image](/nse-beta/image33.png?raw=true)

##### 2.1.2.4.3.6.2 **type** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>type</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>TXT</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="88551aea-a9b1-4e60-8798-3d8918c8f4be"></a>2.1.2.4.3.7 Field **isVerified**

##### 2.1.2.4.3.7.1 **isVerified** Tree Diagram

![Hackolade image](/nse-beta/image34.png?raw=true)

##### 2.1.2.4.3.7.2 **isVerified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isVerified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="09c33b33-cf23-418e-8885-e1707a6e9010"></a>2.1.2.4.3.8 Field **createdAt**

##### 2.1.2.4.3.8.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image35.png?raw=true)

##### 2.1.2.4.3.8.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="138a59d4-29bd-4101-8926-e388799809bf"></a>2.1.2.4.3.9 Field **updatedAt**

##### 2.1.2.4.3.9.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image36.png?raw=true)

##### 2.1.2.4.3.9.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cf0ab2fc-3b37-4612-8f42-95a8d6359a55"></a>2.1.2.4.3.10 Field **\_\_v**

##### 2.1.2.4.3.10.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image37.png?raw=true)

##### 2.1.2.4.3.10.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="fc807307-7870-4f61-83b8-a20e8ba05a9a"></a>2.1.2.4.3.11 Field **isActive**

##### 2.1.2.4.3.11.1 **isActive** Tree Diagram

![Hackolade image](/nse-beta/image38.png?raw=true)

##### 2.1.2.4.3.11.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c15aa5d2-1632-4f9b-807c-eb87a3113114"></a>2.1.2.4.3.12 Field **authentication**

##### 2.1.2.4.3.12.1 **authentication** Tree Diagram

![Hackolade image](/nse-beta/image39.png?raw=true)

##### 2.1.2.4.3.12.2 **authentication** Hierarchy

Parent field: **domains**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f7478f0d-ccb4-478f-94eb-612e64a69e29 class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.12.3 **authentication** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>authentication</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f7478f0d-ccb4-478f-94eb-612e64a69e29"></a>2.1.2.4.3.13 Field **\[0\]**

##### 2.1.2.4.3.13.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image40.png?raw=true)

##### 2.1.2.4.3.13.2 **\[0\]** Hierarchy

Parent field: **authentication**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#1330dc3a-bfea-49d0-aeb7-d0c3af6fcd8e class="margin-NaN">provider</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b6e51def-74cd-46c9-b93a-7eeb4cd0f427 class="margin-NaN">records</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.13.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1330dc3a-bfea-49d0-aeb7-d0c3af6fcd8e"></a>2.1.2.4.3.14 Field **provider**

##### 2.1.2.4.3.14.1 **provider** Tree Diagram

![Hackolade image](/nse-beta/image41.png?raw=true)

##### 2.1.2.4.3.14.2 **provider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>provider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sendinblue</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b6e51def-74cd-46c9-b93a-7eeb4cd0f427"></a>2.1.2.4.3.15 Field **records**

##### 2.1.2.4.3.15.1 **records** Tree Diagram

![Hackolade image](/nse-beta/image42.png?raw=true)

##### 2.1.2.4.3.15.2 **records** Hierarchy

Parent field: **\[0\]**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#ed6f9d7d-e7ee-43f0-995c-accfc2632e61 class="margin-NaN">CNAME</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#97ec9270-a60e-4391-835b-c34d4e1470b6 class="margin-NaN">DKIM</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#abdb26bf-cd86-46ce-8d5f-2a4b46f83d75 class="margin-NaN">DMarc</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#081ffe16-85c5-41bc-b64e-3ab7b32dbbbf class="margin-NaN">MX</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#332c406e-bc59-46cd-82bd-f188eb1faf6b class="margin-NaN">SPF</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.15.3 **records** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>records</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ed6f9d7d-e7ee-43f0-995c-accfc2632e61"></a>2.1.2.4.3.16 Field **CNAME**

##### 2.1.2.4.3.16.1 **CNAME** Tree Diagram

![Hackolade image](/nse-beta/image43.png?raw=true)

##### 2.1.2.4.3.16.2 **CNAME** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>CNAME</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="97ec9270-a60e-4391-835b-c34d4e1470b6"></a>2.1.2.4.3.17 Field **DKIM**

##### 2.1.2.4.3.17.1 **DKIM** Tree Diagram

![Hackolade image](/nse-beta/image44.png?raw=true)

##### 2.1.2.4.3.17.2 **DKIM** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>DKIM</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="abdb26bf-cd86-46ce-8d5f-2a4b46f83d75"></a>2.1.2.4.3.18 Field **DMarc**

##### 2.1.2.4.3.18.1 **DMarc** Tree Diagram

![Hackolade image](/nse-beta/image45.png?raw=true)

##### 2.1.2.4.3.18.2 **DMarc** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>DMarc</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="081ffe16-85c5-41bc-b64e-3ab7b32dbbbf"></a>2.1.2.4.3.19 Field **MX**

##### 2.1.2.4.3.19.1 **MX** Tree Diagram

![Hackolade image](/nse-beta/image46.png?raw=true)

##### 2.1.2.4.3.19.2 **MX** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>MX</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="332c406e-bc59-46cd-82bd-f188eb1faf6b"></a>2.1.2.4.3.20 Field **SPF**

##### 2.1.2.4.3.20.1 **SPF** Tree Diagram

![Hackolade image](/nse-beta/image47.png?raw=true)

##### 2.1.2.4.3.20.2 **SPF** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>SPF</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a0a9951a-6d36-42d9-803a-8c02fca21fb8"></a>2.1.2.4.3.21 Field **comments**

##### 2.1.2.4.3.21.1 **comments** Tree Diagram

![Hackolade image](/nse-beta/image48.png?raw=true)

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
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
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
    "_id": ObjectId("6d9f5662eade1e71dd98e983"),
    "user": ObjectId("ffefc3afe5e3dae77acdcf16"),
    "domain": "gmail.com",
    "key": "gmail.com",
    "value": "nse-site-verification-LQKPNqIN5r5Rr1FxzoqFQ3m7NyXo0o",
    "type": "TXT",
    "isVerified": true,
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "isActive": true,
    "authentication": [
        {
            "provider": "sendinblue",
            "records": {
                "CNAME": false,
                "DKIM": false,
                "DMarc": true,
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
use nse-beta;

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
                    "bsonType": "objectId"
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

### <a id="712b44d5-5cff-471a-ac84-da4acb536d8c"></a>2.1.2.5 Collection **emailproviders**

##### 2.1.2.5.1 **emailproviders** Tree Diagram

![Hackolade image](/nse-beta/image49.png?raw=true)

##### 2.1.2.5.2 **emailproviders** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>emailproviders</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3 **emailproviders** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9389b7f4-8523-4898-8071-52671a2c8415 class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4d43e6cf-a854-480a-9bb9-6a45547994c1 class="margin-0">displayName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8832e02e-e27d-455f-b144-29bb4e4578fb class="margin-0">records</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#35e8504e-6918-419e-bb84-c2701261653f class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a7d8c0c7-7bc0-480f-9120-42ffa0642328 class="margin-10">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#13eaf0d5-0863-4d32-b60d-c6e579e521bb class="margin-10">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f283be82-2076-46d2-afdd-d833eef8192a class="margin-0">apiSchema</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#69e26020-f654-482c-9f4a-314055e04ef8 class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#eca5d0d4-a9f4-48ab-9344-5d2ea33ca5f3 class="margin-10">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#fe3f6bc8-a15f-4db0-b46c-f747ae0f1570 class="margin-10">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#bb58dac9-52dd-4634-9a24-75323100d121 class="margin-10">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3bc52ace-58d4-443b-b049-89dfc656e57f class="margin-0">smtpSchema</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1bcb7dda-81e9-4bb8-891e-2bf787506b87 class="margin-0">supports</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#de2ba8e8-9faa-41aa-a64f-861d3505988e class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#93e27ad9-a09f-4392-8dd4-f59165a9ab11 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#88f9bec7-b803-47eb-a68f-25764be3086e class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3d6cf993-fdbf-4a6b-b8ec-95fc4ee5e1ef class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a9601b78-6219-41fd-939b-aa3718f2e05e class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6a7ceb31-9014-4664-a644-f4e4d65983d3"></a>2.1.2.5.3.1 Field **\_id**

##### 2.1.2.5.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image50.png?raw=true)

##### 2.1.2.5.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9389b7f4-8523-4898-8071-52671a2c8415"></a>2.1.2.5.3.2 Field **name**

##### 2.1.2.5.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-beta/image51.png?raw=true)

##### 2.1.2.5.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Mailgun</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4d43e6cf-a854-480a-9bb9-6a45547994c1"></a>2.1.2.5.3.3 Field **displayName**

##### 2.1.2.5.3.3.1 **displayName** Tree Diagram

![Hackolade image](/nse-beta/image52.png?raw=true)

##### 2.1.2.5.3.3.2 **displayName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>displayName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8832e02e-e27d-455f-b144-29bb4e4578fb"></a>2.1.2.5.3.4 Field **records**

##### 2.1.2.5.3.4.1 **records** Tree Diagram

![Hackolade image](/nse-beta/image53.png?raw=true)

##### 2.1.2.5.3.4.2 **records** Hierarchy

Parent field: **emailproviders**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#35e8504e-6918-419e-bb84-c2701261653f class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.4.3 **records** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>records</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="35e8504e-6918-419e-bb84-c2701261653f"></a>2.1.2.5.3.5 Field **\[0\]**

##### 2.1.2.5.3.5.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image54.png?raw=true)

##### 2.1.2.5.3.5.2 **\[0\]** Hierarchy

Parent field: **records**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#a7d8c0c7-7bc0-480f-9120-42ffa0642328 class="margin-NaN">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#13eaf0d5-0863-4d32-b60d-c6e579e521bb class="margin-NaN">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.5.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a7d8c0c7-7bc0-480f-9120-42ffa0642328"></a>2.1.2.5.3.6 Field **type**

##### 2.1.2.5.3.6.1 **type** Tree Diagram

![Hackolade image](/nse-beta/image55.png?raw=true)

##### 2.1.2.5.3.6.2 **type** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>type</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>CNAME</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="13eaf0d5-0863-4d32-b60d-c6e579e521bb"></a>2.1.2.5.3.7 Field **key**

##### 2.1.2.5.3.7.1 **key** Tree Diagram

![Hackolade image](/nse-beta/image56.png?raw=true)

##### 2.1.2.5.3.7.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>em10.[DOMAIN]</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f283be82-2076-46d2-afdd-d833eef8192a"></a>2.1.2.5.3.8 Field **apiSchema**

##### 2.1.2.5.3.8.1 **apiSchema** Tree Diagram

![Hackolade image](/nse-beta/image57.png?raw=true)

##### 2.1.2.5.3.8.2 **apiSchema** Hierarchy

Parent field: **emailproviders**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#69e26020-f654-482c-9f4a-314055e04ef8 class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.8.3 **apiSchema** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>apiSchema</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="69e26020-f654-482c-9f4a-314055e04ef8"></a>2.1.2.5.3.9 Field **\[0\]**

##### 2.1.2.5.3.9.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image58.png?raw=true)

##### 2.1.2.5.3.9.2 **\[0\]** Hierarchy

Parent field: **apiSchema**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#eca5d0d4-a9f4-48ab-9344-5d2ea33ca5f3 class="margin-NaN">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#fe3f6bc8-a15f-4db0-b46c-f747ae0f1570 class="margin-NaN">type</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#bb58dac9-52dd-4634-9a24-75323100d121 class="margin-NaN">key</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.9.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="eca5d0d4-a9f4-48ab-9344-5d2ea33ca5f3"></a>2.1.2.5.3.10 Field **name**

##### 2.1.2.5.3.10.1 **name** Tree Diagram

![Hackolade image](/nse-beta/image59.png?raw=true)

##### 2.1.2.5.3.10.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>API Key</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="fe3f6bc8-a15f-4db0-b46c-f747ae0f1570"></a>2.1.2.5.3.11 Field **type**

##### 2.1.2.5.3.11.1 **type** Tree Diagram

![Hackolade image](/nse-beta/image60.png?raw=true)

##### 2.1.2.5.3.11.2 **type** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>type</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>text</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="bb58dac9-52dd-4634-9a24-75323100d121"></a>2.1.2.5.3.12 Field **key**

##### 2.1.2.5.3.12.1 **key** Tree Diagram

![Hackolade image](/nse-beta/image61.png?raw=true)

##### 2.1.2.5.3.12.2 **key** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>key</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>apiKey</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3bc52ace-58d4-443b-b049-89dfc656e57f"></a>2.1.2.5.3.13 Field **smtpSchema**

##### 2.1.2.5.3.13.1 **smtpSchema** Tree Diagram

![Hackolade image](/nse-beta/image62.png?raw=true)

##### 2.1.2.5.3.13.2 **smtpSchema** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>smtpSchema</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1bcb7dda-81e9-4bb8-891e-2bf787506b87"></a>2.1.2.5.3.14 Field **supports**

##### 2.1.2.5.3.14.1 **supports** Tree Diagram

![Hackolade image](/nse-beta/image63.png?raw=true)

##### 2.1.2.5.3.14.2 **supports** Hierarchy

Parent field: **emailproviders**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#de2ba8e8-9faa-41aa-a64f-861d3505988e class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.5.3.14.3 **supports** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>supports</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="de2ba8e8-9faa-41aa-a64f-861d3505988e"></a>2.1.2.5.3.15 Field **\[0\]**

##### 2.1.2.5.3.15.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image64.png?raw=true)

##### 2.1.2.5.3.15.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>API</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="93e27ad9-a09f-4392-8dd4-f59165a9ab11"></a>2.1.2.5.3.16 Field **user**

##### 2.1.2.5.3.16.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image65.png?raw=true)

##### 2.1.2.5.3.16.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to emailproviders.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="88f9bec7-b803-47eb-a68f-25764be3086e"></a>2.1.2.5.3.17 Field **createdAt**

##### 2.1.2.5.3.17.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image66.png?raw=true)

##### 2.1.2.5.3.17.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3d6cf993-fdbf-4a6b-b8ec-95fc4ee5e1ef"></a>2.1.2.5.3.18 Field **updatedAt**

##### 2.1.2.5.3.18.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image67.png?raw=true)

##### 2.1.2.5.3.18.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a9601b78-6219-41fd-939b-aa3718f2e05e"></a>2.1.2.5.3.19 Field **\_\_v**

##### 2.1.2.5.3.19.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image68.png?raw=true)

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
    "_id": ObjectId("c8dae6ebaaf7abcd8dc62aee"),
    "name": "Mailgun",
    "displayName": "Lorem",
    "records": [
        {
            "type": "CNAME",
            "key": "em10.[DOMAIN]"
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
    "user": ObjectId("3003adcfb0feab8d181f029c"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.5.7 **emailproviders** Target Script

```
use nse-beta;

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

### <a id="c4ef27d3-2421-48b1-bc3c-a15e8e7f8480"></a>2.1.2.6 Collection **emailreports**

##### 2.1.2.6.1 **emailreports** Tree Diagram

![Hackolade image](/nse-beta/image69.png?raw=true)

##### 2.1.2.6.2 **emailreports** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>emailreports</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.6.3 **emailreports** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#47d86a64-ea79-48a6-a5e8-6695b86ba222 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#21f662a8-3e15-4288-83ca-72157196fc26 class="margin-0">notificationFrom</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9c170a35-0fbf-4b27-90a8-b39d81188bed class="margin-0">notificationTo</a></td><td class="no-break-word">array,string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#13b2813a-d91b-4920-89d0-60762d0c2b68 class="margin-5">items</a></td><td class="no-break-word">multipleArray</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c8dd450a-1ea7-4a69-8add-b915d9b94362 class="margin-10">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#54979998-7137-40fd-9d39-c9257d4d488d class="margin-0">domain</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#26005a69-c23a-490a-8fe5-8ec444158b3f class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e776d0c0-11f5-48c9-8ea1-335391c5cf63 class="margin-0">group</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f599aa72-0681-4960-870e-db75f64ab523 class="margin-0">status</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#15be5be3-22b1-4110-8f0c-68ee6353f932 class="margin-0">referenceId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#523eb0ea-4a17-4aff-821a-ca0794f9f11b class="margin-0">notifiedAt</a></td><td class="no-break-word">null,date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1fd327ce-949b-4dc1-92c3-2b9240e8253d class="margin-0">isNotified</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5b3c6aa0-690f-4af4-9fbe-612ad8218fe2 class="margin-0">sender</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7d1f332e-2285-4f1c-b40a-f93f49f444ad class="margin-0">recipient</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c14b689c-4b8b-437b-8225-f28a4a736799 class="margin-0">bounceDetailShort</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ad319b4a-2f66-4fef-a669-e23911129574 class="margin-0">bounceDetailLong</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47d92c8b-5da4-4255-8ee8-b2b8b0a4c423 class="margin-0">subject</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#958cf231-e44a-44fc-bedb-4f6f5aa84244 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1621d504-6984-4692-a532-b8d08d47c20f class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2b0d48a6-f2f8-42fe-a917-92271acb3bb1 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2d310dbd-e009-43bd-8b3d-daabedbe9f91 class="margin-0">providerdetails</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d7cb9d97-b0e0-40cb-a00a-4090445d86c6 class="margin-0">emailProvider</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3237ea31-c6c3-42b9-8849-b00b20cc8a9b class="margin-0">error</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2fce412d-ae8b-46fe-bd9d-e38c51e78335 class="margin-0">hasAttachment</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5dd4a5d2-28fc-401b-812e-1e8f479f2184 class="margin-0">messageId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47888936-6c6f-4e79-bba3-09fe03d213b6 class="margin-0">providerDetails</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="47d86a64-ea79-48a6-a5e8-6695b86ba222"></a>2.1.2.6.3.1 Field **\_id**

##### 2.1.2.6.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image70.png?raw=true)

##### 2.1.2.6.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="21f662a8-3e15-4288-83ca-72157196fc26"></a>2.1.2.6.3.2 Field **notificationFrom**

##### 2.1.2.6.3.2.1 **notificationFrom** Tree Diagram

![Hackolade image](/nse-beta/image71.png?raw=true)

##### 2.1.2.6.3.2.2 **notificationFrom** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationFrom</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>mallikarjun@nexweave.co</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9c170a35-0fbf-4b27-90a8-b39d81188bed"></a>2.1.2.6.3.3 Field **notificationTo**

##### 2.1.2.6.3.3.1 **notificationTo** Tree Diagram

![Hackolade image](/nse-beta/image72.png?raw=true)

##### 2.1.2.6.3.3.2 **notificationTo** Hierarchy

Parent field: **emailreports**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#13b2813a-d91b-4920-89d0-60762d0c2b68 class="margin-NaN">items</a></td><td class="no-break-word">multipleArray</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.6.3.3.3 **notificationTo** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationTo</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>multiple (array,string)</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr></tbody></table>

### <a id="13b2813a-d91b-4920-89d0-60762d0c2b68"></a>2.1.2.6.3.4 Field **items**

##### 2.1.2.6.3.4.1 **items** Tree Diagram

![Hackolade image](/nse-beta/image73.png?raw=true)

##### 2.1.2.6.3.4.2 **items** Hierarchy

Parent field: **notificationTo**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#c8dd450a-1ea7-4a69-8add-b915d9b94362 class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.6.3.4.3 **items** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c8dd450a-1ea7-4a69-8add-b915d9b94362"></a>2.1.2.6.3.5 Field **\[0\] New Field**

##### 2.1.2.6.3.5.1 **\[0\] New Field** Tree Diagram

![Hackolade image](/nse-beta/image74.png?raw=true)

##### 2.1.2.6.3.5.2 **\[0\] New Field** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="54979998-7137-40fd-9d39-c9257d4d488d"></a>2.1.2.6.3.6 Field **domain**

##### 2.1.2.6.3.6.1 **domain** Tree Diagram

![Hackolade image](/nse-beta/image75.png?raw=true)

##### 2.1.2.6.3.6.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>lineagewh.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="26005a69-c23a-490a-8fe5-8ec444158b3f"></a>2.1.2.6.3.7 Field **user**

##### 2.1.2.6.3.7.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image76.png?raw=true)

##### 2.1.2.6.3.7.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to emailreports.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e776d0c0-11f5-48c9-8ea1-335391c5cf63"></a>2.1.2.6.3.8 Field **group**

##### 2.1.2.6.3.8.1 **group** Tree Diagram

![Hackolade image](/nse-beta/image77.png?raw=true)

##### 2.1.2.6.3.8.2 **group** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>group</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Foreign field</td><td><a href=#0602e2b4-5e65-4d24-bcec-e7841a766bb4>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providergroups._id to emailreports.group</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f599aa72-0681-4960-870e-db75f64ab523"></a>2.1.2.6.3.9 Field **status**

##### 2.1.2.6.3.9.1 **status** Tree Diagram

![Hackolade image](/nse-beta/image78.png?raw=true)

##### 2.1.2.6.3.9.2 **status** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>status</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>FAILED</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="15be5be3-22b1-4110-8f0c-68ee6353f932"></a>2.1.2.6.3.10 Field **referenceId**

##### 2.1.2.6.3.10.1 **referenceId** Tree Diagram

![Hackolade image](/nse-beta/image79.png?raw=true)

##### 2.1.2.6.3.10.2 **referenceId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>referenceId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>dac7c13d2d864f15a8c241e228d2a8ee</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="523eb0ea-4a17-4aff-821a-ca0794f9f11b"></a>2.1.2.6.3.11 Field **notifiedAt**

##### 2.1.2.6.3.11.1 **notifiedAt** Tree Diagram

![Hackolade image](/nse-beta/image80.png?raw=true)

##### 2.1.2.6.3.11.2 **notifiedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notifiedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>multiple (null,date)</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>null</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr></tbody></table>

### <a id="1fd327ce-949b-4dc1-92c3-2b9240e8253d"></a>2.1.2.6.3.12 Field **isNotified**

##### 2.1.2.6.3.12.1 **isNotified** Tree Diagram

![Hackolade image](/nse-beta/image81.png?raw=true)

##### 2.1.2.6.3.12.2 **isNotified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isNotified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5b3c6aa0-690f-4af4-9fbe-612ad8218fe2"></a>2.1.2.6.3.13 Field **sender**

##### 2.1.2.6.3.13.1 **sender** Tree Diagram

![Hackolade image](/nse-beta/image82.png?raw=true)

##### 2.1.2.6.3.13.2 **sender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>sender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>noreply@lineagewh.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7d1f332e-2285-4f1c-b40a-f93f49f444ad"></a>2.1.2.6.3.14 Field **recipient**

##### 2.1.2.6.3.14.1 **recipient** Tree Diagram

![Hackolade image](/nse-beta/image83.png?raw=true)

##### 2.1.2.6.3.14.2 **recipient** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>recipient</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>inbound-reciept@foodimportgroup.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c14b689c-4b8b-437b-8225-f28a4a736799"></a>2.1.2.6.3.15 Field **bounceDetailShort**

##### 2.1.2.6.3.15.1 **bounceDetailShort** Tree Diagram

![Hackolade image](/nse-beta/image84.png?raw=true)

##### 2.1.2.6.3.15.2 **bounceDetailShort** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailShort</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ad319b4a-2f66-4fef-a669-e23911129574"></a>2.1.2.6.3.16 Field **bounceDetailLong**

##### 2.1.2.6.3.16.1 **bounceDetailLong** Tree Diagram

![Hackolade image](/nse-beta/image85.png?raw=true)

##### 2.1.2.6.3.16.2 **bounceDetailLong** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailLong</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="47d92c8b-5da4-4255-8ee8-b2b8b0a4c423"></a>2.1.2.6.3.17 Field **subject**

##### 2.1.2.6.3.17.1 **subject** Tree Diagram

![Hackolade image](/nse-beta/image86.png?raw=true)

##### 2.1.2.6.3.17.2 **subject** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>subject</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="958cf231-e44a-44fc-bedb-4f6f5aa84244"></a>2.1.2.6.3.18 Field **createdAt**

##### 2.1.2.6.3.18.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image87.png?raw=true)

##### 2.1.2.6.3.18.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1621d504-6984-4692-a532-b8d08d47c20f"></a>2.1.2.6.3.19 Field **updatedAt**

##### 2.1.2.6.3.19.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image88.png?raw=true)

##### 2.1.2.6.3.19.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2b0d48a6-f2f8-42fe-a917-92271acb3bb1"></a>2.1.2.6.3.20 Field **\_\_v**

##### 2.1.2.6.3.20.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image89.png?raw=true)

##### 2.1.2.6.3.20.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2d310dbd-e009-43bd-8b3d-daabedbe9f91"></a>2.1.2.6.3.21 Field **providerdetails**

##### 2.1.2.6.3.21.1 **providerdetails** Tree Diagram

![Hackolade image](/nse-beta/image90.png?raw=true)

##### 2.1.2.6.3.21.2 **providerdetails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providerdetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Foreign field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providerdetails._id to emailreports.providerdetails</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d7cb9d97-b0e0-40cb-a00a-4090445d86c6"></a>2.1.2.6.3.22 Field **emailProvider**

##### 2.1.2.6.3.22.1 **emailProvider** Tree Diagram

![Hackolade image](/nse-beta/image91.png?raw=true)

##### 2.1.2.6.3.22.2 **emailProvider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>emailProvider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Foreign field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk emailproviders._id to emailreports.emailProvider</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3237ea31-c6c3-42b9-8849-b00b20cc8a9b"></a>2.1.2.6.3.23 Field **error**

##### 2.1.2.6.3.23.1 **error** Tree Diagram

![Hackolade image](/nse-beta/image92.png?raw=true)

##### 2.1.2.6.3.23.2 **error** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>error</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2fce412d-ae8b-46fe-bd9d-e38c51e78335"></a>2.1.2.6.3.24 Field **hasAttachment**

##### 2.1.2.6.3.24.1 **hasAttachment** Tree Diagram

![Hackolade image](/nse-beta/image93.png?raw=true)

##### 2.1.2.6.3.24.2 **hasAttachment** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>hasAttachment</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5dd4a5d2-28fc-401b-812e-1e8f479f2184"></a>2.1.2.6.3.25 Field **messageId**

##### 2.1.2.6.3.25.1 **messageId** Tree Diagram

![Hackolade image](/nse-beta/image94.png?raw=true)

##### 2.1.2.6.3.25.2 **messageId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>messageId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="47888936-6c6f-4e79-bba3-09fe03d213b6"></a>2.1.2.6.3.26 Field **providerDetails**

##### 2.1.2.6.3.26.1 **providerDetails** Tree Diagram

![Hackolade image](/nse-beta/image95.png?raw=true)

##### 2.1.2.6.3.26.2 **providerDetails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providerDetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Foreign field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providerdetails._id to emailreports.providerDetails</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.6.4 **emailreports** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">domain('text'), group('text'), recipient('text'), sender('text'), status('text'), subject('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

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
        "notificationFrom": {
            "type": "string"
        },
        "notificationTo": {
            "type": [
                "array",
                "string"
            ],
            "items": {
                "type": "string"
            },
            "additionalItems": true
        },
        "domain": {
            "type": "string"
        },
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "group": {
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
        "providerdetails": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "emailProvider": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "error": {
            "type": "string"
        },
        "hasAttachment": {
            "type": "boolean"
        },
        "messageId": {
            "type": "string"
        },
        "providerDetails": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "domain",
        "user",
        "status",
        "sender",
        "recipient",
        "subject",
        "createdAt",
        "updatedAt",
        "__v",
        "error"
    ]
}
```

##### 2.1.2.6.6 **emailreports** JSON data

```
{
    "_id": ObjectId("ed747b3467a2e2ceefb9edfa"),
    "notificationFrom": "mallikarjun@nexweave.co",
    "notificationTo": [
        "Lorem"
    ],
    "domain": "lineagewh.com",
    "user": ObjectId("a608aa2e9bfbb6fcdc45d38f"),
    "group": ObjectId("5857a569ebfd21e101f62c1c"),
    "status": "FAILED",
    "referenceId": "dac7c13d2d864f15a8c241e228d2a8ee",
    "notifiedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "isNotified": true,
    "sender": "noreply@lineagewh.com",
    "recipient": "inbound-reciept@foodimportgroup.com",
    "bounceDetailShort": "Lorem",
    "bounceDetailLong": "Lorem",
    "subject": "Lorem",
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "providerdetails": ObjectId("bb88075410fbeddc5be802db"),
    "emailProvider": ObjectId("c1d81fbf36ace7bf1ed4da05"),
    "error": "Lorem",
    "hasAttachment": false,
    "messageId": "Lorem",
    "providerDetails": ObjectId("9844373b464d64f7ee6cfd79")
}
```

##### 2.1.2.6.7 **emailreports** Target Script

```
use nse-beta;

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
                "notificationFrom": {
                    "bsonType": "string"
                },
                "notificationTo": {
                    "bsonType": [
                        "array",
                        "string"
                    ],
                    "items": {
                        "bsonType": "string"
                    },
                    "additionalItems": true
                },
                "domain": {
                    "bsonType": "string"
                },
                "user": {
                    "bsonType": "objectId"
                },
                "group": {
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
                "createdAt": {
                    "bsonType": "date"
                },
                "updatedAt": {
                    "bsonType": "date"
                },
                "__v": {
                    "bsonType": "int"
                },
                "providerdetails": {
                    "bsonType": "objectId"
                },
                "emailProvider": {
                    "bsonType": "objectId"
                },
                "error": {
                    "bsonType": "string"
                },
                "hasAttachment": {
                    "bsonType": "bool"
                },
                "messageId": {
                    "bsonType": "string"
                },
                "providerDetails": {
                    "bsonType": "objectId"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "domain",
                "user",
                "status",
                "sender",
                "recipient",
                "subject",
                "createdAt",
                "updatedAt",
                "__v",
                "error"
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
    "domain": "text",
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

### <a id="642e7545-b0c8-4fee-8f1d-0b043015b111"></a>2.1.2.7 Collection **events**

##### 2.1.2.7.1 **events** Tree Diagram

![Hackolade image](/nse-beta/image96.png?raw=true)

##### 2.1.2.7.2 **events** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>events</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.7.3 **events** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#71cca463-6cb7-4ffd-8083-da30d9662e77 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47115be6-56fb-4083-888e-d8f536609394 class="margin-0">notificationFrom</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1e8d3ad5-7ee7-419f-9bb3-5ad366b403e9 class="margin-0">notificationTo</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#935c4be2-f2b2-43f2-807c-64fc87e90830 class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#bb6bc88d-ef39-47ac-8c60-11e7776e013d class="margin-0">error</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#877bb75e-e0dc-4227-ab3d-4af3d029c820 class="margin-0">domain</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#feb7ccb7-38eb-4d88-a602-4f787436e469 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cb6601f6-e415-4181-8efe-3be960cb1d72 class="margin-0">emailProvider</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#57fdc429-05c4-4007-8ec8-da48fc7b5156 class="margin-0">status</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#93a8529b-a493-4ce9-98bf-ca4b776ee64a class="margin-0">referenceId</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5d928c88-b7a7-49e8-997e-f8e7750c0a14 class="margin-0">notifiedAt</a></td><td class="no-break-word">null,date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#70e107fe-6908-4a6f-b395-231899171d0c class="margin-0">isNotified</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4c1091a8-0f9f-43bd-9e5b-230e1c1d6973 class="margin-0">sender</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e641a44e-e18b-4128-924c-009b03e274bf class="margin-0">recipient</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#096d7718-9558-404d-b6c3-b2302c7978e3 class="margin-0">bounceDetailShort</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8a4fe815-b03f-43e3-87ed-b99986e3cb0e class="margin-0">bounceDetailLong</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a4ac193c-7dcb-4b90-a51f-d707d93df07f class="margin-0">subject</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e010b977-5305-4d44-af74-70036363e4ce class="margin-0">messageId</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d512b942-8124-4d3f-ba94-01a34b042bc9 class="margin-0">hasAttachment</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d6da5581-0a66-45ac-98eb-0834511ba4c4 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#22a093ea-8463-4b99-be25-e5ee3667dc78 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f5257ffa-d734-4259-a2bc-511a28ca7ffb class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="71cca463-6cb7-4ffd-8083-da30d9662e77"></a>2.1.2.7.3.1 Field **\_id**

##### 2.1.2.7.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image97.png?raw=true)

##### 2.1.2.7.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="47115be6-56fb-4083-888e-d8f536609394"></a>2.1.2.7.3.2 Field **notificationFrom**

##### 2.1.2.7.3.2.1 **notificationFrom** Tree Diagram

![Hackolade image](/nse-beta/image98.png?raw=true)

##### 2.1.2.7.3.2.2 **notificationFrom** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationFrom</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>mallikarjun@nexweave.co</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1e8d3ad5-7ee7-419f-9bb3-5ad366b403e9"></a>2.1.2.7.3.3 Field **notificationTo**

##### 2.1.2.7.3.3.1 **notificationTo** Tree Diagram

![Hackolade image](/nse-beta/image99.png?raw=true)

##### 2.1.2.7.3.3.2 **notificationTo** Hierarchy

Parent field: **events**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#935c4be2-f2b2-43f2-807c-64fc87e90830 class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.7.3.3.3 **notificationTo** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notificationTo</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="935c4be2-f2b2-43f2-807c-64fc87e90830"></a>2.1.2.7.3.4 Field **\[0\]**

##### 2.1.2.7.3.4.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image100.png?raw=true)

##### 2.1.2.7.3.4.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="bb6bc88d-ef39-47ac-8c60-11e7776e013d"></a>2.1.2.7.3.5 Field **error**

##### 2.1.2.7.3.5.1 **error** Tree Diagram

![Hackolade image](/nse-beta/image101.png?raw=true)

##### 2.1.2.7.3.5.2 **error** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>error</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="877bb75e-e0dc-4227-ab3d-4af3d029c820"></a>2.1.2.7.3.6 Field **domain**

##### 2.1.2.7.3.6.1 **domain** Tree Diagram

![Hackolade image](/nse-beta/image102.png?raw=true)

##### 2.1.2.7.3.6.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>lineagewh.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="feb7ccb7-38eb-4d88-a602-4f787436e469"></a>2.1.2.7.3.7 Field **user**

##### 2.1.2.7.3.7.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image103.png?raw=true)

##### 2.1.2.7.3.7.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to events.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cb6601f6-e415-4181-8efe-3be960cb1d72"></a>2.1.2.7.3.8 Field **emailProvider**

##### 2.1.2.7.3.8.1 **emailProvider** Tree Diagram

![Hackolade image](/nse-beta/image104.png?raw=true)

##### 2.1.2.7.3.8.2 **emailProvider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>emailProvider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Foreign field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk emailproviders._id to events.emailProvider</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="57fdc429-05c4-4007-8ec8-da48fc7b5156"></a>2.1.2.7.3.9 Field **status**

##### 2.1.2.7.3.9.1 **status** Tree Diagram

![Hackolade image](/nse-beta/image105.png?raw=true)

##### 2.1.2.7.3.9.2 **status** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>status</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>FAILED</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="93a8529b-a493-4ce9-98bf-ca4b776ee64a"></a>2.1.2.7.3.10 Field **referenceId**

##### 2.1.2.7.3.10.1 **referenceId** Tree Diagram

![Hackolade image](/nse-beta/image106.png?raw=true)

##### 2.1.2.7.3.10.2 **referenceId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>referenceId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>bc39dfb5266c4fa986fe4edbb81a60fc</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5d928c88-b7a7-49e8-997e-f8e7750c0a14"></a>2.1.2.7.3.11 Field **notifiedAt**

##### 2.1.2.7.3.11.1 **notifiedAt** Tree Diagram

![Hackolade image](/nse-beta/image107.png?raw=true)

##### 2.1.2.7.3.11.2 **notifiedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notifiedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>multiple (null,date)</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>null</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr><tr><td></td><td></td></tr></tbody></table>

### <a id="70e107fe-6908-4a6f-b395-231899171d0c"></a>2.1.2.7.3.12 Field **isNotified**

##### 2.1.2.7.3.12.1 **isNotified** Tree Diagram

![Hackolade image](/nse-beta/image108.png?raw=true)

##### 2.1.2.7.3.12.2 **isNotified** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isNotified</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4c1091a8-0f9f-43bd-9e5b-230e1c1d6973"></a>2.1.2.7.3.13 Field **sender**

##### 2.1.2.7.3.13.1 **sender** Tree Diagram

![Hackolade image](/nse-beta/image109.png?raw=true)

##### 2.1.2.7.3.13.2 **sender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>sender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>noreply@lineagewh.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e641a44e-e18b-4128-924c-009b03e274bf"></a>2.1.2.7.3.14 Field **recipient**

##### 2.1.2.7.3.14.1 **recipient** Tree Diagram

![Hackolade image](/nse-beta/image110.png?raw=true)

##### 2.1.2.7.3.14.2 **recipient** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>recipient</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>cgarrido@mcifoods.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="096d7718-9558-404d-b6c3-b2302c7978e3"></a>2.1.2.7.3.15 Field **bounceDetailShort**

##### 2.1.2.7.3.15.1 **bounceDetailShort** Tree Diagram

![Hackolade image](/nse-beta/image111.png?raw=true)

##### 2.1.2.7.3.15.2 **bounceDetailShort** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailShort</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8a4fe815-b03f-43e3-87ed-b99986e3cb0e"></a>2.1.2.7.3.16 Field **bounceDetailLong**

##### 2.1.2.7.3.16.1 **bounceDetailLong** Tree Diagram

![Hackolade image](/nse-beta/image112.png?raw=true)

##### 2.1.2.7.3.16.2 **bounceDetailLong** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bounceDetailLong</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a4ac193c-7dcb-4b90-a51f-d707d93df07f"></a>2.1.2.7.3.17 Field **subject**

##### 2.1.2.7.3.17.1 **subject** Tree Diagram

![Hackolade image](/nse-beta/image113.png?raw=true)

##### 2.1.2.7.3.17.2 **subject** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>subject</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e010b977-5305-4d44-af74-70036363e4ce"></a>2.1.2.7.3.18 Field **messageId**

##### 2.1.2.7.3.18.1 **messageId** Tree Diagram

![Hackolade image](/nse-beta/image114.png?raw=true)

##### 2.1.2.7.3.18.2 **messageId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>messageId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d512b942-8124-4d3f-ba94-01a34b042bc9"></a>2.1.2.7.3.19 Field **hasAttachment**

##### 2.1.2.7.3.19.1 **hasAttachment** Tree Diagram

![Hackolade image](/nse-beta/image115.png?raw=true)

##### 2.1.2.7.3.19.2 **hasAttachment** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>hasAttachment</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d6da5581-0a66-45ac-98eb-0834511ba4c4"></a>2.1.2.7.3.20 Field **createdAt**

##### 2.1.2.7.3.20.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image116.png?raw=true)

##### 2.1.2.7.3.20.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="22a093ea-8463-4b99-be25-e5ee3667dc78"></a>2.1.2.7.3.21 Field **updatedAt**

##### 2.1.2.7.3.21.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image117.png?raw=true)

##### 2.1.2.7.3.21.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f5257ffa-d734-4259-a2bc-511a28ca7ffb"></a>2.1.2.7.3.22 Field **\_\_v**

##### 2.1.2.7.3.22.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image118.png?raw=true)

##### 2.1.2.7.3.22.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.7.4 **events** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">sender_text_recipient_text_domain_text_status_text_subject_text_group_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">domain('text'), recipient('text'), sender('text'), status('text'), subject('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.7.5 **events** JSON Schema

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

##### 2.1.2.7.6 **events** JSON data

```
{
    "_id": ObjectId("589ea9ead39c637f740dceab"),
    "notificationFrom": "mallikarjun@nexweave.co",
    "notificationTo": [
        "Lorem"
    ],
    "error": "Lorem",
    "domain": "lineagewh.com",
    "user": ObjectId("de14ad3bf6f6ffb130480eb8"),
    "emailProvider": ObjectId("a25dc4fff0a4fcbede7eccdd"),
    "status": "FAILED",
    "referenceId": "bc39dfb5266c4fa986fe4edbb81a60fc",
    "notifiedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "isNotified": true,
    "sender": "noreply@lineagewh.com",
    "recipient": "cgarrido@mcifoods.com",
    "bounceDetailShort": "Lorem",
    "bounceDetailLong": "Lorem",
    "subject": "Lorem",
    "messageId": "Lorem",
    "hasAttachment": false,
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.7.7 **events** Target Script

```
use nse-beta;

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

### <a id="2ce8c184-74b8-4517-a222-24b98a0b67c7"></a>2.1.2.8 Collection **notificationssettings**

##### 2.1.2.8.1 **notificationssettings** Tree Diagram

![Hackolade image](/nse-beta/image119.png?raw=true)

##### 2.1.2.8.2 **notificationssettings** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>notificationssettings</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.8.3 **notificationssettings** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#34c431e8-9b60-440c-8167-e24c8481310c class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#10acdb81-3036-4012-b6f1-4775e2c09b76 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ec81aea1-604c-4d36-9b9b-92223eeb87d5 class="margin-0">domain</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#592aca80-6ea9-48b6-be1f-d139aeb44af4 class="margin-0">email</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5904af78-1075-4bc6-9ca6-3d91d548c9e4 class="margin-0">maxNotifications</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#559c8f01-2665-4233-8019-5d930f8b408a class="margin-0">notifyEmails</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9575d46d-28c4-4dbf-8b7f-6cda4f8133be class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c81595bd-1ad5-400a-827f-72abc9288bd5 class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e0fdae5a-60c1-4b24-8102-7beab72b5639 class="margin-0">description</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#725bcd14-db19-47dc-86c4-a3538bac88e8 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#fb454f85-fdaa-4cfd-8d0d-ba9db55db8d9 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#340bb179-241e-4e95-835d-dcb94ea22fe6 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f24173ce-74da-4dbc-9b26-a256455c8721 class="margin-0">isNotifySender</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c64e477c-d454-4e98-b897-693c78742198 class="margin-0">comments</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="34c431e8-9b60-440c-8167-e24c8481310c"></a>2.1.2.8.3.1 Field **\_id**

##### 2.1.2.8.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image120.png?raw=true)

##### 2.1.2.8.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="10acdb81-3036-4012-b6f1-4775e2c09b76"></a>2.1.2.8.3.2 Field **user**

##### 2.1.2.8.3.2.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image121.png?raw=true)

##### 2.1.2.8.3.2.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to notificationssettings.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ec81aea1-604c-4d36-9b9b-92223eeb87d5"></a>2.1.2.8.3.3 Field **domain**

##### 2.1.2.8.3.3.1 **domain** Tree Diagram

![Hackolade image](/nse-beta/image122.png?raw=true)

##### 2.1.2.8.3.3.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>lineagewh.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="592aca80-6ea9-48b6-be1f-d139aeb44af4"></a>2.1.2.8.3.4 Field **email**

##### 2.1.2.8.3.4.1 **email** Tree Diagram

![Hackolade image](/nse-beta/image123.png?raw=true)

##### 2.1.2.8.3.4.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5904af78-1075-4bc6-9ca6-3d91d548c9e4"></a>2.1.2.8.3.5 Field **maxNotifications**

##### 2.1.2.8.3.5.1 **maxNotifications** Tree Diagram

![Hackolade image](/nse-beta/image124.png?raw=true)

##### 2.1.2.8.3.5.2 **maxNotifications** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>maxNotifications</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>1000</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="559c8f01-2665-4233-8019-5d930f8b408a"></a>2.1.2.8.3.6 Field **notifyEmails**

##### 2.1.2.8.3.6.1 **notifyEmails** Tree Diagram

![Hackolade image](/nse-beta/image125.png?raw=true)

##### 2.1.2.8.3.6.2 **notifyEmails** Hierarchy

Parent field: **notificationssettings**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#9575d46d-28c4-4dbf-8b7f-6cda4f8133be class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.8.3.6.3 **notifyEmails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>notifyEmails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9575d46d-28c4-4dbf-8b7f-6cda4f8133be"></a>2.1.2.8.3.7 Field **\[0\]**

##### 2.1.2.8.3.7.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image126.png?raw=true)

##### 2.1.2.8.3.7.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>surajkadam98.dev@gmail.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c81595bd-1ad5-400a-827f-72abc9288bd5"></a>2.1.2.8.3.8 Field **isActive**

##### 2.1.2.8.3.8.1 **isActive** Tree Diagram

![Hackolade image](/nse-beta/image127.png?raw=true)

##### 2.1.2.8.3.8.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e0fdae5a-60c1-4b24-8102-7beab72b5639"></a>2.1.2.8.3.9 Field **description**

##### 2.1.2.8.3.9.1 **description** Tree Diagram

![Hackolade image](/nse-beta/image128.png?raw=true)

##### 2.1.2.8.3.9.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="725bcd14-db19-47dc-86c4-a3538bac88e8"></a>2.1.2.8.3.10 Field **createdAt**

##### 2.1.2.8.3.10.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image129.png?raw=true)

##### 2.1.2.8.3.10.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="fb454f85-fdaa-4cfd-8d0d-ba9db55db8d9"></a>2.1.2.8.3.11 Field **updatedAt**

##### 2.1.2.8.3.11.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image130.png?raw=true)

##### 2.1.2.8.3.11.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="340bb179-241e-4e95-835d-dcb94ea22fe6"></a>2.1.2.8.3.12 Field **\_\_v**

##### 2.1.2.8.3.12.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image131.png?raw=true)

##### 2.1.2.8.3.12.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f24173ce-74da-4dbc-9b26-a256455c8721"></a>2.1.2.8.3.13 Field **isNotifySender**

##### 2.1.2.8.3.13.1 **isNotifySender** Tree Diagram

![Hackolade image](/nse-beta/image132.png?raw=true)

##### 2.1.2.8.3.13.2 **isNotifySender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isNotifySender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c64e477c-d454-4e98-b897-693c78742198"></a>2.1.2.8.3.14 Field **comments**

##### 2.1.2.8.3.14.1 **comments** Tree Diagram

![Hackolade image](/nse-beta/image133.png?raw=true)

##### 2.1.2.8.3.14.2 **comments** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>comments</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.8.4 **notificationssettings** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.8.5 **notificationssettings** JSON Schema

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
        "user": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "domain": {
            "type": "string"
        },
        "email": {
            "type": "string"
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
        "isNotifySender": {
            "type": "boolean"
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
        "email",
        "maxNotifications",
        "notifyEmails",
        "isActive",
        "createdAt",
        "updatedAt",
        "__v",
        "isNotifySender"
    ]
}
```

##### 2.1.2.8.6 **notificationssettings** JSON data

```
{
    "_id": ObjectId("c9a546e731efee25eb7b907a"),
    "user": ObjectId("bdf898bdbad3dbdebfc8df00"),
    "domain": "lineagewh.com",
    "email": "Lorem",
    "maxNotifications": Int32(1000),
    "notifyEmails": [
        "surajkadam98.dev@gmail.com"
    ],
    "isActive": true,
    "description": "Lorem",
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "isNotifySender": false,
    "comments": "Lorem"
}
```

##### 2.1.2.8.7 **notificationssettings** Target Script

```
use nse-beta;

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
                "user": {
                    "bsonType": "objectId"
                },
                "domain": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
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
                "isNotifySender": {
                    "bsonType": "bool"
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
                "email",
                "maxNotifications",
                "notifyEmails",
                "isActive",
                "createdAt",
                "updatedAt",
                "__v",
                "isNotifySender"
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

### <a id="b9d447d6-b3d6-4848-a8c9-c9d49f171a9a"></a>2.1.2.9 Collection **providerdetails**

##### 2.1.2.9.1 **providerdetails** Tree Diagram

![Hackolade image](/nse-beta/image134.png?raw=true)

##### 2.1.2.9.2 **providerdetails** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>providerdetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.9.3 **providerdetails** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#153cdf7e-0396-4966-909b-bb43d039fa4b class="margin-0">provider</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#460cee3a-31c8-4201-b0e4-a108db19438e class="margin-0">connectionType</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cf448c74-de6d-440a-a489-2c1cbc7a31ed class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#29f20897-8fec-4710-ba80-5337b3631a73 class="margin-0">apiDetails</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4d5fc494-aac8-4ebb-a1ed-1d1e5c0fef72 class="margin-5">displayName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#583d551b-3018-480e-92aa-fb5ca20f95a9 class="margin-5">apiKey</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#04c92218-b030-4eb2-be38-cecb9ba23fe3 class="margin-5">domainName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#49af3084-8d44-4e75-b629-dc0d1b21ee5f class="margin-5">serverId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#244f03d1-8b92-43a8-86a2-c28d1d67f8ed class="margin-0">configuration</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#629d49ac-688e-4287-9faa-2d0d18a5ace3 class="margin-5">monthlyMailLimit</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47c72379-b14e-41dd-989e-0fe6bae6de2f class="margin-5">dailyMailLimit</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9b803c41-6b61-4705-9332-35a311b09df9 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#069728aa-22cd-4fc4-9dcd-29c3b202d868 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1b94d364-a9cb-4951-8cdd-c682aa36bb5a class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#644a781d-093c-4fed-a0c7-c927d6790a9e class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c3453fec-b4d0-46a7-b5f5-d4424d0fcb09"></a>2.1.2.9.3.1 Field **\_id**

##### 2.1.2.9.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image135.png?raw=true)

##### 2.1.2.9.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="153cdf7e-0396-4966-909b-bb43d039fa4b"></a>2.1.2.9.3.2 Field **provider**

##### 2.1.2.9.3.2.1 **provider** Tree Diagram

![Hackolade image](/nse-beta/image136.png?raw=true)

##### 2.1.2.9.3.2.2 **provider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>provider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Foreign field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk emailproviders._id to providerdetails.provider</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="460cee3a-31c8-4201-b0e4-a108db19438e"></a>2.1.2.9.3.3 Field **connectionType**

##### 2.1.2.9.3.3.1 **connectionType** Tree Diagram

![Hackolade image](/nse-beta/image137.png?raw=true)

##### 2.1.2.9.3.3.2 **connectionType** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>connectionType</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>API</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cf448c74-de6d-440a-a489-2c1cbc7a31ed"></a>2.1.2.9.3.4 Field **isActive**

##### 2.1.2.9.3.4.1 **isActive** Tree Diagram

![Hackolade image](/nse-beta/image138.png?raw=true)

##### 2.1.2.9.3.4.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="29f20897-8fec-4710-ba80-5337b3631a73"></a>2.1.2.9.3.5 Field **apiDetails**

##### 2.1.2.9.3.5.1 **apiDetails** Tree Diagram

![Hackolade image](/nse-beta/image139.png?raw=true)

##### 2.1.2.9.3.5.2 **apiDetails** Hierarchy

Parent field: **providerdetails**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#4d5fc494-aac8-4ebb-a1ed-1d1e5c0fef72 class="margin-NaN">displayName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#583d551b-3018-480e-92aa-fb5ca20f95a9 class="margin-NaN">apiKey</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#04c92218-b030-4eb2-be38-cecb9ba23fe3 class="margin-NaN">domainName</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#49af3084-8d44-4e75-b629-dc0d1b21ee5f class="margin-NaN">serverId</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.9.3.5.3 **apiDetails** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>apiDetails</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4d5fc494-aac8-4ebb-a1ed-1d1e5c0fef72"></a>2.1.2.9.3.6 Field **displayName**

##### 2.1.2.9.3.6.1 **displayName** Tree Diagram

![Hackolade image](/nse-beta/image140.png?raw=true)

##### 2.1.2.9.3.6.2 **displayName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>displayName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Sendinblue</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="583d551b-3018-480e-92aa-fb5ca20f95a9"></a>2.1.2.9.3.7 Field **apiKey**

##### 2.1.2.9.3.7.1 **apiKey** Tree Diagram

![Hackolade image](/nse-beta/image141.png?raw=true)

##### 2.1.2.9.3.7.2 **apiKey** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>apiKey</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>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</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="04c92218-b030-4eb2-be38-cecb9ba23fe3"></a>2.1.2.9.3.8 Field **domainName**

##### 2.1.2.9.3.8.1 **domainName** Tree Diagram

![Hackolade image](/nse-beta/image142.png?raw=true)

##### 2.1.2.9.3.8.2 **domainName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domainName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="49af3084-8d44-4e75-b629-dc0d1b21ee5f"></a>2.1.2.9.3.9 Field **serverId**

##### 2.1.2.9.3.9.1 **serverId** Tree Diagram

![Hackolade image](/nse-beta/image143.png?raw=true)

##### 2.1.2.9.3.9.2 **serverId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>serverId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>44744</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="244f03d1-8b92-43a8-86a2-c28d1d67f8ed"></a>2.1.2.9.3.10 Field **configuration**

##### 2.1.2.9.3.10.1 **configuration** Tree Diagram

![Hackolade image](/nse-beta/image144.png?raw=true)

##### 2.1.2.9.3.10.2 **configuration** Hierarchy

Parent field: **providerdetails**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#629d49ac-688e-4287-9faa-2d0d18a5ace3 class="margin-NaN">monthlyMailLimit</a></td><td class="no-break-word">numeric</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47c72379-b14e-41dd-989e-0fe6bae6de2f class="margin-NaN">dailyMailLimit</a></td><td class="no-break-word">numeric</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.9.3.10.3 **configuration** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>configuration</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="629d49ac-688e-4287-9faa-2d0d18a5ace3"></a>2.1.2.9.3.11 Field **monthlyMailLimit**

##### 2.1.2.9.3.11.1 **monthlyMailLimit** Tree Diagram

![Hackolade image](/nse-beta/image145.png?raw=true)

##### 2.1.2.9.3.11.2 **monthlyMailLimit** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>monthlyMailLimit</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>500</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="47c72379-b14e-41dd-989e-0fe6bae6de2f"></a>2.1.2.9.3.12 Field **dailyMailLimit**

##### 2.1.2.9.3.12.1 **dailyMailLimit** Tree Diagram

![Hackolade image](/nse-beta/image146.png?raw=true)

##### 2.1.2.9.3.12.2 **dailyMailLimit** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>dailyMailLimit</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>500</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9b803c41-6b61-4705-9332-35a311b09df9"></a>2.1.2.9.3.13 Field **user**

##### 2.1.2.9.3.13.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image147.png?raw=true)

##### 2.1.2.9.3.13.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to providerdetails.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="069728aa-22cd-4fc4-9dcd-29c3b202d868"></a>2.1.2.9.3.14 Field **createdAt**

##### 2.1.2.9.3.14.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image148.png?raw=true)

##### 2.1.2.9.3.14.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1b94d364-a9cb-4951-8cdd-c682aa36bb5a"></a>2.1.2.9.3.15 Field **updatedAt**

##### 2.1.2.9.3.15.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image149.png?raw=true)

##### 2.1.2.9.3.15.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="644a781d-093c-4fed-a0c7-c927d6790a9e"></a>2.1.2.9.3.16 Field **\_\_v**

##### 2.1.2.9.3.16.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image150.png?raw=true)

##### 2.1.2.9.3.16.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.9.4 **providerdetails** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.9.5 **providerdetails** JSON Schema

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
        "isActive": {
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
                "domainName": {
                    "type": "string"
                },
                "serverId": {
                    "type": "string"
                }
            },
            "additionalProperties": true,
            "required": [
                "displayName",
                "apiKey"
            ]
        },
        "configuration": {
            "type": "object",
            "properties": {
                "monthlyMailLimit": {
                    "type": "integer"
                },
                "dailyMailLimit": {
                    "type": "integer"
                }
            },
            "additionalProperties": true,
            "required": [
                "monthlyMailLimit",
                "dailyMailLimit"
            ]
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
        "provider",
        "connectionType",
        "isActive",
        "apiDetails",
        "configuration",
        "user",
        "createdAt",
        "updatedAt",
        "__v"
    ]
}
```

##### 2.1.2.9.6 **providerdetails** JSON data

```
{
    "_id": ObjectId("52176cf397f6fdeb1abc4fcb"),
    "provider": ObjectId("ee9b59ea6fb5ed8c96306fde"),
    "connectionType": "API",
    "isActive": true,
    "apiDetails": {
        "displayName": "Sendinblue",
        "apiKey": "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",
        "domainName": "sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
        "serverId": "44744"
    },
    "configuration": {
        "monthlyMailLimit": Int32(500),
        "dailyMailLimit": Int32(500)
    },
    "user": ObjectId("bfe5ebe490acfbea06ad3fbb"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.9.7 **providerdetails** Target Script

```
use nse-beta;

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
                "isActive": {
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
                        "domainName": {
                            "bsonType": "string"
                        },
                        "serverId": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "displayName",
                        "apiKey"
                    ]
                },
                "configuration": {
                    "bsonType": "object",
                    "properties": {
                        "monthlyMailLimit": {
                            "bsonType": "int"
                        },
                        "dailyMailLimit": {
                            "bsonType": "int"
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "monthlyMailLimit",
                        "dailyMailLimit"
                    ]
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
                "provider",
                "connectionType",
                "isActive",
                "apiDetails",
                "configuration",
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

### <a id="90011552-0886-4828-bd16-a5374affc7dc"></a>2.1.2.10 Collection **providergroups**

##### 2.1.2.10.1 **providergroups** Tree Diagram

![Hackolade image](/nse-beta/image151.png?raw=true)

##### 2.1.2.10.2 **providergroups** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>providergroups</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.10.3 **providergroups** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#0602e2b4-5e65-4d24-bcec-e7841a766bb4 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b816cb37-06bc-455e-8d30-0a555c2ac1ff class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cfbc6ced-eb2f-4802-9c30-366d7f232ad8 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d20d41c8-829b-4c11-af3e-c62aa1704f67 class="margin-0">domain</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#83ef5f2e-dc31-41a4-9e4d-4cd1f61e5da3 class="margin-5">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0a0e6300-043e-4e24-9bfe-552a369bd47a class="margin-0">providers</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4be71bbb-6827-44f8-8517-ae09545e421b class="margin-5">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3844b0f6-7775-46f4-9dca-c6e338c4cdd9 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#51f5d5bf-e9e8-4989-9d77-6658c8534dea class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#eb8b128f-b6e1-4eb5-921d-a7b2c4992b19 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0602e2b4-5e65-4d24-bcec-e7841a766bb4"></a>2.1.2.10.3.1 Field **\_id**

##### 2.1.2.10.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image152.png?raw=true)

##### 2.1.2.10.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b816cb37-06bc-455e-8d30-0a555c2ac1ff"></a>2.1.2.10.3.2 Field **name**

##### 2.1.2.10.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-beta/image153.png?raw=true)

##### 2.1.2.10.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Nxwv 1</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cfbc6ced-eb2f-4802-9c30-366d7f232ad8"></a>2.1.2.10.3.3 Field **user**

##### 2.1.2.10.3.3.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image154.png?raw=true)

##### 2.1.2.10.3.3.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to providergroups.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d20d41c8-829b-4c11-af3e-c62aa1704f67"></a>2.1.2.10.3.4 Field **domain**

##### 2.1.2.10.3.4.1 **domain** Tree Diagram

![Hackolade image](/nse-beta/image155.png?raw=true)

##### 2.1.2.10.3.4.2 **domain** Hierarchy

Parent field: **providergroups**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#83ef5f2e-dc31-41a4-9e4d-4cd1f61e5da3 class="margin-NaN">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.10.3.4.3 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="83ef5f2e-dc31-41a4-9e4d-4cd1f61e5da3"></a>2.1.2.10.3.5 Field **\[0\]**

##### 2.1.2.10.3.5.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image156.png?raw=true)

##### 2.1.2.10.3.5.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td></tr><tr><td>Foreign field</td><td><a href=#c08c29f6-a449-497c-83f2-fb333e500f7e>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk domains._id to providergroups.domain.0</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0a0e6300-043e-4e24-9bfe-552a369bd47a"></a>2.1.2.10.3.6 Field **providers**

##### 2.1.2.10.3.6.1 **providers** Tree Diagram

![Hackolade image](/nse-beta/image157.png?raw=true)

##### 2.1.2.10.3.6.2 **providers** Hierarchy

Parent field: **providergroups**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#4be71bbb-6827-44f8-8517-ae09545e421b class="margin-NaN">[0]</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.10.3.6.3 **providers** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>providers</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td><span>Quantification</span></td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4be71bbb-6827-44f8-8517-ae09545e421b"></a>2.1.2.10.3.7 Field **\[0\]**

##### 2.1.2.10.3.7.1 **\[0\]** Tree Diagram

![Hackolade image](/nse-beta/image158.png?raw=true)

##### 2.1.2.10.3.7.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Foreign field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk providerdetails._id to providergroups.providers.0</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3844b0f6-7775-46f4-9dca-c6e338c4cdd9"></a>2.1.2.10.3.8 Field **createdAt**

##### 2.1.2.10.3.8.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image159.png?raw=true)

##### 2.1.2.10.3.8.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="51f5d5bf-e9e8-4989-9d77-6658c8534dea"></a>2.1.2.10.3.9 Field **updatedAt**

##### 2.1.2.10.3.9.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image160.png?raw=true)

##### 2.1.2.10.3.9.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="eb8b128f-b6e1-4eb5-921d-a7b2c4992b19"></a>2.1.2.10.3.10 Field **\_\_v**

##### 2.1.2.10.3.10.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image161.png?raw=true)

##### 2.1.2.10.3.10.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.10.4 **providergroups** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td><td class="table-column-property">name_text</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td><td class="table-column-indexes">name_text</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td><td class="table-column-indexes">name('text')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td><td class="table-column-indexes">true</td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.10.5 **providergroups** JSON Schema

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

##### 2.1.2.10.6 **providergroups** JSON data

```
{
    "_id": ObjectId("75e0ffbecadffef503ccaf30"),
    "name": "Nxwv 1",
    "user": ObjectId("765dff48fdaf6c428fd1bd2f"),
    "domain": [
        ObjectId("fbb9bb8d32eb3be153aaddca")
    ],
    "providers": [
        ObjectId("ddef6913cedae7646df7cd3e")
    ],
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0)
}
```

##### 2.1.2.10.7 **providergroups** Target Script

```
use nse-beta;

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

### <a id="374495c2-8ca2-4c2c-82cb-7b6567461ab3"></a>2.1.2.11 Collection **smsotps**

##### 2.1.2.11.1 **smsotps** Tree Diagram

![Hackolade image](/nse-beta/image162.png?raw=true)

##### 2.1.2.11.2 **smsotps** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>smsotps</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.11.3 **smsotps** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody></tbody></table>

##### 2.1.2.11.4 **smsotps** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "smsotps",
    "additionalProperties": true
}
```

##### 2.1.2.11.5 **smsotps** JSON data

```
{}
```

##### 2.1.2.11.6 **smsotps** Target Script

```
use nse-beta;

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

### <a id="a37508f8-c1be-4cfa-9db3-f0a1f3a75af0"></a>2.1.2.12 Collection **users**

##### 2.1.2.12.1 **users** Tree Diagram

![Hackolade image](/nse-beta/image163.png?raw=true)

##### 2.1.2.12.2 **users** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>users</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.12.3 **users** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#22e4ce81-275e-4e97-b4bb-faa715406256 class="margin-0">firstName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a7af63e1-c0c9-4591-bd3f-5eee7f0f9f01 class="margin-0">lastName</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#bf95ab3b-d337-4bc0-a8ff-0d244dc646f6 class="margin-0">email</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7c23dcb4-c75c-4f03-8d24-8ecf23e821ee class="margin-0">phone</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c35d5419-1b0f-4126-bd28-8c900a652f93 class="margin-0">dialCode</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#865011f8-7f25-40db-9d72-6e5b4df940bc class="margin-0">profileImage</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#12ccfbc3-ef83-4fd7-a71d-8ef4d21763b2 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5df244c0-a8e0-4963-badb-d1557558bee8"></a>2.1.2.12.3.1 Field **\_id**

##### 2.1.2.12.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image164.png?raw=true)

##### 2.1.2.12.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="22e4ce81-275e-4e97-b4bb-faa715406256"></a>2.1.2.12.3.2 Field **firstName**

##### 2.1.2.12.3.2.1 **firstName** Tree Diagram

![Hackolade image](/nse-beta/image165.png?raw=true)

##### 2.1.2.12.3.2.2 **firstName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>firstName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a7af63e1-c0c9-4591-bd3f-5eee7f0f9f01"></a>2.1.2.12.3.3 Field **lastName**

##### 2.1.2.12.3.3.1 **lastName** Tree Diagram

![Hackolade image](/nse-beta/image166.png?raw=true)

##### 2.1.2.12.3.3.2 **lastName** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>lastName</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="bf95ab3b-d337-4bc0-a8ff-0d244dc646f6"></a>2.1.2.12.3.4 Field **email**

##### 2.1.2.12.3.4.1 **email** Tree Diagram

![Hackolade image](/nse-beta/image167.png?raw=true)

##### 2.1.2.12.3.4.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>rushiraj@nexweave.com</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7c23dcb4-c75c-4f03-8d24-8ecf23e821ee"></a>2.1.2.12.3.5 Field **phone**

##### 2.1.2.12.3.5.1 **phone** Tree Diagram

![Hackolade image](/nse-beta/image168.png?raw=true)

##### 2.1.2.12.3.5.2 **phone** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>phone</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c35d5419-1b0f-4126-bd28-8c900a652f93"></a>2.1.2.12.3.6 Field **dialCode**

##### 2.1.2.12.3.6.1 **dialCode** Tree Diagram

![Hackolade image](/nse-beta/image169.png?raw=true)

##### 2.1.2.12.3.6.2 **dialCode** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>dialCode</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="865011f8-7f25-40db-9d72-6e5b4df940bc"></a>2.1.2.12.3.7 Field **profileImage**

##### 2.1.2.12.3.7.1 **profileImage** Tree Diagram

![Hackolade image](/nse-beta/image170.png?raw=true)

##### 2.1.2.12.3.7.2 **profileImage** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>profileImage</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>https://ui-avatars.com/api/?name=rushiraj&amp;size=128</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="12ccfbc3-ef83-4fd7-a71d-8ef4d21763b2"></a>2.1.2.12.3.8 Field **\_\_v**

##### 2.1.2.12.3.8.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image171.png?raw=true)

##### 2.1.2.12.3.8.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.12.4 **users** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.12.5 **users** JSON Schema

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
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "dialCode": {
            "type": "string"
        },
        "profileImage": {
            "type": "string"
        },
        "__v": {
            "type": "integer"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "firstName",
        "lastName",
        "email",
        "phone",
        "dialCode",
        "profileImage",
        "__v"
    ]
}
```

##### 2.1.2.12.6 **users** JSON data

```
{
    "_id": ObjectId("6a64cbdfbc627e4019faa8f5"),
    "firstName": "Lorem",
    "lastName": "Lorem",
    "email": "rushiraj@nexweave.com",
    "phone": "Lorem",
    "dialCode": "Lorem",
    "profileImage": "https://ui-avatars.com/api/?name=rushiraj&size=128",
    "__v": Int32(0)
}
```

##### 2.1.2.12.7 **users** Target Script

```
use nse-beta;

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
                "firstName": {
                    "bsonType": "string"
                },
                "lastName": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "phone": {
                    "bsonType": "string"
                },
                "dialCode": {
                    "bsonType": "string"
                },
                "profileImage": {
                    "bsonType": "string"
                },
                "__v": {
                    "bsonType": "int"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "firstName",
                "lastName",
                "email",
                "phone",
                "dialCode",
                "profileImage",
                "__v"
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

### <a id="ee28d1f1-9e22-41fa-be97-826659a14baf"></a>2.1.2.13 Collection **webhooks**

##### 2.1.2.13.1 **webhooks** Tree Diagram

![Hackolade image](/nse-beta/image172.png?raw=true)

##### 2.1.2.13.2 **webhooks** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>webhooks</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#20a3d522-6352-4201-af49-d112a69a79d5><span class="name-container">nse-beta</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td colspan="2"><b>Workload analysis</b></td></tr><tr><td>[1] Actor</td><td></td></tr><tr><td>Description</td><td></td></tr><tr><td>Number of documents</td><td></td></tr><tr><td>Avg document size (Bytes)</td><td></td></tr><tr><td>Read-to-Write ratio</td><td></td></tr><tr><td>Keep forever</td><td></td></tr><tr><td>Retention (months)</td><td></td></tr><tr><td>Write operations</td><td></td></tr><tr><td>Read operations</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.13.3 **webhooks** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#32b18254-e99e-4346-aa94-7f25398769a5 class="margin-0">_id</a></td><td class="no-break-word">string</td><td>true</td><td>pk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a936b5cf-6cab-4fb0-aff3-068cac5680ab class="margin-0">name</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3bf7ecfa-134c-47db-a2cd-a8f4a6eaab5a class="margin-0">domain</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#97cbdf59-f397-427c-9aa8-304a49a52aa6 class="margin-0">configurations</a></td><td class="no-break-word">document</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#86ced505-a4fa-414b-b5e0-79cb1c937dc0 class="margin-5">isDelivered</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#abceb15e-9545-4bdb-8ef1-f7828ccac7e2 class="margin-5">isBounced</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d9fc0d3b-344f-4da9-9835-94f1a6a1cf4d class="margin-5">isDropped</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7e73177e-c608-4842-be07-7eb5c0e51368 class="margin-5">isFailed</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0380ba2b-6d67-41bd-942a-9f76a420b709 class="margin-5">isDeferred</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f2ce532d-0d82-4c54-b5e4-8b8e026d2578 class="margin-0">user</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cc0c35f3-c619-439f-87e3-03574dd3e1a3 class="margin-0">createdAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7d082074-35c0-4774-9cb9-9c21ce1ee867 class="margin-0">updatedAt</a></td><td class="no-break-word">date</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b0ea9b8d-751c-4cf6-8ec3-41f40976f5b6 class="margin-0">__v</a></td><td class="no-break-word">integer32</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c9bb503d-b8e8-4f8a-b20f-e907d4644375 class="margin-0">accountId</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#627df653-5a6e-47b1-9acb-77f0cd07c1dc class="margin-0">description</a></td><td class="no-break-word">string</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#334a7698-cc37-485a-aca1-66b73f27cf75 class="margin-0">provider</a></td><td class="no-break-word">objectId</td><td>true</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#24a70cc2-00b6-4348-934b-1f9f2ad07159 class="margin-0">isActive</a></td><td class="no-break-word">boolean</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="32b18254-e99e-4346-aa94-7f25398769a5"></a>2.1.2.13.3.1 Field **\_id**

##### 2.1.2.13.3.1.1 **\_id** Tree Diagram

![Hackolade image](/nse-beta/image173.png?raw=true)

##### 2.1.2.13.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>ZEqFNC43Ckh9</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a936b5cf-6cab-4fb0-aff3-068cac5680ab"></a>2.1.2.13.3.2 Field **name**

##### 2.1.2.13.3.2.1 **name** Tree Diagram

![Hackolade image](/nse-beta/image174.png?raw=true)

##### 2.1.2.13.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Beck Mandrill</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3bf7ecfa-134c-47db-a2cd-a8f4a6eaab5a"></a>2.1.2.13.3.3 Field **domain**

##### 2.1.2.13.3.3.1 **domain** Tree Diagram

![Hackolade image](/nse-beta/image175.png?raw=true)

##### 2.1.2.13.3.3.2 **domain** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>domain</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>sandbox272d9473b7db4eb88c923824f923961e.mailgun.org</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="97cbdf59-f397-427c-9aa8-304a49a52aa6"></a>2.1.2.13.3.4 Field **configurations**

##### 2.1.2.13.3.4.1 **configurations** Tree Diagram

![Hackolade image](/nse-beta/image176.png?raw=true)

##### 2.1.2.13.3.4.2 **configurations** Hierarchy

Parent field: **webhooks**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#86ced505-a4fa-414b-b5e0-79cb1c937dc0 class="margin-NaN">isDelivered</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#abceb15e-9545-4bdb-8ef1-f7828ccac7e2 class="margin-NaN">isBounced</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d9fc0d3b-344f-4da9-9835-94f1a6a1cf4d class="margin-NaN">isDropped</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7e73177e-c608-4842-be07-7eb5c0e51368 class="margin-NaN">isFailed</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0380ba2b-6d67-41bd-942a-9f76a420b709 class="margin-NaN">isDeferred</a></td><td class="no-break-word">boolean</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.13.3.4.3 **configurations** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>configurations</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="86ced505-a4fa-414b-b5e0-79cb1c937dc0"></a>2.1.2.13.3.5 Field **isDelivered**

##### 2.1.2.13.3.5.1 **isDelivered** Tree Diagram

![Hackolade image](/nse-beta/image177.png?raw=true)

##### 2.1.2.13.3.5.2 **isDelivered** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isDelivered</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="abceb15e-9545-4bdb-8ef1-f7828ccac7e2"></a>2.1.2.13.3.6 Field **isBounced**

##### 2.1.2.13.3.6.1 **isBounced** Tree Diagram

![Hackolade image](/nse-beta/image178.png?raw=true)

##### 2.1.2.13.3.6.2 **isBounced** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isBounced</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d9fc0d3b-344f-4da9-9835-94f1a6a1cf4d"></a>2.1.2.13.3.7 Field **isDropped**

##### 2.1.2.13.3.7.1 **isDropped** Tree Diagram

![Hackolade image](/nse-beta/image179.png?raw=true)

##### 2.1.2.13.3.7.2 **isDropped** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isDropped</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7e73177e-c608-4842-be07-7eb5c0e51368"></a>2.1.2.13.3.8 Field **isFailed**

##### 2.1.2.13.3.8.1 **isFailed** Tree Diagram

![Hackolade image](/nse-beta/image180.png?raw=true)

##### 2.1.2.13.3.8.2 **isFailed** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isFailed</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0380ba2b-6d67-41bd-942a-9f76a420b709"></a>2.1.2.13.3.9 Field **isDeferred**

##### 2.1.2.13.3.9.1 **isDeferred** Tree Diagram

![Hackolade image](/nse-beta/image181.png?raw=true)

##### 2.1.2.13.3.9.2 **isDeferred** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isDeferred</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f2ce532d-0d82-4c54-b5e4-8b8e026d2578"></a>2.1.2.13.3.10 Field **user**

##### 2.1.2.13.3.10.1 **user** Tree Diagram

![Hackolade image](/nse-beta/image182.png?raw=true)

##### 2.1.2.13.3.10.2 **user** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Foreign field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users._id to webhooks.user</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cc0c35f3-c619-439f-87e3-03574dd3e1a3"></a>2.1.2.13.3.11 Field **createdAt**

##### 2.1.2.13.3.11.1 **createdAt** Tree Diagram

![Hackolade image](/nse-beta/image183.png?raw=true)

##### 2.1.2.13.3.11.2 **createdAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>createdAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7d082074-35c0-4774-9cb9-9c21ce1ee867"></a>2.1.2.13.3.12 Field **updatedAt**

##### 2.1.2.13.3.12.1 **updatedAt** Tree Diagram

![Hackolade image](/nse-beta/image184.png?raw=true)

##### 2.1.2.13.3.12.2 **updatedAt** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updatedAt</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b0ea9b8d-751c-4cf6-8ec3-41f40976f5b6"></a>2.1.2.13.3.13 Field **\_\_v**

##### 2.1.2.13.3.13.1 **\_\_v** Tree Diagram

![Hackolade image](/nse-beta/image185.png?raw=true)

##### 2.1.2.13.3.13.2 **\_\_v** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>__v</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td>integer32</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>0</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c9bb503d-b8e8-4f8a-b20f-e907d4644375"></a>2.1.2.13.3.14 Field **accountId**

##### 2.1.2.13.3.14.1 **accountId** Tree Diagram

![Hackolade image](/nse-beta/image186.png?raw=true)

##### 2.1.2.13.3.14.2 **accountId** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>accountId</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="627df653-5a6e-47b1-9acb-77f0cd07c1dc"></a>2.1.2.13.3.15 Field **description**

##### 2.1.2.13.3.15.1 **description** Tree Diagram

![Hackolade image](/nse-beta/image187.png?raw=true)

##### 2.1.2.13.3.15.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Beck's Main Mandrill Account.</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="334a7698-cc37-485a-aca1-66b73f27cf75"></a>2.1.2.13.3.16 Field **provider**

##### 2.1.2.13.3.16.1 **provider** Tree Diagram

![Hackolade image](/nse-beta/image188.png?raw=true)

##### 2.1.2.13.3.16.2 **provider** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>provider</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Foreign field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk emailproviders._id to webhooks.provider</td></tr><tr><td>Cardinality</td><td>0..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="24a70cc2-00b6-4348-934b-1f9f2ad07159"></a>2.1.2.13.3.17 Field **isActive**

##### 2.1.2.13.3.17.1 **isActive** Tree Diagram

![Hackolade image](/nse-beta/image189.png?raw=true)

##### 2.1.2.13.3.17.2 **isActive** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>isActive</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>boolean</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>false</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.13.4 **webhooks** Indexes

<table class="index-table"><thead><tr><td class="table-property-column">Property</td><td class="table-column-property">_id_</td></tr></thead><tbody><tr><td>Name</td><td class="table-column-indexes">_id_</td></tr><tr><td>Activated</td><td class="table-column-indexes"></td></tr><tr><td>Key</td><td class="table-column-indexes">_id('ascending')</td></tr><tr><td>Wildcard index</td><td class="table-column-indexes"></td></tr><tr><td>Hashed</td><td class="table-column-indexes"></td></tr><tr><td>Unique</td><td class="table-column-indexes"></td></tr><tr><td>Drop duplicates</td><td class="table-column-indexes"></td></tr><tr><td>Sparse</td><td class="table-column-indexes"></td></tr><tr><td>Background indexing</td><td class="table-column-indexes"></td></tr><tr><td>Partial filter exp</td><td class="table-column-indexes"></td></tr><tr><td>Expire after (seconds)</td><td class="table-column-indexes"></td></tr><tr><td>Storage engine</td><td class="table-column-indexes"></td></tr><tr><td>Comments</td><td class="table-column-indexes"></td></tr></tbody></table>

##### 2.1.2.13.5 **webhooks** JSON Schema

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
        "domain": {
            "type": "string"
        },
        "configurations": {
            "type": "object",
            "properties": {
                "isDelivered": {
                    "type": "boolean"
                },
                "isBounced": {
                    "type": "boolean"
                },
                "isDropped": {
                    "type": "boolean"
                },
                "isFailed": {
                    "type": "boolean"
                },
                "isDeferred": {
                    "type": "boolean"
                }
            },
            "additionalProperties": true,
            "required": [
                "isDelivered",
                "isBounced",
                "isDropped",
                "isFailed",
                "isDeferred"
            ]
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
        "accountId": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "provider": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "isActive": {
            "type": "boolean"
        }
    },
    "additionalProperties": true,
    "required": [
        "_id",
        "name",
        "configurations",
        "user",
        "createdAt",
        "updatedAt",
        "__v",
        "accountId",
        "description",
        "provider"
    ]
}
```

##### 2.1.2.13.6 **webhooks** JSON data

```
{
    "_id": "ZEqFNC43Ckh9",
    "name": "Beck Mandrill",
    "domain": "sandbox272d9473b7db4eb88c923824f923961e.mailgun.org",
    "configurations": {
        "isDelivered": false,
        "isBounced": true,
        "isDropped": true,
        "isFailed": true,
        "isDeferred": true
    },
    "user": ObjectId("d3aeed0eb09eef00c6acd18e"),
    "createdAt": ISODate("2016-04-08T15:06:21.595Z"),
    "updatedAt": ISODate("2016-04-08T15:06:21.595Z"),
    "__v": Int32(0),
    "accountId": "Lorem",
    "description": "Beck's Main Mandrill Account.",
    "provider": ObjectId("5eb6bb776e36a5ee5626cf1e"),
    "isActive": true
}
```

##### 2.1.2.13.7 **webhooks** Target Script

```
use nse-beta;

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
                "domain": {
                    "bsonType": "string"
                },
                "configurations": {
                    "bsonType": "object",
                    "properties": {
                        "isDelivered": {
                            "bsonType": "bool"
                        },
                        "isBounced": {
                            "bsonType": "bool"
                        },
                        "isDropped": {
                            "bsonType": "bool"
                        },
                        "isFailed": {
                            "bsonType": "bool"
                        },
                        "isDeferred": {
                            "bsonType": "bool"
                        }
                    },
                    "additionalProperties": true,
                    "required": [
                        "isDelivered",
                        "isBounced",
                        "isDropped",
                        "isFailed",
                        "isDeferred"
                    ]
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
                "accountId": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                },
                "provider": {
                    "bsonType": "objectId"
                },
                "isActive": {
                    "bsonType": "bool"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "name",
                "configurations",
                "user",
                "createdAt",
                "updatedAt",
                "__v",
                "accountId",
                "description",
                "provider"
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

![Hackolade image](/nse-beta/image190.png?raw=true)![Hackolade image](/nse-beta/image191.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#83ef5f2e-dc31-41a4-9e4d-4cd1f61e5da3>domain.[-1]</a></td></tr></tbody></table>

##### 3.1.2 **fk domains.\_id to providergroups.domain.0** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk domains._id to providergroups.domain.0</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td></tr><tr><td>Parent field</td><td><a href=#c08c29f6-a449-497c-83f2-fb333e500f7e>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#83ef5f2e-dc31-41a4-9e4d-4cd1f61e5da3></a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="ec55de17-ee62-43fc-a34e-8e69173d810c"></a>3.2 Relationship **fk emailproviders.\_id to emailreports.emailProvider**

##### 3.2.1 **fk emailproviders.\_id to emailreports.emailProvider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image192.png?raw=true)![Hackolade image](/nse-beta/image193.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#d7cb9d97-b0e0-40cb-a00a-4090445d86c6>emailProvider</a></td></tr></tbody></table>

##### 3.2.2 **fk emailproviders.\_id to emailreports.emailProvider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to emailreports.emailProvider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#d7cb9d97-b0e0-40cb-a00a-4090445d86c6>emailProvider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="2cf69109-c125-46a4-8fbb-fc46790445ea"></a>3.3 Relationship **fk emailproviders.\_id to events.emailProvider**

##### 3.3.1 **fk emailproviders.\_id to events.emailProvider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image194.png?raw=true)![Hackolade image](/nse-beta/image195.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td><td><a href=#cb6601f6-e415-4181-8efe-3be960cb1d72>emailProvider</a></td></tr></tbody></table>

##### 3.3.2 **fk emailproviders.\_id to events.emailProvider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to events.emailProvider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td></tr><tr><td>Child field</td><td><a href=#cb6601f6-e415-4181-8efe-3be960cb1d72>emailProvider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="9be59619-a8e7-4f9a-a5e9-8209817f1ca1"></a>3.4 Relationship **fk emailproviders.\_id to providerdetails.provider**

##### 3.4.1 **fk emailproviders.\_id to providerdetails.provider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image196.png?raw=true)![Hackolade image](/nse-beta/image197.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#153cdf7e-0396-4966-909b-bb43d039fa4b>provider</a></td></tr></tbody></table>

##### 3.4.2 **fk emailproviders.\_id to providerdetails.provider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to providerdetails.provider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Child field</td><td><a href=#153cdf7e-0396-4966-909b-bb43d039fa4b>provider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="344c5400-de15-41c4-a95f-6d422dbe3355"></a>3.5 Relationship **fk emailproviders.\_id to webhooks.provider**

##### 3.5.1 **fk emailproviders.\_id to webhooks.provider** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image198.png?raw=true)![Hackolade image](/nse-beta/image199.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td><td><a href=#334a7698-cc37-485a-aca1-66b73f27cf75>provider</a></td></tr></tbody></table>

##### 3.5.2 **fk emailproviders.\_id to webhooks.provider** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk emailproviders._id to webhooks.provider</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Parent field</td><td><a href=#6a7ceb31-9014-4664-a644-f4e4d65983d3>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#334a7698-cc37-485a-aca1-66b73f27cf75>provider</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="fa631839-c564-4f98-bc3d-ec1e07aedb06"></a>3.6 Relationship **fk providerdetails.\_id to emailreports.providerDetails**

##### 3.6.1 **fk providerdetails.\_id to emailreports.providerDetails** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image200.png?raw=true)![Hackolade image](/nse-beta/image201.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#47888936-6c6f-4e79-bba3-09fe03d213b6>providerDetails</a></td></tr></tbody></table>

##### 3.6.2 **fk providerdetails.\_id to emailreports.providerDetails** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to emailreports.providerDetails</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#47888936-6c6f-4e79-bba3-09fe03d213b6>providerDetails</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="e80d8065-e9a2-477d-af88-ea1231122f58"></a>3.7 Relationship **fk providerdetails.\_id to emailreports.providerdetails**

##### 3.7.1 **fk providerdetails.\_id to emailreports.providerdetails** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image202.png?raw=true)![Hackolade image](/nse-beta/image203.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#2d310dbd-e009-43bd-8b3d-daabedbe9f91>providerdetails</a></td></tr></tbody></table>

##### 3.7.2 **fk providerdetails.\_id to emailreports.providerdetails** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to emailreports.providerdetails</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#2d310dbd-e009-43bd-8b3d-daabedbe9f91>providerdetails</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="e0d87a8b-3822-406f-bed6-5494d4ad5efc"></a>3.8 Relationship **fk providerdetails.\_id to providergroups.providers.0**

##### 3.8.1 **fk providerdetails.\_id to providergroups.providers.0** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image204.png?raw=true)![Hackolade image](/nse-beta/image205.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#4be71bbb-6827-44f8-8517-ae09545e421b>providers.[-1]</a></td></tr></tbody></table>

##### 3.8.2 **fk providerdetails.\_id to providergroups.providers.0** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providerdetails._id to providergroups.providers.0</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Parent field</td><td><a href=#c3453fec-b4d0-46a7-b5f5-d4424d0fcb09>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#4be71bbb-6827-44f8-8517-ae09545e421b></a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="3c28ada4-861e-48a5-b22a-9205c285fa23"></a>3.9 Relationship **fk providergroups.\_id to emailreports.group**

##### 3.9.1 **fk providergroups.\_id to emailreports.group** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#0602e2b4-5e65-4d24-bcec-e7841a766bb4>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image206.png?raw=true)![Hackolade image](/nse-beta/image207.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#e776d0c0-11f5-48c9-8ea1-335391c5cf63>group</a></td></tr></tbody></table>

##### 3.9.2 **fk providergroups.\_id to emailreports.group** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk providergroups._id to emailreports.group</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Parent field</td><td><a href=#0602e2b4-5e65-4d24-bcec-e7841a766bb4>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#e776d0c0-11f5-48c9-8ea1-335391c5cf63>group</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="3e852a60-ff05-4f5b-8900-1ad664a0951b"></a>3.10 Relationship **fk users.\_id to apikeys.user**

##### 3.10.1 **fk users.\_id to apikeys.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image208.png?raw=true)![Hackolade image](/nse-beta/image209.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#8cd9e26f-1bbd-4bfe-9f8e-d3d241494e74>apikeys</a></td><td><a href=#39ccf151-2f9a-4e32-8660-e78f9dfe481d>user</a></td></tr></tbody></table>

##### 3.10.2 **fk users.\_id to apikeys.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to apikeys.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#8cd9e26f-1bbd-4bfe-9f8e-d3d241494e74>apikeys</a></td></tr><tr><td>Child field</td><td><a href=#39ccf151-2f9a-4e32-8660-e78f9dfe481d>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="f4477814-6360-436b-a55e-7c11007f19d9"></a>3.11 Relationship **fk users.\_id to cloudstorages.user**

##### 3.11.1 **fk users.\_id to cloudstorages.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image210.png?raw=true)![Hackolade image](/nse-beta/image211.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#eb7e3a09-688d-4136-b462-7e8100b8eb3c>cloudstorages</a></td><td><a href=#2229df0b-c1a7-46aa-9950-64128a5b2e6c>user</a></td></tr></tbody></table>

##### 3.11.2 **fk users.\_id to cloudstorages.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to cloudstorages.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#eb7e3a09-688d-4136-b462-7e8100b8eb3c>cloudstorages</a></td></tr><tr><td>Child field</td><td><a href=#2229df0b-c1a7-46aa-9950-64128a5b2e6c>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="2b672d56-9622-4c1b-b7c9-efb3bca2d264"></a>3.12 Relationship **fk users.\_id to domains.user**

##### 3.12.1 **fk users.\_id to domains.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image212.png?raw=true)![Hackolade image](/nse-beta/image213.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td><td><a href=#0147d9da-5a21-4008-a9c9-c67795de9e90>user</a></td></tr></tbody></table>

##### 3.12.2 **fk users.\_id to domains.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to domains.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#daa1c73b-2b63-4899-a5f8-ea620917d44c>domains</a></td></tr><tr><td>Child field</td><td><a href=#0147d9da-5a21-4008-a9c9-c67795de9e90>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="86c6713e-b602-44bc-ba48-db557751ccc8"></a>3.13 Relationship **fk users.\_id to emailproviders.user**

##### 3.13.1 **fk users.\_id to emailproviders.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image214.png?raw=true)![Hackolade image](/nse-beta/image215.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td><td><a href=#93e27ad9-a09f-4392-8dd4-f59165a9ab11>user</a></td></tr></tbody></table>

##### 3.13.2 **fk users.\_id to emailproviders.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to emailproviders.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#712b44d5-5cff-471a-ac84-da4acb536d8c>emailproviders</a></td></tr><tr><td>Child field</td><td><a href=#93e27ad9-a09f-4392-8dd4-f59165a9ab11>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="955b9f0c-6c96-43c0-8425-3cc1cae15f6f"></a>3.14 Relationship **fk users.\_id to emailreports.user**

##### 3.14.1 **fk users.\_id to emailreports.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image216.png?raw=true)![Hackolade image](/nse-beta/image217.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td><td><a href=#26005a69-c23a-490a-8fe5-8ec444158b3f>user</a></td></tr></tbody></table>

##### 3.14.2 **fk users.\_id to emailreports.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to emailreports.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#c4ef27d3-2421-48b1-bc3c-a15e8e7f8480>emailreports</a></td></tr><tr><td>Child field</td><td><a href=#26005a69-c23a-490a-8fe5-8ec444158b3f>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="7d01c541-198a-4c88-a6c1-330b3d6e5d80"></a>3.15 Relationship **fk users.\_id to events.user**

##### 3.15.1 **fk users.\_id to events.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image218.png?raw=true)![Hackolade image](/nse-beta/image219.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td><td><a href=#feb7ccb7-38eb-4d88-a602-4f787436e469>user</a></td></tr></tbody></table>

##### 3.15.2 **fk users.\_id to events.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to events.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#642e7545-b0c8-4fee-8f1d-0b043015b111>events</a></td></tr><tr><td>Child field</td><td><a href=#feb7ccb7-38eb-4d88-a602-4f787436e469>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="28160dab-af74-4840-8350-26db89e9f475"></a>3.16 Relationship **fk users.\_id to notificationssettings.user**

##### 3.16.1 **fk users.\_id to notificationssettings.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image220.png?raw=true)![Hackolade image](/nse-beta/image221.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#2ce8c184-74b8-4517-a222-24b98a0b67c7>notificationssettings</a></td><td><a href=#10acdb81-3036-4012-b6f1-4775e2c09b76>user</a></td></tr></tbody></table>

##### 3.16.2 **fk users.\_id to notificationssettings.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to notificationssettings.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#2ce8c184-74b8-4517-a222-24b98a0b67c7>notificationssettings</a></td></tr><tr><td>Child field</td><td><a href=#10acdb81-3036-4012-b6f1-4775e2c09b76>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="24b221f1-ef64-42bb-87c6-97c6e30157a2"></a>3.17 Relationship **fk users.\_id to providerdetails.user**

##### 3.17.1 **fk users.\_id to providerdetails.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image222.png?raw=true)![Hackolade image](/nse-beta/image223.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td><td><a href=#9b803c41-6b61-4705-9332-35a311b09df9>user</a></td></tr></tbody></table>

##### 3.17.2 **fk users.\_id to providerdetails.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to providerdetails.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#b9d447d6-b3d6-4848-a8c9-c9d49f171a9a>providerdetails</a></td></tr><tr><td>Child field</td><td><a href=#9b803c41-6b61-4705-9332-35a311b09df9>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="1e80c652-a654-46c5-bbfe-e8afac4396c3"></a>3.18 Relationship **fk users.\_id to providergroups.user**

##### 3.18.1 **fk users.\_id to providergroups.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image224.png?raw=true)![Hackolade image](/nse-beta/image225.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td><td><a href=#cfbc6ced-eb2f-4802-9c30-366d7f232ad8>user</a></td></tr></tbody></table>

##### 3.18.2 **fk users.\_id to providergroups.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to providergroups.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#90011552-0886-4828-bd16-a5374affc7dc>providergroups</a></td></tr><tr><td>Child field</td><td><a href=#cfbc6ced-eb2f-4802-9c30-366d7f232ad8>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="97062c7f-6d5f-4351-a5be-e31080f4cfe7"></a>3.19 Relationship **fk users.\_id to webhooks.user**

##### 3.19.1 **fk users.\_id to webhooks.user** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr></tbody></table>

![Hackolade image](/nse-beta/image226.png?raw=true)![Hackolade image](/nse-beta/image227.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td><td><a href=#f2ce532d-0d82-4c54-b5e4-8b8e026d2578>user</a></td></tr></tbody></table>

##### 3.19.2 **fk users.\_id to webhooks.user** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users._id to webhooks.user</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#a37508f8-c1be-4cfa-9db3-f0a1f3a75af0>users</a></td></tr><tr><td>Parent field</td><td><a href=#5df244c0-a8e0-4963-badb-d1557558bee8>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#ee28d1f1-9e22-41fa-be97-826659a14baf>webhooks</a></td></tr><tr><td>Child field</td><td><a href=#f2ce532d-0d82-4c54-b5e4-8b8e026d2578>user</a></td></tr><tr><td>Child Cardinality</td><td>0..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="edges"></a>