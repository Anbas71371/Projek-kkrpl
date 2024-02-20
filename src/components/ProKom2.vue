<template>
    <div class="row absolute" style="margin-top: 40px;">
        <a class="text-h6 text-black text-justify" href="/" style="text-decoration: none; margin-left: 20px;">
        <q-icon name="arrow_back_ios"/>Kembali</a>
        <p class="text-h5 text-bold text-primary" style="margin-left: 1040px;">Daftar anggota</p>
    </div>
    <div class="q-gutter-xl row absolute" style="margin-top: 70px; margin-left: 70px;">
        <q-card class="bordus" style="width: 300px; padding: 10px; height: 280px; margin-top: 100px;">
            <q-card-section class="column">
                <center>
                    <q-avatar class="bayangan2" size="170px" style="border-radius: 100px; background-color: transparent;">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg">
                    </q-avatar>
                </center>
                <q-btn flat round :ripple="false" class="bg-white" style=" margin-left: 105px; top: -25px; width: 10px; height: 10px; margin-bottom: -15px;">
                    <q-avatar>
                        <q-icon size="20px" name="photo_camera" style="top: -3px;"></q-icon>
                    </q-avatar>
                </q-btn>
                <p class="text-center text-warning text-caption" style="font-size: 11px;">Profil hanya boleh menggunakan foto wajah</p>
            </q-card-section>
        </q-card>
        <q-card class="row bordus" style="padding: 15px; height: 400px; margin-left: 60px;">
            <q-card-section class="column q-gutter-lg" style="margin-top: 10px;">
                <q-input outlined label="Nama" class="bayangan4" style="width: 300px;"/>
                <q-input outlined label="No.Hp" class="bayangan4" style="width: 300px;"/>
                <q-input outlined label="Alamat" class="bayangan4" style="width: 300px;"/>
                <q-btn class="text-white text-bold bayangan2" href="/home" style="width: 130px; background: #124B9F; border-radius: 15px; margin-top: 30px;">Simpan</q-btn>
            </q-card-section>
            <q-card-section class="column q-gutter-lg" style="margin-top: 10px;">
                <q-input outlined label="NIP" class="bayangan4" style="width: 300px;" />
                <q-input outlined label="No.Rekening" class="bayangan4"/>
            </q-card-section>
        </q-card>
    </div>
</template>

<style>
*{
    margin: none;
}
</style>

<script>
export default {
  name: 'ProKom2',
}
</script>