const cacheName = "fajny-spevnik-cache-179484";
// prettier-ignore
const assets = ["/fajny-spevnik/","https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200..900;1,200..900","https://fonts.gstatic.com/s/worksans/v13/QGYsz_wNahGAdqQ43Rh_fKDp.woff2","https://fonts.gstatic.com/s/worksans/v13/QGYsz_wNahGAdqQ43Rh_cqDpp_k.woff2","https://fonts.gstatic.com/s/worksans/v13/QGYqz_wNahGAdqQ43Rh_eZDrv_0.woff2","https://fonts.gstatic.com/s/worksans/v13/QGYqz_wNahGAdqQ43Rh_eZDlv_1w4A.woff2","/fajny-spevnik/songs/dorfuchs--die-ableitung-vom-sinus/","/fajny-spevnik/songs/kybel-maciek--rozjebem-byt/","/fajny-spevnik/songs/miro-jaros--strasidla/","/fajny-spevnik/songs/dzumelec--hej-ta-treba-dakus/","/fajny-spevnik/songs/marhule--pred-gardou/","/fajny-spevnik/songs/horkyze-slize--cigarety/","/fajny-spevnik/songs/horkyze-slize--mastal/","/fajny-spevnik/songs/ltt-2019--hymna-marakarny/","/fajny-spevnik/songs/miro-jaros--moje-telo/","/fajny-spevnik/songs/jon-lajoie--too-fast/","/fajny-spevnik/songs/miro-jaros--dospely/","/fajny-spevnik/songs/frozen-svenska--sla-dig-fri/","/fajny-spevnik/songs/miro-jaros--ciste-rucky/","/fajny-spevnik/songs/lais--t-smidje/","/fajny-spevnik/songs/kybel-maciek--blondava/","/fajny-spevnik/songs/kms-leto-2021--refrigerator-song/","/fajny-spevnik/songs/vbps--bohus-brav/","/fajny-spevnik/songs/miro-jaros--balon/","/fajny-spevnik/songs/horkyze-slize--vlak/","/fajny-spevnik/songs/vbps--1992/","/fajny-spevnik/songs/misko-urban--stanko-ty-si-autista/","/fajny-spevnik/songs/horkyze-slize--silny-refren/","/fajny-spevnik/songs/initial-d--deja-vu/","/fajny-spevnik/songs/horkyze-slize--vojak/","/fajny-spevnik/songs/zona-a--chleba/","/fajny-spevnik/songs/caramella-girls--caramelldansen/","/fajny-spevnik/web/registration.js","/fajny-spevnik/web/style.css","/fajny-spevnik/web/scale.js","/fajny-spevnik/web/search.js"];

self.addEventListener("install", (event) => {
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
