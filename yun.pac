function FindProxyForURL(url, host)
{
    if (host == "www.mydomain.com") {
        return "DIRECT";
    }
    
    return "PROXY myproxy:80; PROXY myotherproxy:8080; DIRECT";
}
