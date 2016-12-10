//路由配置文件
import React from 'react';
import { Route, Router, Redirect, IndexRoute } from 'react-router';
import Counter  from './counter'
import Application from './application'
// 异步加载模块
const getComp = function(path) {
	const bundle = require(`bundle?name=[path]&lazy!./${path}`)
	return function (location, cb) {
		bundle(component => {
			cb(null, component.default)
			return component.default
		})
	}
}
export default (
	<Router component={Application}>
		<Route path="/" getComponent={getComp('counter')}></Route>
	</Router>
)
