$(".submit").click(function () {
    if ($("#name-answer"&&'#email-answer'&&"#question-answer").val() == 0) {
        $(".validation").addClass("show-content");
    }
    else (
        alert("Your message has been sent with success!")
    )
})