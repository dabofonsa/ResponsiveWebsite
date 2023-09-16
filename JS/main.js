jQuery(document).ready(function () {
  // faire briller la page
  "user strick";
  jQuery(".slider").ripples({
    dropRadius: 15,
    perturbance: 0.01,
  });

  // jQuery(".text").typed({
  //     strings: [
  //         "<strong>i love</strong>  <strong class='orimary>coding</strong>",
  //         "<strong>and to</strong> <strong> share !!.</strong>",
  //     ],
  //     typeSpeed: 0,
  //     loop: true,
  // });

  // Animer un message qui déroule sur l'écran
  var options = {
    strings: [
      "<strong>Salut Je Suis</strong> <strong class='primary'>Fonsa. </strong>",
      "<strong>Et J'aime</strong> <strong class='primary'>Le Dev web !!! .</strong>",
    ],
    typeSpeed: 100,
    loop: true,
  };
  var typed = new Typed(".text", options);

  jQuery(".work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Animation des membres de l'équipe
  jQuery("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 750,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });

  // Animation du compteur de chiffres
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // // navigation avec smoothScroll
  // $("a.smooth_scroll").smoothScroll();

  $("a.smooth_scroll").click(function (event) {
    // ajout de la fonction 'click'

    event.preventDefault(); // valeur par défaut  de la fonction 'click'

    var section = $(this).attr("href"); // valeur par défaut à un attribut qui contient le href

    // cibler le 'html' et 'body'
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - -2,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
