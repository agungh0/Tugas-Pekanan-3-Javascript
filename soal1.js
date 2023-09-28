function akarPangkatDua(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif"
    }

    if (x % 2 === 1) {
        return "Tidak bisa input bilangan ganjil"
    }

    return Math.sqrt(x)
}

console.log(akarPangkatDua(-1))
console.log(akarPangkatDua(3))
console.log(akarPangkatDua(0))
console.log(akarPangkatDua(10))
console.log(akarPangkatDua(36)) //6
console.log(akarPangkatDua(16)) //4
console.log(akarPangkatDua(64)) //8