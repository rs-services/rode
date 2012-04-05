new Element("script", {src: "/jquery-1.6.4.js", type: "text/javascript"});

/*
tags needed on server
netdiag:role=(lb|app|db)
netdiag:connects_to=(internet|lb|app|db)
*/

/*
set the account id
*/
var account_id=prompt("acct_id");
var deployment_id=prompt("deployment_id");
/*
queries the deployment and returns all the servers
*/

var Servers=Array.new();
var servers_json=jQuery.ajax("/api/acct/" account_id + "/deployments/" + deployment_id + "/servers", {
	method:'post',
	headers: {"X-API-VERSION": "1.5", "Accept": "application/json, text/x-json"},
	username: '',
	password: ''};);
Servers = jQuery.parseJSON(servers_json);




