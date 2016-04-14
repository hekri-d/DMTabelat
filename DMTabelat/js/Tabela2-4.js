
var tabela2_4 = [[270, 270, 280, 290, 290, 300, 300, 310, 320, 340, 360, 380, 410, 460, 520, 580, 660, 740, 820, 920, 1050, 1200, 1350, 1500, 1650],
                 [140, 140, 150, 150, 150, 160, 160, 170, 180, 190, 200, 220, 240, 260, 280, 310, 340, 380, 420, 480, 540, 600, 680, 760, 840],
                 [60, 70, 80, 95, 95, 110, 110, 120, 130, 140, 150, 170, 180, 200, 210, 230, 240, 260, 280, 300, 330, 360, 400, 440, 480],
                 [20, 30, 40, 50, 50, 65, 65, 80, 80, 100, 100, 120, 120, 145, 145, 145, 170, 170, 170, 190, 190, 210, 210, 230, 230],
                 [14, 20, 25, 32, 32, 40, 40, 50, 50, 60, 60, 72, 72, 85, 85, 85, 100, 100, 100, 110, 110, 125, 125, 135, 135],
                 [6, 10, 13, 16, 16, 20, 20, 25, 25, 30, 30, 36, 36, 43, 43, 43, 50, 50, 50, 56, 56, 62, 62, 68, 68],
                 [2, 4, 5, 6, 6, 7, 7, 9, 9, 10, 10, 12, 12, 14, 14, 14, 15, 15, 15, 17, 17, 18, 18, 20, 20],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [2, 2, 2, 3, 3, 4, 4, 5, 5, 7, 7, 9, 9, 11, 11, 11, 13, 13, 13, 16, 16, 18, 18, 20, 20], //j(5-6)
                 [4,4,5,6,6,8,8,10,10,12,12,15,15,18,18,18, 21,21,21,26,26, 28,28,32,32 ],
                 [7,9,11,13,13,16,16,19,19,23,23,27,27,31,31,31,36,36,36, 40,40,44,44, 48,48],  //j(8)
                 [12,15,18,21,21,26,26,31,31,37,37,43,43,50,50,50,57,57,57,65,65,70,70,77,77],
                 [20,24,29,35,35,42,42,50,50,60,60,70,70,80,80,80,92,92,92,105,105,115,115,125,125],
                 [30,37,45,55,55,65,65,80,80,95,95,110,110,125,125,125,145,145,145,160,160,180,180,200,200],
                 [45,60,75,90,90,105,105,125,125,150,150,175,175,200,200,200,230,230,230,260,260,285,285,315,315],
                 [70,90,110,135,135,165,165,195,195,230,230,270,270,315,315,315,360,360,360,405,405,445,445,485,485],
                 [125,150,180,215,215,360,260,310,310,370,370,435,435,500,500,500,575,575,575, 650,650,700,700,775,775],
                 [200,240,290,350,350,420,420,500,500,600,600,700,700,800,800,800,925,925,925,1050,1050,1150,1150,1250,1250],
                 [300,375,450,550,550,650,650,800,800,950,950,1100,1100,1250,1250,1250,1450,1450,1450,1600,1600,1800,1800,2000,2000],
                 [450,600,750,900,900,1050,1050,1250,1250,1500,1500,1750,1750,200,2000,2000,2300,2300,2300,2600,2600,2850,2850,3150,3150],
                 [700,900,1100,1350,1350,1650,1650,1950,1950,2300,2300,2700,2700,3150,3150,3150,3600,3600,3600,4050,4050,4450,4450,4850,4850],
                 [0,1,1,1,1,2,2,2,2,2,2,9,9,3,3,3,4,4,4,4,4,4,4,5,5],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [2,4,6,7,7,8,8,9,9,11,11,13,13,15,15,15,17,17,17,20,20,21,21,23,23],
                 [4,8,10,12,12,15,15,17,17,20,20,23,23,27,27,27,31,31,31,34,34,37,37,40,40],
                 [6,12,15,18,18,22,22,26,26,32,32,37,37,43,43,43,50,50,50,56,56,62,62,68,68],       //p(5-11)
                 [10,15,19,23,23,28,28,34,34,41,43,51,54,63,65,68,77,80,84,94,98,108,114,126,132],
                 [14,19,23,28,28,35,35,43,43,53,59,71,79,92,100,108,122,130,140,158,170,190,208,232,252],    //s(5-11)
                 [999999,999999,999999,999999,999999,999999,41,48,54,66,75,91,104,122,134,146,166,180,196,218,240,268,294,330,360],
                 [18,23,28,33,33,41,48,60,70,87,102,124,144,170,190,210,236,258,284,315,350,390,435,490,540],
                 [999999,999999,999999,999999,39,47,55,68,81,102,120,146,172,202,228,252,284,310,340,385,425,475,525,590,660,740,820],
                 [20,28,34,40,45,54,64,80,97,122,146,178,210,248,280,310,350,385,425,475,525,590,660,740,820],
                 [999999,999999,999999,999999,999999,63,75,94,114,144,174,214,254,300,340,380,425,470,520,580,650,730,820,920,1000],
                 [26,35,42,50,60,73,88,112,136,172,210,258,310,365,415,465,520,575,640,710,790,900,1000,1100,1250],
                 [32,42,52,64,77,98,118,148,180,226,274,335,400,470,535,600,670,740,820,920,1000,1150,1300,1450,1600],
                 [40,50,67,90,108,136,160,200,242,300,360,445,525,620,700,780,880,960,1050,1200,1300,1500,1650,1850,2050],
                 [60,80,97,130,150,188,218,274,325,405,480,585,690,800,900,1000,1150,1251,1350,1440,1700,1900,2100,2350,2600]

        ]




