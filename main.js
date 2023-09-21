function ambilDataOption() {
  // Dapatkan elemen select berdasarkan ID
  const selectElement = document.getElementById("mySelect");

  const inputNumbers = document.getElementById("myNumbers");

  // Dapatkan nilai option yang dipilih
  const selectedOptionValue = parseInt(selectElement.value);
  const selectedInputNumbersValue = parseInt(inputNumbers.value);


  countTwosInRange(selectedInputNumbersValue, selectedOptionValue);
  
  const result = countTwosInRange(selectedInputNumbersValue, selectedOptionValue);
  // Tampilkan hasilnya
  const hasilElement = document.getElementById("hasil");
  hasilElement.innerHTML = `<div class="alert alert-secondary alert-dismissible fade show" role="alert">
                              Jumlah angka ${selectedOptionValue} dalam bilangan dari 1 hingga ${selectedInputNumbersValue} adalah ${result}
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`

}


// fungsi mancri angka
function countTwosInRange(numbers, number) {
  let count = 0;
  for (let i = 1; i <= numbers; i++) {
    const digits = i.toString().split("");
    for (const digit of digits) {
      if (digit == number) {
        count++;
      }
    }
  }
  return count;
}

