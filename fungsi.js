var mobil = [
  "HONDA BRIO SATYA",
  "PAJERO SPORT",
  ];

var pelanggan =[
  "ALEX",
  "LEVI",
];

var harga = [
  "750.000",
  "2500.000",
];
function tampil() {
  var tabel = document.getElementById("tabel");
  tabel.innerHTML = "<tr><th>No</th><th>Nama Mobil</th><th>Nama Pelanggan</th><th>Harga</th><th>Action</th></tr>";
  for (let i = 0; i < mobil.length; i++) {
      var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
      var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
      j = i + 1;
      tabel.innerHTML += "<tr><td>" + j + "</td><td>" + mobil[i] + "</td><td>" + pelanggan[i] + "</td><td>"  + harga[i] + "</td><td>" + btnEdit +""+ btnHapus + "</tr>";
  }
}
function tambah() {
  var input = document.querySelector("input[name=Nama Mobil]");
  var input = document.querySelector("input[name=Nama Pelanggan]"); 
  var harga_data = document.querySelector("input[name=harga]"); 
  mobil.push(input.value);
  pelanggan.push(input.value);
  harga.push(harga_data.value);
  tampil();
  input.value = "";
}    
function edit(id) {
  var baru = prompt("Edit Nama_Mobil", mobil[id]);
  mobil[id] = baru;
  tampil(); 

  var baru1  = prompt("Edit Nama_Pelanggan", pelanggan[id]);
  pelanggan[id] = baru1;
  tampil();

  var baru2 = prompt("Edit Harga_Mobil", harga[id]);
  harga[id] = baru2;
  tampil();
}
  
function hapus(id) {
  mobil.pop(id);
  tampil();
}

tampil();