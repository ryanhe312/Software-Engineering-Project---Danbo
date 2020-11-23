import global from "./views/components/global";
import axios from "axios";

const DEBUG = true;

// Public API to pack needed data
function generate_data(required_list) {
  // generate all the required data
  // required_list: list(str)
  // console.log("Entering generate_data",required_list)
  var required_data = new FormData();
  for (var i = 0; i < required_list.length; i++) {
    var data = required_list[i];
    required_data.append(data, global.information[data]);
  }
  //   console.log(required_data)
  return required_data;
}

// Public API to request everything
async function request_data(needed_data) {
  // find required data to post
  // needed_data: str

  //   console.log("Entering request_data")
  var request = global.request_api[needed_data];
  //   console.log(request)
  var api = request[0];
  var required_data = generate_data(request[1]);

//   console.log(required_data);
  //request needed data
  await axios.post(api, required_data).then((response) => {
    var data = response.data;
    if (data.error_code == 200)
    //   console.log(needed_data, data.data),
        global.information[needed_data] = data.data;
  });
}

// Public API to modify everything
function modify_data(needed_data, changed_data) {
  // find required data to post
  // needed_data: str
  // console.log("Entering modify_data",needed_data,changed_data)
  var request = global.modify_api[needed_data];
  // console.log(request)
  var api = request[0];
  console.log(changed_data)
  var formdata = new FormData();
  formdata.append(needed_data, changed_data);

  //request needed data
  axios.post(api, formdata).then((response) => {
    var data = response.data;
    if (data.error_code == 200)
        console.log(needed_data,data.data),
      global.information[needed_data] = data.data;
  });
}

// request all the needed information for one user
async function req_all() {
  await request_data("username"); // everything after username
  request_data("nickname");
//   request_data("profile");
  request_data("signature");
  request_data("address");
  request_data("gender");
  request_data("birthday");
}





export default {
  // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
  install: function(Vue) {
    Vue.prototype.req_all = () => req_all();
    Vue.prototype.request_data = (needed_data) => request_data(needed_data);
    Vue.prototype.generate_data = (required_data) =>
      generate_data(required_data);
    Vue.prototype.modify_data = (needed_data, changed_data) =>
      modify_data(needed_data, changed_data);
  },
};
