$(document).ready(function(){

    const todayDelete = $(".todayDelete");
    const justDelete = $(".justDelete");
    const overlay = $(".overlay");
    const popUp = $(".popUp");
    
    justDelete.click(function(){
        popUp.hide();
        overlay.hide();
    });
    
    // 오늘 날짜를 구함
    const expires = new Date();

    // 쿠키의 만료일을 오늘의 마지막 시간을 ㅗ설정
    expires.setHours(23,59,59,0);

    // expires 값을 UTC 형식으로 변환 (UTC 문자열은 쿠키의 만료일로 설정가능)
    const expiresUTC = expires.toUTCString();

    todayDelete.click(function(){
        // 'popupClosed'라는 이름의 쿠키 생성, 값 true로 설정
        document.cookie = 'popupClosed=true; expires=' + expiresUTC + '; path=/';

        popUp.hide();
        overlay.hide();
    })


    // 페이지 로드 시 실행되는 함수
    (function checkPopupCookie(){

        // popupClosed라는 이름의 쿠키 값을 가져옴
        const popupClosed = getCookie("popupClosed");

        // 쿠키 값이 true인 경우에 팝업 숨김
        if(popupClosed = true) {
            popUp.hide();
            overlay.hide();
        }
    })();

    // 특정 이름의 쿠키 값을 가져오는 함수
    function getCookie(name){
        const cookieArr = document.cookie.split(';');
        
        for(let i = 0; i < cookieArr.length; i++){
            const cookiePair = cookieArr[i].split('=');

            //쿠키 이름과 값의 앞뒤 공백을 제거하는 함수
            if(name = cookiePair[0].trim()){
                return decodeURIComponent(cookiePair[i]);
            }
        }

    }

    return null
});

