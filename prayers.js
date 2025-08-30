const prayers = {
  signOfCross: { 
    title: "Korsets tegn", 
    body: "I Faderens og Sønnens og Helligåndens navn. Amen." 
  },
  tolder: { 
    title: "Tolderens bøn", 
    body: "Herre, forbarm dig over mig, en synder!"
  },
  indledning_othodox: { 
    title: "Indledningsbønner", 
    body: "Herre, Jesus Kristus, Guds Søn, hør forbønnerne fra Din alrene Moder og fra alle Dine hellige, og forbarm Dig over os. Amen.\n\nÆre være Dig, vor Gud, ære være Dig.\n\nHimmelske Konge og Trøster, Sandheds Ånd, som er alle steder og fylder alt, det godes Kilde, livets Giver, kom, tag Din bolig i os, rens os fra alt ondt, og frels, Du Algode, vore sjæle.\n\nHellige Gud, hellige Stærke, hellige Udødelige, forbarm Dig over os. (tre gange)\n\nAlhellige Treenighed, forbarm Dig over os; Herre, rens os fra vore synder; Hersker, forlad os vore overtrædelser; Hellige, kom til os, og helbred vore skrøbeligheder for Dit Navns skyld.\n\nHerre, forbarm Dig. (tre gange)\n\nÆre være Faderen og Sønnen og Helligånden; Nu og altid og i al evighed. Amen.\n\nFader vor, Du, som er i himlene, helliget vorde Dit Navn, komme Dit Rige. Ske Din vilje på Jorden, som den sker i Himmelen. Giv os i dag vort daglige brød, og forlad os vor skyld, som også vi forlader vore skyldnere. Og led os ej i fristelse, men frels os fra det onde." 
  },
  morgenTroparier: { 
    title: "Morgentroparier til Den Hellige Treenighed", 
    body: "Vi er stået op fra søvnen, og vi falder ned for Dig, Du Gode. Vi synger englenes sang for Dig, Du Stærke: Hellig, hellig, hellig er Du, vor Gud.\nFor Gudsmoders forbønner skyld, forbarm Dig over os.\n\nÆre være Faderen og Sønnen og Helligånden.\n\nDu har rejst mig fra søvnen, Herre, oplys da også mine tanker og mit hjerte. Oplade mine læber, så jeg kan synge Din pris, alhellige Treenighed: Hellig, hellig, hellig er Du, vor Gud.\nFor Gudsmoders forbønners skyld, forbarm Dig over os.\n\nNu og altid og i al evighed.\n\nUventet kommer Dommeren, og alles gerninger skal åbenbares. Men ved midnat råber vi i gudsfrygt: Hellig, hellig, hellig er Du, vor Gud.\nFor Gudsmoders forbønners skyld forbarm Dig over os.\n\nHerre forbarm Dig. (tolv gange)" 
  },  
  basiliosDenStore: { 
    title: "Bøn til Treenigheden af hellige Basilios Den Store", 
    body: "Jeg er stået op fra søvnen, og jeg takker Dig, hellig Treenighed, for at Du i Din store godhed og langmodighed ikke er blevet vred på mig dovne og syndige menneske; og for at Du ej heller har tilintetgjort mig for mine overtrædelser, men som altid vist Din store kærlighed til menneskene og oprejst mig fra bevidstløsheden, så at jeg i den tidlige morgenstund kan lovprise Din magt. Oplys nu mit hjertes øjne, oplad mine læber, så jeg kan lære Dine ord og fatte Dine bud; så jeg kan opfylde Din vilje, lovsynge Dig af hele mit hjerte og lovprise Dit alhellige Navn: Fader, Søn og Helligånd, nu og altid og i al evighed. Amen.\n\nKom, lad os tilbede Gud, vor Konge.\nKom, lad os tilbede og falde ned for Kristus, vor Gud og Konge.\nKom, lad os tilbede og falde ned for Kristus selv, vor Konge og vor Gud." 
  },
  makariosDenStore: { 
    title: "Bønner af hellige Makarios Den Store", 
    body: "Gud, rens mig synder; for jeg har intet godt gjort for Dit Åsyn. Men frels Du mig fra det onde, og lad Din vilje råde i mig, så jeg uden fordømmelse kan åbne mine læber og lovprise Dit hellige Navn: Fader, Søn og Helligånd, nu og altid og i al evighed. Amen.\n\nJeg er vågnet fra søvnen, og jeg opsender morgensang til Dig, min Frelser, og falder ned og påkalder Dig: Lad mig ikke sove ind i syndens død, men forbarm Dig over mig, Du, som frivilligt lod Dig korsfæste. Oprejs mig fra min dvale, og bevar mig i årvågenhed og bøn. Lad, efter nattens søvn, denne dag lyse over mig uden synd, og frels mig, Kristus, min Gud. Amen.\n\nHerre, Du, som elsker menneskene, til Dig tager jeg min tilflugt efter nattens søvn. Jeg iler til og bereder mig på at udføre Dine gerninger ved Din nåde; og jeg bønfalder Dig: Hjælp mig til enhver tid i alt, hvad jeg gør, og red mig fra alt jordisk ondt og fra djævelens fristelser. Frels mig, og led mig ind i Dit evige Rige; for Du er min Skaber, alle gode gavers Giver. Til Dig sætter jeg min lid, og Dig opsender jeg ære, Fader, Søn og Helligånd, nu og altid og i al evighed. Amen.\n\nHerre, Du, som ved Din mægtige godhed og store gavmildhed har ladet mig, Din tjener, vandre igennem den forgangne nat uden anfægtelser fra fjendens angreb: Tilstå mig, Hersker og alles Skaber, at udføre Din vilje med hjertet oplyst af Dit sande lys, nu og altid og i al evighed. Amen." 
  },
  basiliosDenStore2: { 
    title: "Bøn af hellige Basilios Den Store", 
    body: "Almægtige Herre, de himmelske skarers og alt køds Gud, Du, som bor i det høje og ser ned til de ringe, Du, som ransager hjerte og nyrer og afslører menneskenes hemmeligheder, Du evige Lys uden begyndelse, uforanderlig og uomskiftelig; modtag Du selv, udødelige Konge, vore bønner, som vi i denne stund frembærer med urene læber i tillid til Din store barmhjertighed. Forlad os vore overtrædelser, vore bevidste og ubevidste synder i gerning, i ord og i tanke, og rens os fra alt ondt, som mørkner vort kød og vor ånd. Lad os vandre gennem dette livs nat med årvågent hjerte og ædrueligt sind i forventning om Din enbårne Søns komme, vor Herre, Gud og Frelser Jesu Kristi åbenbarings dag, hvor alle Dommer skal træde frem i Sin herlighed for at gengælde enhver efter hans gerninger. Lad Ham ikke finde os sovende og uvirksomme, men vågne og rede til handling og til at træde ind i Hans herlige, guddommelige bryllupssal, hvor gæsternes jubelråb altid lyder, og hvor det er usigeligt godt at være for dem, som skuer Dit usigeligt gode åsyn. For Du er det sande Lys, som oplyser og helliggør alt, og Dig lovsynger al skabning i al evighed. Amen." 
  },
  salme51: { 
    title: "Salme 51", 
    body: "Til Sangmesteren. En Salme af David, da Profeten Natan kom til ham, efter at han havde været hos Batseba.\n\n1. Gud! vær mig nådig efter din Miskundhed,\nudslet mine Overtrædelser efter din store Barmhjertighed!\n\n2. Tvæt mig vel fra min Misgerning,\nog rens mig fra min Synd.\n\n3. Thi mine Overtrædelser kender jeg,\nog min Synd er mig altid for Øje.\n\n4. Imod dig alene har jeg syndet,\ndet, som er ondt i dine Øjne, gjorde jeg,\nfor at du må stå retfærdig, når du taler,\nren, når du dømmer.\n\n5. Se, med Skyld blev jeg født,\nmed Synd blev jeg undfanget af min Moder.\n\n6. Se, du har Lyst til Sandhed i det inderste,\ndu lærer mig Visdom i Hjertets Dyb.\n\n7. Rens mig med Isop, så jeg bliver ren,\ntvæt mig, så jeg bliver hvidere end Sne.\n\n8. Lad mig høre Fryd og Glæde,\nlad de Ben, du har knust, juble.\n\n9. Skjul dit Ansigt for mine Synder,\nudslet alle mine Misgerninger.\n\n10. Skab mig, Gud, et rent Hjerte,\nforny inden i mig en stadig Ånd.\n\n11. Kast mig ikke bort fra dit Åsyn,\ntag ikke din hellige Ånd fra mig!\n\n12. Giv mig din Frelses Fryd igen,\nhold mig oppe med en villig Ånd.\n\n13. Jeg vil lære Overtrædere dine Veje,\nog Syndere skal omvende sig til dig.\n\n14. Fri mig fra Blodskyld, Gud, min Frelses Gud,\nmin Tunge skal juble over din Retfærdighed.\n\n15. Herre, oplad mine Læber,\nså min Mund kan forkynde din Pris.\n\n16. Thi du har ikke Lyst til Slagtoffer, ellers bragte jeg det,\ntil Brændoffer har du ikke Behag.\n\n17. Gud, et sønderbrudt Hjerte er mit Offer,\net sønderknust Hjerte, Gud, ringeagter du ikke.\n\n18. Gør vel imod Zion i din Nåde,\nopbyg Jerusalems Mure!\n\n19. Da skal du have Behag i rette Ofre,\nBrændofre og Helofer;\nda skal man ofre Tyre på dit Alter." 
  },
  bønTilSkytsenglen: { 
    title: "Bøn til Skytsenglen", 
    body: "Hellige engel, som våger over min arme sjæl og mit syndefulde liv; forlad ikke mig, syndige menneske, og vig ej fra mig for min svagheds skyld. Lad ikke den onde ånd få adgang til at herske over mig ved overgreb på dette, mit dødelige legeme. Styrk min ringe og ynkelige hånd, og led mig på frelsens vej. Hellige Guds engel, vogter for min arme sjæl, mit arme legemes beskytter; tilgiv mig alt, hvormed jeg har krænket dig gennem hele mit liv, og hvis jeg har syndet i natten, som er gået. Beskyt mig igennem dagen, som stunder til; bevar mig fra alle den ondes fristelser, så jeg ikke forarger min Gud med nogen synd. Bed for mig hos Herren, at Han må befæste mig i gudsfrygt og lede mig frem til at blive en værdig tjener for Hans godhed. Amen." 
  },
  bønTilGudfødersken: { 
    title: "Bøn til den alhellige Gudføderske", 
    body: "Min alhellige Herskerinde, Gudsmoder, fordriv ved dine hellige og mægtige bønner alle urene, falske og hedenske tanker fra mit forstokkede hjerte og forvirrede sind, for jeg er fattig og ringe. Frels mig fra de mange forfærdelige tanker og hensigter, og red mig fra alle onde gerninger; for du er velsignet af alle slægter, og dit højtærede navn prises af alle slægter i al evighed. Amen.\n\nGudføderske og Jomfru, fryd dig; Maria, fuld af nåde, Herren er med dig; velsignet være du blandt kvinder, og velsignet være dit livs frugt, for du har født vor sjæles frelse." 
  },
  troparionTilDetHelligeKors: { 
    title: "Troparion til det hellige kors", 
    body: "Frels, Herre, Dit folk, og velsign Din arvedel. Giv Dine troende sejr over modstanderne, og bevar Dit herredømme ved Dit Kors." 
  },
  bønForDeLevende: { 
    title: "Bøn for de levende", 
    body: "Kom i hu, Herre, Jesus Kristus, Din nåde og barmhjertighed, som er fra evighed af, og hvorved Du blev Menneske og tog døden og korsfæstelsen på Dig for at frelse dem, som rettelig tror på Dig. Du opstod fra de døde og opførte til himmelen, Du sidder ved Faderens højre hånd og ser i nåde til dem, som påkalder Dig af hele deres hjerte. Bøj også Dit øre til mig, Din uværdige tjener, og hør min ydmyge bøn, som jeg frembærer for Dig som en duft af åndelig vellugt for hele Dit folk. Tænk først på Din hellige, katolske og apostolske Kirke, som Du har vundet ved Dit dyrebare blod; befæst og styrk den, lad den vokse, og bevar den ubesejret af dødsrigets porte i evighed. Dæmp splittelser i Kirkerne, slå ned på hedensk hovmod, spred og udryd enhver vranglære og ethvert oprør, og tilintetgør dem ved Din Helligånds styrke.\n\nFrels, Herre, og forbarm Dig over dem, som hader og forulemper mig, og som fører mig i fristelse; lad dem ikke fortabes for min skyld, for også jeg er en synder." 
  },
  bønForDeHensovne: { 
    title: "Bøn for de hensovne", 
    body: "Kom i hu, Herre, alle rettroende kristne, som er sovet hen i troen på opstandelsen og i håbet om det evige liv. Lad dem få bolig blandt de hellige, hvor Dit åsyns lys stråler; og forbarm Dig også over os, for Du er god og elsker menneskene." 
  },
  afslutning_othodox: { 
    title: "Afslutningsbønner", 
    body: "Herre, Jesus Kristus, Guds Søn, hør forbønnerne fra Din alrene Moder og fra alle Dine hellige, og forbarm Dig over os. Amen." 
  },
  introGlory: { 
    title: "Ære være Gud", 
    body: "Ære være dig, vor Gud, ære være dig." 
  },
  gloria: { 
    title: "Ære være Faderen", 
    body: "Ære være Faderen og Sønnen og Helligånden; som det var i begyndelsen, så nu og altid og i al evighed. Amen." 
  },
  gloria_orthodox: { 
    title: "Ære være Faderen", 
    body: "Ære være Faderen og Sønnen og Helligånden; som det var i begyndelsen, så nu og altid og i al evighed. Amen." 
  },
  pater: { 
    title: "Fadervor", 
    body: "Fader vor, du som er i Himlene! Helliget vorde dit navn, komme dit rige; ske din vilje som i Himlen således også på jorden; giv os i dag vort daglige brød; og forlad os vor skyld, som også vi forlader vore skyldnere; og led os ikke ind i fristelse, men fri os fra det onde. Amen." 
  },
  heavenlyKing: { 
    title: "Bøn til Helligånden", 
    body: "Himmelske Konge og Trøster, Sandhedens Ånd, som er alle steder og fylder alt, det godes Kilde, livets Giver, kom, tag Din bolig i os, rens os fra alt ondt, og frels, Du Algode, vore sjæle." 
  },
  trisagion: { 
    title: "Trisagion (tre gange)", 
    body: "Hellige Gud, Hellige Stærke, Hellige Udødelige, forbarm dig over os. (Gentages tre gange)" 
  },
  trinity: { 
    title: "Bøn til Treenigheden", 
    body: "Allhellige Treenighed, forbarm dig over os. Herre, rens os fra vore synder. Hersker, forlad os vore misgerninger. Hellige, kom til os, og helbred vore skrøbeligheder for Dit Navns skyld.\n\nHerre, forbarm Dig (tre gange)" 
  },
  jesusPrayer: { 
    title: "Jesusbønnen", 
    body: "Herre Jesus Kristus, Guds Søn, forbarm dig over mig, en synder." 
  },
  creed_orthodox: { 
    title: "Trosbekendelsen (Ortodoks)", 
    body: "Jeg tror på én Gud, Fader, den Almægtige, skaber af himmel og jord, af alt synligt og usynligt. Og på én Herre, Jesus Kristus, Guds enbårne Søn, født af Faderen før alle tider: Gud af Gud, Lys af Lys, sand Gud af sand Gud, født, ikke skabt, af samme væsen som Faderen, ved hvem alt er skabt; som for os mennesker og for vor frelse steg ned fra himlene, blev kød ved Helligånden af Jomfru Maria og blev menneske; blev korsfæstet for os under Pontius Pilatus, led og blev begravet; opstod på tredje dag ifølge Skrifterne; opfor til himlene, sidder ved Faderens højre hånd; skal komme igen i herlighed for at dømme levende og døde; hans rige skal ingen ende have. Og på Helligånden, Herren og Livgiveren, som udgår af Faderen, som tillige med Faderen og Sønnen tilbedes og æres, som har talt gennem profeterne. Og på én hellig, katolsk og apostolsk kirke. Jeg bekender én dåb til syndernes forladelse. Jeg forventer de dødes opstandelse og det kommende tidsalders liv. Amen." 
  },
  morningPrayer: { 
    title: "Morgenbøn", 
    body: "O Herre, giv mig i dag at stå op til et nyt liv i din nåde, renset fra synd, med et hjerte fyldt af taknemmelighed og ydmyghed. Led mine skridt, så jeg må vandre i din sandhed og tjene dig i kærlighed. Amen." 
  },
  eveningForgiveness: { 
    title: "Bøn om tilgivelse", 
    body: "O Herre, tilgiv mig alle mine synder, som jeg har begået i dag, bevidst eller ubevidst, i ord, gerning eller tanke. Rens mit hjerte og giv mig fred. Amen." 
  },
  theotokos: { 
    title: "Bøn til Theotokos", 
    body: "O Allhellige Jomfru Maria, Guds Moder, bed for os syndere, beskyt os under dine hellige bønner, og led os til din Søn, vor Frelser. Amen." 
  },
  eveningPrayer: { 
    title: "Aftenbøn før søvn", 
    body: "O Herre, vor Gud, beskyt mig denne nat, og giv mig en rolig søvn. Bevar mig fra alt ondt, og led mig til dit evige rige gennem din store barmhjertighed. Amen." 
  },
  creed_apostolic: { 
    title: "Apostolsk trosbekendelse", 
    body: "Jeg tror på Gud Fader, den Almægtige, Himlens og jordens skaber. Jeg tror på Jesus Kristus, guds enbårne Søn, vor Herre, som blev undfanget ved Helligånden, født af jomfru Maria, pint under Pontius Pilatus, korsfæstet, død og begravet, nedfor til dødsriget, opstod på den tredje dag fra de døde, opfor til himmels, sidder ved Gud Faders, den Almægtiges, højre hånd, skal derfra komme igen for at dømme de levende og de døde. Jeg tror på Helligånden, den hellige katolske kirke, de helliges samfund, syndernes forladelse, kødets opstandelse og det evige liv. Amen." 
  },
  ave: { 
    title: "Ave Maria", 
    body: "Hil dig Maria, fuld af nåde, Herren er med dig. Velsignet er du blandt kvinder, og velsignet er dit livs frugt, Jesus.\nHellige Maria, Guds Moder, bed for os syndere, nu og i vor dødstime. Amen." 
  },
  fatima: { 
    title: "Fatimabøn", 
    body: "O min Jesus, forlad os vore synder, frels os fra helvedes ild; før alle sjæle ind i Himlen, især dem, som trænger mest til din barmhjertighed. Amen." 
  },
  salveRegina: { 
    title: "Hil dig Dronning (Salve Regina)", 
    body: "Hil dig, Dronning, barmhjertighedens moder, vort liv, vor mildhed og vort håb, hil dig. Til dig råber vi, Evas forviste børn; til dig sukker vi, klagende og grædende i denne tåredal. Kom derfor, vor talskvinde, vend dine barmhjertige øjne mod os, og efter dette landflygtigheds liv, vis os Jesus, din livs frugt, velsignet. O milde, o fromme, o søde jomfru Maria." 
  },
  closing: { 
    title: "Afslutningsbøn", 
    body: "Lad os bede: Gud, hvis enbårne Søn ved sit liv, sin død og opstandelse har skænket os frelsen, giv os, at vi, når vi i den hellige Rosenkrans ærbødigt betænker disse mysterier, må efterligne det, de indeholder, og opnå det, de lover, ved samme Kristus, vor Herre. Amen." 
  },
  closing_orthodox: {
    title: "Afslutningsbønner",
    body: "Værdigt og ret er det at prise dig salg, Gudføderske;\nDu evigt salige, alrene og moder til vor Gud;\nHøjere æret end keruber og uendeligt mere herlig end serafer;\nDu, som uberørt fødte Gud, Ordet;\nSande Gudføderske, dig højlover vi.\n\nÆre være Faderen og Sønnen og Helligånden, nu og altid og i al evighed. Amen.\n\nHerre, forbarm Dig (tre gange)\n\nHerre Jesus Kristus, Guds Søn: Hør forbønnerne fra Din alrene moder, fra vore fromme, gudbærende fædre og fra alle Dine hellige, og forbarm Dig over os. Amen."
  }
};