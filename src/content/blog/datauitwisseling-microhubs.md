---
cover: "../../assets/blog/datauitwisseling-microhubs/cover.png"
coverAlt: "Zonefunctionaliteit in dashboarddeelmobiliteit"
title: "Data-uitwisseling microhubs met aanbieders deelmobiliteit"
publicationDate: 2023-06-23
description: "In het Dashboard Deelmobiliteit kunnen gemeenten microhubs en verbodsgebieden intekenen. Die worden handmatig of geautomiseerd uitgewisseld met alle aanbieders van deelmobiliteit. Hoe werkt deze datauitwisseling precies?"
---

## Data-uitwisseling microhubs met aanbieders deelmobiliteit

Microhubs met daaromheen een parkeerverbod zijn een goede manier om het parkeren van deelvoertuigen beter te sturen op locaties waar de druk op de openbare ruimte groot is. Daarmee wordt overlast van hinderlijk geparkeerde voertuigen beperkt. Vorig voorjaar hebben we in samenwerking met de gemeente Den Haag functionaliteit toegevoegd aan het [Dashboard Deelmobiliteit](https://dashboarddeelmobiliteit.nl/), die de locaties van deze microhubs en verbodszones ook beschikbaar maakt in de digitale wereld (https://www.verkeersnet.nl/actueel/44883/nieuwe-tool-helpt-overlast-deelvoertuigen-te-beperken/). Hiermee hebben we onder andere de gemeentes in Nederland in staat gesteld om de beschikbare capaciteit te monitoren.

## MDS

Vanaf het begin hebben we deze functionaliteit ontwikkeld met de gedachte in het achterhoofd dat deze gebieen op een geautomatiseerde manier uit te wisselen moeten zijn met aanbieders van deelmobiliteit. Voor het uitwisselen van de informatie hebben we een internationaal breed geaccepteerde standaard toegepast, MDS (https://github.com/openmobilityfoundation/mobility-data-specification). Al deze data is vanaf het begin beschikbaar als open-data, met als doel dat deze door aanbieders (semi-)automatisch verwerkt wordt in hun service gebied. Door een gestandaardiseerde databron te gebruiken worden fouten in het overnemen van service gebieden voorkomen en wordt het voor gemeenten gemakkelijker om sneller in te spelen op de situatie in de stad. Daarnaast zijn er ook nog andere toepassingen van deze data mogelijk, zoals bijvoorbeeld het opnemen van de informatie in reizigersinformatie (bijvoorbeeld: alle microhubs bij Scheveningen zijn vol, behalve bij het einde van het Zwartepad). Crowd control dashboards behoren ook tot de mogelijkheden.

Voor bijvoorbeeld Den Haag ziet deze informatie in MDS er als volgt uit:

De locaties en het realtime aantal vrije parkeerplekken in microhubs:
https://mds.dashboarddeelmobiliteit.nl/stops?municipality=GM0518

De locaties van verbodszones:
https://mds.dashboarddeelmobiliteit.nl/policies?municipality=GM0518

De exacte locatie van een microhub/verbodszone:
https://mds.dashboarddeelmobiliteit.nl/geographies/43439894-f24d-11ec-9055-7e327dedfd67

Afgelopen winter hebben we met de aanbieders van deelmobiliteit overlegd hoe zij deze informatie kunnen integreren in hun applicaties. Het proces waar we uit eindelijk naar toe willen laat zich goed illustreren door de volgende afbeelding.

![Data-uitwisseling](../../assets/blog/datauitwisseling-microhubs/uitwisseling_microhubs.png)

Gemeenten leggen verbodszones en microhubs vast het in het Dashboard Deelmobiliteit. Aanbieders bepalen waar zij hun diensten willen aanbieden. Als deze databronnen worden gecombineerd resulteert dat in een service gebied. De aanbieder doet een controle op dit service gebied en staat in contact met de gemeente om eventuele wijzigingen voor te stellen. Na controle zet de aanbieder het nieuwe service gebied actief.

Daarnaast is het mogelijk om ook in realtime microhubs beschikbaar / niet beschikbaar te maken om bijvoorbeeld in het geval van drukte te voorkomen dat gebruikers van deelmobiliteit hun voertuig parkeren naast een microhub (waardoor alsnog overlast kan ontstaan). Het beschikbaar / niet beschikbaar maken van een hub kan handmatig of automatisch gebaseerd op een ingestelde maximale capaciteit, bijvoorbeeld '20 voertuigen'.

### Een alternatief voor MDS: handmatig wijzingen doorvoeren

Uit gesprekken met de aanbieders bleek dat geautomatiseerde uitwisseling via MDS op korte termijn een te grote uitdaging is. Daarom hebben we een alternatief ontwikkeld om de eerste stap (het uitwisselen van de locaties van de microhubs en verbodszones) van het toepassen van deze werkwijze laagdrempeliger te maken.

Het alternatief dat we hebben gemaakt is dat alle gebieden nu geexporteerd kunnen worden als KML-bestand, waarna aanbieders deze handmatig in hun systemen verwerken. Het KML-formaat is een breed geïmplementeerd uitwisselingsformaat van geografische data die door alle GIS toepassingen wordt ondersteund. De data die geexporteerd kan worden is onderverdeeld in drie bestandjes (microhubs, verbodszones en analysezones) die los van elkaar in te lezen zijn. Veel vlootbeheersystemen van aanbieders zijn al in staat deze data handmatig in te lezen.

Hieronder zie je hoe je de 3 bestanden downloadt, en hoe het er er bijvoorbeeld uit ziet als een KML-bestand met verbodsgebieden in Google Earth wordt ingeladen.

![Bestanden in KML](../../assets/blog/datauitwisseling-microhubs/kml_bestanden.png)

![KML bestanden in Google Earth](../../assets/blog/datauitwisseling-microhubs/kml_google_earth.jpg)

Net als de parkeerzones en verbodszones kun je ook de KML-bestanden zelf downloaden als open-data:
https://mds.dashboarddeelmobiliteit.nl/kml/export?municipality=GM0518

Naast het _exporteren_ van KML's hebben we ook functionaliteit toegevoegd voor het importeren van KML-bestanden. Dit maakt het mogelijk om microhubs die eerder in een ander GIS-programma zijn ingetekend over te nemen in het Dashboard Deelmobiliteit. Op deze manier hopen we de drempel voor experimenteren van het uitwisselen van microhubs en verbodszones via het Dashboard te verlagen en voor alle aanbieders een manier van uitwisselen van data te realiseren die in elke gemeente in Nederland op dezelfde manier werkt.

## Toekomstige ontwikkeling

Het toepassen van microhubs is een belangrijk onderdeel in het proces van volwassen worden van deelmobiliteit. De huidige functionaliteit in het Dashboard is een eerste stap in het mogelijk maken van uitwisselen van deze informatie. Dinsdag 27 juni is de [gebruikersbijeenkomst](https://fietsberaad.nl/Bijeenkomsten/2023/Gebruikersbijeenkomst-Dashboard-Deelmobiliteit) van het Dashboard Deelmobiliteit, dan bespreken we graag hoe we de uitwisseling verder vorm gaan geven en welke functionaliteit daarvoor nog moet worden toegevoegd aan het Dashboard. 
