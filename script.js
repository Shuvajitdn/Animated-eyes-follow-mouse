document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(event) {
    const eyes = document.querySelectorAll(".eyes");
    eyes.forEach(function (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.clientX - x, event.clientY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;

        // Move the pupil (::before pseudo-element)
        let eyePupil = eye.querySelector("::before");
        const distance = 15; // max distance pupil can move inside the eye
        const pupilX = distance * Math.cos(radian);
        const pupilY = distance * Math.sin(radian);

        // Apply transformations to the pupil
        eye.querySelector("::before").style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
    });
}
