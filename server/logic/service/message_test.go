package service

import (
	"fmt"
	"gim/logic/model"
	"gim/public/pb"
	"testing"
	"time"

	jsoniter "github.com/json-iterator/go"
)

// var ctx = imctx.NewContext()

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

func TestMessageService_Send(t *testing.T) {

	appID := int64(1)
	userID := int64(1)
	deviceID := int64(1)

	Text := &pb.Text{Text: "hello"}

	SendMessage := model.SendMessage{
		ReceiverType: 1,
		ReceiverId:   1,
		ToUserIds:    make([]int64, 1),
		MessageId:    "1",
		SendTime:     int64(time.Now().Unix()),
		MessageBody: model.MessageBody{
			MessageType:    1,
			MessageContent: "message..",
		},
		PbBody: &pb.MessageBody{
			MessageType: 1,
			MessageContent: &pb.MessageContent{
				Content: &pb.MessageContent_Text{
					Text: Text,
				},
			},
		},
	}

	MessageService.Send(ctx, appID, userID, deviceID, SendMessage)
}

func TestMessageService_ListByUserIdAndSequence(t *testing.T) {

}

func TestJson(t *testing.T) {
	var st = struct {
		Nickname string `json:"nickname"`
	}{}

	json := `{
	"user_id":3,
	"nickname":"h",
	"sex":2,
	"avatar_url":"no",
	"extra":{"nickname":"hjkladsjfkl"}
}`
	jsoniter.Get([]byte(json), "extra").ToVal(&st)
	fmt.Println(st)
}
