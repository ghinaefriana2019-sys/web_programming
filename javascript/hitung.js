document.body.appendChild(createInput('x'))
document.body.appendChild(createInput('y'))
document.body.appendChild(buatKotak('hasil','green','32px'))

document.body.appendChild(buatTombol('tambah','+'))
document.body.appendChild(buatTombol('kurang','-'))
document.body.appendChild(buatTombol('kali','x'))
document.body.appendChild(buatTombol('bagi','/'))
document.body.appendChild(buatTombol('mod','%'))
document.body.appendChild(buatTombol('hapushistory','hapus history'))
document.body.appendChild(buatTombol('tambah','+'))

document.body.appendChild(buatKotak('history','blue','320px'))

function createInput(id){
    let input = document.createElement('input');
    input.setAttribute('id', id);  
    return input 
}

function buatTombol(id, text){
    let tbl = document.createElement('button');
    tbl.setAttribute('id', id);
    tbl.innerHTML = text;
    return tbl;
}


function buatKotak(id, warna, tinggi) {
    let kotak = document.createElement('div');
    kotak.setAttribute('id', id);
    kotak.setAttribute('style', 'color:white; overflow:auto; box:siring; border-box; margin:5px')
    return kotak;
}


