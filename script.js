 function showOffer(link) {
    window.open(
        link,
        '_blank'
    );
}

function enter() {
    let ageConfirmation = document.querySelector('.age-confirmation');
    ageConfirmation.style.opacity = 0;
    setTimeout(() => {
       ageConfirmation.style.display = "none"; 
    }, 500);
}

function leave() {
    window.location.href = "https://google.pl";
}