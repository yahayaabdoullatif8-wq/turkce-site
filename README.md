# Türkçe Dil Bilgisi Alıştırmaları

Statik web sitesi (HTML + CSS + JavaScript). Kurulum veya derleme gerekmez.

## Dosyalar
- `index.html` : ana sayfa
- `css/style.css` : tasarım
- `js/data.js` : tüm sorular (Ünite 1–6)
- `js/app.js` : uygulama mantığı

## Bilgisayarda deneme
VS Code'da klasörü aç, `index.html` dosyasına sağ tıkla, "Open with Live Server" seç
(Live Server eklentisi gerekir). Ya da `index.html` dosyasını tarayıcıda doğrudan aç.

## Render'a yükleme (ücretsiz, her internetten erişim)
1. GitHub'da yeni bir depo (repository) oluştur ve bu klasörün tüm içeriğini yükle.
2. https://render.com adresinde hesap aç, **New +** > **Static Site** seç.
3. GitHub deposunu bağla.
4. Ayarlar: **Build Command** boş bırak, **Publish Directory** = `.` (nokta).
5. **Create Static Site** düğmesine bas. Birkaç dakika sonra `https://....onrender.com` adresin hazır.

## Soru eklemek
`js/data.js` içinde her soru şu biçimdedir:
`"Cümle {doğru|yanlış1|yanlış2|yanlış3} devam."`
İlk seçenek her zaman doğru cevaptır; ekranda otomatik karıştırılır.
