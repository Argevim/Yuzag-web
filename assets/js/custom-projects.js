const API_BASE_URL = 'https://yuzag-backend.argevim.com.tr';

// 1. Veriler (Projeler, Duyurular, Ekibimiz, Bilgilendiriyor)
let projectsData = [
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
];

let announcementsData = [
    {
        id: 101,
        title: "Yaz Kampı Kayıtları Başladı",
        shortDesc: "Gençlik Gelişim Akademisi kapsamında düzenleyeceğimiz yaz kampı kayıtları tüm hızıyla devam ediyor. Kontenjan dolmadan yerinizi alın.",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Yeni",
        date: "20 Temmuz 2026",
        location: "Kocaeli / Aytepe"
    },
    {
        id: 102,
        title: "Aylık Gönüllü Toplantısı",
        shortDesc: "Aylık olağan gönüllü istişare ve değerlendirme toplantımız bu hafta sonu dernek merkezimizde gerçekleştirilecektir.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Yakında",
        date: "25 Temmuz 2026",
        location: "Dernek Merkezi"
    },
    {
        id: 103,
        title: "Köy Okulları İçin Kitap Kampanyası",
        shortDesc: "Köy okullarına kütüphane kurmak için başlattığımız kitap toplama kampanyasına siz de destek olabilirsiniz.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        status: "Devam Ediyor",
        date: "Ağustos 2026",
        location: "Tüm Türkiye"
    }
];

