const cacheName = "fajny-spevnik-cache-507771";
// prettier-ignore
const assets = ["/fajny-spevnik/","https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200..900;1,200..900","https://fonts.googleapis.com/css2?family=Work+Sans:wght@200..900&text=%E2%86%90","https://fonts.gstatic.com/s/worksans/v17/QGYqz_wNahGAdqQ43Rh_eZDkv_1i4_D2E4A.woff2","https://fonts.gstatic.com/s/worksans/v17/QGYqz_wNahGAdqQ43Rh_eZDrv_1i4_D2.woff2","https://fonts.gstatic.com/s/worksans/v17/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2","https://fonts.gstatic.com/s/worksans/v17/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2","https://fonts.gstatic.com/l/font?kit=QGYsz_wNahGAdqQ43RhPfqrul_h64hpwuw&skey=a19f1b3d756da88c&v=v17","/fajny-spevnik/songs/o-zone/dragostea-din-tei/","/fajny-spevnik/songs/ltt-2019/hymna-marakarny/","/fajny-spevnik/songs/yui/again/","/fajny-spevnik/songs/zona-a/chleba/","/fajny-spevnik/songs/misko-urban/stanko-ty-si-autista/","/fajny-spevnik/songs/the-offspring/all-i-want/","/fajny-spevnik/songs/jon-lajoie/too-fast/","/fajny-spevnik/songs/miro-jaros/balon/","/fajny-spevnik/songs/miro-jaros/ciste-rucky/","/fajny-spevnik/songs/miro-jaros/strasidla/","/fajny-spevnik/songs/miro-jaros/dospely/","/fajny-spevnik/songs/miro-jaros/moje-telo/","/fajny-spevnik/songs/dzumelec/hej-ta-treba-dakus/","/fajny-spevnik/songs/caramella-girls/caramelldansen/","/fajny-spevnik/songs/marhule/ach-ty-svina/","/fajny-spevnik/songs/marhule/diskoprijeb/","/fajny-spevnik/songs/marhule/ty-krava/","/fajny-spevnik/songs/marhule/sir-lasku-ty-kokot/","/fajny-spevnik/songs/marhule/de-je-zas-ten-kokot/","/fajny-spevnik/songs/marhule/aj-ked-si-jebnuty-mam-ta-rad/","/fajny-spevnik/songs/marhule/pred-gardou/","/fajny-spevnik/songs/marhule/jebo-z-lesa/","/fajny-spevnik/songs/alvaro-soler/sofia/","/fajny-spevnik/songs/vydrapena-buzirka-punk-system/1992/","/fajny-spevnik/songs/vydrapena-buzirka-punk-system/bohus-brav/","/fajny-spevnik/songs/helenine-oci/obchadzka/","/fajny-spevnik/songs/helenine-oci/naka/","/fajny-spevnik/songs/red-hot-chili-peppers/out-of-range/","/fajny-spevnik/songs/initial-d/deja-vu/","/fajny-spevnik/songs/kms-leto-2021/refrigerator-song/","/fajny-spevnik/songs/gipsy-kings/volare/","/fajny-spevnik/songs/gloryhammer/the-unicorn-invasion-of-dundee/","/fajny-spevnik/songs/gloryhammer/fly-away/","/fajny-spevnik/songs/kybel-maciek/blondava/","/fajny-spevnik/songs/kybel-maciek/buran/","/fajny-spevnik/songs/kybel-maciek/pijan/","/fajny-spevnik/songs/kybel-maciek/salatovy-holokaust/","/fajny-spevnik/songs/kybel-maciek/rozjebem-byt/","/fajny-spevnik/songs/neon-genesis-evangelion/cruel-angel-s-thesis/","/fajny-spevnik/songs/dorfuchs/die-ableitung-vom-sinus/","/fajny-spevnik/songs/michaela-pastekova/kaleraby/","/fajny-spevnik/songs/horkyze-slize/silny-refren/","/fajny-spevnik/songs/horkyze-slize/vlak/","/fajny-spevnik/songs/horkyze-slize/vojak/","/fajny-spevnik/songs/horkyze-slize/mastal/","/fajny-spevnik/songs/horkyze-slize/cigarety/","/fajny-spevnik/songs/pentagramcek/kamarat/","/fajny-spevnik/songs/frozen-svenska/sla-dig-fri/","/fajny-spevnik/songs/jaromir-nohavica/fotbal/","/fajny-spevnik/songs/lais/t-smidje/","/fajny-spevnik/web/registration.js","/fajny-spevnik/web/style.css","/fajny-spevnik/web/scale.js","/fajny-spevnik/web/search.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.keys().then(keys => keys.map(key => caches.delete(key)))
  )
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((result) => result || fetch(event.request.url))
  );
});
