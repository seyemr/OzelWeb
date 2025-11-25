# 🔧 Firebase "Şifremi Unuttum" Hata Giderme

## ❌ Hata: "Şifre sıfırlama emaili gönderilemedi"

### 🔍 Kontrol Edilecek Noktalar:

## 1. Firebase Console Ayarları

### **Authentication → Sign-in method:**
1. https://console.firebase.google.com → Projenizi seçin
2. **Authentication** → **Sign-in method** 
3. **Email/Password** provider'ın **Enabled** olduğunu kontrol edin
4. **Email/Password** üzerine tıklayıp:
   - ✅ Email/Password: **Enabled**
   - ✅ Email link (passwordless sign-in): **Enabled** (opsiyonel)

### **Authentication → Settings → Authorized domains:**
1. **Authentication** → **Settings** → **Authorized domains**
2. Aşağıdaki domain'lerin listede olduğunu kontrol edin:
   - ✅ `localhost` 
   - ✅ `goreneller-8b95c.firebaseapp.com`
   - ✅ Sitenizin gerçek domain'i (varsa)

### **Authentication → Templates → Password reset:**
1. **Authentication** → **Templates**
2. **Password reset** seçin
3. Email şablonunun aktif olduğunu kontrol edin

## 2. Browser Console Kontrolü

### **Network Tab:**
1. Browser'da F12 → Network tab
2. "Şifremi Unuttum" butonuna bas
3. Firebase API çağrılarını kontrol et:
   - ✅ `identitytoolkit.googleapis.com` çağrıları var mı?
   - ❌ Herhangi bir 400/403/500 hatası var mı?

### **Console Tab:**
1. F12 → Console tab
2. "Şifremi Unuttum" butonuna bas
3. Console'da detaylı hata mesajlarını kontrol et

## 3. Geçici Çözümler

### **Test Email Adresi Kullan:**
```
test@example.com
admin@goreneller.com  
```

### **Firebase Console'dan Manuel Test:**
1. Firebase Console → Authentication → Users
2. Kullanıcıyı seçin → **Send password reset email**
3. Manuel olarak çalışıyor mu kontrol edin

### **API Key Kontrolü:**
```javascript
// Browser console'da çalıştırın:
console.log('Firebase Config:', firebase.auth().app.options)
```

## 4. Yaygın Hatalar ve Çözümleri

### **Error: auth/missing-email**
- **Sebep:** Email adresi boş
- **Çözüm:** Email input validation ekle

### **Error: auth/invalid-email**  
- **Sebep:** Geçersiz email formatı
- **Çözüm:** Email format kontrolü

### **Error: auth/user-not-found**
- **Sebep:** Email Firebase'de kayıtlı değil
- **Çözüm:** Önce Firebase Console'dan kullanıcı oluştur

### **Error: auth/too-many-requests**
- **Sebep:** Çok fazla deneme
- **Çözüm:** 15 dakika bekle

### **Error: auth/unauthorized-domain**
- **Sebep:** Domain authorized domains'de yok
- **Çözüm:** Firebase Console → Settings → Authorized domains → Domain ekle

## 5. Test Adımları

### **Admin Paneli Test:**
1. Admin linkine tıkla → Login
2. Admin panelinde **Firebase Debug Panel** görüyorsan test et
3. Test email gir → "Firebase Testlerini Çalıştır"
4. Console'da detaylı hata mesajlarını kontrol et

### **Manuel Firebase Test:**
```javascript
// Browser console'da:
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './config/firebase'

sendPasswordResetEmail(auth, 'test@example.com')
  .then(() => console.log('✅ Email sent'))
  .catch(error => console.error('❌ Error:', error))
```

## 6. Firebase Proje Ayarları

### **API Restrictions:**
1. Google Cloud Console → APIs & Services
2. Firebase Auth API'nin enabled olduğunu kontrol edin
3. API key restrictions varsa kaldırın (geçici)

### **Billing:**
Firebase Free plan'da email limit'i var mı kontrol edin.

## 🚨 Acil Çözüm

Eğer hiçbiri çalışmıyorsa:

1. **Yeni Firebase projesi oluştur**
2. **API key'i yenile** 
3. **Email/Password provider'ı yeniden aktif et**
4. **Test kullanıcısı oluştur**
