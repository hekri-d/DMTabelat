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
        height: 20; width: parent.width
        visible: false
    }



    ColumnLayout {
        id: rreshtat
        anchors.top: parent.top
        anchors.topMargin: 40;
        anchors.left: parent.left
        anchors.leftMargin: 30
        spacing: 5


        Text { id: teksti11;text: qsTr("Hapi - P (mm)")        }
        Text { id: teksti12;text: qsTr("Diam. mesatar - d2=D2(mm)")        }
        Text { id: teksti13;text: qsTr("Diam. i thelbit - D1(mm)")        }
        Text { id: teksti14;text: qsTr("Thell. e bartjes - H1(mm)")        }
        Text { id: teksti15;text: qsTr("Sip. e p.terthore - A1(mm2)")        }
        Text { id: teksti16;text: qsTr("Kendi i filetos - fi (shkalle)")        }

    }

    ColumnLayout {
        id: rreshtat2

        anchors.top: rreshtat.top
        anchors.left: rreshtat.right
        anchors.leftMargin: 20
        spacing: 5

        Text { id: teksti21;text: qsTr("")        }
        Text { id: teksti22;text: qsTr("")        }
        Text { id: teksti23;text: qsTr("")        }
        Text { id: teksti24;text: qsTr("")        }
        Text { id: teksti25;text: qsTr("")        }
        Text { id: teksti26;text: qsTr("")        }

    }

    TextField {
        id: inputi
        visible: true
        anchors.top: rreshtat2.bottom
        anchors.topMargin: 20
        anchors.horizontalCenter: topRect.horizontalCenter


        width: parent.width/2
        height: 30
    }


    Rectangle {
        id: getValues
        anchors.top: inputi.bottom
        anchors.topMargin: parent.height/20
        anchors.left: parent.left
        anchors.leftMargin: 6
        anchors.right: topRect.horizontalCenter
        anchors.rightMargin: 3
        color: "darkorange"
        height: parent.height/8
        border.width: 2
        border.color: getValuesButton.pressed ?"yellow": "darkorange"

        MouseArea {
            id: getValuesButton
            anchors.fill: parent
            onClicked: Tabela8_1JS.displayValues(inputi.text)
        }

        Text {
            text: qsTr("GET VALUES")
            color: "black"
            anchors.centerIn: parent
        }
    }


    Rectangle {
        id: back
        anchors.verticalCenter: getValues.verticalCenter
        anchors.right: parent.right
        anchors.rightMargin: 6
        anchors.left:topRect.horizontalCenter
        anchors.leftMargin: 3
        height: getValues.height
        color: "darkorange"
        border.color: back.pressed ?"yellow": "darkorange"

        border.width: 2

        MouseArea {
            anchors.fill: parent
            onClicked:{
                stack.pop()

                mouseAreas = true
            }

        }

        Text {
            id: name
            text: qsTr("BACK")
            color: "black"
            anchors.centerIn: parent
        }
    }



}

