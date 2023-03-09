"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7962],{73696:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return u}});var m,a=t(87462),r=t(63366),o=(t(15007),t(64983)),i=t(91515),d=["components"],p={},s=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),l={_frontmatter:p},h=i.Z;function u(e){var n=e.components,t=(0,r.Z)(e,d);return(0,o.mdx)(h,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"step-12-create-a-shipment"},"Step 12. Create a shipment"),(0,o.mdx)("p",null,"In the previous step, the SSA recommended shipping 35 ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB01")," items and 20 ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB03")," items from the Northeast warehouse. It also recommended shipping 5 ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB01")," items from the West warehouse."),(0,o.mdx)("p",null,"You can always override the SSA recommendations. It would be valid, for example, to ship 25 ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB01")," items and 5 ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB03")," items each from the Brooklyn, Manhattan, and Huntington stores."),(0,o.mdx)("p",null,"Fulfilling the order requires a minimum of two partial shipments. In this example, we will follow the SSA recommendations."),(0,o.mdx)("p",null,"When you complete a partial or full shipment, Adobe Commerce deducts the reserved products from corresponding sources."),(0,o.mdx)("h2",{id:"send-a-partial-shipment"},"Send a partial shipment"),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Although you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST V1/shipment")," endpoint to create a shipment, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST /V1/order/:orderId/ship")," endpoint is a better option in that it is more efficient and the payload can be simpler."),(0,o.mdx)("p",null,"We'll ship 35 ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB01")," items and 20 ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB03")," items from the Northeast warehouse. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"order_item_id")," value for ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB01")," is 3, and the value for ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB03")," is 4."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/default/V1/order/3/ship")),(0,o.mdx)("p",null,"where ",(0,o.mdx)("inlineCode",{parentName:"p"},"3")," is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"orderid")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scope:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"default")," store view"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Headers:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Content-Type"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bearer <admin token>")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "items": [\n    {\n      "order_item_id": 3,\n      "qty": 20\n    },\n    {\n      "order_item_id": 4,\n      "qty": 35\n    }\n  ],\n  "notify": true,\n  "comment": {\n    "comment": "Shipment from the Northeast warehouse"\n  },\n  "arguments": {\n    "extension_attributes": {\n      "source_code": "ne_wh"\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("p",null,"The shipment ID, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"3"),"."),(0,o.mdx)("h3",{id:"ship-from-the-west-warehouse"},"Ship from the West warehouse"),(0,o.mdx)("p",null,"Use the same endpoint to ship the remaining five ",(0,o.mdx)("inlineCode",{parentName:"p"},"24-WB03")," items from the West warehouse."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "items": [\n    {\n      "order_item_id": 3,\n      "qty": 5\n    }\n  ],\n  "notify": true,\n  "comment": {\n    "comment": "Shipment from the West warehouse"\n  },\n  "arguments": {\n    "extension_attributes": {\n      "source_code": "west_wh"\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("p",null,"The shipment ID, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"4"),"."),(0,o.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Click ",(0,o.mdx)("strong",{parentName:"li"},"Sales")," > ",(0,o.mdx)("strong",{parentName:"li"},"Shipments"),". The two shipments for this order are displayed in the grid."),(0,o.mdx)("li",{parentName:"ol"},"Click ",(0,o.mdx)("strong",{parentName:"li"},"Catalog")," > ",(0,o.mdx)("strong",{parentName:"li"},"Products"),". Verify that the ",(0,o.mdx)("strong",{parentName:"li"},"Quantity per Source")," values are correct for each product, based on the selections you made at shipment.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-inventory-create-shipment-md-70ea661717e836c3866a.js.map