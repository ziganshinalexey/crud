#!/bin/bash

if [ ! -f /usr/bin/deployer ]; then
  rm /tmp/install.sh
  wget https://deployer.userstory.ru/install.sh -O /tmp/install.sh && bash /tmp/install.sh
fi

/usr/bin/deployer
