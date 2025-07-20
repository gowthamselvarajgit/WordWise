# AWS Region and EC2 Instance Configuration
region        = "ap-south-1"
instance_type = "t2.micro"
ami_id        = "ami-02f607855bfce66b6"
key_name      = "wordwise_key"

# VPC and Subnets
vpc_cidr_block      = "10.0.0.0/16"
public_subnet_cidr  = ["10.0.1.0/24", "10.0.2.0/24"]
private_subnet_cidr = ["10.0.3.0/24", "10.0.4.0/24"]

# Project Name
project_name = "word_wise"

# Ingress Rules for Security Groups
ssh_ingress_cidr   = "0.0.0.0/0"
http_ingress_cidr  = "0.0.0.0/0"
mysql_ingress_cidr = "10.0.0.0/16"

# RDS Configuration
db_name              = "wordwisedb"
db_username          = "admin"
db_password          = "gowtham@bit7"
db_engine            = "mysql"
db_engine_version    = "8.0"
db_instance_class    = "db.t3.micro"
db_allocated_storage = 20


