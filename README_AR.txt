# مشروع Data-Vacc جاهز للرفع على GitHub Pages

ارفع محتويات هذا المجلد مباشرة داخل المستودع، وليس ملف ZIP نفسه.

بعد الرفع فعّل GitHub Pages:
Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: /root → Save

الروابط بعد النشر:

1) تطبيق الهاتف / لوحة المدير:
https://moody92mohmmed-lang.github.io/Data-Vacc/

2) منصة رفع الموظفين:
https://moody92mohmmed-lang.github.io/Data-Vacc/upload.html

3) لوحة عرض اللابتوب:
https://moody92mohmmed-lang.github.io/Data-Vacc/desktop.html

محتويات المشروع:
- index.html: تطبيق الهاتف / لوحة المدير
- upload.html: منصة رفع الموظفين
- desktop.html: لوحة عرض اللابتوب
- viewer.html: صفحة عرض إضافية
- manifest.json: تثبيت التطبيق على الهاتف
- sw.js: Service Worker للتثبيت والتخزين والإشعارات
- icons/: أيقونات التطبيق
- docs/: أدلة الاستخدام
- assets/: ملفات مساعدة

ملاحظات:
- تأكد أن الملفات ظاهرة في الصفحة الرئيسية للمستودع، وليس داخل مجلد فرعي.
- إذا لم تعمل الروابط، ادخل Settings → Pages وتأكد أن Branch = main وFolder = /root.
- الإشعارات تحتاج إعداد Firebase/Cloud Messaging أو خدمة إرسال إشعارات من السيرفر.


تحديث الإشعارات:
- عند رفع ملف من upload.html أو desktop.html يتم تحديث مسار tatveem/notification في Firebase.
- تطبيق الهاتف index.html ولوحة اللابتوب desktop.html يستمعان لهذا المسار ويظهران إشعاراً محلياً إذا تم السماح بالإشعارات من المتصفح.
- يجب فتح التطبيق أو تثبيته والسماح بالإشعارات مرة واحدة على الهاتف واللابتوب.
- الإشعار والهاتف مغلق تماماً يحتاج Firebase Cloud Messaging + Cloud Functions. أما هذه النسخة فتدعم إشعارات المتصفح/PWA عندما يكون التطبيق مفتوحاً أو في الخلفية حسب دعم المتصفح.


==============================
تحديث التثبيت على الهاتف
==============================
- عند فتح تطبيق الهاتف من الرابط الرئيسي سيظهر شريط تثبيت في أسفل الشاشة.
- Android / Chrome: اضغط زر «تثبيت». إذا لم يظهر مربع التثبيت، افتح قائمة ⋮ ثم اختر Add to Home screen أو Install app.
- iPhone: افتح الرابط من Safari، اضغط زر المشاركة، ثم Add to Home Screen، ثم Add.
- التطبيق يستخدم manifest.json و sw.js حتى يعمل كتطبيق PWA من GitHub Pages.
