Object.defineProperty(exports,"__esModule",{value:!0});var e=require("chalk"),n=require("is");exports.getLogger=function(r){void 0===r&&(r={log:console.log});var o=r.log;return{info:function(r){return o("\nℹ️ : "+e.default.yellow(n.object(r)?JSON.stringify(r,null,2):r)+"\n")},success:function(r){return o("\n✅ : "+e.default.green.bold(n.object(r)?JSON.stringify(r,null,2):r)+"\n")},error:function(r){return o("\n🔥 : "+e.default.red.bold(n.object(r)?JSON.stringify(r,null,2):r)+"\n    ")}}};
//# sourceMappingURL=index.js.map
