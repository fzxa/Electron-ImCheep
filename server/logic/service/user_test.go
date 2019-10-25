package service

import (
	"fmt"
	"testing"
)

// type Message struct {
// 	ReceiverType pb.ReceiverType `json:"receiver_type"`
// 	ReceiverId   int64           `json:"receiver_id"`
// }

// func TestMessageToJson(t *testing.T) {
// 	message := model.SendMessage{
// 		MessageBody: &pb.MessageBody{
// 			MessageContent: &pb.MessageContent{},
// 		},
// 	}
// 	bytes, err := jsoniter.Marshal(message)
// 	fmt.Println(err)
// 	fmt.Println(string(bytes))
// }

func TestUserService_Get(t *testing.T) {
	appID := int64(1)
	userID := int64(1)
	user, err := UserService.Get(ctx, appID, userID)
	fmt.Printf("userinfo is: %v  error is :%v", user, err)
}
