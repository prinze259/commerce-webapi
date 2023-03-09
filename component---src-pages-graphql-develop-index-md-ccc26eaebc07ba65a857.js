"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5122],{65604:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(15007),n(64983)),o=n(91515),d=["components"],l={},p={_frontmatter:l},m=o.Z;function s(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.mdx)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"define-the-graphql-schema-for-a-module"},"Define the GraphQL schema for a module"),(0,i.mdx)("p",null,"Each module that adds to or extends from a GraphQL schema can do so by placing a ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file in its ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc")," directory. Adobe Commerce and Magento Open Source Core adds ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/GraphQl"},(0,i.mdx)("inlineCode",{parentName:"a"},"GraphQl"))," modules based on the purpose of the schema being extended/added and the core modules they depend on. For example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CustomerGraphQl")," module adds a query and multiple mutations to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," endpoint to view and modify customer data. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"CustomerGraphQl")," module relies on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Customer")," core module."),(0,i.mdx)("p",null,"A GraphQL module's ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file defines how the attributes defined in the module can be used in GraphQL queries and mutations. If your module's attributes are completely self-contained, then the ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file defines the queries, mutations, the interfaces used, the data types of all the attributes, and any enumerations that restrict the possible attribute contents. If your module extends another module, then you must define those attributes and ensure that the other module can load your attributes. For example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CatalogGraphQl")," module defines the ",(0,i.mdx)("inlineCode",{parentName:"p"},"PriceAdjustmentCodesEnum"),", but the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TaxGraphQl")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"WeeeGraphQl")," modules define the enumeration values."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"<module_name>/etc/schema.graphqls")," file:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Defines the structure of queries and mutations."),(0,i.mdx)("li",{parentName:"ul"},"Determines which attributes can be used for input and output in GraphQL queries and mutations. Requests and responses contain separate lists of valid attributes."),(0,i.mdx)("li",{parentName:"ul"},"Points to the resolvers that verify and process the input data and response."),(0,i.mdx)("li",{parentName:"ul"},"Serves as the source for displaying the schema in a GraphQL browser."),(0,i.mdx)("li",{parentName:"ul"},"Defines which objects are cached.")),(0,i.mdx)("p",null,"The base ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file, located in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/GraphQl/etc/")," directory, defines the basic structure of GraphQL queries and mutations. It also includes definitions for comparison operators and paging information for search results. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"webonyx/graphql-php")," library enforces the syntax of all ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," files."),(0,i.mdx)("h2",{id:"define-queries"},"Define queries"),(0,i.mdx)("p",null,"A query definition can be one line, or it can be complex. If your module's query implements ",(0,i.mdx)("inlineCode",{parentName:"p"},"searchCriteria"),", then you must define arguments that define filters and pagination information, all of which adds complexity. However, if you expect a single result from your query, then its definition can be simple."),(0,i.mdx)("p",null,"The following example shows the ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," query. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"type")," is defined as a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Query"),". The ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," definitions define the keywords that are used to construct a query, as shown in ",(0,i.mdx)("a",{parentName:"p",href:"../usage/index.md#queries"},"Using queries"),". The parameter definitions will be discussed in ",(0,i.mdx)("a",{parentName:"p",href:"#specify-output-attributes"},"Specify output attributes"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'type Query {\n    products (\n        search: String\n        filter: ProductAttributeFilterInput\n        pageSize: Int = 20\n        currentPage: Int = 1\n        sort: ProductAttributeSortInput\n    ): Products @resolver(class: "Magento\\\\CatalogGraphQl\\\\Model\\\\Resolver\\\\Products")\n}\n')),(0,i.mdx)("p",null,"In contrast, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"customer")," query returns the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Customer")," object associated with the current user. There is no need to define pagination information."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'type Query {\n    customer: Customer @resolver(class: "Magento\\\\CustomerGraphQl\\\\Model\\\\Resolver\\\\Customer")\n}\n')),(0,i.mdx)("p",null,"If all your module's attributes are extension attributes for existing modules, then no query definition is required. In this case, the attributes point to the other module's query definition."),(0,i.mdx)("h3",{id:"declare-input-attributes"},"Declare input attributes"),(0,i.mdx)("p",null,"You must explicitly define each attribute that can be used as input in a GraphQL query. In the simplest cases, you can create a single ",(0,i.mdx)("inlineCode",{parentName:"p"},"type")," definition that includes all the input, output, and sorting attributes for an object. This might not be possible if your module performs calculations, or otherwise has attributes that aren't available at the time of the query."),(0,i.mdx)("p",null,"The following example shows the ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," query, which has multiple optional attributes:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"products(\n  search: String\n  filter: ProductAttributeFilterInput\n  pageSize: Int\n  currentPage: Int\n  sort: ProductAttributeSortInput\n): Products\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"ProductAttributeFilterInput")," object used in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"filter")," attribute is a custom input type that determines which attributes can be used to narrow the results in a ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," query. The attributes of this object are of type ",(0,i.mdx)("inlineCode",{parentName:"p"},"FilterEqualTypeInput"),". (These entities are defined in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/schema.graphqls")," files of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"GraphQl")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"CatalogGraphQl")," modules). In other use cases, you would be required to create your own input type in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<magento_root>/app/code/<vendor_name>/<module_name>/etc/schema.graphqls")," file."),(0,i.mdx)("p",null,"The following attributes can be used as filters using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ProductAttributeFilterInput")," object."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"input ProductAttributeFilterInput {\n    category_id: FilterEqualTypeInput\n}\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"FilterEqualTypeInput")," type defines a filter that matches the input exactly."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"input FilterEqualTypeInput {\n    in: [String]\n    eq: String\n}\n")),(0,i.mdx)("p",null,"The following example filter searches for products whose ",(0,i.mdx)("inlineCode",{parentName:"p"},"category_id")," equals 1."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  products(filter: {category_id: {eq: "1"}}) {\n    total_count\n    items {\n      name\n    }\n  }\n}\n')),(0,i.mdx)("p",null,"The search returns products whose ",(0,i.mdx)("inlineCode",{parentName:"p"},"category_id")," equals 1."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "products": {\n      "total_count": 2,\n      "items": [\n        {\n          "name": "Josie Yoga Jacket"\n        },\n        {\n          "name": "Selene Yoga Hoodie"\n        }\n      ]\n    }\n  }\n}\n')),(0,i.mdx)("h3",{id:"specify-output-attributes"},"Specify output attributes"),(0,i.mdx)("p",null,"You must know the data type of each attribute, whether it is scalar or an object, and whether it can be part of an array. In addition, each attribute within an object must be defined in the same manner."),(0,i.mdx)("p",null,"In a ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file, the output ",(0,i.mdx)("inlineCode",{parentName:"p"},"Interface")," defines top-level attributes. Each object returned is defined in a ",(0,i.mdx)("inlineCode",{parentName:"p"},"type")," definition."),(0,i.mdx)("p",null,"The following example shows the ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," query. The query returns a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Products")," object containing the attributes of the specified data types."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"aggregations")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"../schema/products/queries/products.md#aggregation-attributes"},"[Aggregation]")),(0,i.mdx)("td",{parentName:"tr",align:null},"Layered navigation aggregations")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"items")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"../schema/products/queries/products.md#productinterface-attributes"},"[ProductInterface]")),(0,i.mdx)("td",{parentName:"tr",align:null},"An array of products that match the specified search criteria")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"page_info")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"../schema/products/queries/products.md#searchresultpageinfo-attributes"},"SearchResultPageInfo")),(0,i.mdx)("td",{parentName:"tr",align:null},"An object that includes the ",(0,i.mdx)("inlineCode",{parentName:"td"},"page_info")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"currentPage")," values specified in the query")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sort_fields")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"../schema/products/queries/products.md#sortfields-attributes"},"SortFields")),(0,i.mdx)("td",{parentName:"tr",align:null},"An object that includes the default sort field and all available sort fields")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"total_count")),(0,i.mdx)("td",{parentName:"tr",align:null},"Int"),(0,i.mdx)("td",{parentName:"tr",align:null},"The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not")))),(0,i.mdx)("h3",{id:"define-the-output-interface"},"Define the output interface"),(0,i.mdx)("p",null,"In many cases, the response contains data that was either not available as input, or was transformed in some manner from the input. For example, when you specify a price in an input filter, the application evaluates it as a Float value. However, ",(0,i.mdx)("inlineCode",{parentName:"p"},"Price")," output objects contain a Float value, a currency value, and possibly minimum/maximum values and tax adjustments. You can define a ",(0,i.mdx)("inlineCode",{parentName:"p"},"typeResolver")," to point to the Resolver object, which interprets the GraphQL query. If your module contains only attributes that extend another module, then this parameter is optional. Otherwise, it is required. See ",(0,i.mdx)("a",{parentName:"p",href:"resolvers.md"},"Resolvers")," for more information."),(0,i.mdx)("p",null,"Output types that represent entities that can be manipulated (created, updated, or removed) and/or can be cached on the client MUST have ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," field. The type of the field SHOULD be ",(0,i.mdx)("inlineCode",{parentName:"p"},"ID"),"."),(0,i.mdx)("p",null,"The following example shows the ",(0,i.mdx)("inlineCode",{parentName:"p"},"products")," query. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"page_info")," attribute contains the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SearchResultPageInfo")," data type which is defined in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file under ",(0,i.mdx)("inlineCode",{parentName:"p"},"ModuleGraphQl"),". In other use cases, you would be required to create your own output type in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<magento_root>/app/code/<vendor_name>/<module_name>/etc/schema.graphqls")," file."),(0,i.mdx)("p",null,"The SearchResultPageInfo provides navigation for the query response."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"type SearchResultPageInfo {\n    page_size: Int\n    current_page: Int\n    total_pages: Int\n}\n")),(0,i.mdx)("p",null,"The following example uses the ",(0,i.mdx)("inlineCode",{parentName:"p"},"page_info")," output attribute which is of ",(0,i.mdx)("inlineCode",{parentName:"p"},"SearchResultPageInfo")," type to get all the information related to the page."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  products(search: "Yoga pants", pageSize: 2) {\n    total_count\n    items {\n      name\n    }\n    page_info {\n      page_size\n      current_page\n    }\n  }\n}\n')),(0,i.mdx)("p",null,"The search returns 45 items, but only the first two items are returned on the current page and all the information regarding the page is returned."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "products": {\n      "total_count": 45,\n      "items": [\n        {\n          "name": "Josie Yoga Jacket"\n        },\n        {\n          "name": "Selene Yoga Hoodie"\n        }\n      ],\n      "page_info": {\n        "page_size": 2,\n        "current_page": 1\n      }\n    }\n  }\n}\n')),(0,i.mdx)("h2",{id:"define-mutations"},"Define mutations"),(0,i.mdx)("p",null,"A mutation definition contains the following information:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The mutation name"),(0,i.mdx)("li",{parentName:"ul"},"The input attributes and objects"),(0,i.mdx)("li",{parentName:"ul"},"The attributes and objects that can be returned in the output"),(0,i.mdx)("li",{parentName:"ul"},"The path to the resolver")),(0,i.mdx)("p",null,"The following mutation creates a customer."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'type Mutation {\n    createCustomer (input: CustomerInput!): CustomerOutput @resolver(class: "\\\\Magento\\\\CustomerGraphQl\\\\Model\\\\Resolver\\\\CreateCustomer") @doc(description:"Create customer account")\n}\n')),(0,i.mdx)("p",null,"This mutation requires the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CustomerInput")," object, which defines the customers name, email, password, and other attributes, as input."),(0,i.mdx)("p",null,"Input parameters can be optional when the context is provided in a header or other mechanism."),(0,i.mdx)("h2",{id:"define-enumerations"},"Define enumerations"),(0,i.mdx)("p",null,"You can optionally define enumerations to help prevent input errors. Adobe Commerce and Magento Open Source capitalize all enumerated responses. If a value contains a dash (-), the system converts it to an underscore (_). This is done to maintain compliance with the GraphQL specification."),(0,i.mdx)("h2",{id:"annotations"},"Annotations"),(0,i.mdx)("p",null,"You can describe any attribute, type definition, or other entity within a ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphqls")," file by appending the following to the line:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},'@doc(description: "<Text>")')),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'sku: FilterTypeInput @doc(description: "A number or code assigned to a product to identify the product, options, price, and manufacturer")\nurl_key: String @doc(description: "The url key assigned to the product")\nproduct_count: Int @doc(description: "The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not")\n')),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@deprecated")," directive to deprecate attributes and enum values. The GraphQL specification does not permit deprecating input values or arguments. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"reason")," keyword allows you to specify which attribute/field or enum value should be used instead."),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'type Query {\n    cmsPage (\n        id: Int @doc(description: "Id of the CMS page") @deprecated(reason: "Use `identifier`") @doc(description: "The CMS page ...")\n        identifier: String @doc(description: "Identifier of the CMS page")\n...\n')),(0,i.mdx)("h2",{id:"query-caching"},"Query caching"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cache")," directive defines whether the results of certain queries can be cached. Queries relating to products, categories, and CMS may be cached."),(0,i.mdx)("p",null,"Define cachable queries in the following manner:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'@cache(cacheIdentity: "Magento\\\\CmsGraphQl\\\\Model\\\\Resolver\\\\Block\\\\Identity")\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"cacheIdentity")," value points to the ",(0,i.mdx)("a",{parentName:"p",href:"identity-class.md"},"class")," responsible for retrieving cache tags."),(0,i.mdx)("p",null,"A query without a ",(0,i.mdx)("inlineCode",{parentName:"p"},"cacheIdentity")," will not be cached."),(0,i.mdx)("p",null,"To disable caching for queries declared in another module with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"cacheIdentity")," class, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cache(cacheable: false)")," directive can be used.\nThis ",(0,i.mdx)("inlineCode",{parentName:"p"},"cacheable")," argument is intended to disable caching for queries that are defined in another module."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@cache(cacheable: false)")),(0,i.mdx)("p",null,"Specifying ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cache(cacheable: false)")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cache(cacheable: true)")," on a query without a ",(0,i.mdx)("inlineCode",{parentName:"p"},"cacheIdentity")," class has no effect: the query will not be cached.\nIf a query should ",(0,i.mdx)("strong",{parentName:"p"},"not")," be cached, do not specify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cache")," directive. Specifying ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cache(cacheable: false)"),"  is superfluous when no ",(0,i.mdx)("inlineCode",{parentName:"p"},"cacheIdentity")," is present."),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/cache/partial/cache-type/"},"Create a cache type")," for information about enabling caching for custom modules."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-develop-index-md-ccc26eaebc07ba65a857.js.map