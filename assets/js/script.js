$(function() {

  // 02
  $('.cards').on('click', '.card', function(event) {
    $(this).toggleClass('card--open');
  });

  // 03
  $('.cards').on('click', '.card__like', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).toggleClass('card__like--red');
    var target = $(this).parent().find('.social__element').eq(1).children('.social__number')
    var likes = parseInt( target.text() )

    if ($(this).hasClass('card__like--red')) {
      likes++
    } else {
      likes--
    }

    target.text(likes)

  });

  // 04
  $('.cards').on('click', '.card__follow-btn', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var target = $(this).parent().siblings('.social').find('.social__number').eq(2)

    $(this).toggleClass('card__follow-btn--following');
    var follow = parseInt(target.text())

    if ($(this).hasClass('card__follow-btn--following')) {
      $(this).text('Siguiendo');
      follow += 1
    } else {
      $(this).text('Seguir')
      follow -= 1
    }

    target.text(follow)
  });

  // 05
  $('#image').on('change', function(event) {
    $('.create__image img').attr('src', `assets/images/squared/${$(this).val()}`)
  });

  // 06
  $('#author').on('change', function(event) {
    $('.create__profile img').attr('src', `assets/images/profiles/${$(this).val()}`)
  });

  // 07
  $('.create__form').on('submit', function(event) {
    event.preventDefault();

    var _this = $(this);
    var name        = _this.find('[name="name"]').val()
    var author      = _this.find('[name="author"]').val()
    var author_name = _this.find('[name="author"]').children(':selected').text()
    var image       = _this.find('[name="image"]').val()
    var followers   = _this.find('[name="followers"]').val()
    var likes       = _this.find('[name="likes"]').val()
    var following   = _this.find('[name="following"]').val()

    // console.log(name, author, image, author_name, followers, likes, following)

    $('.cards').append(`<li class="card">
      <div class="card__highlight">
        <img class="card__img" src="./assets/images/squared/${image}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="./assets/images/profiles/${author}" alt="">
        </div>
        <a class="card__like" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__title">
          <h2>${name}</h2>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">${author_name}</h3>
        </div>
        <div class="card__hidden">
          <ul class="social">
            <li class="social__element">
              <div class="social__number">${followers}</div>
              <div class="social__text">Followers</div>
            </li>
            <li class="social__element">
              <div class="social__number">${likes}</div>
              <div class="social__text">Likes</div>
            </li>
            <li class="social__element">
              <div class="social__number">${following}</div>
              <div class="social__text">Following</div>
            </li>
          </ul>
          <div class="card__follow">
            <button class="card__follow-btn">Seguir</button>
          </div>
        </div>
      </div>
    </li>`)

    _this.find('[name="name"]').val('')
    _this.find('[name="author"]').val('uk.png')
    _this.find('[name="image"]').val('uk.png')
    _this.find('[name="followers"]').val('')
    _this.find('[name="likes"]').val('')
    _this.find('[name="following"]').val('')
    $('.create__image img').attr('src', `assets/images/squared/uk.png`)
    $('.create__profile img').attr('src', `assets/images/profiles/uk.png`)
  });


});
