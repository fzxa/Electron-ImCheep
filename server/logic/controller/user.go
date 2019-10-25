package controller

import (
	"gim/logic/model"
	"gim/logic/service"
)

func init() {
	g := Engine.Group("/user")
	g.POST("", handler(UserController{}.Add))
	g.GET("/info", handler(UserController{}.UserInfo))
	g.GET("/test", handler(UserController{}.Test))
}

type UserController struct{}

// Add 添加用户
func (UserController) Add(c *context) {
	var user model.User
	if c.bindJson(&user) != nil {
		return
	}
	user.AppId = c.appId
	c.response(nil, service.UserService.Add(Context(), user))
}

// UserInfo 获取用户信息
func (UserController) UserInfo(c *context) {
	c.response(service.UserService.Get(Context(), c.appId, c.userId))
}

func (UserController) Test(c *context) {
	c.response(service.UserService.Get(Context(), int64(1), int64(1)))
}
