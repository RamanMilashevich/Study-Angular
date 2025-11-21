import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-html-angular-sanitazer',
  imports: [],
  templateUrl: './html-angular-sanitazer.html',
  styleUrl: './html-angular-sanitazer.css'
})
export class HtmlAngularSanitazer {
  sanitizer = inject(DomSanitizer)

  UNSAFE_html: string = `
    <p>Hello from UNSAFE HTML</p>
    <img src="x" onerror="alert('HACKED')">
    <a href="javascript:alert('bad')">Click me</a>
  `;

  // 2️⃣ Safe HTML created by your system — trusted manually
  trustedHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`
    <strong style="color: green;">This is trusted HTML</strong>
  `);

  // 3️⃣ ❗ Worst-case: trusting arbitrary user input (example of what NOT to do)
  userProvidedHtml: string = `<img src="x" onerror="alert('HACKED AGAIN')">`;
  dangerouslyTrustedHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(
    this.userProvidedHtml
  );
//   Если ваш проект:
  // принимает HTML из формы,
  // загружает HTML из API,
  // показывает HTML из базы данных,
  // отображает HTML-комментарии,
  // НИКОГДА не делайте:
  // bypassSecurityTrustHtml(userInput)

  // 4️⃣ Iframe example (Angular blocks resource URLs unless trusted)

  videoUrl: string = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  safeVideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.videoUrl
  );
}
