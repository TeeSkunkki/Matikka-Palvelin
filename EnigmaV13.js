'use strict';


const enigma = [{"id":1},
{"id":2},
{"id":3},
{"id":4},
{"id":5},
{"id":6},
{"id":7},
{"id":8},
{"id":9},
{"id":10},
{"id":11},
{"id":12},
{"id":13},
{"id":14},
{"id":15},
{"id":16},
{"id":17},
{"id":18},
{"id":19},
{"id":20},
{"id":21},
{"id":22},
{"id":23},
{"id":24},
{"id":25},
{"id":26},
{"id":27},
{"id":28},
{"id":29},
{"id":30},
{"id":31},
{"id":32},
{"id":33},
{"id":34},
{"id":35},
{"id":36},
{"id":37},
{"id":38},
{"id":39},
{"id":40},
{"id":41},
{"id":42},
{"id":43},
{"id":44},
{"id":45},
{"id":46},
{"id":47},
{"id":48},
{"id":49},
{"id":50},
{"id":51},
{"id":52},
{"id":53},
{"id":54},
{"id":55},
{"id":56},
{"id":57},
{"id":58},
{"id":59},
{"id":60},
{"id":61},
{"id":62},
{"id":63},
{"id":64},
{"id":65},
{"id":66},
{"id":67},
{"id":68},
{"id":69},
{"id":70},
{"id":71},
{"id":72},
{"id":73},
{"id":74},
{"id":75},
{"id":76},
{"id":77},
{"id":78},
{"id":79},
{"id":80},
{"id":81},
{"id":82},
{"id":83},
{"id":84},
{"id":85},
{"id":86},
{"id":87},
{"id":88},
{"id":89},
{"id":90},
{"id":91},
{"id":92},
{"id":93},
{"id":94},
{"id":95},
{"id":96},
{"id":97},
{"id":98},
{"id":99},
{"id":100},
{"id":101},
{"id":102},
{"id":103},
{"id":104},
{"id":105},
{"id":106}]


function Uudet() {
    var check = 0;
    var a = 0;
    var i = 0;
    for (i = 0; i < enigma.length; i++) {
        enigma[i].id = Math.floor(Math.random()*106+1);
        check = 0
            for(check = 0; check < 1;){
            if (enigma[i].id > 106) {
            enigma[i].id = Math.floor(Math.random()*106+1);
        } else {
            check += 1
        }
        }
        check = 0
        for(check = 0; check < 2; check++){
            a = 0
        for (a = 0; a < i; a++) {
            if (enigma[a].id == enigma[i].id) {
                enigma[i].id = Math.floor(Math.random()*106+1);
                check = 0
            }
        }
        }
    }
    var nerd = [];
    for (let n = 0; n < enigma.length; n++){
        nerd.push(enigma[n].id);
    }
    document.querySelector("#numerot").value = nerd.join(" ");
    }

function Vanhat() {
    const numerot = document.querySelector("#numerot").value;
    var numerot2 = numerot.split(" ");
    for(let x = 0; x < enigma.length; x++){
        enigma[x].id = Number(numerot2[x]);
    }
}

