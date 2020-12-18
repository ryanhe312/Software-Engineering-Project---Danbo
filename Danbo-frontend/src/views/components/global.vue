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
    "hotTopics":"",
    "currentTopic":"",
    "topicBlogs":"",
    "searchuser":[],
    "keyword":"",
    "searchtopic":[],
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
    "followees":["/user/getFollowings",["username"]],
    "hotTopics":["/blog/hotTopics",[]],
    "topicBlogs":["/blog/getTopicBlogs",["currentTopic"]],
    "searchuser":["/user/searchUser",["keyword"]],
    "searchtopic":["/blog/searchTopic",["keyword"]],
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
