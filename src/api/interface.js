import server from './server';
import url from './apis';
import qs from 'qs'
 
//登录
export function login(params){
    return server({
        url: url.login,
        method: 'get',
        params
    })
}

//获取文章列表
export function articleList(params){
    return server({
        url: url.articleList,
        method: 'get',
        params
    })
}

//获取文章列表
export function categoryList(params){
    return server({
        url: url.categoryList,
        method: 'get',
        params
    })
}

//添加文章
export function articleAdd(params){
    return server({
        url: url.articleAdd,
        method: 'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        data:qs.stringify(params)
    })
}

//修改文章
export function editArticle(params){
    return server({
        url: url.editArticle,
        method: 'get',
        params
    })
}

//更新
export function updateArticle(params){
    return server({
        url: url.updateArticle,
        method: 'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        data:qs.stringify(params)
    })
}

//删除
export function deleteArticle(params){
    return server({
        url: url.deleteArticle,
        method: 'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        data:qs.stringify(params)
    })
}