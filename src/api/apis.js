// const baseUrl = 'http://localhost:1717/api/';
const baseUrl =  window.location.origin + '/api/';
const url = {
    login: baseUrl + 'user/login', //登录
    articleList: baseUrl + 'article/getList', //文章列表
    categoryList: baseUrl + 'category/getList', //分类列表
    articleAdd: baseUrl + 'article/add', //添加文章
    editArticle: baseUrl + 'article/getById', //编辑文章
    updateArticle: baseUrl + 'article/update', //更新文章
    deleteArticle: baseUrl + 'article/delete', //删除文章
}
export default url
