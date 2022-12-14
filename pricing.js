var currency = "USD";
$.get("https://ipinfo.io?token=3acf870d175398", function() {}, "jsonp").always(function(resp) {
  var countryCode = (resp && resp.country) ? resp.country : "us";
  var countries = {"AX" : "EUR", "AL" : "EUR", "AD" : "EUR", "AU" : "AUD", "AT" : "EUR", "PT" : "EUR", "BE" : "EUR", "BG" : "EUR", "CA" : "CAD", "ES" : "EUR", "XC" : "EUR", "CK" : "NZD", "HR" : "EUR", "CY" : "EUR", "GB" : "GBP", "EE" : "EUR", "EP" : "EUR", "FI" : "EUR", "FR" : "EUR", "GF" : "EUR", "DE" : "EUR", "GR" : "EUR", "GP" : "EUR", "GG" : "GBP", "NL" : "EUR", "IE" : "EUR", "IT" : "EUR", "JE" : "GBP", "KI" : "AUD", "KV" : "EUR", "LV" : "EUR", "LT" : "EUR", "LU" : "EUR", "MK" : "EUR", "MT" : "EUR", "MQ" : "EUR", "YT" : "EUR", "XL" : "EUR", "MC" : "EUR", "ME" : "EUR", "NZ" : "NZD", "NF" : "AUD", "RE" : "EUR", "SM" : "EUR", "RS" : "EUR", "SK" : "EUR", "SI" : "EUR", "BL" : "EUR", "TV" : "AUD", "VA" : "EUR"};
  if(typeof countries[countryCode] !== 'undefined') {
    currency = countries[countryCode];
    $('#selected-currency').text('Pricing in ' + currency);
    $('#' + currency).hide();
    $('select').change();
  }
});
const pricing = {
  "USD": {
    "symbol": "$",
    "pricing": {"email": 65, "campaigns": 1000, "basic": {"10" : 49, "15" : 100, "20" : 124, "25" : 150, "30" : 199, "40" : 225, "50" : 249, "60" : 283, "70" : 315, "80" : 347, "90" : 378, "100" : 409, "110" : 440, "120" : 471, "130" : 502, "140" : 532, "150" : 563, "160" : 593, "170" : 623, "180" : 654, "190" : 684, "200" : 714}, "pro": {"10" : 99, "15" : 124, "20" : 149, "25" : 199, "30" : 224, "40" : 249, "50" : 299, "60" : 360, "70" : 420, "80" : 480, "90" : 540, "100" : 600, "110" : 660, "120" : 720, "130" : 780, "140" : 840, "150" : 900, "160" : 960, "170" : 1020, "180" : 1080, "190" : 1140, "200" : 1200}, "plus": {"10" : 164, "15" : 214, "20" : 264, "25" : 339, "30" : 389, "40" : 459, "50" : 555, "60" : 662, "70" : 768, "80" : 874, "90" : 980, "100" : 1085, "110" : 1191, "120" : 1297, "130" : 1403, "140" : 1509, "150" : 1615, "160" : 1920, "170" : 2040, "180" : 2160, "190" : 2280, "200" : 2400}}
  },
  "GBP": {
    "symbol": "??",
    "pricing": {"email": 52, "campaigns": 800, "basic": {"10" : 40, "15" : 80, "20" : 100, "25" : 120, "30" : 160, "40" : 180, "50" : 200, "60" : 227, "70" : 252, "80" : 278, "90" : 303, "100" : 327, "110" : 352, "120" : 377, "130" : 401, "140" : 426, "150" : 450, "160" : 475, "170" : 499, "180" : 523, "190" : 547, "200" : 572}, "pro": {"10" : 80, "15" : 100, "20" : 120, "25" : 160, "30" : 180, "40" : 200, "50" : 240, "60" : 288, "70" : 336, "80" : 384, "90" : 432, "100" : 480, "110" : 528, "120" : 576, "130" : 624, "140" : 672, "150" : 720, "160" : 768, "170" : 816, "180" : 864, "190" : 912, "200" : 960}, "plus": {"10" : 131, "15" : 171, "20" : 211, "25" : 271, "30" : 311, "40" : 368, "50" : 444, "60" : 530, "70" : 614, "80" : 699, "90" : 784, "100" : 868, "110" : 953, "120" : 1038, "130" : 1122, "140" : 1207, "150" : 1292, "160" : 1536, "170" : 1632, "180" : 1728, "190" : 1824, "200" : 1920}}
  },
  "EUR" : {
    "symbol" : "???",
    "pricing" : {"email": 65, "campaigns": 1000, "basic": {"10" : 49, "15" : 100, "20" : 124, "25" : 150, "30" : 199, "40" : 225, "50" : 249, "60" : 283, "70" : 315, "80" : 347, "90" : 378, "100" : 409, "110" : 440, "120" : 471, "130" : 502, "140" : 532, "150" : 563, "160" : 593, "170" : 623, "180" : 654, "190" : 684, "200" : 714}, "pro": {"10" : 99, "15" : 124, "20" : 149, "25" : 199, "30" : 224, "40" : 249, "50" : 299, "60" : 360, "70" : 420, "80" : 480, "90" : 540, "100" : 600, "110" : 660, "120" : 720, "130" : 780, "140" : 840, "150" : 900, "160" : 960, "170" : 1020, "180" : 1080, "190" : 1140, "200" : 1200}, "plus": {"10" : 164, "15" : 214, "20" : 264, "25" : 339, "30" : 389, "40" : 459, "50" : 555, "60" : 662, "70" : 768, "80" : 874, "90" : 980, "100" : 1085, "110" : 1191, "120" : 1297, "130" : 1403, "140" : 1509, "150" : 1615, "160" : 1920, "170" : 2040, "180" : 2160, "190" : 2280, "200" : 2400}}
  },
  "CAD" : {
    "symbol" : "CAD",
    "pricing" : {"email": 81, "campaigns": 1250, "basic": {"10" : 62, "15" : 124, "20" : 155, "25" : 187, "30" : 249, "40" : 281, "50" : 312, "60" : 354, "70" : 394, "80" : 433, "90" : 473, "100" : 511, "110" : 550, "120" : 588, "130" : 627, "140" : 665, "150" : 703, "160" : 741, "170" : 779, "180" : 817, "190" : 855, "200" : 893}, "pro": {"10" : 124, "15" : 155, "20" : 187, "25" : 249, "30" : 280, "40" : 312, "50" : 374, "60" : 450, "70" : 525, "80" : 600, "90" : 675, "100" : 750, "110" : 825, "120" : 900, "130" : 975, "140" : 1050, "150" : 1125, "160" : 1200, "170" : 1275, "180" : 1350, "190" : 1425, "200" : 1500}, "plus": {"10" : 204, "15" : 267, "20" : 329, "25" : 423, "30" : 486, "40" : 574, "50" : 694, "60" : 828, "70" : 960, "80" : 1092, "90" : 1224, "100" : 1357, "110" : 1489, "120" : 1621, "130" : 1754, "140" : 1886, "150" : 2018, "160" : 2400, "170" : 2550, "180" : 2700, "190" : 2850, "200" : 3000}}
  },
  "AUD" : {
    "symbol" : "A$",
    "pricing" : {"email": 90, "campaigns": 1400, "basic": {"10" : 69, "15" : 138, "20" : 173, "25" : 207, "30" : 277, "40" : 312, "50" : 346, "60" : 393, "70" : 438, "80" : 482, "90" : 525, "100" : 568, "110" : 611, "120" : 654, "130" : 696, "140" : 739, "150" : 781, "160" : 823, "170" : 866, "180" : 908, "190" : 950, "200" : 992}, "pro": {"10" : 138, "15" : 173, "20" : 207, "25" : 277, "30" : 312, "40" : 346, "50" : 416, "60" : 500, "70" : 584, "80" : 667, "90" : 750, "100" : 834, "110" : 917, "120" : 1000, "130" : 1084, "140" : 1167, "150" : 1250, "160" : 1334, "170" : 1417, "180" : 1500, "190" : 1584, "200" : 1667}, "plus": {"10" : 227, "15" : 297, "20" : 366, "25" : 470, "30" : 540, "40" : 638, "50" : 771, "60" : 919, "70" : 1066, "80" : 1213, "90" : 1360, "100" : 1507, "110" : 1654, "120" : 1801, "130" : 1948, "140" : 2095, "150" : 2242, "160" : 2667, "170" : 2834, "180" : 3000, "190" : 3167, "200" : 3334}}
  },
  "NZD" : {
    "symbol" : "NZ$",
    "pricing" : {"email": 99, "campaigns": 1500, "basic": {"10" : 76, "15" : 153, "20" : 191, "25" : 230, "30" : 307, "40" : 345, "50" : 384, "60" : 435, "70" : 485, "80" : 533, "90" : 582, "100" : 629, "110" : 677, "120" : 724, "130" : 771, "140" : 818, "150" : 865, "160" : 912, "170" : 959, "180" : 1005, "190" : 1052, "200" : 1099}, "pro": {"10" : 153, "15" : 191, "20" : 230, "25" : 307, "30" : 345, "40" : 384, "50" : 460, "60" : 554, "70" : 647, "80" : 739, "90" : 831, "100" : 924, "110" : 1016, "120" : 1108, "130" : 1200, "140" : 1293, "150" : 1385, "160" : 1477, "170" : 1570, "180" : 1662, "190" : 1754, "200" : 1847}, "plus": {"10" : 252, "15" : 328, "20" : 405, "25" : 521, "30" : 598, "40" : 707, "50" : 854, "60" : 1018, "70" : 1181, "80" : 1344, "90" : 1507, "100" : 1670, "110" : 1833, "120" : 1995, "130" : 2158, "140" : 2321, "150" : 2484, "160" : 2954, "170" : 3139, "180" : 3324, "190" : 3508, "200" : 3693}}
  }
};