function Encode() {
	var dab = 0;
	var hot = 0;
	var kerrat = 0;
	var vastaus = 0;
	var pituuslaskuja = 0;
	var pituuslaskuja2 = 0;
	var salaisuuksii = [];
	var numbrz1 = Math.floor(Math.random()*100+1);
	var numbrz2 = Math.floor(Math.random()*100+1);
	var numbrz3 = Math.floor(Math.random()*100+1);
	const kirjaimii = document.querySelector("#decoded").value;

	  dab += numbrz1
	  dab += numbrz2
	  dab /= 2
	  dab += numbrz3
      dab = Math.floor(dab);
      
	vastaus = dab + kerrat + 1
	salaisuuksii.push(vastaus.toString(16))
	//dab

	for (let i = 0; i < kirjaimii.length; i++) {

	  hot = kirjaimii[i]
	   
	    switch( hot ) {
	   
	    case 'a':
		salaisuuksii.push(dab + kerrat + enigma[0].id);
		   break;
		case 'b':
		salaisuuksii.push(dab + kerrat + enigma[1].id);
		   break;
		case 'c':
		salaisuuksii.push(dab + kerrat + enigma[2].id);
		   break;
		case 'd':
		salaisuuksii.push(dab + kerrat + enigma[3].id);
		   break;
		case 'e':
		salaisuuksii.push(dab + kerrat + enigma[4].id);
		   break;
		case 'f':
		salaisuuksii.push(dab + kerrat + enigma[5].id);
		   break;
		case 'g':
		salaisuuksii.push(dab + kerrat + enigma[6].id);
		   break;
		case 'h':
		salaisuuksii.push(dab + kerrat + enigma[7].id);
		   break;
		case 'i':
		salaisuuksii.push(dab + kerrat + enigma[8].id);
		   break;
		case 'j':
		salaisuuksii.push(dab + kerrat + enigma[9].id);
		   break;
		case 'k':
		salaisuuksii.push(dab + kerrat + enigma[10].id);
		   break;
		case 'l':
		salaisuuksii.push(dab + kerrat + enigma[11].id);
		   break;
		case 'm':
		salaisuuksii.push(dab + kerrat + enigma[12].id);
		   break;
		case 'n':
		salaisuuksii.push(dab + kerrat + enigma[13].id);
		   break;
		case 'o':
		salaisuuksii.push(dab + kerrat + enigma[14].id);
		   break;
		case 'p':
		salaisuuksii.push(dab + kerrat + enigma[15].id);
		   break;
		case 'q':
		salaisuuksii.push(dab + kerrat + enigma[16].id);
		   break;
		case 'r':
		salaisuuksii.push(dab + kerrat + enigma[17].id);
		   break;
		case 's':
		salaisuuksii.push(dab + kerrat + enigma[18].id);
		   break;
		case 't':
		salaisuuksii.push(dab + kerrat + enigma[19].id);
		   break;
		case 'u':
		salaisuuksii.push(dab + kerrat + enigma[20].id);
		   break;
		case 'v':
		salaisuuksii.push(dab + kerrat + enigma[21].id);
		   break;
		case 'w':
		salaisuuksii.push(dab + kerrat + enigma[22].id);
		   break;
		case 'x':
		salaisuuksii.push(dab + kerrat + enigma[23].id);
		   break;
		case 'y':
		salaisuuksii.push(dab + kerrat + enigma[24].id);
		   break;
		case 'z':
		salaisuuksii.push(dab + kerrat + enigma[25].id);
		   break;
		case 'å':
		salaisuuksii.push(dab + kerrat + enigma[26].id);
		   break;
		case 'ä':
		salaisuuksii.push(dab + kerrat + enigma[27].id);
		   break;
		case 'ö':
		salaisuuksii.push(dab + kerrat + enigma[28].id);
		   break;
		case 'A':
		salaisuuksii.push(dab + kerrat + enigma[29].id);
		   break;
		case 'B':
		salaisuuksii.push(dab + kerrat + enigma[30].id);
		   break;
		case 'C':
		salaisuuksii.push(dab + kerrat + enigma[31].id);
		   break;
		case 'D':
		salaisuuksii.push(dab + kerrat + enigma[32].id);
		   break;
		case 'E':
		salaisuuksii.push(dab + kerrat + enigma[33].id);
		   break;
		case 'F':
		salaisuuksii.push(dab + kerrat + enigma[34].id);
		   break;
		case 'G':
		salaisuuksii.push(dab + kerrat + enigma[35].id);
		   break;
		case 'H':
		salaisuuksii.push(dab + kerrat + enigma[36].id);
		   break;
		case 'I':
		salaisuuksii.push(dab + kerrat + enigma[37].id);
		   break;
		case 'J':
		salaisuuksii.push(dab + kerrat + enigma[38].id);
		   break;
		case 'K':
		salaisuuksii.push(dab + kerrat + enigma[39].id);
		   break;
		case 'L':
		salaisuuksii.push(dab + kerrat + enigma[40].id);
		   break;
		case 'M':
		salaisuuksii.push(dab + kerrat + enigma[41].id);
		   break;
		case 'N':
		salaisuuksii.push(dab + kerrat + enigma[42].id);
		   break;
		case 'O':
		salaisuuksii.push(dab + kerrat + enigma[43].id);
		   break;
		case 'P':
		salaisuuksii.push(dab + kerrat + enigma[44].id);
		   break;
		case 'Q':
		salaisuuksii.push(dab + kerrat + enigma[45].id);
		   break;
		case 'R':
		salaisuuksii.push(dab + kerrat + enigma[46].id);
		   break;
		case 'S':
		salaisuuksii.push(dab + kerrat + enigma[47].id);
		   break;
		case 'T':
		salaisuuksii.push(dab + kerrat + enigma[48].id);
		   break;
		case 'U':
		salaisuuksii.push(dab + kerrat + enigma[49].id);
		   break;
		case 'V':
		salaisuuksii.push(dab + kerrat + enigma[50].id);
		   break;
		case 'W':
		salaisuuksii.push(dab + kerrat + enigma[51].id);
		   break;
		case 'X':
		salaisuuksii.push(dab + kerrat + enigma[52].id);
		   break;
		case 'Y':
		salaisuuksii.push(dab + kerrat + enigma[53].id);
		   break;
		case 'Z':
		salaisuuksii.push(dab + kerrat + enigma[54].id);
		   break;
		case 'Å':
		salaisuuksii.push(dab + kerrat + enigma[55].id);
		   break;
		case 'Ä':
		salaisuuksii.push(dab + kerrat + enigma[56].id);
		   break;
		case 'Ö':
		salaisuuksii.push(dab + kerrat + enigma[57].id);
		   break;
		case '0':
		salaisuuksii.push(dab + kerrat + enigma[58].id);
		   break;
		case '1':
		salaisuuksii.push(dab + kerrat + enigma[59].id);
		   break;
		case '2':
		salaisuuksii.push(dab + kerrat + enigma[60].id);
		   break;
		case '3':
		salaisuuksii.push(dab + kerrat + enigma[61].id);
		   break;
		case '4':
		salaisuuksii.push(dab + kerrat + enigma[62].id);
		   break;
		case '5':
		salaisuuksii.push(dab + kerrat + enigma[63].id);
		   break;
		case '6':
		salaisuuksii.push(dab + kerrat + enigma[64].id);
		   break;
		case '7':
		salaisuuksii.push(dab + kerrat + enigma[65].id);
		   break;
		case '8':
		salaisuuksii.push(dab + kerrat + enigma[66].id);
		   break;
		case '9':
		salaisuuksii.push(dab + kerrat + enigma[67].id);
		   break;
		case ' ':
		salaisuuksii.push(dab + kerrat + enigma[68].id);
		   break;
		case ',':
		salaisuuksii.push(dab + kerrat + enigma[69].id);
		   break;
		case '.':
		salaisuuksii.push(dab + kerrat + enigma[70].id);
		   break;
		case '<':
		salaisuuksii.push(dab + kerrat + enigma[71].id);
		   break;
		case '>':
		salaisuuksii.push(dab + kerrat + enigma[72].id);
		   break;
		case '|':
		salaisuuksii.push(dab + kerrat + enigma[73].id);
		   break;
		case '-':
		salaisuuksii.push(dab + kerrat + enigma[74].id);
		   break;
		case '!':
		salaisuuksii.push(dab + kerrat + enigma[75].id);
		   break;
		case '#':
		salaisuuksii.push(dab + kerrat + enigma[76].id);
		   break;
		case '¤':
		salaisuuksii.push(dab + kerrat + enigma[77].id);
		   break;
		case '%':
		salaisuuksii.push(dab + kerrat + enigma[78].id);
		   break;
		case '&':
		salaisuuksii.push(dab + kerrat + enigma[79].id);
		   break;
		case '/':
		salaisuuksii.push(dab + kerrat + enigma[80].id);
		   break;
		case '(':
		salaisuuksii.push(dab + kerrat + enigma[81].id);
		   break;
		case ')':
		salaisuuksii.push(dab + kerrat + enigma[82].id);
		   break;
		case '=':
		salaisuuksii.push(dab + kerrat + enigma[83].id);
		   break;
		case '+':
		salaisuuksii.push(dab + kerrat + enigma[84].id);
		   break;
		case '?':
		salaisuuksii.push(dab + kerrat + enigma[85].id);
		   break;
		case '_':
		salaisuuksii.push(dab + kerrat + enigma[86].id);
		   break;
		case ';':
		salaisuuksii.push(dab + kerrat + enigma[87].id);
		   break;
		case ':':
		salaisuuksii.push(dab + kerrat + enigma[88].id);
		   break;
		case "'":
		salaisuuksii.push(dab + kerrat + enigma[89].id);
		   break;
		case '*':
		salaisuuksii.push(dab + kerrat + enigma[90].id);
		   break;
		case '¨':
		salaisuuksii.push(dab + kerrat + enigma[91].id);
		   break;
		case '^':
		salaisuuksii.push(dab + kerrat + enigma[92].id);
		   break;
		case '@':
		salaisuuksii.push(dab + kerrat + enigma[93].id);
		   break;
		case '£':
		salaisuuksii.push(dab + kerrat + enigma[94].id);
		   break;
		case '€':
		salaisuuksii.push(dab + kerrat + enigma[95].id);
		   break;
		case '{':
		salaisuuksii.push(dab + kerrat + enigma[96].id);
		   break;
		case '}':
		salaisuuksii.push(dab + kerrat + enigma[97].id);
		   break;
		case '[':
		salaisuuksii.push(dab + kerrat + enigma[98].id);
		   break;
		case ']':
		salaisuuksii.push(dab + kerrat + enigma[99].id);
		   break;
		case '§':
		salaisuuksii.push(dab + kerrat + enigma[100].id);
		   break;
		case '~':
		salaisuuksii.push(dab + kerrat + enigma[101].id);
		   break;
		case '$':
		salaisuuksii.push(dab + kerrat + enigma[102].id);
		   break;
		case '’':
		salaisuuksii.push(dab + kerrat + enigma[103].id);
		   break;
		case 'é':
		salaisuuksii.push(dab + kerrat + enigma[104].id);
		   break;
		case '"':
        salaisuuksii.push(dab + kerrat + enigma[105].id);
		   break;
        default:
           salaisuuksii.push(dab + kerrat + enigma[68].id);
           break;
		}
        
		kerrat++
    }
    
    salaisuuksii = salaisuuksii.map(x => x.toString(16));
	pituuslaskuja = salaisuuksii.length ;
	pituuslaskuja2 = pituuslaskuja / 2 ;
	salaisuuksii.splice(1, 0, numbrz1);
	salaisuuksii.splice(pituuslaskuja2, 0, numbrz2);
    salaisuuksii.splice(pituuslaskuja, 0, numbrz3);
    document.querySelector("#encoded").value = salaisuuksii.join(" ");
    }

