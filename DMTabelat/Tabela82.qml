import QtQuick 2.3
import QtQuick.Layouts 1.1
import QtQuick.Controls 1.2
import QtQuick.Controls.Styles 1.2
import "js/Tabela8-1.js" as Tabela8_1JS

Rectangle {
    width: 100
    height: 62
    color: "teal"

    Rectangle {
        id: topRect; anchors.top: parent.top
        height: parent.height/18; width: parent.width
        visible: false
    }



    ColumnLayout {
        id: rreshtat
        anchors.top: parent.top
        anchors.topMargin: 40;
        anchors.left: parent.left
        anchors.leftMargin: 30
        spacing: 5


        Text { id: teksti11;font.pixelSize: topRect.height*0.7; text: qsTr("P (mm)")        }
        Text { id: teksti12;font.pixelSize: topRect.height*0.7; text: qsTr("d2=D2(mm)")        }
        Text { id: teksti13;font.pixelSize: topRect.height*0.7; text: qsTr("D1(mm)")        }
        Text { id: teksti14;font.pixelSize: topRect.height*0.7; text: qsTr("H1(mm)")        }
        Text { id: teksti15;font.pixelSize: topRect.height*0.7; text: qsTr("A1(mm2)")        }
        Text { id: teksti16;font.pixelSize: topRect.height*0.7; text: qsTr("fi (shkalle)")        }

    }

    ColumnLayout {
        id: rreshtat2

        anchors.top: rreshtat.top
        anchors.left: rreshtat.right
        anchors.leftMargin: 20
        spacing: 5

        Text { id: teksti21;font.pixelSize: topRect.height*0.7; text: qsTr("")        }
        Text { id: teksti22;font.pixelSize: topRect.height*0.7; text: qsTr("")        }
        Text { id: teksti23;font.pixelSize: topRect.height*0.7; text: qsTr("")        }
        Text { id: teksti24;font.pixelSize: topRect.height*0.7; text: qsTr("")        }
        Text { id: teksti25;font.pixelSize: topRect.height*0.7; text: qsTr("")        }
        Text { id: teksti26;font.pixelSize: topRect.height*0.7; text: qsTr("")        }

    }

    TextField {
        id: inputi
        visible: true
        anchors.top: rreshtat2.bottom
        anchors.topMargin: 20
        anchors.horizontalCenter: topRect.horizontalCenter
        width: parent.width/2
        height: topRect.height
        style: TextFieldStyle {
            background: Rectangle {
                color: "lightblue"
            }
        }
    }







    Rectangle {
        id: getValues  //ne te vertete eshte back
        anchors.top: inputi.bottom
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
            onClicked: stack.pop()//Tabela8_14JS.displayValues(materialInput.text, diameterInput.text) //.displayValues(inputi.text)
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

                Tabela8_1JS.displayValues(inputi.text)
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

