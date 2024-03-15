const htmlTemplate = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dummy Shopping Receipt</title>
  <style>
    .container {
      flex: 1;
      background-color: #DDDDDD;
      border-radius: 10px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
      border: 2px solid #000000;
      margin: 20px;
    }
    .company-info {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .address-info {
      flex: 0.8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     
    }
    .receipt-info {
      flex: 1;
      display: flex;
      flex-direction: row;
      border-bottom: 2px solid #67666c;
      border-bottom: 2px solid #67666c;
      margin-bottom : 180px;
    }
    .receipt-left, .receipt-right {
      flex: 1;
      padding: 15px;
    }
    .receipt-left {
      text-align: left;
    }
    .receipt-right {
      text-align: right;
    }
    .total-section {
      border-top: 1px solid #67666c;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 2px solid #67666c;
    }
    .barcode-section {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    .barcode-section img {
      width: 250px;
      height: 40px;
      opacity: 0.6;
    }
  </style>
  </head>
  <body>
  <div class="container">
    <div class="company-info">
      <h1>32bit Bilgisayar Hizmetleri Ltd. Şti.</h1>
    </div>
    <div class="address-info">
      <p>Bağdat Cad. Kumbaracılar Sk. No:18</p>
      <p>+90 (216) 348 60 43</p>
      <p>İstanbul</p>
    </div>
    <div class="receipt-info">
      <div class="receipt-left">
        <p><strong>Tarih:</strong> XXXXX</p>
        <p><strong>Saat:</strong> XXXXXX</p>
        <p><strong>Kasiyer Kodu:</strong> XXXXXX</p>
      </div>
      <div class="receipt-right">
        <p><strong>Saat:</strong> XXXXXX</p>
        <p><strong>Nakit Ödeme:</strong> XXXXXX ₺</p>
        <p><strong>Kredi Kartı Ödeme:</strong> XXXXXX ₺</p>
      </div>
    </div>
    <div class="total-section">
      <p><strong>Alınan Para</strong></p>
      <p>XXXXXX ₺</p>
    </div>
    <div class="total-section">
      <p><strong>Para Üstü</strong></p>
      <p>XXXXXX ₺</p>
    </div>
    <div class="total-section">
      <p><strong>Genel Toplam</strong></p>
      <p>XXXXXX ₺</p>
    </div>
    <div class="barcode-section">
      <img src="https://answers.opencv.org/upfiles/1505477115167095.png" alt="Barcode">
    </div>
  </div>
  </body>
  </html>
    `;

export default htmlTemplate;
