<template>
    <div class="card">
        <div class="container">
            <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="profile-img">
            <h2>Ildiko Gaspar</h2>
            <small>UX Designer</small>
            <div class="bar">
                <!-- <button class="btn">
                    <i class="far fa-smile"></i>
                    <span>Set a status</span>
                </button> -->

                <!-- <button class="btn btn-more">
                    <i class="fas fa-ellipsis-h"></i>
                    <span>More</span>
                    <ul class="more">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Join</a></li>
                        <li><a href="#">Change Language</a></li>
                        <li><a href="#">Image & Video API</a></li>
                        <li><a href="#">Apps & Plugins</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Partnerships</a></li>
                        <li><a href="#">Inprint & Terms</a></li>
                    </ul>
                </button> -->

            </div>

            <CCard class="text-center">
                <CCardHeader>
                    <CNav variant="pills" class="card-header-pills">
                        <CNavItem class="item">
                            Informations générales
                        </CNavItem>


                    </CNav>
                </CCardHeader>
                <CCardBody>
                    <div class="navbar-top">
                        <div class="title">
                        </div>

                        <!-- Navbar -->

                        <!-- End -->
                    </div>
                    <!-- End -->

                    <!-- Sidenav -->




                    <!-- End -->

                    <!-- Main -->
                    <div class="main">
                        <div class="card">
                            <div class="card-body">
                                <i class="fa fa-pen fa-xs edit"></i>
                                <table class="style">
                                    <tbody>
                                        <tr>
                                            <td class="t">Name</td>
                                            <td>:</td>
                                            <td>ImDezCode</td>
                                        </tr>
                                        <tr>
                                            <td class="t"> Email</td>
                                            <td>:</td>
                                            <td>imdezcode@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td class="t">Num Tel</td>
                                            <td>:</td>
                                            <td>22763902</td>
                                        </tr>
                                        <tr>
                                            <td class="t">Address</td>
                                            <td>:</td>
                                            <td>Bali, Indonesia</td>
                                        </tr>
                                           <tr>
                                            <td class="t">Ville</td>
                                            <td>:</td>
                                            <td>Bali, Indonesia</td>
                                        </tr>
                                        <tr>
                                            <td class="t">Hobbies</td>
                                            <td>:</td>
                                            <td>Diving, Reading Book</td>
                                        </tr>
                                        <tr>
                                            <td class="t">Job</td>
                                            <td>:</td>
                                            <td>Web Developer</td>
                                        </tr>
                                        <tr>
                                            <td class="t">Skill</td>
                                            <td>:</td>
                                            <td>PHP, HTML, CSS, Java,SQL,Python</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div class="container1">
  <a class="btn btn-primary" href="joomdev.com" download>
  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
 Télécharger CV
</a>
</div>
                            </div>
                        </div>


                    </div>
                </CCardBody>

            </CCard>
        </div>
    </div>



    <!-- <script src="script.js"></script> -->
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container1{
    font-size: 12px;
    margin-left: 310px;
    margin-top: 50px;
}
.text-center {
    margin-top: 20px;
    margin-left: -5px;
    margin-right: -5px;
}

body {
    font-family: "Ubuntu", sans-serif;
    background-color: #ecf0fc;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    width: 35rem;
    background-color: #fff;
    border-radius: 24px;
}

.card .container {
    width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
}

.item {
    margin-left: 190px;
}

.main {
    margin-left: -17px;
    ;
}

.container img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 10px solid #ecf0fc;
}

.container h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 1rem 0 0.5rem 0;
}

.container small {
    color: #120c35;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 2rem;
}

.container .bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bar .btn {
    width: 6rem;
    cursor: pointer;
    background-color: #fff;
    padding: 10px 0;
    border-radius: 16px;
    border: 1px solid #c2cdef;
    color: #120c35;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.btn i {
    font-size: 20px;
    margin-bottom: 0.5rem;
}

.more {
    display: none;
    background-color: #120c35;
    width: 15rem;
    border-radius: 24px;
    padding: 2rem 1rem;
    position: absolute;
    bottom: 0%;
    right: -275%;
}

.more.active {
    display: block;
    transition: 0.4s ease;
}

.more li {
    width: 90%;
    height: 2rem;
    background-color: transparent;
    list-style-type: none;
}

.style {
    font-size: 14px;
font-family: 'Times New Roman', Times, serif;
    margin-left:150px;
}

.more li a {
    display: block;
    height: 100%;
    color: #fff;
    font-size: 18px;
    line-height: 2rem;
    padding-left: 0.5rem;
    text-decoration: none;
    transition: 0.4s ease;
    border-radius: 4px;
}

.more li a:hover {
    background-color: #2d2559;
}

.btn-more {
    position: relative;
}

@media screen and (max-width: 860px) {
    .more {
        right: 0%;
        bottom: 125%;
    }
}
.t{
    text-decoration: underline;
    font-size: 14px;
}

@media screen and (max-width: 425px) {
    .card {
        width: 15rem;
    }

    .container img {
        width: 100px;
        height: 100px;
    }

    .container h2 {
        font-size: 20px;
    }

    .container small {
        font-size: 14px;
    }

    .bar .btn {
        width: 3.7rem;
        font-size: 10px;
    }

    .more {
        width: 10rem;
        padding: 1rem 0.5rem;
    }

    .more li {
        height: 1.5rem;
    }

    .more li a {
        line-height: 1.5rem;
        font-size: 14px;
    }
}
</style>
<script>
const moreBtn = document.querySelector(".btn-more");
const more = document.querySelector(".more");

// // moreBtn.addEventListener("click", () => {
//   more.classList.toggle("active");
// });

</script>