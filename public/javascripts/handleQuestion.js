/**
 * Created by HarrisSchwartz on 1/13/17.
 */


handleQuestion()
{
    const ANSWERS = document.forms['theForm'].elements['question'];
    for (let i = 0; i < ANSWERS.length; i++) {
        ANSWERS[i].addEventListener('click', () => {
            if (ANSWERS[i].value == 1) {
                Math.random()
            } else {
                window.location.reload();
            }
        });
    }
}