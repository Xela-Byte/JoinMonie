let currencyCode = currencyLists.sort(function (a, b) {
  if (a.currency_code === null) {
    a.currency_code = "NGN";
  }
  if (b.currency_code === null) {
    b.currency_code = "NGN";
  }
  var textA = a.currency_code.toUpperCase();
  var textB = b.currency_code.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
});

let currencyCodeList = Object.values(
  currencyCode.reduce((r, o) => {
    if (!r[o.currency_code] || r[o.currency_code].country === o.country) {
      r[o.currency_code] = o;
    }
    return r;
  }, {})
);
