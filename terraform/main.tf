# VPC Module
module "vpc" {
  source              = "./module/vpc"
  project_name        = var.project_name
  vpc_cidr_block      = var.vpc_cidr_block
  public_subnet_cidr  = var.public_subnet_cidr
  private_subnet_cidr = var.private_subnet_cidr
}

# Security Group Module
module "security_group" {
  source             = "./module/security_group"
  project_name       = var.project_name
  vpc_id             = module.vpc.vpc_id
  ssh_ingress_cidr   = var.ssh_ingress_cidr
  http_ingress_cidr  = var.http_ingress_cidr
  mysql_ingress_cidr = var.mysql_ingress_cidr
}

# EC2 Module
module "ec2" {
  source            = "./module/ec2"
  instance_type     = var.instance_type
  ami_id            = var.ami_id
  subnet_id         = module.vpc.public_subnet_ids[0]
  key_name          = var.key_name
  project_name      = var.project_name
  security_group_id = module.security_group.security_group_id
}

# RDS DB Module
module "db" {
  source               = "./module/db"
  db_engine            = var.db_engine
  db_engine_version    = var.db_engine_version
  db_name              = var.db_name
  db_username          = var.db_username
  db_password          = var.db_password
  db_security_group_id = module.security_group.security_group_id
  db_subnet_group_name = module.vpc.db_subnet_group_name
}
