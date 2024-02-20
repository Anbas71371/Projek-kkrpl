<template>
  <center>
    <div>
      <q-card class="q-gutter-xs bordus" style="left: -20px; height: 520px; width: 400px; top: 55px;">
        <q-img src="https://blogger.googleusercontent.com/img/a/AVvXsEiqrVQ-kAdjuwGGom4WE-VsWeOBa-kjY-OQmoaUGvQ6ufnVQIDxDz_B5iR8KST_G8PI87aDY5G8PK17roMTMmGWKPvPBEfmdp-VNZrw7CYTkLIGcrH_CQ1kyrV7r2c286WvlkqdTLEzRyjQlyQQBt_su0nh2kxOxGhQS3KOXufmk8vgeLfvm5z7H_urbg=w1200-h630-p-k-no-nu" width="350px"/>
        <p class="text-bold text-h5 text-red">Selamat datang di SIPA</p>
        <q-form class="absolute-center q-gutter-xs" style="margin-top: 120px;" @submit.prevent="handleLogin">
          <q-input v-model="username" outlined label="No. Anggota koperasi:" stack-label :dense="dense" style=" width: 320px; margin-bottom: 20px; font-size: 12px;"></q-input>
          <q-input v-model="password" outlined label="Password:" stack-label :dense="dense" type="password"  style=" width: 320px; margin-bottom: 10px;"></q-input>
          <q-checkbox class="absolute-left text-caption" style="margin-top: 80px; color: gray;" size="sm" v-model="val" label="ingat saya" />
          <q-card-section class="row wrap" style="margin-top: 55px;">
            <q-btn type="submit" color="negative" class="text-center" style="
            width: 120px;
            height: 1px; 
            font-size: 15px; 
            margin-right: 5px; 
            border-radius: 15px;
            right: 10px;
            " :disable="isButtonDisabled"
            >Masuk</q-btn>
            <p style="color: gray; margin-top: 10px;">ingin bergabung? <router-link class="text-negative" style="text-decoration: none;" to="/daftar">Daftar</router-link></p>
          </q-card-section>
        </q-form>
      </q-card>
    </div>
  </center>
</template>

<style>

</style>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'KomLog',
  setup() {
    const router = useRouter();
    const val = ref(false);
    const username = ref('');
    const password = ref('');

    // Method untuk menangani proses login
    const handleLogin = () => {
      // Jika kedua input kosong, arahkan pengguna ke halaman Home
      if (username.value === '' && password.value === '') {
        router.push('/Home');
        return;
      }

      // Pemeriksaan username dan password
      if (username.value === 'admin' && password.value === 'admin') {
        // Jika benar, arahkan pengguna ke halaman BerandaAdmin
        router.push('/BerandaAdmin');
      } else {
        // Jika tidak, beri tahu pengguna bahwa username/password salah
        alert('Username atau password salah');
      }
    };

    // Metode untuk menonaktifkan tombol masuk jika salah satu input kosong
    const isButtonDisabled = () => {
      return username.value === '' || password.value === '';
    };

    return {
      val,
      handleLogin,
      username,
      password,
      isButtonDisabled
    };
  }
};
</script>
