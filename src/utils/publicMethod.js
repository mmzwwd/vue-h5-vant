var u = {};
import Clipboard from 'clipboard'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
u.copyLink = function(data,doms){
    let clipboard = new Clipboard(doms, {
        text: function () {
          return data
        }
      })
      clipboard.on('success', e => {
        Toast({
          message: '复制成功',
          position: 'top',
        });
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        Toast({
          message: '复制失败',
          position: 'top',
        });
        clipboard.destroy()
      })
}

export default u
