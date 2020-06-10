import server from './server';
import url from './apis';
 
//接口1方法
export function login(params){
    return server({
        url: url.login,
        method: 'get',
        // dataType: "json",
	    // contentType: "application/json",
        params
    })
}