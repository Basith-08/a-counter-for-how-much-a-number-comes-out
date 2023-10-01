function ambilDataOption() {
  const selectElement = document.getElementById("mySelect");
  const inputNumbers = document.getElementById("myNumbers");
  const selectedOptionValue = parseInt(selectElement.value);
  const selectedInputNumbersValue = parseInt(inputNumbers.value);

  const result = countTwosInRange(
    selectedInputNumbersValue,
    selectedOptionValue
  );

  // Pengecekan form
  if (!selectedOptionValue && !selectedInputNumbersValue){ throw cek("Silahkan isi form")}
  if (!selectedOptionValue){ throw cek("Silahkan pilih angka");}
  if (!selectedInputNumbersValue){ throw cek("Silahkan masukakn bilangan");}
  if (selectedOptionValue && selectedInputNumbersValue){ throw cek(`Jumlah angka ${selectedOptionValue} dalam bilangan dari 1 hingga ${selectedInputNumbersValue} adalah ${result}`)}
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

function cek(text) {
  const hasilElement = document.getElementById("hasil");

  hasilElement.innerHTML = `<div class="alert alert-secondary alert-dismissible fade show" role="alert">
                                ${text}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>`;
}
