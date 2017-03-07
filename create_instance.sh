#!/bin/sh

aws ec2 run-instances --image-id ami-1bfdb67c --count 1 --instance-type t2.micro --key-name my_mac_public --security-group-ids "sg-e2cb5885" --user-data "$(cat target_install.sh)"
