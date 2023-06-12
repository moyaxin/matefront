import {genderMap, roleMap, userStatus} from "./userMap";

export type UserType = {
    "id": number,
    "username": string
    "userAccount": string
    "avatarUrl": string
    "gender": genderMap
    "email": string
    "userDesc": string
    "userStatus": userStatus
    "userRole": roleMap
    "tags": string[]
    "teamIds": string[]
    "userIds": string[]
    "uid": string
    "phone": string
}

