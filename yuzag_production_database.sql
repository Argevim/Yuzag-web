-- YÜZAG Derneği Production MySQL Veritabanı (cPanel phpMyAdmin İçe Aktarım İçin)
SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- 1. USERS TABLOSU
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@yuzag.org', NOW(), '$2y$12$e0MYzXyjpJS7Pd0RVvHwHe9h3Y3R3sN1nS2N/vJ0T7oY9q9hZ.i6S', NOW(), NOW());

-- 2. PROJECTS TABLOSU
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `short_desc` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT 0,
  `tabs` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `projects` (`id`, `title`, `short_desc`, `image`, `status`, `date`, `location`, `sort_order`, `tabs`, `created_at`, `updated_at`) VALUES
(1, 'YÜZAG Hatıra Ormanları', 'Geleceğe nefes olmak, toprağa emanet bırakmak...', 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Devam Ediyor', '2026', 'Bilecik / Çekmeköy', 1, '{"asamalar": "<p>Geleceğe nefes olmak, toprağa emanet bırakmak... YÜZAG Hatıra Ormanları projesi, yanan alanları yeşertmek ve gelecek nesillere kalıcı bir hatıra bırakmak amacıyla hayata geçirilmiştir.</p><p>Etkiler ve Kazanımlar: Bu proje, yalnızca ağaç dikmekten ibaret değildir; toplumun her kesiminden bireyleri çevre bilinci etrafında birleştiren, doğaya karşı sorumluluğumuzu hatırlatan güçlü bir sosyal hareket alanıdır.</p>", "etkinlikler": "<ul><li><strong>13 Aralık 2026:</strong> Bilecik Osmaniye’de YÜZAG Hatıra Ormanı Fidan Dikimi.</li><li><strong>26 Nisan 2026:</strong> Çekmeköy Bin Fidan Bin Umut YÜZAG 2. Hatıra Ormanı.</li></ul>", "gorevAlanlar": "<p>Genel Başkanımız <strong>Güleser Topuz</strong> öncülüğünde, YÜZAG gönüllülerinin katkılarıyla hayata geçirilmiştir.</p>", "iletisim": "<p>Sosyal Medya Bağlantılarımız:</p><ul><li><a href=\\"https://www.instagram.com/p/DSSndLsDBAG/\\" target=\\"_blank\\">Bilecik Osmaniye Fidan Dikimi</a></li><li><a href=\\"https://www.instagram.com/p/DXMdZXbjMl-/\\" target=\\"_blank\\">Çekmeköy 2. Hatıra Ormanı</a></li></ul>"}', NOW(), NOW()),
(2, 'İyilikte Hep Birlikte Projesi', 'Kapılar Çalınıyor, Gönüller Alınıyor: Toplumsal Dayanışmada Yeni Bir Model', 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Devam Ediyor', '2025-2026', 'İstanbul Geneli', 2, '{"asamalar": "<p>Türkiye’de sosyal yardım sistemleri çoğu zaman kurumsal ve mesafeli bir yapıya sahiptir. YÜZAG olarak bizler, iyiliğin yalnızca bir yardım paketi teslim etmek olmadığına inanıyoruz.</p>", "etkinlikler": "<ul><li><strong>Dağıtımlar:</strong> 750 gıda kolisi dağıtılmıştır. 3000 adet gıda kolisi, 2500 alışveriş kartı ulaştırılmıştır.</li></ul>", "gorevAlanlar": "<p>Sosyal Hizmetler Komisyonu Başkanı <strong>Meryem Tekbıyık</strong> ve <strong>Tekin Sağlam</strong> önderliğinde yürütülmüştür.</p>", "iletisim": "<p>Sosyal Medya Bağlantılarımız:</p><ul><li><a href=\\"https://www.instagram.com/reel/DSAv90TDB29/\\" target=\\"_blank\\">İyilikte Hep Birlikte Video 1</a></li></ul>"}', NOW(), NOW()),
(3, 'Akran Nezaketi Projesi', 'Drama ve Empatiyle Zorbalığa Karşı Kalıcı Çözüm', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Tamamlandı', '2026', 'İstanbul / Üsküdar', 3, '{"asamalar": "<p>Akran zorbalığına karşı kalıcı davranış değişikliği yaratacak bilimsel ve uygulamalı bir modelle müdahale edilmiştir.</p>", "etkinlikler": "<ul><li><strong>Pilot Uygulama:</strong> Üsküdar ilçesinde 10 hafta süresince uygulanmıştır.</li></ul>", "gorevAlanlar": "<p>Proje Koordinatörümüz: <strong>Av. Fatma Doydu Aksu</strong></p>", "iletisim": "<p>Proje hakkında detaylar:</p><ul><li><a href=\\"https://www.instagram.com/p/DVtT5sPDJ-4/\\" target=\\"_blank\\">Akran Nezaketi Gönderisi</a></li></ul>"}', NOW(), NOW()),
(4, 'Genç Bir Hal Ustadan Gence Zirveye Yolculuk', 'İlham Veren Liderlerle Geleceğin Rotasını Çizmek', 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Devam Ediyor', '2025-2026', 'İstanbul Geneli', 4, '{"asamalar": "<p>Vizyon sahibi isimleri gençlerle buluşturarak onların ufkunu genişletmek ve motivasyonlarını ateşlemek amacıyla tasarlanmıştır.</p>", "etkinlikler": "<ul><li><strong>İlker Astarcı:</strong> Türkiye Ulusal Ajansı Başkanı söyleşisi.</li></ul>", "gorevAlanlar": "<p>Gençlik Komisyonu Başkanımız <strong>Merve Şivetoğlu</strong> ve ekibi tarafından organize edilmiştir.</p>", "iletisim": "<p>Bağlantılar:</p><ul><li><a href=\\"https://www.instagram.com/p/DUL7CYUjJ47/\\" target=\\"_blank\\">Genç Bir Hal Gönderisi</a></li></ul>"}', NOW(), NOW()),
(5, 'Ben’den Biz’e: Ailede Birlik Yolculuğu', 'Uluslararası Bir Köprü: Diasporadan Anavatana Aile Değerleri', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Tamamlandı', '01 Kasım 2025', 'Duisburg, Almanya', 5, '{"asamalar": "<p>Uluslararası düzeyde aile içi iletişimi güçlendiren bir farkındalık hareketidir.</p>", "etkinlikler": "<ul><li><strong>Etkinlik:</strong> Duisburg kenti DİTİB Yıldırım Beyazıt Camii’nde düzenlendi.</li></ul>", "gorevAlanlar": "<p>YÜZAG Genel Başkanımız <strong>Güleser Topuz</strong> ve UEYM Genel Başkanı <strong>Kübra Hülya Arıcı Sorrentino</strong>.</p>", "iletisim": "<p>Bağlantılar:</p><ul><li><a href=\\"https://www.instagram.com/reel/DQkY9LJDPbq/\\" target=\\"_blank\\">Ailede Birlik Yolculuğu Video</a></li></ul>"}', NOW(), NOW()),
(6, 'Ramazan Sofrasında Umut ve İlham', 'Kardeşlik Sofrasında 191 Yüreğe Dokunmak', 'https://images.unsplash.com/photo-1541804245600-080838848a60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Tamamlandı', 'Ramazan Ayı', 'İstanbul Geneli', 6, '{"asamalar": "<p>Dezavantajlı ve parçalanmış aile yapısına sahip bireyleri gönüllülerle bir araya getirmiştir.</p>", "etkinlikler": "<ul><li><strong>Destekler:</strong> Ailelere nevresim takımları ve alışveriş kartları verilmiştir. 191 kardeşimiz katılmıştır.</li></ul>", "gorevAlanlar": "<p>Genel Başkanımız <strong>Güleser Topuz</strong> ve <strong>Av. Fatma Doydu Aksu</strong> koordinasyonunda gerçekleşmiştir.</p>", "iletisim": "<p>Bağlantılar:</p><ul><li><a href=\\"https://www.instagram.com/reel/DVV2QNvjDEe/\\" target=\\"_blank\\">İftar Buluşması Video</a></li></ul>"}', NOW(), NOW()),
(7, 'Nesiller Arası Köprü: Bir Aile – Bir Çınar', 'Geçmişin bilgeliği ile geleceğin heyecanını aynı sofrada buluşturuyoruz.', 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Devam Ediyor', '2026', 'Darülaceze / İstanbul', 7, '{"asamalar": "<p>Yaşlılarımızı birer “deneyim aktarıcısı” konumuna yükselten özgün bir sosyal inovasyon modelidir.</p>", "etkinlikler": "<ul><li><strong>1. Buluşma:</strong> Okmeydanı Yerleşkesi çay-simit toplantısı.</li></ul>", "gorevAlanlar": "<p>Genel Başkanımız <strong>Güleser Topuz</strong> himayesinde, Aile Komisyonu Başkanımız <strong>Esma Budak</strong> liderliğinde.</p>", "iletisim": "<p>Bağlantılar:</p><ul><li><a href=\\"https://www.instagram.com/p/DW4bdZQjBE0/\\" target=\\"_blank\\">Bir Aile Bir Çınar 1</a></li></ul>"}', NOW(), NOW()),
(8, 'Geniş Aile: Köklerden Geleceğe', 'Hafıza, Kimlik ve Gelecek', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Tamamlandı', 'Aralık 2025 – Temmuz 2026', 'Türkiye / Avrupa Diasporası', 8, '{"asamalar": "<p>Geniş aileyi bir aidiyet kaynağı olarak yeniden tanımlamayı hedefleyen uygulamadır.</p>", "etkinlikler": "<ul><li><strong>1. Aşama:</strong> Afiş Yarışması.</li></ul>", "gorevAlanlar": "<p>Genel Başkan: <strong>Güleser Topuz</strong>. Proje Koordinatörü: <strong>Av. Fatma Doydu Aksu</strong>.</p>", "iletisim": "<p>Bağlantılar:</p><ul><li><a href=\\"https://www.instagram.com/p/DXtTeRfjOPQ/\\" target=\\"_blank\\">Geniş Aile Gönderisi</a></li></ul>"}', NOW(), NOW()),
(9, 'Anneye Nefes', 'Tükenmiş Annelere, Kimsesizlere Psiko-Sosyal Bir Soluk', 'https://images.unsplash.com/photo-1544027993-37db48d5f0b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Devam Ediyor', '2026', 'İstanbul', 9, '{"asamalar": "<p>Engelli veya yaşlı yakınına evde bakım veren annelerimize psiko-sosyal destek alanları açmaktadır.</p>", "etkinlikler": "<ul><li>Semiha Şakir Huzurevi Ziyareti ve Zihinsel Engelliler Gündüz Hizmet Merkezi desteği.</li></ul>", "gorevAlanlar": "<p>Genel Başkanımız <strong>Güleser Topuz</strong> ve <strong>Esma Budak</strong> öncülüğünde.</p>", "iletisim": "<p>Bağlantılar:</p><ul><li><a href=\\"https://www.instagram.com/reel/DYNMCTqs8ll/\\" target=\\"_blank\\">Anneye Nefes Video</a></li></ul>"}', NOW(), NOW()),
(10, 'Fatih\'te Zarafet ve Etik Rüzgârı', 'Mahremiyet ve Nezaket Modeli', 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Tamamlandı', '11 Aralık 2025', 'Fatih / İstanbul', 10, '{"asamalar": "<p>Mahremiyet alanlarını kapsayan yoğun bir müfredatla yapılandırılmıştır.</p>", "etkinlikler": "<ul><li>Fatih Muallim Naci İlkokulu’nda 4 hafta boyunca uygulanmıştır.</li></ul>", "gorevAlanlar": "<p>İçerik tasarımı <strong>Esma Budak</strong>’a aittir.</p>", "iletisim": "<p>Bağlantılar:</p><ul><li><a href=\\"https://www.instagram.com/p/DZvcigKjKcO/\\" target=\\"_blank\\">Zarafet ve Etik Gönderisi</a></li></ul>"}', NOW(), NOW());

-- 3. ANNOUNCEMENTS TABLOSU
DROP TABLE IF EXISTS `announcements`;
CREATE TABLE `announcements` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `short_desc` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT 0,
  `content` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `announcements` (`id`, `title`, `short_desc`, `image`, `status`, `date`, `location`, `sort_order`, `created_at`, `updated_at`) VALUES
(101, 'Yaz Kampı Kayıtları Başladı', 'Gençlik Gelişim Akademisi kapsamında düzenleyeceğimiz yaz kampı kayıtları tüm hızıyla devam ediyor. Kontenjan dolmadan yerinizi alın.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Yeni', '20 Temmuz 2026', 'Kocaeli / Aytepe', 1, NOW(), NOW()),
(102, 'Aylık Gönüllü Toplantısı', 'Aylık olağan gönüllü istişare ve değerlendirme toplantımız bu hafta sonu dernek merkezimizde gerçekleştirilecektir.', 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Yakında', '25 Temmuz 2026', 'Dernek Merkezi', 2, NOW(), NOW()),
(103, 'Köy Okulları İçin Kitap Kampanyası', 'Köy okullarına kütüphane kurmak için başlattığımız kitap toplama kampanyasına siz de destek olabilirsiniz.', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Devam Ediyor', 'Ağustos 2026', 'Tüm Türkiye', 3, NOW(), NOW());

-- 4. BANNERS TABLOSU
DROP TABLE IF EXISTS `banners`;
CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sort_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. VOLUNTEERS TABLOSU
DROP TABLE IF EXISTS `volunteers`;
CREATE TABLE `volunteers` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT 'gonullu',
  `city` varchar(255) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. CONTACT_MESSAGES TABLOSU
DROP TABLE IF EXISTS `contact_messages`;
CREATE TABLE `contact_messages` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

COMMIT;
SET FOREIGN_KEY_CHECKS=1;
