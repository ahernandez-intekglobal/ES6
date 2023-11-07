function log(v) {
    if (v) { console.log('ok'); }
    else { console.log('no'); }
}

log(true);      // ok
log(false);     // no
log('true');    // ok
log('false');   // ok
log({});        // ok
log([]);        // ok
log(NaN);       // no
log(0);         // no
log(1);         // ok
log(undefined); // no
log(null);      // no