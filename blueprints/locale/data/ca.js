'use strict;'
module.exports = {"locale":"ca","pluralRuleFunction":function (n) {var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;n=Math.floor(n);if(i===1&&v===0)return"one";return"other";},"fields":{"era":{"displayName":"era"},"year":{"displayName":"any","relative":{"0":"enguany","1":"l'any que ve","-1":"l'any passat"},"relativeTime":{"future":{"one":"D'aquí a {0} any","other":"D'aquí a {0} anys"},"past":{"one":"Fa {0} any","other":"Fa {0} anys"}}},"month":{"displayName":"mes","relative":{"0":"aquest mes","1":"el mes que ve","-1":"el mes passat"},"relativeTime":{"future":{"one":"D'aquí a {0} mes","other":"D'aquí a {0} mesos"},"past":{"one":"Fa {0} mes","other":"Fa {0} mesos"}}},"week":{"displayName":"setmana","relative":{"0":"aquesta setmana","1":"la setmana que ve","-1":"la setmana passada"},"relativeTime":{"future":{"one":"D'aquí a {0} setmana","other":"D'aquí a {0} setmanes"},"past":{"one":"Fa {0} setmana","other":"Fa {0} setmanes"}}},"day":{"displayName":"dia","relative":{"0":"avui","1":"demà","2":"demà passat","-2":"abans-d'ahir","-1":"ahir"},"relativeTime":{"future":{"one":"D'aquí a {0} dia","other":"D'aquí a {0} dies"},"past":{"one":"Fa {0} dia","other":"Fa {0} dies"}}},"weekday":{"displayName":"dia de la setmana"},"dayperiod":{"displayName":"a. m.\u002Fp. m."},"hour":{"displayName":"hora","relativeTime":{"future":{"one":"D'aquí a {0} hora","other":"D'aquí a {0} hores"},"past":{"one":"Fa {0} hora","other":"Fa {0} hores"}}},"minute":{"displayName":"minut","relativeTime":{"future":{"one":"D'aquí a {0} minut","other":"D'aquí a {0} minuts"},"past":{"one":"Fa {0} minut","other":"Fa {0} minuts"}}},"second":{"displayName":"segon","relative":{"0":"ara"},"relativeTime":{"future":{"one":"D'aquí a {0} segon","other":"D'aquí a {0} segons"},"past":{"one":"Fa {0} segon","other":"Fa {0} segons"}}},"zone":{"displayName":"zona"},"sun":{"relative":{"0":"aquest diumenge","1":"diumenge que ve","-1":"diumenge passat"}},"mon":{"relative":{"0":"aquest dilluns","1":"dilluns que ve","-1":"dilluns passat"}},"tue":{"relative":{"0":"aquest dimarts","1":"dimarts que ve","-1":"dimarts passat"}},"wed":{"relative":{"0":"aquest dimecres","1":"dimecres que ve","-1":"dimecres passat"}},"thu":{"relative":{"0":"aquest dijous","1":"dijous que ve","-1":"dijous passat"}},"fri":{"relative":{"0":"aquest divendres","1":"divendres que ve","-1":"divendres passat"}},"sat":{"relative":{"0":"aquest dissabte","1":"dissabte que ve","-1":"dissabte passat"}}}};