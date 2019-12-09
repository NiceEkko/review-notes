(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/framework/flink-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("源笔记文件"),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在某些算法中，可能需要为数据集元素分配唯一标识符。[[org.apache.flink.api.scala.utils.DataSetUtils]] scala包装类"),a("br"),t._v("\n具体实现源码可参考 "),a("a",{attrs:{href:"https://github.com/apache/flink/blob/master//flink-java/src/main/java/org/apache/flink/api/java/utils/DataSetUtils.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataSetUtils"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"zipwithindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zipwithindex"}},[t._v("#")]),t._v(" "),a("strong",[t._v("zipWithIndex")])]),t._v(" "),a("p",[t._v("为元素分配连续的标签，接收数据集作为输入并返回 DataSet[(Long, T)] 2元组的新数据集。"),a("br"),t._v("\n此过程需要两步操作，首先是计数，然后是标记元素，由于计数同步，因此无法进行流水线处理。"),a("br"),t._v("\n替代方法 zipWithUniqueId 以流水线方式工作，当唯一的标签足够时，它是首选方法。")]),t._v(" "),a("h2",{attrs:{id:"zipwithuniqueid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zipwithuniqueid"}},[t._v("#")]),t._v(" "),a("strong",[t._v("zipWithUniqueId")])]),t._v(" "),a("p",[t._v("在许多情况下，可能不需要分配连续的标签。"),a("br"),t._v("\nzipWithUniqueId 以管道方式工作，加快了标签分配过程。"),a("br"),t._v("\n此方法接收一个数据集作为输入，并返回一个新的 DataSet[(Long, T)] 2元组数据集")]),t._v(" "),a("p",[t._v("代码示例 "),a("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced/blob/master/src/main/scala/io/gourd/flink/scala/games/batch/ZippingElements.scala",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZippingElements"),a("OutboundLink")],1),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gourd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scala"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchExecutionEnvironmentApp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 在某些算法中，可能需要为数据集元素分配唯一标识符。\n  * 本文档说明了如何将\n  * [[org.apache.flink.api.scala.utils.DataSetUtils]]\n  * [[org.apache.flink.api.java.utils.DataSetUtils.zipWithIndex()]]\n  * [[org.apache.flink.api.java.utils.DataSetUtils.zipWithUniqueId()]]\n  * 用于此目的。\n  *\n  * @author Li.Wei by 2019/11/12\n  */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" ZippingElements "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" BatchExecutionEnvironmentApp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scala")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DataSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"F"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"G"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"H"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  bEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setParallelism"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  zipWithIndex为元素分配连续的标签，接收数据集作为输入并返回 DataSet[(Long, T)] 2元组的新数据集。\n  此过程需要两步操作，首先是计数，然后是标记元素，由于计数同步，因此无法进行流水线处理。\n  替代方法zipWithUniqueId以流水线方式工作，当唯一的标签足够时，它是首选方法。\n   */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scala"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSetUtils\n\n  input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zipWithIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n(0,A)\n(1,B)\n(2,C)\n(3,D)\n(4,E)\n(5,F)\n(6,G)\n(7,H)\n */")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  在许多情况下，可能不需要分配连续的标签。\n  zipWithUniqueId以管道方式工作，加快了标签分配过程。\n  此方法接收一个数据集作为输入，并返回一个新的 DataSet[(Long, T)] 2元组数据集\n  \n  本机执行，未发生并行，实际情况参考分布式测试结果\n   */")]),t._v("\n  input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zipWithUniqueId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n(0,A)\n(1,B)\n(2,C)\n(3,D)\n(4,E)\n(5,F)\n(6,G)\n(7,H)\n   */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);