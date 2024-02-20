import {createRouter, createWebHistory} from 'vue-router'
import HomeAdmin from '../views/HomeAdmin.vue'
import BerandaAdmin from '../views/BerandaAdmin.vue'
import EditProfil from '../views/EditProfil.vue'
import KonfirmasiPeminjaman from '../views/KonfirmasiPeminjaman.vue'
import DaftarPeminjaman from '../views/DaftarPeminjam.vue'

const routes= [
  {
    path: '/Login' ,
    name: 'Login',
    component: () => import ('C:/laragon/www/projek_akhir/src/views/LoGin.vue')
  },
  {
    path: '/Home' ,
    name: 'home',
    component: () => import ('C:/laragon/www/projek_akhir/src/views/HalamanHome.vue')
  },
  {
    path: '/Profil' ,
    name: 'profile',
    component: () => import ('C:/laragon/www/projek_akhir/src/views/ProFil.vue')
  },
  {
    path: '/daftar' ,
    name: 'daftar',
    component: () => import ('C:/laragon/www/projek_akhir/src/views/DafTar.vue')
  },
  {
    path: '/HomeAdmin', // Pastikan rute ini sudah didefinisikan
    name: 'HomeAdmin',
    component: HomeAdmin // Gantilah dengan komponen yang sesuai jika diperlukan
  },

  {
    path: '/berandaAdmin', // Pastikan rute ini sudah didefinisikan
    name: 'BerandaAdmin',
    component: BerandaAdmin // Gantilah dengan komponen yang sesuai jika diperlukan
  },
  {
    path: '/EditProfil', // Pastikan rute ini sudah didefinisikan
    name: 'EditProfil',
    component: EditProfil // Gantilah dengan komponen yang sesuai jika diperlukan
  },  
  {
    path: '/KonfirmasiPeminjaman', // Pastikan rute ini sudah didefinisikan
    name: 'KonfirmasiPeminjaman',
    component: KonfirmasiPeminjaman // Gantilah dengan komponen yang sesuai jika diperlukan
  },
  {
    path: '/DaftarPeminjaman', // Pastikan rute ini sudah didefinisikan
    name: 'DaftarPeminjaman',
    component: DaftarPeminjaman // Gantilah dengan komponen yang sesuai jika diperlukan
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router