       
console.log("Script connected")

        let numberOfFaces = 5;
        const theLeftSide = document.querySelector('#leftSide');
        const theRightSide = document.querySelector('#rightSide');

        function generateFaces() {
            
            for (let i = 0; i < numberOfFaces; i++) {
                let randomTop = Math.floor(Math.random() * 399) + 1;
                let randomLeft = Math.floor(Math.random() * 399) + 1;
                let face = document.createElement('img');
                face.src = 'images/smile.png';
                face.style.top = randomTop + 'px';
                face.style.left = randomLeft + 'px';
                theLeftSide.appendChild(face);
                
            }
            
            theLeftSide.lastChild.addEventListener('click', nextLevel);
            document.body.addEventListener('click', gameOver);
    
        
                const leftSideImages = theLeftSide.cloneNode(true);
                leftSideImages.removeChild(leftSideImages.lastChild);
                theRightSide.appendChild(leftSideImages);

    }
        function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 5;
            alert(`The number of faces added this round are: ${numberOfFaces}`)
            killChildren();
            generateFaces();
            
    
        }

        function gameOver() {
            alert("Game Over!");
            killChildren();
            document.body.removeEventListener('click', gameOver);
            theLeftSide.lastchild.removeEventListener('click', nextLevel);
            
        }
        


        function killChildren() {
            while(theLeftSide.lastChild){
                theLeftSide.removeChild(theLeftSide.lastChild)
            }
            while(theRightSide.lastChild){
            theRightSide.removeChild(theRightSide.lastChild)
            }
        }
 

       
//
    