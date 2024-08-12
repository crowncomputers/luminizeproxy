function FindProxyForURL(url, host)
{
//
//Exclude FTP from proxy
//
if (url.substring(0, 4) == "ftp:")
{
return "DIRECT";
}
//
//Bypass proxy for internal hosts
//

if (isInNet(host, "0.0.0.0", "255.0.0.0")||
isInNet(host, "10.0.0.0", "255.0.0.0") ||
isInNet(host, "127.0.0.0", "255.0.0.0") ||
isInNet(host, "169.254.0.0", "255.255.0.0") ||
isInNet(host, "172.16.0.0", "255.240.0.0") ||
isInNet(host, "192.168.0.0", "255.255.0.0"))
{
return "DIRECT";
}

//
//Bypass proxy for this server
//
if (dnsDomainIs(host, "mail.google.com") ||
dnsDomainIs(host, "chat.google.com") ||
dnsDomainIs(host, "meet.google.com") ||
dnsDomainIs(host, "accounts.google.com") ||
dnsDomainIs(host, "www.gstatic.com") ||
dnsDomainIs(host, "ssl.gstatic.com") ||
dnsDomainIs(host, "fonts.gstatic.com")
)
{
return "DIRECT";
}

return "PROXY 192.168.60.155:3128";
}