function Decode() {
        var dab = 0;
        var hot = 0;
        var ihavaralt = 0;
        var kerrat = 0;
        var vastaus = [];
        var vastaus1 = 0;
        const salaisuuksii = document.querySelector("#encoded").value;
        var salatekstilista1 = salaisuuksii.split(" ");
        var salatekstilista2
        var numbrz1 = 0;
        var numbrz2 = 0;
        var numbrz3 = 0;
        
        
        var Y = salatekstilista1.length / 2 - 2;
        if(Number.isInteger(Y) === false){
          Y = parseInt(Y)
          Y += 1
        }
        var X = salatekstilista1.length - 5
        var Y = salatekstilista1.length / 2 - 3 ;
        if(Number.isInteger(Y) === false){
          Y = parseInt(Y)
          Y += 1
        }
        numbrz1 = salatekstilista1[1];
        numbrz1 = parseInt(numbrz1);
        salatekstilista1.splice(1, 1)
        numbrz2 = salatekstilista1[Y];
        numbrz2 = parseInt(numbrz2);
        salatekstilista1.splice(Y, 1)
        numbrz3 = salatekstilista1[X];
        numbrz3 = parseInt(numbrz3);
        salatekstilista1.splice(X, 1)
        
          dab = dab + numbrz1
          dab = dab + numbrz2
          dab = dab / 2
          dab = dab + numbrz3
        salatekstilista2 = parseInt(salatekstilista1[0], 16);
          
        hot = salatekstilista2
        hot = hot - dab
        hot = hot - kerrat
        
        if(Number.isInteger(hot) === false){
          hot = parseInt(hot)
          if(hot === 0){
            ihavaralt += 1
          }
        }
        salatekstilista1.shift();
        hot = 0
          
        for (let i = 0; i < salatekstilista1.length; i++) {
        
        salatekstilista2 = parseInt(salatekstilista1[i], 16);
        
        hot = salatekstilista2
        
        hot = hot - dab
        hot = hot - kerrat

        kerrat++

        //kerrat += 1
        if(Number.isInteger(hot) === false){
          hot = parseInt(hot)
          if(ihavaralt == 1){
            hot += 1
          }
        }
        
                switch( hot ) {
                    
                    case enigma[0].id:
                        vastaus1 = "a";
                        break;
                    case enigma[1].id:
                        vastaus1 = "b";
                        break;
                    case enigma[2].id:
                        vastaus1 = "c";
                        break;
                    case enigma[3].id:
                        vastaus1 = "d";
                        break;
                    case enigma[4].id:
                        vastaus1 = "e";
                        break;
                    case enigma[5].id:
                        vastaus1 = "f";
                        break;
                    case enigma[6].id:
                        vastaus1 = "g";
                        break;
                    case enigma[7].id:
                        vastaus1 = "h";
                        break;
                    case enigma[8].id:
                        vastaus1 = "i";
                        break;
                    case enigma[9].id:
                        vastaus1 = "j";
                        break;
                    case enigma[10].id:
                        vastaus1 = "k";
                        break;
                    case enigma[11].id:
                        vastaus1 = "l";
                        break;
                    case enigma[12].id:
                        vastaus1 = "m";
                        break;
                    case enigma[13].id:
                        vastaus1 = "n";
                        break;
                    case enigma[14].id:
                        vastaus1 = "o";
                        break;
                    case enigma[15].id:
                        vastaus1 = "p";
                        break;
                    case enigma[16].id:
                        vastaus1 = "q";
                        break;
                    case enigma[17].id:
                        vastaus1 = "r";
                        break;
                    case enigma[18].id:
                        vastaus1 = "s";
                        break;
                    case enigma[19].id:
                        vastaus1 = "t";
                        break;
                    case enigma[20].id:
                        vastaus1 = "u";
                        break;
                    case enigma[21].id:
                        vastaus1 = "v";
                        break;
                    case enigma[22].id:
                        vastaus1 = "w";
                        break;
                    case enigma[23].id:
                        vastaus1 = "x";
                        break;
                    case enigma[24].id:
                        vastaus1 = "y";
                        break;
                    case enigma[25].id:
                        vastaus1 = "z";
                        break;
                    case enigma[26].id:
                        vastaus1 = "å";
                        break;
                    case enigma[27].id:
                        vastaus1 = "ä";
                        break;
                    case enigma[28].id:
                        vastaus1 = "ö";
                        break;
                    case enigma[29].id:
                        vastaus1 = "A";
                        break;
                    case enigma[30].id:
                        vastaus1 = "B";
                        break;
                    case enigma[31].id:
                        vastaus1 = "C";
                        break;
                    case enigma[32].id:
                        vastaus1 = "D";
                        break;
                    case enigma[33].id:
                        vastaus1 = "E";
                        break;
                    case enigma[34].id:
                        vastaus1 = "F";
                        break;
                    case enigma[35].id:
                        vastaus1 = "G";
                        break;
                    case enigma[36].id:
                        vastaus1 = "H";
                        break;
                    case enigma[37].id:
                        vastaus1 = "I";
                        break;
                    case enigma[38].id:
                        vastaus1 = "J";
                        break;
                    case enigma[39].id:
                        vastaus1 = "K";
                        break;
                    case enigma[40].id:
                        vastaus1 = "L";
                        break;
                    case enigma[41].id:
                        vastaus1 = "M";
                        break;
                    case enigma[42].id:
                        vastaus1 = "N";
                        break;
                    case enigma[43].id:
                        vastaus1 = "O";
                        break;
                    case enigma[44].id:
                        vastaus1 = "P";
                        break;
                    case enigma[45].id:
                        vastaus1 = "Q";
                        break;
                    case enigma[46].id:
                        vastaus1 = "R";
                        break;
                    case enigma[47].id:
                        vastaus1 = "S";
                        break;
                    case enigma[48].id:
                        vastaus1 = "T";
                        break;
                    case enigma[49].id:
                        vastaus1 = "U";
                        break;
                    case enigma[50].id:
                        vastaus1 = "V";
                        break;
                    case enigma[51].id:
                        vastaus1 = "W";
                        break;
                    case enigma[52].id:
                        vastaus1 = "X";
                        break;
                    case enigma[53].id:
                        vastaus1 = "Y";
                        break;
                    case enigma[54].id:
                        vastaus1 = "Z";
                        break;
                    case enigma[55].id:
                        vastaus1 = "Å";
                        break;
                    case enigma[56].id:
                        vastaus1 = "Ä";
                        break;
                    case enigma[57].id:
                        vastaus1 = "Ö";
                        break;
                    case enigma[58].id:
                        vastaus1 = "0";
                        break;
                    case enigma[59].id:
                        vastaus1 = "1";
                        break;
                    case enigma[60].id:
                        vastaus1 = "2";
                        break;
                    case enigma[61].id:
                        vastaus1 = "3";
                        break;
                    case enigma[62].id:
                        vastaus1 = "4";
                        break;
                    case enigma[63].id:
                        vastaus1 = "5";
                        break;
                    case enigma[64].id:
                        vastaus1 = "6";
                        break;
                    case enigma[65].id:
                        vastaus1 = "7";
                        break;
                    case enigma[66].id:
                        vastaus1 = "8";
                        break;
                    case enigma[67].id:
                        vastaus1 = "9";
                        break;
                    case enigma[68].id:
                        vastaus1 = " ";
                        break;
                    case enigma[69].id:
                        vastaus1 = ",";
                        break;
                    case enigma[70].id:
                        vastaus1 = ".";
                        break;
                    case enigma[71].id:
                        vastaus1 = "<";
                        break;
                    case enigma[72].id:
                        vastaus1 = ">";
                        break;
                    case enigma[73].id:
                        vastaus1 = "|";
                        break;
                    case enigma[74].id:
                        vastaus1 = "-";
                        break;
                    case enigma[75].id:
                        vastaus1 = "!";
                        break;
                    case enigma[76].id:
                        vastaus1 = "#";
                        break;
                    case enigma[77].id:
                        vastaus1 = "¤";
                        break;
                    case enigma[78].id:
                        vastaus1 = "%";
                        break;
                    case enigma[79].id:
                        vastaus1 = "&";
                        break;
                    case enigma[80].id:
                        vastaus1 = "/";
                        break;
                    case enigma[81].id:
                        vastaus1 = "(";
                        break;
                    case enigma[82].id:
                        vastaus1 = ")";
                        break;
                    case enigma[83].id:
                        vastaus1 = "=";
                        break;
                    case enigma[84].id:
                        vastaus1 = "+";
                        break;
                    case enigma[85].id:
                        vastaus1 = "?";
                        break;
                    case enigma[86].id:
                        vastaus1 = "_";
                        break;
                    case enigma[87].id:
                        vastaus1 = ";";
                        break;
                    case enigma[88].id:
                        vastaus1 = ":";
                        break;
                    case enigma[89].id:
                        vastaus1 = "'";
                        break;
                    case enigma[90].id:
                        vastaus1 = "*";
                        break;
                    case enigma[91].id:
                        vastaus1 = "¨";
                        break;
                    case enigma[92].id:
                        vastaus1 = "^";
                        break;
                    case enigma[93].id:
                        vastaus1 = "@";
                        break;
                    case enigma[94].id:
                        vastaus1 = "£";
                        break;
                    case enigma[95].id:
                        vastaus1 = "€";
                        break;
                    case enigma[96].id:
                        vastaus1 = "{";
                        break;
                    case enigma[97].id:
                        vastaus1 = "}";
                        break;
                    case enigma[98].id:
                        vastaus1 = "[";
                        break;
                    case enigma[99].id:
                        vastaus1 = "]";
                        break;
                    case enigma[100].id:
                        vastaus1 = "§";
                        break;
                    case enigma[101].id:
                        vastaus1 = "~";
                        break;
                    case enigma[102].id:
                        vastaus1 = "$";
                        break;
                    case enigma[103].id:
                        vastaus1 = "’";
                        break;
                    case enigma[104].id:
                        vastaus1 = "é";
                        break;
                    case enigma[105].id:
                        vastaus1 = '"';
                        break;
                }
        
                vastaus.push(vastaus1);
        
         }
        
         document.querySelector("#decoded").value = vastaus.join("");
            }

