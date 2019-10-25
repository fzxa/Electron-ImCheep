package service

import (
	"fmt"
	"gim/logic/cache"
	"gim/public/imctx"
	"testing"
)

var ctx = imctx.NewContext()

func TestUserRequenceService_GetNext(t *testing.T) {
	KeyName := cache.SeqCache.UserKey(int64(1), int64(1))
	// logger.Logger.Debug(KeyName)
	// SeqService.GetUserNext(ctx, int64(1), int64(1))
	SeqID, err := cache.SeqCache.Incr(KeyName)
	fmt.Printf("Seq ID %v", SeqID)
	if err != nil {
		fmt.Print(err)
	}
}
