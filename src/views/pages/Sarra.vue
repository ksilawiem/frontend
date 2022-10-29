<template>

    <head lang="en">
        <meta charset="UTF-8">
        <title>Profile Card</title>
        <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
            type="text/css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="profile-card">
                        <img src="https://static.pexels.com/photos/17597/pexels-photo.jpg" alt="team profile" />
                        <div class="profile-content">
                            <h3>Thompson Bill</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur
                                cupiditate dolor ea nihil nisi officiis tenetur ullam. Alias, rem?</p>
                            <ul>
                                <li><a href="" class="fa fa-facebook"></a></li>
                                <li><a href="" class="fa fa-twitter"></a></li>
                                <li><a href="" class="fa fa-google"></a></li>
                                <li><a href="" class="fa fa-instagram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="profile-card">
                        <img src="https://static.pexels.com/photos/17597/pexels-photo.jpg" alt="team profile" />
                        <div class="profile-content">
                            <h3>Thompson Bill</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur
                                cupiditate dolor ea nihil nisi officiis tenetur ullam. Alias, rem?</p>
                            <ul>
                                <li><a href="" class="fa fa-facebook"></a></li>
                                <li><a href="" class="fa fa-twitter"></a></li>
                                <li><a href="" class="fa fa-google"></a></li>
                                <li><a href="" class="fa fa-instagram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="profile-card">
                        <img src="https://static.pexels.com/photos/17597/pexels-photo.jpg" alt="team profile" />
                        <div class="profile-content">
                            <h3>Thompson Bill</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur
                                cupiditate dolor ea nihil nisi officiis tenetur ullam. Alias, rem?</p>
                            <ul>
                                <li><a href="" class="fa fa-facebook"></a></li>
                                <li><a href="" class="fa fa-twitter"></a></li>
                                <li><a href="" class="fa fa-google"></a></li>
                                <li><a href="" class="fa fa-instagram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>


</template>
<style scoped>
.profile-card {
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    border: 1px solid #000;
}

.profile-card img {
    width: 100%;
    height: auto;
    border: 1px solid red;
    transform: scale(1.1, 1.1) translateX(0);
    transition: all 0.50s ease 0s;
}

.profile-card:hover img {
    transform: scale(1.1, 1.1) translateX(15px);
}

.profile-card .profile-content {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    color: #333;
    padding: 20px;
    text-align: right;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0.9, 0.9) translateY(100%);
    transition: all 0.40s linear 0s;
}

.profile-card:hover .profile-content {
    transform: scale(0.9, 0.9) translateY(0);
}

.profile-card .profile-content h3 {
    margin: 0 0 10px;
    font-size: 25px;
}

.profile-card .profile-content p {
    margin: 0 0 10px;
    font-size: 15px;
    line-height: 24px;
}

.profile-card .profile-content ul {
    margin: 0 0 15px;
    padding: 0;
}

.profile-card .profile-content ul li {
    display: inline-block;
    list-style: none;
    margin: 0 7px;
}

.profile-card .profile-content ul li a {
    display: block;
    color: #333;
    font-size: 20px;
    text-align: center;
    transition: all 0.50s linear 0s;
}

.profile-card .profile-content ul li a:hover {
    text-decoration: none;
    color: #808080;
}
</style>