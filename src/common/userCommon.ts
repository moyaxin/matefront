export const defaultPicture =
 "https://tse1-mm.cn.bing.net/th/id/OIP-C.XvAwWse1Uk6_zvq8GBVxPQHaGL?pid=ImgDet&rs=1"

export const jsonParseTag = (usersList) => {
    usersList.forEach(user => {
        if (user.tags) {
            user.tags = user.tags ? JSON.parse(user.tags) : '该用户暂未设置';
        }
    })
}