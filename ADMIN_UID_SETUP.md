# Admin UID Kurulum Rehberi

## 📋 Adım Adım Kurulum

### 1. Admin Hesabı Oluşturma
1. Uygulamanızı açın: http://localhost:5173/
2. Header veya Footer'daki **"Yönetim"** butonuna tıklayın
3. Login sayfasında **"Hesap Oluşturun"** linkine tıklayın
4. Admin hesabınızı oluşturun:
   - **Email**: admin@goreneller.com (veya istediğiniz email)
   - **Şifre**: Güçlü bir şifre seçin
   - **İsim**: Admin Kullanıcı

### 2. UID Alma
1. Hesap oluşturduktan sonra Login sayfasına yönlendirilirsiniz
2. Az önce oluşturduğunuz hesapla **giriş yapın**
3. Login sayfasının en altında **"Admin UID Göster"** butonuna tıklayın
4. Açılan pencerede:
   - Göz ikonu ile UID'yi göster
   - **"UID'yi Kopyala"** butonuna tıklayın

### 3. UID'yi Kaydetme
1. Kopyaladığınız UID'yi `src/contexts/AuthContext.tsx` dosyasına kaydedin
2. **42. satırda** bulunan:
   ```typescript
   const ADMIN_UID = 'YOUR_ADMIN_UID_HERE'
   ```
   satırını bulun
3. `'YOUR_ADMIN_UID_HERE'` kısmını kopyaladığınız gerçek UID ile değiştirin

### 4. Uygulamayı Yeniden Başlatma
1. Terminal'de `Ctrl+C` ile dev server'ı durdurun
2. `npm run dev` ile yeniden başlatın
3. Artık sadece belirttiğiniz UID'ye sahip kullanıcı admin paneline erişebilir!

## 🔒 Güvenlik Özellikleri

### UID Kontrolü
- Sadece belirtilen UID'ye sahip kullanıcı admin paneline erişebilir
- Email kontrolü de yedek güvenlik olarak devam eder
- Diğer kullanıcılar admin panelini göremez

### Çift Katmanlı Güvenlik
```typescript
// AuthContext.tsx'te otomatik kontrol
const isAdminByUID = firebaseUser.uid === ADMIN_UID
const isAdminByEmail = firebaseUser.email === ADMIN_EMAIL
const userRole = (isAdminByUID || isAdminByEmail) ? 'admin' : 'user'
```

## ⚙️ Özelleştirme

### Birden Fazla Admin
Birden fazla admin kullanıcısı için UID listesi kullanabilirsiniz:

```typescript
const ADMIN_UIDS = [
  'admin-uid-1',
  'admin-uid-2', 
  'admin-uid-3'
]

const isAdminByUID = ADMIN_UIDS.includes(firebaseUser.uid)
```

### Sadece UID Kontrolü
Sadece UID kontrolü yapmak isterseniz email kontrolünü kaldırabilirsiniz:

```typescript
const userRole = firebaseUser.uid === ADMIN_UID ? 'admin' : 'user'
```

## 🧪 Test Etme

1. Admin hesabınızla giriş yapın → Admin paneli görülmeli
2. Başka bir hesap oluşturun → Admin paneli görülmemeli  
3. UID kontrolü çalışıyor mu kontrol edin

## 🚨 Önemli Notlar

- UID'yi kimseyle paylaşmayın - Bu admin erişimi sağlar
- UID'yi güvenli bir yerde saklayın
- Test aşamasından sonra gereksiz hesapları silebilirsiniz
- Production'da mutlaka güçlü şifreler kullanın
