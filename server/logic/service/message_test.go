package service

import (
	"Electron-ImCheep/server/connect"
	"fmt"
	"goim/logic/model"
	"goim/public/lib"
	"goim/public/logger"
	"testing"
)

func TestMessageService_Add(t *testing.T) {
	message := model.Message{
		UserId:         2,
		SenderType:     1,
		SenderId:       3,
		SenderDeviceId: 3,
		ReceiverType:   1,
		ReceiverId:     2,
		Type:           1,
		Content:        "nihao...",
		Sequence:       1,
	}
	err := MessageService.Add(ctx, message)
	logger.Sugar.Error(err)
}

func TestMessageService_ListByUserIdAndSequence(t *testing.T) {
	messages, err := MessageService.ListByUserIdAndSequence(ctx, 1, 0)
	if err != nil {
		logger.Sugar.Error(err)
		return
	}
	for _, message := range messages {
		fmt.Println("message ::::: ", message)
		fmt.Println(lib.FormatTime(message.CreateTime))
	}
}

func TestMessageService_SendToUser(t *testing.T) {
	fmt.Println("Test NSQ Message...")

	message := model.Message{
		Id:             1,
		MessageId:      int64(7),
		UserId:         int64(3),
		SenderType:     1,
		SenderId:       3,
		SenderDeviceId: 3,
		ReceiverType:   1,
		ReceiverId:     2,
		Type:           0,
		Content:        "nsq message...",
		Sequence:       7,
		SendTime:       lib.UnunixTime(0),
	}
	UserID := int64(3)
	fmt.Println(message, UserID)
	MessageService.SendToUser(ctx, UserID, &message)

}

func TestMessageService_ConsumerMsg(t *testing.T) {
	connect.StartNsqConsumer()
}
