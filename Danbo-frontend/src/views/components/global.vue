<script type="text/javascript">

// information includes everything about one account
const information = {
    "username":"",
    "nickname":"",
    "email":"",
    "address":"",
    "birthday":"",
    "signature":"",
    "profile":"",
    "gender":"",
    "allBlogs":"",
    "followers":"",
    "followees":"",
    "login":false,
    // "default_absolute_path":"D:/复旦/计算机课程/大四上/软件工程化开发/project/Software-Engineering-Project---Danbo/danbo-backend/codes/statics/images/profiles",
}

// lookup table for api
const request_api = {
    "username":["/user/getUsername",[]],
    "nickname":["/user/getNickname",["username"]],
    "email":["/user/getEmail",["username"]],
    "address":["/user/getAddress",["username"]],
    "birthday":["/user/getBirthday",["username"]],
    "signature":["/user/getSignature",["username"]],
    "profile":["/user/getProfile",["username"]],
    "gender":["/user/getGender",["username"]],
    "allBlogs":["/blog/refreshBlogs",[]],
    "followers":["/user/getFollowers",["username"]],
    "followees":["/user/getFollowees",["username"]],
}

const modify_api = {
    "nickname":["/user/modifyNickname",[]],
    "address":["/user/modifyAddress",[]],
    "birthday":["/user/modifyBirthday",[]],
    "gender":["/user/modifyGender",[]],
    "profile":["/user/modifyProfile",[]],
    "signature":["/user/modifySignature",[]],
    "password":["/user/modifyPassword",[]],
}

export default
{
    information,
    request_api,
    modify_api,
}
</script>
