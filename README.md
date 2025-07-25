# API Pengguna Express.js

Aplikasi Express.js sederhana ini memiliki fitur:

- Middleware logging untuk setiap request
- Dua route pengguna:
  - `GET /users` → Mengembalikan daftar pengguna dummy
  - `POST /users` → Menambah pengguna ke array sementara
- Route dipisahkan di `routes/users.js`

## Cara Menjalankan

1. **Install dependensi**
   ```powershell
   npm install
   ```
2. **Jalankan server**
   ```powershell
   node index.js
   ```
3. **Test endpoint**
   - GET: `http://localhost:3000/users`
   - POST: `http://localhost:3000/users`  
     Body (JSON):  
     ```json
     {
       "name": "NamaAnda"
     }
     ```

## Cara Test Menggunakan Postman

1. Buka aplikasi **Postman**.
2. **GET /users**
   - Pilih metode **GET**
   - Masukkan URL: `http://localhost:3000/users`
   - Klik **Send**
3. **POST /users**
   - Pilih metode **POST**
   - Masukkan URL: `http://localhost:3000/users`
   - Pada tab **Body**, pilih **raw** dan format **JSON**
   - Masukkan:
     ```json
     {
       "name": "NamaAnda"
     }
     ```
   - Klik **Send**
4. Hasil response akan muncul di bagian bawah Postman.

---
**Catatan:**  
Data pengguna hanya disimpan sementara di memori (array), sehingga akan hilang jika server di-restart.
