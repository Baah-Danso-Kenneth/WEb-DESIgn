import gsap from "gsap"
import {SplitText} from "gsap/SplitText"
import { CustomEase } from "gsap/all" 


gsap.registerPlugin(SplitText, CustomEase);

CustomEase.create("hop", "0.9, 0, 0.1, 1");

let split = SplitText.create(".hero-copy p", {
    type: "words",
    mask: "words",
    wordsClass: "word",
});

const textPaths = document.querySelectorAll(".loader svg textPath");
const orbitRadii = [775, 700, 625, 550, 475, 400, 325, 250];

// Function to create particle effect by splitting text into chars
textPaths.forEach((textPath, index) => {
    const text = textPath.textContent;
    const chars = text.split('');
    const parentText = textPath.parentElement;
    const href = textPath.getAttribute('href');
    const radius = orbitRadii[index];
    const baseDuration = 10 + (radius / 775) * 10;  // Slower base

    // Remove original textPath
    parentText.removeChild(textPath);

    // Create new textPath for each char
    chars.forEach((char, charIndex) => {
        const newTextPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
        newTextPath.setAttribute('href', href);
        newTextPath.setAttribute('startOffset', `${(charIndex / chars.length) * 100}%`);
        newTextPath.textContent = char;
        parentText.appendChild(newTextPath);

        // Random direction: some forward, some backward
        const direction = Math.random() < 0.5 ? '+=' : '-=';
        const duration = baseDuration + Math.random() * 5;  // Add randomness
        const delay = index * 0.2 + charIndex * 0.1;  // Stagger

        gsap.to(newTextPath, {
            attr: { startOffset: direction + '100%' },
            duration: duration,
            ease: "none",
            repeat: -1,
            delay: delay,
            // Add particle effects: slight scale and opacity flicker
            scale: gsap.utils.random(0.8, 1.2),
            opacity: gsap.utils.random(0.7, 1),
            yoyo: true,
            repeatDelay: 0,
        });

        // Add ocean-like flowing motion: staggered wave rotation and y oscillation
        gsap.to(newTextPath, {
            rotation: gsap.utils.random(-10, 10),
            y: gsap.utils.random(-5, 5),
            duration: 2 + Math.random() * 1,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: charIndex * 0.2,  // Stagger for wave effect
        });
    });
});

let loaderRotation = 0;

function animateRotation() {
    const spinDirection = Math.random() < 0.5 ? 1 : -1;

    loaderRotation += 25 * spinDirection;

    gsap.to(".loader", {
        rotation: loaderRotation,
        duration: 20,
        ease: "power2.inOut",
        onComplete: animateRotation,
    });
}

animateRotation();

const counterText = document.querySelector(".counter p");

const count = {value: 0};


gsap.to(count, {
    value: 100,
    duration: 5,
    delay: 1,
    ease: "power1.out",
    yoyo: true,
    repeat: -1,
    onUpdate: function () {
        counterText.textContent = Math.floor(count.value);
    },
})


const orbitTextElements = document.querySelectorAll(".orbit-text");

gsap.set(orbitTextElements, {opacity: 0});

const orbitTextsReversed = Array.from(orbitTextElements).reverse();

gsap.to(orbitTextsReversed, {
    opacity: 1,
    duration: 0.75,
    stagger: 0.125,
    ease: "power1.out",

    onComplete: function () {
        gsap.to(".loader", {
            opacity: 0,
            duration: 1,
            onComplete: ()=> {
                document.querySelector(".loader").remove();
            },
        });


      gsap.to(".hero-bg", {
        scale: 1,
        duration: 2,
        delay: -0.5,
        ease: "hop"
      });



      gsap.to(".hero-copy p .word", {
        y:0,
        duration: 2, 
        delay: -0.25,
        stagger: 0.1,
        ease: "hop",
      });
    }
})