$(document).ready(function() {
  // Initialiser Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.item',
    layoutMode: 'masonry',
    percentPosition: true, // Permet une meilleure adaptation
  });

  // Filtrer par défaut sur "home"
  $grid.isotope({ filter: '.home' });

  // Activer les filtres
  $('.filter-button').on('click', function() {
    $('.filter-button').removeClass('active');
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // Rendre la grille visible une fois les images chargées
  $grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
    $('.grid').css('visibility', 'visible');
  });

  // Recalculer la disposition si la fenêtre est redimensionnée
  $(window).on('resize', function() {
    $grid.isotope('layout');
  });
});
