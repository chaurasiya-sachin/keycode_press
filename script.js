let h1 =document.querySelector('h1');
        let code =document.querySelector('#output');

        document.addEventListener('keydown', function(event) {
            let span = document.createElement('span');                       
            span.textContent = event.key;

            h1.textContent="Your pressed : "
            h1.appendChild(span); 
            code.textContent=event.keyCode;
            code.style.display="block";
        });