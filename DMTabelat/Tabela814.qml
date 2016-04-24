import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Controls.Styles 1.2

import "js/Tabela8-14.js" as Tabela8_14JS

Rectangle {
    color: "teal"


    Rectangle {
        id: topRect
        width: parent.width
        height: parent.height/18
        visible: false
    }


    Text {
        id: inputs
        text: qsTr("SIGMA_T dhe TAU_T në N/mm^2")
        anchors.top: parent.top
        anchors.topMargin: topRect.height/3
        anchors.left: parent.left
        anchors.leftMargin:topRect.width/18
    }

    Text {
        id: sigmat
        text: qsTr("SIGMA_T")
        anchors.top: inputs.bottom
        anchors.topMargin: topRect.height/3
        anchors.left: parent.left
        anchors.leftMargin:topRect.width/18
        font.pixelSize: topRect.height*0.7

    }



    Rectangle {
        id: displaySigmaTRect
        anchors.left: sigmat.right
        anchors.leftMargin: topRect.width/19
        anchors.verticalCenter: sigmat.verticalCenter
        anchors.right: parent.right
        anchors.rightMargin: topRect.width/19
        color: "#d8d8d8d8"
        height: topRect.height

        TextEdit {
            id: displaySigmaT
            anchors.centerIn: parent
            font.pixelSize: topRect.height*0.7

            text: ""
        }

    }




    Text {
        id: taut
        text: qsTr("TAU_T")
        anchors.left: sigmat.left
        anchors.top: sigmat.bottom
        anchors.topMargin: topRect.height/5
        font.pixelSize: topRect.height*0.7
    }


    Rectangle {
        id: displayTauTRect
        anchors.right: displaySigmaTRect.right
        anchors.verticalCenter: taut.verticalCenter
        anchors.left: displaySigmaTRect.left
        height: displaySigmaTRect.height
        color: "#d8d8d8d8"


        TextEdit {
            id: displayTauT
            anchors.centerIn: parent
            font.pixelSize: topRect.height*0.7
            text: ""

        }

    }


    Text {
        id: ksiT
        text: qsTr("KSI_T")
        anchors.top: displayTauTRect.bottom
        anchors.topMargin: topRect.height/3
        anchors.left: sigmat.left
        font.pixelSize: topRect.height*0.7
    }


    Rectangle {
        id: displayKsiTRect
        anchors.left: displaySigmaTRect.left
        anchors.verticalCenter: ksiT.verticalCenter
        anchors.right: displaySigmaTRect.right
//        anchors.leftMargin: -topRect.width/4
        height: displaySigmaTRect.height
        color: "#d8d8d8d8"
        TextEdit {
            id: displayKsiT
            anchors.centerIn: parent
            font.pixelSize: topRect.height*0.7
            text: ""
        }

    }

    Text {
        id: ksi1z
        text: qsTr("KSI1_Z")
        anchors.left: sigmat.left
        anchors.top: ksiT.bottom
        anchors.topMargin: topRect.height/5
        font.pixelSize: topRect.height*0.7
    }

    Rectangle {
        id: displayKsi1zRect
        anchors.verticalCenter: ksi1z.verticalCenter
        anchors.left: displayKsiTRect.left
        anchors.right: displaySigmaTRect.right
        height: displaySigmaTRect.height
        color: "#d8d8d8d8"

        TextEdit {
            id: displayKsi1z
            anchors.centerIn: parent
            font.pixelSize: topRect.height*0.7
            text: ""
        }

    }


    Text {
        id: ksi1t
        text: qsTr("KSI1_T")
        anchors.left: ksi1z.left
        anchors.top: displayKsi1zRect.bottom
        anchors.topMargin: topRect.height/3
        font.pixelSize: topRect.height*0.7
    }


    Rectangle {
        id: displayKsi1tRect
        anchors.verticalCenter: ksi1t.verticalCenter
        anchors.left: displayKsi1zRect.left
        anchors.right: displaySigmaTRect.right
        height: displaySigmaTRect.height
        color: "#d8d8d8d8"


        TextEdit {
            id: displayKsi1t
            anchors.centerIn: parent
            font.pixelSize: topRect.height*0.7
            text: ""
        }

    }










    Rectangle {
        id: line
        width: parent.width -10
        height: 2
        color: "black"
        anchors.top: ksi1t.bottom
        anchors.topMargin: topRect.height*0.6
        anchors.horizontalCenter: parent.horizontalCenter
    }
    Text {
        id: note
        text: qsTr("")
        anchors.top: line.bottom
        color: "darkred"
        anchors.horizontalCenter: parent.horizontalCenter
    }


    Text {
        id: inputsLabel
        text: qsTr("Të dhënat.")
        anchors.top: note.bottom
        anchors.topMargin: topRect.height/22
    }





    Text {
        id: material
        text: qsTr("MATERIALI")
        anchors.top: inputsLabel.bottom
        anchors.topMargin: topRect.height*0.3
        anchors.left: parent.left
        anchors.leftMargin: parent.width/18
        font.pixelSize: topRect.height*0.6
    }


    TextField {
        id: materialInput
        anchors.left: material.right
        anchors.leftMargin:  parent.width/22
        anchors.verticalCenter: material.verticalCenter
        height: topRect.height
        width: parent.width/5
        font.pixelSize: topRect.height*0.6

        style: TextFieldStyle {
            background: Rectangle {
                anchors.fill: parent
                color: "#d8d8d8d8"
            }
        }

    }



    ExclusiveGroup {
        id: exclusiveGroup
    }


    Text {
        id: filet
        text: qsTr("F.E GDH.")
        anchors.left: materialInput.right
        anchors.leftMargin: parent.width/12
        anchors.verticalCenter: material.verticalCenter
        font.pixelSize: topRect.height*0.6
        MouseArea {
            anchors.fill: parent
            onClicked: eGdhendur.checked = true
        }

    }

    CheckBox {
        id: eGdhendur
        anchors.left: filet.right
        anchors.leftMargin: 10
        anchors.verticalCenter: filet.verticalCenter
        checked: true
        exclusiveGroup: exclusiveGroup
    }

    Text {
        id: filetN
        text: qsTr("F.E NGJ.")
        anchors.left:filet.left
        anchors.verticalCenter: diameter.verticalCenter
        font.pixelSize: topRect.height*0.6
        MouseArea {
            anchors.fill: parent
            onClicked: eNgjeshur.checked = true
        }

    }

    CheckBox {
        id: eNgjeshur
        anchors.left: filetN.right
        anchors.leftMargin: 10
        anchors.verticalCenter: filetN.verticalCenter

        exclusiveGroup: exclusiveGroup

    }

    Text {
        id: diameter
        text: qsTr("DIAMETRI")
        anchors.left: material.left
        anchors.top: material.bottom
        anchors.topMargin: 20
        font.pixelSize: topRect.height*0.6
    }


    TextField {
        id: diameterInput
        anchors.verticalCenter: diameter.verticalCenter
        anchors.horizontalCenter: materialInput.horizontalCenter
        width: parent.width/5
        height: topRect.height
        font.pixelSize: topRect.height*0.6

        style: TextFieldStyle {
            background: Rectangle {
                anchors.fill: parent
                color: "#d8d8d8d8"
            }
        }
    }







    Rectangle {
        id: getValues  //ne te vertete eshte back
        anchors.top: diameterInput.bottom
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

                onClicked: Tabela8_14JS.displayValues(materialInput.text, diameterInput.text) //.displayValues(inputi.text)

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

