let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  // Membuat objek untuk menyimpan jumlah quantity berdasarkan storageId
  let quantityByStorageId = {};
  
  // Menggunakan perulangan untuk mengakses data dan menjumlahkan quantity
  for (let i = 0; i < productBin.data.length; i++) {
    let item = productBin.data[i];
    let storageId = item.storageId;
    let quantity = item.quantity;
  
    if (quantityByStorageId[storageId]) {
      // Jika storageId sudah ada dalam objek, tambahkan quantity
      quantityByStorageId[storageId] += quantity;
    } else {
      // Jika storageId belum ada dalam objek, inisialisasi dengan quantity
      quantityByStorageId[storageId] = quantity;
    }
  }
  
  // Menampilkan hasil jumlah quantity berdasarkan storageId
  console.log(quantityByStorageId);
  