$('.currency-dropown-link').click(function() {
  $('.currency-dropdown-menu').removeClass('w--open');
  $('#selected-currency').text('Pricing in ' + $(this).attr('id'));
  $('#' + currency).show();
  $(this).hide();
  currency = $(this).attr('id');
  $('select').change();
});

$('select').change(function () {
  let selected = $(this).val();
  $('select').not(this).each(function(){
    console.log(selected);
    $(this).val(selected);
    $(this).niceSelect('update');
  });
  $('#campaign-price').text(pricing[currency].symbol + pricing[currency].pricing.campaigns.toLocaleString());
  $('#email-price').text(pricing[currency].symbol + pricing[currency].pricing.email.toLocaleString());
  let ids = ['basic', 'pro', 'plus'];
  $(ids).each(function() {
    if(typeof pricing[currency].pricing[this][selected] !== 'undefined') {
      $('.addon-small-text').show();
      $('#' + this + '-price').text(pricing[currency].symbol + pricing[currency].pricing[this][selected].toLocaleString());
      $('#' + this + '-annual').text(pricing[currency].symbol + (pricing[currency].pricing[this][selected] * 12).toLocaleString() + ' (' + currency + ')');
    } else {
      $('.addon-small-text').hide();
      $('#' + this + '-price').text('POA');
    }}
  )});
