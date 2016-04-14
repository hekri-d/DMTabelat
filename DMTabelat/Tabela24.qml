import QtQuick 2.3

Item {

    Rectangle {
        id:toprect
        anchors.top: parent.top
        anchors.left: parent.left
        anchors.right: parent.right
        height: parent.height/10
        color: "red"
    }





    Rectangle {
        id: getValues
//        anchors.top: inputDiametri.bottom
//        anchors.topMargin: parent.height/20
        anchors.left: parent.left
        anchors.leftMargin: 6
//        anchors.rightMargin: 3
        anchors.bottom: parent.bottom
        anchors.bottomMargin: parent.width/4
        height: parent.height/8
        width: parent.width/2
        border.color: getValuesButton.pressed ?"yellow": "darkorange"

        color: "orange"

        MouseArea {
            id: getValuesButton
            anchors.fill: parent
            onClicked: Tabela2_1JS.getValues(inputCilesia.text, inputDiametri.text )
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
        anchors.leftMargin: 3
        height: getValues.height
        color: "darkorange"
        border.color: back.pressed ?"yellow": "darkorange"
        width: parent.width/2
        border.width: 2

        MouseArea {
            anchors.fill: parent
            onClicked: {

                stack.pop()
                root.mouseAreas = true;

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
