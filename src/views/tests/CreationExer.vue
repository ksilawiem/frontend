<template>
    <h4> Exercice1 :</h4>
    <p>Insert the missing keyword to execute code, after try..catch, regardless of the result.</p>
    <CRow class="justify-content-center">
        <CCol :md="12">
            <CCardBody>
                <CRow>
                    <CCol :sm="10">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <p>try {
                                            <br>
                                            int[] myNumbers = {1, 2, 3};
                                            <br>
                                            System.out.println(myNumbers[10]);
                                            <br>
                                            } catch (Exception e) {
                                            <br>
                                            System.out.println("Something went wrong.");
                                            <br>
                                            }
                                            <input type="text">
                                            {
                                            <br>
                                            System.out.println("The 'try catch' is finished.");
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCol>
    </CRow>

</template>
<style scoped>
.titre {
    text-align: center;
    font-family: bold;
    color: rgb(6, 23, 56);
}

.btn {
    margin-left: 310px;
    background-color: rgb(31, 31, 44);
    color: white;
    width: 170px;
}

.btn1 {
    margin-left: 500px;
    width: 250px;

    margin-top: -65px;
    background-color: rgb(31, 31, 44);
    color: white;
}

.btn2 {
    margin-left: 440px;
    width: 170px;

    background-color: rgb(31, 31, 44);
    color: white;
}

.cell {
    margin-right: 305px;
}



.c {
    margin-top: -100px;
    font-size: 20px;
    margin-right: 350px;
}

.input {
    width: 560px;
    height: 40px;
    background-color: rgb(207, 212, 218);
    margin-left: 275px;
    margin-top: 30px;
}

.input1 {
    width: 400px;
    height: 40px;
    background-color: rgb(207, 212, 218);
    margin-left: 275px;
}

.row {
    margin-left: -17px;
    width: 1820px;
}
</style>