# Admin Paneli Kurulum Talimatları

## Adım 1: Admin UID'nizi Alın

1. **Web sitesinde Admin linkine tıklayın** (Header'da veya Footer'da)
2. **Mevcut Firebase hesabınızla giriş yapın**
3. **"UID Göster" butonuna basın** (login sayfasının altında)
4. **Görünen UID'yi kopyalayın**

## Adım 2: Admin UID'yi Ayarlayın

1. `src/contexts/NewAuthContext.tsx` dosyasını açın
2. 35. satırdaki `ADMIN_UID` değerini bulun:
   ```typescript
   const ADMIN_UID = 'YOUR_ADMIN_UID_HERE'
   ```
3. `'YOUR_ADMIN_UID_HERE'` yerine gerçek UID'nizi yazın:
   ```typescript
   const ADMIN_UID = 'abc123def456ghi789'  // Sizin gerçek UID'niz
   ```
4. Dosyayı kaydedin

## Adım 3: Test Edin

1. Sayfayı yenileyin
2. Admin linkine tekrar tıklayın
3. Aynı hesapla giriş yapın
4. Artık admin paneline erişebilmelisiniz!

## Alternatif: Email ile Admin Kontrolü

UID yerine email ile kontrol yapmak isterseniz, `ADMIN_EMAIL` değişkenini güncelleyin:

```typescript
const ADMIN_EMAIL = 'your-admin@email.com'  // Sizin admin email'iniz
```

## Güvenlik Notları

- ✅ Artık sadece kayıt oluşturma kapatıldı - sadece mevcut hesaplarla giriş
- ✅ Admin paneline sadece belirlediğiniz UID/email ile erişim
- ✅ Firebase Console'dan manuel kullanıcı yönetimi gerekiyor
