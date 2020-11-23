import global from "./views/components/global"
import axios from 'axios'

const DEBUG = true;

// Public API to pack needed data
function generate_data(required_list){
    // generate all the required data
    // required_list: list(str)
    console.log("Entering generate_data")
    var required_data = {}
    for(var data in required_list)
        required_data[data] = global.information[data];
    return required_data;
}

// Public API to request everything
function request_data(needed_data){
    // find required data to post
    // needed_data: str
    console.log("Entering request_data")
    var request = global.request_api[needed_data]
    console.log(request)
    var api = request[0]
    var required_data = generate_data(request[1])

    //request needed data
    axios.post(api, required_data)
    .then((response) =>
    {
        var data = response.data;
        if(data.error_code==200)
            console.log(data);
            global.information[needed_data] = data.data;
    })
}

function req_all() {
    console.log("entering request all!")
    if(global.information["username"]=="")
        console.log("entered!"),
        request_data("username");
    request_data("nickname");
    request_data("email");
    request_data("profile");
}





export default {
    // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
    install: function (Vue) {
      Vue.prototype.req_all = () => req_all();
      Vue.prototype.request_data = (needed_data) => request_data(needed_data);
      Vue.prototype.generate_data = (required_data) => generate_data(required_data);
    }
  }