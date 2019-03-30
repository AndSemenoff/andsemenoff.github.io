let trackers = {
  clock: '',	
  items: [
    { header: 'Трекеры' },
    { divider: true, inset: false },     
    { 
      avatar: "images/rutracker.ico", 
      title: 'rutracker', 
      subtitle: "rutracker.org",
      link: "https://rutracker.org" 
    },
    { divider: true, inset: false },          
    { 
      avatar: 'images/favicon_nnm-club.png', 
      title: 'NNMclub.to', 
      subtitle: "Хороший трекер с HD контентом.", 
      link: "https://nnmclub.to"              
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/scarabey.ico', 
      title: 'Scarabey', 
      subtitle: "Новости киноиндустрии. Новинки русского проката.", 
      link: "http://scarabey.org"
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/new-team.ico", 
      title: 'New-team.org', 
      subtitle: "Что-то бывает полезное.",
      link: "http://new-team.org" 
    },
    { divider: true, inset: false },          
    { 
      avatar: 'images/kvnforall.ico', 
      title: 'KVNforall', 
      subtitle: "Специализируется на юмористическом контенте.", 
      link: "http://kvnforall.info"              
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/booktracker.ico', 
      title: 'Booktracker', 
      subtitle: "Книжный трекер", 
      link: "https://booktracker.org"
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/elbitz.ico", 
      title: 'elbitz', 
      subtitle: "elbitz",
      link: "https://elbitz.net" 
    },
    { divider: true, inset: false },          
    { 
      avatar: 'images/gfxnews.ico', 
      title: 'GFXnews', 
      subtitle: "графический дизайн и т.п.", 
      link: "http://forum.gfxnews.org"              
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/free-torrents.ico', 
      title: 'free-torrents', 
      subtitle: "free-torrents", 
      link: "http://free-torrents.org"
    },    
    { divider: true, inset: false },
    { 
      avatar: 'images/cyberleninka.ico', 
      title: 'cyberleninka', 
      subtitle: "cyberleninka", 
      link: "https://cyberleninka.ru"
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/torrentz2.ico', 
      title: 'torrentz2', 
      subtitle: "torrentz2", 
      link: "https://torrentz2.eu"
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/demonoid.ico', 
      title: 'demonoid', 
      subtitle: "demonoid", 
      link: "https://www.demonoid.pw"
    }
  ],
  items_daily: [
    { header: 'Повседневные' },
    { divider: true, inset: false },     
    { 
      avatar: "images/favicon_yandex.png", 
      title: 'Yandex', 
      subtitle: "Не только поисковик.",
      link: "https://ya.ru" 
    },
    { divider: true, inset: false },          
    { 
      avatar: 'images/favicon_rbc.png', 
      title: 'РБК', 
      subtitle: "Новости, экономика, политика", 
      link: "https://www.rbc.ru"              
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/favicon_youtube48.png', 
      title: 'Youtube', 
      subtitle: "Супер видео хостинг", 
      link: "https://www.youtube.com"
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/protonmail.ico", 
      title: 'Protonmail', 
      subtitle: "Защищенная, анонимная почта.",
      link: "https://www.protonmail.com" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/absolem.ico", 
      title: 'Absolem.info', 
      subtitle: "Личный сайт. Много инфы.",
      link: "https://www.absolem.info" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/favicon_kinopoisk196.png", 
      title: 'КиноПоиск', 
      subtitle: "Кино. <a href='subtitles.html'>Субтитры</a>",
      link: "https://www.kinopoisk.ru" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/pochta.ico", 
      title: 'Почта РФ', 
      subtitle: "Отслеживание по трек номеру.",
      link: "https://www.pochta.ru/" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/absolem.ico", 
      title: '<b>Криптомир</b>', 
      subtitle: "Новости, котировки, теория, практика.",
      link: "crypto.html" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/absolem.ico", 
      title: '<b>Программирование</b>', 
      subtitle: "Новости, теория, <a href='python_tests.html'>тестирование</a>, <a href='lua.html'>LUA</a>",
      link: "proga.html" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/habrahabr.ico", 
      title: 'Хабр', 
      subtitle: "Хабр.",
      link: "https://habrahabr.ru/" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/absolem.ico", 
      title: '<b>ААА</b>', 
      subtitle: "Новости, информация.",
      link: "aaa.html" 
    },
         
  ],
  items_learning: [
    { header: 'Обучение' },
    { divider: true, inset: false },     
    { 
      avatar: "images/stepik.ico", 
      title: 'Stepik [RU, EN]', 
      subtitle: "Бесплатные сертификаты. Можно создавать свои курсы.",
      link: "https://stepik.org/" 
    },
    { divider: true, inset: false },          
    { 
      avatar: 'images/favicon_coursera96.png', 
      title: 'Coursera', 
      subtitle: "Много платного контента. Сертификаты за деньги.", 
      link: "http://coursera.org"              
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/openedu.ico', 
      title: 'Открытое образование. [RU]', 
      subtitle: "Бесплатные сертификаты.", 
      link: "https://openedu.ru"
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/intuit.ico', 
      title: 'ИНТУИТ. [RU]', 
      subtitle: "Бесплатные сертификаты. Повышение квалификации.", 
      link: "https://intuit.ru"
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/favicon_edx.png', 
      title: 'edx', 
      subtitle: "Бесплатные тесты. Сертификаты платные.", 
      link: "https://www.edx.org"
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/favicon_universarium.png', 
      title: 'Универсариум', 
      subtitle: "Обучение. Русский. Сертификаты бесплатные.", 
      link: "https://www.universarium.org"
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/alison-icon.png", 
      title: 'Alison.com', 
      subtitle: "Сертификаты - да.",
      link: "https://www.alison.com" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/sololearn.ico", 
      title: 'sololearn', 
      subtitle: "Для начинающих. Сертификаты - да.",
      link: "https://www.sololearn.com" 
    },
    { divider: true, inset: false },
    { 
      avatar: "images/googleai.ico", 
      title: 'Google.ai', 
      subtitle: "Искусственный интеллект от гугл.",
      link: "https://ai.google" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/absolem.ico", 
      title: '<b>Английский язык</b>', 
      subtitle: "<a href='english_tutorials.html'>Уроки</a>, <a href='english_tests.html'>тесты</a>, <a href='english_links.html'>ссылки</a>.",
      link: "english_main.html" 
    },      
  ],
  items_shops: [
    { header: 'Разное' },
    { divider: true, inset: false },     
    { 
      avatar: "images/log-bga.png", 
      title: 'BGA - boardgamearena', 
      subtitle: "Настолки онлайн.<a href='bridge.html'>Бридж.</a> <a href='boardgames.html'>Подробнее.</a>",
      link: "https://boardgamearena.com" 
    },
    { divider: true, inset: false },          
    { 
      avatar: 'images/mgts.ico', 
      title: 'МГТС', 
      subtitle: "Домашний интернет и телевидение.", 
      link: "https://mgts.ru"              
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/seu-fs6.ico', 
      title: 'СЭУ ФС-6', 
      subtitle: "УК нашего дома.", 
      link: "https://seu-fs6.ru/"
    },
    { divider: true, inset: false },
    { 
      avatar: 'images/mosenergosbyt.jpg', 
      title: 'МЭС - Мосэнергосбыт', 
      subtitle: "Оплата электроэнергии.", 
      link: "https://lkkbyt.mosenergosbyt.ru"
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/z-tower.ico", 
      title: 'Z-Tower форум', 
      subtitle: "Форум нашего дома.",
      link: "http://z-tower.ru/" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/favicon_ligovka.png", 
      title: 'Лиговка', 
      subtitle: "Обмен наличной валюты в Питере.",
      link: "http://www.ligovka.ru" 
    },
    { divider: true, inset: false },    
    { 
      avatar: "images/nsbank-exchange.ico", 
      title: 'НСБанк', 
      subtitle: "Обмен наличной валюты в Москве.",
      link: "https://nsbank-exchange.ru/" 
    },
    { divider: true, inset: false },          
  ]     
}
/*
				+li_link("kvnforall", "http://kvnforall.info", "kvnforall.info")
				+li_link("booktracker", "https://booktracker.org", "booktracker.org")
				+li_link("elbitz", "http://elbitz.net", "elbitz.net")
				+li_link("gfxnews", "http://forum.gfxnews.org", "forum.gfxnews.org")
				+li_link("free-torrents", "http://free-torrents.org", "free-torrents.org")
				+li_link("cyberleninka", "https://cyberleninka.ru", "cyberleninka.ru")
				+li_link("torrentz2", "https://torrentz2.eu", "torrentz2.eu")
				+li_link("demonoid", "https://www.demonoid.pw", "demonoid.pw")	
}
*/