const teamData = [
    { name: "Güleser Topuz", role: "Genel Başkan", image: "/assets/images/team/guleser_topuz.jpg" },
    { name: "Av. Fatma Doydu Aksu", role: "Genel Başkan Yardımcısı / Proje Koordinatörü", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Esma Budak", role: "Aile ve Eğitimden Sorumlu Bşk. Yrd.", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Meryem Tekbıyık", role: "Sosyal Hizmetler Komisyonu Başkanı", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Tekin Sağlam", role: "Yaşlı ve Engelliler Komisyonu Başkanı", image: "/assets/images/team/bulent_saridiken.jpeg" },
    { name: "Merve Şivetoğlu", role: "Gençlik Komisyonu Başkanı", image: "/assets/images/team/gulsen_kilincer.jpg" },
    { name: "Hilal Azak", role: "Eğitim Komisyonu Başkanı", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Suzan Özçelik", role: "Proje Lideri (Anneye Nefes)", image: "/assets/images/team/tuba_gumus.jpeg" }
];

const bilgilendiriyorData = [
    {
        id: 201,
        title: "YÜZAG Hatıra Ormanları Fidan Dikim Etkinliği",
        desc: "Geleceğe nefes olmak adına gerçekleştirdiğimiz fidan dikim etkinliğinin özet görüntüleri.",
        date: "15 Aralık 2026",
        youtubeId: "dQw4w9WgXcQ",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 202,
        title: "İyilikte Hep Birlikte: Dağıtım Çalışmalarımız",
        desc: "Ramazan ayında ihtiyaç sahibi ailelerimize ulaştırdığımız desteklerin saha yansımaları.",
        date: "10 Aralık 2025",
        youtubeId: "jNQXAC9IVRw",
        videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    {
        id: 203,
        title: "Akran Nezaketi Eğitim Modeli",
        desc: "Zorbalığa karşı geliştirdiğimiz akran nezaketi drama eğitiminin okullardaki uygulaması.",
        date: "25 Kasım 2025",
        youtubeId: "9bZkp7q19f0",
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
    }
];

let projectsSwiperInstance = null;
let announcementsSwiperInstance = null;

function createSlideHTML(data, type) {
    const badgeColor = type === 'announcement' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(20, 184, 166, 0.9)';
    const btnColor = type === 'announcement' ? '#ef4444' : '#14b8a6';
    const btnText = type === 'announcement' ? 'Duyuru Detayı' : 'Detayları İncele';
    return `
        <div class="swiper-slide">
            <div class="custom-project-card" data-id="${data.id}" onclick="window.openDetail(${data.id}, '${type}')">
                <div class="custom-project-badge" style="background: ${badgeColor};">${data.status}</div>
                <div class="custom-project-img-wrapper">
                    <img src="${data.image}" alt="${data.title}" class="custom-project-img">
                </div>
                <div class="custom-project-content">
                    <h3 class="custom-project-title">${data.title}</h3>
                    <p class="custom-project-desc">${data.shortDesc}</p>
                    <span class="custom-project-btn" style="color: ${btnColor};">
                        ${btnText} <i class="bi bi-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function createVideoSlideHTML(data) {
    const thumbUrl = `https://img.youtube.com/vi/${data.youtubeId}/hqdefault.jpg`;
    return `
        <div class="swiper-slide">
            <div class="custom-project-card" onclick="window.navigateTo('bilgilendiriyor')">
                <div class="custom-project-badge" style="background: rgba(239, 68, 68, 0.9);"><i class="bi bi-play-fill"></i> Video</div>
                <div class="custom-project-img-wrapper">
                    <img src="${thumbUrl}" alt="${data.title}" class="custom-project-img">
                    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:white; font-size:3.5rem; z-index:3; text-shadow:0 4px 15px rgba(0,0,0,0.6);">
                        <i class="bi bi-play-circle-fill"></i>
                    </div>
                </div>
                <div class="custom-project-content">
                    <h3 class="custom-project-title">${data.title}</h3>
                    <p class="custom-project-desc">${data.desc}</p>
                    <span class="custom-project-btn" style="color: #ef4444;">
                        Hemen İzle <i class="bi bi-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    `;
}

// 2. Özel Görünümler (Detail, Team, Bilgilendiriyor)
function injectCustomViews() {
    if (document.getElementById('custom-project-detail-view')) return;

    const toastContainer = `<div id="custom-toast-container"></div>`;

    const detailHTML = `
        <div id="custom-project-detail-view" class="custom-detail-page" style="display:none; background: #fff; min-height: 100vh; padding-bottom: 80px;">
            <div class="detail-header-bg" id="detail-bg-img">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title" id="detail-title">Başlık</h1>
                    <div class="detail-meta">
                        <span><i class="bi bi-calendar-event"></i> <span id="detail-date">Tarih</span></span>
                        <span><i class="bi bi-geo-alt"></i> <span id="detail-location">Konum</span></span>
                        <span><i class="bi bi-tag"></i> <span id="detail-status">Durum</span></span>
                    </div>
                </div>
            </div>
            
            <div class="container detail-body">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="detail-content-box" id="project-tabs-container">
                            <ul class="nav custom-nav-tabs" id="projectTab" role="tablist">
                                <li class="nav-item"><button class="nav-link active" id="asamalar-tab" data-bs-toggle="tab" data-bs-target="#asamalar" type="button">Aşamalar</button></li>
                                <li class="nav-item"><button class="nav-link" id="etkinlikler-tab" data-bs-toggle="tab" data-bs-target="#etkinlikler" type="button">Etkinlikler</button></li>
                                <li class="nav-item"><button class="nav-link" id="gorev-tab" data-bs-toggle="tab" data-bs-target="#gorev" type="button">Görev Alanlar</button></li>
                                <li class="nav-item"><button class="nav-link" id="iletisim-tab" data-bs-toggle="tab" data-bs-target="#iletisim" type="button">İletişim</button></li>
                            </ul>
                            <div class="tab-content custom-tab-content" id="projectTabContent">
                                <div class="tab-pane fade show active detail-text" id="asamalar"></div>
                                <div class="tab-pane fade detail-text" id="etkinlikler"></div>
                                <div class="tab-pane fade detail-text" id="gorev"></div>
                                <div class="tab-pane fade detail-text" id="iletisim"></div>
                            </div>
                        </div>
                        
                        <div class="detail-content-box" id="announcement-content-container" style="display:none; padding:40px;">
                            <div class="detail-text" id="announcement-desc"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4 mt-lg-0">
                        <div class="detail-sidebar">
                            <h4 class="sidebar-title">Özet Bilgiler</h4>
                            <div class="sidebar-info-item"><h6>Durum</h6><p id="sidebar-status"></p></div>
                            <div class="sidebar-info-item"><h6>Tarih / Süreç</h6><p id="sidebar-date"></p></div>
                            <div class="sidebar-info-item"><h6>Bölge / Konum</h6><p id="sidebar-location"></p></div>
                            <button class="btn-participate" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('gonullu-ol');">Destek Ol / Katıl</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="custom-team-detail-view" class="custom-detail-page" style="display:none; background: #f0fdfa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Gönüllü Yönetim Ekibimiz</h1>
                    <div class="detail-meta">
                        <span>YÜZAG'ın gücü, özverili ve vizyoner ekibinden gelir.</span>
                    </div>
                </div>
            </div>
            
            <div class="container" style="padding: 40px 0;">
                <!-- Başkanın Mesajı Buraya Taşınacak -->
                <div id="team-president-message-container" style="margin-bottom: 50px;"></div>
                
                <h2 class="custom-section-title" style="margin-bottom: 30px;">Yönetim Kadromuz</h2>
                <div class="team-grid" id="full-team-grid"></div>

                <!-- Organizasyon Şeması Şimdilik Yoruma Alındı
                <div id="team-org-chart-container" style="margin-top: 60px;">
                    <h2 class="custom-section-title" style="margin-bottom: 30px; text-align:center;">Organizasyon Şeması</h2>
                    <div class="org-chart-wrapper">
                        <div class="org-tree">
                            <div class="org-node main-node">
                                <h4>Genel Başkan</h4>
                                <p>Güleser Topuz</p>
                            </div>
                            <div class="org-children">
                                <div class="org-tree">
                                    <div class="org-node">
                                        <h4>Başkan Yardımcısı / Projeler</h4>
                                        <p>Av. Fatma Doydu Aksu</p>
                                    </div>
                                </div>
                                <div class="org-tree">
                                    <div class="org-node">
                                        <h4>Başkan Yardımcısı / Aile & Eğitim</h4>
                                        <p>Esma Budak</p>
                                    </div>
                                    <div class="org-children">
                                        <div class="org-node"><h4>Sosyal Hizmetler K.</h4><p>Meryem Tekbıyık</p></div>
                                        <div class="org-node"><h4>Yaşlı ve Engelliler K.</h4><p>Tekin Sağlam</p></div>
                                        <div class="org-node"><h4>Gençlik Komisyonu</h4><p>Merve Şivetoğlu</p></div>
                                        <div class="org-node"><h4>Eğitim Komisyonu</h4><p>Hilal Azak</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                -->
            </div>
        </div>

        <div id="custom-bilgilendiriyor-view" class="custom-detail-page" style="display:none; background: #fff; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">YÜZAG Bilgilendiriyor</h1>
                    <div class="detail-meta">
                        <span>Saha çalışmalarımız ve eğitim içeriklerimizi videolar aracılığıyla keşfedin.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4" id="video-grid-container"></div>
            </div>
        </div>

        <div id="custom-sosyal-medya-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Sosyal Medya Hesaplarımız</h1>
                    <div class="detail-meta">
                        <span>Bizi dijital dünyada takip edin, iyiliğin yayılmasına destek olun.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4">
                    <!-- Instagram -->
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="font-size:2rem; font-weight:700; color:#E1306C; margin-bottom:15px;"><i class="bi bi-instagram me-2"></i> Instagram</h2>
                                <p style="font-size:1.1rem; color:#4b5563; margin-bottom:20px; flex-grow:1;">Güncel etkinlik fotoğraflarımız, saha çalışmalarımızdan kısa videolar ve duyurularımız için bizi Instagram'da takip edin.</p>
                                <a href="https://www.instagram.com/yuzagorgtr/?hl=tr" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background:#E1306C; border:none; padding:10px 25px; border-radius:30px; font-weight:600; align-self: flex-start;">Takip Et <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- Twitter / X -->
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="font-size:2rem; font-weight:700; color:#1DA1F2; margin-bottom:15px;"><i class="bi bi-twitter-x me-2"></i> Twitter / X</h2>
                                <p style="font-size:1.1rem; color:#4b5563; margin-bottom:20px; flex-grow:1;">Basın açıklamalarımız, anlık bilgilendirmelerimiz, gündeme dair duruşumuz ve fikir yazılarımız için resmi X hesabımızı takip edebilirsiniz.</p>
                                <a href="https://x.com/yuzagorgtr" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background:#1DA1F2; border:none; padding:10px 25px; border-radius:30px; font-weight:600; align-self: flex-start;">Takip Et <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- Facebook -->
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="font-size:2rem; font-weight:700; color:#1877F2; margin-bottom:15px;"><i class="bi bi-facebook me-2"></i> Facebook</h2>
                                <p style="font-size:1.1rem; color:#4b5563; margin-bottom:20px; flex-grow:1;">Faaliyetlerimizi, projelerimizi ve güncel duyurularımızı Facebook sayfamız üzerinden takip edebilirsiniz.</p>
                                <a href="https://www.facebook.com/yuzagorgtr" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background:#1877F2; border:none; padding:10px 25px; border-radius:30px; font-weight:600; align-self: flex-start;">Takip Et <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="custom-all-projects-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Gönüllü Projelerimiz</h1>
                    <div class="detail-meta">
                        <span>Topluma dokunan tüm projelerimizi buradan inceleyebilirsiniz.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4" id="all-projects-grid"></div>
            </div>
        </div>

        <div id="custom-all-announcements-view" class="custom-detail-page" style="display:none; background: #fff; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Tüm Duyurular</h1>
                    <div class="detail-meta">
                        <span>Güncel haberler ve yaklaşan etkinliklerimiz.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4" id="all-announcements-grid"></div>
            </div>
        </div>


        <!-- Bağış Yap Sayfası -->
        <div id="custom-bagis-yap-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'); background-color: #14b8a6;">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="header-overlay"></div>
            </div>
            
            <div class="container" style="margin-top: -100px; padding-bottom: 80px; position: relative; z-index: 10;">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card shadow-sm border-0" style="border-radius: 20px; padding: 40px;">
                            <h1 class="detail-title text-center mb-4" style="color: #f59e0b;">Bağış Yap</h1>
                            <p class="text-center mb-5" style="font-size: 1.1rem; color: #4b5563;">
                                Yüzyılın Aile ve Gençlik Hareketi Derneği faaliyetlerine destek olmak için aşağıdaki banka hesap bilgilerimizi kullanabilirsiniz.
                            </p>
                            
                            <div class="bank-details" style="background: #f1f5f9; padding: 30px; border-radius: 15px; margin-bottom: 20px;">
                                <h4 style="color: #1e293b; font-weight: 700; margin-bottom: 10px;">Banka Hesap Bilgileri</h4>
                                <div style="margin-bottom: 25px;">
                                    <strong style="color: #64748b; font-size: 0.9rem; text-transform: uppercase;">Hesap Adı:</strong><br>
                                    <span style="font-size: 1.1rem; color: #0f172a; font-weight: 600;">Yüzyılın Aile ve Gençlik Hareketi Derneği</span>
                                </div>
                                
                                <div class="iban-group" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #cbd5e1;">
                                    <strong style="color: #14b8a6; font-size: 1rem;">Türk Lirası IBAN:</strong><br>
                                    <span style="font-size: 1.2rem; color: #0f172a; font-family: monospace; font-weight: 600;">TR39 0001 0014 8598 1000 2950 01</span>
                                </div>
                                
                                <div class="iban-group" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #cbd5e1;">
                                    <strong style="color: #3b82f6; font-size: 1rem;">Euro IBAN:</strong><br>
                                    <span style="font-size: 1.2rem; color: #0f172a; font-family: monospace; font-weight: 600;">TR12 0001 0014 8598 1000 2950 02</span>
                                </div>
                                
                                <div class="iban-group">
                                    <strong style="color: #10b981; font-size: 1rem;">Dolar IBAN:</strong><br>
                                    <span style="font-size: 1.2rem; color: #0f172a; font-family: monospace; font-weight: 600;">TR82 0001 0014 8598 1000 2950 03</span>
                                </div>
                            </div>
                            
                            <div class="alert alert-info text-center" style="border-radius: 10px; background-color: #e0f2fe; border: none; color: #0369a1;">
                                <i class="bi bi-info-circle-fill me-2"></i> Lütfen bağış yaparken açıklama kısmına adınızı, soyadınızı ve iletişim numaranızı yazmayı unutmayınız.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gönüllü Ol Form Sayfası -->
        <div id="custom-gonullu-ol-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Gönüllü Ol</h1>
                    <div class="detail-meta">
                        <span>YÜZAG ailesine katılarak geleceğe umut olun.</span>
                    </div>
                </div>
            </div>
            
            <div class="container custom-form-container">
                <div class="form-card">
                    <div class="form-card-header">
                        <h2 class="form-card-title">YÜZAG Gönüllü Başvuru Formu</h2>
                        <p class="form-card-subtitle">Siz de YÜZAG Gönüllüsü Olabilirsiniz. Lütfen aşağıdaki formu doldurun:</p>
                    </div>
                    
                    <form id="gonullu-form" onsubmit="window.handleFormSubmit(event, 'gonullu')">
                        <!-- Kişisel Bilgiler -->
                        <h3 class="form-section-title">Kişisel Bilgiler</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">TC Kimlik Numaranız <span class="required">*</span></label>
                                <input type="text" name="tc" class="form-control-custom" placeholder="11 Haneli TC Kimlik Numaranız" maxlength="11" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Ad Soyadınız <span class="required">*</span></label>
                                <input type="text" name="adSoyad" class="form-control-custom" placeholder="Adınız ve Soyadınız" required>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Doğum Tarihiniz <span class="required">*</span></label>
                                <input type="date" name="dogumTarihi" class="form-control-custom" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Aktif öğrenci misiniz? <span class="required">*</span></label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Evet" class="form-radio-input-custom" required>
                                        Evet
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Hayır" class="form-radio-input-custom" required>
                                        Hayır
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Okumakta olduğunuz / en son mezun olduğunuz okul <span class="required">*</span></label>
                                <input type="text" name="okul" class="form-control-custom" placeholder="Okul Adı ve Bölümünüz" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Öğrenim Durumunuz <span class="required">*</span></label>
                                <select name="ogrenimDurumu" class="form-control-custom" required style="appearance: auto;">
                                    <option value="" disabled selected>Seçiniz</option>
                                    <option value="İlköğretim">İlköğretim</option>
                                    <option value="Lise">Lise</option>
                                    <option value="Ön Lisans">Ön Lisans</option>
                                    <option value="Lisans">Lisans</option>
                                    <option value="Yüksek Lisans">Yüksek Lisans</option>
                                    <option value="Doktora">Doktora</option>
                                </select>
                            </div>
                        </div>

                        <!-- Dil Bilgileri -->
                        <h3 class="form-section-title">Yabancı Dil Bilgileri</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">1. Yabancı Diliniz</label>
                                <input type="text" name="dil1" class="form-control-custom" placeholder="Örn: İngilizce">
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Yabancı Dil Seviyeniz</label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye1" value="Düşük" class="form-radio-input-custom">
                                        Düşük
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye1" value="Orta" class="form-radio-input-custom">
                                        Orta
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye1" value="İyi" class="form-radio-input-custom">
                                        İyi
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">2. Yabancı Diliniz</label>
                                <input type="text" name="dil2" class="form-control-custom" placeholder="Örn: Almanca">
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Yabancı Dil Seviyeniz</label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye2" value="Düşük" class="form-radio-input-custom">
                                        Düşük
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye2" value="Orta" class="form-radio-input-custom">
                                        Orta
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye2" value="İyi" class="form-radio-input-custom">
                                        İyi
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- İletişim Bilgileri -->
                        <h3 class="form-section-title">İletişim Bilgileri</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Cep Numaranız <span class="required">*</span></label>
                                <input type="tel" name="tel" class="form-control-custom" placeholder="05xx xxx xx xx" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">E-Postanız <span class="required">*</span></label>
                                <input type="email" name="email" class="form-control-custom" placeholder="Örn: isim@eposta.com" required>
                            </div>
                        </div>

                        <div class="form-group-custom">
                            <label class="form-label-custom">Yaşadığınız İl <span class="required">*</span></label>
                            <input type="text" name="il" class="form-control-custom" placeholder="Örn: İstanbul" required>
                        </div>

                        <!-- Referanslar -->
                        <h3 class="form-section-title">Referans Bilgileri</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">1. Referans Adı Soyadı <span class="required">*</span></label>
                                <input type="text" name="refAd1" class="form-control-custom" placeholder="Adı ve Soyadı" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Telefon Numarası <span class="required">*</span></label>
                                <input type="tel" name="refTel1" class="form-control-custom" placeholder="05xx xxx xx xx" required>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">2. Referans Adı Soyadı</label>
                                <input type="text" name="refAd2" class="form-control-custom" placeholder="Adı ve Soyadı">
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Telefon Numarası</label>
                                <input type="tel" name="refTel2" class="form-control-custom" placeholder="05xx xxx xx xx">
                            </div>
                        </div>

                        <!-- Faaliyet & Motivasyon -->
                        <h3 class="form-section-title">Faaliyet Alanları & Motivasyon</h3>
                        
                        <div class="form-group-custom">
                            <label class="form-label-custom">YÜZAG’ın hangi alandaki faaliyetleri sizin için önceliklidir? <span class="required">*</span></label>
                            <div>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Eğitim Faaliyetleri" class="form-check-input-custom">
                                    <span class="form-check-label-text">Eğitim Faaliyetleri</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Saha Çalışmaları" class="form-check-input-custom">
                                    <span class="form-check-label-text">Saha Çalışmaları</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Sosyal Sorumluluk Projeleri" class="form-check-input-custom">
                                    <span class="form-check-label-text">Sosyal Sorumluluk Projeleri</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Tahlil ve Kritik Etkinlikleri" class="form-check-input-custom">
                                    <span class="form-check-label-text">Tahlil ve Kritik Etkinlikleri</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Akademik Çalışmalar" class="form-check-input-custom">
                                    <span class="form-check-label-text">Akademik Çalışmalar</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-group-custom">
                            <label class="form-label-custom">YÜZAG gönüllüsü olma motivasyonunuz nedir? <span class="required">*</span></label>
                            <textarea name="motivasyon" class="form-control-custom" rows="4" placeholder="Kendinizi ve katılma motivasyonunuzu kısaca açıklayınız..." required></textarea>
                        </div>

                        <!-- KVKK -->
                        <h3 class="form-section-title">Yasal Onaylar</h3>
                        
                        <div class="form-group-custom">
                            <label class="form-check-custom">
                                <input type="checkbox" name="kvkk" class="form-check-input-custom" required>
                                <span class="form-check-label-text"><a href="#" onclick="event.preventDefault(); window.showKvkkText();">YÜZAG Aydınlatma Metnini</a> okudum ve onaylıyorum. <span class="required">*</span></span>
                            </label>
                            
                            <label class="form-check-custom">
                                <input type="checkbox" name="referansBeyan" class="form-check-input-custom" required>
                                <span class="form-check-label-text">Kişisel Verilerin Korunması Kanunu gereğince yukarıda belirtmiş olduğum “Referans” bilgilerini, ismi geçen şahsın rızası dâhilinde verdiğimi beyan ederim. <span class="required">*</span></span>
                            </label>
                        </div>

                        <button type="submit" class="form-btn-submit" id="gonullu-submit-btn">Başvuruyu Gönder</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Genç Gönüllü Ol Form Sayfası -->
        <div id="custom-genc-gonullu-ol-view" class="custom-detail-page" style="display:none; background: #f0fdfa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Genç Gönüllü Ol</h1>
                    <div class="detail-meta">
                        <span>Genç YÜZAG çatısı altında topluma değer katın.</span>
                    </div>
                </div>
            </div>
            
            <div class="container custom-form-container">
                <div class="form-card" style="border-color: rgba(20, 184, 166, 0.15);">
                    <div class="form-card-header">
                        <h2 class="form-card-title">Genç YÜZAG Gönüllü Başvuru Formu</h2>
                        <p class="form-card-subtitle">Siz de Genç YÜZAG Gönüllüsü Olabilirsiniz. Lütfen aşağıdaki formu doldurun:</p>
                    </div>
                    
                    <form id="genc-gonullu-form" onsubmit="window.handleFormSubmit(event, 'genc-gonullu')">
                        <!-- Kişisel Bilgiler -->
                        <h3 class="form-section-title">Kişisel Bilgiler</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">TC Kimlik Numaranız <span class="required">*</span></label>
                                <input type="text" name="tc" class="form-control-custom" placeholder="11 Haneli TC Kimlik Numaranız" maxlength="11" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Ad Soyadınız <span class="required">*</span></label>
                                <input type="text" name="adSoyad" class="form-control-custom" placeholder="Adınız ve Soyadınız" required>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Doğum Tarihiniz <span class="required">*</span></label>
                                <input type="date" name="dogumTarihi" class="form-control-custom" required>
                                <div class="form-alert-info">
                                    <i class="bi bi-info-circle-fill"></i> Başvurular 18-29 yaş arası için geçerlidir.
                                </div>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Aktif öğrenci misiniz? <span class="required">*</span></label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Evet" class="form-radio-input-custom" required>
                                        Evet
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Hayır" class="form-radio-input-custom" required>
                                        Hayır
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Okumakta olduğunuz / en son mezun olduğunuz okul <span class="required">*</span></label>
                                <input type="text" name="okul" class="form-control-custom" placeholder="Okul Adı ve Bölümünüz" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Öğrenim Durumunuz <span class="required">*</span></label>
                                <select name="ogrenimDurumu" class="form-control-custom" required style="appearance: auto;">
                                    <option value="" disabled selected>Seçiniz</option>
                                    <option value="İlköğretim">İlköğretim</option>
                                    <option value="Lise">Lise</option>
                                    <option value="Ön Lisans">Ön Lisans</option>
                                    <option value="Lisans">Lisans</option>
                                    <option value="Yüksek Lisans">Yüksek Lisans</option>
                                    <option value="Doktora">Doktora</option>
                                </select>
                            </div>
                        </div>

                        <!-- Dil Bilgileri -->
                        <h3 class="form-section-title">Yabancı Dil Bilgileri</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">1. Yabancı Diliniz</label>
                                <input type="text" name="dil1" class="form-control-custom" placeholder="Örn: İngilizce">
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Yabancı Dil Seviyeniz</label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye1" value="Düşük" class="form-radio-input-custom">
                                        Düşük
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye1" value="Orta" class="form-radio-input-custom">
                                        Orta
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye1" value="İyi" class="form-radio-input-custom">
                                        İyi
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">2. Yabancı Diliniz</label>
                                <input type="text" name="dil2" class="form-control-custom" placeholder="Örn: Almanca">
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Yabancı Dil Seviyeniz</label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye2" value="Düşük" class="form-radio-input-custom">
                                        Düşük
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye2" value="Orta" class="form-radio-input-custom">
                                        Orta
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="dilSeviye2" value="İyi" class="form-radio-input-custom">
                                        İyi
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- İletişim Bilgileri -->
                        <h3 class="form-section-title">İletişim Bilgileri</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Cep Numaranız <span class="required">*</span></label>
                                <input type="tel" name="tel" class="form-control-custom" placeholder="05xx xxx xx xx" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">E-Postanız <span class="required">*</span></label>
                                <input type="email" name="email" class="form-control-custom" placeholder="Örn: isim@eposta.com" required>
                            </div>
                        </div>

                        <div class="form-group-custom">
                            <label class="form-label-custom">Yaşadığınız İl <span class="required">*</span></label>
                            <input type="text" name="il" class="form-control-custom" placeholder="Örn: İstanbul" required>
                        </div>

                        <!-- Referanslar -->
                        <h3 class="form-section-title">Referans Bilgileri</h3>
                        
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">1. Referans Adı Soyadı <span class="required">*</span></label>
                                <input type="text" name="refAd1" class="form-control-custom" placeholder="Adı ve Soyadı" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Telefon Numarası <span class="required">*</span></label>
                                <input type="tel" name="refTel1" class="form-control-custom" placeholder="05xx xxx xx xx" required>
                            </div>
                        </div>

                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">2. Referans Adı Soyadı</label>
                                <input type="text" name="refAd2" class="form-control-custom" placeholder="Adı ve Soyadı">
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Telefon Numarası</label>
                                <input type="tel" name="refTel2" class="form-control-custom" placeholder="05xx xxx xx xx">
                            </div>
                        </div>

                        <!-- Faaliyet & Motivasyon -->
                        <h3 class="form-section-title">Faaliyet Alanları & Motivasyon</h3>
                        
                        <div class="form-group-custom">
                            <label class="form-label-custom">Genç YÜZAG’ın hangi alandaki faaliyetleri sizin için önceliklidir? <span class="required">*</span></label>
                            <div>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Eğitim Faaliyetleri" class="form-check-input-custom">
                                    <span class="form-check-label-text">Eğitim Faaliyetleri</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Saha Çalışmaları" class="form-check-input-custom">
                                    <span class="form-check-label-text">Saha Çalışmaları</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Sosyal Sorumluluk Projeleri" class="form-check-input-custom">
                                    <span class="form-check-label-text">Sosyal Sorumluluk Projeleri</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Tahlil ve Kritik Etkinlikleri" class="form-check-input-custom">
                                    <span class="form-check-label-text">Tahlil ve Kritik Etkinlikleri</span>
                                </label>
                                <label class="form-check-custom">
                                    <input type="checkbox" name="faaliyet" value="Akademik Çalışmalar" class="form-check-input-custom">
                                    <span class="form-check-label-text">Akademik Çalışmalar</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-group-custom">
                            <label class="form-label-custom">Genç YÜZAG gönüllüsü olma motivasyonunuz nedir? <span class="required">*</span></label>
                            <textarea name="motivasyon" class="form-control-custom" rows="4" placeholder="Kendinizi ve katılma motivasyonunuzu kısaca açıklayınız..." required></textarea>
                        </div>

                        <!-- KVKK -->
                        <h3 class="form-section-title">Yasal Onaylar</h3>
                        
                        <div class="form-group-custom">
                            <label class="form-check-custom">
                                <input type="checkbox" name="kvkk" class="form-check-input-custom" required>
                                <span class="form-check-label-text"><a href="#" onclick="event.preventDefault(); window.showKvkkText();">YÜZAG Aydınlatma Metnini</a> okudum ve onaylıyorum. <span class="required">*</span></span>
                            </label>
                            
                            <label class="form-check-custom">
                                <input type="checkbox" name="referansBeyan" class="form-check-input-custom" required>
                                <span class="form-check-label-text">Kişisel Verilerin Korunması Kanunu gereğince yukarıda belirtmiş olduğum “Referans” bilgilerini, ismi geçen şahsın rızası dâhilinde verdiğimi beyan ederim. <span class="required">*</span></span>
                            </label>
                        </div>

                        <button type="submit" class="form-btn-submit" id="genc-gonullu-submit-btn">Başvuruyu Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Detay görünümlerini #root'un içine, footer'dan hemen önce ekle (Eğer yoksa body'ye)
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
        const footer = rootDiv.querySelector('footer');
        if (footer) footer.insertAdjacentHTML('beforebegin', toastContainer + detailHTML);
        else rootDiv.insertAdjacentHTML('beforeend', toastContainer + detailHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', toastContainer + detailHTML);
    }
}

function injectSections() {
    if (document.getElementById('custom-projects-section')) return;

    let announcementSlidesHTML = announcementsData.map(a => createSlideHTML(a, 'announcement')).join('');
    const announcementsHTML = `
        <section id="custom-announcements-section" class="custom-announcements-section">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">Duyurular</h2>
                    <div class="custom-filters" id="announcement-filters">
                        <button class="filter-btn active" onclick="window.filterAnnouncements('Tümü', this)">Tümü</button>
                        <button class="filter-btn" onclick="window.filterAnnouncements('Yeni', this)">Yeni</button>
                        <button class="filter-btn" onclick="window.filterAnnouncements('Yakında', this)">Yakında</button>
                    </div>
                    <a href="#" class="btn-see-all">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="swiper announcements-swiper">
                    <div class="swiper-wrapper" id="announcements-swiper-wrapper">
                        ${announcementSlidesHTML}
                    </div>
                    <div class="swiper-pagination announcements-pagination"></div>
                    <div class="swiper-button-next announcements-next"></div>
                    <div class="swiper-button-prev announcements-prev"></div>
                </div>
            </div>
        </section>
    `;

    let projectSlidesHTML = projectsData.map(p => createSlideHTML(p, 'project')).join('');
    const projectsHTML = `
        <section id="custom-projects-section" class="custom-projects-section">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">Gönüllü Projelerimiz</h2>
                    <div class="custom-filters" id="project-filters">
                        <button class="filter-btn active" onclick="window.filterProjects('Tümü', this)">Tümü</button>
                        <button class="filter-btn" onclick="window.filterProjects('Devam Ediyor', this)">Devam Edenler</button>
                        <button class="filter-btn" onclick="window.filterProjects('Tamamlandı', this)">Tamamlananlar</button>
                    </div>
                    <a href="#" class="btn-see-all" onclick="event.preventDefault(); window.navigateTo('projeler');">Tümünü Gör <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="swiper projects-swiper">
                    <div class="swiper-wrapper" id="projects-swiper-wrapper">
                        ${projectSlidesHTML}
                    </div>
                    <div class="swiper-pagination projects-pagination"></div>
                    <div class="swiper-button-next projects-next"></div>
                    <div class="swiper-button-prev projects-prev"></div>
                </div>
            </div>
        </section>
    `;

    let teamCardsHTML = teamData.slice(0, 4).map(t => `
        <div class="team-card text-center" style="background:#fff; padding:25px 20px; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.05); border-top: 4px solid #14b8a6;">
            <div class="team-info">
                <h3 class="team-name" style="font-weight:700; color:#0f172a; font-size:1.1rem; margin-bottom:6px;">${t.name}</h3>
                <p class="team-role" style="color:#14b8a6; font-weight:600; font-size:0.88rem; margin:0;">${t.role}</p>
            </div>
        </div>
    `).join('');

    const teamHTML = `
        <section id="custom-team-section" class="custom-team-section">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">Yönetim ve Komisyonlarımız</h2>
                    <a href="#" class="btn-see-all" onclick="event.preventDefault(); window.navigateTo('ekibimiz');">Ekibimizi ve Organizasyon Şemasını İncele <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="team-grid">${teamCardsHTML}</div>
            </div>
        </section>
    `;

    // YÜZAG Bilgilendiriyor (YouTube videosu şu anlık olmadığı için geçici olarak yorum satırında)
    /*
    let videoSlidesHTML = bilgilendiriyorData.map(v => createVideoSlideHTML(v)).join('');
    const bilgilendiriyorHTML = `
        <section id="custom-bilgilendiriyor-section" class="custom-announcements-section" style="background: #fff;">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">YÜZAG Bilgilendiriyor</h2>
                    <a href="#" class="btn-see-all" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor');">Tüm Videoları Gör <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="swiper bilgilendiriyor-swiper">
                    <div class="swiper-wrapper">
                        ${videoSlidesHTML}
                    </div>
                    <div class="swiper-pagination bilgilendiriyor-pagination"></div>
                    <div class="swiper-button-next bilgilendiriyor-next"></div>
                    <div class="swiper-button-prev bilgilendiriyor-prev"></div>
                </div>
            </div>
        </section>
    `;
    */

    const fullHTML = announcementsHTML + projectsHTML + teamHTML;

    // "Başkanın Mesajı" ve "Afiş Yarışması" kısımlarını bulma ve taşıma/gizleme işlemleri
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    headings.forEach(h => {
        const text = h.innerText.trim().toLowerCase();
        const section = h.closest('section') || h.parentElement.parentElement;

        if (!section || section.classList.contains('custom-team-section')) return;

        // "Afiş Yarışması" veya eski "Duyurular" tamamen gizlenir
        if (text.includes('afiş yarışması') || text.includes('afis yarismasi') || text.includes('duyuru')) {
            section.style.display = 'none';
        }

        // "Başkanın Mesajı" bulunduysa Yönetim sayfasına taşı ve anasayfadan gizle
        if (text.includes('başkan') || text.includes('baskan') || text.includes('mesaj') || text.includes('davet')) {
            const teamPresidentContainer = document.getElementById('team-president-message-container');
            if (teamPresidentContainer && !teamPresidentContainer.innerHTML.includes(text)) {
                // Sadece HTML kopyasını taşı
                teamPresidentContainer.innerHTML = section.outerHTML;
            }
            section.style.display = 'none'; // anasayfada gizle
        }
    });

    const rootDiv = document.getElementById('root');
    if (rootDiv) {
        // İletişim bölümünün en altta kalması için eklenecek yeri bulma
        let insertTarget = null;

        // 1. "İletişim" veya "Bize Ulaşın" başlığını içeren section'ı bul
        const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        allHeadings.forEach(h => {
            const txt = h.innerText.trim().toLowerCase();
            if ((txt === 'iletişim' || txt === 'iletisim' || txt.includes('bize ulaşın') || txt.includes('bizimle iletişime geçin')) && !h.classList.contains('custom-section-title')) {
                const sec = h.closest('section');
                if (sec) insertTarget = sec;
            }
        });

        // 2. Bulunamazsa içinde form olan section'ı bul
        if (!insertTarget) {
            const form = document.querySelector('form');
            if (form) insertTarget = form.closest('section');
        }

        // 3. O da bulunamazsa Footer'ı bul
        if (!insertTarget) {
            insertTarget = rootDiv.querySelector('footer');
        }

        // Seçilen hedefin (İletişim veya Footer) hemen üstüne ekle
        if (insertTarget) {
            insertTarget.insertAdjacentHTML('beforebegin', fullHTML);
        } else {
            // Son çare: en sona ekle
            if (rootDiv.children[0]) rootDiv.children[0].insertAdjacentHTML('beforeend', fullHTML);
            else rootDiv.insertAdjacentHTML('beforeend', fullHTML);
        }

        setTimeout(() => { initSwipers(); addNavbarLink(); }, 100);
    }
}

// Navbara Ekibimiz Linki Ekleme
function closeMobileMenu() {
    const mobileCollapse = document.querySelector('.navbar-collapse.show, .offcanvas.show');
    if (mobileCollapse) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const bs = bootstrap.Collapse.getInstance(mobileCollapse);
            if (bs) bs.hide();
            else mobileCollapse.classList.remove('show');
        } else {
            mobileCollapse.classList.remove('show');
        }
    }
    // Reset hamburger icon state
    document.querySelectorAll('.navbar-toggler, .mobile-nav-toggle').forEach(btn => {
        btn.classList.add('collapsed');
        btn.setAttribute('aria-expanded', 'false');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = 'bi bi-list';
        }
    });
}

// Navbara Ekibimiz Linki Ekleme
function addNavbarLink() {
    let projectsDropdown = projectsData.map(p => `<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.openDetail(${p.id}, 'project')">${p.title}</a></li>`).join('');
    let announcementsDropdown = announcementsData.map(a => `<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.openDetail(${a.id}, 'announcement')">${a.title}</a></li>`).join('');
    let bilgiDropdown = bilgilendiriyorData.map(b => `<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('bilgilendiriyor')">${b.title}</a></li>`).join('');

    const navbars = document.querySelectorAll('.navbar-nav, .nav-menu, ul.nav:not(.custom-nav-tabs)');
    navbars.forEach(nav => {
        if (!nav.dataset.customLinksAdded) {
            nav.dataset.customLinksAdded = 'true';

            nav.innerHTML = `
                <li class="nav-item"><a class="nav-link click-scroll" data-route="anasayfa" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.scrollToSection('root');">Anasayfa</a></li>
                
                <li class="nav-item"><a class="nav-link click-scroll" data-route="duyurular" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('duyurular');">Duyurular</a></li>
                <!-- <li class="nav-item"><a class="nav-link click-scroll" data-route="bilgilendiriyor" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('bilgilendiriyor');">YÜZAG Bilgilendiriyor</a></li> -->
                <li class="nav-item"><a class="nav-link click-scroll" data-route="projeler" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('projeler');">Projeler</a></li>

                <li class="nav-item"><a class="nav-link click-scroll" data-route="ekibimiz" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('ekibimiz');">Ekibimiz</a></li>
                <li class="nav-item"><a class="nav-link click-scroll" data-route="sosyalmedya" href="#" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('sosyalmedya');">Sosyal Medya</a></li>

                <li class="nav-item ms-lg-3" style="display:flex; align-items:center; gap: 8px;">
                    <a class="nav-link btn custom-btn gonullu-btn-hover" data-route="gonullu-ol" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1; transition: all 0.3s ease;" href="/#gonullu-ol" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Gönüllü Ol
                    </a>
                    
                    <a class="nav-link btn custom-btn genc-btn-hover" data-route="genc-gonullu-ol" style="background: #3b82f6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1; transition: all 0.3s ease;" href="/#genc-gonullu-ol" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('genc-gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Genç Gönüllü
                    </a>

                    <a class="nav-link btn custom-btn bagis-btn-hover" data-route="bagis-yap" style="background: #f59e0b !important; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; border: 1px solid #f59e0b; line-height: 1; transition: all 0.3s ease;" href="/#bagis-yap" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('bagis-yap');">
                        <i class="bi bi-heart-fill"></i> Bağış Yap
                    </a>
                    
                    <style>
                        .gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }
                        .genc-btn-hover:hover { color: white !important; background-color: #2563eb !important; }
                        .bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; }
                    </style>
                </li>
            `;
        }
    });
    fixHeaderLinks();
}

window.scrollToSection = function (sectionId) {
    closeMobileMenu();
    if (!sectionId || sectionId === 'root' || sectionId === 'anasayfa') {
        history.pushState(null, null, '/');
        handleRouting();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const targetId = sectionId.replace('#', '');
        const section = document.getElementById(targetId);
        if (section) {
            history.pushState(null, null, '/#' + targetId);
            handleRouting();
            setTimeout(() => { section.scrollIntoView({ behavior: 'smooth' }); }, 50);
        } else {
            history.pushState(null, null, '/');
            handleRouting();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};

window.navigateTo = function (target) {
    closeMobileMenu();
    if (!target || target === 'root' || target === 'anasayfa') {
        history.pushState(null, null, '/');
    } else {
        history.pushState(null, null, '#' + target);
    }
    handleRouting();
};

function initSwipers() {
    if (typeof Swiper === 'undefined') return;
    try {
        if (document.querySelector('.projects-swiper')) {
            if (window.projectsSwiperInstance) window.projectsSwiperInstance.destroy(true, true);
            window.projectsSwiperInstance = new Swiper('.projects-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
                pagination: { el: '.projects-pagination', clickable: true },
                navigation: { nextEl: '.projects-next', prevEl: '.projects-prev' },
                breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
            });
        }
        if (document.querySelector('.announcements-swiper')) {
            if (window.announcementsSwiperInstance) window.announcementsSwiperInstance.destroy(true, true);
            window.announcementsSwiperInstance = new Swiper('.announcements-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
                pagination: { el: '.announcements-pagination', clickable: true },
                navigation: { nextEl: '.announcements-next', prevEl: '.announcements-prev' },
                breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
            });
        }
        if (document.querySelector('.bilgilendiriyor-swiper')) {
            if (window.bilgilendiriyorSwiperInstance) window.bilgilendiriyorSwiperInstance.destroy(true, true);
            window.bilgilendiriyorSwiperInstance = new Swiper('.bilgilendiriyor-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
                pagination: { el: '.bilgilendiriyor-pagination', clickable: true },
                navigation: { nextEl: '.bilgilendiriyor-next', prevEl: '.bilgilendiriyor-prev' },
                breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
            });
        }
    } catch (e) { }
}

window.filterAnnouncements = function (status, btnElement) {
    if (btnElement) {
        const parent = btnElement.parentElement;
        if (parent) {
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btnElement.classList.add('active');
        }
    }
    const wrapper = document.getElementById('announcements-swiper-wrapper');
    if (!wrapper) return;

    let filtered = announcementsData;
    if (status && status !== 'Tümü') {
        filtered = announcementsData.filter(a => a.status === status || a.badge === status || (a.status && a.status.toLowerCase().includes(status.toLowerCase())));
    }
    wrapper.innerHTML = filtered.map(a => createSlideHTML(a, 'announcement')).join('');
    initSwipers();
};

window.filterProjects = function (status, btnElement) {
    if (btnElement) {
        const parent = btnElement.parentElement;
        if (parent) {
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btnElement.classList.add('active');
        }
    }
    const wrapper = document.getElementById('projects-swiper-wrapper');
    if (!wrapper) return;

    let filtered = projectsData;
    if (status && status !== 'Tümü') {
        filtered = projectsData.filter(p => p.status === status || (p.status && p.status.toLowerCase().includes(status.toLowerCase())));
    }
    wrapper.innerHTML = filtered.map(p => createSlideHTML(p, 'project')).join('');
    initSwipers();
};

function fixAddressLinksAndTexts() {
    const addressText = "Zal Mahmut Paşa külliyesi Nişanca mah., Eyüb, İstanbul, Türkiye";
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Zal+Mahmut+Pa%C5%9Fa+k%C3%BClliyesi+Ni%C5%9Fanca+mah.+Eyub+Istanbul+Turkey";

    // 1. Replace old Beylikdüzü text with official Eyüpsultan address
    document.querySelectorAll('*').forEach(el => {
        if (el.children.length === 0 && el.textContent) {
            const txt = el.textContent.toLowerCase();
            if (txt.includes('beylikdüzü') || txt.includes('beylikduzu')) {
                el.textContent = addressText;
            }
        }
    });

    // 2. Fix <a> tags for address and email
    document.querySelectorAll('a').forEach(a => {
        const text = a.textContent.toLowerCase();
        const href = (a.getAttribute('href') || '').toLowerCase();
        const html = a.innerHTML;

        if (html.includes('bi-geo-alt') || href.includes('maps') || text.includes('zal mahmut') || text.includes('eyüb') || text.includes('eyub') || text.includes('nişanca')) {
            a.setAttribute('href', mapsUrl);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        }

        if (html.includes('bi-envelope') || href.includes('mailto') || text.includes('info@') || text.includes('@yuzag.org')) {
            a.setAttribute('href', 'mailto:info@yuzag.org');
        }
    });

    // 3. Convert standalone text nodes of email or address into clickable <a> tags safely
    document.querySelectorAll('p, span, li, small, td').forEach(el => {
        if (el.children.length === 0 && el.parentElement && el.parentElement.tagName !== 'A') {
            const txt = el.textContent.trim();
            if (txt.includes('info@yuzag.org') || txt.includes('info@company.com') || txt.includes('info@yourgmail.com')) {
                el.innerHTML = `<a href="mailto:info@yuzag.org" style="color:inherit; text-decoration:underline;">info@yuzag.org</a>`;
            } else if (txt.includes('Zal Mahmut Paşa') || txt.includes('Nişanca mah.')) {
                el.innerHTML = `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;">${txt}</a>`;
            }
        }
    });
}

function fixHeaderLinks() {
    fixAddressLinksAndTexts();
}

function fixAllPageLinks() {
    document.querySelectorAll('a, button, .btn').forEach(a => {
        const text = a.textContent.trim().toLowerCase();
        const href = a.getAttribute('href');

        if (text.includes('destek ol') || text.includes('katıl') || text.includes('bize katıl') || text.includes('gönüllü katıl')) {
            if (!a.classList.contains('bagis-btn-hover') && !text.includes('bağış')) {
                a.setAttribute('href', '/#gonullu-ol');
                a.onclick = function (e) {
                    e.preventDefault();
                    closeMobileMenu();
                    window.navigateTo('gonullu-ol');
                };
            }
        }

        if (!href) return;

        if (href === '/volunteer' || href === '#volunteer' || href === 'volunteer') {
            a.setAttribute('href', '/#gonullu-ol');
            a.onclick = function (e) { e.preventDefault(); closeMobileMenu(); window.navigateTo('gonullu-ol'); };
        } else if (href === '/works' || href === '#works' || href === 'works') {
            a.setAttribute('href', '/#projeler');
            a.onclick = function (e) { e.preventDefault(); closeMobileMenu(); window.navigateTo('projeler'); };
        } else if (href === '/genis-aile' || href === '#genis-aile') {
            a.setAttribute('href', '/#proje-8');
            a.onclick = function (e) { e.preventDefault(); closeMobileMenu(); window.openDetail(8, 'project'); };
        } else if (href === '/' || href === '/#') {
            if (a.classList.contains('navbar-brand') || a.classList.contains('copyright-text')) {
                a.onclick = function (e) { e.preventDefault(); closeMobileMenu(); window.scrollToSection('root'); };
            }
        }
    });
    fixAddressLinksAndTexts();
}

function populateDetailData(dataObj, type) {
    if (!dataObj) return;

    const titleEl = document.getElementById('detail-title');
    const dateEl = document.getElementById('detail-date');
    const locEl = document.getElementById('detail-location');
    const statusEl = document.getElementById('detail-status');
    const bgImgEl = document.getElementById('detail-bg-img');

    if (titleEl) titleEl.innerText = dataObj.title || '';
    if (dateEl) dateEl.innerText = dataObj.date || '';
    if (locEl) locEl.innerText = dataObj.location || 'Genel';
    if (statusEl) statusEl.innerText = dataObj.status || 'Devam Ediyor';
    if (bgImgEl && dataObj.image) bgImgEl.style.backgroundImage = `url('${dataObj.image}')`;

    const tabsContainer = document.getElementById('project-tabs-container');
    const annContainer = document.getElementById('announcement-content-container');

    if (type === 'announcement' || type === 'duyuru') {
        if (tabsContainer) tabsContainer.style.display = 'none';
        if (annContainer) {
            annContainer.style.display = 'block';
            const descEl = document.getElementById('announcement-desc');
            if (descEl) descEl.innerHTML = dataObj.content || dataObj.shortDesc || '';
        }
    } else {
        if (annContainer) annContainer.style.display = 'none';
        if (tabsContainer) tabsContainer.style.display = 'block';
        if (dataObj.tabs) {
            if (document.getElementById('asamalar')) document.getElementById('asamalar').innerHTML = dataObj.tabs.asamalar || '<p>İçerik bulunamadı.</p>';
            if (document.getElementById('etkinlikler')) document.getElementById('etkinlikler').innerHTML = dataObj.tabs.etkinlikler || '<p>İçerik bulunamadı.</p>';
            if (document.getElementById('gorev')) document.getElementById('gorev').innerHTML = dataObj.tabs.gorevAlanlar || '<p>İçerik bulunamadı.</p>';
            if (document.getElementById('iletisim')) document.getElementById('iletisim').innerHTML = dataObj.tabs.iletisim || '<p>İçerik bulunamadı.</p>';
        }
        const firstTab = document.getElementById('asamalar-tab');
        if (firstTab) firstTab.click();
    }

    const sideStatus = document.getElementById('sidebar-status');
    const sideDate = document.getElementById('sidebar-date');
    const sideLoc = document.getElementById('sidebar-location');

    if (sideStatus) sideStatus.innerText = dataObj.status || '';
    if (sideDate) sideDate.innerText = dataObj.date || '';
    if (sideLoc) sideLoc.innerText = dataObj.location || 'Genel';
}

window.openDetail = function (id, type) {
    let dataObj = null;
    if (type === 'project' || type === 'proje') {
        dataObj = (typeof projectsData !== 'undefined') ? projectsData.find(p => p.id == id) : null;
        if (!dataObj && typeof announcementsData !== 'undefined') dataObj = announcementsData.find(a => a.id == id);
    } else if (type === 'announcement' || type === 'duyuru') {
        dataObj = (typeof announcementsData !== 'undefined') ? announcementsData.find(a => a.id == id) : null;
        if (!dataObj && typeof projectsData !== 'undefined') dataObj = projectsData.find(p => p.id == id);
    }

    if (dataObj) {
        populateDetailData(dataObj, type);
    }

    window.navigateTo((type === 'announcement' || type === 'duyuru' ? 'duyuru-' : 'proje-') + id);
};

window.handleFormSubmit = function (event, formType) {
    if (event) event.preventDefault();

    const form = event ? (event.target || event.srcElement) : null;
    if (!form) return;

    const nameInput = form.querySelector('[name="adSoyad"], [name="ad_soyad"], [name="name"], input[placeholder*="Ad"], input[placeholder*="ad"]');
    const emailInput = form.querySelector('[type="email"], [name="email"], input[placeholder*="E-posta"], input[placeholder*="email"]');
    const telInput = form.querySelector('[type="tel"], [name="tel"], [name="phone"], input[placeholder*="05"], input[placeholder*="Telefon"]');
    const msgInput = form.querySelector('textarea, [name="mesaj"], [name="message"]');
    const kvkkInput = form.querySelector('input[name="kvkk"], input[type="checkbox"][required]');

    let errors = [];

    // 1. Ad Soyad Validasyonu (Sadece sayı girilemez, en az 3 karakter)
    if (nameInput) {
        const val = nameInput.value.trim();
        const hasLetters = /[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(val);
        const isPureNumbers = /^\d+$/.test(val);
        if (!val || val.length < 3 || isPureNumbers || !hasLetters) {
            errors.push("Lütfen geçerli bir Ad Soyad giriniz (en az 3 harf içermelidir).");
        }
    }

    // 2. E-posta Validasyonu
    if (emailInput) {
        const val = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!val || !emailRegex.test(val)) {
            errors.push("Lütfen geçerli bir e-posta adresi giriniz (örnek: isim@domain.com).");
        }
    }

    // 3. Telefon Validasyonu (En az 10 rakam)
    if (telInput) {
        const rawVal = telInput.value.trim();
        const digitsOnly = rawVal.replace(/\D/g, '');
        if (!rawVal || digitsOnly.length < 10 || digitsOnly.length > 13) {
            errors.push("Lütfen geçerli bir telefon numarası giriniz (örnek: 05xx xxx xx xx).");
        }
    }

    // 4. Mesaj / Motivasyon Validasyonu
    if (msgInput) {
        const val = msgInput.value.trim();
        if (!val || val.length < 10) {
            errors.push("Lütfen mesajınızı veya açıklamanızı en az 10 karakter olarak yazınız.");
        }
    }

    // 5. KVKK Onay Kutusu Validasyonu
    if (kvkkInput && !kvkkInput.checked) {
        errors.push("Lütfen KVKK Aydınlatma Metnini okuduğunuzu onaylayınız.");
    }

    const toastContainer = document.getElementById('custom-toast-container') || document.body;

    function showToast(message, isSuccess = true) {
        const toast = document.createElement('div');
        toast.className = 'custom-toast';
        const bgColor = isSuccess ? '#10b981' : '#ef4444';
        const icon = isSuccess ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';
        toast.style.cssText = `position:fixed; bottom:30px; right:30px; z-index:99999; background:${bgColor}; color:#fff; padding:16px 24px; border-radius:12px; font-weight:600; box-shadow:0 10px 25px rgba(0,0,0,0.15); display:flex; align-items:center; gap:10px; transition:all 0.3s ease; opacity:0; transform:translateY(20px);`;
        toast.innerHTML = `<i class="bi ${icon}" style="font-size:1.4rem;"></i> ${message}`;
        toastContainer.appendChild(toast);

        setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateY(0)'; }, 50);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 4500);
    }

    if (errors.length > 0) {
        showToast(errors[0], false);
        return false;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const payload = {
        ad_soyad: nameInput ? nameInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        tel: telInput ? telInput.value.trim() : '',
        mesaj: msgInput ? msgInput.value.trim() : ''
    };

    const endpoint = `${API_BASE_URL}/api/contact-messages`;

    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(data => {
            if (data && data.status === 'success') {
                showToast(data.message || 'Mesajınız başarıyla iletilmiştir. Teşekkür ederiz.', true);
                form.reset();
            } else {
                showToast(data.message || 'Mesajınız başarıyla iletilmiştir. Teşekkür ederiz.', true);
                form.reset();
            }
        })
        .catch(() => {
            showToast('Mesajınız başarıyla iletilmiştir. Teşekkür ederiz.', true);
            form.reset();
        })
        .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
        });

    return false;
};

// Global Form Submit Capture Listener
document.addEventListener('submit', function (e) {
    if (e.target && e.target.tagName === 'FORM') {
        window.handleFormSubmit(e);
    }
}, true);

// Real-time Input Formatting & Validation (Prevent invalid characters)
document.addEventListener('keydown', (e) => {
    if (!e.target) return;
    const isNameInput = e.target.matches('[name="adSoyad"], [name="ad_soyad"], [name="name"]') ||
        (e.target.placeholder && e.target.placeholder.toLowerCase().includes('ad'));
    if (isNameInput) {
        // Rakamların (0-9 ve Numpad) yazılmasını tuş basıldığı anda engelle
        if ((e.key >= '0' && e.key <= '9') || (e.code && e.code.startsWith('Numpad'))) {
            e.preventDefault();
        }
    }

    const isPhoneInput = e.target.matches('[type="tel"], [name="tel"], [name="phone"], [name="refTel1"], [name="refTel2"], .iti input') ||
        (e.target.placeholder && (e.target.placeholder.includes('05') || e.target.placeholder.toLowerCase().includes('telefon') || e.target.placeholder.toLowerCase().includes('5xx')));
    if (isPhoneInput) {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];
        if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
            let currentDigits = e.target.value.replace(/\D/g, '');
            if (currentDigits.startsWith('0')) currentDigits = currentDigits.substring(1);
            if (currentDigits.length >= 10 && ((e.key >= '0' && e.key <= '9') || (e.code && e.code.startsWith('Numpad')))) {
                e.preventDefault();
            }
        }
    }
});

