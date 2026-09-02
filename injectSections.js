function injectSections() {
-    if(document.getElementById('custom-projects-section')) return;
+    if (document.getElementById('custom-projects-section')) return;
 
     let announcementSlidesHTML = announcementsData.map(a => createSlideHTML(a, 'announcement')).join('');
     const announcementsHTML = `
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.