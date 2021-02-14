"use strict"

export { Email };

//klasa build tworzy klase email na podstawie tego co zagregował builder
interface EmailInterface {
    from: string,
    to: string[],
    cc?: string[],
    bcc?: string[],
    title: string,
    html: string
}

class Email implements EmailInterface {
    from: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    title: string;
    html: string;

    constructor(from: string, to: string[], title: string, html: string, cc?: string[], bcc?: string[]) {
        this.from = from;
        this.to = to;
        this.cc = cc;
        this.bcc = bcc;
        this.title = title;
        this.html = html;
    }
}