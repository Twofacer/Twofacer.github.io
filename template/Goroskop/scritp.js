function play()
{
    var year = document.getElementById("myYear").value;
    document.getElementById('yearRes').innerHTML= year;
    document.getElementById('zooRes').innerHTML= getZoo(year);
    document.getElementById('colorRes').innerHTML= getColor(year,0);
    document.getElementById('stRes').innerHTML= getColor(year,1);
    
 if(getColor(year,0) =='красный') {
    document.body.style.background = 'red';
 }
 if(getColor(year,0) =='коричневый') {
    document.body.style.background = 'brown';
 }
 if(getColor(year,0) =='белый') {
    document.body.style.background = 'white';
 }
 if(getColor(year,0) =='зеленый') {
    document.body.style.background = 'green';
 }
 if(getColor(year,0) =='черный') {
    document.body.style.background = 'gray';
 }
}

function year_plus(year)
{
    return Number(year)+1;
}

function getZoo(year){
 var zoo ="";
 var o_year= Number(year) % 12;
    switch(o_year){
        case 0: zoo = "обезьяна"; break;
        case 1: zoo = "петух"; break;
        case 2: zoo = "собака"; break;
        case 3: zoo = "кабан"; break;
        case 4: zoo = "мышь"; break;
        case 5: zoo = "буйвол"; break;
        case 6: zoo = "тигр"; break;
        case 7: zoo = "кролик"; break;
        case 8: zoo = "дракон"; break;
        case 9: zoo = "змея"; break;
        case 10: zoo = "лошадь"; break;
        case 11: zoo = "коза"; break;
        default: zoo="некоректное значение года"; break;
    }
 return zoo; 
}

function getColor(year, info){
    var color="";
    var st='';
    var o_year = Number(year) % 10;
    switch(o_year)
    {
        case 0: color="белый";st="меттал";break;
        case 1: color="белый";st="меттал";break;
        case 2: color="черный";st="вода";break;
        case 3: color="черный";st="вода";break;
        case 4: color="зеленый";st="дерево";break;
        case 5: color="зеленый";st="дерево";break;
        case 6: color="красный";st="огонь";break;
        case 7: color="красный";st="огонь";break;
        case 8: color="коричневый";st="земля";break;
        case 9: color="коричневый";st="земля";break;
    }
    if (info==0)
    return color;
    else
        return st;
}