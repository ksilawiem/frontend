<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <CButton class="add"><i class="fa fa-plus"></i></CButton>

  <CButton @click="$router.push('./tests')" class="back"><i class="fa fa-arrow-left"></i></CButton>
  <div class="titre">

    <p>DEVOPS</p>
  </div>
  <CContainer>
    <CRow class="size2">
      <CCol>
        <CCardGroup>
          <CCard>
            <CCardBody>
              <CButton class="btn0"><i class="fa fa-close"></i></CButton>
              <CButton class="btn1"><i class="fa fa-pencil"></i></CButton>
              <CForm>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z" />
                </svg>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
                </svg>
                <p class="marge">Ce quiz est conçu pour tester vos connaissances sur les fondements du langage Rust, sur
                  l'expérience technique de travail avec des implémentations générales, ainsi que sur la gestion de
                  l'empaquetage des applications, des typages et des traits d'objets.</p>
                <CButton color="success">Détails</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
  <CContainer>
    <CRow class="size2">
      <CCol>
        <CCardGroup>
          <CCard>
            <CCardBody>
              <CButton class="btn0"><i class="fa fa-close"></i></CButton>
              <CButton class="btn1"><i class="fa fa-pencil"></i></CButton>
              <CForm>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z" />
                </svg>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
                </svg>
                <p class="marge">Ce quiz est conçu pour tester vos connaissances sur les fondements du langage Rust, sur
                  l'expérience technique de travail avec des implémentations générales, ainsi que sur la gestion de
                  l'empaquetage des applications, des typages et des traits d'objets.</p>

                <CButton color="success">Détails</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
  <CContainer>
    <CRow class="size2">
      <CCol>
        <CCardGroup>
          <CCard>
            <CCardBody>
              <CButton class="btn0"><i class="fa fa-close"></i></CButton>
              <CButton class="btn1"><i class="fa fa-pencil"></i></CButton>
              <CForm>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z" />
                </svg>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
                </svg>
                <p class="marge">Ce quiz est conçu pour tester vos connaissances sur les fondements du langage Rust, sur
                  l'expérience technique de travail avec des implémentations générales, ainsi que sur la gestion de
                  l'empaquetage des applications, des typages et des traits d'objets.</p>
                <CButton color="success">Détails</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
  <CContainer>
    <CRow class="size2">
      <CCol>
        <CCardGroup>
          <CCard>
            <CCardBody>
              <CButton class="btn0"><i class="fa fa-close"></i></CButton>
              <CButton class="btn1"><i class="fa fa-pencil"></i></CButton>
              <CForm>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z" />
                </svg>
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
                </svg>
                <p class="marge">Ce quiz est conçu pour tester vos connaissances sur les fondements du langage Rust, sur
                  l'expérience technique de travail avec des implémentations générales, ainsi que sur la gestion de
                  l'empaquetage des applications, des typages et des traits d'objets.</p>
                <CButton class="btn" color="success">Détails</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>

</script>
<style scoped>
.lien {
  color: black;
}

.titre {
  text-align: left;
  color: black;
}

.size2 {
  margin-bottom: 25px;
}

.svg {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  margin-bottom: -90px;
}

.marge {
  margin-left: 140px;
  margin-top: 10px;
}

.btn {
  margin-left: 900px;
}

.back {
  margin-left: -15px;
  margin-top: -15px;
  font-size: 20px;
  color: rgb(87, 74, 74);
}

.btn0 {
  margin-left: 950px;
  margin-top: -5px;
  color: red;
}

.btn1 {
  margin-left: 920px;
  margin-top: -64px;

}

.add {
  margin-left: 980px;
  font-size: 20px;
  color: rgb(25, 61, 25);

}
</style>