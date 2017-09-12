# sslWithUntrustedCA

Demo connecting to untrusted https site using their CA root cert

Run with:

```
npm install
node index.html
```

Downloaded root cert with command:

```
curl -k --remote-name https://www.cacert.org/certs/root.crt
```

