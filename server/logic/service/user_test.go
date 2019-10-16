package service

import (
	"fmt"
	"goim/logic/model"
	"goim/public/logger"
	"testing"
)

func TestUserService_Regist(t *testing.T) {
	UserRegist := model.UserRegist{
		Number:   "13911112222",
		Nickname: "Fzxa",
		Sex:      1,
		Avatar:   "",
		Password: "123456",
	}
	DeviceID := int64(1)
	User, err := UserService.Regist(ctx, DeviceID, UserRegist)
	logger.Sugar.Error(err)
	fmt.Println(User, err)
}

func TestUserService_Get(t *testing.T) {
	UserID := int64(2)
	UserInfo, err := UserService.Get(ctx, UserID)
	fmt.Println(UserInfo, err)
}

func TestUserService_SignIn(t *testing.T) {
	DeviceID := int64(1)
	Number := "13911112222"
	Password := "123456"
	SignInResp, err := UserService.SignIn(ctx, DeviceID, Number, Password)
	fmt.Println("Result: ", SignInResp)
	logger.Sugar.Info(SignInResp, err)
}
