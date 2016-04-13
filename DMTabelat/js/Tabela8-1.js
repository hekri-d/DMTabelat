var tabela8_1 = [[0.2, 0.670, 0.555, 0.108, 0.241, 5.46],
              [0.225, 0.754, 0.624, 0.122, 0.306, 5.46],
              [0.25, 0.838, 0.693, 0.135, 0.378, 5.45],

              [0.25, 0.938, 0.793, 0.135, 0.495, 4.86],
              [0.25, 1.038, 0.893, 0.135, 0.628, 4.4],
              [0.3, 1.205, 1.032,  0.162, 0.836, 4.55],

              [0.35, 1.373, 1.171, 0.189, 1.08, 4.65],
              [0.35, 1.573, 1.371, 0.189, 1.47, 4.05],
              [0.40, 1.740, 1.509, 0.217, 1.79, 4.2],

              [0.45, 1.908, 1.648, 0.244, 2.13, 4.3],
              [0.45, 2.208, 1.948, 0.244, 2.98, 3.72],
              [0.50, 2.675, 2.387, 0.271, 4.47, 3.42],

              [0.60, 3.110, 2.764, 0.325, 6.00, 3.52],
              [0.7, 3.545, 3.141,  0.379, 7.75, 3.6],
              [0.75, 4.013, 3.580, 0.406, 10.1, 3.4],

              [0.80, 4.480, 4.019, 0.433, 12.7, 3.26],
              [1.0, 5.350, 4.773,  0.541, 17.9, 3.42],
              [1.25, 7.188, 6.466, 0.677, 32.8, 3.18],

              [1.5, 9.026,  8.160,  0.812, 52.3, 3.03],
              [1.75, 10.863, 9.853, 0.947, 76.2, 2.94],
              [2.0, 12.701, 11.546, 1.083, 104, 2.87],

              [2.0, 14.701, 13.546, 1.083, 144, 2.48],
              [2.5, 16.376, 14.933, 1.353, 175, 2.80],
              [2.5, 18.376, 16.933, 1.353, 225, 2.48],

              [2.5, 20.376, 18.933, 1.353, 282, 2.24],
              [3.0, 22.051, 20.320, 1.624, 324, 2.48],
              [3.0, 25.051, 23.320, 1.624, 427, 2.18],

              [3.5, 27.727, 25.706, 1.894, 519, 2.34],
              [3.5, 30.727, 28.706, 1.894, 647, 2.08],
              [4.0, 33.402, 31.093, 2.165, 759, 2.19],

              [4.0, 36.402, 34.093, 2.165, 913, 2.10],
              [4.5, 39.077, 36.479, 2.436, 1045, 2.1],
              [4.5, 42.077, 39.479, 2.136, 1224, 1.95]

        ]

