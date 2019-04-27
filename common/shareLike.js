function shareItem(e){
  const self = this;
  let pos = e.target.dataset.id
  //标记分享状态
  content[pos].shareFlag = !content[pos].shareFlag
  this.setData({
    //更新content内容
    content: content
  })
}
function keepItem(e){
  const self = this;
  let pos = e.target.dataset.id;
  content[pos].keepFlag = !content[pos].keepFlag
  this.setData({
    content: content
  })
}
function likeItem(e){
  const self = this;
  let pos = e.target.dataset.id;
  content[pos].likeFlag = !content[pos].likeFlag
  this.setData({
    content: content
  })
}
module.exports = {
  shareItem,
  keepItem,
  likeItem
}