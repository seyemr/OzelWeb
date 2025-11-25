# 🔐 Şifremi Unuttum Özelliği - Kullanım Kılavuzu

## ✅ Eklenen Özellikler

### 1. **AuthContext'e Password Reset Fonksiyonu**
- `sendPasswordResetEmail` Firebase Auth fonksiyonu entegre edildi
- Türkçe hata mesajları eklendi
- Güvenlik kontrolleri yapılıyor

### 2. **LoginPage'e "Şifremi Unuttum" Özelliği**
- Modern ve kullanıcı dostu arayüz
- Email validation
- Başarı/hata mesajları
- Otomatik form sıfırlama

## 🚀 Nasıl Kullanılır?

### **Kullanıcı Tarafı:**
1. **Admin linkine tıklayın** (Header veya Footer'da)
2. **"Şifremi unuttum" linkine tıklayın** (Login formunun altında)
3. **Email adresinizi girin** ve "Şifre Sıfırlama Linki Gönder" butonuna basın
4. **Email'inizi kontrol edin** - Firebase'den gelen şifre sıfırlama linkine tıklayın
5. **Yeni şifrenizi belirleyin** ve kaydedin
6. **Yeni şifrenizle giriş yapın**

### **Admin Tarafı:**
- Herhangi bir ek ayar gerekmez
- Firebase Auth otomatik olarak email gönderir
- Email şablonu Firebase Console'dan özelleştirilebilir

## 🔧 Teknik Detaylar

### **Firebase Ayarları:**
- Email/Password provider aktif olmalı
- Email şablonları Firebase Console → Authentication → Templates'den özelleştirilebilir
- Domain whitelist'inde siteniz olmalı

### **Güvenlik Özellikleri:**
- ✅ **Rate limiting**: Çok fazla denemeye karşı koruma
- ✅ **Email validation**: Geçersiz email kontrolü
- ✅ **Error handling**: Kullanıcı dostu Türkçe hata mesajları
- ✅ **User feedback**: Başarı durumunda anlık geri bildirim
- ✅ **Auto redirect**: Email gönderildikten sonra otomatik yönlendirme

### **Hata Kodları ve Mesajları:**
- `auth/user-not-found`: "Bu email adresi ile kayıtlı kullanıcı bulunamadı."
- `auth/invalid-email`: "Geçersiz email adresi."
- `auth/too-many-requests`: "Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin."

## 🎨 UI/UX Özellikleri

### **Modern Tasarım:**
- Gradient arkaplan
- Yumuşak geçişler ve animasyonlar
- Responsive tasarım
- Loading states
- Icon'lar (Lucide React)

### **Kullanıcı Deneyimi:**
- Tek tıkla şifre sıfırlama
- Anlık başarı mesajı
- 3 saniye sonra otomatik login sayfasına dönüş
- Temiz ve sezgisel form tasarımı

## 📧 Email Şablonu Özelleştirme

Firebase Console'dan email şablonunu Türkçe yapabilirsiniz:

1. **Firebase Console** → **Authentication** → **Templates**
2. **Password reset** seçin
3. **Türkçe şablon örneği:**

```
Konu: Göreneller - Şifre Sıfırlama

Merhaba,

Göreneller Admin Paneli için şifre sıfırlama talebinde bulundunuz.

Aşağıdaki linke tıklayarak yeni şifrenizi belirleyebilirsiniz:
%LINK%

Bu link 1 saat geçerlidir.

Eğer bu talebi siz yapmadıysanız, bu emaili görmezden gelebilirsiniz.

Saygılarımızla,
Göreneller Özel Eğitim Merkezi
```

## 🧪 Test Senaryoları

### **Başarılı Durumlar:**
- ✅ Geçerli email ile şifre sıfırlama
- ✅ Email gönderildi mesajı
- ✅ Firebase email'in geldiği
- ✅ Şifre sıfırlamadan sonra login

### **Hata Durumları:**
- ❌ Geçersiz email formatı
- ❌ Kayıtlı olmayan email
- ❌ Çok fazla deneme
- ❌ Network hatası

## 🔒 Güvenlik Notları

- **Sadmin admin kullanıcıları** şifre sıfırlayabilir
- **Firebase Security Rules** aktif
- **Email verification** opsiyonel olarak eklenebilir
- **Rate limiting** Firebase tarafından otomatik
