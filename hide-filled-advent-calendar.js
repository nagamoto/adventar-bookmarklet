let countDownText
$(".mod-calendarList ul li").each(function() {
  countDownText = $(this).find(".mod-calendarList-countDown")[0].innerText;
  console.log(countDownText);
});
