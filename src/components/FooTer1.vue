<template>
    <div class="foot . bayangan3 bg-primary text-white">
      <q-toolbar class="foot1">
        <q-list class="List1">
          <q-item class="judul1 text-p"
          style="
          padding-top: 30px;
          left: 10px;
          ">Koperasi RSUD DR. Wahidin Sudirohusodo Makassar</q-item>
          <q-item style="left: 10px;">Jl. Perintis Kemerdekaan KM 11, Tamanlanrea, Makassar</q-item>
          <q-item style="bottom: 17px; left: 8px;">@copyright</q-item>
        </q-list>
        <q-list class="foot2-bayangan3">
          <p class="text-h6" style="margin-top:20px;">Kontak kami</p>
          <q-item class="q-gutter-md">
            <q-btn round flat>
              <q-avatar>
                <img src="data:image/png;base64,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" >
              </q-avatar>
            </q-btn>
            <q-btn round flat>
              <q-avatar>
                <img src="data:image/png;base64,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" >
              </q-avatar>
            </q-btn>
            <q-btn round flat>
              <q-avatar>
                <img src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" >
              </q-avatar>
            </q-btn>
          </q-item>
        </q-list>
        <q-list class="foot3">
          <q-item style="font-weight: bold; top: 15px;">
            <p>Kunjungi media sosial kami</p>
          </q-item>
          <q-item style="margin-bottom: 20px;">
            <q-btn round href="https://instagram.com/rsupwahidin_official?igshid=NTc4MTIwNjQ2YQ==" target="blank">
              <q-avatar size="44px">
                <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"> 
              </q-avatar>
            </q-btn>
          </q-item>
        </q-list>
      </q-toolbar>
    </div>
</template>

<style>
.foot{
    border-radius: 0px 0px 0px 0px;
    box-shadow: 0px 3px 8px black;
    height: 170px;
}
.q-item{
    font-weight: thin;
}
/* Footer biru */
.judul1{
    font-size: 20px;
    font-weight: bold;
}
.foot3{
    margin-left: 20px;
}
/* Footer merah */
.foot2-bayangan3{
    margin-left: 80px;
    padding-left: 30px;
    background-color: #FF2121;
    padding-right: 50px;
    border-radius: 50px 50px 50px 0px;
    font-size: 14px;
    height: 170px;
}
.judul2{
    font-size:20px;
    font-weight: 500px;
    font-weight: bold;
}
</style>

<script>
export default {
  name: 'FooTer1'
}
</script>
