import QtQuick 2.3
import QtQuick.Controls 1.2
import QtQuick.Controls.Styles 1.2

import "js/Tabela2-1.js" as Tabela2_1JS

Rectangle {
    color: "teal"
//    anchors.fill: parent

    Rectangle {
        id: topRect
        anchors.left: parent.left
        anchors.top: parent.top
        anchors.right: parent.right
        height: parent.height/18
        visible: false

    }


    Text {
        id: tolerancaLabel
        text: qsTr("TOLERANCA (micro m): ")
        anchors.top: parent.top
        anchors.topMargin: parent.height/8
        font.pixelSize: topRect.height*0.7
        anchors.left: parent.left
        anchors.leftMargin: parent.width/10
    }


    Text {
        id: toleranca
        text: qsTr("")
        anchors.top: parent.top
        anchors.topMargin: parent.height/8
        anchors.left: tolerancaLabel.right
        anchors.leftMargin: 10
        font.pixelSize: topRect.height*0.7

    }


    Rectangle {
        color: "black"
        anchors.top: toleranca.bottom
        anchors.topMargin: 0
        anchors.right: parent.right
        anchors.rightMargin: 20
        anchors.left: toleranca.left
        height: 1

    }

    Text {
        id: cilesiaLabel
        text: qsTr("CILESIA ")
        anchors.top: toleranca.bottom
        anchors.topMargin: parent.height/8
        font.pixelSize: topRect.height*0.7
        anchors.left: parent.left
        anchors.leftMargin: parent.width/4
    }


    Text {
        id: diametriLabel
        text: qsTr("DIAMETRI")
        anchors.right: cilesiaLabel.right
        font.pixelSize: topRect.height*0.7
        anchors.top: cilesiaLabel.bottom
        anchors.topMargin: 10
    }

    TextField {
        id: inputCilesia
        visible: true
        anchors.verticalCenter: cilesiaLabel.verticalCenter
        anchors.left: cilesiaLabel.right
        anchors.leftMargin: 20
        width: parent.width/6
        height: topRect.height

        style: TextFieldStyle {
            background: Rectangle {
                color: "lightblue"
                anchors.fill: parent
            }
        }


    }

    TextField {
        id: inputDiametri
        visible: true
        anchors.verticalCenter: diametriLabel.verticalCenter
        anchors.left: inputCilesia.left
        width: inputCilesia.width
        height: topRect.height


        style: TextFieldStyle {
            background: Rectangle {
                color: "lightblue"
                anchors.fill: parent
            }
        }


    }


//    Rectangle {
//        id: getValues
//        anchors.top: inputDiametri.bottom
//        anchors.topMargin: parent.height/20
//        anchors.left: parent.left
//        anchors.leftMargin: 6
//        anchors.rightMargin: 3
//        height: parent.height/8
//        width: parent.width/2
//        border.color: getValuesButton.pressed ?"yellow": "darkorange"

//        color: "orange"

//        MouseArea {
//            id: getValuesButton
//            anchors.fill: parent
//            onClicked: Tabela2_1JS.getValues(inputCilesia.text, inputDiametri.text )
//        }

//        Text {
//            text: qsTr("GET VALUES")
//            color: "black"
//            anchors.centerIn: parent
//        }
//    }



//    Rectangle {
//        id: back
//        anchors.verticalCenter: getValues.verticalCenter
//        anchors.right: parent.right
//        anchors.rightMargin: 6
//        anchors.leftMargin: 3
//        height: getValues.height
//        color: "darkorange"
//        border.color: back.pressed ?"yellow": "darkorange"
//        width: parent.width/2
//        border.width: 2

//        MouseArea {
//            anchors.fill: parent
//            onClicked: {

//                root.mouseAreas = true;
//                stack.pop()

//            }
//        }

//        Text {
//            id: name
//            text: qsTr("BACK")
//            color: "black"
//            anchors.centerIn: parent
//        }
//    }








    Rectangle {
        id: getValues  //ne te vertete eshte back
        anchors.top: inputDiametri.bottom
        anchors.topMargin: parent.height/20
        anchors.left: parent.left
        anchors.leftMargin: topRect.width/19
        width: topRect.width/4
        color: "darkorange"
        height: parent.height/8
        border.width: 3
        border.color: getValuesButton.pressed ?"yellow": "darkorange"

        MouseArea {
            id: getValuesButton
            anchors.fill: parent
            onClicked: stack.pop()//Tabela2_1JS.displayValues(materialInput.text, diameterInput.text) //.displayValues(inputi.text)
        }

        Text {
            text: qsTr("KTHEHU")
            color: "black"
            anchors.centerIn: parent
        }
    }


    Rectangle {
        id: back  //ne te verte eshte vlerat (getValues)
        anchors.verticalCenter: getValues.verticalCenter
        anchors.right: quit.left
        anchors.rightMargin: topRect.width/22
        anchors.left: getValues.right
        anchors.leftMargin: topRect.width/22
        height: getValues.height
        width: topRect.width/4
        color: "darkorange"
        border.color: back.pressed ?"yellow": "darkorange"

        border.width: 2

        MouseArea {
            anchors.fill: parent
            onClicked:{

               onClicked: Tabela2_1JS.getValues(inputCilesia.text, inputDiametri.text )

                mouseAreas = true
            }

        }

        Text {
            id: name
            text: qsTr("VLERAT")
            color: "black"
            anchors.centerIn: parent
        }
    }



    Rectangle {
        id: quit
        anchors.verticalCenter: back.verticalCenter
        anchors.right: parent.right
        anchors.rightMargin: topRect.width/19
        height: back.height
        width: topRect.width/3.8
        border.color: quit.pressed ?"yellow": "darkorange"
        color: "darkorange"
        MouseArea {
            anchors.fill: parent
            onClicked: Qt.quit();
        }

        Text {
            text: qsTr("PËRFUNDO")
            anchors.centerIn: parent

        }
    }










}