document.addEventListener('input', (e) => {
    if (!e.target) return;

    // 1. Ad Soyad & Referans Adı: Sadece harf ve boşluk (Rakamlar ve özel semboller anında temizlenir)
    if (e.target.matches('[name="adSoyad"], [name="ad_soyad"], [name="name"], [name="refAd1"], [name="refAd2"]') ||
        (e.target.placeholder && e.target.placeholder.toLowerCase().includes('adınız'))) {
        e.target.value = e.target.value.replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ\s]/g, '');
    }

    // 2. Yabancı Dil alanları: Sadece harf ve boşluk (Rakamlar ve *, -, +, / gibi simgeler anında temizlenir)
    if (e.target.matches('[name="dil1"], [name="dil2"]') ||
        (e.target.placeholder && e.target.placeholder.toLowerCase().includes('dil'))) {
        e.target.value = e.target.value.replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ\s]/g, '');
    }

    // 3. Yaşadığınız il alanı: Sadece harf ve boşluk (Rakamlar ve *, -, +, / gibi simgeler anında temizlenir)
    if (e.target.matches('[name="il"]') ||
        (e.target.placeholder && e.target.placeholder.toLowerCase().includes('il'))) {
        e.target.value = e.target.value.replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ\s]/g, '');
    }

    // 4. Okul alanı: Özel semboller (*, +, =, <, >, !, #, $, %, ^, &, *) temizlenir
    if (e.target.matches('[name="okul"]') ||
        (e.target.placeholder && e.target.placeholder.toLowerCase().includes('okul'))) {
        e.target.value = e.target.value.replace(/[*+=<>!#$%^&*()]/g, '');
    }

    // 5. Mail alanı: Geçersiz semboller (+, *, /, vb. ve boşluk) anında temizlenir
    if (e.target.matches('[type="email"], [name="email"]') ||
        (e.target.placeholder && e.target.placeholder.toLowerCase().includes('eposta'))) {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '').toLowerCase();
    }

    // 6. TC Kimlik No: Sadece rakam ve max 11 hane
    if (e.target.matches('[name="tc"]')) {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
    }

    // 7. Telefon: Sadece rakam kabul et, başındaki 0'ı temizle ve Türkiye için en fazla 10 hane kabul et (ör: 5374086744)
    if (e.target.matches('[type="tel"], [name="tel"], [name="phone"], [name="refTel1"], [name="refTel2"], .iti input') ||
        (e.target.placeholder && (e.target.placeholder.includes('05') || e.target.placeholder.toLowerCase().includes('telefon') || e.target.placeholder.toLowerCase().includes('5xx')))) {
        let val = e.target.value.replace(/\D/g, '');
        if (val.startsWith('0')) {
            val = val.substring(1);
        }
        if (val.length > 10) {
            val = val.slice(0, 10);
        }
        e.target.value = val;
    }
});

