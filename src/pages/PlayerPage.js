import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../Components/Player'

import img1 from '../images/players/Marc_Andre_Ter_Stegen.jpg'
import img2 from '../images/players/Neto.jpg'
import img3 from '../images/players/Inaki_Pena.jpg'
import img4 from '../images/players/Gerard_Pique.jpg'
import img5 from '../images/players/Clement_Lenglet.jpg'
import img6 from '../images/players/Samuel_Umtiti.jpeg'
import img7 from '../images/players/Jean_Clair_Todibo.jpg'
import img8 from '../images/players/Ronald_Araujo.jpg'
import img9 from '../images/players/Jordi_Alba.jpg'
import img10 from '../images/players/Junior_Firpo.jpg'
import img11 from '../images/players/Juan_Miranda.jpg'
import img12 from '../images/players/Sergi_Roberto.jpg'
import img13 from '../images/players/Moussa_Wague.jpg'
import img14 from '../images/players/Miralem_Pjanic.jpg'
import img15 from '../images/players/Sergio_Busquets.jpeg'
import img16 from '../images/players/Frenkie_De_Jong.jpg'
import img17 from '../images/players/Riqui_Puig.jpg'
import img18 from '../images/players/Carles_Alena.jpg'
import img19 from '../images/players/Coutinho.jpg'
import img20 from '../images/players/Rafinha.jpg'
import img21 from '../images/players/Ansu_Fati.jpg'
import img22 from '../images/players/Pedri.jpg'
import img23 from '../images/players/Lionel_Messi.jpg'
import img24 from '../images/players/Ousmanne_Dembele.jpg'
import img25 from '../images/players/Francisco_Trincao.jpeg'
import img26 from '../images/players/Antoine_Griezmann.jpg'
import img27 from '../images/players/Martin_Braithwaite.jpg'


