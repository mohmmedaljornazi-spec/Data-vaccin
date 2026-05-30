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
