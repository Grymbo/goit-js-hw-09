!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var l=a("jzQFI");a("1WSnx");var r=document.querySelector(".feedback-form"),o=document.querySelector('input[type="email"]'),u=document.querySelector('textarea[name="message"]'),i="feedback-form-state",d=(0,l.load)(i);null!=d&&(o.defaultValue=d.email,u.defaultValue=d.message),r.addEventListener("submit",(function(e){e.preventDefault(),o=o.value||d.email,u=u.value||d.message,o.length>=1&&u.length>=1&&(d={email:o,message:u},(0,l.save)(i,d)),r.reset()}))}();
//# sourceMappingURL=03-feedback.8b58c95e.js.map