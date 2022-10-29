<template>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body>
        <h2>Alert Messages</h2>

        <p>Click on the "x" symbol to close the alert message.</p>
        <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <div class="w3-panel w3-green w3-round-large">
                <h3>Success!</h3>
                <p>Here w3-round-large is used.</p>
            </div>
            <br />
            <div class="btn1">
                <button class="btn btn-secondary" type="submit">OK</button>
            </div>
            <div class="btn2">
                <button class="btn btn-secondary" type="reset">Annuler</button>
            </div>
        </div>
    </body>
</html>
</template>

<style>
.alert {
    padding: 20px;
    background-color: #524e4e;
    color: white;
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}
.btn1 {
    display: flex;
    margin-bottom: -40px;
    margin-left: 420px;
}
.btn2 {
    display: flex;
    margin-bottom: -40px;
    margin-left: 490px;
}
</style>