function updateActiveMenuState(route) {
    let targetKey = route;
    if (route.startsWith('proje-')) targetKey = 'projeler';
    else if (route.startsWith('duyuru-')) targetKey = 'duyurular';
    else if (route.startsWith('bilgi-')) targetKey = 'bilgilendiriyor';
    else if (!route || route === 'root') targetKey = 'anasayfa';

    document.querySelectorAll('.navbar-nav .nav-link, .nav-menu .nav-link, .dropdown-item').forEach(el => {
        el.classList.remove('active');
        const text = el.textContent.trim().toLowerCase();
        const rAttr = el.getAttribute('data-route');

        if (rAttr === targetKey ||
            (targetKey === 'anasayfa' && text === 'anasayfa') ||
            (targetKey === 'duyurular' && (text.includes('duyuru') || text.includes('tüm duyurular'))) ||
            (targetKey === 'bilgilendiriyor' && (text.includes('bilgilendiriyor') || text.includes('tüm videolar'))) ||
            (targetKey === 'projeler' && (text.includes('proje') || text.includes('tüm projeler'))) ||
            (targetKey === 'ekibimiz' && text.includes('ekibimiz')) ||
            (targetKey === 'sosyalmedya' && text.includes('sosyal')) ||
            (targetKey === 'gonullu-ol' && text.includes('gönüllü ol')) ||
            (targetKey === 'genc-gonullu-ol' && text.includes('genç gönüllü')) ||
            (targetKey === 'bagis-yap' && text.includes('bağış yap'))) {
            el.classList.add('active');
        }
    });
}

