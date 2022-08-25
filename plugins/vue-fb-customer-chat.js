import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.use(VueFbCustomerChat, {
  page_id: "353847508441563", // 輸入 Facebook Page ID,
  theme_color: '#6699cc', // 設定messenger顏色
  locale: 'pt_BR', // 設定語言
  logged_out_greeting:"Logue e mande uma menssagem", //登入狀態歡迎詞
  logged_in_greeting:"Mande uma menssagem", //登出(未登入)狀態歡迎詞
  size:"large"
})