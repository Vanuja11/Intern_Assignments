#!/bin/bash

ping google.com
nslookup google.com
netstat -tuln

# -t: Show TCP connections.
# -u: Show UDP connections.
# -l: Show listening sockets.
# -n: Show numerical addresses (do not resolve names).