package cache

import (
	"gim/logic/db"
	"gim/logic/model"
	"gim/public/logger"
	"strconv"
	"time"

	"github.com/go-redis/redis"
)

const (
	UserKey    = "user:"
	UserExpire = 2 * time.Hour
)

type userCache struct{}

var UserCache = new(userCache)

func (*userCache) Key(appId, userId int64) string {
	return UserKey + strconv.FormatInt(appId, 10) + ":" + strconv.FormatInt(userId, 10)
}

// Get 获取用户缓存
func (c *userCache) Get(appId, userId int64) (*model.User, error) {
	var user model.User
	err := get(c.Key(appId, userId), &user)
	if err != nil && err != redis.Nil {
		logger.Sugar.Error(err)
		return nil, err
	}
	if err == redis.Nil {
		return nil, nil
	}
	return &user, nil
}

// Set 设置用户缓存
func (c *userCache) Set(user model.User) error {
	err := set(c.Key(user.AppId, user.UserId), user, UserExpire)
	if err != nil {
		logger.Sugar.Error(err)
		return err
	}
	return nil
}

// Del 删除用户缓存
func (c *userCache) Del(appId, userId int64) error {
	_, err := db.RedisCli.Del(c.Key(appId, userId)).Result()
	if err != nil {
		logger.Sugar.Error(err)
		return err
	}
	return nil
}
