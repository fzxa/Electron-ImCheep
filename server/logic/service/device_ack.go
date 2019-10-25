package service

import (
	"gim/logic/dao"
	"gim/public/imctx"
)

type deviceAckService struct{}

var DeviceAckService = new(deviceAckService)

// Register 注册设备
func (*deviceAckService) Update(ctx *imctx.Context, deviceId, ack int64) error {
	return dao.DeviceAckDao.Update(ctx, deviceId, ack)
}
