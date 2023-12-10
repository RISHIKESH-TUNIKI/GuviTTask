$(document).ready(function () {
    $('#updateinfo').click(function () {
        $('#box').html(`<div class="card">
        <div class="card-body">
            <form>
                <div class="row">
                    <div class="col-6">
                        <Label>Date Of Birth :</Label>
                    </div>
                    <div class="col-6">
                        <input type="date">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <Label>Contact Number :</Label>
                    </div>
                    <div class="col-6">
                        <input type="tel">
                    </div>
                </div>
                <span id="contacterror"></span>
                <div class="row">
                    <div class="col-6">
                        <Label>Street/Lane :</Label>
                    </div>
                    <div class="col-6">
                        <input type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <Label>City :</Label>
                    </div>
                    <div class="col-6">
                        <input type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <Label>State :</Label>
                    </div>
                    <div class="col-6">
                        <input type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <Label>Country :</Label>
                    </div>
                    <div class="col-6">
                        <input type="text">
                    </div>
                </div>
                <div class="box">
                    <button type="submit" class="btn btn-dark updatebtn" id="updatechanges">Update Changes</button>
                </div>
            </form>
        </div>
    </div>`)
    })

    $('#updatechanges').click(function () {
        $('#box').html(`<button type="button" class="btn bg-dark btn-md text-light updatebtn fs">Update Changes</button>`)
    })


})
