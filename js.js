var posisi;
var batu1Kiri; var batu1Atas;
var batu2Kiri; var batu2Atas;
var batu3Kiri; var batu3Atas;
var diamondKiri; var diamondAtas;
var kecepatan = 100;
var skor = 0;
var skorTertinggi = 0;

function mulai() {
	skor = 0;
	gerak();
	batu();
	jalan();
	document.getElementById('pesan').style = "display: none";
}

function gerak() {
	posisi= document.getElementById('controller').value;
	document.getElementById('kapalSelam').style = "left: "+posisi+"vmin;";
}

function angkaAcak() {
	return Math.floor(Math.random() * 91);
}

function batu() {
	batu1Kiri = angkaAcak(); batu1Atas = angkaAcak() + 100;
	batu2Kiri = angkaAcak(); batu2Atas = angkaAcak() + 100;
	batu3Kiri = angkaAcak(); batu3Atas = angkaAcak() + 100;
	diamondKiri = angkaAcak(); diamondAtas = angkaAcak() + 120;
}

function tampilBatu() {
	document.getElementById('batu1').style = "left: "+batu1Kiri+"vmin; top: "+batu1Atas+"vmin";
	document.getElementById('batu2').style = "left: "+batu2Kiri+"vmin; top: "+batu2Atas+"vmin";
	document.getElementById('batu3').style = "left: "+batu3Kiri+"vmin; top: "+batu3Atas+"vmin";
	document.getElementById('diamond').style = "left: "+diamondKiri+"vmin; top: "+diamondAtas+"vmin";
	document.getElementById('skorInGame').innerHTML = "skor: "+skor;
}

function jalan() {
	batu1Atas -= 1;
	batu2Atas -= 1;
	batu3Atas -= 1;
	diamondAtas -= 1;
	tampilBatu();

	// ulang2
	if (batu1Atas < -10) {
		batu1Kiri = angkaAcak(); batu1Atas = 100;
	} else if (batu2Atas < -10) {
		batu2Kiri = angkaAcak(); batu2Atas = 120;
	} else if (batu3Atas < -10) {
		batu3Kiri = angkaAcak(); batu3Atas = 110;
	} else if (diamondAtas < -10) {
		diamondKiri = angkaAcak(); diamondAtas = 110;
	}
	cek();
}

function cek() {
	kecepatan -= 0.005; 
	var kiri = posisi - 9;
	var kanan = parseInt(posisi)+9;
	if (batu1Atas >= 1 && batu1Atas <= 29 && batu1Kiri >= kiri && batu1Kiri <= kanan) {
		kalah();
	} else if (batu2Atas >= 1 && batu2Atas <= 29 && batu2Kiri >= kiri && batu2Kiri <= kanan) {
		kalah();
	} else if (batu3Atas >= 1 && batu3Atas <= 29 && batu3Kiri >= kiri && batu3Kiri <= kanan) {
		kalah();
	} else if (diamondAtas >= 1 && diamondAtas <= 29 && diamondKiri >= kiri && diamondKiri <= kanan) {
		skor += 150;
		diamondKiri = angkaAcak(); diamondAtas = 110;
		setTimeout(jalan, kecepatan);
	} else {
		setTimeout(jalan, kecepatan);
	}
}


function kalah() {
	if (skorTertinggi <= skor) {
		skorTertinggi = skor;
	}
	document.getElementById('pesan').style = "display: block";
	document.getElementById('kalah').style = "display: block";
	document.getElementById('skorTertinggi').innerHTML = ": "+skorTertinggi;
	document.getElementById('skorTerakhir').innerHTML = ": "+skor;
}