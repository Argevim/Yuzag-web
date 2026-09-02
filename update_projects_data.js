const fs = require('fs');

const path = '/Users/sercankostence/Downloads/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const newData = `const projectsData = [
    {
        id: 1,
        title: "YÜZAG Hatıra Ormanları",
        shortDesc: "Geleceğe nefes olmak, toprağa emanet bırakmak...",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Devam Ediyor",
        date: "2026",
        location: "Bilecik / Çekmeköy",
        tabs: {
            asamalar: "<p>Geleceğe nefes olmak, toprağa emanet bırakmak... YÜZAG Hatıra Ormanları projesi, yanan alanları yeşertmek ve gelecek nesillere kalıcı bir hatıra bırakmak amacıyla hayata geçirilmiştir.</p><p>Etkiler ve Kazanımlar: Bu proje, yalnızca ağaç dikmekten ibaret değildir; toplumun her kesiminden bireyleri çevre bilinci etrafında birleştiren, doğaya karşı sorumluluğumuzu hatırlatan güçlü bir sosyal hareket alanıdır. Dikilen her fidan, yarınlara nefes olurken; bu topraklarda yaşayan çocuklarımıza da ‘kök salmak’ ve ‘emanete sahip çıkmak’ bilincini aşılamaktadır.</p>",
            etkinlikler: "<ul><li><strong>13 Aralık 2026:</strong> Bilecik Osmaniye’de YÜZAG Hatıra Ormanı Fidan Dikimi. Peygamber Efendimiz’in (sav) mübarek sözünü rehber edinerek çıktığımız bu yolda, her fidan geleceğe bırakacağımız en güzel miras oldu.</li><li><strong>26 Nisan 2026:</strong> Çekmeköy Bin Fidan Bin Umut YÜZAG 2. Hatıra Ormanı. Bu ormanımızı Şanlıurfa ve Kahramanmaraş'ta yaşanan silahlı saldırı sonucu hayatını kaybeden kıymetli Ayla öğretmenimize ve yavrularımıza ithaf ediyoruz.</li></ul>",
            gorevAlanlar: "<p>Genel Başkanımız <strong>Güleser Topuz</strong> öncülüğünde, YÜZAG gönüllülerinin katkılarıyla hayata geçirilmiştir.</p>",
            iletisim: "<p>Sosyal Medya Bağlantılarımız:</p><ul><li><a href='https://www.instagram.com/p/DSSndLsDBAG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Bilecik Osmaniye Fidan Dikimi</a></li><li><a href='https://www.instagram.com/p/DXMdZXbjMl-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Çekmeköy 2. Hatıra Ormanı</a></li></ul>"
        }
    },
    {
        id: 2,
        title: "İyilikte Hep Birlikte Projesi",
        shortDesc: "Kapılar Çalınıyor, Gönüller Alınıyor: Toplumsal Dayanışmada Yeni Bir Model",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Devam Ediyor",
        date: "2025-2026",
        location: "İstanbul Geneli",
        tabs: {
            asamalar: "<p>Türkiye’de sosyal yardım sistemleri çoğu zaman kurumsal ve mesafeli bir yapıya sahiptir. YÜZAG olarak bizler, iyiliğin yalnızca bir yardım paketi teslim etmek olmadığına; asıl değerin, ihtiyaç sahibinin kapısını çalmak, onu dinlemek ve göz göze gelerek bir nebze de olsa yalnız olmadığını hissettirmek olduğuna inanıyoruz. “İyilikte Hep Birlikte” projesi, bu felsefeyle; maddi desteği manevi yakınlıkla birleştiren, “insan merkezli” bir sosyal yardım modeli olarak tasarlanmıştır.</p><p>Proje kapsamında ihtiyaç sahibi ailelere ulaşmak için sistematik bir saha çalışması yürütülmüştür.</p>",
            etkinlikler: "<ul><li><strong>Dağıtımlar:</strong> 750 gıda kolisi ilçe bazında dağıtılmıştır (Kağıthane, Başakşehir, Küçükçekmece vb.). 500 market kartı ihtiyaç sahiplerine ulaştırılmıştır. 3000 adet gıda kolisi, 2500 alışveriş kartı dağıtılmıştır.</li><li><strong>Ziyaretler:</strong> 10 aile evlerinde ziyaret edilerek özel ihtiyaçlarına yönelik destek sağlanmıştır.</li><li><strong>Ramazan Desteği:</strong> 400 adet meyve suyu kolisi Sultanbeyli ve Kağıthane’deki ailelerimize ulaştırılmıştır.</li><li><strong>Diğer Yardımlar:</strong> 10 engelli sandalyesi, 3 hasta yatağı, 5 öğrenci bursu, 3 haneye tam ev eşyası desteği.</li></ul>",
            gorevAlanlar: "<p>Sosyal Hizmetler Komisyonu Başkanı <strong>Meryem Tekbıyık</strong> ve Yaşlı ve Engelliler Koordinasyon Başkanı <strong>Tekin Sağlam</strong> önderliğinde yürütülmüştür.</p><p>Saha Gönüllüleri: Emine Hancı, Esra Keleşoğlu, Emine Tanrıkulu, Ayşe Kabakoç, Şengül Kazanır, Güleser Topuz, Tuba Gümüş.</p>",
            iletisim: "<p>Sosyal Medya Bağlantılarımız:</p><ul><li><a href='https://www.instagram.com/reel/DSAv90TDB29/' target='_blank'>İyilikte Hep Birlikte Video 1</a></li><li><a href='https://www.instagram.com/reel/DSX22dgDM_n/' target='_blank'>İyilikte Hep Birlikte Video 2</a></li></ul>"
        }
    },
    {
        id: 3,
        title: "Akran Nezaketi Projesi",
        shortDesc: "Drama ve Empatiyle Zorbalığa Karşı Kalıcı Çözüm",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Tamamlandı",
        date: "2026",
        location: "İstanbul / Üsküdar",
        tabs: {
            asamalar: "<p>Akran zorbalığı; fiziksel, sözlü, sosyal ve siber mecralarda giderek artan bir halk sağlığı sorunu haline gelmiştir. YÜZAG olarak, bu soruna yalnızca yüzeysel seminerlerle değil; kalıcı davranış değişikliği yaratacak bilimsel ve uygulamalı bir modelle müdahale etme kararı aldık.</p><p>Bilimsel Altyapı ve Uygulama Yöntemi: Proje, Millî Eğitim Bakanlığı ve Marmara Üniversitesi Atatürk Eğitim Fakültesi iş birliğiyle yürütülmektedir. Müfredatın temeli, alanında uzman akademisyenler tarafından hazırlanmış olup; drama, doğaçlama ve rol oynama teknikleriyle çocukların konuya aktif katılımı sağlanmaktadır.</p>",
            etkinlikler: "<ul><li><strong>Pilot Uygulama:</strong> İlk uygulama, İstanbul Üsküdar ilçesinde Dilaver Cebeci İlkokulu ve Kadriye Mehmet Koparan İlkokulu’nda 3. ve 4. sınıflarda 10 hafta süresince uygulanmıştır.</li><li><strong>Sonuçlar:</strong> Yapılan ön test ve son test değerlendirmelerinde, öğrencilerin empati kurma becerilerinde, sınır tanıma bilinçlerinde ve yardım isteme reflekslerinde anlamlı ve ölçülebilir bir artış gözlemlenmiştir.</li></ul>",
            gorevAlanlar: "<p>Proje Koordinatörümüz: <strong>Av. Fatma Doydu Aksu</strong></p><p>Yürütücüler: Av. Şeyma Saka, Av. Melike Torun, Av. Zeynep Paşahan ve Av. Zeynep Aygür.</p><p>İçerik Ekibi: Marmara Üniversitesi’nden Prof. Dr. Bilal Yorulmaz ile drama eğitmenlerimiz Ebru Albayrak ve Emre Berber. Prof. Dr. Özkan Sapsağlam, Doç. Dr. Handan Yalvaç Arıcı.</p>",
            iletisim: "<p>Proje hakkında detaylar:</p><ul><li><a href='https://www.instagram.com/p/DVtT5sPDJ-4/' target='_blank'>Akran Nezaketi Gönderisi</a></li></ul>"
        }
    },
    {
        id: 4,
        title: "Genç Bir Hal Ustadan Gence Zirveye Yolculuk",
        shortDesc: "İlham Veren Liderlerle Geleceğin Rotasını Çizmek",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Devam Ediyor",
        date: "2025-2026",
        location: "İstanbul Geneli",
        tabs: {
            asamalar: "<p>Günümüz gençliği, bilgiye kolayca ulaşsa da doğru rol modelleri bulmakta ve kariyer yolculuklarında rehberlik almakta zorlanmaktadır. “Genç Bir Hal: Ustadan Gence Zirveye Yolculuk” serisi, bu ihtiyaca yanıt vermek; farklı alanlarda çığır açmış, vizyon sahibi isimleri gençlerle buluşturarak onların ufkunu genişletmek ve motivasyonlarını ateşlemek amacıyla tasarlanmıştır.</p>",
            etkinlikler: "<ul><li><strong>İlker Astarcı:</strong> Türkiye Ulusal Ajansı Başkanı – Deneyim, vizyon ve uluslararası projeler üzerine ilham veren bir söyleşi.</li><li><strong>Abdurrahman Uzun:</strong> Adalet, vicdan, toplumsal sorumluluk ve aktif duruş üzerine ufuk açıcı sohbetler.</li><li><strong>Prof. Dr. Ayşe Derya Kahraman:</strong> Girişimcilik Eğitimi ile gençlere somut rehberlik.</li><li><strong>Ali Çelik:</strong> Rami Kütüphanesi Müdürü – Kültürel miras ve okuma kültürü.</li></ul>",
            gorevAlanlar: "<p>YÜZAG Gençlik Komisyonu Başkanımız <strong>Merve Şivetoğlu</strong> ve ekibi (Hasan Said Yusuf, Halit Ersoy, Yunus Emre Muti, Ceren Aslantaş) tarafından organize edilmiştir. Programların açılış konuşmaları Genel Başkanımız <strong>Güleser Topuz</strong> tarafından gerçekleştirilmiştir.</p>",
            iletisim: "<p>Bağlantılar:</p><ul><li><a href='https://www.instagram.com/p/DUL7CYUjJ47/' target='_blank'>Genç Bir Hal Gönderisi</a></li></ul>"
        }
    },
    {
        id: 5,
        title: "Ben’den Biz’e: Ailede Birlik Yolculuğu",
        shortDesc: "Uluslararası Bir Köprü: Diasporadan Anavatana Aile Değerleri",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Tamamlandı",
        date: "01 Kasım 2025",
        location: "Duisburg, Almanya",
        tabs: {
            asamalar: "<p>Modern dünyanın bireyselleşme baskısı, aile kurumunu her geçen gün daha kırılgan hale getirmektedir. YÜZAG ve UEYM (Uluslararası Eğitim ve Yazarlar Merkezi) iş birliğiyle hayata geçirilen “Ben’den Biz’e: Ailede Birlik Yolculuğu” projesi, uluslararası düzeyde aile içi iletişimi güçlendiren bir farkındalık hareketidir.</p><p>Duisburg Gençlik Başkanlığı, iki ülke arasında kültürel bir köprü görevi üstlenmiştir.</p>",
            etkinlikler: "<ul><li><strong>Etkinlik:</strong> 01 Kasım 2025’te Almanya’nın Duisburg kentinde, DİTİB Yıldırım Beyazıt Camii’nde düzenlendi.</li><li><strong>İçerik:</strong> Nesiller arası iletişimin önemi, aile içi dayanışmanın toplumsal huzura etkisi ve göçmen ailelerin karşılaştığı kimlik bunalımlarına dair çözüm önerileri ele alınmıştır.</li></ul>",
            gorevAlanlar: "<p>YÜZAG Genel Başkanımız <strong>Güleser Topuz</strong> ve UEYM Genel Başkanı <strong>Kübra Hülya Arıcı Sorrentino</strong> konuşmacı olarak yer almıştır.</p>",
            iletisim: "<p>Bağlantılar:</p><ul><li><a href='https://www.instagram.com/reel/DQkY9LJDPbq/' target='_blank'>Ailede Birlik Yolculuğu Video</a></li></ul>"
        }
    },
    {
        id: 6,
        title: "Ramazan Sofrasında Umut ve İlham",
        shortDesc: "Kardeşlik Sofrasında 191 Yüreğe Dokunmak",
        image: "https://images.unsplash.com/photo-1541804245600-080838848a60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Tamamlandı",
        date: "Ramazan Ayı",
        location: "İstanbul Geneli",
        tabs: {
            asamalar: "<p>Ramazan ayı, bereketin ve paylaşmanın yanı sıra toplumsal yaraların sarıldığı müstesna bir zaman dilimidir. YÜZAG olarak bu ruhu yaşatmak amacıyla “Birlikte Kardeşçe Elele” ve “Bir İftar, Bin Umut” sloganlarıyla büyük bir iftar organizasyonuna imza attık. Bu buluşma, dezavantajlı ve parçalanmış aile yapısına sahip bireyleri gönüllülerle bir araya getirmiştir.</p>",
            etkinlikler: "<ul><li><strong>İftar Programı:</strong> Geleneksel Ramazan kültürü ile modern psiko-sosyal destek teknikleri harmanlanmıştır. İnteraktif yarışmalar (“En güzel Ramazan manisi”) düzenlenmiştir.</li><li><strong>Destekler:</strong> Ailelere sunulan nevresim takımları ve alışveriş kartları ile Ramazan bereketi somut bir karşılık bulmuştur. 191 kardeşimiz katılmıştır.</li></ul>",
            gorevAlanlar: "<p>Genel Başkanımız <strong>Güleser Topuz</strong> ve Başkan Yardımcımız <strong>Av. Fatma Doydu Aksu</strong> koordinasyonunda gerçekleşmiştir.</p><p>Sosyal Hizmetler, Aile Komisyonu, Yaşlı ve Engelliler Komisyonu, Gençlik Komisyonu üyeleri görev almıştır.</p>",
            iletisim: "<p>Bağlantılar:</p><ul><li><a href='https://www.instagram.com/reel/DVV2QNvjDEe/' target='_blank'>İftar Buluşması Video</a></li></ul>"
        }
    },
    {
        id: 7,
        title: "Nesiller Arası Köprü: Bir Aile – Bir Çınar",
        shortDesc: "Geçmişin bilgeliği ile geleceğin heyecanını aynı sofrada buluşturuyoruz.",
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Devam Ediyor",
        date: "2026",
        location: "Darülaceze / İstanbul",
        tabs: {
            asamalar: "<p>Huzurevlerinde kalan büyüklerimiz çoğu zaman yalnızca bakım hizmeti alıcısı olarak görülmekte; hayat tecrübeleri, anıları ve becerileri genç nesillere aktarılamamaktadır. “Bir Aile – Bir Çınar” projesi, bu klasik anlayışı tersine çeviren, yaşlılarımızı birer “deneyim aktarıcısı” konumuna yükselten özgün bir sosyal inovasyon modelidir.</p><p>YÜZAG ve Darülaceze Başkanlığı iş birliğiyle yürütülen projede, 10 gönüllü aile ile 10 Darülaceze sakini eşleştirilmiştir.</p>",
            etkinlikler: "<ul><li><strong>1. Buluşma:</strong> Darülaceze Okmeydanı Yerleşkesi. Çay-simit toplantısı ile aileler ve büyüklerimiz eşleşmiştir.</li><li><strong>2. Buluşma:</strong> İstanbul Boğaz Gemi Turu. Valide Sultan Gemisi ile kültürel bir anlatı gerçekleştirilmiştir.</li><li><strong>Gelecek Buluşmalar:</strong> El Sanatları ve Dijital Anı Atölyesi, Kültürel Gezi ve Miras Gözlemi, Nesiller Arası Mutfak Atölyesi, Nesiller Arası Kalıcı İzler Kapanış Töreni.</li></ul>",
            gorevAlanlar: "<p>Proje; Genel Başkanımız <strong>Güleser Topuz</strong> himayesinde, Aile Komisyonu Başkanımız <strong>Esma Budak</strong> liderliğinde yürütülmektedir.</p><p>Darülaceze Adına: Darülaceze Başkanı Esra Ceceli İslam, Başkan Yardımcısı Gülten Terzi.</p>",
            iletisim: "<p>Bağlantılar:</p><ul><li><a href='https://www.instagram.com/p/DW4bdZQjBE0/' target='_blank'>Bir Aile Bir Çınar 1</a></li><li><a href='https://www.instagram.com/reel/DWweA4hjG3v/' target='_blank'>Bir Aile Bir Çınar 2</a></li></ul>"
        }
    },
    {
        id: 8,
        title: "Geniş Aile: Köklerden Geleceğe",
        shortDesc: "Hafıza, Kimlik ve Gelecek",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Tamamlandı",
        date: "Aralık 2025 – Temmuz 2026",
        location: "Türkiye / Avrupa Diasporası",
        tabs: {
            asamalar: "<p>Türk toplumunun bin yıllık medeniyet birikiminin en temel yapı taşı olan geniş aile, derin bir dönüşüm geçirmektedir. Bu dönüşüm aidiyet krizi ve değer erozyonu getirmektedir. Proje, geniş aileyi bir aidiyet, güç ve dayanıklılık kaynağı olarak yeniden tanımlamayı hedefleyen disiplinlerarası bir uygulamadır. İstanbul Medeniyet Üniversitesi’nin akademik güvencesiyle yürütülmüştür.</p>",
            etkinlikler: "<ul><li><strong>1. Aşama: Sanatsal İfade (Afiş Yarışması):</strong> Üniversite öğrencilerinin katıldığı ulusal afiş tasarım yarışması. 35 eser sergilenmiştir.</li><li><strong>2. Aşama: Geniş Aile Çalıştayı:</strong> 6 farklı tematik masa etrafında, 20 akademisyen eşliğinde gençler geniş aile kavramını tartışmıştır.</li><li><strong>3. Aşama: Aytepe Gençlik Kampı:</strong> Doğayla iç içe drama, müzik ve sinema atölyeleriyle desteklenen bir kamp yapılmıştır.</li></ul>",
            gorevAlanlar: "<p>Genel Başkan: <strong>Güleser Topuz</strong>. Proje Koordinatörü: <strong>Av. Fatma Doydu Aksu</strong>.</p><p>Düzenleme Kurulu: Prof. Dr. Mahmut Hakkı Akın, Prof. Dr. Ayşe Derya Kahraman, Doç. Dr. Handan Yalvaç Arıcı ve diğer değerli akademisyenler.</p>",
            iletisim: "<p>Bağlantılar:</p><ul><li><a href='https://www.instagram.com/p/DXtTeRfjOPQ/' target='_blank'>Geniş Aile Gönderisi</a></li></ul><p>E-posta: genisaileprojesi@yuzag.org</p>"
        }
    },
    {
        id: 9,
        title: "Anneye Nefes",
        shortDesc: "Tükenmiş Annelere, Kimsesizlere Psiko-Sosyal Bir Soluk",
        image: "https://images.unsplash.com/photo-1544027993-37db48d5f0b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Devam Ediyor",
        date: "2026",
        location: "İstanbul",
        tabs: {
            asamalar: "<p>YÜZAG olarak vizyonumuz, yalnızca maddi yardım ulaştıran klasik bir dernek olmanın ötesine geçmek; manevi değerleri önceleyen samimi köprüler inşa etmektir. “Anneye Nefes” projesi, engelli veya yaşlı yakınına evde bakım veren ve tükenmişlik yaşayan annelerimize psiko-sosyal destek alanları açmaktır. İlk adımımız kimsesiz annelerimize uzanmak olmuştur.</p>",
            etkinlikler: "<ul><li><strong>1. ADIM:</strong> Anneler Günü’nde Semiha Şakir Huzurevi Ziyareti. Gönüllülerimiz huzurevinde büyüklerimizi yalnız bırakmayarak onlara manevi destek sağlamıştır.</li><li><strong>2. ADIM:</strong> “Anneye Nefes” Rehabilitasyon Günü. Kağıthane Belediyesi Zihinsel Engellilere Yönelik Engelliler Gündüz Hizmet Merkezi’nde sanat terapisi (mandala boyama) ve psiko-sosyal destek (rahatlatıcı müzik, sohbet) sağlanmıştır.</li><li><strong>Müjde:</strong> Uzman Özlem Koşal ile 20 Temmuz’da 100-150 kişilik kapsamlı bir program hazırlığındayız.</li></ul>",
            gorevAlanlar: "<p>Genel Başkanımız <strong>Güleser Topuz</strong> ve Aile ve Eğitimden Sorumlu Başkan Yardımcımız <strong>Esma Budak</strong> öncülüğünde, Proje Lideri Suzan Özçelik, Hatice Özarık ve Uzm. Özlem Koşal’ın emekleriyle hayata geçirilmiştir.</p>",
            iletisim: "<p>Bağlantılar:</p><ul><li><a href='https://www.instagram.com/reel/DYNMCTqs8ll/' target='_blank'>Anneye Nefes Video</a></li></ul>"
        }
    },
    {
        id: 10,
        title: "Fatih'te Zarafet ve Etik Rüzgârı",
        shortDesc: "Mahremiyet ve Nezaket Modeli",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Tamamlandı",
        date: "11 Aralık 2025",
        location: "Fatih / İstanbul",
        tabs: {
            asamalar: "<p>YÜZAG Eğitim ve Aile Komisyonu tarafından geliştirilen bu proje, Türkiye’deki eğitim sahasında bir ilk olma niteliği taşıyan özgün bir sosyal inovasyon modelidir. 11 Aralık 2025 tarihli Millî Eğitim Bakanlığı ile YÜZAG arasındaki iş birliği protokolü çerçevesinde hayat bulmuştur.</p><p>Eğitim süreci, bedensel, mekân/eşya, dijital ve duygusal/düşünsel olmak üzere dört temel mahremiyet alanını kapsayan, yoğun bir müfredatla yapılandırılmıştır.</p>",
            etkinlikler: "<ul><li><strong>Dört Temel Alan:</strong> Bedensel Mahremiyet (Öz Saygı), Mekân ve Eşya Mahremiyeti (İzin İstemek), Dijital Mahremiyet (Ekrandaki Zarif İzlerim), Duygusal ve Düşünsel Mahremiyet.</li><li><strong>Yenilikçi Teknikler:</strong> P4C (Çocuklar İçin Felsefe), Yaratıcı Drama, Şarkılı Eğitsel Oyunlar, Materyal Geliştirme (Şeffaf Ev restorasyonu vb.), Aile Katılımı.</li><li><strong>Pilot Uygulama:</strong> Fatih Muallim Naci İlkokulu’nda 4 hafta boyunca başarıyla uygulanmıştır.</li></ul>",
            gorevAlanlar: "<p>İçerik tasarımından materyal geliştirmeye kadar tüm bileşenler YÜZAG Eğitim ve Aileden Sorumlu Genel Başkan Yardımcısı ve yazar <strong>Esma Budak</strong>’a aittir.</p>",
            iletisim: "<p>Bağlantılar:</p><ul><li><a href='https://www.instagram.com/p/DZvcigKjKcO/' target='_blank'>Zarafet ve Etik Gönderisi</a></li></ul>"
        }
    }
];`;

content = content.replace(/const projectsData = \[[\s\S]*?\];/g, newData);

fs.writeFileSync(path, content);
console.log("projectsData successfully updated with exact texts.");
