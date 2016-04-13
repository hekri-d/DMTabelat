import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Controls.Styles 1.2

import "js/Tabela8-14.js" as Tabela8_14JS

Rectangle {
    color: "gray"

    Text {
        id: material
        text: qsTr("MATERIALI")
        anchors.top: parent.top
        anchors.topMargin: parent.height/10
        anchors.left: parent.left
        anchors.leftMargin: parent.width/12

        font.pixelSize: parent.height/35
    }


    TextField {
        id: materialInput
        anchors.left: material.right
        anchors.leftMargin:  parent.width/22
        anchors.verticalCenter: material.verticalCenter
        width: 50
    }


    Text {
        id: filet
        text: qsTr("F. E GDHENDUR")
        anchors.left: materialInput.right
        anchors.leftMargin: parent.width/12
        anchors.verticalCenter: material.verticalCenter
        font.pixelSize: parent.height/35

    }

    CheckBox {
        id: eGdhendur
        anchors.left: filet.right
        anchors.leftMargin: 10
        anchors.verticalCenter: filet.verticalCenter
    }

    Text {
        id: diameter
        text: qsTr("DIAMETRI")
        anchors.left: material.left
        anchors.leftMargin: 50
        anchors.top: material.bottom
        anchors.topMargin: 20
    }


    TextField {
        id: diameterInput
        anchors.verticalCenter: diameter.verticalCenter
        anchors.left: diameter.right
        anchors.leftMargin: 10
        width: 40
    }

    Rectangle {
        id: line
        width: parent.width -10
        height: 2
        color: "black"
        anchors.top: diameterInput.bottom
        anchors.topMargin: 20
        anchors.horizontalCenter: parent.horizontalCenter
    }


    Text {
        id: sigmat
        text: qsTr("SIGMA_T")
        anchors.left: diameter.left
        anchors.leftMargin: -50
        anchors.top: diameter.bottom
        anchors.topMargin: 40
    }



    Rectangle {
        id: displaySigmaTRect
        anchors.left: sigmat.right
        anchors.leftMargin: 10
        anchors.verticalCenter: sigmat.verticalCenter
        color: "#d8d8d8d8"
        width: 60; height: 20

        TextEdit {
            id: displaySigmaT
            anchors.centerIn: parent
            text: ""
        }

    }




    Text {
        id: taut
        text: qsTr("TAU_T")
        anchors.left: displaySigmaTRect.right
        anchors.leftMargin: 10
        anchors.verticalCenter: displaySigmaTRect.verticalCenter
    }


    Rectangle {
        id: displayTauTRect
        anchors.left: taut.right
        anchors.leftMargin: 10
        anchors.verticalCenter: taut.verticalCenter
        width: 60; height: 20
        color: "#d8d8d8d8"

        TextEdit {
            id: displayTauT
            anchors.centerIn: parent
            text: ""

        }

    }

    Text {
        id: ksiT
        text: qsTr("KSI_T")
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.horizontalCenterOffset: -20
        anchors.top: displaySigmaTRect.top
        anchors.topMargin: 40
    }


    Rectangle {
        id: displayKsiTRect
        anchors.left: ksiT.right
        anchors.leftMargin: 10
        anchors.verticalCenter: ksiT.verticalCenter
        width: 40; height: 20
        color: "#d8d8d8d8"
        TextEdit {
            id: displayKsiT
            anchors.centerIn: parent
            text: ""
        }

    }

    Text {
        id: ksi1z
        text: qsTr("KSI1_Z")
        anchors.left: sigmat.left
        anchors.leftMargin: -10
        anchors.top: displayKsiTRect.bottom
        anchors.topMargin: 20
    }

    Rectangle {
        id: displayKsi1zRect
        anchors.verticalCenter: ksi1z.verticalCenter
        anchors.left: ksi1z.right
        anchors.leftMargin: 10
        width: 80; height: 20
        color: "#d8d8d8d8"

        TextEdit {
            id: displayKsi1z
            anchors.centerIn: parent
            text: ""
        }

    }


    Text {
        id: ksi1t
        text: qsTr("KSI1_T")
        anchors.left: displayKsi1zRect.right
        anchors.leftMargin: 15
        anchors.verticalCenter: displayKsi1zRect.verticalCenter
        anchors.topMargin: 20
    }


    Rectangle {
        id: displayKsi1tRect
        anchors.verticalCenter: ksi1z.verticalCenter
        anchors.left: ksi1t.right
        anchors.leftMargin: 10
        width: 80; height: 20
        color: "#d8d8d8d8"

        TextEdit {
            id: displayKsi1t
            anchors.centerIn: parent
            text: ""
        }

    }

    Rectangle {
        id: getValues
        anchors.top: displayKsi1tRect.bottom
        anchors.topMargin: parent.height/20
        anchors.left: parent.left
        anchors.leftMargin: 6
        anchors.right: parent.horizontalCenter
        anchors.rightMargin: 5
        color: "darkorange"
        height: parent.height/8
        border.width: 2
        border.color: getValuesButton.pressed ?"yellow": "darkorange"

        MouseArea {
            id: getValuesButton
            anchors.fill: parent
            onClicked: Tabela8_14JS.displayValues(materialInput.text, diameterInput.text) //.displayValues(inputi.text)
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
        anchors.left: parent.horizontalCenter
        anchors.leftMargin: 5
        height: getValues.height
        color: "darkorange"
        border.color: back.pressed ?"yellow": "darkorange"

        border.width: 2

        MouseArea {
            anchors.fill: parent
            onClicked:{
                loader.setSource("")

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