const PlayerPage = (props) => {

  const list = [{ id: 0,
    number: 1,
    name: "Marc-Andre Ter Stegen",
    position: "goalkeeper",
    description: "Marc-André ter Stegen urodził się 30 kwietnia 1992 roku w niemieckim Mönchengladbach. Już od najmłodszych lat był wielką nadzieją niemieckiego futbolu, jeśli chodzi o pozycję bramkarza. Przed podpisaniem kontraktu z FC Barceloną 22 maja 2014 roku, przez 18 lat występował w Borussii Mönchengladbach. Trafił do drużyn młodzieżowych tego klubu w wieku zaledwie 4 lat, a jak tylko osiągnął pełnoletniość, zadebiutował w pierwszym zespole. Było to dokładnie 10 kwietnia 2011 roku w meczu 29. kolejki Bundesligi z FC Köln, który Borussia Mönchengladbach wygrała 5:1. W pierwszych sześciu spotkaniach w lidze niemieckiej ter Stegen puścił zaledwie trzy gole i stopniowo umacniał swoją pozycję w bramce niemieckiej drużyny. Bardzo szybko na ter Stegena spadła duża odpowiedzialność, gdyż jego siódmy i ósmy mecz w barwach dorosłego zespołu Borussii przypadły na baraże o utrzymanie w najwyższej klasie rozgrywkowej w Niemczech. Zawodnik świetnie poradził sobie w tych spotkaniach i był jednym z architektów sukcesu - wygranej w dwumeczu z Bochum 2:1. Marc-André ter Stegen na stałe zagościł w bramce Borussii Mönchengladbach na kolejne trzy sezony. W pierwszym z nich został wybrany najlepszym bramkarzem Bundesligi. W lidze niemieckiej rozegrał w sumie 108 meczów. W Barcelonie już od samego początku święcił triumfy z zespołem, będąc podstawowym bramkarzem w rozgrywkach Ligi Mistrzów oraz Pucharu Króla. Ter Stegen jest drugim niemieckim bramkarzem w historii FC Barcelony po Robercie Enke.",
    image: img1
  },
  { id: 1,
    number: 13,
    name: "Neto",
    position: "goalkeeper",
    description: "29-letni Neto, urodzony w miejscowości Araxa, wyróżnia się zwinnością i szybkością ruchów. Od dziecka grał na pozycji bramkarza. W latach 2002-2011 był zawodnikiem Paranaense, z którego przeniósł się do Fiorentiny, gdzie spędził cztery sezony. Szczególnie udane były dla niego dwa ostatnie, kiedy był ważną postacią swojego zespołu. W 2015 roku trafił do Juventusu i przez dwa sezony był zmiennikiem Gianluigiego Buffona. Charakter i chęć rozwoju sprawiła, że w 2017 roku podpisał kontrakt z Valencią i zanim tafił do Barcelony odgrywał rolę podstawowego bramkarza.",
    image: img2
  },
  { id: 2,
    number: 26,
    name: "Inaki Pena",
    position: "goalkeeper",
    description: "Urodzony w Alicante w Walencji, Inaki Pena rozpoczął karierę w młodzieżowym zespole Alicante CF w 2004 roku, mając zaledwie pięć lat. W 2012 roku, w wieku 13 lat, dołączył do szkółki FC Barcelony. Był w drużynie, która wygrała Ligę Młodzieżową UEFA 2017-18, będąc podstawowym bramkarzem w finale przeciwko Chelsea. W dniu 16 kwietnia 2018 roku Pena odnowił kontrakt z Barçą na trzy sezony, z opcją na kolejne dwa. Później awansował do rezerw w Segunda División B przed sezonem 2018–19 i zadebiutował w seniorskiej drużynie 6 października 2018r., w zremisowanym 1:1 meczu u siebie przeciwko CD Atlético Baleares. 30 października 2018 Pena został powołany do pierwszego składu na mecz Pucharu Króla przeciwko Cultural Leonesa jako rezerwowy dla Jaspera Cillessena. Pojawiał się również na ławce w niektórych przypadkach w sezonie, gdy Cillessen i Marc-André ter Stegen byli kontuzjowani.",
    image: img3
  },
  { id: 3,
    number: 3,
    name: "Gerard Pique",
    position: "defender",
    description: "Gerard Piqué w wieku dziesięciu lat dołączył do zespołu najmłodszych piłkarzy w klubie (Alevin B). Następnie zagrał we wszystkich drużynach młodzieżowych (Alevin, Infantil B, Cadete B i Juvenil B). Piqué występował głównie na pozycji obrońcy, a jednak nie przeszkadzało mu to w zdobywaniu dużej ilości bramek. W końcówce sezonu 2003/2004, Piqué opuścił Barcelonę i zdecydował się na transfer do Manchesteru United. Debiut w lidze angielskiej zaliczył 26 października w meczu z Crewe Alexandra. W zespole „Czerwonych Diabłów” był zastępcą Gary’ego Nevilla. W 2006 roku został wypożyczony do Realu Saragossa. Do Anglii powrócił w sezonie 2006/2007. W barwach drużyny z Aragonii występował na pozycji defensywnego pomocnika. Katalończyk rozegrał 22 spotkania, 18 razy wychodził na boisko w podstawowej jedenastce. W sezonie 2007/2008 wrócił do MU i świętował zdobycie podwójnej korony. Podczas ostatniego sezonu spędzonego w Manchesterze piłkarz zdobył dwie bramki. Latem 2008 roku, Gerard Piqué powrócił do FC Barcelony. Tutaj odrodził się już w swoim pierwszym sezonie w barwach Blaugrana, pod wodzą Pepa Guardioli, który dał mu miejsce w pierwszej jedenastce. Stał się filarem defensywy Dumy Katalonii, tworząc wraz z Carlesem Puyolem mur nie do przejścia. W kolejnych sezonach tylko potwierdził swoje nieprzeciętne umiejętności.",
    image: img4
  },
  { id: 4,
    number: 15,
    name: "Clement Lenglet",
    position: "defender",
    description: "Urodzony 17 czerwca 1995 roku we francuskim Beauvais Lenglet jest uznawany za jednego z najbardziej perspektywicznych obrońców na świecie. Mierzy 186 centymetrów i był etatowym reprezentantem francuskich młodzieżówek. Do Barcelony trafił po bardzo dobrym sezonie w Sevilli, w której wyróżnił się zwłaszcza świetnymi występami przeciwko Manchesterowi United i Bayernowi Monachium w Lidze Mistrzów. Imponował determinacją, a jednocześnie elegancją w interwencjach. Lenglet trafił do Barcelony 12 lipca 2018 roku, po tym jak ta wpłaciła klauzulę wykupu Sevilli w wysokości 35,9 mln euro. Piłkarz ten podpisał 5-letni kontrakt, do końca czerwca 2023 roku.",
    image: img5
  },
  { id: 5,
    number: "-",
    name: "Samuel Umtiti",
    position: "defender",
    description: "Samuel Umtiti jest długoletnim wychowankiem Lyonu, gdzie już od najmłodszych lat wyróżniał się umiejętnościami na tle kolegów. To pozwoliło mu zadebiutować w pierwszej drużynie w wieku 19 lat. W ciągu czterech sezonów spędzonych na Parc OL, Samuel wystąpił w ponad 130 spotkaniach, stając się łakomym kąskiem dla potentatów. Z okazji na sprowadzenie Francuza skorzystała Barcelona, która w 2016 roku zapłaciła za niego 25 mln euro.",
    image: img6
  },
  { id: 6,
    number: 30,
    name: "Ronald Araujo",
    position: "defender",
    description: "Urodzony na Riverze, Araujo dołączył do młodzieżówek Rentistas z rodzinnego Huracán de Rivera. Seniorski debiut zaliczył 24 września 2016 roku w wygranym 1:0 meczu przeciwko Tacuarembó rozgrywanym w ramach Segunda División. Araújo strzelił swoją pierwszą seniorską bramkę 9 grudnia 2016 roku w meczu z Central Español. W sezonie 2017 stał się podstawowym graczem drużyny i strzelił hat tricka w wygranym 3:2 meczu z Villa Española 17 czerwca tego samego roku. 28 lipca 2017 roku, Araújo dołączył do występującego w Primera División Boston River. Debiut w lidze zaliczył 18 września, zmieniając Maximiliano Sigalesa w meczu przeciwko El Tanque Sisley. 29 sierpnia 2018 roku został piłkarzem FC Barcelony B. 6 października 2019 roku zadebiutował w pierwszej drużynie FC Barcelony.",
    image: img7
  },
  { id: 7,
    number: "-",
    name: "Jean-Clair Todibo",
    position: "defender",
    description: "Jean-Clair Todibo urodził się 30 grudnia 1999 roku w Kajennie, stolicy Gujany Francuskiej, która znajduje się w Ameryce Południowej. Zawodnik ma francuskie obywatelstwo, wychował się w szkółce FC Les Lilas, a w 2016 roku przeszedł do Toulouse. Zadebiutował w drużynie w tym sezonie, w wieku zaledwie 18 lat, 19 sierpnia w meczu z Girondins Bordeaux. ",
    image: img8
  },
  { id: 8,
    number: 18,
    name: "Jordi Alba",
    position: "defender",
    description: "Jordi Alba i Ramos urodził się w katalońskim L'Hospitalet de Llobregat 21 marca 1989 roku. Po tym jak trafił do Barcelony mając 10 lat, przeszedł następnie przez kilka młodzieżowych zespołów, grając m.in. z takimi piłkarzami jak Bojan Krkic, Fran Mèrida czy Dos Santos. W 2007 roku opuścił Barcelonę i trafił do UE Cornellà, skąd odszedł po roku i podpisał kontrakt z Valencią., która zapłaciła za niego... 6 tysięcy euro. Najpierw grał w młodzieżowym zespole, po czym został włączony do Valencia CF Mestalla - drużyny, która wywalczyła awans do Segona Divisió B. Alba był wówczas kluczową jej postacią, a w międzyczasie zadebiutował w reprezentacji Hiszpanii do lat 19. Sezon 2008/09 spędził na wypożyczeniu w Gimnàstic de Tarragona, rozgrywając 30 meczów w Segunda División, grając także dla kadry U-21 i będąc w składzie reprezentacji U-20 na mistrzostwa świata rozgrywane w Egipcie. Potem wrócił do Valencii, stając się jej podstawowym piłkarzem. W La Liga zadebiutował 13 września 2009 roku przeciwko Realowi Valladolid. Mimo że nominalnie grał na lewej obronie, to pokazywał swoją wszechstronność grając na różnych pozycjach. Zanim trafił do Barcelony, w barwach Valencii zagrał 108 razy - w tym aż 48 w sezonie 2011/12. Jego znakomita postawa, we wrześniu 2011 roku, zaowocowała powołaniem do seniorskiej reprezentacji Hiszpanii. W kadrze Vicente del Bosque zadebiutował 11 października meczem przeciwko Szkocji. Pól roku później był już członkiem drużyny na turniej Euro 2012, gdzie odegrał kluczową rolę, będąc podstawowym zawodnikiem reprezentacji.Jordi Alba kontrakt z Barceloną podpisał 5 lipca 2012 roku, po tym jak FC Barcelona osiągnęła porozumienie z Valencią odnośnie jego transferu. Miał wówczas 23 lata i stał się pierwszym nabytkiem Tito Vilanovy przed sezonem 2012/13. Przez kolejne dwa sezony był podstawowym obrońcą drużyny Barcelony i przyczynił się do zdobycia tytułu mistrzowskiego.",
    image: img9
  },
  { id: 9,
    number: 24,
    name: "Junior Firpo",
    position: "defender",
    description: "W wieku zaledwie 22 lat Junior Firpo jest jednym z najbardziej obiecujących lewych obrońców w Europie. Urodził się w Santo Domingo w Republice Dominikany 22 sierpnia 1996 roku. W wieku sześciu lat przeniósł się do Málagi, gdzie grał w różnych regionalnych klubach takich jak Atlético Benamiel czy Puerto Málagueno. Latem 2014 roku Firpo przeszedł do Realu Betis, gdzie dalej szkolił się w zespołach młodzieżowych. 12 lutego 2018 roku zadebiutował w pierwszym zespole w wygranym 1:0 spotkaniu z Deportivo. Od tamtej pory grywał niemal we wszystkich meczach do końca sezonu. W sezonie 2018/19 Firpo zagrał w 29 starciach (24 w lidze, 4 w Lidze Europy i jednym w Pucharze Króla). Dodatkowo strzelił trzy bramki w meczach z Celtą Vigo, Realem Sociedad i FC Barceloną. Do goli obrońca dołożył pięć asyst. Mimo że urodził się w Republice Dominikany, Firpo gra w reprezentacji Hiszpanii do lat 21. Był jej częścią również podczas wygranych Mistrzostw Europy 2019, na których zagrał w trzech spotkaniach. Wysoki wzrost, szybkość i precyzja podań zawodnika sprawiają, że jest jednym z obrońców, o których najwięcej się mówi. Błyszczał w minionym sezonie LaLigi i jest zmartwieniem dla rywali. Jego elektryczność i niemęczące się nogi sprawiają, że szybko wraca na pozycję w defensywie. Do tego Junior dobrze radzi sobie w grze opartej na posiadaniu piłki i rozumie kluczowe aspekty stylu Barçy. 4 sierpnia 2019 roku FC Barcelona kupiła młodego obrońcę za kwotę 18 + 12 mln euro zmiennych. Hiszpan podpisał 5-letnią umowę, do końca czerwca 2024 roku. Klauzula wykupu wynosi 200 mln euro.",
    image: img10
  },
  { id: 10,
    number: 27,
    name: "Juan Miranda",
    position: "defender",
    description: "Urodzony w Olivares Miranda dołączył do młodzieżówek Barcelony w 2014 roku z Realu Betis. Po dobrych występach w drużynach młodzieżowych udało mu się zaliczyć seniorski debiut z Barceloną B 19 sierpnia 2017 roku w wygranym 2–1 meczu z Realem Valladolid w ramach rozgrywek Segunda División. 7 marca 2018 roku rozegrał pierwszy mecz w barwach pierwszego zespołu Barcelony w meczu z Espanyolem w ramach Superpucharu Katalonii, zmieniając w 76 minucie Lucasa Digne.",
    image: img11
  },
  { id: 11,
    number: 20,
    name: "Sergi Roberto",
    position: "defender",
    description: "Sergi Roberto przybył do Barcelony z Nàstic Tarragona w wieku 13 lat. Po udanych występach w sekcjach młodzieżowych, już w wieku 17 lat awansował do rezerw Barcelony. W sezonie 2010/11 był już kluczowym zawodnikiem w ekipie Luisa Enrique, a w maju 2011 roku zadebiutował w pierwszym zespole w meczu z Málagą. Sergi wielokrotnie był także powoływany do młodzieżowych reprezentacji Hiszpanii. W sezonie 2013/14 awansował na stałe do pierwszego zespołu, ale nie zyskał większego uznania Gerardo Martino. Mimo wszystko pozostał w drużynie na kolejny sezon i pod batutą Luisa Enrique stara się polepszać swoje umiejętności gry.",
    image: img12
  },
  { id: 12,
    number: "-",
    name: "Moussa Wague",
    position: "defender",
    description: "Moussa Wagué urodził się 4 października 1998 roku w Bignonie. Senegalczyk juniorską karierę rozpoczął w elitarnej akademii piłkarskiej Aspire. Wagué jako wyróżniający się piłkarz akademii, został zauważony przez belgijski Eupen, z którym podpisał pierwszy profesjonalny kontrakt w listopadzie 2016 roku. W barwach Eupen rozegrał 43 mecze, a następnie otrzymał reprezentacyjne powołanie na mistrzostwa świata w 2018 roku. Latem 2018 roku Senegalczyk związał się z Barceloną, gdzie pierwszy swój sezon spędził w rezerwach. W tym samym roku zadebiutował w pierwszym zespole, grając przeciwko Huesce na El Alcoraz. W lipcu 2019 roku sięgnął po wicemistrzostwo Afryki z Senegalem. 2 sierpnia 2019 roku Barcelona poinformowała, że od sezonu 2019/20 młody obrońca będzie zawodnikiem pierwszego zespołu.",
    image: img13
  },
  { id: 13,
    number: 8,
    name: "Miralem Pjanić",
    position: "midfielder",
    description: "Pjanić urodził się 2 kwietnia 1990 roku w miejscowości Tuzla. Karierę rozpoczynał w młodzieżowych zespołach z Luksemburga, ale już w 2004 roku przeniósł się do Metzu. Po czterech latach pobytu w tym klubie został wykupiony za 7,5 miliona euro przez Olympique Lyon. W ówczesnym potentacie ligi francuskiej wypłynął na szerokie wody, a w sezonie 2009/2010 udało mu się awansować do półfinału Ligi Mistrzów. W barwach Lyonu Pjanić rozegrał 121 meczów, strzelił 16 goli i zanotował 21 asyst. Po trzech latach Bośniak przeniósł się do Romy, która zdecydowała się za niego zapłacić 11 milionów euro. W zespole Giallorossich przebywał przez pięć lat, a w tym czasie wystąpił w 185 spotkaniach, zdobył 30 goli i zanotował 44 asysty. Już wtedy Pjaniciem była zainteresowana Barcelona, ale ostatecznie w 2016 roku trafił on do Juventusu za 32 miliony. W zespole z Turynu 30-latek wywalczył sobie pewne miejsce w środku pola. Zdobył z Juventusem trzy mistrzostwa Włoch, dwa krajowe puchary i jeden Superpuchar. W drużynie Bianconerich Pjanić najczęściej występował jako defensywny pomocnik, choć może również grać wyżej, a w przeszłości był ustawiany nawet na skrzydłach. Bośniak wyróżnia się nie tylko dobrą techniką, strzałem z dystansu i precyzyjnymi podaniami, ale także pracą w defensywie.Bośniak kosztował Blaugranę 60 + 5 milionów euro zmiennych. Z Dumą Katalonii związał się do końca rozgrywek 2023/2024, a jego klauzula odejścia wynosi 400 milionów euro.",
    image: img14
  },
  { id: 14,
    number: 5,
    name: "Sergio Busquets",
    position: "midfielder",
    description: "Sergio jest synem Carlesa Busquetsa, który w latach 1988-1998 zaliczył 79 występów w pierwszym zespole. Carles był członkiem słynnego „Dream Teamu” prowadzonego przez Johana Cruyffa. Za czasów słynnego Holendra był jednym z najbardziej utytułowanych zawodników w klubie, pomimo faktu, iż niemal od początku kariery był rezerwowym. Młody Busquets do 2005 roku występował w prowincjonalnym zespole Unió de Futbol Base Jàbac i Terrassa. Katalończyk w czasach juniorskich wystawiany był na pozycji środkowego napastnika lub ofensywnego pomocnika. Dopiero Guardiola zrobił z niego defensywnego pomocnika. Po zdanych testach do szkółki FC Barcelona Sergio spędził dwa sezony w zespole Juvenil A. Pod skrzydłami trenera Àlexa Garcíi czynił regularni postępy. Ze swoją drużyną dwukrotnie triumfował w rozgrywkach Copa del Rey oraz División de Honor. W sezonie 2006/2007 występując w pomocy Busquets strzelił 6 goli w 26 występach. Tak dobra postawa spowodowała awans młodego zawodnika do zespołu rezerw w kolejnym sezonie oraz powołanie na mecz pierwszej drużyny w ramach Copa de Catalunya. Swój debiut w pierwszym składzie zaliczył w finale, w którym rywalem Dumy Katalonii był Espanyol Barcelona (1:2). Busquets pojawił się na boisku w drugiej połowie, zmieniając Lluísa Sastre. Wraz z objęciem przez Josépa Guardiolę roli szkoleniowca zespołu rezerw, Busquets powędrował z zespołu juniorskiego do Barça Atlétic. Nie od razu stając się czołową postacią nowo budowanej drużyny. Początki nie były zbyt udane, gdyż do 12 kolejki spotkań ani razu nie wybiegł w podstawowej jedenastce. Wkrótce jednak stał się jednym z kluczowych zawodników teamu Pepa, występując w 23 meczach i zdobywając 2 gole oraz zaliczając kilka asyst. Okres przygotowawczy do sezonu 2008/2009 Sergio Busquets Burgos spędził wraz z pierwszą drużyną prowadzoną w swoim debiutanckim sezonie przez Josépa Guardiolę. Świetna postawa młodego pomocnika zaowocowała pozostaniem na cały sezon wraz z Barçą A. Jeszcze większym zaskoczeniem był widok Sergio w podstawowej jedenastce w meczu pierwszej kolejki z Rancingem Santander. Wystąpił kosztem Yaya Touré, do tej pory uważanego za pewniaka na pozycji defensywnego pomocnika. Młodzian miał duży wkład w zdobycie przez Azulgraną potrójnej kolory (wygranie Ligi Mistrzów, La Liga, Copa del Rey). Łącznie zagrał w ponad trzydziestu spotkaniach ligowych jak i pucharowych. Ukoronowaniem udanego sezonu był występ w podstawowej jedenastce podczas finału Ligi Mistrzów w Rzymie przeciwko Manchester United (2:0). Dobra postawa Sergio zainteresowała kilka klubów min. Arsenal Londyn. FC Barcelona postanowiła zaproponować pełni profesjonalny kontrakt piłkarzowi rodem z Sabadell. 22 grudnia 2008 roku Sergio podpisał kontrakt obowiązujący go do 2013 roku z klauzulą odstępnego w wysokości 80 milionów Euro. Zarobki gracza wzrosły do 1,75 miliona euro za rok gry plus premie za osiągnięcia zespołowe oraz liczbę spotkań w sezonie. Obie strony, czyli klub oraz piłkarz są zadowolone z współpracy na nowych warunkach. W sezonie 2009/10 Sergio był już kluczową postacią drużyny Guardioli. Wygryzł ze składu Yaya Touré, który do tego momentu był ostoją drugiej linii katalońskiego klubu. W przeciągu kolejnych sezonów stał się fundamentalną postacią drugiej linii Barcelony. Żaden trener nie wyobraża sobie wyjściowej jedenastki bez niego. Segio byłW lutym 2009 roku po raz pierwszy został powołany do dorosłej reprezentacji Hiszpanii prowadzonej przez Vicente del Bosque. Swój debiut zaliczył 1 kwietnia w wyjazdowym meczu eliminacji do Mistrzostw Świata 2010 przeciwko Turcji. Od tej pory jest regularnie powoływany na mecze pierwszej kadry. W lipcu wraz z reprezentacją zajął 3 miejsce w Pucharze Konfederacji 2009, turniej został rozegrany w Republice Południowej Afryki.  W 2010 roku zdobył z kadrą Mistrzostwo Świata, a w 2012 roku Mistrzostwo Europy. Był również członkiem reprezentacji na nieudanych Mundialu w Brazylii w 2014 roku oraz Euro 2016 we Francji",
    image: img15
  },
  { id: 15,
    number: 21,
    name: "Frenkie De Jong",
    position: "midfielder",
    description: "Frenkie de Jong rozpoczął karierę piłkarską we wsi, w której się urodził, w amatorskim klubie ASV Arkel. Kiedy miał 8 lat przeniósł się do Willem II. W 2015 roku Holender rozpoczął swoją zawodową karierę. Dzięki niesamowitej technice w tym samym roku podpisał kontrakt z Ajaxem. Trzy lata póżniej zadebiutował w reprezentacji Holandii, a w styczniu 2019 roku Barcelona ogłosiła zakontraktowaniego młodego pomocnika. Do zespołu z Katalonii dołączył 1 lipca 2019 roku za 75 + 11 milionów euro zmiennych. Kontrakt de Jonga obowiązuje do końca sezonu 2023/24.",
    image: img16
  },
  { id: 16,
    number: 28,
    name: "Riqui Puig",
    position: "midfielder",
    description: "Urodzony w Matadeperze, Puig dołączył do młodzieżówek FC Barcelony w 2013 roku z UFB Jàbac Terrassa. Po przejściu przez wszystkie etapy młodzieżowe, Riqui zaliczył swój seniorski debiut 24 lutego 2018 roku, zmieniając Marcusa McGuane'a w zremisowanym 1:1 spotkaniu przeciwko Gimnàsticowi Tarragona. 11 czerwca 2018 roku przedłużył kontrakt z Barceloną do 2021 roku i został definitywnie przeniesiony do rezerw. Klauzula wykupu zapisana w kontrakcie wynosi 100 milionów euro. Puig zadebiutował w pierwszej drużynie Barcelony 28 lipca tego samego roku, w meczu przeciwko Tottenhamowi rozgrywanym w ramach International Champions Cup",
    image: img17
  },
  { id: 17,
    number: "6",
    name: "Carles Alena",
    position: "midfielder",
    description: "Carles Alena jest zawodnikiem Barcelony od kategorii Prebenjamí. Jego wielka jakość zaprowadziła go do drużyny rezerw. 30 listopada 2016 r. zadebiutował pod wodzą Luisa Enrique w pierwszym zespole. Jego debiut przypadł na mecz z Herculésem w Pucharze Króla, zremisowanym 1-1. Pomocnik z Mataró strzelił wówczas jedynego gola. 6 września 2017 r. Hiszpan podpisał nowy kontrakt, który obowiązuje na kolejne 3 lata z możliwością przedłużenia na następne dwa sezony. Sezon 2018/19 będzie pierwszym, w którym Carles Alena na stałe został włączony do pierszej drużyny.",
    image: img18
  },
  { id: 18,
    number: 14,
    name: "Coutinho",
    position: "midfielder",
    description: "Philippe Coutinho urodził się 12 czerwca 1992 roku w Rio de Janeiro. Obecnie jest jednym z najbardziej utalentowanych pomocników na świecie. Brazylijczyk swoje umiejętności zdążył pokazać już chociażby w reprezentacji Brazylii oraz Liverpoolu. Coutinho karierę rozpoczął w Vasco da Gama, skąd przeniósł się do Europy. W 2010 roku, w wieku zaledwie 16 lat związał się z Interem. Wówczas jako 18-latek zadebiutował w Lidze Mistrzów. Po krótkiej przygodzie w Espanyolu trafił do Liverpoolu. W angielskim klubie Brazylijczyk spędził 5 lat. 6 stycznia 2018 roku Barcelona poinformowała o zakupie piłkarza. Coutinho 5,5-letni kontrakt z katalońskim klubem podpisał dwa dni później i został najdroższym piłkarzem kupionym przez Blaugranę. Klauzula wykupu została ustalona na poziomie 400 mln euro.",
    image: img19
  },
  { id: 19,
    number: "-",
    name: "Rafinha",
    position: "midfielder",
    description: "Popularny Rafinha trafił do Barcelony w wieku 13 lat i od tamtej pory przechodził przez kolejne szczeble szkolenia. Sezon 2010/11 był dla młodego ofensywnego pomocnika przełomowy. Zdobył wraz z sekcją Juvenil A potrójną koronę, deklasując wszystkich rywali. Młodszy brat Thiago był przy tym najlepszym strzelcem zespołu, grając jako fałszywa '9'. Dzięki dobrej formie otrzymał także szansę pokazania się w rezerwach Barcelony prowadzonych przez Luisa Enrique. Wystąpił w 10 meczach, spędzając na boisku 504 minuty i zdobywając jedną bramkę. Młody Brazylijczyk aż do 2013 roku zaliczał regularne występy w rezerwach klubu, a w sezonie 2013/14 występował na wypożyczeniu w Celcie Vigo, w której prezentował się bardzo dobrze. To zaowocowało powrotem do macierzystego klubu i szansą na grę w pierwszej drużynie.",
    image: img20
  },
  { id: 20,
    number: 22,
    name: "Ansu Fati",
    position: "froward",
    description: "Fati w 2009 roku trafił do juniorskiego zespołu CDF Herrera. W latach 2010–2012 reprezentował juniorskie barwy klubu Sevilla FC. W 2012 roku został sprowadzony przez FC Barcelonę i zasilił juniorów tego klubu. W grudniu 2015 roku doznał kontuzji – złamał kość piszczelową i strzałkową. W sezonie 2018/2019 rozegrał w Lidze Młodzieżowej UEFA 9 meczów, w których strzelił 4 gole i zaliczył 3 asysty. W 2019 roku ogłoszono, że dołączy do drużyny rezerw. 21 sierpnia 2019 po raz pierwszy uczestniczył w treningu pierwszej drużyny FC Barcelony. 25 sierpnia 2019 roku został powołany przez trenera Ernesto Valverde na ligowe spotkanie z Realem Betis, co było spowodowane kontuzjami podstawowych zawodników. Fati pojawił się na boisku w 78 minucie spotkania, zostając drugim najmłodszym piłkarzem, występującym w pierwszej drużynie w historii FC Barcelony, mając 16 lat i 298 dni. W następnym meczu z Osasuną zdobył bramkę, stając się najmłodszym strzelcem w historii klubu. W kolejnym meczu z Valencią, zdobył kolejną bramkę i zaliczył asystę, stając się najmłodszym piłkarzem La Liga, który zrobił to w jednym meczu.",
    image: img21
  },
  { id: 21,
    number: 16,
    name: "Pedri",
    position: "froward",
    description: "Pedri urodził się 25 listopada 2002 roku w Tegueste, które położone jest na północy Teneryfy. Do Las Palmas dołączył w 2018 roku z CF Juventud Laguna. Był także na testach w Realu Madryt, jednak nie zakończyły się one sukcesem. 15 lipca 2019 roku podpisał profesjonalny kontrakt i rozpoczął presezon z Las Palmas. Po kilku imponujących przedsezonowych występach w wieku szesnastu lat otrzymał awans do pierwszej drużyny. Odpowiedzialny za to był Pepe Mel, który dał Pedriemu zadebiutować w Las Palmas już w pierwszej kolejce ligowej z Huescą, gdzie szesnastolatek wyszedł w podstawowym składzie. Pod koniec letniego okienka transferowego jego transfer zapewniła sobie Barcelona. Aktualnie jest uważany za jednego z najbardziej utalentowanych młodych Hiszpanów.",
    image: img22
  },
  { id: 22,
    number: 10,
    name: "Lionel Messi",
    position: "froward",
    description: "Ten argentyński napastnik rozpoczął piłkarską karierę w 1995r. w Newell's Old Boys, gdzie pozostawał do 2000 roku. W wieku 13 lat Lionel Messi dołączył do FC Barcelony. Od tego momentu w spektakularny sposób przechodził przez grupy młodzieżowe (poniżej 14 lat gr. A, poniżej 16 lat gr. B, poniżej 16 lat gr. A, poniżej 18 lat gr. A, Barça C i Barça B). W trakcie sezonu 2003/04, w wieku 16 lat sen Messiego o debiucie w pierwszym zespole Barcelony ziścił się - wystąpił w podstawowym składzie w towarzyskim spotkaniu z FC Porto z okazji otwarcia nowego stadionu tego zespołu. W sezonie 2004/05 Lionel dołączył do pierwszego składu Barçy podczas tournée po Azji. Pierwszy raz swoimi nieprzeciętnymi umiejętnościami w pierwszym składzie Barçy Leo błysnął w sezonie 2005/06. Niemniej Argentyńczyk miał pecha, kontuzja sprawiła, opuścił całą końcówkę sezonu oraz pamiętny finał Ligi Mistrzów z Arsenalem. W sezonie 2006/07 młodzian był już pierwszoplanową postacią drużyny Rijkaarda. Popisał się przepiękną bramką w pucharowym meczu z Getafe, którą wszyscy porównują do tej zdobytej przez Maradonę. Następny rok był dla Leo tak samo udany, jeśli chodzi o osiągnięcia indywidualne. Messi był prawdziwym crackiem FC Barcelony i w wielu meczach prowadził ją do zwycięstw. Po sukcesach z reprezentacjami młodzieżowymi przyszła pora na pierwszy sukces w dorosłej, chociaż nie do końca, reprezentacji. W 2008 roku, na igrzyskach olimpijskich w Pekinie, Argentyńczycy w składzie właśnie z Messim wywalczyli złoto. Kolejny sezon Lionel spędził już pod opieką Guardioli, dla którego sezon 2008/09 był premierowym w roli trenera Barçy. Argentyńczyk podczas historycznego sezonu był najbardziej wyróżniającym się graczem Barcelony, zostając między innymi najlepszym piłkarzem Ligi Mistrzów, a także najskuteczniejszym strzelcem tych elitarnych rozgrywek. W kolejnym sezonie Messi nie zwalniał tempa. Za rok 2009 nagrodzony został Złotą Piłką, a także nagrodą FIFA World Player of The Year. W lidze był najskuteczniejszym strzelcem, a ponadto wygrał kolejne trofea, w tym Klubowe Mistrzostwo Świata. Na mundialu w RPA, kreowany na największą gwiazdę Mistrzostw Świata nie sprostał oczekiwaniom, zresztą jak cała reprezentacja Argentyny. W 2010 nagrodzony został jednak kolejną Złotą Piłką. Następne sezony to kolejne rekordy Messiego, w tym ten klubowy pod względem liczby zdobytych bramek. W 2011 roku Leo wygrał z Barceloną kolejną Ligę Mistrzów i dołożył mistrzowski tytuł la Liga, a pod koniec roku trzeci raz z rzędu nagrodzony został Złotą Piłką. Sezon 2011/12 był już mniej udany (przegrana liga, odpadnięcie w półfinale Champions League i zdobyty Puchar Króla), ale Leo zdobył tytuł Pichichi z rekordową liczbą 50 bramek na koncie i pod koniec roku odebrał swoją czwartą Złotą Piłkę. Lata 2012-2014 były dla Messiego pasmem wzlotów i upadków. Jesienią i zimą 2012 roku wciąż strzelał bramki jak na zawołanie, ale w kwietniu 2013 doznał kontuzji, a Barcelona bez swojego lidera poniosła sromotną klęskę w półfinale Ligi Mistrzów, przegrywając w dwumeczu z Bayernem 0:7. Argentyńczyk sięgnął jednak po swojego kolejnego Złotego Buta (46 goli w lidze). Sezon 2013/14 rozpoczął znakomicie, ale w listopadzie doznał kolejnej kontuzji, która wykluczyła go z gry do końca 2013 roku. Jego forma w drugiej połowie sezonu 2013/14 była chimeryczna, a Barcelona zakończyła sezon bez mistrzostwa Hiszpanii. W Lidze Mistrzów została wyeliminowana w ćwierćfinale przez Atlético Madryt. Messi zaliczył za to bardzo udany mundial w Brazylii. Wraz z reprezentacją Albicelestes dotarł do finału i został wybrany najlepszym piłkarzem turnieju.",
    image: img23
  },
  { id: 23,
    number: 11,
    name: "Ousmane Dembele",
    position: "froward",
    description: "Urodzony 15 maja 1997 roku Ousmane Dembélé to jeden z najlepszych młodych piłkarzy na świecie. Mając zaledwie 20 lat, trafił do FC Barcelony po tym jak świetnie spisywał się wcześniej w ekipach z Rennes oraz Dortmundu. Francuz debiutował w lidze francuskiej w wieku 17 lat. Jego doskonały rozwój dostrzegła w 2016 roku Borussia Dortmund. W trakcie swojego pierwszego i jedynego sezonu w Niemczech zdobył 12 bramek i zaliczył 20 asysyt.",
    image: img24
  },
  { id: 24,
    number: 17,
    name: "Francisco Trincao",
    position: "froward",
    description: "Trincão zadebiutował w barwach Bragi 28 grudnia 2018 roku. Od tego czasu rozegrał w tym zespole 30 meczów, w których strzelił trzy gole i zanotował sześć asyst. 20-latek ma na koncie występy w młodzieżowych reprezentacjach Portugalii, a obecnie występuje w drużynie do lat 21. Podczas mistrzostw Europy U-19, które odbyły się w 2018 roku, został najlepszym strzelcem turnieju z pięcioma golami na koncie, a także najlepszym asystentem. Portugalczycy sięgnęli wówczas po końcowy triumf. Koszty operacji  wyniosły 31 milionów euro, a kontrakt Portugalczyka będzie obowiązywał do czerwca 2025 roku. W umowie zawarto klauzulę odejścia w wysokości 500 milionów euro.",
    image: img25
  },
  { id: 25,
    number: 7,
    name: "Antoine Griezmann",
    position: "froward",
    description: "Antoine Griezmann urodził się 21 marca 1991 roku w Mâcon we Francji. Obecnie jest jednym z najlepszych zawodników na świecie, a w swojej karierze grał już w Realu Sociedad i Atlético Madryt. W młodym wieku Francuz został wypatrzony przez skautów pierwszego z wymienionych zespołów i dołączył do niego w 2005 roku. Miał wtedy zaledwie 14 lat. W San Sebastián systematycznie się rozwijał i w 2009 roku, w wieku 18 lat, zadebiutował w pierwszym zespole. Od początku Griezmann był jednym z liderów zespołu w Segunda División i m.in. dzięki niemu drużynie udało się awansować do Primera. W ekipie z Kraju Basków zawodnik rozegrał w sumie 202 mecze, w których strzelił 52 gole. Występował tam na pozycji lewoskrzydłowego. W 2014 roku piłkarz przeszedł do Atlético, gdzie stał się jednym z najlepszych graczy na świecie. W 2016 roku dotarł do finału Ligi Mistrzów, znalazł się też na podium plebiscytu Złotej Piłki. W Madrycie Griezmann stał się gwiazdą, a następnie zaczął zyskiwać na znaczeniu w reprezentacji Francji. Z drużyną narodową dotarł do finału mistrzostw Europy (zdobył też Złoty But z sześcioma bramkami). W 2018 roku Griezmann został z kolei mistrzem świata, a w finale turnieju otrzymał tytuł MVP spotkania. W tym samym roku zdobył wraz z Atlético Ligę Europy. Napastnik może grać na każdej pozycji w ataku, choć preferuje lewe skrzydło. Griezmann jest ruchliwy, potrafi grać kombinacyjnie, ale też indywidualnie. Jest przyzwyczajony do pracy w defensywie i do pressingu. Jest bardzo niebezpieczny przy wymienianiu się pozycjami, dobrze radzi sobie w grze pozycyjnej oraz świetnie strzela z dystansu. FC Barcelona za francuskiego napastnika zapłaciła 120 mln euro, a podpisany kontrakt obowiązuje do końca czerwca 2024 roku.",
    image: img26
  },
  { id: 26,
    number: 19,
    name: "Martin Braithwaite",
    position: "froward",
    description: "Martín Braithwaite urodził się 5 czerwca 1991 roku w Esbjergu. Pierwsze piłkarskie kroki stawiał w szkółce Sædding-Guldager Idrætsforening. Po udanych młodzieżowych występach, został piłkarzem pierwszej drużyny Esbjerg. W duńskim zespole spędził 4 lata, po czym trafił do Toulousy. Następnie odszedł do Middlesbrough, które występowało w angielskiej Championship. Trudno jednak powiedzieć, że był to dobry okres w jego karierze, bowiem szybko został wypożyczony najpierw do Girondins Bordeaux, a następnie do Leganés. W hiszpańskim klubie sprostał oczekiwaniom, przez co włodarze podmadryckiego klubu, zdecydowali się na definitywny transfer. 20 lutego 2020 roku wobec długotrawej kontuzji Ousmane'a Dembélé Barcelona zdecydowała się na zapłacenie klauzuli odstępnego wynoszącej 18 mln euro i sprowadzenie Duńczyka. 28-latek związał się 4,5 letnią umową do końca czerwca 2024 roku, a klauzula odstępnego została ustalona na poziomie 300 mln euro.",
    image: img27
  }]
  

  return (
    <>
      <Player list={list} id={props.match.params.id}  />
      <Link to="/teams"><p className="back">Powrót</p></Link>
    </>

  );
}

export default PlayerPage;