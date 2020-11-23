<template>
<v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-1">
          <router-link  to="/personal">Ning</router-link>
        </div>
        <v-list-item-subtitle>Fudan CS.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
        <v-btn
      text
      color="primary"
    >
    <router-link  to="/follow">Following</router-link>
    </v-btn>
    <v-btn
      text
      color="primary"
    >
    <router-link  to="/follow">Followers</router-link>
    </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RightBar",

  components: {},

  data: () => ({
    username:"",
    signature:"",

    }),

  computed: {},

  methods: {
    //TODO: Request for head,username,signature
    //request for username
    req_username: function () {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名和密码！");
      } else {
        var formdata = new FormData();	//定义formdata
        formdata.append("username", this.username);	//将请求数据加入formdata中
        formdata.append("password", this.password);
        this.axios
          .post("/user/login", formdata, {
            headers: { "Content-Type": "multipart/form-data" },	//由于后端API对类型有要求，所以请求时一定要设置content-type为multipart/form-data
          })
          .then((response) => this.ack_login(response)) //使用methods中的函数处理响应
          .catch(function (error) {
            console.log(error);
          });
      }
    },

  },
};
</script>

<style scoped>
.router-link-active {    
  text-decoration: none;
}
 a {
  text-decoration: none;
 }
</style>
