let iAm = ["worthy of love.", "healthy and wealthy. Money and abundance comes to me easily and effortlessly.", "blessed to have everything in my life to make it successful.", "grateful for who I am and can be.", "a magnet for the experiences I most desire.", "smart enough to make my own decisions.", "courageous and stand up for myself.", "allowed to make mistakes; they don't make up my whole story.", "doing my best and that is enough.", "calm, happy, and content.", "worthy of respect and acceptance.", "blessed with an amazing family and friends.", "free to create the life I desire.", "open to new adventures in my life.", "bold, beautiful, and brilliant."];

let randomIam = iAm[Math.floor(Math.random() * iAm.length)];

let iAff = ["create happiness by appreciating the little things in life.", "believe in my dreams and I won't stop until they become real.", "deserve to have joy in my life.", "approve of myself and love myself deeply.", "choose not to criticize myself or others around me.", "will surround myself with positive people who will help bring out the best in me.", "forgive those who have hurt me.", "in charge of my life and no one will dictate my path besides me.", "let go of all that no longer serves me.", "have a healthy body, tranquil mind, and a vibrant soul.", "have everything I need to get to where I want to be.", "love myself fully, including the way I look.", "can absolutely do anything I put my mind to.", "make a significant difference to the lives of people around me.", "attract money easily into my life."];

let randomIaff = iAff[Math.floor(Math.random() * iAff.length)];

let myAff= ["past is not a reflection of my future.", "body is healthy, and I'm grateful.", "life is a gift and I appreciate everything I have.", "imperfections make me unique.", "potential to succeed is limitless.", "contributions to the world are valuable.", "life becomes richer as I get older.", "needs and wants are important.", "life is full of amazing opportunities that are ready for me to step into.", "body shape is perfect in the way it’s intended to."];

let randomMyAff = myAff[Math.floor(Math.random() * myAff.length)];

console.log(`I am ${randomIam}`)
console.log(`I ${randomIaff}`)
console.log(`My ${randomMyAff}`)