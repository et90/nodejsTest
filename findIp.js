var arp = require('node-arp');
arp.getMAC('192.168.0.1', function(err, mac) {
  console.log(mac); // адрес MAC устройства с IP-адресом 192.168.0.1
});
/*
arp.table(function(err, table) {
  console.log(table); // таблица со всеми устройствами в локальной сети и их IP-адресами
});
*/



/*


var arp = require('node-arp');
 
arp.getMAC('192.168.0.1', function(err, mac) {
    if (!err) {
        console.log(mac);
    }
});
*/
/*
var arp = require('arp-a')
  , tbl = { ipaddrs: {}, ifnames : {} }
  ;

arp.table(function(err, entry) {
  if (!!err) return console.log('arp: ' + err.message);
  if (!entry) return;

  tbl.ipaddrs[entry.ip] = entry.mac;
  if (!tbl.ifnames[entry.ifname]) tbl.ifnames[entry.ifname] = {};
  tbl.ifnames[entry.ifname][entry.mac] = entry.ip;
});

*/