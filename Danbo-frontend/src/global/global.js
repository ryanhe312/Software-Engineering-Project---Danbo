// GLOBAL can be used everywhere
// Frontend database

// information includes everything about one account
const information = {
    "username":"Ning",
    "nickname":"",
    "email":"",
    "address":"",
    "birthday":"",
    "signature":"",
}

// lookup table for api
const request_api = {
    "username":["/user/getUsername",[]],
    "nickname":["/user/getNickname",["username"]],
    "email":["/user/getEmail",["username"]],
}

export default {
    information,
    request_api,
}