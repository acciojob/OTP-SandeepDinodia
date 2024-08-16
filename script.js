//your JS code here. If required.
 function onCodeInput(index) {
            if (index < 6) {
                document.querySelector(`.code:nth-child(${index + 1})`).value = event.target.value;
                document.querySelector(`.code:nth-child(${index + 2})`).focus();
            } else {
                document.querySelector(`.code:nth-child(${index})`).value = event.target.value;
            }
        }

        function onBackspace(index) {
            if (event.key === 'Backspace' && index > 1) {
                document.querySelector(`.code:nth-child(${index - 1})`).focus();
            }
        }