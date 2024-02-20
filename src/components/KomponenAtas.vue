<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap" rel="stylesheet"/>
<template>
  <div class="profil">
    <q-chip text-color="primary" size="30px">
      <q-avatar class="bayangan2" size="190px" style="border-radius: 282px;">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg">
      </q-avatar>
      <h1 style="color:primary;">Halo, Tono!</h1>
      <q-btn unelevated rounded push :ripple="false" class="bayangan" to="ProFil" 
      style="
      background-color: #3F85ED; 
      color: white; 
      position: absolute; 
      margin-top: 95px; 
      margin-left: 140px; 
      font-size: 11px;
      ">edit profil</q-btn>
      <q-btn unelevated rounded push href="/" style="margin-top: 95px; right: 90px; background-color: red; 
      color: white; font-size: 11px;">keluar dari akun</q-btn>
    </q-chip>
  </div>
  <p style="
  margin-left: 90px; 
  margin-top: 15vh; 
  width: 90vh; 
  max-width: 360px;
  ">Berikut adalah data terkini mengenai keterlibatan anda dengan koperasi:
  </p>
  <div class="row q-gutter-md" style="margin-left: 20px;">
    <q-card class="my-card-wh" style="
    padding-right: 20px;
    max-width: 300px; 
    margin-left: 65px; 
    border-radius: 24px; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    ">
      <q-card-section>
        <div class="text-caption  " style="font-weight: bold;">Total Pembayaran Peminjaman:</div>
        <div class="text-h5" style="color: red ; padding-left: 45px; ">Rp 700.000,00</div>
      </q-card-section>
    </q-card>
    <q-btn push color="primary" label="Buat Pengajuan peminjaman"
    @click="prompt = true"
    style="
    font-size:12px; 
    font-weight: bold; 
    padding: 12px; 
    border-radius: 14px; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    ">
      <q-icon name="add_circle"  style="left:5px; font-size: 30px; "/>
    </q-btn>
    <q-dialog v-model="prompt" persistent>
      <q-card class="popup" style=" min-width: 350px; border-radius:20px; ">
        <q-card-section>
          <div style=" 
          max-width: 300px;
          left:100px;
          ">Dengan ini anda menyatakan meminjam uang sebanyak:</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p style="position: absolute; margin-top: 0.5rem;">Rp.</p>
          <q-input dense  type="number" v-model="address" autofocus @keyup.enter="prompt = false" style="
          max-width: 300px;
          margin-left: 2rem;
          "/> 
        </q-card-section>
        <q-card-actions align="right" class="text-white">
          <q-btn flat label="Kembali" v-close-popup style="color: #FF0F0F; border-radius: 7px;" />
          <q-btn flat label="Kirim" v-close-popup style="background-color: #0029BB; border-radius: 7px;">
            <q-tooltip class="bg-negative text-bold text-body2">Mohon cek kembali sebelum mengirim</q-tooltip>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <div style=" position:absolute; top: 50px; right: 100px;">
    <q-card class="bordus" style="width: 380px; max-height: 370px;">
      <q-scroll-area></q-scroll-area>
      <q-card-section class="bg-white" 
      style="
      border-radius: 29px 29px 0px 0px; 
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
      ">
        <div class="text-h6 text-bold">
          <q-icon name="notifications" style=" 
          margin-right:12px; 
          bottom:2.5px; 
          font-size:20px; 
          margin-left:40px; 
          "/>
          Notifikasi 
        </div>
      </q-card-section>
      <q-card-section class="q-gutter" style="height: 330px; font-size: 12px; margin-top: 10px;">
        <div class="text-negative" style="
        border: solid 1px; 
        background-color: white;
        border-radius: 10px; 
        padding: 10px;
        ">
          Peminjaman melewati tengat waktu. Mohon segera dilunaskan
        </div>
        <p class="text-grey text-right" style="font-size: 11px; margin-top: 5px;">Baru saja</p>
        <div class="text-warning" style="
        border: solid 1px; 
        background-color: white;
        border-radius: 10px; 
        padding: 10px;
        ">
          Data anggota belum lengkap, mohon untuk lengkapi data diri anda
        </div>
        <p class="text-grey text-right" style="font-size: 11px; margin-top: 5px;">kemarin</p>
        <div class="text-positive" style="
        border: solid 1px; 
        background: transparent;
        border-radius: 10px; 
        padding: 10px;
        ">
          Selamat anda telah terdaftar
        </div>
        <p class="text-grey text-right" style="font-size: 11px; margin-top: 5px;">04/01/24</p>
      </q-card-section>
    </q-card>
  </div>
  <div class="q-gutter-xs" style="margin-left: 60px; margin-top: 50px;">
    <h5 class="text-bold" style="font-size: 25px;">
      Riwayat Peminjaman
    </h5>
    <q-input  outlined v-model="text" placeholder="Cari riwayat " :dense="dense" style="max-width: 350px;">
      <template v-slot:prepend>
        <q-icon name="search" style="font-size:20px; margin-right: 5px; color: grey;" />
      </template>
    </q-input>
  </div>
  <div class="q-pa-md" style="width: 1260px; margin-left: 45px; margin-top: 15px;">
    <q-markup-table class="text-white">
      <thead class="HT" style="background-color: #192531;">
        <tr>
          <th class="text-center">Tanggal Peminjaman</th>
          <th class="text-center">Besar Peminjaman</th>
          <th class="text-center">Pokok Peminjaman</th>
          <th class="text-center">Jasa Peminjaman</th>
          <th class="text-center">Total</th>
        </tr>
      </thead>
      <tbody class="Yooh" style="color: black; border-radius: 15px 15px 0px 0px;">
        <tr style="background-color: #D8E7FF;">
          <td class="text-center">Hr/tgl/thn</td>
          <td class="text-center">Rp. 100,000,00</td>
          <td class="text-center">xxxxxxxxxx</td>
          <td class="text-center">xxxxxxxxxx</td>
          <td class="text-center">xxxxxxxxxx</td>
        </tr>
        <tr style="background-color: #98CEFF;">
          <td class="text-center">Hr/tgl/thn</td>
          <td class="text-center">Rp. 100,000,00</td>
          <td class="text-center">xxxxxxxxxx</td>
          <td class="text-center">xxxxxxxxxx</td>
          <td class="text-center">xxxxxxxxxx</td>
        </tr>
        <tr style="background-color: #D8E7FF;;">
          <td class="text-center">Hr/tgl/thn</td>
          <td class="text-center">Rp. 100,000,00</td>
          <td class="text-center">xxxxxxxxxx</td>
          <td class="text-center">xxxxxxxxxx</td>
          <td class="text-center">xxxxxxxxxx</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style>

p{
  font-size: 12px;
}
h1, h4, h6{
  font-family: 'Raleway', sans-serif;
  font-size: 37px;
  font-weight: 700
}
/* Profil */
.q-chip{
  margin-left: 150px;
  margin-top: 120px;
  background: transparent;
  font-weight: Bold;
}
/* Popup */
.popup{
  padding: 20px;
}

.Yooh tr td{
  font-size: 15px;
}
.HT tr th{
  color: #FFF;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>

<script>
import { ref } from 'vue'

export default {
    name: 'KomponenAtas',
    setup () {
      return {
        prompt: ref(false),
        text: ref('')
      }
    }
}
</script>