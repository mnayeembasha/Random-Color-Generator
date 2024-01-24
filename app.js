

    let h1=document.querySelector("h1");
    let button=document.querySelector("button");
    let div=document.querySelector("div");

    function rgbToHex(r,g,b){
        //Ensure r,g,b are in range if 0 to 255 are not
        r = Math.max(0,Math.min(255,r));
        g = Math.max(0,Math.min(255,g));
        b = Math.max(0,Math.min(255,b));

        /*Each RGB component (r, g, b) is then converted to its hexadecimal representation using the toString(16) method. This gives a string representation of the hexadecimal value.
        The padStart(2, '0') method is used to ensure that each component has at least two digits. This is important because a valid hex color is composed of six digits (two for each component).*/

        let hexR = r.toString(16).padStart(2,'0');
        let hexG = g.toString(16).padStart(2,'0');
        let hexB = b.toString(16).padStart(2,'0');

        return `#${hexR}${hexB}${hexG}`;
    }

    let hexCol;
    function generateRandomColor(){
        //RGB(0-255)
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);

        hexCol = rgbToHex(r,g,b);
        return `rgb(${r},${g},${b})`;
    }



        button.addEventListener("click",function(){
        let col = generateRandomColor();

        div.style.backgroundColor = col;
        // h1.innerHTML= `<b>${col}</b>`;
        let para1 = document.getElementById("para1");
        para1.innerHTML=`<b><code>${col}</code></b>`;
        para1.style.color = "red !important";

        let para2 = document.getElementById("para2");
        para2.innerHTML=`<b><code>${hexCol}</code></b>`;
        para2.style.color = "red !important";


        // setInterval(() => {
        //     let col = generateRandomColor();
        //     div.style.backgroundColor = col;
        //     h1.innerHTML= `<b>${col}</b>`;
        // }, 100);

    });

    function copyToClipboard(element) {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        // Set the value of the textarea to the text content of the clicked element
        textarea.value = element.textContent;
        // Append the textarea to the document
        document.body.appendChild(textarea);
        // Select the text in the textarea
        textarea.select();
        // Execute the 'copy' command to copy the selected text
        document.execCommand('copy');
        // Remove the temporary textarea from the document
        document.body.removeChild(textarea);
        // Optionally, provide some visual feedback to the user
        alert('Color code copied to clipboard!');
    }
    let p = document.querySelectorAll("p");
    for(let para of p){
        para.addEventListener("click",function(){
            copyToClipboard(para);
        });
    }




