// import Index from '../containers';
// import Detail from '../containers/detail';
// import Home from '../containers/home';
import App from '../App';
import Login from '../login'
import ArticleList from '../articleList'
import ArticleAdd from '../articleAdd'

export default [
    { path: "/admin/login", name: "Login", component: Login },
    { path: "/admin", name: "App", component: App, auth:true,children:[
        { path: "/admin/list", name: "ArticleList", component: ArticleList, auth:true},
        { path: "/admin/add", name: "ArticleAdd", component: ArticleAdd, auth:true},
    ]},
    
//   { path: "/", name: "App", component: App },
//   { path: "/home", name: "Home", component: App },
//   { path: "/topics", name: "Topics", component: Topics },
//   { path: "/detail/:id", name: "Detail", component: Detail },
//   { path: "/list", name: "List", component: List },
//   { path: "/parents", name: "Parents", component: Parents },
//   { path: "/children", name: "Children", component: Children },
//   { path: "/ajax", name: "Request", component: Request, auth: true },
//   { path: "/like", name: "Like", component: Like, auth: true },
//   { path: "/popModule", name: "PopModule", component: PopModule, auth: true },
//   { path: "/redux", name: "Reduxs", component: Reduxs, auth: true },
//   { path: "/login", name: "Login", component: Login },
//   { path: "/worker", name: "Worker", component: Workers },
//   { path: "/indexedDB", name: "indexedDB", component: IndexedDB }
]