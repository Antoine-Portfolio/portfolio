$(document).ready(function() {
  // Initialiser Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.item',
    layoutMode: 'masonry',
    percentPosition: true,
  });

  // Filtrer par défaut sur "home"
  $grid.isotope({ filter: '.home' });


  // Activer le bouton "Accueil" par défaut
  $('.filter-cell-B[data-filter=".home"]').addClass('active');

  // Activer les filtres
  $('.filter-cell').on('click', function() {
    $('.filter-cell').removeClass('active');
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  // Activer les filtres
  $('.filter-cell').on('click', function() {
    $('.filter-cell-B').removeClass('active');
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  // Activer les filtres
  $('.filter-cell-B').on('click', function() {
    $('.filter-cell').removeClass('active');
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
