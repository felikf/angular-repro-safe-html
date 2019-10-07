import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'dbs-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  description: SafeHtml;
  docUrl: SafeUrl;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.description = this.sanitizer.sanitize(SecurityContext.HTML, '<strong>Whatever</strong> HTML that comes from the server.');
    this.docUrl = this.sanitizer.bypassSecurityTrustUrl('https://owasp.com');
  }

}
