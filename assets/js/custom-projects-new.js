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
    { name: "Güleser Topuz", role: "Genel Başkan", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" },
    { name: "Av. Fatma Doydu Aksu", role: "Genel Başkan Yardımcısı / Proje Koordinatörü", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" },
    { name: "Esma Budak", role: "Aile ve Eğitimden Sorumlu Bşk. Yrd.", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" },
    { name: "Meryem Tekbıyık", role: "Sosyal Hizmetler Komisyonu Başkanı", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" },
    { name: "Tekin Sağlam", role: "Yaşlı ve Engelliler Komisyonu Başkanı", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" },
    { name: "Merve Şivetoğlu", role: "Gençlik Komisyonu Başkanı", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" },
    { name: "Hilal Azak", role: "Eğitim Komisyonu Başkanı", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" },
    { name: "Suzan Özçelik", role: "Proje Lideri (Anneye Nefes)", image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok" }
];

const bilgilendiriyorData = [];

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
                            <button class="btn-participate">Destek Ol / Katıl</button>
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

                <!-- Organizasyon Şeması Buraya Taşındı -->
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
            <div class="container" style="padding-bottom: 80px;">
                <div class="video-grid" id="video-grid-container"></div>
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

            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4">
                    <!-- Instagram -->
                    <div class="col-lg-4 col-md-6">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="font-size:2rem; font-weight:700; color:#E1306C; margin-bottom:15px;"><i class="bi bi-instagram me-2"></i> Instagram</h2>
                                <p style="font-size:1.1rem; color:#4b5563; margin-bottom:20px;; flex-grow:1;">Güncel etkinlik fotoğraflarımız, saha çalışmalarımızdan kısa videolar ve duyurularımız için bizi Instagram'da takip edin. İyiliğin sahadaki yüzünü ilk siz görün.</p>
                                <a href="https://instagram.com" target="_blank" class="btn btn-primary" style="background:#E1306C; border:none; padding:10px 25px; border-radius:30px; font-weight:600;; align-self: flex-start;">Takip Et <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- Twitter -->
                    <div class="col-lg-4 col-md-6">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="font-size:2rem; font-weight:700; color:#1DA1F2; margin-bottom:15px;"><i class="bi bi-twitter-x me-2"></i> Twitter / X</h2>
                                <p style="font-size:1.1rem; color:#4b5563; margin-bottom:20px;; flex-grow:1;">Basın açıklamalarımız, anlık bilgilendirmelerimiz, gündeme dair duruşumuz ve fikir yazılarımız için resmi X hesabımızı takip edebilirsiniz.</p>
                                <a href="https://twitter.com" target="_blank" class="btn btn-primary" style="background:#1DA1F2; border:none; padding:10px 25px; border-radius:30px; font-weight:600;; align-self: flex-start;">Takip Et <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- YouTube -->
                    <div class="col-lg-4 col-md-6">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="font-size:2rem; font-weight:700; color:#FF0000; margin-bottom:15px;"><i class="bi bi-youtube me-2"></i> YouTube</h2>
                                <p style="font-size:1.1rem; color:#4b5563; margin-bottom:20px;; flex-grow:1;">YÜZAG Bilgilendiriyor videoları, eğitim seminerlerimizin uzun versiyonları, özel röportajlar ve kamp belgesellerimiz için kanalımıza abone olun.</p>
                                <a href="https://youtube.com" target="_blank" class="btn btn-primary" style="background:#FF0000; border:none; padding:10px 25px; border-radius:30px; font-weight:600;; align-self: flex-start;">Abone Ol <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <a href="#" class="btn-see-all">Tümünü Gör <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="swiper projects-swiper">
                    <div class="swiper-wrapper" id="projects-swiper-wrapper">
                        ${projectSlidesHTML}
                    </div>
                    <div class="swiper-pagination projects-pagination"></div>
                </div>
            </div>
        </section>
    `;

    let teamCardsHTML = teamData.slice(0, 4).map(t => `
        <div class="team-card">
            <div class="team-img-wrapper"><img src="${t.image}" alt="${t.name}"></div>
            <div class="team-info"><h3 class="team-name">${t.name}</h3><p class="team-role">${t.role}</p></div>
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
                </div>
            </div>
        </section>
    `;

    const fullHTML = bilgilendiriyorHTML + announcementsHTML + projectsHTML + teamHTML;

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
function addNavbarLink() {
    // Dropdown içeriklerini dinamik oluştur
    let projectsDropdown = projectsData.map(p => `<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.openDetail(${p.id}, 'project')">${p.title}</a></li>`).join('');
    let announcementsDropdown = announcementsData.map(a => `<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.openDetail(${a.id}, 'announcement')">${a.title}</a></li>`).join('');
    let bilgiDropdown = bilgilendiriyorData.map(b => `<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor')">${b.title}</a></li>`).join('');

    // Sitedeki menü listesini (ul) bul
    const navbars = document.querySelectorAll('.navbar-nav, .nav-menu, ul.nav:not(.custom-nav-tabs)');
    navbars.forEach(nav => {
        if (!nav.dataset.customLinksAdded) {
            nav.dataset.customLinksAdded = 'true';

            nav.innerHTML = `
                <li class="nav-item"><a class="nav-link click-scroll" href="#" onclick="event.preventDefault(); window.scrollToSection('root');">Anasayfa</a></li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Duyurular</a>
                    <ul class="dropdown-menu">
                        ${announcementsDropdown}
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('duyurular');">Tüm Duyurular</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bilgilendiriyor</a>
                    <ul class="dropdown-menu">
                        ${bilgiDropdown}
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor');">Tüm Videolar</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projeler</a>
                    <ul class="dropdown-menu">
                        ${projectsDropdown}
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('projeler');">Tüm Projeler</a></li>
                    </ul>
                </li>

                <li class="nav-item"><a class="nav-link click-scroll" href="#" onclick="event.preventDefault(); window.navigateTo('ekibimiz');">Ekibimiz</a></li>
                <li class="nav-item"><a class="nav-link click-scroll" href="#" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');">Sosyal Medya</a></li>

                <!-- Action Buttons Container: Right aligned, side by side -->
                <li class="nav-item ms-lg-3" style="display:flex; align-items:center; gap: 8px;">
                    <!-- Gönüllü Ol -->
                    <a class="nav-link btn custom-btn gonullu-btn-hover" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1;" href="/#gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Gönüllü Ol
                    </a>
                    
                    <!-- Genç Gönüllü Ol -->
                    <a class="nav-link btn custom-btn genc-btn-hover" style="background: #3b82f6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1;" href="/#genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Genç Gönüllü
                    </a>

                    <!-- Bağış Yap -->
                    <a class="nav-link btn custom-btn bagis-btn-hover" style="background: #f59e0b !important; color: white !important; border-radius: 25px; padding: 10px 22px !important; font-weight: 700; display:flex; align-items:center; justify-content:center; font-size: 1.1rem; border: 2px solid #f59e0b; margin-left: 5px; line-height: 1;" href="/#bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">
                        Bağış Yap
                    </a>
                    
                    <style>
                        .gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }
                        .genc-btn-hover:hover { color: white !important; background-color: #2563eb !important; }
                        .bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; transform: scale(1.05); transition: transform 0.2s ease; }
                    </style>
                </li>
            `;
        }
    });
}

// 5. Yönlendirme ve Sayfa Yönetimi (Routing)
window.scrollToSection = function (sectionId) {
    const rootNode = document.getElementById('root');
    if (rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if (!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = '';
            } else if (child.id.startsWith('custom-') && child.id.endsWith('-view')) {
                child.style.display = 'none';
            }
        });
    }

    if (sectionId && sectionId !== 'root') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    history.pushState(null, null, '/');
};

window.navigateTo = function (target) {
    if (!target || target === 'root' || target === 'anasayfa') {
        history.pushState(null, null, '/');
    } else {
        history.pushState(null, null, '#' + target);
    }
    handleRouting();
};

window.openDetail = function (id, type) {
    if (type === 'project') {
        window.navigateTo('proje-' + id);
    } else if (type === 'announcement') {
        window.navigateTo('duyuru-' + id);
    }
};

function handleRouting() {
    // Guarantees all custom view DIVs exist in DOM BEFORE checking elements
    if (typeof injectCustomViews === 'function') {
        injectCustomViews();
    }

    let hash = window.location.hash.replace('#', '');
    let pathname = window.location.pathname.replace(/^\//, '');
    let route = hash || pathname;
    
    const rootNode = document.getElementById('root');

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

    if (rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if (!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = isDetailPage ? 'none' : '';
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

        if (sayfa === 'detail' && views.detail) { views.detail.style.display = 'block'; }
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
}

window.addEventListener('popstate', handleRouting);
window.addEventListener('hashchange', handleRouting);

function renderAllProjectsPage() {
    const grid = document.getElementById('all-projects-grid');
    if (grid && typeof projectsData !== 'undefined') {
        grid.innerHTML = projectsData.map(p => `
            <div class="col-lg-4 col-md-6">
                <div class="custom-card h-100" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <img src="${p.image}" style="width:100%; height:200px; object-fit:cover;" alt="${p.title}">
                    <div style="padding:20px;">
                        <h4 style="font-weight:700; color:#0f172a; margin-bottom:10px;">${p.title}</h4>
                        <p style="color:#64748b; font-size:0.9rem;">${p.shortDesc}</p>
                        <a href="#" onclick="event.preventDefault(); window.openDetail(${p.id}, 'project');" class="btn custom-btn" style="background:#14b8a6; color:#fff; border-radius:10px; width:100%; text-align:center; display:block; margin-top:15px;">Detayları İncele</a>
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
            <div class="col-lg-4 col-md-6">
                <div class="custom-card h-100" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <img src="${a.image}" style="width:100%; height:200px; object-fit:cover;" alt="${a.title}">
                    <div style="padding:20px;">
                        <span class="badge bg-secondary mb-2">${a.date}</span>
                        <h4 style="font-weight:700; color:#0f172a; margin-bottom:10px;">${a.title}</h4>
                        <p style="color:#64748b; font-size:0.9rem;">${a.shortDesc}</p>
                        <a href="#" onclick="event.preventDefault(); window.openDetail(${a.id}, 'announcement');" class="btn custom-btn" style="background:#14b8a6; color:#fff; border-radius:10px; width:100%; text-align:center; display:block; margin-top:15px;">Detayları İncele</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderTeamPage() {
    const grid = document.getElementById('team-grid');
    if (grid && typeof teamData !== 'undefined') {
        grid.innerHTML = teamData.map(t => `
            <div class="col-lg-4 col-md-6">
                <div class="team-card text-center" style="background:#fff; padding:30px; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div class="team-img-wrapper" style="width:120px; height:120px; margin:0 auto 20px; border-radius:50%; overflow:hidden;">
                        <img src="${t.image}" style="width:100%; height:100%; object-fit:cover;" alt="${t.name}">
                    </div>
                    <h4 style="font-weight:700; color:#0f172a;">${t.name}</h4>
                    <p style="color:#14b8a6; font-weight:600; font-size:0.9rem;">${t.role}</p>
                </div>
            </div>
        `).join('');
    }
}

function renderBilgilendiriyorPage() {
    const grid = document.getElementById('bilgilendiriyor-grid');
    if (grid && typeof bilgilendiriyorData !== 'undefined') {
        grid.innerHTML = bilgilendiriyorData.map(b => `
            <div class="col-lg-4 col-md-6">
                <div class="custom-card h-100" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div style="position:relative; padding-top:56.25%;">
                        <iframe src="${b.videoUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
                    </div>
                    <div style="padding:20px;">
                        <h4 style="font-weight:700; color:#0f172a;">${b.title}</h4>
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
                            <a href="https://instagram.com/yuzag_hareketi" target="_blank" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                            <a href="https://twitter.com" target="_blank" aria-label="X"><i class="bi bi-twitter-x"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-col">
                        <h4 class="footer-title">Hızlı Menü</h4>
                        <ul class="footer-menu">
                            <li><a href="#" onclick="event.preventDefault(); window.scrollToSection('root');">Anasayfa</a></li>
                            <li><a href="/#projeler" onclick="event.preventDefault(); window.navigateTo('projeler');">Projelerimiz</a></li>
                            <li><a href="/#duyurular" onclick="event.preventDefault(); window.navigateTo('duyurular');">Duyurular</a></li>
                            <li><a href="/#ekibimiz" onclick="event.preventDefault(); window.navigateTo('ekibimiz');">Ekibimiz</a></li>
                            <li><a href="/#bilgilendiriyor" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor');">YÜZAG Bilgilendiriyor</a></li>
                            <li><a href="/#sosyalmedya" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');">Sosyal Medya</a></li>
                            <li><a href="/#gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');"><i class="bi bi-heart-fill"></i> Gönüllü Ol</a></li>
                            <li><a href="/#genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');"><i class="bi bi-heart-fill"></i> Genç Gönüllü Ol</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-5 col-md-6 footer-col">
                        <h4 class="footer-title">Çalışmalarımız</h4>
                        <ul class="footer-projects-list" id="footer-sample-projects" style="margin-top: 0; padding-top: 0;">
                        </ul>
                        <div class="mobile-justify-center" style="margin-top: 25px; display: flex; gap: 15px; flex-wrap: wrap;">
                            <a href="/#projeler" class="btn custom-btn" onclick="event.preventDefault(); window.navigateTo('projeler');" style="background: rgba(20, 184, 166, 0.1); color: #14b8a6; border: 1px solid #14b8a6; border-radius: 20px; padding: 8px 20px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease;">Tüm Projeler <i class="bi bi-arrow-right"></i></a>
                            <a href="/#duyurular" class="btn custom-btn" onclick="event.preventDefault(); window.navigateTo('duyurular');" style="background: rgba(20, 184, 166, 0.1); color: #14b8a6; border: 1px solid #14b8a6; border-radius: 20px; padding: 8px 20px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease;">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>
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
}

// 7. Eklenti Başlatıcı (Plugin Init)
function initProjectsPlugin() {
    console.log("YÜZAG Projeler Eklentisi Başlıyor...");
    
    // Run immediately to inject views & footer
    injectCustomViews();
    injectCustomFooter();
    addNavbarLink();
    handleRouting();

    const rootNode = document.getElementById('root');
    if (rootNode) {
        const observer = new MutationObserver((mutations) => {
            injectCustomViews();
            injectCustomFooter();
            if (rootNode.children.length > 0 && !document.getElementById('custom-projects-section')) {
                injectSections();
                addNavbarLink();
                handleRouting();
            }
        });
        observer.observe(rootNode, { childList: true, subtree: true });

        if (rootNode.children.length > 0 && !document.getElementById('custom-projects-section')) {
            injectSections();
            addNavbarLink();
            handleRouting();
        }
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
    fetch('http://127.0.0.1:8000/api/banners')
        .then(res => res.json())
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
        .catch(err => console.error("Banners fetch error", err));
});
