package main

import (
	"io/ioutil"
	"log"
	"strconv"

	"github.com/nsqio/go-nsq"
)

var nullLogger = log.New(ioutil.Discard, "", log.LstdFlags)

func sendMsg() {
	// 1. 创建生产者
	config := nsq.NewConfig()
	producer, err := nsq.NewProducer("127.0.0.1:4150", config)
	if err != nil {
		log.Fatalln("fail to new producer (127.0.0.1:4150)", err)
	}
	// 2. 生产者ping
	errPing := producer.Ping()
	if errPing != nil {
		log.Fatalln("fail to ping 127.0.0.1:4150", errPing)
	}

	// 3. 设置不输出info级别的日志
	producer.SetLogger(nullLogger, nsq.LogLevelInfo)

	// 4. 生产者发布消息
	for i := 0; i < 5; i++ {
		message := "msg index " + strconv.Itoa(i+10000)
		err2 := producer.Publish("a-test", []byte(message))
		if err2 != nil {
			log.Panic("Producer could not publish!")
		}
	}

	// 5. 生产者停止执行
	producer.Stop()
}

func main() {
	sendMsg()
}
