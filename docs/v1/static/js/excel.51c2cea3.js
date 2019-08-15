(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["excel"],{c055:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("使用 vxe-excel 渲染 Excel 表格，注意：暂时不建议使用（完善中）")]),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:e.getValidEvent}},[e._v("获取有效数据")]),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")]),n("vxe-button",{on:{click:e.exportCsvEvent}},[e._v("导出.csv")]),n("input",{attrs:{type:"file",accept:".csv,.xls,.xlsx"},on:{change:e.fileChangeEvent}})]},proxy:!0}])}),n("vxe-excel",{ref:"xExcel",attrs:{"max-height":"600",columns:e.columns,data:e.tableData},on:{"update:data":function(t){e.tableData=t}}}),e._m(0),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",[e._v("\n      | Arrow Up ↑ | 移动到当前活动单元格上面的单元格 |\n      | Arrow Down ↓ | 移动到当前活动单元格下面的单元格 |\n      | Arrow Left ← | 移动到当前活动单元格左边的单元格 |\n      | Arrow Right → | 移动到当前活动单元格右边的单元格 |\n      | Tab | 移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动 |\n      | Tab + Shift | 移动到当前选中或活动单元格的左侧单元格，如果到第一列且存在上一行，则从上一行开始移动 |\n      | Enter | 取消编辑并移动到当前活动单元格下面的单元格 |\n      | Delete | 清空内容 |\n      | Backspace | 清空内容并激活选中单元格为编辑状态 |\n      | F2 | 激活单元格编辑 |\n      | Esc | 取消单元格编辑 |\n      | Ctrl + C | 复制选中的单元格内容 |\n      | Ctrl + X | 剪贴选中的单元格内容 |\n      | Ctrl + V | 粘贴选中的单元格内容 |\n      | Ctrl + A | 选中所有单元格 |\n    ")]),e._v("\n  ")])}],l=(n("28a5"),n("ac6a"),n("5df3"),n("1c4c"),n("1487")),s=n.n(l),o=n("1146"),c=n.n(o),i={data:function(){var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];return{columns:[{type:"index",width:50,fixed:"left",align:"center",headerAlign:"center"}].concat(e.map(function(e){return{field:e,title:e,width:76,headerAlign:"center",editRender:{name:"cell"}}})),tableData:Array.from(new Array(20)).map(function(t,n){var a={id:n};return e.forEach(function(e){a[e]=""}),a}),demoCodes:['\n        <vxe-button @click="getValidEvent">获取有效数据</vxe-button>\n        <vxe-button  @click="getInsertEvent">获取新增</vxe-button>\n        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n        <vxe-button @click="exportCsvEvent">导出.csv</vxe-button>\n        <input type="file" @change="fileChangeEvent" accept=".csv,.xls,.xlsx">\n\n        <vxe-excel\n          ref="xExcel"\n          max-height="600"\n          :columns="columns"\n          :data.sync="tableData">\n        </vxe-excel>\n        ',"\n        export default {\n          data () {\n            let columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']\n            return {\n              columns: [\n                {\n                  type: 'index',\n                  width: 50,\n                  align: 'center',\n                  headerAlign: 'center'\n                }\n              ].concat(columns.map(name => {\n                return {\n                  field: name,\n                  title: name,\n                  width: 76,\n                  headerAlign: 'center',\n                  editRender: {\n                    name: 'cell'\n                  }\n                }\n              })),\n              tableData: Array.from(new Array(20)).map(() => {\n                let item = {}\n                columns.forEach(name => {\n                  item[name] = ''\n                })\n                return item\n              })\n            }\n          },\n          methods: {\n            getValidEvent () {\n              let fields = this.$refs.xExcel.getColumns().map(item => item.property).filter(key => key)\n              let validRecords = this.tableData.filter(item => fields.some(key => item[key]))\n              this.$XMsg.alert(validRecords.length)\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xExcel.getInsertRecords()\n              this.$XMsg.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xExcel.getRemoveRecords()\n              this.$XMsg.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              let updateRecords = this.$refs.xExcel.getUpdateRecords()\n              this.$XMsg.alert(updateRecords.length)\n            },\n            exportCsvEvent () {\n              this.$refs.xExcel.exportCsv()\n            },\n            fileChangeEvent (evnt) {\n              let files = evnt.target.files\n              let fileReader = new FileReader()\n              fileReader.onload = (ev) => {\n                let data = ev.target.result\n                let workbook = XLSX.read(data, { type: 'binary' })\n                let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']\n                let csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)\n                let tableData = csvData.split('\\n').map(vRow => {\n                  let vCols = vRow.split(',')\n                  let item = {}\n                  vCols.forEach((val, cIndex) => {\n                    let kIndex = Math.floor(cIndex / 26)\n                    let lIndex = cIndex % 26\n                    let key\n                    if (kIndex) {\n                      key = `${keys[kIndex]}${keys[lIndex]}`\n                    } else {\n                      key = keys[lIndex]\n                    }\n                    item[key] = val\n                  })\n                  return item\n                })\n                this.tableData = tableData\n              }\n              fileReader.readAsBinaryString(files[0])\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})},methods:{getValidEvent:function(){var e=this.$refs.xExcel.getColumns().map(function(e){return e.property}).filter(function(e){return e}),t=this.tableData.filter(function(t){return e.some(function(e){return t[e]})});this.$XMsg.alert(t.length)},getInsertEvent:function(){var e=this.$refs.xExcel.getInsertRecords();this.$XMsg.alert(e.length)},getRemoveEvent:function(){var e=this.$refs.xExcel.getRemoveRecords();this.$XMsg.alert(e.length)},getUpdateEvent:function(){var e=this.$refs.xExcel.getUpdateRecords();this.$XMsg.alert(e.length)},exportCsvEvent:function(){this.$refs.xExcel.exportCsv()},fileChangeEvent:function(e){var t=this,n=e.target.files,a=new FileReader;a.onload=function(e){var n=e.target.result,a=c.a.read(n,{type:"binary"}),r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],l=c.a.utils.sheet_to_csv(a.Sheets.Sheet1),s=l.split("\n").map(function(e,t){var n=e.split(","),a={id:t};return n.forEach(function(e,t){var n,l=Math.floor(t/26),s=t%26;n=l?"".concat(r[l]).concat(r[s]):r[s],a[n]=e}),a});t.tableData=s},a.readAsBinaryString(n[0])}}},v=i,d=n("2877"),u=Object(d["a"])(v,a,r,!1,null,null,null);t["default"]=u.exports}}]);