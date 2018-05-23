//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputVal:'',
    itemMsg:[]
  },
  changeVal:function(e){
    //console.log(e.detail.value)
    const val = e.detail.value;
    this.setData({
      inputVal:val
    })
  },
  addMsg:function(e) {
    //console.log(this.data.inputVal)
    //this.data.itemMsg.push({
      //msg:this.data.inputVal
    //})
    if(!this.data.inputVal.trim()) {
      return
    }
      const list = this.data.itemMsg;
      list.push(
        { msg: this.data.inputVal }
      );
      this.setData({
        itemMsg: list,
        inputVal: ''
      })
  },
  closeData:function(e) {
    // console.log(e.target.dataset.index)
    const num = e.target.dataset.index;
    const list = this.data.itemMsg;
  
    list.splice(num,1);
    this.setData({
      itemMsg:list
    })
  }
})
