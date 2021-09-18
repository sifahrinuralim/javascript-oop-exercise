class FruitTree {
    height = 0;
    age = 0;
    #isAlive;

    constructor(height, age) {
        this.height = height;
        this.age = age;
        this.#isAlive = true;
    }

    checkAge() {
        let ageFinal = this.age;
        return ageFinal
    }

    checkHeight() {
        let heightFinal = this.height;
        return heightFinal
    }

    setDeadTree() {
        this.#isAlive = false;
        return this.#isAlive
    }

    setDeadTree() {
        this.#isAlive = false;
        return this.#isAlive
    }
}

class Buah extends FruitTree {
    #matureAge;
    #maxHeight;
    #maxAge;
    informasiUmum = "";
    status = "";
    informasiFinal = "";

    constructor(height, age, namaBuah, fruits) {
        super(height, age);
        this.namaBuah = namaBuah;
        this.fruits = fruits;
        this.#matureAge = 2;
        this.#maxHeight = 3;
        this.#maxAge = 100;
    }

    randomValue(caseParam, currentHeight) {
        this.hasilAkhirNilai = 0;

        if (caseParam === 'fruits') {
            this.hasilAkhirNilai = Math.floor(Math.random() * 8) + 1;
        } else if (caseParam === "height") {
            this.hasilAkhirNilai = Math.floor(Math.random() * 5) + 1;
            this.hasilAkhirNilai = (this.hasilAkhirNilai)
        }

        return this.hasilAkhirNilai;
    }

    maxAgeBuah() {
        return this.#maxAge
    }

    maxHeighBuah() {
        return this.#maxHeight
    }

    maxMatureBuah() {
        return this.#matureAge
    }

    tinggiRandom() {
        if (this.height >= this.#maxHeight) {
            this.height = this.#maxHeight
        }
        
        else if (this.height < this.#maxHeight){
            // Dapat tinggi random
            this.randomHeight = this.randomValue("height", this.height)
            this.hasilHeightRandom = this.height * (this.randomHeight / 100)
            this.nilaiHeightBaru = this.hasilHeightRandom + this.height
            this.height = this.nilaiHeightBaru
        }
    }

    jumlahBuahRandom() {
        return this.randomFruitsVar = Math.floor(Math.random() * 8) + 1
    }

    grow() {
        this.jumlahBuah = this.jumlahBuahRandom()

        if (this.age < this.#matureAge) {
            this.informasiUmum = "\n" + `Pohon "${this.namaBuah}" memiliki buah berjumlah "${this.fruits}", berumur "${this.age}" minggu, tinggi "${this.height}"`
            this.status = '\n' + "status: sedang tumbuh";
            this.age = this.age + 1
            this.tinggiRandom()
        } else if (this.age >= this.#matureAge && this.age < this.#maxAge) {
            this.informasiUmum = "\n" + `Pohon "${this.namaBuah}" memiliki buah berjumlah "${this.jumlahBuah}", berumur "${this.age}" minggu, tinggi "${this.height}"`
            this.status = '\n' + "status: sedang berbuah";
            this.age = this.age + 1
            this.tinggiRandom()
        } else if (this.age >= this.#maxAge) {
            this.informasiUmum = "\n" + `Pohon "${this.namaBuah}" berumur "${this.age}" minggu sudah mati, mari kita menanam yang baru!`;
            this.status = '\n' + "status: pohon sudah mati";
            this.tinggiRandom()
        }

        this.informasiFinal = this.informasiUmum.concat(this.status);
        return this.informasiFinal
    }
}

function main(ObjectBuah, maxAgeBuah, ageBuah) {

    var myVarAge = ageBuah;

    var growInternal = setInterval(mulaiGrow, 1000)

    // Iterasi method Grow()
    function mulaiGrow() {
        if (myVarAge <= maxAgeBuah) {
            console.log(ObjectBuah.grow())
        } 
        
        else if (myVarAge > maxAgeBuah) {
            clearInterval(growInternal)
        };
        myVarAge++;
    }
}

// Parameter (height,age,namaBuah,fruits)
let ObjectBuah = new Buah(1, 1, "Mangga", 0)

let ageBuah = ObjectBuah.age
let maxAgeBuah = ObjectBuah.maxAgeBuah()

console.log("\n" + "Nama Buah: " + ObjectBuah.namaBuah)
console.log("Tinggi Awal: " + ObjectBuah.height + " cm")
console.log("Umur Awal: " + ObjectBuah.age + " tahun")

console.log("\n" + "Maksimal Tinggi: " + ObjectBuah.maxHeighBuah() + " cm")
console.log("Maksimal Umur: " + ObjectBuah.maxAgeBuah() + " minggu")
console.log("Usia Buah Matang: " + ObjectBuah.maxMatureBuah() + " minggu")

main(ObjectBuah, maxAgeBuah, ageBuah)