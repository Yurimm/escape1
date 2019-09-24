room = game.createRoom("room", "배경-1.png")

//문 코드 시작
room.door = room.createObject("door", "문-오른쪽-닫힘.png") 
room.door.setWidth(136) 
room.locateObject(room.door, 1049, 300)
room.door.lock()

room.door.onClick = function() { 
	if (room.door.isOpened()){ 
		game.clear() 
	} else if (room.door.isLocked()){
        if(game.getHandItem() == room.key){
            room.door.unlock()
            room.door.open()
        }
        else {
            printMessage("문이 잠겨있다.")
        }
    }
}

room.door.onOpen = function() { 
	room.door.setSprite("문-오른쪽-열림.png") 
}
//문 코드 끝

//찬장, 열쇠 코드 시작
room.cupboard = room.createObject("cupboard", "찬장-2-닫힘.png")
room.key = room.createObject("key", "열쇠.png")
room.cupboard.setWidth(250)
room.key.setWidth(45)

room.locateObject(room.cupboard, 800, 323)
room.locateObject(room.key, 745, 315)
room.key.hide() 
room.cupboard.lock()

room.cupboard.onClick = function() { 
	if(room.cupboard.isOpened()) { 
		room.cupboard.close() 
	} else if(room.cupboard.isClosed()) { 
		room.cupboard.open()
	} else if (room.cupboard.isLocked()){ 
		printMessage("찬장이 잠겨있다.")
	}
}

room.cupboard.onOpen = function() {
	room.cupboard.setSprite("찬장-2-열림.png")
	room.key.show()
}

room.cupboard.onClose = function() {
	room.cupboard.setSprite("찬장-2-닫힘.png")
	room.key.hide()
}

room.key.onClick = function(){
    room.key.pick()
}
//찬장, 열쇠 코드 끝

//키패드 코드 시작
room.keypad = room.createObject("keypad", "숫자키-우.png")
room.keypad.setWidth(50)
room.locateObject(room.keypad, 830, 150)
room.keypad.onClick = function(){

    printMessage("힌트를 어디다 적어둔 것 같은데...")
    showKeypad("number", "7939", function(){
        room.cupboard.unlock()
        printMessage("찬장이 열렸다.")
    })

}
//키패드 코드 끝

//테이블, 컴퓨터 코드 시작
room.table = room.createObject("table", "테이블-왼쪽.png")
room.table.setWidth(330)
room.locateObject(room.table, 250, 390)

room.computer = room.createObject("computer", "컴퓨터-왼쪽.png")
room.computer.setWidth(150)
room.locateObject(room.computer, 240, 260)
room.computer.onClick = function() {
    showImageViewer("hint.png", "")
}
//테이블, 컴퓨터 코드 끝

//책 코드 시작
room.book = room.createObject("book", "책1-2.png")
room.book.setWidth(150)
room.locateObject(room.book, 600, 600)

room.book.onClick = function() {
    showImageViewer("quiz.png", "")
}
//책 코드 끝

//식물 코드 시작
room.plant = room.createObject("plant", "식물1.png")
room.plant.setWidth(180)
room.locateObject(room.plant, 530, 230)
//식물 코드 끝
game.start(room) 
printMessage("찬장에 열쇠를 둔 것 같은데 비밀번호가 뭐였더라...") 