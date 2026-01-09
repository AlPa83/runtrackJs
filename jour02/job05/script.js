const footer = document.getElementById("footer");

window.addEventListener('scroll', function() {

    const scrollY = window.pageYOffset;

    console.log(scrollY);

    const maxScroll = 4096;

    const red = Math.min((scrollY / maxScroll) * 255, 255); // max is 255 (for reverse, use twice)
    const green = 201;
    const blue = 117;

    footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});