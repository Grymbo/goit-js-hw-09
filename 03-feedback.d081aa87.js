var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,l.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=l);var r=l("5uEKZ");l("kEUo3");const n=document.querySelector(".feedback-form");let o=document.querySelector('input[type="email"]'),u=document.querySelector('textarea[name="message"]');let d=(0,r.load)("feedback-form-state");null!=d&&(o.defaultValue=d.email,u.defaultValue=d.message),n.addEventListener("submit",(e=>{e.preventDefault(),o=o.value||d.email,u=u.value||d.message,o.length>=1&&u.length>=1&&(d={email:o,message:u},(0,r.save)("feedback-form-state",d)),n.reset()}));
//# sourceMappingURL=03-feedback.d081aa87.js.map