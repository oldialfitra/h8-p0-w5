function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var result = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var simpan = {}
        simpan['penumpang'] = arrPenumpang[i][0]
        simpan['naikDari'] = arrPenumpang[i][1]
        simpan['tujuan'] = arrPenumpang[i][2]
        var counter = 0
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                for (var k = j + 1; k < rute.length; k++) {
                    if (arrPenumpang[i][2] !== rute[k]) {
                        counter += 2000
                    } else {
                        counter += 2000
                        break
                    }
                }
            }

        }
        simpan['bayar'] = counter
        result.push(simpan)
    }
    return result
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]