const text = document.getElementById("circle-text");
    text.innerHTML = text.textContent.replace(/\S/g,'<span class="circle-span">$&</span>');
    const ele = document.querySelectorAll("span.circle-span");
    for (let i = 1; i <ele.length; i++) {
        ele[i].style.transform="rotate("+i*11.8+"deg)";
    }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.querySelector(".botao-flutuante");
    // Se o usuário rolar mais de 200px da parte superior da página, o botão aparece
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}