function handleRouting() {
    if (window.location.pathname.startsWith('/backend') ||
        window.location.pathname.startsWith('/admin') ||
        window.location.pathname.startsWith('/yonetim-paneli') ||
        window.location.pathname.startsWith('/api')) {
        return;
    }

    if (typeof injectCustomViews === 'function') {
        injectCustomViews();
    }

    fixAllPageLinks();

    let hash = window.location.hash.replace('#', '').trim();
    let pathname = window.location.pathname.replace(/^\//, '').trim();
    let rawRoute = hash || pathname;

    let route = rawRoute;
    if (route === 'volunteer' || route === 'gonullu') route = 'gonullu-ol';
    else if (route === 'genc-gonullu' || route === 'gencgonullu') route = 'genc-gonullu-ol';
    else if (route === 'works' || route === 'projects') route = 'projeler';
    else if (route === 'genis-aile') route = 'proje-8';
    else if (route === 'bagis' || route === 'donate') route = 'bagis-yap';
    else if (route === 'announcements' || route === 'duyuru') route = 'duyurular';
    else if (route === 'team' || route === 'ekip') route = 'ekibimiz';
    else if (route === 'sosyal') route = 'sosyalmedya';
    else if (route === 'bilgi') route = 'bilgilendiriyor';

    updateActiveMenuState(route);

    const rootNode = document.getElementById('root');
    const appNode = rootNode ? (rootNode.querySelector('.App') || rootNode) : document.body;

    const views = {
        detail: document.getElementById('custom-project-detail-view'),
        team: document.getElementById('custom-team-detail-view'),
        bilgi: document.getElementById('custom-bilgilendiriyor-view'),
        sosyal: document.getElementById('custom-sosyal-medya-view'),
        projeler: document.getElementById('custom-all-projects-view'),
        duyurular: document.getElementById('custom-all-announcements-view'),
        gonullu: document.getElementById('custom-gonullu-ol-view'),
        gencGonullu: document.getElementById('custom-genc-gonullu-ol-view'),
        bagis: document.getElementById('custom-bagis-yap-view')
    };

    const isDetailPage = route === 'ekibimiz' ||
        route === 'bilgilendiriyor' ||
        route === 'sosyalmedya' ||
        route === 'projeler' ||
        route === 'duyurular' ||
        route === 'gonullu-ol' ||
        route === 'genc-gonullu-ol' ||
        route === 'bagis-yap' ||
        route.startsWith('proje-') ||
        route.startsWith('duyuru-') ||
        route.startsWith('bilgi-');

    if (appNode) {
        Array.from(appNode.children).forEach(child => {
            if (!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                const isPermanent = child.tagName === 'HEADER' || child.tagName === 'NAV' || child.tagName === 'FOOTER' || child.classList.contains('site-header') || child.classList.contains('navbar') || child.classList.contains('site-footer');
                if (!isPermanent) {
                    child.style.display = isDetailPage ? 'none' : '';
                }
            }
        });
    }

    Object.values(views).forEach(v => { if (v) v.style.display = 'none'; });

    if (isDetailPage) {
        let sayfa = 'detail';
        if (route === 'ekibimiz') sayfa = 'team';
        else if (route === 'bilgilendiriyor') sayfa = 'bilgi';
        else if (route === 'sosyalmedya') sayfa = 'sosyal';
        else if (route === 'projeler') sayfa = 'projeler';
        else if (route === 'duyurular') sayfa = 'duyurular';
        else if (route === 'gonullu-ol') sayfa = 'gonullu';
        else if (route === 'genc-gonullu-ol') sayfa = 'gencGonullu';
        else if (route === 'bagis-yap') sayfa = 'bagis';

        if (sayfa === 'detail' && views.detail) {
            views.detail.style.display = 'block';
            if (route.startsWith('proje-')) {
                const id = route.replace('proje-', '');
                const dataObj = (typeof projectsData !== 'undefined') ? projectsData.find(p => p.id == id) : null;
                populateDetailData(dataObj, 'project');
            } else if (route.startsWith('duyuru-')) {
                const id = route.replace('duyuru-', '');
                const dataObj = (typeof announcementsData !== 'undefined') ? announcementsData.find(a => a.id == id) : null;
                populateDetailData(dataObj, 'announcement');
            }
            window.scrollTo(0, 0);
        }
        else if (sayfa === 'team' && views.team) { views.team.style.display = 'block'; window.scrollTo(0, 0); renderTeamPage(); }
        else if (sayfa === 'bilgi' && views.bilgi) { views.bilgi.style.display = 'block'; window.scrollTo(0, 0); renderBilgilendiriyorPage(); }
        else if (sayfa === 'sosyal' && views.sosyal) { views.sosyal.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'projeler' && views.projeler) { views.projeler.style.display = 'block'; window.scrollTo(0, 0); renderAllProjectsPage(); }
        else if (sayfa === 'duyurular' && views.duyurular) { views.duyurular.style.display = 'block'; window.scrollTo(0, 0); renderAllAnnouncementsPage(); }
        else if (sayfa === 'gonullu' && views.gonullu) { views.gonullu.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'gencGonullu' && views.gencGonullu) { views.gencGonullu.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'bagis' && views.bagis) { views.bagis.style.display = 'block'; window.scrollTo(0, 0); }
    } else {
        window.scrollTo(0, 0);
    }

    const mapContainer = document.getElementById('custom-google-maps-container');
    if (mapContainer) {
        mapContainer.style.display = isDetailPage ? 'none' : 'block';
    }
}

window.addEventListener('popstate', handleRouting);
window.addEventListener('hashchange', handleRouting);

function renderAllProjectsPage() {
    const grid = document.getElementById('all-projects-grid');
    if (grid && typeof projectsData !== 'undefined') {
        grid.innerHTML = projectsData.map(p => `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                <div class="custom-card w-100 d-flex flex-column" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <img src="${p.image}" style="width:100%; height:210px; object-fit:cover;" alt="${p.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';">
                    <div style="padding:20px;" class="d-flex flex-column flex-grow-1">
                        <span class="badge bg-primary mb-2" style="align-self: flex-start; background-color:#14b8a6 !important;">${p.status || 'Proje'}</span>
                        <h4 style="font-weight:700; color:#0f172a; margin-bottom:10px; font-size:1.1rem;">${p.title}</h4>
                        <p style="color:#64748b; font-size:0.9rem; flex-grow:1; margin-bottom:20px;">${p.shortDesc}</p>
                        <a href="#" onclick="event.preventDefault(); window.openDetail(${p.id}, 'project');" class="btn custom-btn mt-auto" style="background:#14b8a6; color:#fff; border-radius:10px; width:100%; text-align:center; display:block;">Detayları İncele</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderAllAnnouncementsPage() {
    const grid = document.getElementById('all-announcements-grid');
    if (grid && typeof announcementsData !== 'undefined') {
        grid.innerHTML = announcementsData.map(a => `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                <div class="custom-card w-100 d-flex flex-column" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <img src="${a.image}" style="width:100%; height:210px; object-fit:cover;" alt="${a.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';">
                    <div style="padding:20px;" class="d-flex flex-column flex-grow-1">
                        <span class="badge bg-secondary mb-2" style="align-self: flex-start;">${a.date || a.status || 'Duyuru'}</span>
                        <h4 style="font-weight:700; color:#0f172a; margin-bottom:10px; font-size:1.1rem;">${a.title}</h4>
                        <p style="color:#64748b; font-size:0.9rem; flex-grow:1; margin-bottom:20px;">${a.shortDesc}</p>
                        <a href="#" onclick="event.preventDefault(); window.openDetail(${a.id}, 'announcement');" class="btn custom-btn mt-auto" style="background:#14b8a6; color:#fff; border-radius:10px; width:100%; text-align:center; display:block;">Detayları İncele</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderTeamPage() {
    const grid = document.getElementById('team-grid') || document.getElementById('full-team-grid');
    if (grid && typeof teamData !== 'undefined') {
        grid.innerHTML = teamData.map(t => `
            <div class="team-card text-center d-flex flex-column justify-content-center" style="background:#fff; padding:30px 20px; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border-top: 4px solid #14b8a6; transition: transform 0.3s ease, box-shadow 0.3s ease; min-height: 140px;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(20,184,166,0.15)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)';">
                <div class="team-info" style="padding: 0;">
                    <h5 style="font-weight:700; color:#0f172a; margin-bottom:8px; font-size:1.15rem; line-height:1.4;">${t.name}</h5>
                    <p style="color:#14b8a6; font-weight:600; font-size:0.9rem; margin:0; line-height:1.4;">${t.role}</p>
                </div>
            </div>
        `).join('');
    }
}

function renderBilgilendiriyorPage() {
    const grid = document.getElementById('video-grid-container') || document.getElementById('bilgilendiriyor-grid');
    if (grid && typeof bilgilendiriyorData !== 'undefined') {
        grid.innerHTML = bilgilendiriyorData.map(b => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="custom-card h-100" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div style="position:relative; padding-top:56.25%;">
                        <iframe src="${b.videoUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen title="${b.title}"></iframe>
                    </div>
                    <div style="padding:20px;">
                        <span class="badge bg-danger mb-2">${b.date || 'Video'}</span>
                        <h4 style="font-weight:700; color:#0f172a; font-size:1.1rem; margin-bottom:8px;">${b.title}</h4>
                        <p style="color:#64748b; font-size:0.88rem; margin:0;">${b.desc || ''}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 6. Özel Footer Enjeksiyonu
function injectCustomFooter() {
    if (document.querySelector('.custom-premium-footer')) return;

    const footerHTML = `
        <footer class="custom-premium-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 footer-col pe-lg-5">
                        <img src="/assets/images/logo.png" alt="YÜZAG Logo" class="footer-logo">
                        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 25px; line-height: 1.6;">YÜZAG; yüzyılın aile, gençlik ve toplum yapısını güçlendirmek adına eğitim, kültür ve sosyal yardımlaşma projeleri yürüten öncü bir sivil inisiyatiftir.</p>
                        <div class="footer-social-links">
                            <a href="https://www.instagram.com/yuzagorgtr/?hl=tr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://x.com/yuzagorgtr" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="bi bi-twitter-x"></i></a>
                            <a href="https://www.facebook.com/yuzagorgtr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-col">
                        <h4 class="footer-title">Hızlı Menü</h4>
                        <ul class="footer-menu">
                            <li><a href="#" onclick="event.preventDefault(); closeMobileMenu(); window.scrollToSection('root');">Anasayfa</a></li>
                            <li><a href="/#projeler" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('projeler');">Projelerimiz</a></li>
                            <li><a href="/#duyurular" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('duyurular');">Duyurular</a></li>
                            <li><a href="/#ekibimiz" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('ekibimiz');">Ekibimiz</a></li>
                            <!-- <li><a href="/#bilgilendiriyor" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('bilgilendiriyor');">YÜZAG Bilgilendiriyor</a></li> -->
                            <li><a href="/#sosyalmedya" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('sosyalmedya');">Sosyal Medya</a></li>
                            <li><a href="/#gonullu-ol" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('gonullu-ol');"><i class="bi bi-heart-fill"></i> Gönüllü Ol</a></li>
                            <li><a href="/#genc-gonullu-ol" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('genc-gonullu-ol');"><i class="bi bi-heart-fill"></i> Genç Gönüllü Ol</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-5 col-md-6 footer-col">
                        <h4 class="footer-title">Çalışmalarımız</h4>
                        <ul class="footer-projects-list" id="footer-sample-projects" style="margin-top: 0; padding-top: 0;">
                        </ul>
                        <div class="mobile-justify-center" style="margin-top: 25px; display: flex; gap: 15px; flex-wrap: wrap;">
                            <a href="/#projeler" class="btn btn-footer" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('projeler');">Tüm Projeler <i class="bi bi-arrow-right"></i></a>
                            <a href="/#duyurular" class="btn btn-footer" onclick="event.preventDefault(); closeMobileMenu(); window.navigateTo('duyurular');">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 YÜZAG Hareketi. Gelecek İçin Bir Adım. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);

    const sampleProjectsContainer = document.getElementById('footer-sample-projects');
    if (sampleProjectsContainer && typeof projectsData !== 'undefined') {
        let samplesHTML = "";
        projectsData.slice(0, 5).forEach(p => {
            samplesHTML += `<li><a href="/#proje-${p.id}" onclick="event.preventDefault(); window.openDetail(${p.id}, 'project');">${p.title}</a></li>`;
        });
        sampleProjectsContainer.innerHTML = samplesHTML;
    }

    injectGoogleMapSection();
}

function injectGoogleMapSection() {
    if (document.getElementById('custom-google-maps-container')) return;

    const footer = document.querySelector('.custom-premium-footer');
    const mapHTML = `
        <section id="custom-google-maps-container" class="custom-map-section" style="padding: 50px 0; background: #f8fafc; border-top: 1px solid #e2e8f0; margin-top: 30px;">
            <div class="container">
                <div style="text-align: center; margin-bottom: 25px;">
                    <span class="badge bg-primary mb-2" style="background-color: #14b8a6 !important; font-size: 0.88rem; padding: 6px 14px; border-radius: 20px;">Konumumuz</span>
                    <h2 style="font-weight: 800; color: #0f172a; font-size: 1.8rem; margin-top: 5px;">
                        <i class="bi bi-geo-alt-fill" style="color: #14b8a6; margin-right: 8px;"></i> Adres ve Harita Bilgisi
                    </h2>
                    <p style="color: #64748b; font-size: 0.98rem; margin-top: 6px; font-weight: 500;">
                        Zal Mahmut Paşa külliyesi Nişanca mah., Eyub, Istanbul, Turkey
                    </p>
                </div>
                <div style="border-radius: 20px; overflow: hidden; box-shadow: 0 12px 35px rgba(0,0,0,0.08); border: 4px solid #14b8a6;">
                    <iframe 
                        title="YÜZAG Hareketi Konum Haritası"
                        src="https://maps.google.com/maps?q=Zal%20Mahmut%20Pa%C5%9Fa%20k%C3%BClliyesi%20Ni%C5%9Fanca%20mah.%20Eyub%20Istanbul%20Turkey&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="450" 
                        style="border:0; display:block;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    `;

    if (footer) {
        footer.insertAdjacentHTML('beforebegin', mapHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', mapHTML);
    }
}

function initIntlTelInputs() {
    if (typeof window.intlTelInput === 'undefined') return;

    const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="tel"], input[name="phone"], input[name="refTel1"], input[name="refTel2"], input[placeholder*="Telefon"], input[placeholder*="telefon"]');
    phoneInputs.forEach(input => {
        input.setAttribute('maxlength', '10');
        input.setAttribute('inputmode', 'numeric');
        input.setAttribute('pattern', '[0-9]*');
        input.setAttribute('placeholder', '5xx xxx xx xx');
        input.style.setProperty('padding-left', '15px', 'important');

        if (!input.dataset.itiInitialized) {
            input.dataset.itiInitialized = 'true';
            try {
                window.intlTelInput(input, {
                    initialCountry: "tr",
                    preferredCountries: ["tr", "de", "us", "gb", "fr", "nl", "at"],
                    separateDialCode: true,
                    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
                });
                input.setAttribute('maxlength', '10');
                input.style.setProperty('padding-left', '15px', 'important');
            } catch (e) {
                // fallback
            }
        }
    });
}

function fixKvkkLayout() {
    document.querySelectorAll('input[name="kvkk"], input[type="checkbox"]').forEach(input => {
        const label = input.closest('label') || input.parentElement;
        if (label) {
            label.style.setProperty('display', 'flex', 'important');
            label.style.setProperty('flex-direction', 'row', 'important');
            label.style.setProperty('align-items', 'flex-start', 'important');
            label.style.setProperty('justify-content', 'flex-start', 'important');
            label.style.setProperty('text-align', 'left', 'important');
            label.style.setProperty('gap', '12px', 'important');
            label.style.setProperty('width', '100%', 'important');
            label.style.setProperty('margin-top', '12px', 'important');
            label.style.setProperty('margin-bottom', '20px', 'important');

            input.style.setProperty('width', '20px', 'important');
            input.style.setProperty('height', '20px', 'important');
            input.style.setProperty('min-width', '20px', 'important');
            input.style.setProperty('flex-shrink', '0', 'important');
            input.style.setProperty('margin', '3px 0 0 0', 'important');
        }
    });
}

function tryInjectEverything() {
    injectCustomViews();
    injectCustomFooter();
    injectGoogleMapSection();
    initIntlTelInputs();
    fixAddressLinksAndTexts();
    fixKvkkLayout();

    if (!document.getElementById('custom-projects-section')) {
        injectSections();
        addNavbarLink();
        handleRouting();
    }
}

// 7. Eklenti Başlatıcı (Plugin Init)
function initProjectsPlugin() {
    console.log("YÜZAG Projeler Eklentisi Başlıyor...");

    tryInjectEverything();

    // Retry periodically for React async rendering (250ms x 20 = 5 seconds)
    let attempts = 0;
    const intervalTimer = setInterval(() => {
        attempts++;
        tryInjectEverything();
        if (document.getElementById('custom-projects-section') || attempts > 20) {
            clearInterval(intervalTimer);
        }
    }, 250);

    // MutationObserver to ensure SPA routing / dynamic changes preserve custom sections
    const rootNode = document.getElementById('root');
    if (rootNode) {
        let mutTimer = null;
        const observer = new MutationObserver(() => {
            if (!document.getElementById('custom-projects-section')) {
                clearTimeout(mutTimer);
                mutTimer = setTimeout(tryInjectEverything, 100);
            }
        });
        observer.observe(rootNode, { childList: true });
    }
}

// Run immediately on script execution + DOMContentLoaded + window load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectsPlugin);
} else {
    initProjectsPlugin();
}
window.addEventListener('load', handleRouting);

// Fetch and update dynamic banners (images + text)
document.addEventListener('DOMContentLoaded', () => {
    const apiEndpoint = `${API_BASE_URL}/api/banners`;

    fetch(apiEndpoint)
        .then(res => {
            if (!res.ok) throw new Error('API Response Not OK');
            return res.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                const carouselInner = document.querySelector('.carousel-inner');
                if (carouselInner) {
                    const newItemsHtml = data.map((banner, index) => {
                        const activeClass = index === 0 ? 'active' : '';
                        return `
                            <div class="carousel-item ${activeClass}">
                                <img src="${banner.image_url}" class="carousel-image" alt="${banner.title || 'Banner'}">
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div class="p-3" style="max-width: 900px;">
                                        <h1 class="display-3 text-white mb-4 animated zoomIn" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">
                                            ${banner.title || ''}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('');

                    carouselInner.innerHTML = newItemsHtml;

                    if (window.bootstrap && window.bootstrap.Carousel) {
                        const carouselElement = document.querySelector('#header-carousel');
                        if (carouselElement) {
                            new window.bootstrap.Carousel(carouselElement);
                        }
                    }
                }
            }
        })
        .catch(err => {
            // Silently fallback if API is not reached
        });
});
