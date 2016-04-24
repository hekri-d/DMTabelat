import QtQuick 2.3
import QtQuick.Window 2.2
import QtQuick.Controls.Styles 1.2
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1
//import Qt.labs.controls 1.0

Window {
    id: root
    visible: true
    width: 340
    height: 460
    color: "lightgray"


    property bool mouseAreas: true;


    Component {
        id: tabela21

        Tabela21 { }
    }


    Component {
        id: tabela24

        Tabela24 { }
    }



    Component {
        id: tabela814

        Tabela814 { }
    }


    Component {
        id: tabela82

        Tabela82 { }
    }

    StackView {
        id: stack
        anchors.fill: parent

        initialItem: gridiz



    }


    Component {
        id: gridiz

        Item {
            id: ajtemi
//            anchors.fill: parent


            Grid {
                id: gridi
                columns: 2
                spacing: 2
                //        anchors.right: parent.right
                //        anchors.rightMargin: 7
                //        anchors.left: parent.left
                //        anchors.leftMargin: 5
                //        anchors.top: parent.top
                //        anchors.topMargin: 5
                //        anchors.bottom: parent.bottom

                anchors.fill: parent

                Rectangle {
                    id:katrori1
                    width: parent.width / 2
                    height: parent.height / 6
                    color: "lightsteelblue"

                    Text {
                        text: qsTr("TABELA 2.1 \nTOLERANCAT")
                        anchors.centerIn: parent
                    }

                    MouseArea {
                        id: mous
                        anchors.fill: parent
                        enabled: mouseAreas

                        onClicked: {
                            stack.push(tabela21)
                        }
                    }
                }

                Rectangle {
                    id: katrori2
                    width: parent.width / 2
                    height: parent.height / 6
                    color: "lightsteelblue"

                    Text {

                        text: qsTr("TABELA 8.2 \nPERMASAT E FILE.")
                        anchors.centerIn: parent
                    }

                    MouseArea {
                        anchors.fill: parent

                        onClicked: stack.push(tabela82)
                    }
                }

                Rectangle {
                    width: parent.width / 2
                    height: parent.height / 6
                    color: "lightsteelblue"

                    Text {

                        text: qsTr("TABELA 2.4 \nSHMANGIET AKSE")
                        anchors.centerIn: parent
                    }

                    MouseArea {
                        anchors.fill: parent

                        onClicked: {
                            stack.push(tabela24)

                        }
                    }
                }

                Rectangle {
                    width: parent.width / 2
                    height: parent.height / 6
                    color: "lightsteelblue"

                    Text {

                        text: qsTr("TABELA 2.5 \nSHMANGIET VRIMA")
                        anchors.centerIn: parent
                    }

                    MouseArea {
                        anchors.fill: parent

                        //onClicked:
                    }
                }

                Rectangle {
                    width: parent.width / 2
                    height: parent.height / 6
                    color: "lightsteelblue"

                    Text {

                        text: qsTr("TABELA 1")
                        anchors.centerIn: parent
                    }

                    MouseArea {
                        anchors.fill: parent

                        //onClicked:
                    }
                }

                Rectangle {
                    width: parent.width / 2
                    height: parent.height / 6
                    color: "lightsteelblue"

                    Text {

                        text: qsTr("TABELA 8.14 \nSIGMA T, SIGMA Z")
                        anchors.centerIn: parent
                    }

                    MouseArea {
                        anchors.fill: parent
//                        enabled: mouseAreas

                        onClicked: stack.push(tabela814)
                    }
                }
            }




            Rectangle {
                id: fuck
                color: "lightsteelblue"
                anchors.bottom: parent.bottom
                width: parent.width
                height: parent.height / 5
                z: 1

                Text {
                    id: quit
                    text: qsTr("MBYLL")
                    anchors.centerIn: parent
                    font.pixelSize: 23

                }
                MouseArea {
                    anchors.fill: parent

                    onClicked: Qt.quit()

                }
            }


        }

    }


}
