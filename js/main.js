window.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click',e => console.log(e.target));

  if( window.innerWidth < 767){
    document.getElementById('contacts__submit').textContent = 'Заказать'
    document.querySelector('.catalog__description').classList.toggle('hidden');
  }
console.log(window.innerWidth);
console.log(document.documentElement.scrollWidth);
  if( window.innerWidth > 1220){
    document.querySelector('.nav').classList.toggle('burger-menu');
    document.querySelector('.burger').classList.toggle('hidden');
    document.querySelector('.search__button').classList.toggle('hidden')
  }
  else {
    document.querySelector('.search-form__filter').classList.toggle('hidden')
  }

  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger').classList.toggle('burger--active');
    document.querySelector('.nav').classList.toggle('burger-menu--activ');
  });

  var elements = document.querySelectorAll(".gallery__slide");
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
      document.querySelector('.gallery__container-card').classList.toggle('hidden');
    };
  }

  document.querySelector('.gallery__container-card').addEventListener('click', function() {
    document.querySelector('.gallery__container-card').classList.toggle('hidden');
  });
});

function myFunction() {
  document.querySelector('.search-form').classList.toggle('search-form--active');
  document.querySelector('.search__button').classList.toggle('search__button--active')
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  speed: 3000,
  effect: 'fade',
  autoplay: {
      delay: 2000,
  },
});

const filter_search = document.querySelectorAll('.filter-search__select');
filter_search.forEach ( el => {
  const filter_choices = new Choices(el, {
    searchEnabled: false,
    itemSelectText: '',
  });
});


const element = document.querySelector('.select-choices');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

const gallery_swiper = new Swiper('.gallery__swiper', {
  loop: true,
      pagination: {
        el: '.gallery__swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return  number;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        // when window width is <= 499px
        400: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        // when window width is <= 999px
        530: {
          spaceBetween: 38,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1200: {
          spaceBetween: 50,
          slidesPerView: 3,
          slidesPerGroup: 3,
        }
    }
});

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: "content",
    create: function( event, ui ) {
      $( ".ui-accordion-header" ).attr("tabIndex","0");
    }
  });
});

var personality_link = document.querySelectorAll(".panel__link");
for (var i = 0; i < personality_link.length; i++) {
  personality_link[i].onclick = function(){
    alert("ASPAS");
    console.log(personality_link[i]);
  };
};

const events__swiper = new Swiper('.events__swiper', {
  loop: true,
  breakpoints: {
    // when window width is <= 499px
   320: {
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
          el: '.events__swiper-pagination',
      },
    },
    // when window width is <= 999px
    700: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.events__swiper-pagination',
    },
    },
    1000: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: '.events__swiper-pagination',
    },
    },
    1500: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: '.events__next',
      },
    }
}

});

const project__swiper = new Swiper('.project__swiper', {
  loop: true,
  navigation: {
    nextEl: '.project__next',
    prevEl: '.project__prev'
  },
  breakpoints: {
    // when window width is <= 499px
    400: {
        slidesPerView: 1,
        spaceBetween: 15,
    },
    // when window width is <= 999px
    700: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1400: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.758587, 37.613924],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
  }, {
    // При сложных перестроениях можно выставить автоматическое
    // обновление карты при изменении размеров контейнера.
    // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
    // autoFitToViewport: 'always'
    searchControlProvider: 'yandex#search'
});
  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  var myPlacemark = new ymaps.Placemark([55.758587, 37.613924], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts/Ellipse.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
};

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон',
  },

});

