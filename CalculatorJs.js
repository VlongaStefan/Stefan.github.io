
var apasat = false;
function apasare1(){
	if(!apasat)
	{
		apasat = true;
		return;
	}
	if(apasat)
	{
		apasat = false;
		return;
	}
}
function adunare(){
	
	var t1 = document.getElementById("primulNumar").value;
	var t2 = document.getElementById("alDoileaNumar").value;
	var rezultat = parseFloat(t1) + parseFloat(t2);
	var rezultatAbsolut = Math.abs(parseFloat(t1) + parseFloat(t2));
	
	if(!isNaN(rezultat))
		{ 
			if(apasat == true)
			{
				document.getElementById("rezultat").innerHTML = 'Valoarea absolută a răspunsului este ' + rezultatAbsolut + '.';
			}
			else document.getElementById("rezultat").innerHTML = 'Răspunsul este ' + rezultat + '.';
		}
	
}
function scadere(){
	
	var descazut = document.getElementById("primulNumar").value;
	var scazator = document.getElementById("alDoileaNumar").value;
	var rezultat = parseFloat(descazut) - parseFloat(scazator);
	var rezultatAbsolut = Math.abs(parseFloat(descazut) - parseFloat(scazator));
	
	if(!isNaN(rezultat))
		{ 
			if(apasat == true)
			{
				document.getElementById("rezultat").innerHTML = 'Valoarea absolută a răspunsului este ' + rezultatAbsolut + '.';
			}
			else document.getElementById("rezultat").innerHTML = 'Răspunsul este ' + rezultat + '.';
		}
}

function inmultire(){
	
	var t1a = document.getElementById("primulNumar").value;
	var t2a = document.getElementById("alDoileaNumar").value;
	var rezultat = parseFloat(t1a) * parseFloat(t2a);
	var rezultatAbsolut = Math.abs(parseFloat(t1a) * parseFloat(t2a));
	
	if(!isNaN(rezultat))
		{ 
			if(apasat == true)
			{
				document.getElementById("rezultat").innerHTML = 'Valoarea absolută a răspunsului este ' + rezultatAbsolut + '.';
			}
			else document.getElementById("rezultat").innerHTML = 'Răspunsul este ' + rezultat + '.';
		}
}

function impartire(){
	
	var deimpartit = document.getElementById("primulNumar").value;
	var impartitor = document.getElementById("alDoileaNumar").value;
	let rezultat = parseFloat(deimpartit) / parseFloat(impartitor);
	let rezultatAbsolut = Math.abs(parseFloat(deimpartit) / parseFloat(impartitor));
	
	if(!isNaN(rezultat))
		{ 
			if(apasat == true)
			{
				document.getElementById("rezultat").innerHTML = 'Valoarea absolută a răspunsului este ' + rezultatAbsolut + '.';
			}
			else document.getElementById("rezultat").innerHTML = 'Răspunsul este ' + rezultat + '.';
		}
}

function ridicareLaPutere(){
	
	var baza = document.getElementById("primulNumar").value;
	var exponent = document.getElementById("alDoileaNumar").value;
	let rezultat = Math.pow(parseFloat(baza) , parseFloat(exponent));
	let rezultatAbsolut = Math.abs(Math.pow(parseFloat(baza) , parseFloat(exponent)));
	
	if(!isNaN(rezultat))
		{ 
			if(apasat == true)
			{
				document.getElementById("rezultat").innerHTML = 'Valoarea absolută a răspunsului este ' + rezultatAbsolut + '.';
			}
			else document.getElementById("rezultat").innerHTML = 'Răspunsul este ' + rezultat + '.';
		}
}