function displayValues(inp) {

    var diametri = parseFloat(inp);

    if (diametri === 0.8){
        teksti21.text = tabela8_1[0][0]
        teksti22.text = tabela8_1[0][1]
        teksti23.text = tabela8_1[0][2]
        teksti24.text = tabela8_1[0][3]
        teksti25.text = tabela8_1[0][4]
        teksti26.text = tabela8_1[0][5]
    }

    else if (diametri === 0.9){
        teksti21.text = tabela8_1[1][0]
        teksti22.text = tabela8_1[1][1]
        teksti23.text = tabela8_1[1][2]
        teksti24.text = tabela8_1[1][3]
        teksti25.text = tabela8_1[1][4]
        teksti26.text = tabela8_1[1][5]
    }
    else if (diametri === 1){
        teksti21.text = tabela8_1[2][0]
        teksti22.text = tabela8_1[2][1]
        teksti23.text = tabela8_1[2][2]
        teksti24.text = tabela8_1[2][3]
        teksti25.text = tabela8_1[2][4]
        teksti26.text = tabela8_1[2][5]
    }
    else if (diametri === 1.1){
        teksti21.text = tabela8_1[3][0]
        teksti22.text = tabela8_1[3][1]
        teksti23.text = tabela8_1[3][2]
        teksti24.text = tabela8_1[3][3]
        teksti25.text = tabela8_1[3][4]
        teksti26.text = tabela8_1[3][5]
    }
    else if (diametri === 1.2){
        teksti21.text = tabela8_1[4][0]
        teksti22.text = tabela8_1[4][1]
        teksti23.text = tabela8_1[4][2]
        teksti24.text = tabela8_1[4][3]
        teksti25.text = tabela8_1[4][4]
        teksti26.text = tabela8_1[4][5]
    }
    else if (diametri === 1.4){
        teksti21.text = tabela8_1[5][0]
        teksti22.text = tabela8_1[5][1]
        teksti23.text = tabela8_1[5][2]
        teksti24.text = tabela8_1[5][3]
        teksti25.text = tabela8_1[5][4]
        teksti26.text = tabela8_1[5][5]
    }
    else if (diametri === 1.6){
        teksti21.text = tabela8_1[6][0]
        teksti22.text = tabela8_1[6][1]
        teksti23.text = tabela8_1[6][2]
        teksti24.text = tabela8_1[6][3]
        teksti25.text = tabela8_1[6][4]
        teksti26.text = tabela8_1[6][5]
    }
    else if (diametri === 1.8){
        teksti21.text = tabela8_1[7][0]
        teksti22.text = tabela8_1[7][1]
        teksti23.text = tabela8_1[7][2]
        teksti24.text = tabela8_1[7][3]
        teksti25.text = tabela8_1[7][4]
        teksti26.text = tabela8_1[7][5]
    }
    else if (diametri === 2){
        teksti21.text = tabela8_1[8][0]
        teksti22.text = tabela8_1[8][1]
        teksti23.text = tabela8_1[8][2]
        teksti24.text = tabela8_1[8][3]
        teksti25.text = tabela8_1[8][4]
        teksti26.text = tabela8_1[8][5]
    }
    else if (diametri === 2.2){
        teksti21.text = tabela8_1[9][0]
        teksti22.text = tabela8_1[9][1]
        teksti23.text = tabela8_1[9][2]
        teksti24.text = tabela8_1[9][3]
        teksti25.text = tabela8_1[9][4]
        teksti26.text = tabela8_1[9][5]
    }
    else if (diametri === 2.5){
        teksti21.text = tabela8_1[10][0]
        teksti22.text = tabela8_1[10][1]
        teksti23.text = tabela8_1[10][2]
        teksti24.text = tabela8_1[10][3]
        teksti25.text = tabela8_1[10][4]
        teksti26.text = tabela8_1[10][5]
    }
    else if (diametri === 3){
        teksti21.text = tabela8_1[11][0]
        teksti22.text = tabela8_1[11][1]
        teksti23.text = tabela8_1[11][2]
        teksti24.text = tabela8_1[11][3]
        teksti25.text = tabela8_1[11][4]
        teksti26.text = tabela8_1[11][5]
    }
    else if (diametri === 3.5){
        teksti21.text = tabela8_1[12][0]
        teksti22.text = tabela8_1[12][1]
        teksti23.text = tabela8_1[12][2]
        teksti24.text = tabela8_1[12][3]
        teksti25.text = tabela8_1[12][4]
        teksti26.text = tabela8_1[12][5]
    }
    else if (diametri === 4){
        teksti21.text = tabela8_1[13][0]
        teksti22.text = tabela8_1[13][1]
        teksti23.text = tabela8_1[13][2]
        teksti24.text = tabela8_1[13][3]
        teksti25.text = tabela8_1[13][4]
        teksti26.text = tabela8_1[13][5]
    }
    else if (diametri === 4.5){
        teksti21.text = tabela8_1[14][0]
        teksti22.text = tabela8_1[14][1]
        teksti23.text = tabela8_1[14][2]
        teksti24.text = tabela8_1[14][3]
        teksti25.text = tabela8_1[14][4]
        teksti26.text = tabela8_1[14][5]
    }
    else if (diametri === 5){
        teksti21.text = tabela8_1[15][0]
        teksti22.text = tabela8_1[15][1]
        teksti23.text = tabela8_1[15][2]
        teksti24.text = tabela8_1[15][3]
        teksti25.text = tabela8_1[15][4]
        teksti26.text = tabela8_1[15][5]
    }
    else if (diametri === 6){
        teksti21.text = tabela8_1[16][0]
        teksti22.text = tabela8_1[16][1]
        teksti23.text = tabela8_1[16][2]
        teksti24.text = tabela8_1[16][3]
        teksti25.text = tabela8_1[16][4]
        teksti26.text = tabela8_1[16][5]
    }
    else if (diametri === 8){
        teksti21.text = tabela8_1[17][0]
        teksti22.text = tabela8_1[17][1]
        teksti23.text = tabela8_1[17][2]
        teksti24.text = tabela8_1[17][3]
        teksti25.text = tabela8_1[17][4]
        teksti26.text = tabela8_1[17][5]
    }
    else if (diametri === 10){
        teksti21.text = tabela8_1[18][0]
        teksti22.text = tabela8_1[18][1]
        teksti23.text = tabela8_1[18][2]
        teksti24.text = tabela8_1[18][3]
        teksti25.text = tabela8_1[18][4]
        teksti26.text = tabela8_1[18][5]
    }
    else if (diametri === 12){
        teksti21.text = tabela8_1[19][0]
        teksti22.text = tabela8_1[19][1]
        teksti23.text = tabela8_1[19][2]
        teksti24.text = tabela8_1[19][3]
        teksti25.text = tabela8_1[19][4]
        teksti26.text = tabela8_1[19][5]
    }
    else if (diametri === 14){
        teksti21.text = tabela8_1[20][0]
        teksti22.text = tabela8_1[20][1]
        teksti23.text = tabela8_1[20][2]
        teksti24.text = tabela8_1[20][3]
        teksti25.text = tabela8_1[20][4]
        teksti26.text = tabela8_1[20][5]
    }
    else if (diametri === 16){
        teksti21.text = tabela8_1[21][0]
        teksti22.text = tabela8_1[21][1]
        teksti23.text = tabela8_1[21][2]
        teksti24.text = tabela8_1[21][3]
        teksti25.text = tabela8_1[21][4]
        teksti26.text = tabela8_1[21][5]
    }
    else if (diametri === 18){
        teksti21.text = tabela8_1[22][22]
        teksti22.text = tabela8_1[22][1]
        teksti23.text = tabela8_1[22][2]
        teksti24.text = tabela8_1[22][3]
        teksti25.text = tabela8_1[22][4]
        teksti26.text = tabela8_1[22][5]
    }
    else if (diametri === 20){
        teksti21.text = tabela8_1[23][23]
        teksti22.text = tabela8_1[23][1]
        teksti23.text = tabela8_1[23][2]
        teksti24.text = tabela8_1[23][3]
        teksti25.text = tabela8_1[23][4]
        teksti26.text = tabela8_1[23][5]
    }
    else if (diametri === 22){
        teksti21.text = tabela8_1[24][0]
        teksti22.text = tabela8_1[24][1]
        teksti23.text = tabela8_1[24][2]
        teksti24.text = tabela8_1[24][3]
        teksti25.text = tabela8_1[24][4]
        teksti26.text = tabela8_1[24][5]
    }
    else if (diametri === 24){
        teksti21.text = tabela8_1[25][0]
        teksti22.text = tabela8_1[25][1]
        teksti23.text = tabela8_1[25][2]
        teksti24.text = tabela8_1[25][3]
        teksti25.text = tabela8_1[25][4]
        teksti26.text = tabela8_1[25][5]
    }
    else if (diametri === 27){
        teksti21.text = tabela8_1[26][26]
        teksti22.text = tabela8_1[26][1]
        teksti23.text = tabela8_1[26][2]
        teksti24.text = tabela8_1[26][3]
        teksti25.text = tabela8_1[26][4]
        teksti26.text = tabela8_1[26][5]
    }
    else if (diametri === 30){
        teksti21.text = tabela8_1[27][0]
        teksti22.text = tabela8_1[27][1]
        teksti23.text = tabela8_1[27][2]
        teksti24.text = tabela8_1[27][3]
        teksti25.text = tabela8_1[27][4]
        teksti26.text = tabela8_1[27][5]
    }
    else if (diametri === 33){
        teksti21.text = tabela8_1[28][0]
        teksti22.text = tabela8_1[28][1]
        teksti23.text = tabela8_1[28][2]
        teksti24.text = tabela8_1[28][3]
        teksti25.text = tabela8_1[28][4]
        teksti26.text = tabela8_1[28][5]
    }
    else if (diametri === 36){
        teksti21.text = tabela8_1[29][29]
        teksti22.text = tabela8_1[29][1]
        teksti23.text = tabela8_1[29][2]
        teksti24.text = tabela8_1[29][3]
        teksti25.text = tabela8_1[29][4]
        teksti26.text = tabela8_1[29][5]
    }
    else if (diametri === 39){
        teksti21.text = tabela8_1[30][0]
        teksti22.text = tabela8_1[30][1]
        teksti23.text = tabela8_1[30][2]
        teksti24.text = tabela8_1[30][3]
        teksti25.text = tabela8_1[30][4]
        teksti26.text = tabela8_1[30][5]
    }
    else if (diametri === 42){
        teksti21.text = tabela8_1[31][0]
        teksti22.text = tabela8_1[31][1]
        teksti23.text = tabela8_1[31][2]
        teksti24.text = tabela8_1[31][3]
        teksti25.text = tabela8_1[31][4]
        teksti26.text = tabela8_1[31][5]
    }
    else if (diametri === 45){
        teksti21.text = tabela8_1[32][0]
        teksti22.text = tabela8_1[32][1]
        teksti23.text = tabela8_1[32][2]
        teksti24.text = tabela8_1[32][3]
        teksti25.text = tabela8_1[32][4]
        teksti26.text = tabela8_1[32][5]
    }






}

