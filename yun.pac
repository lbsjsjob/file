function FindProxyForURL(url, host)
{
    if (host == "music.163.com") {
        return "PROXY http://lbsjsjob.6655.la:1688; DIRECT";
    }
    
    return "DIRECT";
}
