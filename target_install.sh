#!/bin/sh

# Install software
apt-get install -y mosh
apt-get -y install python-pip
pip install aws-shell

# tmux setting
echo "setw -g mode-keys vi" > ~/.tmux.conf