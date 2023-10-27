const doc = document;
let restoPay = doc.getElementById("resto-pay");
let cash = doc.getElementById("cash");
let saldo = doc.getElementById("saldo-resto-pay").value;
let totalPembayaran = doc.getElementById("total-pembayaran").value;

console.log(localStorage.getItem("total"));

const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

let data = localStorage.getItem("total");

let total = document.getElementById("total").innerHTML = formatUang(parseInt(data))

let saldo_u = 500000;
const saldo_user = (document.getElementById("saldo").innerHTML = formatUang(saldo_u));

const bayar = () => {
  let restoPay = doc.getElementById("resto-pay").checked;
  let cash = doc.getElementById("cash").checked;

  if (!restoPay && !cash) {
    openModal();
    doc.getElementById("message").innerHTML = "Pilih metode pembayaran terlebih dahulu!";
  } else {
    if (restoPay === true) {
      if (saldo_u < data) {
        openModal();
        doc.getElementById("message").innerHTML = "Saldo Tidak Cukup!";
      } else {
        window.location.href = "invoiceRestoPay.html";
      }
    } else if (cash === true) {
      console.log("Berhasil pindah halaman ke cash");
      window.location.href = "invoiceCash.html";
    }
  }
};

// open modal
const openModal = () => {
  doc.getElementById("modal").style.display = "block";
  doc.getElementById("overlay").style.display = "block";
};

// close modal
const closeModal = () => {
  doc.getElementById("modal").style.display = "none";
  doc.getElementById("overlay").style.display = "none";
};

doc.getElementById("closeModal").addEventListener("click", () => {
  closeModal();
});

doc.getElementById("overlay").addEventListener("click", () => {
  closeModal();
});

// klik container pembayaran

const klikRestoPay = doc.querySelector(".restoPay");
const klikCash = doc.querySelector(".cashPay");

// restoPay = d.getElementById("resto-pay") = true
let checkedResto = false;
klikRestoPay.addEventListener("click", () => {
  checkedResto = !checkedResto;
  restoPay.checked = checkedResto;
});

let checkedCash = false;
klikCash.addEventListener("click", () => {
  checkedCash = !checkedCash;
  cash.checked = checkedCash;
});
