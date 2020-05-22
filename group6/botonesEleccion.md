
HTML - BOTON INGRESAR
<a class="button" href="#">INGRESAR</a>

CSS - BOTON INGRESAR
.button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #010008;
    border-radius: 100px;
    background: #ffdd00;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffdd00), to(#ccac2b));
    background: -moz-linear-gradient(top, #ffdd00, #ccac2b);
    background: linear-gradient(to bottom, #ffdd00, #ccac2b);
    -webkit-box-shadow: #ffffff 0px 0px 40px 0px;
    -moz-box-shadow: #ffffff 0px 0px 40px 0px;
    box-shadow: #ffffff 0px 0px 40px 0px;
    text-shadow: #000000 1px 1px 1px;
    font: normal normal bold 24px arial;
    color: #1625ad;
    text-decoration: none;
}
.button:hover,
.button:focus {
    border: 1px solid #050028;
    background: #ffff00;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffff00), to(#f5ce34));
    background: -moz-linear-gradient(top, #ffff00, #f5ce34);
    background: linear-gradient(to bottom, #ffff00, #f5ce34);
    color: #1625ad;
    text-decoration: none;
}
.button:active {
    background: #998500;
    background: -webkit-gradient(linear, left top, left bottom, from(#998500), to(#ccac2b));
    background: -moz-linear-gradient(top, #998500, #ccac2b);
    background: linear-gradient(to bottom, #998500, #ccac2b);
}
.button:before{
    content:  "\0000a0";
    display: inline-block;
    height: 24px;
    width: 24px;
    line-height: 24px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD6UlEQVRIiY2Vz2sdVRTHPzNzZ9705XeqfQkGtTGx0boQceHChbrpQly4kGajriqI/0DXgmJRQV2oKAVBFH9ARVRQjIsuXBSlUClUTWls8aWxCX15L8l7M/eni5lJ5k2ePw5czr0zc7/fM+d77rke4PP/bfLo0SMvDQ/V0UqjtEZrjVaa1mab9Y2b1e/PejmB/Qei8nMLzH3/3WfLDz5wP5ubHdqbbdrtNu3NNme++IoPPjpT3f+eqIBRIhw0RyuNMRbnHM4BDsAbFNjepn8xC0zVYaHYpKRCa4M1FucKIlf+XufeArYg8Eujuo4ehS8n4V4AqSRKKYzRWGvzYbDWUQbOifryu/tb1fXjt4zPPj8af1OHBSUVSkq01hhtSJIeGzfWUDKlAm4Byhr05a68rtVDjh8+dCeXVz5st1pIqVBKk6QJ7c2bKKWwbt8fAFjhw/AsLEYVZB/wfNAwXguhdkDw7Hxj/NvT73D5thka0w222q1cdIOzdhABQsDwiZGRNx85dix2WmPTFJcmBCYlMAnCpsTCEgaGIPJ40m3x9csn6bxwkigKUEqhVaZHhcACVgCEQcDQwYM4pbBJgid7BLpHoAWBDhC6izAJwpOIWHOcv/j8/RfpPnGC+lAdpbPSLee+8D6Asxbd6aA7HWx3G9IdPNnF1z0C00PYhNAlRCKlVkuJR+GZmZShs5+y2ryeaWBNtYL2RHbGoNbXcVrhW4VPCi7FcwkBKYFLECIlDBPCuoc31oCRSZ6+Y4y3fzvH6sx9GGMGiwxgdnbYWFrC9yCuQRwDNQgKX4dwFMJY4E1M4U1Mw9itNFXEsr/FRBii9T6CvRRBdth9H4IAgsIHWRWIGogD4I2Mw9ghmJim6Y/x+u89GvPz2cHTeqDIfa3C98DzMiLfz4h8AUEEfhzB0BjeyCRNE/PaxRZTc3NIqZBSFlW0L03CAhdgdQMi4SDSEEqIHIT5/LFhZg5HNagN8Wfi8+pKi+n5u0lTSZqmSCkHgWdlqmHtY7gHAJOPpO/M3b7U4NKsH4hm13LqmmTqyEIGnBNYY+n20n3gu1UEyBJgtUVLgGbX8NyPK5/MPHzXYpIkaK1RUnJ9bZ2fL/yaXGuudUoYu82u2ov8Ad6/uoN+66ftN35Yc6ef6nYXe72Y9Y0W585f1CvXVrfzIPra9G6KKoAinxfeB0ZfucK7y4k7Bcysrt3g/C+X7JWrTemc0/yHFVdmARoBcckLoJ5HI8kK7SGXqaRLkRdpqdofZYI4Byt8PScqGq0mA06AbmmU07PPyhoUEZUvoagUQPFe5iSS/rYw8Pr1YN81OUiHgrDcyKqiFhh9878BCnExU63hg1MAAAAASUVORK5CYII=") no-repeat left center transparent;
    background-size: 100% 100%;
}


HTML - BOTON VOTAR
<a class="button" href="#">VOTAR</a>
CSS - BOTON VOTAR
.button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #010008;
    border-radius: 100px;
    background: #ffdd00;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffdd00), to(#ccac2b));
    background: -moz-linear-gradient(top, #ffdd00, #ccac2b);
    background: linear-gradient(to bottom, #ffdd00, #ccac2b);
    -webkit-box-shadow: #ffffff 0px 0px 40px 0px;
    -moz-box-shadow: #ffffff 0px 0px 40px 0px;
    box-shadow: #ffffff 0px 0px 40px 0px;
    text-shadow: #000000 1px 1px 1px;
    font: normal normal bold 24px arial;
    color: #1625ad;
    text-decoration: none;
}
.button:hover,
.button:focus {
    border: 1px solid #050028;
    background: #ffff00;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffff00), to(#f5ce34));
    background: -moz-linear-gradient(top, #ffff00, #f5ce34);
    background: linear-gradient(to bottom, #ffff00, #f5ce34);
    color: #1625ad;
    text-decoration: none;
}
.button:active {
    background: #998500;
    background: -webkit-gradient(linear, left top, left bottom, from(#998500), to(#ccac2b));
    background: -moz-linear-gradient(top, #998500, #ccac2b);
    background: linear-gradient(to bottom, #998500, #ccac2b);
}
.button:before{
    content:  "\0000a0";
    display: inline-block;
    height: 24px;
    width: 24px;
    line-height: 24px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABsUlEQVRIibWVsU7cQBCGv1kZhwohYfoUUTq61PR0IPIYSAha2CIyVFFAPACIijegQLwAVR4gCi+AFkSBUizSTYqzfWN7Deh0N9JJn3bGM/7/210L4Jhj1M1HA/nRLLirwM2SpQI72RU+bgLHgjwggFaZihWQhnURuAtlvksi6gFNrPq4pHALbIQyf0o9ZGPlICKOa8CHMv/dzdv/YMT4pX4AZ6HMQzeX4sfjHNBd4HTFx6xb03r7wsdvwBdVuTJNSHArQvnpD3AjsDOkwBWHrxnwE9h7PFqoc0M/eqycANuFj5/t+sQi0R3gNpT53/dsSXE4yv8BB8Avu54ZNVsC66s+lkNWTCKxtXo8jnqAE5Hx9vvwo/IWJywC0KqFasOi9FhMTZKTFtnmrSXtsa0Z5GpIM0BFGqFWsCrPwAXoi0iVVc2A7yLytVtfcbP9M5tQVUQErS0Zd9wLZX5J+0pxhY/nqnrfrdeJRY7WQRu0qC3Z8KhXNKVFp4WPa8CLWa4t6tVPY9EysJ+yIlU/tUUt9bPcRUMH6s1jZixyNlFLreVPy7Tvq/l+9O1lN7dBc/3o/wdtMw8i/0XCuwAAAABJRU5ErkJggg==") no-repeat left center transparent;
    background-size: 100% 100%;
}


HTML - BOTON Blanco

<a class="button" href="#">BLANCO</a>


CSS - BOTON Blanco

.button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #010008;
    border-radius: 100px;
    background: #ffffff;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#ffffff));
    background: -moz-linear-gradient(top, #ffffff, #ffffff);
    background: linear-gradient(to bottom, #ffffff, #ffffff);
    -webkit-box-shadow: #ffffff 0px 0px 40px 0px;
    -moz-box-shadow: #ffffff 0px 0px 40px 0px;
    box-shadow: #ffffff 0px 0px 40px 0px;
    text-shadow: #000000 1px 1px 1px;
    font: normal normal bold 24px arial;
    color: #00010a;
    text-decoration: none;
}
.button:hover,
.button:focus {
    border: 1px solid #050028;
    color: #00010a;
    text-decoration: none;
}
.button:active {
    background: #999999;
    background: -webkit-gradient(linear, left top, left bottom, from(#999999), to(#ffffff));
    background: -moz-linear-gradient(top, #999999, #ffffff);
    background: linear-gradient(to bottom, #999999, #ffffff);
}
.button:before{
    content:  "\0000a0";
    display: inline-block;
    height: 24px;
    width: 24px;
    line-height: 24px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEUlEQVRIia2WT0sbQRjGn9ndbBJJJMqiNdbU1FpCDVhz6MEP0JNnKT22lDl4LEI9eCit0EsPpb0MvfolCl6sp5RSJAjpoaBBaUKyBGJCjLuTmV7cJZNsmv7xhYVl39nnN887s+8OMCIYYzcYY4lR44YF8W4sy0oBeATgZGdnx06lUtSyrIcTExMJx3HQbrfPSqXSrm3b7ymlP/8asLS0VNzY2MhMT09jdXUVlmUBADRNAyEEUkoIIVAsFuuHh4dvLy4uPlBKz4e4jgG4Syn95gOy2axcX1/H5uYmXNeFruswDAOGYYAQgm63C845AIBzjkKhcFYsFl92u91dSmnnSjgRCoUer6ysbEkpz3O53JLRS15cXESn0wEhBJqmBVp2XReccywvL9/MZDIfj4+P3+3v758QQoxEInFnYWFBi0QiyOfzewCgAKampiCE8EsipVTEvWdCCLTbbQBAOp0eC4fD96SU4Jz7+Vqt9kMBhEIhjI2NgXMOwzB8MSmlAhRC+BcACCHgui4A+CUVQqBSqRwrANM0/aQQYmD2vQ48UH94710BqwqAEAJCiD+ov0T94kEAL3+1Gc4H1qBXJMhB/5ignOcEAFcAnHNwzpUS9Qr9iQPvvasdGFEAnU4HjuMo4kEz9PK/K5FpmgAwOQBoNpsDDoIERjkwDAPRaPSWApBSolqtIpPJQAiBcrmMRqNxpmlaRdf18XA4fHtmZsbo36ZBAACYm5vLDABKpRJs20Y+n/8SiUSeUUoLXp4xljBN88n8/PzzZDKZJIQMAHpdxmKxB0BPs0un0zKXy0FKiYODgze1Wm0rSIAxNhmNRjdnZ2dfJJNJpaWYpol4PI5Wq4Wjo6PXa2tr24qDy8tL1Ov1wJl5QSmtA9hijLFyubxtWdZ6PB6P6boO13XRbDY/n56evqKUqr2odwGHfQN9oBMATxljGwCyAMYBfO//VyiAYYs3AtQB8HVYXunJw/b3/4QP+FcHo0IpUaVSgeM4AHBtFN+B67p7jUYDrVYLAD5dF6D3VKEBuA+gYtv2H58aRsUv9tE6WKsDXSEAAAAASUVORK5CYII=") no-repeat left center transparent;
    background-size: 100% 100%;
}



HTML - BOTON NULO
<a class="button" href="#">NULO</a>


CSS - BOTON NULO

.button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #010008;
    border-radius: 100px;
    background: #ffffff;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#ffffff));
    background: -moz-linear-gradient(top, #ffffff, #ffffff);
    background: linear-gradient(to bottom, #ffffff, #ffffff);
    -webkit-box-shadow: #ffffff 0px 0px 40px 0px;
    -moz-box-shadow: #ffffff 0px 0px 40px 0px;
    box-shadow: #ffffff 0px 0px 40px 0px;
    text-shadow: #000000 1px 1px 1px;
    font: normal normal bold 24px arial;
    color: #00010a;
    text-decoration: none;
}
.button:hover,
.button:focus {
    border: 1px solid #050028;
    color: #00010a;
    text-decoration: none;
}
.button:active {
    background: #999999;
    background: -webkit-gradient(linear, left top, left bottom, from(#999999), to(#ffffff));
    background: -moz-linear-gradient(top, #999999, #ffffff);
    background: linear-gradient(to bottom, #999999, #ffffff);
}
.button:before{
    content:  "\0000a0";
    display: inline-block;
    height: 16px;
    width: 16px;
    line-height: 16px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABgklEQVQ4jYWTv0vDUBSFv2JARBBEqIIOgi4uDq7+DYLdRZMlHfyLnstLdnfHjg6SIS4uoqGiUKWFotbG/rgOvS8ENXrgwIXH+Tj3PR6UJOALyD+25UzNDUPwAesZw18aN5sA0bxIUKtpvA9+H2TUasmntdKHSufGuHnWpAN+ByRvtcTpw1rpQKUHxrjZ0gZ5NUa6JydS1pu10oZKvxojbRAvB6ZAL44ZAatRBMCi7zMBnoPg17uYAjngDYHx7BIZKmRDIUsKefwF4jJFg1wPOnHMGNhUyLLvMwWyb5CiQQ70k6QAADwpZFshK9rktgRxGS/XOmUAwIOus6OQuja5UYjLeENgpPt8V6aQXYWsaZPrICgylQ2c7nSdPYWsK6R3eUkOzDXgvpskjc0w5CVJmMAP99KU9yxj4/AQgNFgwNXpKROI5s4hPYD7lyRpbIUhzxWQbprylmUs1Otc7O8zgegIguIzGTgG4p0wrFhmppuzM4Ao1M9UKx86yJ8EiJpQvOcX/f4ekaF205AAAAAASUVORK5CYII=") no-repeat left center transparent;
    background-size: 100% 100%;
}





HTML - BOTON NO
<a class="button" href="#">NO</a>

CSS - BOTON NO
.button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #010008;
    border-radius: 100px;
    background: #ffffff;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#ffffff));
    background: -moz-linear-gradient(top, #ffffff, #ffffff);
    background: linear-gradient(to bottom, #ffffff, #ffffff);
    -webkit-box-shadow: #ffffff 0px 0px 40px 0px;
    -moz-box-shadow: #ffffff 0px 0px 40px 0px;
    box-shadow: #ffffff 0px 0px 40px 0px;
    text-shadow: #000000 1px 1px 1px;
    font: normal normal bold 24px arial;
    color: #00010a;
    text-decoration: none;
}
.button:hover,
.button:focus {
    border: 1px solid #050028;
    color: #00010a;
    text-decoration: none;
}
.button:active {
    background: #999999;
    background: -webkit-gradient(linear, left top, left bottom, from(#999999), to(#ffffff));
    background: -moz-linear-gradient(top, #999999, #ffffff);
    background: linear-gradient(to bottom, #999999, #ffffff);
}
.button:before{
    content:  "\0000a0";
    display: inline-block;
    height: 22px;
    width: 22px;
    line-height: 22px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEeklEQVQ4jbXUX0xTdxQH8O+5tzY/pID8KS3Y9hazB2QmqDCJAZ80uAdNxqIJLUZNVx2bIWYPe/HNBx8XYhyZOmbGIm02FxMxEf8gmL04RTYeJixqpeVPpcSCFWivpfeePchlKMz4sl9ycn8v95PfOef3O8TM+D+WZGwuEUkBonM/CzETJDrxvkCA6FRAkmaCRN9fIlrywMzoA0ydwJWeqqpXkZMnuUtRUp1AKzPjXdEJtF0uLEwN793LXUVFqU7gSh9gYubXJ34GnLNVVX38YWOjWZ6bQ5XPJ3IUpTlI1PqOk7atLSrybamvF6YXL1CxY4fItVrro8C5pVJIOTmN5V6vWZ+ehhaLgaemUH34sMhVlOYA0enV0OziYt/WPXuEFgphIRSCFo1iQ3W1kGT50yWYZ2e/HQ4G0yarFaaCAnAiAUxNofrQIbFOUY4Gic4sR3Psdl91Q4PgcBgcj2NNaSlkpxN/37un6prWCgBk3IogUVvhli3+zV6vWR8dhR6PQ87JAdls6O/oUBORSLsESBaHw1fd0CC0x4+xMD4Oys8HOZ14cOOGqsbjZ73MX70BG3hBZaVva1OT0MNh8PQ05NxcwGbD/Y4OFQC27d8v9FAImYkJUH4+eP169F+7pqZisbOeRXQFvIRv2uSramoSGB2FvojLdjugadDCYWQmJoC8POglJXjQ1aXOPnt23st8fLmzAjbw/IoK/0cHDpgpEgFPT0Natw60sIDM+DhgNkOz2XCvu1udn5xs9zC3vG2sChtNKigv928/eNDM4TA4FgNHo2AhILnd+K27W009f97euAoKAKZVVQASoGfm53VkMuD5eeiPHkEGwFlZABGIGbTs5a7y/8oVJDpjcbn82/1+kR4cRPruXZDdDi4sRCYahRYKoWb3bpFVUOALEH23mrGiFAGi0xar9ei2ffsEDw9Df/IEa9xumBQFJEnQQiEsTEyASkqgu1zov3VLTc7M/ORh/vw/4SBRa3ZxcfPmujrBQ0PAzAzMZWUglwu/37ypSpKEmvp6wSMjWBgbg1RaCna5MHD7djKZSAQ8zEdWwAGi1myrtbmytlZoDx8C8TjMbjfksjL09/SoqUTiAgBd5OX5ty3i6UgEssMBVhT80denqonERQ9wBMYQChKdyLZamzfV1Ij04CAysRhkhwN4nWoymUhcaGQ+1sjckkok2u9fv67qDgdkpxOvRkagPX2Kyro6ISyWA0Hgm3+bJ0lff1BZKbSxMaQNVFEw0NubTL58+aOH+ZiRooe5JTk7e/5BT4+ql5bC5HbjVSgEfXIS5bW1gmW5eQlmXb/8dGBAlRwOmCsqQIqCP+/cUVNvocbyMh9X5+bODvT2qprdjjUbN4JsNoSHhlRo2i8A3hj0V68WF6ce7trFly2WVABoe49B3/prVlbqr507+ZrTmeoErhqDfql5J4nMG4AfZEn6RNX19s+AU3j9gEyLmRmhL4vMeaBlLdGXOnPXReCLm0DyDZiIjNIYmPmtr/FKdQCZxUgv22cAZJhZB4B/AKgCWIzAxgcyAAAAAElFTkSuQmCC") no-repeat left center transparent;
    background-size: 100% 100%;
}





HTML - BOTON SI
<a class="button" href="#">SI</a>

CSS - BOTON SI
.button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #010008;
    border-radius: 100px;
    background: #ffffff;
    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#ffffff));
    background: -moz-linear-gradient(top, #ffffff, #ffffff);
    background: linear-gradient(to bottom, #ffffff, #ffffff);
    -webkit-box-shadow: #ffffff 0px 0px 40px 0px;
    -moz-box-shadow: #ffffff 0px 0px 40px 0px;
    box-shadow: #ffffff 0px 0px 40px 0px;
    text-shadow: #000000 1px 1px 1px;
    font: normal normal bold 24px arial;
    color: #00010a;
    text-decoration: none;
}
.button:hover,
.button:focus {
    border: 1px solid #050028;
    color: #00010a;
    text-decoration: none;
}
.button:active {
    background: #999999;
    background: -webkit-gradient(linear, left top, left bottom, from(#999999), to(#ffffff));
    background: -moz-linear-gradient(top, #999999, #ffffff);
    background: linear-gradient(to bottom, #999999, #ffffff);
}
.button:before{
    content:  "\0000a0";
    display: inline-block;
    height: 24px;
    width: 24px;
    line-height: 24px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEMUlEQVRIia1WXUwcVRT+ZvaPmt1ltrtZrI6wQCkE2BVaoLCQvojFBDUS40PtgzGtkGJttCaY+BNjSIwaH/RBq4mJWFJt5KW1L62JtpoYkaCVam2gTZMGygIBMmH/Z+6c68Pu7M4uS9sY7+TL/Wb2nDtnvnvuOSvg/xpHILbXtB/mnNP0yPQXxmPrXdxEAFSCbxoBb6Cjt7X3Y845ll5furLw7sIUAFhMznyLxUUAQhHnZu4YdvgHuge+l32yd5tjm7XcWf7IbMXsaW1KS1qyhsgamwHTvDU/DFt/Z/9EsDq4W+c6dK5Dckoeu9UenKuY+9aSjea/4RCErmDXaLgp/BwXOHTSQZygcx0+ybdT1VXBWiSFeb7THogAqK6y7smOxo4REgikE3j2AgAucOyp2RMv3OShrFyf52QzFtvE3a+4d4WD4a/KHGWipmv5xTnAwaEltO9W/1z90BwVyT65M1QdehODmfutYB22Ove17JvwerxuVVehkgqNNGi6BpVUpNPpm8pt5dDE2xPMkAiOFx3+cDD8jbfcKyfSiSs3cONMSWkGIbY3tp8IPBgI5SLnPPcFXOep1FrqwMnBk6sAxMwnvwBrz8M947JfrixzlIltTW1fuo+7d5kkEQ3eEGg42ljT+CwjlotaIy3HExuJV8cOjk0b9iKGgNaG1tH6QH2vYeiVvFJnc+cEBuE0S+N/zd8Tqg+9L4gCNNJgyKPqGaTiqa8XJxc/M/tYqh6vGtjbvPcjm80mGHmskw63y10hiMJDkarIWfwObh+2P9DV2nXBU+6RiBMYsUxKUsaHqeyf6M3owPl3zqswHURL7VO1I/L9cquRv4YDcYLklkLJVHJdqVNm2oJtZ+QdcrPZxgBjLJZaSe0/d+zcYlbS3EG0rFSvXHQ5XU+4nC5/sSNEwOV0PQoBLfW19fsJ+YgTWgLL8WXMR+cxf3v++cljkz+ixGEUAIju4+6G8O7wL55yj1SQFdmZeCaJiBOUtIJILAIlrWRs4vzT6KnoS6mZlJHaRmIQANECQEj/ml6NN8Xntnu2PyOKoqBzHYyznFTECWvJNVxbv4ZbG7cQ02JgnIGl2ZT6t3oweSHJiqUxeK4WxapjsyTSfZJH6ubgIKKcFFfXruK6ch1xLQ5GLAONrdMS9SVPJFdKSWPAqKYcM+BKrfKz1W7tdrlc1YwzLEQXcHn5MpS0UrixpBMpdED7QJtEYanfxAUUFjlYjlj8webgb8u0XBmJR1ByxPEeRvFG6R8Lh1mzfEk4ik748BNssG/yUHEJs+jDaaj38gJzR8u3wyksoAXrsKEfHPlzqWEJK+jDGBRs0d2K+dYdrRnTEFAFK1qyL2HYwNP4BH/hXjpdcRaZkOm/f4AjiB8g4jGI2IEE3sI4xpEElfC5EwoainGfr6JD2ImXcQpdBf9A7tqQDP4v3CZ+TWvwjEEAAAAASUVORK5CYII=") no-repeat left center transparent;
    background-size: 100% 100%;
}