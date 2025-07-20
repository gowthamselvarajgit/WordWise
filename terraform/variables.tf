# General
variable "region" {
  description = "AWS region to deploy resources"
  type        = string
}

variable "project_name" {
  description = "Name of the project to prefix resources"
  type        = string
}

# EC2
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
}

variable "ami_id" {
  description = "AMI ID for EC2 instance"
  type        = string
}

variable "key_name" {
  description = "Key pair name for EC2 SSH access"
  type        = string
}

# VPC and Subnets
variable "vpc_cidr_block" {
  description = "CIDR block for the VPC"
  type        = string
}

variable "public_subnet_cidr" {
  description = "CIDR blocks for public subnets"
  type        = list(string)
}

variable "private_subnet_cidr" {
  description = "CIDR blocks for private subnets"
  type        = list(string)
}

# Security Group CIDRs (used in existing SGs)
variable "ssh_ingress_cidr" {
  description = "CIDR block allowed to access EC2 over SSH"
  type        = string
}

variable "http_ingress_cidr" {
  description = "CIDR block allowed to access EC2 over HTTP"
  type        = string
}

variable "mysql_ingress_cidr" {
  description = "CIDR block allowed to access MySQL on RDS"
  type        = string
}

# RDS (Database)
variable "db_name" {
  description = "The name of the database to create"
  type        = string
}

variable "db_username" {
  description = "Username for the RDS instance"
  type        = string
}

variable "db_password" {
  description = "Password for the RDS instance"
  type        = string
  sensitive   = true
}

variable "db_engine" {
  description = "The database engine to use"
  type        = string
  default     = "mysql"
}

variable "db_engine_version" {
  description = "The version of the database engine"
  type        = string
  default     = "8.0"
}

variable "db_instance_class" {
  description = "The instance type of the RDS instance"
  type        = string
  default     = "db.t3.micro"
}

variable "db_allocated_storage" {
  description = "The allocated storage (in GB)"
  type        = number
  default     = 20
}

variable "db_subnet_group_name" {
  description = "The subnet group for RDS"
  type        = string
}

variable "db_security_group_id" {
  description = "The security group ID for RDS"
  type        = string
}
