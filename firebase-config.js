/* =========================================================
     FIREBASE REALTIME DATABASE - ABSEN ONLINE
     Project: hw-musago-absen
     Data absensi tersimpan di path /absensi/{uniqueKey} (key unik dari push(),
     BUKAN nama anggota, karena satu anggota bisa absen berkali-kali di
     kegiatan/tanggal berbeda).

     KEAMANAN (PENTING):
     Rules Firebase Realtime Database untuk project ini TIDAK diatur dari file
     ini — itu diatur di Firebase Console > Realtime Database > Rules.
     Jangan biarkan rules public read/write (".read":true, ".write":true)
     berlaku permanen. Untuk produksi, gunakan rules yang membatasi tulis ke
     path /absensi saja, misalnya:
       {
         "rules": {
           "absensi": { ".read": true, ".write": true },
           ".read": false, ".write": false
         }
       }
     Kalau rules publik dipakai sementara untuk pengujian, beri komentar di
     Firebase Console bahwa itu HANYA untuk testing dan harus diperketat lagi.
     ========================================================= */

/* Firebase config & inisialisasi — project: hw-musago-absen.
   Dimuat SETELAH Firebase SDK (compat) dan SEBELUM script.js */
const firebaseConfig = {
  apiKey: "AIzaSyAk2z3uoY6Vd1y-XkW-MvxL4LlpaTmNQl0",
  authDomain: "hw-musago-absen.firebaseapp.com",
  projectId: "hw-musago-absen",
  storageBucket: "hw-musago-absen.firebasestorage.app",
  messagingSenderId: "311629801159",
  appId: "1:311629801159:web:098db59bf7c3bc7a7500e2",
  measurementId: "G-2CXKK1QBNT",
  databaseURL: "https://hw-musago-absen-default-rtdb.firebaseio.com"
};

let firebaseAktif = false;
let database = null;
let absenDbRef = null;

try {
  const configSiap = Object.values(firebaseConfig).every(v =>
    typeof v === "string" &&
    v.length > 0 &&
    !v.includes("YOUR_")
  );

  if (configSiap) {
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    absenDbRef = database.ref("absensi");
    firebaseAktif = true;
  }
} catch (e) {
  console.error("Firebase gagal diinisialisasi:", e);
  firebaseAktif = false;
}