//te rishikohet pasiqe eshte kopjuar nga pjesa per vrima!

/*cilesia --> aksiLartesia.currentIndex */

function getDeviationAxis(diametri, shkronja, cilesia) {

    var es_ei = 234234;

    /*                  a                 b                 c                 d    */
    if (shkronja ===0 || shkronja === 1 || shkronja === 2 || shkronja === 3 ||

            /*                       e                 f                 g                 h */
            shkronja === 4 || shkronja === 5 || shkronja === 6 || shkronja === 7){

        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[shkronja][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[shkronja][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[shkronja][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[shkronja][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[shkronja][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[shkronja][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[shkronja][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[shkronja][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[shkronja][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[shkronja][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[shkronja][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[shkronja][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[shkronja][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[shkronja][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[shkronja][14]
        }
        else if(diametri > 160 && diametri <= 180){
            es_ei = tabela2_4[shkronja][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[shkronja][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[shkronja][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[shkronja][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[shkronja][19]                         //gabim - shkronja prej 20 (...[shkronja][20])
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[shkronja][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[shkronja][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[shkronja][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[shkronja][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[shkronja][24]
        }

    }

    /*                        j                                     */
    else if (shkronja === 8 ){

        if (cilesia === 5 || cilesia === 6 ){

            if(diametri >1 && diametri <=3 ){
                es_ei = tabela2_4[8][0]
            }

            else if(diametri >3 && diametri <= 6){
                es_ei = tabela2_4[8][1]
            }

            else if(diametri > 6 && diametri <= 10){
                es_ei = tabela2_4[8][2]
            }
            else if(diametri >10 && diametri <= 14){
                es_ei = tabela2_4[8][3]
            }


            else if(diametri > 14 && diametri <= 18){
                es_ei = tabela2_4[8][4]
            }

            else if(diametri >=18 && diametri < 24){
                es_ei = tabela2_4[8][5]
            }
            else if(diametri > 24 && diametri <= 30){
                es_ei = tabela2_4[8][6]
            }
            else if(diametri > 30 && diametri <= 40){
                es_ei = tabela2_4[8][7]
            }

            else if(diametri > 40 && diametri <= 50){
                es_ei = tabela2_4[8][8]
            }
            else if(diametri > 50 && diametri <= 65){
                es_ei = tabela2_4[8][9]
            }
            else if(diametri > 65 && diametri <= 80){
                es_ei = tabela2_4[8][10]
            }

            else if(diametri > 80 && diametri <= 100){
                es_ei = tabela2_4[8][11]
            }
            else if(diametri > 100 && diametri <= 120){
                es_ei = tabela2_4[8][12]
            }
            else if(diametri > 120 && diametri <= 140){
                es_ei = tabela2_4[8][13]
            }

            else if(diametri > 140 && diametri <= 160){
                es_ei = tabela2_4[8][14]
            }
            else if(diametri > 160 && diametri <= 180){
                es_ei = tabela2_4[8][15]
            }
            else if(diametri > 180 && diametri <= 200){
                es_ei = tabela2_4[8][16]
            }

            else if(diametri > 200 && diametri <= 225){
                es_ei = tabela2_4[8][17]
            }
            else if(diametri > 225 && diametri <= 250){
                es_ei = tabela2_4[8][18]
            }
            else if(diametri > 250 && diametri <= 280){
                es_ei = tabela2_4[8][19]
            }

            else if(diametri > 280 && diametri <= 315){
                es_ei = tabela2_4[8][20]
            }
            else if(diametri >315 && diametri <= 355){
                es_ei = tabela2_4[8][21]
            }
            else if(diametri >355 && diametri <= 400){
                es_ei = tabela2_4[8][22]
            }

            else if(diametri > 400 && diametri <= 450){
                es_ei = tabela2_4[8][23]
            }
            else if(diametri > 450 && diametri <= 500){
                es_ei = tabela2_4[8][24]
            }
        }



        else {

            if(diametri >1 && diametri <=3 ){
                es_ei = tabela2_4[cilesia + 2][0]
            }

            else if(diametri >3 && diametri <= 6){
                es_ei = tabela2_4[cilesia + 2][1]
            }

            else if(diametri > 6 && diametri <= 10){
                es_ei = tabela2_4[cilesia + 2][2]
            }
            else if(diametri >10 && diametri <= 14){
                es_ei = tabela2_4[cilesia + 2][3]
            }


            else if(diametri > 14 && diametri <= 18){
                es_ei = tabela2_4[cilesia + 2][4]
            }

            else if(diametri >=18 && diametri < 24){
                es_ei = tabela2_4[cilesia + 2][5]
            }
            else if(diametri > 24 && diametri <= 30){
                es_ei = tabela2_4[cilesia + 2][6]
            }
            else if(diametri > 30 && diametri <= 40){
                es_ei = tabela2_4[cilesia + 2][7]
            }

            else if(diametri > 40 && diametri <= 50){
                es_ei = tabela2_4[cilesia + 2][8]
            }
            else if(diametri > 50 && diametri <= 65){
                es_ei = tabela2_4[cilesia + 2][9]
            }
            else if(diametri > 65 && diametri <= 80){
                es_ei = tabela2_4[cilesia + 2][10]
            }

            else if(diametri > 80 && diametri <= 100){
                es_ei = tabela2_4[cilesia + 2][11]
            }
            else if(diametri > 100 && diametri <= 120){
                es_ei = tabela2_4[cilesia + 2][12]
            }
            else if(diametri > 120 && diametri <= 140){
                es_ei = tabela2_4[cilesia + 2][13]
            }

            else if(diametri > 140 && diametri <= 160){
                es_ei = tabela2_4[cilesia + 2][14]
            }
            else if(diametri > 160 && diametri <= 180){
                es_ei = tabela2_4[cilesia + 2][15]
            }
            else if(diametri > 180 && diametri <= 200){
                es_ei = tabela2_4[cilesia + 2][16]
            }

            else if(diametri > 200 && diametri <= 225){
                es_ei = tabela2_4[cilesia + 2][17]
            }
            else if(diametri > 225 && diametri <= 250){
                es_ei = tabela2_4[cilesia + 2][18]
            }
            else if(diametri > 250 && diametri <= 280){
                es_ei = tabela2_4[cilesia + 2][19]
            }

            else if(diametri > 280 && diametri <= 315){
                es_ei = tabela2_4[cilesia + 2][20]
            }
            else if(diametri >315 && diametri <= 355){
                es_ei = tabela2_4[cilesia + 2][21]
            }
            else if(diametri >355 && diametri <= 400){
                es_ei = tabela2_4[cilesia + 2][22]
            }

            else if(diametri > 400 && diametri <= 450){
                es_ei = tabela2_4[cilesia + 2][23]
            }
            else if(diametri > 450 && diametri <= 500){
                es_ei = tabela2_4[cilesia + 2][24]
            }
        }





    }

    /*                        k                                     */
    else if(shkronja === 9){

        if (cilesia === 5 || cilesia === 6 || cilesia === 7) {
            if(diametri >1 && diametri <=3 ){
                es_ei = tabela2_4[21][0]
            }

            else if(diametri >3 && diametri <= 6){
                es_ei = tabela2_4[21][1]
            }

            else if(diametri > 6 && diametri <= 10){
                es_ei = tabela2_4[21][2]
            }
            else if(diametri >10 && diametri <= 14){
                es_ei = tabela2_4[21][3]
            }


            else if(diametri > 14 && diametri <= 18){
                es_ei = tabela2_4[21][4]
            }

            else if(diametri >=18 && diametri < 24){
                es_ei = tabela2_4[21][5]
            }
            else if(diametri > 24 && diametri <= 30){
                es_ei = tabela2_4[21][6]
            }
            else if(diametri > 30 && diametri <= 40){
                es_ei = tabela2_4[21][7]
            }

            else if(diametri > 40 && diametri <= 50){
                es_ei = tabela2_4[21][8]
            }
            else if(diametri > 50 && diametri <= 65){
                es_ei = tabela2_4[21][9]
            }
            else if(diametri > 65 && diametri <= 80){
                es_ei = tabela2_4[21][10]
            }

            else if(diametri > 80 && diametri <= 100){
                es_ei = tabela2_4[21][11]
            }
            else if(diametri > 100 && diametri <= 120){
                es_ei = tabela2_4[21][12]
            }
            else if(diametri > 120 && diametri <= 140){
                es_ei = tabela2_4[21][13]
            }

            else if(diametri > 140 && diametri <= 160){
                es_ei = tabela2_4[21][14]
            }
            else if(diametri > 160 && diametri <= 180){
                es_ei = tabela2_4[21][15]
            }
            else if(diametri > 180 && diametri <= 200){
                es_ei = tabela2_4[21][16]
            }

            else if(diametri > 200 && diametri <= 225){
                es_ei = tabela2_4[21][17]
            }
            else if(diametri > 225 && diametri <= 250){
                es_ei = tabela2_4[21][18]
            }
            else if(diametri > 250 && diametri <= 280){
                es_ei = tabela2_4[21][19]
            }

            else if(diametri > 280 && diametri <= 315){
                es_ei = tabela2_4[21][20]
            }
            else if(diametri >315 && diametri <= 355){
                es_ei = tabela2_4[21][21]
            }
            else if(diametri >355 && diametri <= 400){
                es_ei = tabela2_4[21][22]
            }

            else if(diametri > 400 && diametri <= 450){
                es_ei = tabela2_4[21][23]
            }
            else if(diametri > 450 && diametri <= 500){
                es_ei = tabela2_4[21][24]
            }

        }

        else es_ei = 0;




    }

    /*                        m                                     */
    else if( shkronja === 10){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[23][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[23][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[23][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[23][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[23][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[23][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[23][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[23][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[23][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[23][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[23][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[23][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[23][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[23][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[23][14]
        }
        else if(diametri > 160 && diametri <= 180){
            es_ei = tabela2_4[23][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[23][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[23][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[23][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[23][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[23][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[23][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[23][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[23][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[23][24]
        }
    }

    /*                         n                                     */
    else if( shkronja === 11){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[24][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[24][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[24][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[24][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[24][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[24][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[24][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[24][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[24][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[24][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[24][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[24][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[24][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[24][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[24][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[24][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[24][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[24][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[24][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[24][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[24][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[24][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[24][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[24][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[24][24]
        }
    }



    /*                         p                                     */
    else if( shkronja === 12){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[25][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[25][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[25][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[25][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[25][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[25][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[25][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[25][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[25][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[25][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[25][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[25][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[25][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[25][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[25][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[25][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[25][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[25][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[25][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[25][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[25][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[25][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[25][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[25][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[25][24]
        }
    }





    else if( shkronja === 13){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[26][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[26][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[26][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[26][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[26][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[26][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[26][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[26][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[26][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[26][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[26][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[26][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[26][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[26][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[26][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[26][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[26][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[26][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[26][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[26][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[26][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[26][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[26][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[26][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[26][24]
        }
    }





    else if( shkronja === 14){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[27][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[27][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[27][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[27][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[27][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[27][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[27][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[27][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[27][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[27][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[27][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[27][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[27][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[27][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[27][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[27][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[27][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[27][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[27][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[27][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[27][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[27][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[27][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[27][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[27][24]
        }
    }





    else if( shkronja === 15){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[28][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[28][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[28][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[28][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[28][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[28][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[28][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[28][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[28][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[28][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[28][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[28][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[28][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[28][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[28][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[28][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[28][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[28][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[28][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[28][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[28][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[28][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[28][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[28][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[28][24]
        }
    }





    else if( shkronja === 16){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[29][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[29][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[29][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[29][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[29][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[29][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[29][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[29][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[29][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[29][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[29][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[29][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[29][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[29][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[29][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[29][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[29][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[29][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[29][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[29][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[29][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[29][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[29][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[29][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[29][24]
        }
    }





    else if( shkronja === 17){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[30][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[30][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[30][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[30][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[30][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[30][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[30][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[30][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[30][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[30][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[30][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[30][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[30][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[30][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[30][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[30][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[30][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[30][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[30][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[30][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[30][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[30][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[30][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[30][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[30][24]
        }
    }





    else if( shkronja === 18){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[31][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[31][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[31][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[31][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[31][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[31][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[31][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[31][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[31][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[31][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[31][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[31][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[31][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[31][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[31][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[31][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[31][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[31][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[31][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[31][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[31][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[31][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[31][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[31][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[31][24]
        }
    }





    else if( shkronja === 19){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[32][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[32][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[32][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[32][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[32][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[32][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[32][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[32][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[32][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[32][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[32][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[32][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[32][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[32][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[32][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[32][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[32][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[32][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[32][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[32][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[32][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[32][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[32][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[32][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[32][24]
        }
    }





    else if( shkronja === 20){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[33][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[33][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[33][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[33][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[33][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[33][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[33][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[33][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[33][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[33][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[33][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[33][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[33][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[33][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[33][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[33][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[33][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[33][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[33][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[33][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[33][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[33][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[33][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[33][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[33][24]
        }
    }





    else if( shkronja === 21){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[34][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[34][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[34][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[34][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[34][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[34][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[34][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[34][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[34][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[34][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[34][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[34][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[34][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[34][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[34][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[34][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[34][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[34][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[34][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[34][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[34][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[34][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[34][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[34][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[34][24]
        }
    }





    else if( shkronja === 22){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[35][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[35][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[35][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[35][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[35][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[35][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[35][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[35][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[35][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[35][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[35][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[35][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[35][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[35][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[35][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[35][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[35][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[35][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[35][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[35][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[35][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[35][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[35][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[35][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[35][24]
        }
    }





    else if( shkronja === 23){
        if(diametri >1 && diametri <=3 ){
            es_ei = tabela2_4[36][0]
        }

        else if(diametri >3 && diametri <= 6){
            es_ei = tabela2_4[36][1]
        }

        else if(diametri > 6 && diametri <= 10){
            es_ei = tabela2_4[36][2]
        }
        else if(diametri >10 && diametri <= 14){
            es_ei = tabela2_4[36][3]
        }


        else if(diametri > 14 && diametri <= 18){
            es_ei = tabela2_4[36][4]
        }

        else if(diametri >=18 && diametri < 24){
            es_ei = tabela2_4[36][5]
        }
        else if(diametri > 24 && diametri <= 30){
            es_ei = tabela2_4[36][6]
        }
        else if(diametri > 30 && diametri <= 40){
            es_ei = tabela2_4[36][7]
        }

        else if(diametri > 40 && diametri <= 50){
            es_ei = tabela2_4[36][8]
        }
        else if(diametri > 50 && diametri <= 65){
            es_ei = tabela2_4[36][9]
        }
        else if(diametri > 65 && diametri <= 80){
            es_ei = tabela2_4[36][10]
        }

        else if(diametri > 80 && diametri <= 100){
            es_ei = tabela2_4[36][11]
        }
        else if(diametri > 100 && diametri <= 120){
            es_ei = tabela2_4[36][12]
        }
        else if(diametri > 120 && diametri <= 140){
            es_ei = tabela2_4[36][13]
        }

        else if(diametri > 140 && diametri <= 160){
            es_ei = tabela2_4[36][14]
        }
        else if(diametri > 160 && diametri <= 180){

            es_ei = tabela2_4[36][15]
        }
        else if(diametri > 180 && diametri <= 200){
            es_ei = tabela2_4[36][16]
        }

        else if(diametri > 200 && diametri <= 225){
            es_ei = tabela2_4[36][17]
        }
        else if(diametri > 225 && diametri <= 250){
            es_ei = tabela2_4[36][18]
        }
        else if(diametri > 250 && diametri <= 280){
            es_ei = tabela2_4[36][19]
        }

        else if(diametri > 280 && diametri <= 315){
            es_ei = tabela2_4[36][20]
        }
        else if(diametri >315 && diametri <= 355){
            es_ei = tabela2_4[36][21]
        }
        else if(diametri >355 && diametri <= 400){
            es_ei = tabela2_4[36][22]
        }

        else if(diametri > 400 && diametri <= 450){
            es_ei = tabela2_4[36][23]
        }
        else if(diametri > 450 && diametri <= 500){
            es_ei = tabela2_4[36][24]
        }
    }














    if(shkronja<=8)
        es_ei = es_ei *(-1);

    console.log("es_ei returned from tabela2_4 eshte: ", es_ei)
    //    console.log(es_ei.toString())

    return es_ei/1000;
}




/*  getShkronjen e gjen shkronjen bazuar ne te dhenen ...*/

function esGetShkronjen (esKufiriPoshtem, esKurifiriEperm, diametriNominal ) {

    var diam = parseFloat(diametriNominal);

    console.log("diametri nominal",diam)

    if (diam<=3) { diam = 0;}
    else if(diam >6 && diam <=10) { diam = 2; }
    else if(diam >10 && diam <=18) { diam = 3; }
    else if(diam >18 && diam <=30) { diam = 4; }
    else if(diam >30 && diam <=50) { diam = 5; }
    else if(diam >50 && diam <=80) { diam = 6; }
    else if(diam >80 && diam <=120) { diam = 7; }
    else if(diam >120 && diam <=180) { diam = 8; }
    else if(diam >180 && diam <=250) { diam = 9; }
    else if(diam >250 && diam <=315) { diam = 10; }
    else if(diam >315 && diam <=400) { diam = 11; }
    else if(diam >400 && diam <=500) { diam = 12; }

        console.log("diam",diam)
    diam +=4;

    var rreshti = 0;   /* rreshti nga tabela. E percakton shkronjen */


    var i=0;

    /* i <=7 - vlerat es ne tabele. Pastaj fillojne ato ei  */

    console.log("kufiriposhtem funksioni",esKufiriPoshtem);
    console.log("kufirieprem funksioni", esKurifiriEperm)

    while (i <= 7) {
        if(tabela2_4[i][diam] >= esKufiriPoshtem &&
                tabela2_4[i][diam] <= esKurifiriEperm ) {

            rreshti = i;
            console.log("rreshit mrena while eshte: ",rreshti)
            break;


        }

        console.log(" vlera tabela: ",tabela2_4[i][diam])
        i++;

        console.log("rreshit eshte: ",rreshti);
        console.log(" i eshte: ",i)


    }


    var shkronja = "i"


    switch (rreshti) {

    case 0:
        shkronja = "a";
        break;
    case 1:
        shkronja = "b"
        break;
    case 2:
        shkronja = "c";
        break;
    case 3:
        shkronja = "d"
        break;
    case 4:
        shkronja = "e";
        break;
    case 5:
        shkronja = "f"
        break;
    case 6:
        shkronja = "g";
        break;
    case 7:
        shkronja = "h"
        break;

    }

    /*perfundon me h sepse pastaj fillojne vlerat ei ne tabele */



    return shkronja;

}


















