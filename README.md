# javascript-oop-exercise

Untuk tugas OOP ini, kalian diminta untuk membuat sebuah program menggunakan class di javascript.
Buatlah sebuah branch dengan nama kalian masing-masing, kemudian clone dan kerjakan.
Keluarga Budi akan menanam sebuah pohon yang nanti nya akan memiliki buah, namun mereka belum yakin buah apa yang akan tumbuh nanti.
Keluarga Budi akan mencatat perkembangan pohon nya setiap tahun.

Buatlah sebuah class bernama "FruitTree" yang memiliki property:
   - height, bertipe number, default value 0
   - age, bertipe number, default value 0
   - isAlive, bertipe boolean, default value true, jadikan private

Buat juga method untuk class "FruitTree":
   - checkAge() berfungsi untuk mereturn property age
   - checkHeight() berfungsi untuk mereturn property height
   - setDeadTree() berfungsi untuk mengubah isAlive menjadi false

Kemudian buatlah child dari class "FruitTree" dengan nama buah (bebas), dan memiliki property:
   - name, bertipe string
   - fruits, bertipe number
   - matureAge, bertipe number, jadikan private
   - maxHeight, bertipe number, jadikan private
   - maxAge, bertipe number, jadikan private

Buat juga method untuk child class dari "FruitTree":
   - grow() berfungsi untuk: 
      * increment property age
      * menambah property height sebanyak 1% - 5% dari property maxHeight, property height tidak boleh melebihi property maxHeight
      * menambah property fruits secara random antara 1 sampai 8 hanya jika property age sudah sama atau melebihi property matureAge
      
      * print informasi dari instance seperti "Pohon {name} memiliki buah berjumlah {fruits}, berumur {age} tahun, tinggi {height} "
      * pada print informasi, tambahkan "status: sedang tumbuh" jika age belum mencapai matureAge, "status: sedang berbuah" jika age sudah mencapai matureAge, "status: pohon sudah mati" jika age sudah mencapai maxAge

Ketentuan:
   - value untuk property dari child class "FruitTree" tergantung pada parameter constructor
   - gunakan setInterval() untuk memanggil method grow() dengan interval 1 detik, invoke clearInterval() ketika pohon sudah mati
   - jika pohon sudah mati, print string "Pohon {name} sudah mati, mari kita menanam yang baru!"
