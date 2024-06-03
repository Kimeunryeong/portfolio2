document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector('.gform');
  
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // 기본 제출 동작 중지
      
      // alert로 메시지 표시
      alert("Thanks for contacting us! We will get back to you soon!");

      // 폼의 입력 필드 초기화
      form.reset();
  });
});
