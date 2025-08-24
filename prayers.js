const prayers = {
  signOfCross: { 
    title: "Korsets tegn", 
    body: "I Faderens og Sønnens og Helligåndens navn. Amen." 
  },
  tolder: { 
    title: "Tolderens bøn", 
    body: "Herre, forbarm dig over mig, en synder!" 
  },
  forbønner: { 
    title: "Forbønner", 
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
    body: "Allhellige Treenighed, forbarm dig over os. Herre, rens os fra vore synder. Hersker, forlad os vore misgerninger. Hellige, kom til os, og helbred vore skrøbeligheder for Dit Navns skyld." 
  },
  jesusPrayer: { 
    title: "Jesusbønnen (tre gange)", 
    body: "Herre Jesus Kristus, Guds Søn, forbarm dig over mig, en synder. (Gentages tre gange)" 
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
  }
};