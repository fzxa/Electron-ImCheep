package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"

	"golang.org/x/net/websocket"
)

func Echo(ws *websocket.Conn) {
	var err error

	for {
		var reply string

		if err = websocket.Message.Receive(ws, &reply); err != nil {
			fmt.Println("Can't receive")
			break
		}

		fmt.Println("Received back from client: " + reply)

		//msg := "Received:  " + reply
		msg := reply
		fmt.Println("Sending to client: " + msg)

		if err = websocket.Message.Send(ws, msg); err != nil {
			fmt.Println("Can't send")
			break
		}
	}
}

func web(w http.ResponseWriter, r *http.Request) {

	//打印请求的方法
	fmt.Println("method", r.Method)

	if r.Method == "GET" { //如果请求方法为get显示login.html,并相应给前端
		t, _ := template.ParseFiles("websocket.html")
		t.Execute(w, nil)
	} else {
		//否则走打印输出post接受的参数username和password
		fmt.Println(r.PostFormValue("username"))
		fmt.Println(r.PostFormValue("password"))
	}

}

func main() {
	http.Handle("/", websocket.Handler(Echo))
	http.HandleFunc("/web", web)

	if err := http.ListenAndServe(":1234", nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}
