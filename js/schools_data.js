const SCHOOLS_DATA = [
  {
    "rank": 1,
    "name": "Niepubliczna Szkoła Podstawowa nr 47 im. Roberta Schumana Fundacji Primus Warszawa",
    "score": 89.808,
    "address": "Pułkownika Zoltána Baló 1, 02-793 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://primus.com.pl/",
    "driving_time": "27 min",
    "transit_time": "46 min",
    "walking_time": "3 godz. 20 min",
    "distance": "14,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1337811,
      "lng": 21.0626987
    }
  },
  {
    "rank": 2,
    "name": "Szkoła Podstawowa nr 6 Sióstr Niepokalanek im. bł. M. Marceliny Darowskiej Warszawa",
    "score": 86.245,
    "address": "Jerzego Zaruby 2, 02-796 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://szkolaniepokalanek.com/",
    "driving_time": "29 min",
    "transit_time": "56 min",
    "walking_time": "3 godz. 39 min",
    "distance": "15,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1277925,
      "lng": 21.0758051
    }
  },
  {
    "rank": 3,
    "name": "Prywatna Szkoła Podstawowa nr 51 im. Jana Brzechwy Warszawa",
    "score": 85.648,
    "address": "Harfowa 2, 02-389 Warszawa, Polska",
    "district": "Ochota",
    "website": "http://brzechwa.probeanus.pl/",
    "driving_time": "16 min",
    "transit_time": "35 min",
    "walking_time": "1 godz. 4 min",
    "distance": "4,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1999578,
      "lng": 20.9654857
    }
  },
  {
    "rank": 4,
    "name": "Szkoła Podstawowa nr 3 Przymierza Rodzin im. bł. ks. Jerzego Popiełuszki Warszawa",
    "score": 85.456,
    "address": "Nocznickiego 7, 01-948 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://www.spr3bielany.edu.pl/",
    "driving_time": "17 min",
    "transit_time": "49 min",
    "walking_time": "2 godz. 10 min",
    "distance": "9,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2964366,
      "lng": 20.9381538
    }
  },
  {
    "rank": 5,
    "name": "Szkoła Podstawowa nr 81 Fundacji Rodzice Dzieciom Warszawa",
    "score": 83.691,
    "address": "Ludwika Krzywickiego 30, 02-078 Warszawa, Polska",
    "district": "Ochota",
    "website": "https://nsp81.edupage.org/",
    "driving_time": "11 min",
    "transit_time": "26 min",
    "walking_time": "44 min",
    "distance": "3,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.21952659999999,
      "lng": 21.0009195
    }
  },
  {
    "rank": 6,
    "name": "Prywatna Szkoła Podstawowa nr 92 Warszawa",
    "score": 81.271,
    "address": "Patriotów 347, 04-760 Warszawa, Polska",
    "district": "Wawer",
    "website": "http://www.szkolaprywatna92.edu.pl/",
    "driving_time": "26 min",
    "transit_time": "50 min",
    "walking_time": "3 godz. 29 min",
    "distance": "15,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.20994400000001,
      "lng": 21.1619436
    }
  },
  {
    "rank": 7,
    "name": "Społeczna Szkoła Podstawowa nr 26 im. Prof. Jigoro Kano Warszawa",
    "score": 80.834,
    "address": "Puławska 97B, 02-595 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://www.ssp26.pl/",
    "driving_time": "18 min",
    "transit_time": "36 min",
    "walking_time": "1 godz. 32 min",
    "distance": "6,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1987272,
      "lng": 21.025784
    }
  },
  {
    "rank": 8,
    "name": "Szkoła Podstawowa im. Juliusza Vernea Warszawa",
    "score": 79.727,
    "address": "teren AWF, Marymoncka 34, 01-813 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://www.verne.edu.pl/",
    "driving_time": "15 min",
    "transit_time": "39 min",
    "walking_time": "1 godz. 43 min",
    "distance": "7,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.285264,
      "lng": 20.958769
    }
  },
  {
    "rank": 9,
    "name": "Niepubliczna Szkoła Podstawowa British Primary School of Wilanów Warszawa",
    "score": 79.63,
    "address": "Prymasa Augusta Hlonda 12, 02-972 Warszawa, Polska",
    "district": "Wilanów",
    "website": "https://bsw.com.pl/",
    "driving_time": "28 min",
    "transit_time": "59 min",
    "walking_time": "2 godz. 51 min",
    "distance": "12,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1584981,
      "lng": 21.066062
    }
  },
  {
    "rank": 10,
    "name": "Społeczna Szkoła Podstawowa nr 14 im. Dzieci Zjednoczonej Europy Warszawa",
    "score": 79.248,
    "address": "Bachmacka 3, 02-647 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://www.bachmacka.pl",
    "driving_time": "18 min",
    "transit_time": "45 min",
    "walking_time": "1 godz. 22 min",
    "distance": "5,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1939697,
      "lng": 21.0049971
    }
  },
  {
    "rank": 11,
    "name": "Szkoła Podstawowa nr 9 STO Warszawa",
    "score": 78.938,
    "address": "Wiolinowa 6, 02-785 Warszawa, Polska",
    "district": "Ursynów",
    "website": "http://9sto.edu.pl/",
    "driving_time": "23 min",
    "transit_time": "38 min",
    "walking_time": "2 godz. 30 min",
    "distance": "10,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1591344,
      "lng": 21.0277257
    }
  },
  {
    "rank": 12,
    "name": "Szkoła Podstawowa nr 221 z Oddziałami Integracyjnymi im. Barbary Bronisławy Czarnowskiej Warszawa",
    "score": 78.63,
    "address": "Ogrodowa 42/44, 00-876 Warszawa, Polska",
    "district": "Wola",
    "website": "http://www.sp221.edu.pl/",
    "driving_time": "8 min",
    "transit_time": "13 min",
    "walking_time": "23 min",
    "distance": "1,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2382986,
      "lng": 20.9867338
    }
  },
  {
    "rank": 13,
    "name": "Katolicka Szkoła Podstawowa nr 109 Warszawa",
    "score": 78.27,
    "address": "Kazimierza Wóycickiego 1/3/bud.18, 01-938 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://www.ksp109.edupage.org//",
    "driving_time": "19 min",
    "transit_time": "1 godz. 1 min",
    "walking_time": "2 godz. 42 min",
    "distance": "11,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.3125791,
      "lng": 20.921056
    }
  },
  {
    "rank": 14,
    "name": "Niepubliczna Szkoła Podstawowa British International Academy Primary Warsaw Warszawa",
    "score": 78.194,
    "address": "Prymasa Augusta Hlonda 12, 02-972 Warszawa, Polska",
    "district": "Wilanów",
    "website": "https://bsw.com.pl/",
    "driving_time": "28 min",
    "transit_time": "59 min",
    "walking_time": "2 godz. 51 min",
    "distance": "12,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1584981,
      "lng": 21.066062
    }
  },
  {
    "rank": 15,
    "name": "Szkoła Podstawowa nr 112 Przymierza Rodzin im. św. Jana Pawła II Warszawa",
    "score": 78.006,
    "address": "Grzegorzewskiej 10, 02-778 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://www.spprzymierzejp2.pl/",
    "driving_time": "25 min",
    "transit_time": "50 min",
    "walking_time": "2 godz. 54 min",
    "distance": "12,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1515554,
      "lng": 21.0562953
    }
  },
  {
    "rank": 16,
    "name": "Społeczna Szkoła Podstawowa nr 2 im. Polskich Matematyków Zwycięzców Enigmy Warszawa",
    "score": 77.589,
    "address": "Dziatwy 6, 03-109 Warszawa, Polska",
    "district": "Białołęka",
    "website": "https://www.sto2.pl/",
    "driving_time": "21 min",
    "transit_time": "1 godz. 0 min",
    "walking_time": "3 godz. 11 min",
    "distance": "13,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.33071150000001,
      "lng": 20.96925
    }
  },
  {
    "rank": 17,
    "name": "Dwujęzyczna Społeczna Szkoła Podstawowa nr 5 im. Zawiszy Czarnego STO Warszawa",
    "score": 77.465,
    "address": "Paryska 25, 03-945 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "http://www.zawisza.szkola.pl/",
    "driving_time": "16 min",
    "transit_time": "35 min",
    "walking_time": "1 godz. 43 min",
    "distance": "7,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.22885890000001,
      "lng": 21.057323
    }
  },
  {
    "rank": 18,
    "name": "Niepubliczna Szkoła Podstawowa z Oddziałami Dwujęzycznymi nr 81 Academy International Warszawa",
    "score": 77.336,
    "address": "Karolkowa 49, 01-203 Warszawa, Polska",
    "district": "Wola",
    "website": "https://academyinternational.pl/szkola-podstawowa/karolkowa/?utm_source=google&utm_medium=organic&utm_campaign=wizytowka",
    "driving_time": "3 min",
    "transit_time": "7 min",
    "walking_time": "11 min",
    "distance": "0,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2344715,
      "lng": 20.9761857
    }
  },
  {
    "rank": 19,
    "name": "Szkoła Podstawowa nr 358 im. hetmana Jana Zamoyskiego Warszawa",
    "score": 76.964,
    "address": "Św. Urszuli Ledóchowskiej 10, 02-972 Warszawa, Polska",
    "district": "Wilanów",
    "website": "http://sp358warszawa.edupage.org/",
    "driving_time": "27 min",
    "transit_time": "57 min",
    "walking_time": "2 godz. 54 min",
    "distance": "12,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1564132,
      "lng": 21.0687914
    }
  },
  {
    "rank": 20,
    "name": "Szkoła Podstawowa Sióstr Nazaretanek z Oddziałami Dwujęzycznymi Warszawa",
    "score": 76.74,
    "address": "Czerniakowska 137, 00-720 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://nazaretanki.edu.pl/",
    "driving_time": "17 min",
    "transit_time": "36 min",
    "walking_time": "1 godz. 35 min",
    "distance": "6,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2106691,
      "lng": 21.0467961
    }
  },
  {
    "rank": 21,
    "name": "Społeczna Szkoła Podstawowa nr 10 im. kard. Stefana Wyszyńskiego Warszawa",
    "score": 76.609,
    "address": "Ostrobramska 72, 04-175 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "http://www.1027.pl/",
    "driving_time": "22 min",
    "transit_time": "45 min",
    "walking_time": "2 godz. 32 min",
    "distance": "10,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2354297,
      "lng": 21.1119528
    }
  },
  {
    "rank": 22,
    "name": "Szkoła Podstawowa Niepubliczna nr 49 Warszawa",
    "score": 76.373,
    "address": "Jana Sebastiana Bacha 2, 02-743 Warszawa, Polska",
    "district": "Mokotów",
    "website": "https://varsovia.edu.pl/",
    "driving_time": "23 min",
    "transit_time": "40 min",
    "walking_time": "2 godz. 13 min",
    "distance": "9,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1727475,
      "lng": 21.0327755
    }
  },
  {
    "rank": 23,
    "name": "Społeczna Szkoła Podstawowa nr 30 Warszawa",
    "score": 76.318,
    "address": "Astronautów 11, 02-154 Warszawa, Polska",
    "district": "Włochy",
    "website": "http://www.astronautow.szkolnastrona.pl/",
    "driving_time": "18 min",
    "transit_time": "43 min",
    "walking_time": "1 godz. 37 min",
    "distance": "7,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1827933,
      "lng": 20.974066
    }
  },
  {
    "rank": 24,
    "name": "Społeczna Szkoła Podstawowa nr 16 Społecznego Towarzystwa Oświatowego Warszawa",
    "score": 76.305,
    "address": "al. „Solidarności” 113C, 00-140 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "https://szkola16sto.edupage.org/",
    "driving_time": "12 min",
    "transit_time": "17 min",
    "walking_time": "34 min",
    "distance": "2,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2417075,
      "lng": 20.9957175
    }
  },
  {
    "rank": 25,
    "name": "Szkoła Podstawowa Przy Społecznym Liceum Ogólnokształcącym nr 4 im. Batalionu Ak Parasol Warszawa",
    "score": 76.233,
    "address": "Hawajska 14 A, 02-776 Warszawa, Polska",
    "district": "Ursynów",
    "website": "http://www.slo4.edu.pl/",
    "driving_time": "24 min",
    "transit_time": "45 min",
    "walking_time": "2 godz. 48 min",
    "distance": "12,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.15089440000001,
      "lng": 21.0411052
    }
  },
  {
    "rank": 26,
    "name": "Szkoła Muzyczna I Stopnia im. Stanisława Moniuszki Warszawa",
    "score": 76.163,
    "address": "Kawęczyńska 23/25, 03-775 Warszawa, Polska",
    "district": "Praga-Północ",
    "website": "https://www.gov.pl/web/osmwarszawa/",
    "driving_time": "21 min",
    "transit_time": "33 min",
    "walking_time": "1 godz. 35 min",
    "distance": "6,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2568902,
      "lng": 21.0539172
    }
  },
  {
    "rank": 27,
    "name": "Społeczna Szkoła Podstawowa nr 1 im. Jana Nowaka Jeziorańskiego Warszawa",
    "score": 76.079,
    "address": "Nowoursynowska 139U, 02-776 Warszawa, Polska",
    "district": "Ursynów",
    "website": "http://zsosto.pl/szkola-podstawowa/",
    "driving_time": "27 min",
    "transit_time": "53 min",
    "walking_time": "2 godz. 58 min",
    "distance": "12,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1500299,
      "lng": 21.0600689
    }
  },
  {
    "rank": 28,
    "name": "Szkoła Podstawowa nr 24 STO Warszawa",
    "score": 76.034,
    "address": "Powstańców Śląskich 67a, 01-355 Warszawa, Polska",
    "district": "Bemowo",
    "website": "http://www.stonabemowie.edu.pl/",
    "driving_time": "15 min",
    "transit_time": "26 min",
    "walking_time": "1 godz. 11 min",
    "distance": "5,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2343005,
      "lng": 20.9116742
    }
  },
  {
    "rank": 29,
    "name": "Katolicka Szkoła Podstawowa im. Heleny Kmieć Fundacji Na Rzecz Rodziny Warszawa",
    "score": 75.695,
    "address": "ul, Przy Bażantarni 3, 02-793 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://www.maladroga.edu.pl/",
    "driving_time": "26 min",
    "transit_time": "53 min",
    "walking_time": "3 godz. 20 min",
    "distance": "14,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1376357,
      "lng": 21.0670375
    }
  },
  {
    "rank": 30,
    "name": "Katolicka Szkoła Podstawowa im. ks. Piotra Skargi Warszawa",
    "score": 75.588,
    "address": "Józefa Bema 73/75, 01-244 Warszawa, Polska",
    "district": "Wola",
    "website": "https://www.skarga.edu.pl/pod/",
    "driving_time": "5 min",
    "transit_time": "8 min",
    "walking_time": "16 min",
    "distance": "1,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2272827,
      "lng": 20.9584556
    }
  },
  {
    "rank": 31,
    "name": "Szkoła Podstawowa im. św. Franciszka Warszawa",
    "score": 75.37,
    "address": "Teresińska 9, 00-727 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://franciszek.edu.pl/",
    "driving_time": "19 min",
    "transit_time": "47 min",
    "walking_time": "1 godz. 49 min",
    "distance": "7,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.20024180000001,
      "lng": 21.0473661
    }
  },
  {
    "rank": 32,
    "name": "Warsaw Bilingual School Dwujęzyczna Szkoła Podstawowa im. Profesora Władysława Bartoszewskiego Warszawa",
    "score": 74.996,
    "address": "Radarowa 6, 02-137 Warszawa, Polska",
    "district": "Włochy",
    "website": "https://www.wbschool.pl/",
    "driving_time": "15 min",
    "transit_time": "40 min",
    "walking_time": "1 godz. 20 min",
    "distance": "5,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.191303,
      "lng": 20.9656393
    }
  },
  {
    "rank": 33,
    "name": "Szkoła Podstawowa nr 98 Didasko Warszawa",
    "score": 74.917,
    "address": "Ostrobramska 76, 04-041 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "http://www.szkoladidasko.pl/",
    "driving_time": "23 min",
    "transit_time": "44 min",
    "walking_time": "2 godz. 31 min",
    "distance": "10,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2339985,
      "lng": 21.1110566
    }
  },
  {
    "rank": 34,
    "name": "Szkoła Podstawowa im. Samuela Bogumiła Lindego Warszawa",
    "score": 74.786,
    "address": "Jana Rosoła 10, 02-786 Warszawa, Polska",
    "district": "Ursynów",
    "website": "http://linde.waw.pl/",
    "driving_time": "29 min",
    "transit_time": "52 min",
    "walking_time": "3 godz. 27 min",
    "distance": "14,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1340866,
      "lng": 21.0760998
    }
  },
  {
    "rank": 35,
    "name": "Szkoła Podstawowa Aurus Warszawa",
    "score": 74.59,
    "address": "Poleczki 7, 02-822 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://aurus.edu.pl/",
    "driving_time": "22 min",
    "transit_time": "48 min",
    "walking_time": "2 godz. 39 min",
    "distance": "11,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1532529,
      "lng": 21.0136677
    }
  },
  {
    "rank": 36,
    "name": "Szkoła Podstawowa im. Wiktorii Wiedeńskiej Fundacji Edukacyjnej Varsovia Warszawa",
    "score": 74.436,
    "address": "Kolegiacka 1, 02-946 Warszawa, Polska",
    "district": "Wilanów",
    "website": "https://wilanow.varsovia.edu.pl/",
    "driving_time": "26 min",
    "transit_time": "55 min",
    "walking_time": "2 godz. 52 min",
    "distance": "12,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1664979,
      "lng": 21.0881734
    }
  },
  {
    "rank": 37,
    "name": "Społeczna Szkoła Podstawowa nr 4 im. Władysława Grabskiego Warszawa",
    "score": 74.414,
    "address": "Traktorzystów 16, 02-495 Warszawa, Polska",
    "district": "Ursus",
    "website": "https://www.sto4.edu.pl/",
    "driving_time": "16 min",
    "transit_time": "39 min",
    "walking_time": "1 godz. 46 min",
    "distance": "7,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1983465,
      "lng": 20.8890924
    }
  },
  {
    "rank": 38,
    "name": "Kanadyjska Szkoła Podstawowa nr 84 Warszawa",
    "score": 74.28,
    "address": "Bełska 7, 02-638 Warszawa, Polska",
    "district": "Mokotów",
    "website": "https://canadian-school.pl/",
    "driving_time": "18 min",
    "transit_time": "46 min",
    "walking_time": "1 godz. 25 min",
    "distance": "6,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1916776,
      "lng": 20.99889
    }
  },
  {
    "rank": 39,
    "name": "Szkoła Podstawowa Sióstr Felicjanek nr 28 im. bł. Marii Angeli Truszkowskiej Warszawa",
    "score": 74.259,
    "address": "Azaliowa 10, 04-539 Warszawa, Polska",
    "district": "Wawer",
    "website": "http://felicjanki.edu.pl/",
    "driving_time": "25 min",
    "transit_time": "59 min",
    "walking_time": "3 godz. 15 min",
    "distance": "14,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2371734,
      "lng": 21.1537312
    }
  },
  {
    "rank": 40,
    "name": "Społeczna Szkoła Podstawowa nr 11 Warszawa",
    "score": 74.064,
    "address": "Toruńska 23, 03-226 Warszawa, Polska",
    "district": "Żerań",
    "website": "https://sp11warszawa.edupage.org/",
    "driving_time": "18 min",
    "transit_time": "51 min",
    "walking_time": "2 godz. 23 min",
    "distance": "10,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2955011,
      "lng": 21.0166418
    }
  },
  {
    "rank": 41,
    "name": "Niepubliczna Szkoła Podstawowa nr 97 Warszawa",
    "score": 74.053,
    "address": "Abramowskiego 4, 02-659 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://leonardo.edu.pl/",
    "driving_time": "19 min",
    "transit_time": "38 min",
    "walking_time": "1 godz. 46 min",
    "distance": "7,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1843945,
      "lng": 21.0163644
    }
  },
  {
    "rank": 42,
    "name": "Społeczna Szkoła Podstawowa Integracyjna nr 100 Warszawa",
    "score": 73.647,
    "address": "Wojciecha Bogusławskiego 6a, 01-923 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://www.jaskolka100.org/",
    "driving_time": "18 min",
    "transit_time": "50 min",
    "walking_time": "1 godz. 46 min",
    "distance": "7,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.276457,
      "lng": 20.9167953
    }
  },
  {
    "rank": 43,
    "name": "Dwujęzyczna Szkoła Podstawowa nr 1 Warszawa",
    "score": 73.629,
    "address": "Wspólna 55, 05-075 Warszawa, Polska",
    "district": "Wesoła",
    "website": "https://www.szkola-dwujezyczna.pl/",
    "driving_time": "29 min",
    "transit_time": "1 godz. 4 min",
    "walking_time": "3 godz. 55 min",
    "distance": "16,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2485399,
      "lng": 21.1944365
    }
  },
  {
    "rank": 44,
    "name": "Szkoła Podstawowa nr 2 Przymierza Rodzin im. ks. Jana Twardowskiego Warszawa",
    "score": 73.26,
    "address": "Racławicka 14, 02-601 Warszawa, Polska",
    "district": "Mokotów",
    "website": "https://spr.edu.pl/",
    "driving_time": "17 min",
    "transit_time": "36 min",
    "walking_time": "1 godz. 29 min",
    "distance": "6,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1996309,
      "lng": 21.0191131
    }
  },
  {
    "rank": 45,
    "name": "Szkoła Podstawowa Kolegium Zakonu Pijarów im. o. Onufrego Kopczyńskiego Warszawa",
    "score": 73.248,
    "address": "Gwintowa 3, 00-704 Warszawa, Polska",
    "district": "Mokotów",
    "website": "",
    "driving_time": "20 min",
    "transit_time": "47 min",
    "walking_time": "2 godz. 11 min",
    "distance": "9,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2081945,
      "lng": 21.0825648
    }
  },
  {
    "rank": 46,
    "name": "Szkoła Podstawowa z Oddziałami Dwujęzycznymi nr 20 im. Jana Gutenberga Fundacji Szkolnej Warszawa",
    "score": 73.192,
    "address": "Obrzeżna 12A, 02-691 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://www.sp.fundacjaszkolna.edu.pl/",
    "driving_time": "20 min",
    "transit_time": "51 min",
    "walking_time": "1 godz. 55 min",
    "distance": "8,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1721586,
      "lng": 21.0006989
    }
  },
  {
    "rank": 47,
    "name": "Podstawowa Szkoła Międzynarodowa Warszawa",
    "score": 73.156,
    "address": "Jagielska 2, 02-886 Warszawa, Polska",
    "district": "Ursynów",
    "website": "http://www.szkolamiedzynarodowa.pl/",
    "driving_time": "27 min",
    "transit_time": "1 godz. 16 min",
    "walking_time": "3 godz. 56 min",
    "distance": "17,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1122077,
      "lng": 21.0399698
    }
  },
  {
    "rank": 48,
    "name": "Szkoła Podstawowa nr 75 im. Marii Konopnickiej Warszawa",
    "score": 72.805,
    "address": "Niecała 14, 00-098 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://www.sp75.edu.pl/",
    "driving_time": "14 min",
    "transit_time": "16 min",
    "walking_time": "43 min",
    "distance": "3,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2412594,
      "lng": 21.0072532
    }
  },
  {
    "rank": 49,
    "name": "Polish British Academy Of Warsaw Warszawa",
    "score": 72.265,
    "address": "Wiertnicza 75, 02-952 Warszawa, Polska",
    "district": "Wilanów",
    "website": "http://www.pbaw.pl/",
    "driving_time": "26 min",
    "transit_time": "57 min",
    "walking_time": "2 godz. 40 min",
    "distance": "11,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1722583,
      "lng": 21.0802504
    }
  },
  {
    "rank": 50,
    "name": "Bednarska Szkoła Podstawowa Warszawa",
    "score": 72.23,
    "address": "Kawalerii 5, 00-468 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://bsr.edu.pl/",
    "driving_time": "16 min",
    "transit_time": "35 min",
    "walking_time": "1 godz. 22 min",
    "distance": "5,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.21772929999999,
      "lng": 21.0397388
    }
  },
  {
    "rank": 51,
    "name": "Szkoła Podstawowa nr 150 im. Walerego Wróblewskiego Warszawa",
    "score": 72.23,
    "address": "Thommego 1, 01-491 Warszawa, Polska",
    "district": "Bemowo",
    "website": "http://www.zs46bemowo.szkolnastrona.pl/",
    "driving_time": "16 min",
    "transit_time": "38 min",
    "walking_time": "1 godz. 35 min",
    "distance": "6,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.26099199999999,
      "lng": 20.9025201
    }
  },
  {
    "rank": 52,
    "name": "Szkoła Podstawowa nr 41 Edu Bene Warszawa",
    "score": 72.162,
    "address": "Świętojerska 24, 00-288 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://www.pzs.waw.pl/index.php/oferta-edukacyjna/zajecia-wychowania-fizycznego",
    "driving_time": "13 min",
    "transit_time": "22 min",
    "walking_time": "50 min",
    "distance": "3,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2496272,
      "lng": 20.9998346
    }
  },
  {
    "rank": 53,
    "name": "Szkoła Podstawowa z Oddziałami Integracyjnymi nr 341 im. Twórców Literatury Dziecięcej Warszawa",
    "score": 71.854,
    "address": "Oławska 3, 01-494 Warszawa, Polska",
    "district": "Bemowo",
    "website": "",
    "driving_time": "14 min",
    "transit_time": "30 min",
    "walking_time": "1 godz. 16 min",
    "distance": "5,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2597391,
      "lng": 20.9254301
    }
  },
  {
    "rank": 54,
    "name": "Szkoła Podstawowa nr 74 im. bł. Honorata Koźmińskiego Warszawa",
    "score": 71.756,
    "address": "ul, Władysława Smoleńskiego 31, 01-698 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://www.smolenskiego.edu.pl/",
    "driving_time": "14 min",
    "transit_time": "39 min",
    "walking_time": "1 godz. 34 min",
    "distance": "6,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2796532,
      "lng": 20.9628579
    }
  },
  {
    "rank": 55,
    "name": "Szkoła Podstawowa nr 62 im. Joanny Kolasińskiej Warszawa",
    "score": 71.54,
    "address": "Skrajna 10, 03-209 Warszawa, Polska",
    "district": "Targówek",
    "website": "http://psp62.pl/",
    "driving_time": "16 min",
    "transit_time": "45 min",
    "walking_time": "2 godz. 19 min",
    "distance": "10,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2940064,
      "lng": 21.0203966
    }
  },
  {
    "rank": 56,
    "name": "Polsko Francuska Szkoła Podstawowa La Fontaine Warszawa",
    "score": 71.36,
    "address": "Wandy Rutkiewicz 2, 02-956 Warszawa, Polska",
    "district": "Wilanów",
    "website": "http://www.lafontaine.edu.pl/",
    "driving_time": "27 min",
    "transit_time": "49 min",
    "walking_time": "2 godz. 29 min",
    "distance": "10,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1727369,
      "lng": 21.068055
    }
  },
  {
    "rank": 57,
    "name": "Szkoła Podstawowa nr 77 im. Wandy Zieleńczyk Warszawa",
    "score": 71.288,
    "address": "Samogłoska 9, 01-980 Warszawa, Polska",
    "district": "Bielany",
    "website": "https://sp77.edupage.org/",
    "driving_time": "17 min",
    "transit_time": "1 godz. 0 min",
    "walking_time": "2 godz. 40 min",
    "distance": "11,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.3108851,
      "lng": 20.9198287
    }
  },
  {
    "rank": 58,
    "name": "Szkoła Podstawowa nr 255 im. Cypriana Kamila Norwida Warszawa",
    "score": 71.238,
    "address": "Kamionkowska 36/44, 03-805 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "https://sp255.edupage.org/",
    "driving_time": "22 min",
    "transit_time": "35 min",
    "walking_time": "1 godz. 46 min",
    "distance": "7,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.24725979999999,
      "lng": 21.0650671
    }
  },
  {
    "rank": 59,
    "name": "Szkoła Podstawowa nr 373 im. Ignacego Jana Paderewskiego Warszawa",
    "score": 71.193,
    "address": "Angorska 2, 03-913 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "http://sp373.srv.pl/",
    "driving_time": "17 min",
    "transit_time": "31 min",
    "walking_time": "1 godz. 35 min",
    "distance": "6,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2376783,
      "lng": 21.0582855
    }
  },
  {
    "rank": 60,
    "name": "Szkoła Podstawowa Sióstr Zmartwychwstanek im. bł. S. Alicji Kotowskiej Warszawa",
    "score": 71.17,
    "address": "Zygmunta Krasińskiego 31, 01-784 Warszawa, Polska",
    "district": "Żoliborz",
    "website": "http://www.szarotka.edu.pl/",
    "driving_time": "14 min",
    "transit_time": "33 min",
    "walking_time": "1 godz. 6 min",
    "distance": "4,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.26591759999999,
      "lng": 20.9762804
    }
  },
  {
    "rank": 61,
    "name": "Szkoła Podstawowa Nasza Szkoła im. Janusza Korczaka Warszawa",
    "score": 71.14,
    "address": "Liczydło 3, 03-183 Warszawa, Polska",
    "district": "Białołęka",
    "website": "http://naszaszkola.edu.pl/",
    "driving_time": "16 min",
    "transit_time": "45 min",
    "walking_time": "2 godz. 44 min",
    "distance": "11,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.3138361,
      "lng": 20.9798431
    }
  },
  {
    "rank": 62,
    "name": "Szkoła Podstawowa Gaudeamus Warszawa",
    "score": 71.116,
    "address": "Lazurowa 67, 01-314 Warszawa, Polska",
    "district": "Bemowo",
    "website": "https://szkola-gaudeamus.pl/",
    "driving_time": "16 min",
    "transit_time": "34 min",
    "walking_time": "1 godz. 27 min",
    "distance": "6,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2286587,
      "lng": 20.8960353
    }
  },
  {
    "rank": 63,
    "name": "Społeczna Szkoła Podstawowa nr 13 z Oddziałami Dwujęzycznymi im. Lotników Amerykańskich Warszawa",
    "score": 71.084,
    "address": "Kazimierza Wóycickiego 1/budynek 13, 01-938 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://www.pspo.edu.pl/",
    "driving_time": "17 min",
    "transit_time": "56 min",
    "walking_time": "2 godz. 41 min",
    "distance": "11,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.3106859,
      "lng": 20.9177478
    }
  },
  {
    "rank": 64,
    "name": "Szkoła Podstawowa nr 319 im. Marii Kann Warszawa",
    "score": 71.03,
    "address": "Związku Walki Młodych 10, 02-786 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://sp319.ursynow.warszawa.pl/",
    "driving_time": "24 min",
    "transit_time": "41 min",
    "walking_time": "2 godz. 38 min",
    "distance": "11,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.15808740000001,
      "lng": 21.0389765
    }
  },
  {
    "rank": 65,
    "name": "Szkoła Podstawowa nr 380 im. Jana Pawła II Warszawa",
    "score": 70.983,
    "address": "Krasiczyńska 4/6, 03-379 Warszawa, Polska",
    "district": "Targówek",
    "website": "https://sp380targowek.eduwarszawa.pl/",
    "driving_time": "19 min",
    "transit_time": "41 min",
    "walking_time": "2 godz. 26 min",
    "distance": "10,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.29444669999999,
      "lng": 21.0464629
    }
  },
  {
    "rank": 66,
    "name": "Szkoła Podstawowa nr 29 im. Giuseppe Garibaldiego Warszawa",
    "score": 70.833,
    "address": "Fabryczna 19, 00-446 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://www.sp29w-wa.wikom.pl/",
    "driving_time": "15 min",
    "transit_time": "33 min",
    "walking_time": "1 godz. 17 min",
    "distance": "5,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2242626,
      "lng": 21.0380938
    }
  },
  {
    "rank": 67,
    "name": "Szkoła Podstawowa im. Jeana Monneta Warszawa",
    "score": 70.794,
    "address": "Stępińska 13, 00-739 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://www.maturamiedzynarodowa.pl/",
    "driving_time": "19 min",
    "transit_time": "39 min",
    "walking_time": "1 godz. 35 min",
    "distance": "6,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2039082,
      "lng": 21.0375166
    }
  },
  {
    "rank": 68,
    "name": "Niepubliczna Szkoła Podstawowa z Oddziałami Dwujęzycznymi H2H Warszawa",
    "score": 70.736,
    "address": "Strzykulska 6, 05-850 Ożarów Mazowiecki, Polska",
    "district": "Ożarów Mazowiecki",
    "website": "http://www.h2h.edu.pl/",
    "driving_time": "20 min",
    "transit_time": "48 min",
    "walking_time": "2 godz. 41 min",
    "distance": "11,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2119563,
      "lng": 20.8112152
    }
  },
  {
    "rank": 69,
    "name": "Multischool International School Szkoła Podstawowa Warszawa",
    "score": 70.707,
    "address": "Niedźwiedzia 46, 02-666 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://www.multischool.pl/",
    "driving_time": "21 min",
    "transit_time": "38 min",
    "walking_time": "1 godz. 57 min",
    "distance": "8,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.17723909999999,
      "lng": 21.0200873
    }
  },
  {
    "rank": 70,
    "name": "Żagle Szkoła Podstawowa Stowarzyszenia Sternik Warszawa",
    "score": 70.703,
    "address": "Mieczysława Pożaryskiego 28, 04-703 Warszawa, Polska",
    "district": "Wawer",
    "website": "http://spzagle.sternik.edu.pl/",
    "driving_time": "30 min",
    "transit_time": "57 min",
    "walking_time": "3 godz. 45 min",
    "distance": "16,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2070102,
      "lng": 21.1768802
    }
  },
  {
    "rank": 71,
    "name": "Dwujęzyczna Prywatna Szkoła Podstawowa nr 63 Wisławy Szymborskiej Warszawa",
    "score": 70.68,
    "address": "Wał Miedzeszyński 141, 04-987 Warszawa, Polska",
    "district": "Wawer",
    "website": "https://www.szkola63.waw.pl/",
    "driving_time": "28 min",
    "transit_time": "1 godz. 3 min",
    "walking_time": "4 godz. 10 min",
    "distance": "18,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1612508,
      "lng": 21.1656609
    }
  },
  {
    "rank": 72,
    "name": "Szkoła Podstawowa Towarzystwa Edukacyjnego Vizja im. K. Szpotańskiego Warszawa",
    "score": 70.624,
    "address": "Patriotów 148, 04-839 Warszawa, Polska",
    "district": "Wawer",
    "website": "http://www.wawer.tevizja.pl/",
    "driving_time": "30 min",
    "transit_time": "58 min",
    "walking_time": "4 godz. 18 min",
    "distance": "18,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1817456,
      "lng": 21.1922737
    }
  },
  {
    "rank": 73,
    "name": "Międzynarodowa Szkoła Podstawowa TE Vizja - Okopowa Warszawa",
    "score": 70.591,
    "address": "Okopowa 59, 01-043 Warszawa, Polska",
    "district": "Wola",
    "website": "https://szkolasrednia.tevizja.pl/",
    "driving_time": "10 min",
    "transit_time": "19 min",
    "walking_time": "38 min",
    "distance": "2,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2503997,
      "lng": 20.978541
    }
  },
  {
    "rank": 74,
    "name": "Szkoła Podstawowa nr 400 Warszawa",
    "score": 70.585,
    "address": "Oś Królewska 25, 02-972 Warszawa, Polska",
    "district": "Wilanów",
    "website": "https://sp400warszawa.edupage.org/",
    "driving_time": "29 min",
    "transit_time": "53 min",
    "walking_time": "2 godz. 41 min",
    "distance": "11,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1645006,
      "lng": 21.0668776
    }
  },
  {
    "rank": 75,
    "name": "Szkoła Baletowa im. Romana Turczynowicza Warszawa",
    "score": 70.56,
    "address": "Moliera 4/6, 00-076 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://baletowa.pl/",
    "driving_time": "13 min",
    "transit_time": "19 min",
    "walking_time": "50 min",
    "distance": "3,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2439664,
      "lng": 21.0118408
    }
  },
  {
    "rank": 76,
    "name": "Szkoła Podstawowa nr 225 im. Józefa Gardeckiego Warszawa",
    "score": 70.543,
    "address": "Jana Brożka 15, 01-451 Warszawa, Polska",
    "district": "Wola",
    "website": "https://sp225warszawa.pl/",
    "driving_time": "9 min",
    "transit_time": "25 min",
    "walking_time": "41 min",
    "distance": "3,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2421363,
      "lng": 20.939911
    }
  },
  {
    "rank": 77,
    "name": "Szkoła Podstawowa nr 218 im. Michała Kajki Warszawa",
    "score": 70.493,
    "address": "Michała Kajki 80/82, 04-621 Warszawa, Polska",
    "district": "Wawer",
    "website": "http://www.sp218.pl/",
    "driving_time": "24 min",
    "transit_time": "53 min",
    "walking_time": "3 godz. 27 min",
    "distance": "15,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.22112300000001,
      "lng": 21.163766
    }
  },
  {
    "rank": 78,
    "name": "Szkoła Podstawowa z Oddziałami Integracyjnymi i Oddziałami Dwujęzycznymi nr 211 im. Janusza Korczaka Warszawa",
    "score": 70.248,
    "address": "Nowy Świat 21A, 00-029 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "https://www.sp211.edu.pl/",
    "driving_time": "13 min",
    "transit_time": "21 min",
    "walking_time": "54 min",
    "distance": "3,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2322261,
      "lng": 21.0185575
    }
  },
  {
    "rank": 79,
    "name": "Szkoła Podstawowa nr 143 im. Stefana Starzyńskiego Warszawa",
    "score": 70.105,
    "address": "Aleja Stanów Zjednoczonych 27, 03-947 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "http://www.sp143.waw.pl/",
    "driving_time": "14 min",
    "transit_time": "35 min",
    "walking_time": "1 godz. 53 min",
    "distance": "8,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.22931939999999,
      "lng": 21.063254
    }
  },
  {
    "rank": 80,
    "name": "Szkoła Podstawowa nr 399 Warszawa",
    "score": 70.042,
    "address": "Stefana Kopcińskiego 7, 02-776 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://sp343.ursynow.warszawa.pl/",
    "driving_time": "26 min",
    "transit_time": "53 min",
    "walking_time": "2 godz. 44 min",
    "distance": "11,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.156925,
      "lng": 21.0540852
    }
  },
  {
    "rank": 81,
    "name": "Szkoła Podstawowa nr 367 im. Polskich Noblistów Warszawa",
    "score": 70.025,
    "address": "Przytulna 3, 03-083 Warszawa, Polska",
    "district": "Białołęka",
    "website": "https://sp367.waw.pl/",
    "driving_time": "26 min",
    "transit_time": "53 min",
    "walking_time": "4 godz. 3 min",
    "distance": "17,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.3569165,
      "lng": 20.9825926
    }
  },
  {
    "rank": 82,
    "name": "Szkoła Podstawowa Europejska Szkoła Przyszłości Warszawa",
    "score": 69.888,
    "address": "Ul. Białołęcka 186D, 03-253 Warszawa, Polska",
    "district": "Białołęka",
    "website": "http://esp.edu.pl/",
    "driving_time": "17 min",
    "transit_time": "47 min",
    "walking_time": "2 godz. 50 min",
    "distance": "12,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.3110534,
      "lng": 21.0305119
    }
  },
  {
    "rank": 83,
    "name": "Szkoła Podstawowa nr 204 im. 19 Pułku Ułanów Warszawa",
    "score": 69.8,
    "address": "Bajkowa 17/21, 04-855 Warszawa, Polska",
    "district": "Wawer",
    "website": "https://bajkowa.edu.pl/",
    "driving_time": "30 min",
    "transit_time": "57 min",
    "walking_time": "4 godz. 6 min",
    "distance": "17,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1879407,
      "lng": 21.1765771
    }
  },
  {
    "rank": 84,
    "name": "Szkoła Muzyczna I Stopnia im. Emila Młynarskiego Warszawa",
    "score": 69.773,
    "address": "Globusowa 24, 02-436 Warszawa, Polska",
    "district": "Włochy",
    "website": "http://www.wieniawski.edu.pl/",
    "driving_time": "12 min",
    "transit_time": "30 min",
    "walking_time": "1 godz. 16 min",
    "distance": "5,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2088493,
      "lng": 20.9146149
    }
  },
  {
    "rank": 85,
    "name": "Szkoła Podstawowa nr 293 im. Jana Kochanowskiego Warszawa",
    "score": 69.742,
    "address": "Jana Kochanowskiego 8, 01-864 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://sp293.edupage.org/",
    "driving_time": "12 min",
    "transit_time": "32 min",
    "walking_time": "1 godz. 12 min",
    "distance": "5,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2671486,
      "lng": 20.9539384
    }
  },
  {
    "rank": 86,
    "name": "Żeńska Szkoła Podstawowa z Oddziałami Dwujęzycznymi im. Cecylii Plater Zyberkówny Warszawa",
    "score": 69.73,
    "address": "Piękna 24/26, 00-549 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://www.platerki.pl/",
    "driving_time": "11 min",
    "transit_time": "30 min",
    "walking_time": "56 min",
    "distance": "4,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.223811,
      "lng": 21.018023
    }
  },
  {
    "rank": 87,
    "name": "Szkoła Podstawowa nr 323 im. Polskich Olimpijczyków Warszawa",
    "score": 69.536,
    "address": "Ludwika Hirszfelda 11, 02-776 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://sp323.ursynow.warszawa.pl/",
    "driving_time": "24 min",
    "transit_time": "49 min",
    "walking_time": "3 godz. 0 min",
    "distance": "13,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1437321,
      "lng": 21.0405955
    }
  },
  {
    "rank": 88,
    "name": "Szkoła Podstawowa Montessori im. św. Urszuli Ledóchowskiej Warszawa",
    "score": 69.258,
    "address": "Czerniakowska 128, 00-454 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://spmontessori.pl/",
    "driving_time": "14 min",
    "transit_time": "33 min",
    "walking_time": "1 godz. 31 min",
    "distance": "6,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2179661,
      "lng": 21.0462135
    }
  },
  {
    "rank": 89,
    "name": "Szkoła Podstawowa nr 261 im. Stanisława Kostki Potockiego Warszawa",
    "score": 69.227,
    "address": "Wiertnicza 26, 02-952 Warszawa, Polska",
    "district": "Wilanów",
    "website": "http://www.kostka-potocki.edu.pl/",
    "driving_time": "24 min",
    "transit_time": "52 min",
    "walking_time": "2 godz. 47 min",
    "distance": "11,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1689486,
      "lng": 21.085103
    }
  },
  {
    "rank": 90,
    "name": "Szkoła Podstawowa nr 104 im. Macieja Rataja Warszawa",
    "score": 69.166,
    "address": "Przyczółkowa 27, 02-968 Warszawa, Polska",
    "district": "Wilanów",
    "website": "https://zsp3.edupage.org/",
    "driving_time": "28 min",
    "transit_time": "1 godz. 2 min",
    "walking_time": "4 godz. 1 min",
    "distance": "17,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.12063430000001,
      "lng": 21.1018984
    }
  },
  {
    "rank": 91,
    "name": "Męska Szkoła Podstawowa im. Cecylii Plater Zyberkówny Warszawa",
    "score": 69.157,
    "address": "Piękna 24/26, 00-549 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://www.platerki.pl/",
    "driving_time": "11 min",
    "transit_time": "30 min",
    "walking_time": "56 min",
    "distance": "4,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.223811,
      "lng": 21.018023
    }
  },
  {
    "rank": 92,
    "name": "Szkoła Podstawowa nr 65 im. Władysława Orkana Warszawa",
    "score": 69.12,
    "address": "Mścisławska 1, 01-647 Warszawa, Polska",
    "district": "Żoliborz",
    "website": "http://www.sp65.waw.pl",
    "driving_time": "17 min",
    "transit_time": "34 min",
    "walking_time": "1 godz. 24 min",
    "distance": "6,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2755223,
      "lng": 20.9845365
    }
  },
  {
    "rank": 93,
    "name": "Szkoła Podstawowa nr 369 im. prof. Antoniego Bolesława Dobrowolskiego Warszawa",
    "score": 69.107,
    "address": "Stanisława Przybyszewskiego 45, 01-849 Warszawa, Polska",
    "district": "Bielany",
    "website": "https://sp369.edupage.org/",
    "driving_time": "14 min",
    "transit_time": "38 min",
    "walking_time": "1 godz. 36 min",
    "distance": "7,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2764971,
      "lng": 20.9407963
    }
  },
  {
    "rank": 94,
    "name": "Szkoła Podstawowa nr 107 im. Bronisława Malinowskiego Warszawa",
    "score": 69.051,
    "address": "Nowoursynowska 210/212, 02-766 Warszawa, Polska",
    "district": "Mokotów",
    "website": "https://sp107.edupage.org/",
    "driving_time": "23 min",
    "transit_time": "39 min",
    "walking_time": "2 godz. 14 min",
    "distance": "9,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1734936,
      "lng": 21.0391474
    }
  },
  {
    "rank": 95,
    "name": "Szkoła Podstawowa nr 100 im. płk. Francesco Nullo Warszawa",
    "score": 69.026,
    "address": "Taneczna 54/58, 02-829 Warszawa, Polska",
    "district": "Ursynów",
    "website": "https://sp100.ursynow.warszawa.pl/",
    "driving_time": "21 min",
    "transit_time": "47 min",
    "walking_time": "2 godz. 51 min",
    "distance": "12,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1465824,
      "lng": 21.0155843
    }
  },
  {
    "rank": 96,
    "name": "Szkoła Podstawowa nr 115 im. Wandy Turowskiej Warszawa",
    "score": 68.958,
    "address": "Okrężna 80, 02-933 Warszawa, Polska",
    "district": "Mokotów",
    "website": "",
    "driving_time": "22 min",
    "transit_time": "50 min",
    "walking_time": "2 godz. 18 min",
    "distance": "9,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1834685,
      "lng": 21.0646145
    }
  },
  {
    "rank": 97,
    "name": "Szkoła Podstawowa nr 105 im. Astrid Lindgren Warszawa",
    "score": 68.88,
    "address": "Żwanowiecka 46/50, 04-849 Warszawa, Polska",
    "district": "Wawer",
    "website": "http://szkolamiedzeszyn.waw.pl/",
    "driving_time": "30 min",
    "transit_time": "57 min",
    "walking_time": "4 godz. 36 min",
    "distance": "19,9 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1741307,
      "lng": 21.2051364
    }
  },
  {
    "rank": 98,
    "name": "Szkoła Podstawowa nr 279 im. Batalionów Armii Krajowej Warszawa",
    "score": 68.858,
    "address": "Cyrklowa 1, 04-044 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "https://sp279.edupage.org/",
    "driving_time": "20 min",
    "transit_time": "46 min",
    "walking_time": "2 godz. 1 min",
    "distance": "8,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2313739,
      "lng": 21.0795874
    }
  },
  {
    "rank": 99,
    "name": "Szkoła Podstawowa nr 128 im. Marii Skłodowskiej-Curie Warszawa",
    "score": 68.838,
    "address": "Kadetów 15, 03-987 Warszawa, Polska",
    "district": "Wawer",
    "website": "https://zsp9.eduwarszawa.pl/",
    "driving_time": "20 min",
    "transit_time": "49 min",
    "walking_time": "2 godz. 37 min",
    "distance": "11,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.21321870000001,
      "lng": 21.1100462
    }
  },
  {
    "rank": 100,
    "name": "Szkoła Podstawowa nr 16 im. Tony Halika Warszawa",
    "score": 68.69,
    "address": "Wilczy Dół 4, 02-798 Warszawa, Polska",
    "district": "Ursynów",
    "website": "http://sp16.ursynow.warszawa.pl/",
    "driving_time": "27 min",
    "transit_time": "52 min",
    "walking_time": "3 godz. 29 min",
    "distance": "15,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1287902,
      "lng": 21.0581456
    }
  },
  {
    "rank": 101,
    "name": "Szkoła Podstawowa nr 190 im. Orła Białego Warszawa",
    "score": 68.58,
    "address": "Zwierzyniecka 10, 00-719 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://www.sp190.waw.pl/",
    "driving_time": "17 min",
    "transit_time": "39 min",
    "walking_time": "1 godz. 42 min",
    "distance": "7,2 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2095935,
      "lng": 21.0504382
    }
  },
  {
    "rank": 102,
    "name": "Szkoła Podstawowa nr 52 im. Macieja Aleksego Dawidowskiego \"ALKA\" Warszawa",
    "score": 68.557,
    "address": "Samarytanka 11a, 03-592 Warszawa, Polska",
    "district": "Targówek",
    "website": "https://sp52targowek.eduwarszawa.pl/",
    "driving_time": "22 min",
    "transit_time": "42 min",
    "walking_time": "2 godz. 12 min",
    "distance": "9,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.28040619999999,
      "lng": 21.0575111
    }
  },
  {
    "rank": 103,
    "name": "Szkoła Podstawowa z Oddziałami Integracyjnymi nr 280 im. Tytusa Chałubińskiego Warszawa",
    "score": 68.531,
    "address": "Gorlicka 3, 02-130 Warszawa, Polska",
    "district": "Ochota",
    "website": "http://szkola280.pl/",
    "driving_time": "17 min",
    "transit_time": "36 min",
    "walking_time": "1 godz. 17 min",
    "distance": "5,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1952413,
      "lng": 20.9786341
    }
  },
  {
    "rank": 104,
    "name": "Szkoła Podstawowa International Trilingual School Of Warsaw Warszawa",
    "score": 68.449,
    "address": "Królowej Aldony 23/lok 25, 03-928 Warszawa, Polska",
    "district": "Praga-Południe",
    "website": "https://itsw.edu.pl/?utm_source=google&utm_medium=gmf-warszawa-aldony&utm_id=seo",
    "driving_time": "17 min",
    "transit_time": "34 min",
    "walking_time": "1 godz. 35 min",
    "distance": "6,7 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.23437759999999,
      "lng": 21.0552904
    }
  },
  {
    "rank": 105,
    "name": "Szkoła Podstawowa Chocimska Warszawa",
    "score": 68.429,
    "address": "Chocimska 5, 00-791 Warszawa, Polska",
    "district": "Mokotów",
    "website": "https://www.spchocimska.edu.pl/",
    "driving_time": "16 min",
    "transit_time": "35 min",
    "walking_time": "1 godz. 17 min",
    "distance": "5,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2080224,
      "lng": 21.0236698
    }
  },
  {
    "rank": 106,
    "name": "Szkoła Podstawowa nr 368 im. Polskich Olimpijczyków Warszawa",
    "score": 68.384,
    "address": "Mariana Hemara 16, 03-289 Warszawa, Polska",
    "district": "Białołęka",
    "website": "https://sp368.edu.pl/",
    "driving_time": "21 min",
    "transit_time": "59 min",
    "walking_time": "3 godz. 19 min",
    "distance": "14,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.326626,
      "lng": 21.038343
    }
  },
  {
    "rank": 107,
    "name": "Szkoła Muzyczna I Stopnia Warszawa",
    "score": 68.356,
    "address": "Namysłowska 4, 03-454 Warszawa, Polska",
    "district": "Praga-Północ",
    "website": "https://www.gov.pl/web/psm2warszawa",
    "driving_time": "18 min",
    "transit_time": "36 min",
    "walking_time": "1 godz. 31 min",
    "distance": "6,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2627256,
      "lng": 21.0356694
    }
  },
  {
    "rank": 108,
    "name": "Szkoła Podstawowa nr 357 Warszawa",
    "score": 68.261,
    "address": "Zachodzącego Słońca 25, 01-495 Warszawa, Polska",
    "district": "Bemowo",
    "website": "http://sp357.edupage.org/",
    "driving_time": "15 min",
    "transit_time": "33 min",
    "walking_time": "1 godz. 21 min",
    "distance": "5,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2598068,
      "lng": 20.9164877
    }
  },
  {
    "rank": 109,
    "name": "Podstawowa Szkoła Montessori Warszawa",
    "score": 68.043,
    "address": "Czerniakowska 128, 00-454 Warszawa, Polska",
    "district": "Śródmieście",
    "website": "http://elementaryschool.wmf.edu.pl/",
    "driving_time": "14 min",
    "transit_time": "33 min",
    "walking_time": "1 godz. 31 min",
    "distance": "6,4 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2179661,
      "lng": 21.0462135
    }
  },
  {
    "rank": 110,
    "name": "Chrześcijańska Szkoła Podstawowa Samuel Warszawa",
    "score": 67.981,
    "address": "Mieczysława Pożaryskiego 28/Bud.29, 04-703 Warszawa, Polska",
    "district": "Wawer",
    "website": "https://szkola.samuel.pl/",
    "driving_time": "27 min",
    "transit_time": "55 min",
    "walking_time": "3 godz. 42 min",
    "distance": "16,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2071597,
      "lng": 21.1739153
    }
  },
  {
    "rank": 111,
    "name": "Szkoła Podstawowa z Oddziałami Integracyjnymi nr 82 im. Jana Pawła II Warszawa",
    "score": 67.976,
    "address": "Stanisława Konarskiego 20, 01-464 Warszawa, Polska",
    "district": "Bemowo",
    "website": "https://sp82.edupage.org/",
    "driving_time": "11 min",
    "transit_time": "24 min",
    "walking_time": "59 min",
    "distance": "4,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2406381,
      "lng": 20.9183593
    }
  },
  {
    "rank": 112,
    "name": "Szkoła Podstawowa nr 86 Stowarzyszenia Kultury i Edukacji Warszawa",
    "score": 67.971,
    "address": "Kolektorska 9/11, 01-692 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://www.skie.pl/szkola-podstawowa-nr-86-skie/strona-glowna",
    "driving_time": "14 min",
    "transit_time": "37 min",
    "walking_time": "1 godz. 22 min",
    "distance": "5,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.27541369999999,
      "lng": 20.9686844
    }
  },
  {
    "rank": 113,
    "name": "Szkoła Podstawowa nr 4 im. Władysława Broniewskiego Warszawa",
    "score": 67.693,
    "address": "Walerego Sławka 9, 02-495 Warszawa, Polska",
    "district": "Ursus",
    "website": "https://sp4.warszawa.pl/",
    "driving_time": "18 min",
    "transit_time": "40 min",
    "walking_time": "1 godz. 50 min",
    "distance": "8,0 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1926693,
      "lng": 20.8956374
    }
  },
  {
    "rank": 114,
    "name": "Szkoła Podstawowa nr 205 im. Żołnierzy Powstania Warszawskiego Warszawa",
    "score": 67.609,
    "address": "Spartańska 4, 02-637 Warszawa, Polska",
    "district": "Mokotów",
    "website": "https://sp205waw.edupage.org/",
    "driving_time": "17 min",
    "transit_time": "44 min",
    "walking_time": "1 godz. 28 min",
    "distance": "6,3 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1917871,
      "lng": 20.9962874
    }
  },
  {
    "rank": 115,
    "name": "Szkoła Podstawowa nr 336 im. Janka Bytnara Rudego Warszawa",
    "score": 67.386,
    "address": "Jana Bytnara „Rudego” 19, 02-645 Warszawa, Polska",
    "district": "Mokotów",
    "website": "https://sp202.edupage.org/",
    "driving_time": "17 min",
    "transit_time": "42 min",
    "walking_time": "1 godz. 24 min",
    "distance": "6,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1921424,
      "lng": 21.0063071
    }
  },
  {
    "rank": 116,
    "name": "Szkoła Podstawowa z Oddziałami Integracyjnymi nr 223 im. Partyzantów Ziemi Kieleckiej Warszawa",
    "score": 67.292,
    "address": "Jana Kasprowicza 107, 01-823 Warszawa, Polska",
    "district": "Bielany",
    "website": "http://sp223.edupage.org/",
    "driving_time": "15 min",
    "transit_time": "38 min",
    "walking_time": "1 godz. 48 min",
    "distance": "7,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2844572,
      "lng": 20.9423254
    }
  },
  {
    "rank": 117,
    "name": "Publiczna Szkoła Podstawowa STO im. Rotmistrza Witolda Pileckiego Warszawa",
    "score": 67.25,
    "address": "Aleja Sztandarów 2, 04-423 Warszawa, Polska",
    "district": "Rembertów",
    "website": "http://www.superszkola.pl/",
    "driving_time": "28 min",
    "transit_time": "53 min",
    "walking_time": "3 godz. 36 min",
    "distance": "15,6 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2657837,
      "lng": 21.1702923
    }
  },
  {
    "rank": 118,
    "name": "Szkoła Podstawowa nr 69 Warszawa",
    "score": 67.184,
    "address": "Wiktorska 73, 02-582 Warszawa, Polska",
    "district": "Mokotów",
    "website": "http://sp69waw.edupage.org/",
    "driving_time": "18 min",
    "transit_time": "30 min",
    "walking_time": "1 godz. 20 min",
    "distance": "5,8 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.1983612,
      "lng": 21.0096602
    }
  },
  {
    "rank": 119,
    "name": "Szkoła Podstawowa nr 396 Warszawa",
    "score": 67.18,
    "address": "Anny German 5a, 01-794 Warszawa, Polska",
    "district": "Żoliborz",
    "website": "https://sp396.edu.pl/",
    "driving_time": "16 min",
    "transit_time": "29 min",
    "walking_time": "1 godz. 2 min",
    "distance": "4,5 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.2614196,
      "lng": 20.9719407
    }
  },
  {
    "rank": 120,
    "name": "Korczakowska Szkoła Marzeń - Niepubliczna Szkoła Podstawowa Warszawa",
    "score": 67.161,
    "address": "Urbanistów 3, 02-397 Warszawa, Polska",
    "district": "Ochota",
    "website": "http://warszawa.sp.wspkorczak.eu/",
    "driving_time": "13 min",
    "transit_time": "34 min",
    "walking_time": "58 min",
    "distance": "4,1 km",
    "has_zerowka": false,
    "coordinates": {
      "lat": 52.20600409999999,
      "lng": 20.9657494
    }
  }
];